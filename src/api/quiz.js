// Quiz question generator for species data
import { TYPE_LABEL, TYPE_EMOJI, shuffleArray } from './helpers'

const ALL_TYPES = Object.keys(TYPE_LABEL).filter((t) => t !== 'unknown')

/**
 * Generate quiz questions for a species.
 * @param {object} species - Species object with type, summary, etc.
 * @param {string} mode - 'explorer' (7yo) or 'little' (5yo)
 * @returns {object[]} Array of question objects
 */
export function generateQuizQuestions(species, mode = 'explorer') {
  if (mode === 'little') {
    return generateLittleQuestions(species)
  }
  return generateExplorerQuestions(species)
}

function generateExplorerQuestions(species) {
  const questions = []

  // Question 1: What type of animal?
  if (species.type && species.type !== 'unknown') {
    const wrongTypes = shuffleArray(
      ALL_TYPES.filter((t) => t !== species.type)
    ).slice(0, 3)

    questions.push({
      id: 'type',
      question: `What kind of animal is the ${species.title}?`,
      image: species.image,
      choices: shuffleArray([
        { text: TYPE_LABEL[species.type], emoji: TYPE_EMOJI[species.type], correct: true },
        ...wrongTypes.map((t) => ({ text: TYPE_LABEL[t], emoji: TYPE_EMOJI[t], correct: false })),
      ]),
    })
  }

  // Question 2: Habitat
  const habitat = extractHabitat(species.summary || species.fullText || '')
  if (habitat) {
    const allHabitats = ['ocean', 'forest', 'desert', 'arctic', 'cave', 'grassland', 'mountain', 'river']
    const wrongHabitats = shuffleArray(
      allHabitats.filter((h) => h !== habitat.key)
    ).slice(0, 3)

    const habitatLabels = {
      ocean: '🌊 Ocean', forest: '🌳 Forest', desert: '🏜️ Desert',
      arctic: '❄️ Arctic', cave: '🦇 Cave', grassland: '🌾 Grassland',
      mountain: '🏔️ Mountain', river: '🏞️ River',
    }

    questions.push({
      id: 'habitat',
      question: `Where does the ${species.title} live?`,
      image: species.image,
      choices: shuffleArray([
        { text: habitatLabels[habitat.key] || habitat.label, correct: true },
        ...wrongHabitats.map((h) => ({ text: habitatLabels[h], correct: false })),
      ]),
    })
  }

  // Question 3: True or false
  const fact = extractTrueFalseFact(species)
  if (fact) {
    questions.push({
      id: 'truefalse',
      question: fact.statement,
      image: species.image,
      choices: [
        { text: '✅ True!', correct: fact.isTrue },
        { text: '❌ False!', correct: !fact.isTrue },
      ],
    })
  }

  // Question 4: Year discovered (for new discoveries)
  if (species.yearDescribed && species.yearDescribed >= 2000) {
    const year = species.yearDescribed
    const wrongYears = shuffleArray(
      [year - 3, year - 1, year + 1, year - 5, year + 2].filter((y) => y !== year && y <= new Date().getFullYear() && y > 1990)
    ).slice(0, 3)

    questions.push({
      id: 'year',
      question: `When was the ${species.title} first described by scientists?`,
      image: species.image,
      choices: shuffleArray([
        { text: String(year), correct: true },
        ...wrongYears.map((y) => ({ text: String(y), correct: false })),
      ]),
    })
  }

  return questions.slice(0, 3) // Max 3 questions per species
}

function generateLittleQuestions(species) {
  const questions = []

  // Emoji matching: show picture, pick the right emoji
  if (species.type && species.type !== 'unknown') {
    const wrongTypes = shuffleArray(
      ALL_TYPES.filter((t) => t !== species.type)
    ).slice(0, 2)

    questions.push({
      id: 'emoji-match',
      question: 'Which emoji matches this animal?',
      image: species.image,
      choices: shuffleArray([
        { text: TYPE_EMOJI[species.type], emoji: TYPE_EMOJI[species.type], correct: true, big: true },
        ...wrongTypes.map((t) => ({ text: TYPE_EMOJI[t], emoji: TYPE_EMOJI[t], correct: false, big: true })),
      ]),
    })
  }

  return questions
}

function extractHabitat(text) {
  if (!text) return null
  const t = text.toLowerCase()

  if (t.includes('ocean') || t.includes('marine') || t.includes('sea')) return { key: 'ocean', label: '🌊 Ocean' }
  if (t.includes('forest') || t.includes('jungle') || t.includes('rainforest')) return { key: 'forest', label: '🌳 Forest' }
  if (t.includes('desert')) return { key: 'desert', label: '🏜️ Desert' }
  if (t.includes('arctic') || t.includes('polar') || t.includes('antarctic')) return { key: 'arctic', label: '❄️ Arctic' }
  if (t.includes('cave') || t.includes('subterranean')) return { key: 'cave', label: '🦇 Cave' }
  if (t.includes('grassland') || t.includes('savanna') || t.includes('prairie')) return { key: 'grassland', label: '🌾 Grassland' }
  if (t.includes('mountain') || t.includes('alpine')) return { key: 'mountain', label: '🏔️ Mountain' }
  if (t.includes('river') || t.includes('freshwater') || t.includes('lake')) return { key: 'river', label: '🏞️ River' }

  return null
}

