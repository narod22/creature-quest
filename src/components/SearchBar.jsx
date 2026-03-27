import { useState } from 'react'
import { useApp } from '../context'

const SUGGESTIONS = [
  'fox', 'blue whale', 'tree frog', 'barn owl', 'octopus',
  'butterfly', 'great white shark', 'red panda', 'gecko',
  'eagle', 'jellyfish', 'wolf', 'penguin', 'chameleon',
]

export default function SearchBar({ onSearch, placeholder }) {
  const { isLittle } = useApp()
  const [query, setQuery] = useState('')
  const [hint] = useState(
    () => SUGGESTIONS[Math.floor(Math.random() * SUGGESTIONS.length)]
  )

  // Hidden in Little Explorer mode (they use EmojiNav instead)
  if (isLittle) return null

  function handleSubmit(e) {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  function handleSurprise() {
    const pick = SUGGESTIONS[Math.floor(Math.random() * SUGGESTIONS.length)]
    setQuery(pick)
    onSearch(pick)
  }

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder || `Search for "${hint}"...`}
              className="w-full pl-14 pr-4 py-4 text-lg rounded-full border-3 border-ocean-light bg-white shadow-lg focus:outline-none focus:border-ocean focus:ring-4 focus:ring-ocean-light/30 transition-all font-semibold text-gray-700 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-4 bg-gradient-to-r from-jungle to-jungle-light text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-lg"
          >
            Search!
          </button>
        </div>
      </form>
      <button
        onClick={handleSurprise}
        className="mt-3 mx-auto block px-5 py-2 bg-gradient-to-r from-sunset to-sunset-light text-white font-bold rounded-full shadow hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-sm"
      >
        🎲 Surprise Me!
      </button>
    </div>
  )
}
