import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApp } from '../context'
import { getSpeciesDetails } from '../api/wikipedia'
import { getSpeciesPhotos } from '../api/inaturalist'
import { generateKidFacts, generateQuizQuestions, hasCuratedFacts } from '../api/quiz'
import QuizCard from '../components/QuizCard'

export default function AnimalDetailPage() {
  const { pageId } = useParams()
  const navigate = useNavigate()
  const { isLittle, ageMode } = useApp()

  const [details, setDetails] = useState(null)
  const [photos, setPhotos] = useState([])
  const [facts, setFacts] = useState([])
  const [quizQuestions, setQuizQuestions] = useState([])
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [quizDone, setQuizDone] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('about')

  useEffect(() => {
    loadDetails()
  }, [pageId])

  async function loadDetails() {
    setLoading(true)
    setActiveTab('about')
    setQuizIndex(0)
    setQuizScore(0)
    setQuizDone(false)

    try {
      const data = await getSpeciesDetails(pageId)
      setDetails(data)

      if (data) {
        setFacts(generateKidFacts(data))
        // Only generate quiz for species with verified curated facts
        if (hasCuratedFacts(data.title)) {
          setQuizQuestions(generateQuizQuestions(data, ageMode))
        } else {
          setQuizQuestions([])
        }

        // Load photos in parallel
        try {
          const photoData = await getSpeciesPhotos(data.title)
          setPhotos(photoData.photos || [])
        } catch {
          setPhotos([])
        }
      }
    } catch (e) {
      console.error('Failed to load details:', e)
    }
    setLoading(false)
  }

  function handleQuizAnswer(correct) {
    if (correct) setQuizScore((s) => s + 1)

    if (quizIndex + 1 >= quizQuestions.length) {
      setQuizDone(true)
    } else {
      setQuizIndex((i) => i + 1)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-16 animate-pulse">
        <span className="text-6xl animate-wiggle inline-block">🔬</span>
        <p className="text-xl font-bold text-jungle mt-4">Getting all the cool facts...</p>
      </div>
    )
  }

  if (!details) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">😔</div>
        <p className="text-xl font-bold text-jungle">Could not find this species.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-3 bg-jungle text-white font-bold rounded-full"
        >
          Go Back
        </button>
      </div>
    )
  }

  const paragraphs = (details.fullText || '')
    .split('\n')
    .filter((p) => p.trim().length > 20)
    .slice(0, isLittle ? 2 : 6)

  const tabs = [
    { id: 'about', label: '📖 About', emoji: '📖' },
    { id: 'facts', label: '⭐ Fun Facts', emoji: '⭐' },
    { id: 'photos', label: '📸 Photos', emoji: '📸' },
    ...(quizQuestions.length > 0 ? [{ id: 'quiz', label: '🧠 Quiz', emoji: '🧠' }] : []),
  ]

  return (
    <div className="animate-pop-in">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-5 py-2 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all font-bold text-jungle border-2 border-jungle-light"
      >
        ← Back
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-ocean-light/30">
        {/* Hero */}
        <div className="relative">
          {details.image ? (
            <img src={details.image} alt={details.title} className="w-full h-64 sm:h-80 object-cover" />
          ) : (
            <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-jungle-light to-ocean-light flex items-center justify-center">
              <span className="text-9xl">{details.typeEmoji || '🐾'}</span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <div className="flex items-center gap-3">
              <h1 className={`font-black text-white ${isLittle ? 'text-3xl' : 'text-2xl sm:text-3xl'}`} style={{ fontFamily: "'Fredoka One', cursive" }}>
                {details.title}
              </h1>
              {details.typeLabel && (
                <span className="bg-white/90 text-jungle text-sm font-bold px-3 py-1 rounded-full">
                  {details.typeEmoji} {details.typeLabel}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-gray-100 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-center font-bold transition-all whitespace-nowrap ${isLittle ? 'text-base px-4' : 'text-sm'} ${
                activeTab === tab.id
                  ? 'text-ocean border-b-3 border-ocean bg-ocean-light/10'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {isLittle ? tab.emoji : tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-6">
          {activeTab === 'about' && (
            <div className="animate-slide-up space-y-4">
              {paragraphs.map((para, i) => (
                <p key={i} className={`text-gray-600 leading-relaxed ${isLittle ? 'text-lg' : 'text-base'}`}>
                  {para}
                </p>
              ))}
              {details.wikiUrl && !isLittle && (
                <a
                  href={details.wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-gradient-to-r from-ocean to-ocean-light text-white font-bold rounded-full shadow hover:shadow-lg hover:scale-105 transition-all text-sm"
                >
                  📚 Read More on Wikipedia
                </a>
              )}
            </div>
          )}

          {activeTab === 'facts' && (
            <div className="animate-slide-up space-y-4">
              {facts.length > 0 ? (
                facts.map((fact, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 bg-gradient-to-r from-sunset-light/20 to-sunset/10 rounded-2xl border-2 border-sunset-light/30"
                  >
                    <span className="text-3xl flex-shrink-0">
                      {['🌟', '💡', '🔬', '🗺️', '🎯', '🧪'][i % 6]}
                    </span>
                    <p className={`text-gray-700 font-semibold leading-relaxed ${isLittle ? 'text-lg' : 'text-base'}`}>
                      {fact}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <span className="text-5xl">🔍</span>
                  <p className="text-gray-500 mt-2 font-semibold">We haven't added verified fun facts for this species yet.</p>
                  <p className="text-gray-400 mt-1 text-sm">Check the About tab for general info, or explore a different animal!</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="animate-slide-up">
              {photos.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {photos.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <img src={img.url} alt={`${details.title} photo ${i + 1}`} className="w-full h-40 object-cover" />
                    </div>
                  ))}
                </div>
              ) : details.image ? (
                <div className="text-center">
                  <img src={details.image} alt={details.title} className="max-w-md mx-auto rounded-2xl shadow-lg" />
                  <p className="text-gray-400 text-sm mt-4">Main photo. More might be on Wikipedia!</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <span className="text-5xl">📷</span>
                  <p className="text-gray-500 mt-2">No photos yet. You could draw what you think it looks like!</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="animate-slide-up">
              {quizDone ? (
                <div className="text-center py-8">
                  <div className="flex justify-center gap-2 mb-4">
                    {Array.from({ length: quizQuestions.length }, (_, i) => (
                      <span key={i} className={`text-3xl ${i < quizScore ? 'animate-sparkle' : 'opacity-20'}`}>⭐</span>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-jungle mb-2">
                    {quizScore}/{quizQuestions.length} correct!
                  </p>
                  <p className="text-gray-500 mb-4">
                    {quizScore === quizQuestions.length ? 'Perfect score! You really know this species!' : 'Great effort! You learned something new!'}
                  </p>
                  <button
                    onClick={() => { setQuizIndex(0); setQuizScore(0); setQuizDone(false) }}
                    className="px-6 py-3 bg-gradient-to-r from-sunset to-sunset-light text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    🔄 Try Again
                  </button>
                </div>
              ) : quizQuestions[quizIndex] ? (
                <div>
                  <p className="text-sm text-gray-400 mb-4 text-center">
                    Question {quizIndex + 1} of {quizQuestions.length}
                  </p>
                  <QuizCard
                    key={quizIndex}
                    question={quizQuestions[quizIndex]}
                    onAnswer={handleQuizAnswer}
                  />
                </div>
              ) : (
                <p className="text-center text-gray-500">No quiz questions available for this species.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
