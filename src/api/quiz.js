// Quiz question generator for species data
// Uses curated fun facts when available, falls back to Wikipedia text extraction
import { TYPE_LABEL, TYPE_EMOJI, shuffleArray } from './helpers'
import { SPECIES_FACTS } from './species-facts'

const ALL_TYPES = Object.keys(TYPE_LABEL).filter((t) => t !== 'unknown')

/**
 * Generate quiz questions for a species.
 * Priority: curated facts > Wikipedia-extracted facts > type-based fallback
 */
export function generateQuizQuestions(species, mode = 'explorer') {
  if (mode === 'little') {
    return generateLittleQuestions(species)
  }
  return generateExplorerQuestions(species)
}

function generateExplorerQuestions(species) {
  const questions = []

  // Step 1: Try curated fact-based questions (the good stuff)
  const curatedFacts = SPECIES_FACTS[species.title]
  if (curatedFacts && curatedFacts.length > 0) {
    // Pick 3-4 random curated facts and turn them into questions
    const picked = shuffleArray(curatedFacts).slice(0, 4)
    for (const fact of picked) {
      questions.push({
        id: `curated-${fact.category}-${questions.length}`,
        question: fact.q,
        image: species.image,
        funFact: fact.text,
        choices: shuffleArray([
          { text: fact.a, correct: true },
          ...fact.wrong.slice(0, 3).map((w) => ({ text: w, correct: false })),
        ]),
      })
    }
  }

  // Step 2: Extract questions from Wikipedia text (for species without curated facts)
  if (questions.length < 3) {
    const extracted = extractFactQuestions(species)
    for (const eq of extracted) {
      if (questions.length >= 4) break
      // Avoid duplicate question types
      const existingTypes = questions.map((q) => q.id.split('-')[1])
      if (!existingTypes.includes(eq.id.split('-')[1])) {
        questions.push(eq)
      }
    }
  }

  // Step 3: Add one type question if we still need more (but only one, not two)
  if (questions.length < 2 && species.type && species.type !== 'unknown') {
    const wrongTypes = shuffleArray(
      ALL_TYPES.filter((t) => t !== species.type)
    ).slice(0, 3)

    questions.push({
      id: 'fallback-type',
      question: `What kind of animal is the ${species.title}?`,
      image: species.image,
      choices: shuffleArray([
        { text: TYPE_LABEL[species.type], emoji: TYPE_EMOJI[species.type], correct: true },
        ...wrongTypes.map((t) => ({ text: TYPE_LABEL[t], emoji: TYPE_EMOJI[t], correct: false })),
      ]),
    })
  }

  return questions.slice(0, 4) // Max 4 questions per species
}

/**
 * Extract quiz questions from Wikipedia text.
 * Looks for specific numbers, measurements, locations, and behaviors
 * that can be turned into interesting questions.
 */
