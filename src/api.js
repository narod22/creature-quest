// Uses Wikipedia API for species info and iNaturalist for images
// Both are free, no API key needed

const WIKI_SEARCH = 'https://en.wikipedia.org/w/api.php'
const INAT_API = 'https://api.inaturalist.org/v1'

// ============================================================
// NEW SPECIES DISCOVERIES - the core feature
// ============================================================

// Fetch species from Wikipedia's "Animals/Species described in YYYY" categories
// Wikipedia organizes these into subcategories like "Animals described in 2025",
// "Insects described in 2025", "Fish described in 2025", etc.
export async function getNewlyDescribedSpecies(year = null) {
  const targetYear = year || new Date().getFullYear()

  // These subcategories have the actual species pages
  const categoryNames = [
    `Animals described in ${targetYear}`,
    `Insects described in ${targetYear}`,
    `Fish described in ${targetYear}`,
    `Reptiles described in ${targetYear}`,
    `Amphibians described in ${targetYear}`,
    `Birds described in ${targetYear}`,
    `Mammals described in ${targetYear}`,
    `Arachnids described in ${targetYear}`,
    `Molluscs described in ${targetYear}`,
    `Crustaceans described in ${targetYear}`,
    `Fossil taxa described in ${targetYear}`,
    `Species described in ${targetYear}`,
  ]

  const allMembers = []
  const seenIds = new Set()

  // Fetch from multiple categories in parallel (max 4 at a time to be polite)
  for (let i = 0; i < categoryNames.length; i += 4) {
    const batch = categoryNames.slice(i, i + 4)
    const fetches = batch.map(async (catName) => {
      try {
        const params = new URLSearchParams({
          action: 'query',
          list: 'categorymembers',
          cmtitle: `Category:${catName}`,
          cmtype: 'page',
          cmlimit: '20',
          format: 'json',
          origin: '*',
        })
        const res = await fetch(`${WIKI_SEARCH}?${params}`)
        const data = await res.json()
        return data.query?.categorymembers || []
      } catch {
        return []
      }
    })

    const results = await Promise.all(fetches)
    for (const members of results) {
      for (const m of members) {
        if (!seenIds.has(m.pageid)) {
          seenIds.add(m.pageid)
          allMembers.push(m)
        }
      }
    }

    if (allMembers.length >= 50) break
  }

  if (!allMembers.length) return { species: [], nextToken: null }

  // Get details in batches of 20 (API limit for extracts)
  const allSpecies = []
  const memberBatches = []
  for (let i = 0; i < Math.min(allMembers.length, 60); i += 20) {
    memberBatches.push(allMembers.slice(i, i + 20))
  }

  for (const batch of memberBatches) {
    const pageIds = batch.map((m) => m.pageid).join('|')
    const detailParams = new URLSearchParams({
      action: 'query',
      pageids: pageIds,
      prop: 'extracts|pageimages|categories',
      exintro: '1',
      explaintext: '1',
      exsentences: '3',
      piprop: 'thumbnail',
      pithumbsize: '400',
      cllimit: '10',
      format: 'json',
      origin: '*',
    })

    try {
      const detailRes = await fetch(`${WIKI_SEARCH}?${detailParams}`)
      const detailData = await detailRes.json()

      const species = Object.values(detailData.query?.pages || {})
        .filter((p) => p.extract && p.extract.length > 20)
        .map((page) => {
          const cats = (page.categories || []).map((c) => c.title.toLowerCase())
          const type = guessAnimalType(cats, page.extract)

          return {
            id: page.pageid,
            title: page.title,
            summary: page.extract,
            image: page.thumbnail?.source || null,
            wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
            yearDescribed: targetYear,
            type,
            isNewDiscovery: true,
          }
        })

      allSpecies.push(...species)
    } catch {
      // continue
    }
  }

  return { species: allSpecies, nextToken: null }
}

// Load new discoveries from multiple years for a richer feed
export async function loadDiscoveryFeed() {
  const currentYear = new Date().getFullYear()
  const results = []

  // Try current year first, then previous years for more content
  for (const year of [currentYear, currentYear - 1, currentYear - 2]) {
    try {
      const { species } = await getNewlyDescribedSpecies(year)
      results.push(...species)
      if (results.length >= 18) break
    } catch (e) {
      console.error(`Failed to load species from ${year}:`, e)
    }
  }

  // Shuffle so it's not alphabetical every time
  return shuffleArray(results).slice(0, 18)
}