function extractTrueFalseFact(species) {
  const text = (species.summary || species.fullText || '').toLowerCase()

  // Generate a true fact and sometimes flip it
  const makeFalse = Math.random() > 0.5

  if (species.type === 'mammal') {
    if (makeFalse) {
      return { statement: `True or false: The ${species.title} is a reptile.`, isTrue: false }
    }
    return { statement: `True or false: The ${species.title} is a mammal.`, isTrue: true }
  }

  // Use the isExtinct flag from Wikipedia categories (not text guessing)
  if (species.isExtinct === true) {
    if (makeFalse) {
      return { statement: `True or false: The ${species.title} is still alive today.`, isTrue: false }
    }
    return { statement: `True or false: The ${species.title} is extinct (no longer alive).`, isTrue: true }
  } else if (species.isExtinct === false) {
    // We know it's alive, so we can ask the reverse
    if (makeFalse) {
      return { statement: `True or false: The ${species.title} is extinct.`, isTrue: false }
    }
  }

  if (text.includes('nocturnal')) {
    if (makeFalse) {
      return { statement: `True or false: The ${species.title} is active during the day.`, isTrue: false }
    }
    return { statement: `True or false: The ${species.title} is nocturnal (active at night).`, isTrue: true }
  }

  if (text.includes('herbivore') || text.includes('plants')) {
    if (makeFalse) {
      return { statement: `True or false: The ${species.title} is a meat-eater.`, isTrue: false }
    }
    return { statement: `True or false: The ${species.title} eats plants.`, isTrue: true }
  }

  if (text.includes('carnivore') || text.includes('prey')) {
    return { statement: `True or false: The ${species.title} is a predator.`, isTrue: true }
  }

  if (text.includes('venomous') || text.includes('venom')) {
    return { statement: `True or false: The ${species.title} has venom.`, isTrue: true }
  }

  // Generic type fact
  if (species.type && species.type !== 'unknown') {
    const label = TYPE_LABEL[species.type]
    if (makeFalse) {
      const wrongType = shuffleArray(ALL_TYPES.filter((t) => t !== species.type))[0]
      return { statement: `True or false: The ${species.title} is a ${TYPE_LABEL[wrongType].toLowerCase()}.`, isTrue: false }
    }
    return { statement: `True or false: The ${species.title} is a ${label.toLowerCase()}.`, isTrue: true }
  }

  return null
}

/**
 * Generate fun facts for a species (enhanced version)
 */
export function generateKidFacts(details) {
  if (!details?.fullText && !details?.summary) return []

  const text = (details.fullText || details.summary || '').toLowerCase()
  const sourceText = details.fullText || details.summary || ''
  const facts = []

  // Discovery year
  const describedMatch = sourceText.match(/(?:described|discovered|first described)(?: by .+?)? in (\d{4})/i)
  if (describedMatch) {
    const year = parseInt(describedMatch[1])
    if (year >= 2020) {
      facts.push(`Brand new discovery! Scientists described this species in ${year}!`)
    } else {
      facts.push(`Scientists first described this species in ${year}!`)
    }
  }

  // Named after
  const namedAfter = sourceText.match(/named (?:after|in (?:honor|honour) of) (.+?)[.,]/i)
  if (namedAfter) {
    facts.push(`This species was named after ${namedAfter[1]}!`)
  }

  // Location
  const foundIn = sourceText.match(/(?:found in|endemic to|native to) ([A-Z][^.]{5,50})/i)
  if (foundIn) {
    facts.push(`It was found in ${foundIn[1].replace(/[.,]$/, '')}!`)
  }

  // Size
  const sizeMatch = sourceText.match(/(\d+[\.\d]*)\s*(cm|mm|m|inches|feet|kg|pounds|lbs|grams|g)\b/i)
  if (sizeMatch) {
    facts.push(`This creature measures about ${sizeMatch[0]}!`)
  }

  // Diet
  if (text.includes('herbivore') || (text.includes('plants') && text.includes('eat'))) {
    facts.push('This animal is a plant-eater! It loves munching on plants and leaves.')
  } else if (text.includes('carnivore') || text.includes('prey') || text.includes('hunt')) {
    facts.push('This is a meat-eater! It hunts other animals for food.')
  } else if (text.includes('omnivore')) {
    facts.push('This animal eats both plants AND meat. Talk about not being picky!')
  }

  // Habitat
  if (text.includes('ocean') || text.includes('marine')) {
    facts.push('This animal lives in the ocean!')
  } else if (text.includes('rainforest') || text.includes('jungle')) {
    facts.push('This creature lives in the rainforest, surrounded by tall trees!')
  } else if (text.includes('desert')) {
    facts.push('This tough animal lives in the desert where it is super hot and dry!')
  } else if (text.includes('cave') || text.includes('subterranean')) {
    facts.push('This creature lives underground in dark caves!')
  } else if (text.includes('arctic') || text.includes('polar')) {
    facts.push('Brrr! This animal lives in the freezing cold arctic!')
  }

  // Special traits - use isExtinct flag from Wikipedia categories, not text guessing
  if (details.isExtinct === true) {
    facts.push("This animal is extinct, which means it doesn't live on Earth anymore. But scientists found it!")
  } else if (text.includes('endangered')) {
    facts.push('This animal is endangered. There are very few left, and we need to protect them!')
  }

  if (text.includes('nocturnal')) {
    facts.push('This animal is nocturnal, meaning it sleeps during the day and wakes up at night!')
  }

  if (text.includes('venom') || text.includes('poisonous')) {
    facts.push('Watch out! This animal has special venom or poison to protect itself!')
  }

  // Fossil age
  const myaMatch = sourceText.match(/(\d+[\.\d]*)\s*million years ago/i)
  if (myaMatch) {
    facts.push(`This creature lived about ${myaMatch[1]} million years ago!`)
  }

  if (facts.length < 2) {
    facts.push('Every species is special and has its own unique features!')
    facts.push('Scientists discover about 18,000 new species every single year!')
  }

  return facts.slice(0, 6)
}