function extractFactQuestions(species) {
  const text = species.summary || species.fullText || ''
  const questions = []
  if (!text) return questions

  const t = text.toLowerCase()

  // Speed questions
  const speedMatch = text.match(/(\d+[\.\d]*)\s*(mph|km\/h|miles per hour|kilometers per hour)/i)
  if (speedMatch) {
    const speed = speedMatch[1]
    const unit = speedMatch[2].includes('km') ? 'km/h' : 'mph'
    const num = parseFloat(speed)
    questions.push({
      id: 'extracted-speed',
      question: `How fast can the ${species.title} go?`,
      image: species.image,
      funFact: `The ${species.title} can reach speeds of ${speed} ${unit}!`,
      choices: shuffleArray([
        { text: `${speed} ${unit}`, correct: true },
        { text: `${Math.round(num * 0.3)} ${unit}`, correct: false },
        { text: `${Math.round(num * 2.5)} ${unit}`, correct: false },
        { text: `${Math.round(num * 0.6)} ${unit}`, correct: false },
      ]),
    })
  }

  // Size/length questions
  const sizeMatch = text.match(/(?:up to|reach|grow to|as long as|measuring|length of)\s*(\d+[\.\d]*)\s*(feet|meters|metres|cm|inches|ft|m)\b/i)
  if (sizeMatch) {
    const size = sizeMatch[1]
    const unit = sizeMatch[2]
    const num = parseFloat(size)
    questions.push({
      id: 'extracted-size',
      question: `How big can the ${species.title} get?`,
      image: species.image,
      funFact: `The ${species.title} can reach ${size} ${unit}!`,
      choices: shuffleArray([
        { text: `Up to ${size} ${unit}`, correct: true },
        { text: `Up to ${Math.round(num * 0.2)} ${unit}`, correct: false },
        { text: `Up to ${Math.round(num * 3)} ${unit}`, correct: false },
        { text: `Up to ${Math.round(num * 0.5)} ${unit}`, correct: false },
      ]),
    })
  }

  // Weight questions
  const weightMatch = text.match(/(?:weigh|weighing|weight of)\s*(?:up to|about|approximately)?\s*(\d+[\.,\d]*)\s*(kg|pounds|lbs|tons|tonnes|grams|kilograms)/i)
  if (weightMatch) {
    const weight = weightMatch[1].replace(',', '')
    const unit = weightMatch[2]
    const num = parseFloat(weight)
    questions.push({
      id: 'extracted-weight',
      question: `How much can the ${species.title} weigh?`,
      image: species.image,
      funFact: `The ${species.title} can weigh up to ${weight} ${unit}!`,
      choices: shuffleArray([
        { text: `About ${weight} ${unit}`, correct: true },
        { text: `About ${Math.round(num * 0.1)} ${unit}`, correct: false },
        { text: `About ${Math.round(num * 5)} ${unit}`, correct: false },
        { text: `About ${Math.round(num * 0.4)} ${unit}`, correct: false },
      ]),
    })
  }

  // Lifespan questions
  const lifespanMatch = text.match(/(?:live|lifespan|life span)(?:\s+(?:for|up to|about|approximately))?\s*(\d+[\-\d]*)\s*years/i)
  if (lifespanMatch) {
    const years = lifespanMatch[1]
    const num = parseInt(years)
    questions.push({
      id: 'extracted-lifespan',
      question: `How long can the ${species.title} live?`,
      image: species.image,
      funFact: `The ${species.title} can live up to ${years} years!`,
      choices: shuffleArray([
        { text: `Up to ${years} years`, correct: true },
        { text: `About ${Math.max(1, Math.round(num * 0.2))} years`, correct: false },
        { text: `About ${Math.round(num * 4)} years`, correct: false },
        { text: `About ${Math.round(num * 0.5)} years`, correct: false },
      ]),
    })
  }

  // Location/habitat questions
  const locationMatch = text.match(/(?:found in|native to|endemic to|lives? in)\s+([A-Z][^.,]{3,40})/i)
  if (locationMatch) {
    const location = locationMatch[1].trim()
    const wrongLocations = shuffleArray([
      'the Sahara Desert', 'Antarctica', 'the Amazon Rainforest',
      'the Arctic', 'Australia', 'Madagascar', 'the deep ocean',
      'the Himalayan mountains', 'North America', 'Europe',
    ].filter((l) => !location.toLowerCase().includes(l.toLowerCase().replace('the ', '')))).slice(0, 3)

    if (wrongLocations.length >= 2) {
      questions.push({
        id: 'extracted-location',
        question: `Where can you find the ${species.title}?`,
        image: species.image,
        funFact: `The ${species.title} is found in ${location}!`,
        choices: shuffleArray([
          { text: location, correct: true },
          ...wrongLocations.map((l) => ({ text: l, correct: false })),
        ]),
      })
    }
  }

  // Diet questions
  if (t.includes('herbivore') || (t.includes('plants') && t.includes('eat'))) {
    questions.push({
      id: 'extracted-diet',
      question: `What does the ${species.title} eat?`,
      image: species.image,
      funFact: `The ${species.title} is a plant-eater!`,
      choices: shuffleArray([
        { text: '🌿 Plants', correct: true },
        { text: '🥩 Other animals', correct: false },
        { text: '🍄 Fungi only', correct: false },
        { text: '🪨 Rocks and minerals', correct: false },
      ]),
    })
  } else if (t.includes('carnivore') || (t.includes('prey') && t.includes('hunt'))) {
    questions.push({
      id: 'extracted-diet',
      question: `What does the ${species.title} eat?`,
      image: species.image,
      funFact: `The ${species.title} is a meat-eater!`,
      choices: shuffleArray([
        { text: '🥩 Other animals', correct: true },
        { text: '🌿 Plants only', correct: false },
        { text: '🍯 Honey and nectar', correct: false },
        { text: '🪨 Rocks and minerals', correct: false },
      ]),
    })
  } else if (t.includes('omnivore')) {
    questions.push({
      id: 'extracted-diet',
      question: `What does the ${species.title} eat?`,
      image: species.image,
      funFact: `The ${species.title} eats both plants and animals!`,
      choices: shuffleArray([
        { text: '🌿🥩 Both plants and animals', correct: true },
        { text: '🌿 Plants only', correct: false },
        { text: '🥩 Meat only', correct: false },
        { text: '🍄 Fungi only', correct: false },
      ]),
    })
  }

  // Extinct question using proper isExtinct flag
  if (species.isExtinct === true) {
    questions.push({
      id: 'extracted-extinct',
      question: `Is the ${species.title} still alive today?`,
      image: species.image,
      funFact: `The ${species.title} is extinct, but scientists have learned about it from fossils and other evidence!`,
      choices: [
        { text: 'No, it is extinct', correct: true },
        { text: 'Yes, it is still alive', correct: false },
      ],
    })
  }

  // Nocturnal question
  if (t.includes('nocturnal')) {
    questions.push({
      id: 'extracted-nocturnal',
      question: `When is the ${species.title} most active?`,
      image: species.image,
      funFact: `The ${species.title} is nocturnal, meaning it is active at night!`,
      choices: shuffleArray([
        { text: '🌙 At night (nocturnal)', correct: true },
        { text: '☀️ During the day', correct: false },
        { text: '🌅 Only at sunset', correct: false },
      ]),
    })
  }

  return shuffleArray(questions)
}

