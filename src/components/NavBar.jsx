import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useApp } from '../context'
import AgeToggle from './AgeToggle'

const ANIMAL_EMOJIS = ['🦎', '🐸', '🦋', '🐙', '🦈', '🦜', '🐢', '🦔', '🐠', '🦩', '🐛', '🦕']

export default function NavBar() {
  const { isLittle } = useApp()
  const [currentEmoji, setCurrentEmoji] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % ANIMAL_EMOJIS.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const navItems = [
    { to: '/', label: 'Explore', emoji: '🐾', end: true },
    { to: '/discoveries', label: 'New Discoveries', emoji: '🔬' },
    { to: '/quiz', label: 'Quiz', emoji: '⭐' },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top row: logo + age toggle */}
        <div className="flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-3xl animate-wiggle inline-block">
              {ANIMAL_EMOJIS[currentEmoji]}
            </span>
            <h1
              className={`font-black tracking-tight ${isLittle ? 'text-3xl' : 'text-2xl sm:text-3xl'}`}
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              <span className="text-jungle">Creature</span>{' '}
              <span className="text-ocean">Quest</span>
            </h1>
          </NavLink>
          <AgeToggle />
        </div>

        {/* Nav tabs */}
        <nav className="flex gap-1 pb-2 -mx-1 overflow-x-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
                  isLittle ? 'text-base px-5 py-3' : 'text-sm'
                } ${
                  isActive
                    ? 'bg-jungle text-white shadow-md'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-jungle'
                }`
              }
            >
              <span className={isLittle ? 'text-2xl' : 'text-lg'}>{item.emoji}</span>
              {!isLittle && <span>{item.label}</span>}
              {isLittle && <span className="text-sm">{item.label.split(' ')[0]}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