// Search for newly discovered species filtered by type
export async function searchNewDiscoveries(query) {
  // Search Wikipedia specifically for new species related to the query
  const searches = [
    `"new species" ${query}`,
    `"species described" ${query}`,
    `"newly discovered" ${query} species`,
  ]

  const allResults = []
  const seenIds = new Set()

  for (const searchTerm of searches) {
    const params = new URLSearchParams({
      action: 'query',
      list: 'search',
      srsearch: searchTerm,
      srnamespace: '0',
      srlimit: '10',
      format: 'json',
      origin: '*',
    })

    try {
      const res = await fetch(`${WIKI_SEARCH}?${params}`)
      const data = await res.json()

      if (data.query?.search?.length) {
        for (const result of data.query.search) {
          if (!seenIds.has(result.pageid)) {
            seenIds.add(result.pageid)
            allResults.push(result)
          }
        }
      }
    } catch (e) {
      // continue with other searches
    }

    if (allResults.length >= 12) break
  }

  if (!allResults.length) return []

  // Get details
  const pageIds = allResults
    .slice(0, 15)
    .map((r) => r.pageid)
    .join('|')
  const detailParams = new URLSearchParams({
    action: 'query',
    pageids: pageIds,
    prop: 'extracts|pageimages|categories',
    exintro: '1',
    explaintext: '1',
    exsentences: '4',
    piprop: 'thumbnail',
    pithumbsize: '400',
    cllimit: '10',
    format: 'json',
    origin: '*',
  })

  const detailRes = await fetch(`${WIKI_SEARCH}?${detailParams}`)
  const detailData = await detailRes.json()

  return Object.values(detailData.query?.pages || {})
    .filter((p) => p.extract && p.extract.length > 50)
    .map((page) => {
      const cats = (page.categories || []).map((c) => c.title.toLowerCase())
      const type = guessAnimalType(cats, page.extract)
      const yearMatch = page.extract?.match(/described in (\d{4})/i)

      return {
        id: page.pageid,
        title: page.title,
        summary: page.extract,
        image: page.thumbnail?.source || null,
        wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
        yearDescribed: yearMatch ? parseInt(yearMatch[1]) : null,
        type,
        isNewDiscovery: true,
      }
    })
}

// Search news articles about new species discoveries
export async function searchSpeciesNews(query = '') {
  const searchTerm = query
    ? `new species discovered ${query} 2025 OR 2026`
    : 'new species discovered 2025 OR 2026'

  // Use Wikipedia's search to find articles about species discoveries
  // that reference news and recent findings
  const params = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: searchTerm,
    srnamespace: '0',
    srlimit: '15',
    format: 'json',
    origin: '*',
  })

  const res = await fetch(`${WIKI_SEARCH}?${params}`)
  const data = await res.json()

  if (!data.query?.search?.length) return []

  const pageIds = data.query.search.map((r) => r.pageid).join('|')
  const detailParams = new URLSearchParams({
    action: 'query',
    pageids: pageIds,
    prop: 'extracts|pageimages',
    exintro: '1',
    explaintext: '1',
    exsentences: '4',
    piprop: 'thumbnail',
    pithumbsize: '400',
    format: 'json',
    origin: '*',
  })

  const detailRes = await fetch(`${WIKI_SEARCH}?${detailParams}`)
  const detailData = await detailRes.json()

  return Object.values(detailData.query?.pages || {})
    .filter((p) => p.extract && p.extract.length > 50)
    .map((page) => ({
      id: page.pageid,
      title: page.title,
      summary: page.extract,
      image: page.thumbnail?.source || null,
      wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
    }))
}

// ============================================================
// GENERAL SEARCH (kept from original)
// ============================================================

