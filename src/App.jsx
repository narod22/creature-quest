import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ExplorePage from './pages/ExplorePage'
import DiscoveriesPage from './pages/DiscoveriesPage'
import AnimalDetailPage from './pages/AnimalDetailPage'
import QuizPage from './pages/QuizPage'

function App() {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-cream via-green-50 to-sky-50">
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 pt-6">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/discoveries" element={<DiscoveriesPage />} />
          <Route path="/animal/:pageId" element={<AnimalDetailPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </main>
      <footer className="text-center mt-12 pb-6 text-gray-400 text-sm">
        Made with 💚 for curious kids who love animals
      </footer>
    </div>
  )
}

export default App
