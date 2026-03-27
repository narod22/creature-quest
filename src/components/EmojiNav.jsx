import { CATEGORIES } from '../api/helpers'

// Big emoji grid for Little Explorer mode (5-year-old)
export default function EmojiNav({ onSelect }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-8">
      {CATEGORIES.map((cat, i) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat)}
          className={`animate-slide-up flex flex-col items-center gap-2 p-5 bg-white rounded-3xl shadow-lg border-3 border-transparent hover:border-sunset-light hover:shadow-xl active:scale-90 transition-all duration-200`}
          style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
        >
          <span className="text-6xl sm:text-7xl">{cat.emoji}</span>
          <span className="text-base font-bold text-gray-600">{cat.label.split(' ')[0]}</span>
        </button>
      ))}
    </div>
  )
}
