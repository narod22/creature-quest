const CATEGORIES = [
  { label: 'New Dinosaurs', emoji: '🦕', query: 'newly discovered dinosaur species fossil', color: 'from-sunset to-coral' },
  { label: 'Deep Sea', emoji: '🐙', query: 'new deep sea species discovered ocean', color: 'from-ocean to-ocean-light' },
  { label: 'New Frogs', emoji: '🐸', query: 'new frog species discovered amphibian', color: 'from-jungle to-jungle-light' },
  { label: 'New Birds', emoji: '🦜', query: 'new bird species discovered ornithology', color: 'from-berry to-berry-light' },
  { label: 'New Insects', emoji: '🦋', query: 'new insect species discovered entomology', color: 'from-sunset-light to-sunset' },
  { label: 'Fossils', emoji: '🦴', query: 'new fossil species discovered prehistoric extinct', color: 'from-gray-600 to-gray-800' },
  { label: 'Cave Species', emoji: '🦇', query: 'new cave species discovered underground subterranean', color: 'from-gray-700 to-gray-900' },
  { label: 'New Reptiles', emoji: '🦎', query: 'new reptile lizard snake species discovered', color: 'from-jungle-light to-jungle' },
  { label: 'New Fish', emoji: '🐟', query: 'new fish species discovered marine freshwater', color: 'from-ocean-light to-ocean' },
  { label: 'Tiny & Weird', emoji: '🔬', query: 'new tiny miniature bizarre unusual species discovered', color: 'from-berry-light to-berry' },
]

export default function CategoryButtons({ onSelect }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-center text-jungle mb-4 font-['Fredoka_One']">
        What kind of new discovery are you looking for?
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
