import { useState, useEffect } from 'react'
import { useApp } from '../context'
import SearchBar from '../components/SearchBar'
import AnimalCard from '../components/AnimalCard'
import LoadingAnimation from '../components/LoadingAnimation'
import { getNewlyDescribedSpecies, searchNewDiscoveries } from '../api/wikipedia'
import { getTypeEmoji } from '../api/helpers'

export default function DiscoveriesPage() {
  const { isLittle } = useApp()
  const [discoveries, setDiscoveries] = useState([])
  const [loading, setLoading] = useState(true)
  const [discoveryYear, setDiscoveryYear] = useState(new Date().getFullYear())
  const [searchResults, setSearchResults] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadYear(discoveryYear)
  }, [discoveryYear])

  async function loadYear(year) {
    setLoading(true)
    setSearchResults(null)
    try {
      const species = await getNewlyDescribedSpecies(year)
      setDiscoveries(species)
    } catch (e) {
      console.error('Failed to load discoveries:', e)
      setDiscoveries([])
    }
    setLoading(false)
  }

  async function handleSearch(query) {
    if (!query.trim()) return
    setLoading(true)
    setSearchTerm(query)
    try {
      const results = await searchNewDiscoveries(query)
      setSearchResults(results)
    } catch (e) {
      console.error('Search failed:', e)
      setSearchResults([])
    }
    setLoading(false)
  }

  function clearSearch() {
    setSearchResults(null)
    setSearchTerm('')
  }

  const currentYear = new Date().getFullYear()
  const displayResults = searchResults || discoveries

  // Stats
  const typeCounts = {}
  for (const d of displayResults) {
    const type = d.type || 'unknown'
    typeCounts[type] = (typeCounts[type] || 0) + 1
  }
  const stats = Object.entries(typeCounts)
    .map(([type, count]) => ({ type, count, emoji: getTypeEmoji(type) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)

  return (
    <div>
      <p className={`text-center mb-6 text-gray-500 font-semibold ${isLittle ? 'text-xl' : 'text-lg'}`}>
        {isLittle ? 'Brand new animals that scientists just found! 🔬' : 'Species that scientists officially described for the first time'}
      </p>

      <SearchBar
        onSearch={handleSearch}
        placeholder='Search new discoveries, like "dinosaur fossil"...'
      />

      {/* Year selector */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className={`font-bold text-jungle font-['Fredoka_One'] flex items-center gap-2 ${isLittle ? 'text-2xl' : 'text-xl'}`}>
          <span className="text-2xl">🔬</span>
          {searchResults ? `Results for "${searchTerm}"` : 'Newly Discovered Species'}
        </h2>

        {!searchResults && (
          <div className="flex gap-2">
            {[currentYear, currentYear - 1, currentYear - 2].map((year) => (
              <button
                key={year}
                onClick={() => setDiscoveryYear(year)}
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
        )}

        {searchResults && (
          <button
            onClick={clearSearch}
            className="px-4 py-2 bg-white rounded-full font-bold text-sm text-jungle border-2 border-jungle-light hover:bg-jungle-light/10 transition-all"
          >
            ← Back to feed
          </button>
        )}
      </div>

      {/* Stats bar */}
      {!loading && displayResults.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.type}
              className="bg-white rounded-xl px-3 py-1.5 shadow-sm border border-gray-100 flex items-center gap-1.5 text-sm font-semibold text-gray-600"
            >
              <span>{stat.emoji}</span>
              <span>{stat.count}</span>
            </div>
          ))}
        </div>
      )}

      {loading && <LoadingAnimation />}

      {!loading && displayResults.length === 0 && (
        <div className="text-center py-12 animate-pop-in">
          <div className="text-6xl mb-4">🔬</div>
          <p className="text-xl text-jungle font-bold">No discoveries found yet!</p>
          <p className="text-gray-500 mt-2">Try a different year or search term.</p>
        </div>
      )}

      {!loading && displayResults.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayResults.map((species, i) => (
            <AnimalCard key={species.id} species={species} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