export async function searchSpecies(query) {
  const searchQuery = `${query} species animal`
  const params = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: searchQuery,
    srnamespace: '0',
    srlimit: '8',
    format: 'json',
    origin: '*',
  })

  const res = await fetch(`${WIKI_SEARCH}?${params}`)
  const data = await res.json()

  if (!data.query?.search?.length) return []

  const pageIds = data.query.search.map((r) => r.pageid).join('|')
  const detailParams = new URLSearchParams({
    action: 'query',
    pageids: pageIds,
    prop: 'extracts|pageimages|categories',
    exintro: '1',
    explaintext: '1',
    exsentences: '4',
    piprop: 'thumbnail',
    pithumbsize: '400',
    format: 'json',
    origin: '*',
  })

  const detailRes = await fetch(`${WIKI_SEARCH}?${detailParams}`)
  const detailData = await detailRes.json()

  const pages = Object.values(detailData.query?.pages || {})
  return pages
    .filter((p) => p.extract && p.extract.length > 50)
    .map((page) => ({
      id: page.pageid,
      title: page.title,
      summary: page.extract,
      image: page.thumbnail?.source || null,
      wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
    }))
}

// ============================================================
// DETAIL VIEW
// ============================================================

export async function getSpeciesDetails(title) {
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'extracts|pageimages|images',
    explaintext: '1',
    piprop: 'thumbnail',
    pithumbsize: '600',
    imlimit: '10',
    format: 'json',
    origin: '*',
  })

  const res = await fetch(`${WIKI_SEARCH}?${params}`)
  const data = await res.json()
  const page = Object.values(data.query?.pages || {})[0]

  if (!page || page.missing !== undefined) return null

  let inatImages = []
  try {
    inatImages = await getInatImages(title)
  } catch (e) {
    // silently fail
  }

  return {
    id: page.pageid,
    title: page.title,
    fullText: page.extract || '',
    image: page.thumbnail?.source || null,
    additionalImages: inatImages,
    wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
  }
}

async function getInatImages(speciesName) {
  try {
    const searchRes = await fetch(
      `${INAT_API}/taxa?q=${encodeURIComponent(speciesName)}&per_page=1`
    )
    const searchData = await searchRes.json()

    if (!searchData.results?.length) return []

    const taxon = searchData.results[0]
    const photos = taxon.taxon_photos?.slice(0, 6) || []

    return photos.map((p) => ({
      url: p.photo?.medium_url || p.photo?.url,
      attribution: p.photo?.attribution || 'iNaturalist',
    }))
  } catch {
    return []
  }
}

// ============================================================
// FUN FACTS
// ============================================================

