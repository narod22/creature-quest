import { useState, useEffect } from 'react'

const ANIMAL_EMOJIS = ['🦎', '🐸', '🦋', '🐙', '🦈', '🦜', '🐢', '🦔', '🐠', '🦩', '🐛', '🦕']

export default function FunHeader({ onGoHome }) {
  const [currentEmoji, setCurrentEmoji] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % ANIMAL_EMOJIS.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="text-center pt-8 pb-4 px-4">
      <div
        className="cursor-pointer inline-block"
        onClick={onGoHome}
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-5xl animate-wiggle inline-block">
            {ANIMAL_EMOJIS[currentEmoji]}
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black tracking-tight"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            <span className="text-jungle">Creature</span>{' '}
            <span className="text-ocean">Quest</span>
          </h1>
          <span className="text-5xl animate-float inline-block">
            {ANIMAL_EMOJIS[(currentEmoji + 6) % ANIMAL_EMOJIS.length]}
          </span>
        </div>
        <p className="text-lg text-gray-500 font-semibold">
          Find species that scientists just discovered!
        </p>
      </div>

      <div className="flex justify-center gap-1 mt-3">
        {['🌿', '🌊', '🏔️', '🌺', '🍄'].map((emoji, i) => (
          <span
            key={i}
            className="text-2xl animate-sparkle"
            style={{ animationDelay: `${i * 300}ms` }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </header>
  )
}
