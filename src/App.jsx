import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import AnimalCard from './components/AnimalCard'
import AnimalDetail from './components/AnimalDetail'
import FunHeader from './components/FunHeader'
import CategoryButtons from './components/CategoryButtons'
import LoadingAnimation from './components/LoadingAnimation'
import { searchSpecies, getRecentDiscoveries, searchNewSpecies } from './api'

function App() {
  const [results, setResults] = useState([])
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [recentAnimals, setRecentAnimals] = useState([])

  useEffect(() => {
    loadRecentDiscoveries()
  }, [])

  async function loadRecentDiscoveries() {
    setLoading(true)
    try {
      const animals = await getRecentDiscoveries()
      setRecentAnimals(animals)
    } catch (e) {
      console.error('Failed to load recent discoveries:', e)
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
      const data = await searchSpecies(query)
      setResults(data)
    } catch (e) {
      console.error('Search failed:', e)
      setResults([])
    }
    setLoading(false)
  }

  async function handleCategory(category) {
    setLoading(true)
    setHasSearched(true)
    setSearchTerm(category)
    setSelectedAnimal(null)
    try {
      const data = await searchNewSpecies(category)
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
                  Hmm, we couldn't find that creature!
                </p>
                <p className="text-gray-500 mt-2">
                  Try searching for something else, like "frog" or "deep sea fish"
                </p>
              </div>
            )}

            {!loading && hasSearched && results.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-jungle mb-4 font-['Fredoka_One']">
                  We found {results.length} creatures for "{searchTerm}"!
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((animal, i) => (
                    <AnimalCard
                      key={animal.id}
                      animal={animal}
                      index={i}
                      onClick={() => setSelectedAnimal(animal)}
                    />
                  ))}
                </div>
              </div>
            )}

            {!loading && !hasSearched && recentAnimals.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-jungle mb-4 font-['Fredoka_One'] flex items-center gap-2">
                  <span className="text-3xl">🌍</span> Recently Spotted Animals
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentAnimals.map((animal, i) => (
                    <div
                      key={animal.id}
                      className="animate-slide-up bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-ocean-light hover:shadow-xl transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
                      onClick={() => handleSearch(animal.scientificName || animal.title)}
                    >
                      {animal.image ? (
                        <img
                          src={animal.image}
                          alt={animal.title}
                          className="w-full h-44 object-cover"
                        />
                      ) : (
                        <div className="w-full h-44 bg-gradient-to-br from-ocean-light to-jungle-light flex items-center justify-center">
                          <span className="text-6xl">{getAnimalEmoji(animal.iconic)}</span>
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-jungle capitalize">
                          {animal.title}
                        </h3>
                        {animal.scientificName && (
                          <p className="text-sm text-gray-400 italic">{animal.scientificName}</p>
                        )}
                        <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                          <span>📍</span>
                          <span>{animal.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="text-center mt-12 pb-6 text-gray-400 text-sm">
        Made with 💚 for curious kids everywhere
      </footer>
    </div>
  )
}

function getAnimalEmoji(iconic) {
  const map = {
    Mammalia: '🦁',
    Reptilia: '🦎',
    Amphibia: '🐸',
    Aves: '🦅',
    Actinopterygii: '🐟',
    Insecta: '🦋',
    Arachnida: '🕷️',
    Mollusca: '🐙',
  }
  return map[iconic] || '🐾'
}

export default App
