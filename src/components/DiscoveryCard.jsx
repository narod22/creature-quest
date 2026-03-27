import { getTypeEmoji, getTypeLabel } from '../api'

export default function DiscoveryCard({ species, index, onClick }) {
  const emoji = getTypeEmoji(species.type)
  const label = getTypeLabel(species.type)

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
      onClick={onClick}
    >
      {species.image ? (
        <div className="relative overflow-hidden">
          <img
            src={species.image}
            alt={species.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 text-xs font-bold text-jungle shadow flex items-center gap-1">
            <span>{emoji}</span>
            <span>{label}</span>
          </div>
          {species.yearDescribed && (
            <div className="absolute top-3 right-3 bg-sunset/90 rounded-full px-3 py-1 text-xs font-bold text-white shadow">
              NEW {species.yearDescribed}
            </div>
          )}
        </div>
      ) : (
        <div className={`relative w-full h-48 bg-gradient-to-br ${bg} flex items-center justify-center`}>
          <span className="text-7xl group-hover:scale-125 transition-transform duration-300">
            {emoji}
          </span>
          {species.yearDescribed && (
            <div className="absolute top-3 right-3 bg-sunset/90 rounded-full px-3 py-1 text-xs font-bold text-white shadow">
              NEW {species.yearDescribed}
            </div>
          )}
        </div>
      )}

      <div className="p-4">
        <h3 className="font-bold text-lg text-jungle group-hover:text-ocean transition-colors leading-snug">
          {species.title}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {species.summary?.slice(0, 150)}...
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-ocean flex items-center">
            Discover more
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </div>
  )
}
