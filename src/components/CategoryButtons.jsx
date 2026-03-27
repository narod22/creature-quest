const CATEGORIES = [
  { label: 'New Dinosaur Discoveries', emoji: '🦕', query: 'newly discovered dinosaur species', color: 'from-sunset to-coral' },
  { label: 'Deep Sea Creatures', emoji: '🐙', query: 'new deep sea species discovered', color: 'from-ocean to-ocean-light' },
  { label: 'Tiny Frogs', emoji: '🐸', query: 'new frog species discovered small', color: 'from-jungle to-jungle-light' },
  { label: 'Colorful Birds', emoji: '🦜', query: 'new bird species discovered colorful', color: 'from-berry to-berry-light' },
  { label: 'Cool Insects', emoji: '🦋', query: 'new insect species discovered', color: 'from-sunset-light to-sunset' },
  { label: 'Sharks & Rays', emoji: '🦈', query: 'new shark ray species discovered', color: 'from-ocean-light to-ocean' },
  { label: 'Cave Animals', emoji: '🦇', query: 'new cave species discovered underground', color: 'from-gray-600 to-gray-800' },
  { label: 'Lizards & Snakes', emoji: '🦎', query: 'new reptile species discovered', color: 'from-jungle-light to-jungle' },
]

export default function CategoryButtons({ onSelect }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-center text-jungle mb-4 font-['Fredoka_One']">
        What kind of creature are you looking for?
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => onSelect(cat.query)}
            className={`animate-slide-up px-5 py-3 bg-gradient-to-r ${cat.color} text-white font-bold rounded-2xl shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 text-sm sm:text-base`}
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
          >
            <span className="text-xl mr-2">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
