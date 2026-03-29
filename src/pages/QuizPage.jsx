import { useState, useEffect } from 'react'
import { useApp } from '../context'
import { browseByCategory } from '../api/wikipedia'
import { generateQuizQuestions, generateComparisonQuestions } from '../api/quiz'
import { CATEGORIES, shuffleArray } from '../api/helpers'
import QuizCard from '../components/QuizCard'
import QuizResults from '../components/QuizResults'
import LoadingAnimation from '../components/LoadingAnimation'

export default function QuizPage() {
  const { isLittle, ageMode } = useApp()
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    loadQuiz()
  }, [ageMode])

  async function loadQuiz() {
    setLoading(true)
    setCurrentIndex(0)
    setScore(0)
    setDone(false)

    try {
      // Pick 2-3 random categories and fetch species from them
      const randomCats = shuffleArray(CATEGORIES).slice(0, 3)
      const allSpecies = []

      for (const cat of randomCats) {
        try {
          const species = await browseByCategory(cat.label)
          allSpecies.push(...species.filter((s) => s.image && s.type !== 'unknown'))
        } catch {
          // continue
        }
        if (allSpecies.length >= 10) break
      }

      // Generate multiple questions per species + cross-species comparisons
      const quizSpecies = shuffleArray(allSpecies).slice(0, isLittle ? 5 : 10)
      const allQuestions = []

      // Per-species questions: take up to 2 per species (not just 1)
      for (const species of quizSpecies) {
        const qs = generateQuizQuestions(species, ageMode)
        if (qs.length > 0) {
          // Take 1-2 questions per species, shuffled so it's not always the same type
          const take = Math.min(qs.length, isLittle ? 1 : 2)
          allQuestions.push(...shuffleArray(qs).slice(0, take))
        }
      }

      // Cross-species comparison questions (the hard ones)
      if (!isLittle) {
        const comparisons = generateComparisonQuestions(quizSpecies, ageMode)
        allQuestions.push(...comparisons.slice(0, 4))
      }

      // Shuffle everything and cap at a good quiz length
      const maxQuestions = isLittle ? 5 : 12
      setQuestions(shuffleArray(allQuestions).slice(0, maxQuestions))
    } catch (e) {
      console.error('Failed to load quiz:', e)
      setQuestions([])
    }
    setLoading(false)
  }

  function handleAnswer(correct) {
    if (correct) setScore((s) => s + 1)

    if (currentIndex + 1 >= questions.length) {
      setDone(true)
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }

  if (loading) {
    return (
      <div>
        <h2 className={`text-center font-bold text-jungle font-['Fredoka_One'] mb-6 ${isLittle ? 'text-3xl' : 'text-2xl'}`}>
          {isLittle ? '⭐ Animal Quiz! ⭐' : '🧠 Animal Quiz Challenge'}
        </h2>
        <LoadingAnimation />
        <p className="text-center text-gray-500 mt-4">
          Finding animals to quiz you on...
        </p>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🤔</div>
        <p className="text-xl font-bold text-jungle">Could not load quiz questions.</p>
        <button
          onClick={loadQuiz}
          className="mt-4 px-6 py-3 bg-jungle text-white font-bold rounded-full hover:scale-105 transition-all"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (done) {
    return (
      <div>
        <h2 className={`text-center font-bold text-jungle font-['Fredoka_One'] mb-6 ${isLittle ? 'text-3xl' : 'text-2xl'}`}>
          Quiz Complete!
        </h2>
        <QuizResults score={score} total={questions.length} onPlayAgain={loadQuiz} />
      </div>
    )
  }

  return (
    <div>
      <h2 className={`text-center font-bold text-jungle font-['Fredoka_One'] mb-2 ${isLittle ? 'text-3xl' : 'text-2xl'}`}>
        {isLittle ? '⭐ Animal Quiz! ⭐' : '🧠 Animal Quiz Challenge'}
      </h2>
      <p className="text-center text-gray-400 text-sm mb-6">
        Question {currentIndex + 1} of {questions.length}
      </p>

      {/* Progress bar */}
      <div className="max-w-lg mx-auto mb-6">
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-jungle to-ocean-light rounded-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <QuizCard
        key={currentIndex}
        question={questions[currentIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  )
}
