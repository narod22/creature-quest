import { useState, useEffect } from 'react'
import { getSpeciesDetails, generateKidFacts } from '../api'

export default function AnimalDetail({ animal, onBack }) {
  const [details, setDetails] = useState(null)
  const [facts, setFacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('about')

  useEffect(() => {
    loadDetails()
  }, [animal.title])

  async function loadDetails() {
    setLoading(true)
    try {
      const data = await getSpeciesDetails(animal.title)
      setDetails(data)
      if (data) {
        setFacts(generateKidFacts(data))
      }
    } catch (e) {
      console.error('Failed to load details:', e)
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="text-center py-16 animate-pulse">
        <span className="text-6xl animate-wiggle inline-block">🔬</span>
        <p className="text-xl font-bold text-jungle mt-4">
          Getting all the cool facts...
        </p>
      </div>
    )
  }

  const displayImage = details?.image || animal.image
  const allImages = details?.additionalImages || []
  const fullText = details?.fullText || animal.summary || ''

  // Break full text into kid-friendly paragraphs
  const paragraphs = fullText
    .split('\n')
    .filter((p) => p.trim().length > 20)
    .slice(0, 6)

  return (
    <div className="animate-pop-in">
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-4 px-5 py-2 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all font-bold text-jungle border-2 border-jungle-light"
      >
        ← Back to Results
      </button>

      {/* Hero section */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-ocean-light/30">
        <div className="relative">
          {displayImage ? (
            <img
              src={displayImage}
              alt={animal.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          ) : (
            <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-jungle-light to-ocean-light flex items-center justify-center">
              <span className="text-9xl">🐾</span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: "'Fredoka One', cursive" }}>
              {animal.title}
            </h1>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b-2 border-gray-100">
          {[
            { id: 'about', label: '📖 About', emoji: '📖' },
            { id: 'facts', label: '⭐ Fun Facts', emoji: '⭐' },
            { id: 'photos', label: '📸 Photos', emoji: '📸' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-center font-bold transition-all text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'text-ocean border-b-3 border-ocean bg-ocean-light/10'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-6">
          {activeTab === 'about' && (
            <div className="animate-slide-up space-y-4">
              {paragraphs.length > 0 ? (
                paragraphs.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-base">
                    {para}
                  </p>
                ))
              ) : (
                <p className="text-gray-600 leading-relaxed text-base">
                  {animal.summary}
                </p>
              )}

              {animal.wikiUrl && (
                <a
                  href={animal.wikiUrl}
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
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="text-3xl flex-shrink-0">
                      {['🌟', '💡', '🔬', '🗺️', '🎯'][i % 5]}
                    </span>
                    <p className="text-gray-700 font-semibold text-base leading-relaxed">
                      {fact}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <span className="text-5xl">🔍</span>
                  <p className="text-gray-500 mt-2">
                    We're still learning about this creature! Check the "About" tab for more info.
                  </p>
                </div>
              )}

              <div className="mt-6 p-4 bg-jungle-light/10 rounded-2xl border-2 border-jungle-light/30">
                <p className="text-jungle font-bold text-center">
                  🧪 Did you know? Scientists discover about 18,000 new species every year!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="animate-slide-up">
              {allImages.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {allImages.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-ocean-light"
                    >
                      <img
                        src={img.url}
                        alt={`${animal.title} photo ${i + 1}`}
                        className="w-full h-40 object-cover"
                      />
                      <p className="text-xs text-gray-400 p-2 truncate">
                        {img.attribution}
                      </p>
                    </div>
                  ))}
                </div>
              ) : displayImage ? (
                <div className="text-center">
                  <img
                    src={displayImage}
                    alt={animal.title}
                    className="max-w-md mx-auto rounded-2xl shadow-lg"
                  />
                  <p className="text-gray-400 text-sm mt-4">
                    This is the main photo we found. More photos might be available on Wikipedia!
                  </p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <span className="text-5xl">📷</span>
                  <p className="text-gray-500 mt-2">
                    No photos yet, but you can draw what you think this creature looks like!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
