import { useState } from 'react'
import { useApp } from '../context'
import { playSound } from '../api/helpers'

export default function QuizCard({ question, onAnswer }) {
  const { isLittle, soundEnabled } = useApp()
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)

  function handleChoice(choice, index) {
    if (answered) return
    setSelected(index)
    setAnswered(true)

    if (soundEnabled) {
      playSound(choice.correct ? 'correct' : 'wrong')
    }

    setTimeout(() => {
      onAnswer(choice.correct)
    }, question.funFact ? 2500 : (choice.correct ? 1200 : 1800))
  }

  return (
    <div className="animate-pop-in bg-white rounded-3xl shadow-xl p-6 max-w-lg mx-auto">
      {/* Animal image */}
      {question.image && (
        <img
          src={question.image}
          alt="Mystery animal"
          className="w-full h-48 sm:h-56 object-cover rounded-2xl mb-4"
        />
      )}

      {/* Question text */}
      <p className={`font-bold text-jungle mb-6 text-center ${isLittle ? 'text-xl' : 'text-lg'}`}>
        {question.question}
      </p>

      {/* Answer choices */}
      <div className={`grid gap-3 ${question.choices.length <= 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
        {question.choices.map((choice, i) => {
          const isCorrect = answered && choice.correct
          const isWrong = answered && selected === i && !choice.correct
          const isUnselected = answered && selected !== i && !choice.correct

          return (
            <button
              key={i}
              onClick={() => handleChoice(choice, i)}
              disabled={answered}
              className={`relative p-4 rounded-2xl font-bold transition-all duration-300 border-3 ${
                choice.big ? 'text-4xl py-6' : isLittle ? 'text-lg' : 'text-base'
              } ${
                isCorrect
                  ? 'bg-green-100 border-green-400 text-green-700 scale-110 shadow-lg'
                  : isWrong
                    ? 'bg-red-50 border-red-300 text-red-500 scale-95 opacity-70'
                    : isUnselected
                      ? 'bg-gray-50 border-gray-200 text-gray-400 scale-95 opacity-50'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-ocean-light hover:bg-ocean-light/10 hover:scale-105 active:scale-95 shadow-sm'
              }`}
            >
              {choice.emoji && <span className="mr-2">{choice.emoji}</span>}
              {choice.text}
              {isCorrect && (
                <span className="absolute -top-2 -right-2 text-2xl animate-bounce">✅</span>
              )}
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div className="mt-4 text-center animate-slide-up">
          {question.choices[selected]?.correct ? (
            <p className={`font-bold text-green-600 ${isLittle ? 'text-2xl' : 'text-lg'}`}>
              {['Amazing!', 'You got it!', 'Awesome!', 'Brilliant!'][Math.floor(Math.random() * 4)]} 🎉
            </p>
          ) : (
            <p className={`font-bold text-gray-500 ${isLittle ? 'text-lg' : 'text-base'}`}>
              Not quite! The answer is highlighted in green. 💚
            </p>
          )}
          {/* Fun fact shown after answering */}
          {question.funFact && (
            <div className="mt-3 p-3 bg-sunset-light/20 rounded-xl border-2 border-sunset-light/30">
              <p className="text-sm text-gray-600 font-semibold">
                <span className="text-lg mr-1">💡</span> {question.funFact}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
