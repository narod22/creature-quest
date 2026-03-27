import { useState } from 'react'
import { useApp } from '../context'
import SearchBar from '../components/SearchBar'
import CategoryGrid from '../components/CategoryGrid'
import EmojiNav from '../components/EmojiNav'
import AnimalCard from '../components/AnimalCard'
import LoadingAnimation from '../components/LoadingAnimation'
import { searchSpecies, browseByCategory } from '../api/wikipedia'

export default function ExplorePage() {
  const { isLittle } = useApp()
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [searchLabel, setSearchLabel] = useState('')

  async function handleSearch(query) {
    if (!query.trim()) return
    setLoading(true)
    setHasSearched(true)
    setSearchLabel(query)
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
    setSearchLabel(category.label)
    try {
      const data = await browseByCategory(category.wikiCategory)
      setResults(data)
    } catch (e) {
      console.error('Category browse failed:', e)
      setResults([])
    }
    setLoading(false)
  }

  function handleReset() {
    setHasSearched(false)
    setResults([])
    setSearchLabel('')
  }

  return (
    <div>
      {/* Tagline */}
      <p className={`text-center mb-6 text-gray-500 font-semibold ${isLittle ? 'text-xl' : 'text-lg'}`}>
        {isLittle ? 'Tap an animal to explore! 🐾' : 'Search for any animal or pick a category below'}
      </p>

      {/* Search (hidden in Little Explorer mode) */}
      <SearchBar onSearch={handleSearch} />

      {/* Category navigation */}
      {!hasSearched && (
        isLittle ? (
          <EmojiNav onSelect={handleCategory} />
        ) : (
          <CategoryGrid onSelect={handleCategory} />
        )
      )}

      {/* Back button when viewing results */}
      {hasSearched && !loading && (
        <button
          onClick={handleReset}
          className="mb-4 px-5 py-2 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all font-bold text-jungle border-2 border-jungle-light"
        >
          ← Back to Categories
        </button>
      )}

      {loading && <LoadingAnimation />}

      {!loading && hasSearched && results.length === 0 && (
        <div className="text-center py-12 animate-pop-in">
          <div className="text-6xl mb-4">🔍</div>
          <p className={`text-jungle font-bold ${isLittle ? 'text-2xl' : 'text-xl'}`}>
            Hmm, we couldn't find that creature!
          </p>
          <p className="text-gray-500 mt-2">
            Try searching for something else, like "fox" or "penguin"
          </p>
        </div>
      )}

      {!loading && hasSearched && results.length > 0 && (
        <div>
          <h2 className={`font-bold text-jungle mb-4 font-['Fredoka_One'] ${isLittle ? 'text-2xl' : 'text-xl'}`}>
            {results.length} {searchLabel} species found!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((species, i) => (
              <AnimalCard key={species.id} species={species} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