function generateLittleQuestions(species) {
  const questions = []

  // Step 1: Try simplified curated facts
  const curatedFacts = SPECIES_FACTS[species.title]
  if (curatedFacts && curatedFacts.length > 0) {
    // Pick one curated fact and simplify it (only 2 choices instead of 4)
    const fact = shuffleArray(curatedFacts)[0]
    questions.push({
      id: 'little-curated',
      question: fact.q,
      image: species.image,
      funFact: fact.text,
      choices: shuffleArray([
        { text: fact.a, correct: true, big: true },
        { text: fact.wrong[0], correct: false, big: true },
      ]),
    })
  }

  // Step 2: Emoji matching
  if (species.type && species.type !== 'unknown') {
    const wrongTypes = shuffleArray(
      ALL_TYPES.filter((t) => t !== species.type)
    ).slice(0, 2)

    questions.push({
      id: 'little-emoji',
      question: 'Which emoji matches this animal?',
      image: species.image,
      choices: shuffleArray([
        { text: TYPE_EMOJI[species.type], emoji: TYPE_EMOJI[species.type], correct: true, big: true },
        ...wrongTypes.map((t) => ({ text: TYPE_EMOJI[t], emoji: TYPE_EMOJI[t], correct: false, big: true })),
      ]),
    })
  }

  return questions.slice(0, 2)
}

/**
 * Generate fun facts for a species detail page.
 * Uses curated facts when available, falls back to Wikipedia extraction.
 */
export function generateKidFacts(details) {
  const facts = []

  // Step 1: Use curated facts if available (the good stuff)
  const curatedFacts = SPECIES_FACTS[details.title]
  if (curatedFacts) {
    facts.push(...curatedFacts.map((f) => f.text))
  }

  // Step 2: ONLY extract from Wikipedia if we have ZERO curated facts.
  // The Wikipedia text extraction is unreliable and produces garbage like
  // "found in crocodile stomachs" or "plant-eater" for lions. Curated
  // facts are verified. Don't contaminate them with bad extraction.
  if (facts.length === 0) {
    const extracted = extractWikipediaFacts(details)
    facts.push(...extracted)
  }

  if (facts.length < 2) {
    facts.push('Every species is special and has its own unique features!')
    facts.push('Scientists discover about 18,000 new species every single year!')
  }

  const unique = [...new Set(facts)]
  return unique.slice(0, 8)
}

/**
 * Extract facts from Wikipedia text. ONLY used when no curated facts exist.
 * Conservative: only extracts things we can be reasonably sure about.
 */
function extractWikipediaFacts(details) {
  const text = (details.fullText || details.summary || '').toLowerCase()
  const sourceText = details.fullText || details.summary || ''
  // Only look at the first ~500 chars (the intro) to avoid pulling
  // facts from evolutionary history, predator sections, etc.
  const intro = sourceText.slice(0, 500)
  const introLower = intro.toLowerCase()
  const facts = []

  // Discovery year (only from intro)
  const describedMatch = intro.match(/(?:described|discovered|first described)(?: by .+?)? in (\d{4})/i)
  if (describedMatch) {
    const year = parseInt(describedMatch[1])
    if (year >= 2020) {
      facts.push(`Brand new discovery! Scientists described this species in ${year}!`)
    } else if (year >= 1900) {
      facts.push(`Scientists first described this species in ${year}!`)
    }
  }

  // Extinct status (ONLY from the isExtinct flag, never from text)
  if (details.isExtinct === true) {
    facts.push("This animal is extinct, which means it doesn't live on Earth anymore. But scientists found it!")
  }

  // Diet (only from intro, and only explicit keywords)
  if (introLower.includes('herbivore')) {
    facts.push('This animal is a plant-eater!')
  } else if (introLower.includes('carnivore') || introLower.includes('apex predator')) {
    facts.push('This is a meat-eater! It hunts other animals for food.')
  } else if (introLower.includes('omnivore')) {
    facts.push('This animal eats both plants AND meat!')
  }

  // Nocturnal (only from intro)
  if (introLower.includes('nocturnal')) {
    facts.push('This animal is nocturnal, meaning it sleeps during the day and wakes up at night!')
  }

  return facts
}
