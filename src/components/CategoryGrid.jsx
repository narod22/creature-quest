import { CATEGORIES } from '../api/helpers'

// Taxonomy category grid for Explorer mode (7-year-old)
export default function CategoryGrid({ onSelect }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-center text-jungle mb-4 font-['Fredoka_One']">
        Explore by type
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat)}
            className={`animate-slide-up px-4 py-2.5 bg-gradient-to-r ${cat.color} text-white font-bold rounded-2xl shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 text-sm`}
            style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
          >
            <span className="text-lg mr-1.5">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
