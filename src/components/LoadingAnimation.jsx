const LOADING_EMOJIS = ['🦎', '🐸', '🦋', '🐙', '🦈', '🦜']
const LOADING_MESSAGES = [
  'Exploring the jungle...',
  'Diving into the deep sea...',
  'Searching under rocks...',
  'Peeking into caves...',
  'Climbing treetops...',
  'Looking through the microscope...',
]

export default function LoadingAnimation() {
  const message = LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]

  return (
    <div className="text-center py-16">
      <div className="flex justify-center gap-4 mb-6">
        {LOADING_EMOJIS.map((emoji, i) => (
          <span
            key={i}
            className="text-4xl animate-float"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            {emoji}
          </span>
        ))}
      </div>
      <p className="text-xl font-bold text-jungle animate-pulse">
        {message}
      </p>
      <div className="mt-4 flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full bg-ocean-light animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
