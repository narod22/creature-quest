import { useNavigate } from 'react-router-dom'
import { useApp } from '../context'

export default function AnimalCard({ species, index }) {
  const navigate = useNavigate()
  const { isLittle } = useApp()

  const gradients = [
    'from-jungle-light/20 to-ocean-light/20',
    'from-ocean-light/20 to-berry-light/20',
    'from-sunset-light/20 to-coral/20',
    'from-berry-light/20 to-jungle-light/20',
    'from-ocean/20 to-jungle/20',
    'from-coral/20 to-sunset-light/20',
  ]
  const bg = gradients[index % gradients.length]

  return (
    <div
      className="animate-slide-up bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border-3 border-transparent hover:border-sunset-light hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
      onClick={() => navigate(`/animal/${species.id}`)}
    >
      {species.image ? (
        <div className="relative overflow-hidden">
          <img
            src={species.image}
            alt={species.title}
            className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${isLittle ? 'h-56' : 'h-48'}`}
          />
          <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 text-xs font-bold text-jungle shadow flex items-center gap-1">
            <span>{species.typeEmoji || '🔬'}</span>
            <span>{species.typeLabel || 'Species'}</span>
          </div>
          {species.yearDescribed && (
            <div className="absolute top-3 right-3 bg-sunset/90 rounded-full px-3 py-1 text-xs font-bold text-white shadow">
              NEW {species.yearDescribed}
            </div>
          )}
        </div>
      ) : (
        <div className={`relative w-full ${isLittle ? 'h-56' : 'h-48'} bg-gradient-to-br ${bg} flex items-center justify-center`}>
          <span className={`group-hover:scale-125 transition-transform duration-300 ${isLittle ? 'text-8xl' : 'text-7xl'}`}>
            {species.typeEmoji || '🔬'}
          </span>
        </div>
      )}

      <div className="p-4">
        <h3 className={`font-bold text-jungle group-hover:text-ocean transition-colors leading-snug ${isLittle ? 'text-xl' : 'text-lg'}`}>
          {species.title}
        </h3>
        {!isLittle && species.summary && (
          <p className="text-gray-500 text-sm mt-2 line-clamp-3">
            {species.summary.slice(0, 150)}...
          </p>
        )}
        <div className="mt-3 flex items-center text-sm font-semibold text-ocean">
          <span>{isLittle ? 'Tap to learn!' : 'Discover more'}</span>
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </div>
  )
}
