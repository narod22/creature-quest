// Quiz question generator for species data
// Uses curated fun facts when available, falls back to Wikipedia text extraction
import { TYPE_LABEL, TYPE_EMOJI, shuffleArray } from './helpers'
import { SPECIES_DATA } from './species-data'

// Build flat SPECIES_FACTS lookup from SPECIES_DATA for backward compatibility
const SPECIES_FACTS = {}
for (const [name, data] of Object.entries(SPECIES_DATA)) {
  if (data.facts && data.facts.length > 0) {
    SPECIES_FACTS[name] = data.facts
  }
}

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

/**
 * Generate cross-species comparison questions from multiple species.
 * These are the hard ones: "Which animal is faster?", "Which is NOT a mammal?"
 * Requires knowledge across species, not just reading one card.
 */
export function generateComparisonQuestions(speciesList, mode = 'explorer') {
  if (mode === 'little') return []
  const questions = []

  // Build lookup of species with curated facts
  const withFacts = speciesList.filter((s) => SPECIES_FACTS[s.title]?.length > 0)

  // "Which is faster?" using speed facts
  const speedAnimals = []
  for (const s of withFacts) {
    const facts = SPECIES_FACTS[s.title]
    const speedFact = facts.find((f) => f.category === 'speed')
    if (speedFact) {
      const numMatch = speedFact.a.match(/(\d+[\.,\d]*)/)
      if (numMatch) speedAnimals.push({ species: s, speed: parseFloat(numMatch[1].replace(',', '')), fact: speedFact })
    }
  }
  if (speedAnimals.length >= 3) {
    const sorted = speedAnimals.sort((a, b) => b.speed - a.speed)
    const fastest = sorted[0]
    const others = shuffleArray(sorted.slice(1)).slice(0, 3)
    questions.push({
      id: 'compare-speed',
      question: `Which of these animals is the fastest?`,
      funFact: `${fastest.species.title} can reach ${fastest.fact.a}!`,
      choices: shuffleArray([
        { text: fastest.species.title, correct: true },
        ...others.map((o) => ({ text: o.species.title, correct: false })),
      ]),
    })
  }

  // "Which is NOT a mammal?" - tricky classification
  const mammals = speciesList.filter((s) => s.type === 'mammal')
  const nonMammals = speciesList.filter((s) => s.type && s.type !== 'mammal' && s.type !== 'unknown')
  if (nonMammals.length >= 1 && mammals.length >= 3) {
    const oddOne = shuffleArray(nonMammals)[0]
    const decoys = shuffleArray(mammals).slice(0, 3)
    questions.push({
      id: 'compare-not-mammal',
      question: `Which of these is NOT a mammal?`,
      funFact: `${oddOne.title} is actually ${oddOne.typeLabel ? oddOne.typeLabel.toLowerCase().startsWith('a') ? 'an' : 'a' : 'a'} ${(oddOne.typeLabel || oddOne.type)}!`,
      choices: shuffleArray([
        { text: oddOne.title, correct: true },
        ...decoys.map((d) => ({ text: d.title, correct: false })),
      ]),
    })
  }

  // "Which of these lays eggs?" - tricky for mammals like platypus
  const eggLayers = speciesList.filter((s) => ['bird', 'reptile', 'amphibian', 'fish', 'insect', 'arachnid'].includes(s.type))
  const noEggs = speciesList.filter((s) => s.type === 'mammal')
  if (eggLayers.length >= 1 && noEggs.length >= 2) {
    const correct = shuffleArray(eggLayers)[0]
    const wrongs = shuffleArray(noEggs).slice(0, 3)
    if (wrongs.length >= 2) {
      questions.push({
        id: 'compare-eggs',
        question: `Which of these animals lays eggs?`,
        funFact: `Most ${correct.typeLabel || correct.type}s lay eggs!`,
        choices: shuffleArray([
          { text: correct.title, correct: true },
          ...wrongs.map((w) => ({ text: w.title, correct: false })),
        ]),
      })
    }
  }

  // "Which animal can live the longest?" using lifespan facts
  const lifespanAnimals = []
  for (const s of withFacts) {
    const facts = SPECIES_FACTS[s.title]
    const lifeFact = facts.find((f) => f.category === 'lifespan')
    if (lifeFact) {
      const numMatch = lifeFact.a.match(/(\d+[\.,\d]*)/)
      if (numMatch) lifespanAnimals.push({ species: s, years: parseFloat(numMatch[1].replace(',', '')), fact: lifeFact })
    }
  }
  if (lifespanAnimals.length >= 3) {
    const sorted = lifespanAnimals.sort((a, b) => b.years - a.years)
    const longest = sorted[0]
    const others = shuffleArray(sorted.slice(1)).slice(0, 3)
    questions.push({
      id: 'compare-lifespan',
      question: `Which of these animals can live the longest?`,
      funFact: `${longest.species.title} can live ${longest.fact.a}!`,
      choices: shuffleArray([
        { text: longest.species.title, correct: true },
        ...others.map((o) => ({ text: o.species.title, correct: false })),
      ]),
    })
  }

  // "Which of these facts is TRUE?" - mix real facts with plausible fakes
  if (withFacts.length >= 2) {
    const picked = shuffleArray(withFacts)[0]
    const realFact = shuffleArray(SPECIES_FACTS[picked.title])[0]
    const fakeFacts = shuffleArray([
      `${picked.title}s can breathe underwater for up to 3 hours`,
      `${picked.title}s have been trained to deliver mail`,
      `${picked.title}s can see ultraviolet and infrared light`,
      `${picked.title}s hibernate for 6 months every year`,
      `${picked.title}s communicate using ultrasonic clicks humans can't hear`,
      `Baby ${picked.title.toLowerCase()}s can walk within 10 minutes of being born`,
      `${picked.title}s have four stomachs to digest their food`,
      `${picked.title}s shed their skin completely every two weeks`,
    ]).slice(0, 3)

    questions.push({
      id: 'compare-true-fact',
      question: `Which fact about the ${picked.title} is actually TRUE?`,
      image: picked.image,
      funFact: realFact.text,
      choices: shuffleArray([
        { text: realFact.text, correct: true },
        ...fakeFacts.map((f) => ({ text: f, correct: false })),
      ]),
    })
  }

  // "Which animal does NOT live in [region]?" using habitat facts
  const habitatAnimals = []
  for (const s of withFacts) {
    const facts = SPECIES_FACTS[s.title]
    const habFact = facts.find((f) => f.category === 'habitat')
    if (habFact) habitatAnimals.push({ species: s, fact: habFact })
  }
  if (habitatAnimals.length >= 2) {
    // Find one that lives somewhere specific, then ask about animals that DON'T live there
    const anchor = shuffleArray(habitatAnimals)[0]
    const locationMatch = anchor.fact.a.match(/(Antarctica|Arctic|Africa|Asia|Australia|South America|North America|Europe|Madagascar|ocean)/)
    if (locationMatch) {
      const location = locationMatch[1]
      const liveThere = [anchor]
      const dontLiveThere = habitatAnimals.filter((h) => {
        const theirLocation = h.fact.a
        return !theirLocation.toLowerCase().includes(location.toLowerCase())
      })
      if (dontLiveThere.length >= 1 && liveThere.length >= 1) {
        const wrong = shuffleArray(dontLiveThere)[0]
        const decoys = shuffleArray(liveThere.concat(
          habitatAnimals.filter((h) => h !== wrong && h !== anchor)
        )).slice(0, 2)
        if (decoys.length >= 2) {
          questions.push({
            id: 'compare-habitat',
            question: `Which of these does NOT live in or near ${location}?`,
            funFact: `${wrong.species.title} actually lives in ${wrong.fact.a}!`,
            choices: shuffleArray([
              { text: wrong.species.title, correct: true },
              { text: anchor.species.title, correct: false },
              ...decoys.map((d) => ({ text: d.species.title, correct: false })),
            ]).slice(0, 4),
          })
        }
      }
    }
  }

  return shuffleArray(questions)
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

  // Step 2: Only use curated facts for quizzes. Wikipedia text extraction is unreliable
  // and produces wrong answers. If no curated facts, fall back to type question only.

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
 * ONLY uses curated, verified facts. No Wikipedia extraction.
 * If no curated facts exist, returns an empty array so the UI
 * can show a friendly "we're still learning" message.
 */
export function generateKidFacts(details) {
  const curatedFacts = SPECIES_FACTS[details.title]
  if (curatedFacts && curatedFacts.length > 0) {
    return curatedFacts.map((f) => f.text)
  }
  return []
}

/**
 * Check if a species has curated (verified) facts.
 */
export function hasCuratedFacts(title) {
  return SPECIES_FACTS[title] && SPECIES_FACTS[title].length > 0
}
