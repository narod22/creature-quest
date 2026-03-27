import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import AnimalCard from './components/AnimalCard'
import DiscoveryCard from './components/DiscoveryCard'
import AnimalDetail from './components/AnimalDetail'
import FunHeader from './components/FunHeader'
import CategoryButtons from './components/CategoryButtons'
import LoadingAnimation from './components/LoadingAnimation'
import {
  searchSpecies,
  loadDiscoveryFeed,
  searchNewDiscoveries,
  getTypeEmoji,
} from './api'

function App() {
  const [results, setResults] = useState([])
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [discoveries, setDiscoveries] = useState([])
  const [discoveryYear, setDiscoveryYear] = useState(new Date().getFullYear())

  useEffect(() => {
    loadDiscoveries()
  }, [])

  async function loadDiscoveries() {
    setLoading(true)
    try {
      const species = await loadDiscoveryFeed()
      setDiscoveries(species)
    } catch (e) {
      console.error('Failed to load discoveries:', e)
    }
    setLoading(false)
  }

  async function handleSearch(query) {
    if (!query.trim()) return
    setLoading(true)
    setHasSearched(true)
    setSearchTerm(query)
    setSelectedAnimal(null)
    try {
      // Search for new discoveries first, fall back to general search
      const discoveryResults = await searchNewDiscoveries(query)
      if (discoveryResults.length > 0) {
        setResults(discoveryResults)
      } else {
        const generalResults = await searchSpecies(query)
        setResults(generalResults)
      }
    } catch (e) {
      console.error('Search failed:', e)
      setResults([])
    }
    setLoading(false)
  }

  async function handleCategory(category) {
    setLoading(true)
    setHasSearched(true)
    setSearchTerm(category.split(' ').slice(0, 3).join(' '))
    setSelectedAnimal(null)
    try {
      const data = await searchNewDiscoveries(category)
      setResults(data)
    } catch (e) {
      console.error('Category search failed:', e)
      setResults([])
    }
    setLoading(false)
  }

  function handleBack() {
    setSelectedAnimal(null)
  }

  function handleGoHome() {
    setSelectedAnimal(null)
    setHasSearched(false)
    setResults([])
    setSearchTerm('')
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen pb-12">
      <FunHeader onGoHome={handleGoHome} />

      <main className="max-w-5xl mx-auto px-4">
        <SearchBar onSearch={handleSearch} />

        {selectedAnimal ? (
          <AnimalDetail animal={selectedAnimal} onBack={handleBack} />
        ) : (
          <>
            {!hasSearched && (
              <CategoryButtons onSelect={handleCategory} />
            )}

            {loading && <LoadingAnimation />}

            {!loading && hasSearched && results.length === 0 && (
              <div className="text-center py-12 animate-pop-in">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl text-jungle font-bold">
                  Hmm, no new discoveries found for that!
                </p>
                <p className="text-gray-500 mt-2">
                  Try searching for something like "new frog discovered" or "dinosaur fossil"
                </p>
              </div>
            )}

            {!loading && hasSearched && results.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-jungle mb-4 font-['Fredoka_One']">
                  {results.length} discoveries for "{searchTerm}"!
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((animal, i) => (
                    <DiscoveryCard
                      key={animal.id}
                      species={animal}
                      index={i}
                      onClick={() => setSelectedAnimal(animal)}
                    />
                  ))}
                </div>
              </div>
            )}

            {!loading && !hasSearched && discoveries.length > 0 && (
              <div className="mt-4">
                {/* Year selector */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <h2 className="text-2xl font-bold text-jungle font-['Fredoka_One'] flex items-center gap-2">
                    <span className="text-3xl">🔬</span> Newly Discovered Species
                  </h2>
                  <div className="flex gap-2">
                    {[currentYear, currentYear - 1, currentYear - 2].map((year) => (
                      <button
                        key={year}
                        onClick={async () => {
                          setDiscoveryYear(year)
                          setLoading(true)
                          try {
                            const { species } = await import('./api').then((m) =>
                              m.getNewlyDescribedSpecies(year)
                            )
                            setDiscoveries(species)
                          } catch (e) {
                            console.error(e)
                          }
                          setLoading(false)
                        }}
                        className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                          discoveryYear === year
                            ? 'bg-jungle text-white shadow-lg'
                            : 'bg-white text-jungle border-2 border-jungle-light hover:bg-jungle-light/10'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-gray-500 mb-6 text-sm">
                  These are real species that scientists officially described for the first time.
                  Every one of them is a brand new addition to what we know about life on Earth!
                </p>

                {/* Stats bar */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {getDiscoveryStats(discoveries).map((stat) => (
                    <div
                      key={stat.type}
                      className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100 flex items-center gap-2 text-sm font-semibold text-gray-600"
                    >
                      <span className="text-lg">{stat.emoji}</span>
                      <span>
                        {stat.count} {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {discoveries.map((species, i) => (
                    <DiscoveryCard
                      key={species.id}
                      species={species}
                      index={i}
                      onClick={() => setSelectedAnimal(species)}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="text-center mt-12 pb-6 text-gray-400 text-sm">
        Made with 💚 for curious kids who love new discoveries
      </footer>
    </div>
  )
}

function getDiscoveryStats(discoveries) {
  const counts = {}
  for (const d of discoveries) {
    const type = d.type || 'unknown'
    counts[type] = (counts[type] || 0) + 1
  }

  return Object.entries(counts)
    .map(([type, count]) => ({
      type,
      count,
      emoji: getTypeEmoji(type),
      label: type.charAt(0).toUpperCase() + type.slice(1) + (count > 1 ? 's' : ''),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
}

export default App
