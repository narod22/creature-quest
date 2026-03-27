// Shared utilities for the Creature Quest app

export const TYPE_EMOJI = {
  dinosaur: '🦕',
  mammal: '🦁',
  bird: '🦜',
  reptile: '🦎',
  amphibian: '🐸',
  fish: '🐟',
  insect: '🦋',
  arachnid: '🕷️',
  mollusk: '🐙',
  crustacean: '🦀',
  plant: '🌿',
  fungus: '🍄',
  unknown: '🔬',
}

export const TYPE_LABEL = {
  dinosaur: 'Dinosaur',
  mammal: 'Mammal',
  bird: 'Bird',
  reptile: 'Reptile',
  amphibian: 'Amphibian',
  fish: 'Fish',
  insect: 'Insect',
  arachnid: 'Arachnid',
  mollusk: 'Mollusk',
  crustacean: 'Crustacean',
  plant: 'Plant',
  fungus: 'Fungus',
  unknown: 'Species',
}

// Emoji-based category config for navigation
export const CATEGORIES = [
  { id: 'mammal', emoji: '🦁', label: 'Mammals', wikiCategory: 'Mammals', color: 'from-sunset to-sunset-light' },
  { id: 'bird', emoji: '🦜', label: 'Birds', wikiCategory: 'Birds', color: 'from-berry to-berry-light' },
  { id: 'reptile', emoji: '🦎', label: 'Reptiles', wikiCategory: 'Reptiles', color: 'from-jungle to-jungle-light' },
  { id: 'amphibian', emoji: '🐸', label: 'Frogs & Salamanders', wikiCategory: 'Amphibians', color: 'from-jungle-light to-ocean-light' },
  { id: 'fish', emoji: '🐟', label: 'Fish', wikiCategory: 'Fish', color: 'from-ocean to-ocean-light' },
  { id: 'insect', emoji: '🦋', label: 'Insects', wikiCategory: 'Insects', color: 'from-sunset-light to-sunset' },
  { id: 'arachnid', emoji: '🕷️', label: 'Spiders & Scorpions', wikiCategory: 'Arachnids', color: 'from-gray-700 to-gray-900' },
  { id: 'mollusk', emoji: '🐙', label: 'Ocean Creatures', wikiCategory: 'Molluscs', color: 'from-ocean-light to-ocean' },
  { id: 'dinosaur', emoji: '🦕', label: 'Dinosaurs', wikiCategory: 'Dinosaurs', color: 'from-coral to-sunset' },
  { id: 'crustacean', emoji: '🦀', label: 'Crabs & Shrimp', wikiCategory: 'Crustaceans', color: 'from-coral to-sunset-light' },
  { id: 'fungus', emoji: '🍄', label: 'Fungi', wikiCategory: 'Fungi', color: 'from-berry-light to-berry' },
  { id: 'shark', emoji: '🦈', label: 'Sharks & Rays', wikiCategory: 'Sharks', color: 'from-ocean to-gray-700' },
]

export function getTypeEmoji(type) {
  return TYPE_EMOJI[type] || '🔬'
}

export function getTypeLabel(type) {
  return TYPE_LABEL[type] || 'Species'
}

export function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Simple in-memory cache for API results (session-only)
const cache = new Map()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

export function getCached(key) {
  const entry = cache.get(key)
  if (entry && Date.now() - entry.time < CACHE_TTL) {
    return entry.data
  }
  cache.delete(key)
  return null
}

export function setCache(key, data) {
  cache.set(key, { data, time: Date.now() })
}

// Sound effects using Web Audio API
let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioCtx
}

export function playSound(type) {
  try {
    const ctx = getAudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)

    if (type === 'tap') {
      osc.frequency.value = 600
      gain.gain.value = 0.1
      osc.start()
      osc.stop(ctx.currentTime + 0.05)
    } else if (type === 'correct') {
      osc.frequency.value = 523
      gain.gain.value = 0.15
      osc.start()
      osc.frequency.linearRampToValueAtTime(784, ctx.currentTime + 0.15)
      osc.frequency.linearRampToValueAtTime(1047, ctx.currentTime + 0.3)
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4)
      osc.stop(ctx.currentTime + 0.4)
    } else if (type === 'wrong') {
      osc.frequency.value = 300
      gain.gain.value = 0.1
      osc.start()
      osc.frequency.linearRampToValueAtTime(200, ctx.currentTime + 0.2)
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3)
      osc.stop(ctx.currentTime + 0.3)
    }
  } catch {
    // Audio not available, silently skip
  }
}