export function generateKidFacts(details) {
  if (!details?.fullText) return []

  const text = details.fullText.toLowerCase()
  const facts = []

  // When was it discovered?
  const describedMatch = details.fullText.match(/described in (\d{4})/i)
  const discoveredMatch = details.fullText.match(/discovered in (\d{4})/i)
  const firstDescMatch = details.fullText.match(/first described (?:by .+? )?in (\d{4})/i)

  if (describedMatch) {
    const year = parseInt(describedMatch[1])
    if (year >= 2020) {
      facts.push(`Brand new discovery! Scientists described this species in ${year}!`)
    } else {
      facts.push(`Scientists first described this species in ${year}!`)
    }
  } else if (discoveredMatch) {
    facts.push(`Scientists discovered this species in ${discoveredMatch[1]}!`)
  } else if (firstDescMatch) {
    facts.push(`This species was first described in ${firstDescMatch[1]}!`)
  }

  // Who discovered it?
  const namedAfter = details.fullText.match(/named (?:after|in (?:honor|honour) of) (.+?)[.,]/i)
  if (namedAfter) {
    facts.push(`This species was named after ${namedAfter[1]}!`)
  }

  // Where was it found?
  const foundIn = details.fullText.match(/(?:found in|endemic to|native to|discovered in) ([A-Z][^.]{5,60})/i)
  if (foundIn) {
    facts.push(`It was found in ${foundIn[1].replace(/[.,]$/, '')}!`)
  }

  // Size info
  const sizeMatch = details.fullText.match(
    /(\d+[\.\d]*)\s*(cm|mm|m|inches|feet|kg|pounds|lbs|grams|g)\b/i
  )
  if (sizeMatch) {
    facts.push(`This creature measures about ${sizeMatch[0]}!`)
  }

  // Diet clues
  if (text.includes('herbivore') || text.includes('plants') || text.includes('vegetation')) {
    facts.push('This animal is a plant-eater! It loves munching on plants and leaves.')
  } else if (text.includes('carnivore') || text.includes('prey') || text.includes('hunt')) {
    facts.push('This is a meat-eater! It hunts other animals for food.')
  } else if (text.includes('omnivore')) {
    facts.push('This animal eats both plants AND meat. Talk about not being picky!')
  } else if (text.includes('insect') && text.includes('eat')) {
    facts.push('This creature loves eating bugs! Yum (for them, anyway)!')
  }

  // Habitat
  if (text.includes('ocean') || text.includes('marine') || text.includes('sea')) {
    facts.push('This animal lives in the ocean! It calls the salty sea its home.')
  } else if (text.includes('forest') || text.includes('jungle') || text.includes('rainforest')) {
    facts.push('This creature lives in the forest, surrounded by tall trees!')
  } else if (text.includes('desert')) {
    facts.push('This tough animal lives in the desert where it is super hot and dry!')
  } else if (text.includes('cave') || text.includes('subterranean')) {
    facts.push('This creature lives underground in dark caves!')
  } else if (text.includes('arctic') || text.includes('polar') || text.includes('ice')) {
    facts.push('Brrr! This animal lives in the freezing cold arctic!')
  }

  // Extinct or endangered
  if (text.includes('extinct')) {
    facts.push(
      "This animal is extinct, which means it doesn't live on Earth anymore. But scientists just found its fossils!"
    )
  } else if (text.includes('endangered')) {
    facts.push(
      'This animal is endangered, which means there are very few left. We need to protect them!'
    )
  }

  // Nocturnal
  if (text.includes('nocturnal')) {
    facts.push('This animal is nocturnal, meaning it sleeps during the day and wakes up at night!')
  }

  // Can fly
  if (text.includes('wingspan') || (text.includes('fly') && text.includes('wing'))) {
    facts.push('This creature can fly! It has wings to soar through the sky!')
  }

  // Venomous
  if (text.includes('venom') || text.includes('poisonous')) {
    facts.push('Watch out! This animal has special venom or poison to protect itself!')
  }

  // Fossil
  if (text.includes('fossil') || text.includes('million years ago')) {
    const myaMatch = details.fullText.match(/(\d+[\.\d]*)\s*million years ago/i)
    if (myaMatch) {
      facts.push(`This creature lived about ${myaMatch[1]} million years ago! That's way before humans existed!`)
    } else {
      facts.push('Scientists found fossils of this animal, which means it lived a very long time ago!')
    }
  }

  if (facts.length < 2) {
    facts.push('Every animal species is special and has its own unique features!')
    facts.push('Scientists are still discovering new species every single year!')
  }

  return facts.slice(0, 6)
}

// ============================================================
// HELPERS
// ============================================================

function guessAnimalType(categories, extract) {
  const text = [...categories, (extract || '').toLowerCase()].join(' ')

  if (text.includes('dinosaur') || text.includes('sauropod') || text.includes('theropod'))
    return 'dinosaur'
  if (text.includes('mammal')) return 'mammal'
  if (text.includes('bird') || text.includes('aves')) return 'bird'
  if (text.includes('reptil') || text.includes('lizard') || text.includes('snake')) return 'reptile'
  if (text.includes('amphibian') || text.includes('frog') || text.includes('salamander'))
    return 'amphibian'
  if (text.includes('fish') || text.includes('actinopter') || text.includes('chondrichth'))
    return 'fish'
  if (text.includes('insect') || text.includes('beetle') || text.includes('butterfly') || text.includes('moth'))
    return 'insect'
  if (text.includes('spider') || text.includes('arachnid')) return 'arachnid'
  if (text.includes('mollus') || text.includes('snail') || text.includes('octopus')) return 'mollusk'
  if (text.includes('crustac') || text.includes('crab') || text.includes('shrimp')) return 'crustacean'
  if (text.includes('plant') || text.includes('flora')) return 'plant'
  if (text.includes('fungi') || text.includes('mushroom')) return 'fungus'

  return 'unknown'
}

export function getTypeEmoji(type) {
  const map = {
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
  return map[type] || '🔬'
}

export function getTypeLabel(type) {
  const map = {
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
    unknown: 'New Species',
  }
  return map[type] || 'New Species'
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
