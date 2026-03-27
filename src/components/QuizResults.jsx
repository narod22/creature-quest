import { useNavigate } from 'react-router-dom'
import { useApp } from '../context'

export default function QuizResults({ score, total, onPlayAgain }) {
  const navigate = useNavigate()
  const { isLittle } = useApp()
  const percentage = Math.round((score / total) * 100)

  const stars = Math.max(1, Math.round((score / total) * 5))

  const messages = {
    5: ['Incredible! You are a true animal expert!', '🏆'],
    4: ['Amazing job! You know so much about animals!', '🌟'],
    3: ['Great work! You are learning so much!', '💪'],
    2: ['Good try! Keep exploring and learning!', '📚'],
    1: ['Every scientist starts somewhere! Keep going!', '🔬'],
  }

  const [message, emoji] = messages[stars]

  return (
    <div className="animate-pop-in text-center max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        {/* Stars */}
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`text-4xl transition-all duration-300 ${
                i <= stars ? 'animate-sparkle' : 'opacity-20'
              }`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Score */}
        <div className="text-6xl font-black text-jungle mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
          {score}/{total}
        </div>

        <p className={`text-gray-500 mb-4 ${isLittle ? 'text-lg' : ''}`}>
          {percentage}% correct
        </p>

        {/* Message */}
        <div className="text-5xl mb-3">{emoji}</div>
        <p className={`font-bold text-jungle mb-8 ${isLittle ? 'text-xl' : 'text-lg'}`}>
          {message}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onPlayAgain}
            className="px-6 py-3 bg-gradient-to-r from-sunset to-sunset-light text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            🎲 Play Again!
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-jungle to-jungle-light text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            🐾 Explore More
          </button>
        </div>
      </div>
    </div>
  )
}
