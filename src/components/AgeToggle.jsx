import { useApp } from '../context'

export default function AgeToggle() {
  const { ageMode, setAgeMode, isLittle } = useApp()

  return (
    <button
      onClick={() => setAgeMode(isLittle ? 'explorer' : 'little')}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all hover:scale-105 active:scale-95 ${
        isLittle
          ? 'bg-sunset-light/20 border-sunset-light text-sunset'
          : 'bg-ocean-light/20 border-ocean-light text-ocean'
      }`}
      title={isLittle ? 'Switch to Explorer mode' : 'Switch to Little Explorer mode'}
    >
      <span className="text-lg">{isLittle ? '⭐' : '🔍'}</span>
      <span className="text-xs font-bold hidden sm:block">
        {isLittle ? 'Little Explorer' : 'Explorer'}
      </span>
      <span className="text-xs font-bold sm:hidden">
        {isLittle ? '⭐' : '🔍'}
      </span>
    </button>
  )
}
