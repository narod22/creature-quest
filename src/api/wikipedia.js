// Wikipedia API calls for species data
import { classifySpecies } from './taxonomy'
import { getTypeEmoji, getTypeLabel, getCached, setCache, shuffleArray } from './helpers'
import { getCuratedTitles } from './curated-species'

const WIKI_API = 'https://en.wikipedia.org/w/api.php'

function wikiParams(extra) {
  return new URLSearchParams({ format: 'json', origin: '*', ...extra })
}

// Build a standardized species object from a Wikipedia page
function buildSpecies(page, overrides = {}) {
  const type = classifySpecies(page)
  const cats = (page.categories || []).map((c) => (c.title || c).replace('Category:', ''))
  const isExtinct = checkExtinct(cats, page.extract)

  return {
    id: page.pageid,
    title: page.title,
    summary: page.extract || '',
    image: page.thumbnail?.source || null,
    wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
    type,
    typeEmoji: getTypeEmoji(type),
    typeLabel: getTypeLabel(type),
    categories: cats,
    isExtinct,
    ...overrides,
  }
}

/**
 * Determine if a species is extinct using Wikipedia CATEGORIES (not text guessing).
 *
 * The old approach scanned the intro text for the word "extinct" and got
 * false positives (e.g., "unlike its extinct relatives"). This version
 * only checks for explicit "Extinct" categories in Wikipedia's taxonomy.
 * If a species is in the "Extinct animals" or "Fossil taxa" categories, it's extinct.
 * Otherwise it's alive, even if the text mentions extinction in passing.
 */
function checkExtinct(categories, extract) {
  const catText = categories.map((c) => c.toLowerCase()).join(' ')

  // Strong signal: explicit extinct categories
  if (catText.includes('extinct') && !catText.includes('extant')) return true
  if (catText.includes('fossil taxa')) return true
  if (catText.includes('prehistoric')) return true

  // Only check text as backup if categories are empty
  // AND the first sentence explicitly says "is an extinct" or "was an extinct"
  if (categories.length === 0 && extract) {
    const firstSentence = extract.split('.')[0].toLowerCase()
    if (firstSentence.includes('is an extinct') || firstSentence.includes('was an extinct')) {
      return true
    }
  }

  return false
}

/**
 * Check if a Wikipedia page is about an actual species/organism rather than
 * a general topic (like "Bird migration", "Birdcage", "Fecal sac").
 *
 * Real species pages almost always have:
 *  - Categories like "Species described in YYYY" or "Taxa named by..."
 *  - Scientific classification language in the intro ("is a species of",
 *    "is a genus of", "is an extinct", "is a family of")
 *  - A binomial/trinomial name pattern in the intro
 *
 * Topic/concept pages have categories like "Ornithology", "Ethology",
 * titles like "Outline of...", "Glossary of...", "List of..."
 */
function isActualSpeciesPage(page) {
  const title = page.title || ''
  const extract = (page.extract || '').toLowerCase()
  const cats = (page.categories || []).map((c) => (c.title || c).toLowerCase())
  const catText = cats.join(' ')

  // Reject people, companies, media, places
  const personPatterns = [
    'born ', 'is an american', 'is a british', 'is an australian',
    'is a canadian', 'is an actor', 'is an actress', 'is a singer',
    'is a musician', 'is a politician', 'is a writer', 'is an author',
    'is a filmmaker', 'is a director', 'is a comedian', 'is a rapper',
    'is a football', 'is a basketball', 'is a baseball', 'is a soccer',
    'is a television', 'is a radio', 'is a news', 'is a media',
    'is a company', 'is a corporation', 'is a brand',
    'is a film', 'is a movie', 'is a novel', 'is a book',
    'is a song', 'is an album', 'is a band', 'is a video game',
    'is a city', 'is a town', 'is a village', 'is a country',
    'is a university', 'is a school', 'is a college',
    'is a professional', 'is a former', 'is a retired',
    'is a type of knife', 'is a knife', 'is a weapon',
    'is a type of sword', 'is a military', 'is a warship',
    'is a helicopter', 'is an aircraft', 'is a car',
    'is a rocket', 'is a satellite', 'is a spacecraft',
    'is a concept', 'is a term', 'is a phenomenon',
    'is a technique', 'is a method', 'is a process',
  ]
  if (personPatterns.some((p) => extract.startsWith(p) || extract.includes(p))) {
    // Double check: if it also has biological categories, it's probably an animal
    // (e.g., "Wolverine" the animal vs "Wolverine" the character)
    if (!catText.includes('species') && !catText.includes('fauna') &&
        !catText.includes('animal') && !catText.includes('described in')) {
      return false
    }
  }

  // Reject by categories: people, companies, media
  const badCatPatterns = [
    'living people', 'deaths', 'births', 'actors', 'actresses',
    'singers', 'musicians', 'politicians', 'writers', 'companies',
    'television series', 'films', 'albums', 'songs', 'video games',
    'cities in', 'populated places', 'universities', 'schools',
  ]
  if (badCatPatterns.some((p) => catText.includes(p))) return false

  // Reject obvious non-species page titles
  const titleLower = title.toLowerCase()

  // Reject disambiguation pages
  if (titleLower.includes('(disambiguation)')) return false
  if (extract.startsWith('this is a disambiguation') || extract.includes('may refer to:')) return false

  const badTitlePrefixes = [
    'outline of', 'glossary of', 'list of', 'index of',
    'timeline of', 'history of', 'climate change and',
  ]
  if (badTitlePrefixes.some((p) => titleLower.startsWith(p))) return false

  // Reject topic/concept/object articles by title patterns
  const badTitleWords = [
    'terminology', 'migration', 'birdcage', 'cage', 'membrane',
    'conservation', 'evolution of', 'anatomy of', 'plucking post',
    'fecal sac', 'foraging flock', 'helpers at the',
    'knife', 'sword', 'weapon', 'missile', 'helicopter', 'aircraft',
    'tank', 'ship', 'submarine', 'car', 'vehicle', 'motorcycle',
    'effect', 'theorem', 'algorithm', 'mimicry',
  ]
  if (badTitleWords.some((w) => titleLower.includes(w))) return false

  // Strong positive signal: "Species described in" category
  if (catText.includes('species described in') || catText.includes('described in 2')) return true
  if (catText.includes('taxa named by')) return true

  // Strong positive signal: scientific classification language in the intro
  const speciesPatterns = [
    'is a species of', 'is a genus of', 'is a family of',
    'is an order of', 'is a class of', 'is a subspecies of',
    'is an extinct', 'is a group of', 'is a type of',
    'are a family of', 'are a genus of', 'are an order of',
    'are a species of', 'is a small', 'is a large',
    'is a medium', 'is a common', 'is a rare',
    'is a venomous', 'is a poisonous', 'is a flightless',
    'is a nocturnal', 'is a diurnal', 'is a migratory',
    'is a predatory', 'is a parasitic',
    // Intro patterns like "The X (Scientific name) is a..."
    'is a bird', 'is a mammal', 'is a reptile', 'is a fish',
    'is an amphibian', 'is an insect', 'is an arachnid',
    'is a crustacean', 'is a mollus',
    'are birds', 'are mammals', 'are reptiles', 'are fish',
    'are amphibians', 'are insects',
    // Specific organism language
    'endemic to', 'native to', 'found in', 'inhabits',
    'belongs to the family', 'of the family', 'in the family',
    'of the order', 'in the order',
  ]
  if (speciesPatterns.some((p) => extract.includes(p))) return true

  // Parenthetical scientific name in first line (e.g., "The red fox (Vulpes vulpes)")
  const firstLine = (page.extract || '').split('\n')[0] || ''
  if (/\([A-Z][a-z]+ [a-z]+\)/.test(firstLine)) return true

  // If it has a biological taxonomy category AND doesn't look like a concept
  if (catText.includes('biota of') || catText.includes('fauna of') || catText.includes('flora of')) return true

  // Fallback: reject if none of the positive signals matched
  return false
}

// Fetch page details (extracts, images, categories) for a set of page IDs
async function fetchPageDetails(pageIds) {
  if (!pageIds.length) return []

  const results = []
  // Process in batches of 20 (Wikipedia API limit for extracts)
  for (let i = 0; i < pageIds.length; i += 20) {
    const batch = pageIds.slice(i, i + 20)
    const params = wikiParams({
      action: 'query',
      pageids: batch.join('|'),
      prop: 'extracts|pageimages|categories',
      exintro: '1',
      explaintext: '1',
      exsentences: '4',
      piprop: 'thumbnail',
      pithumbsize: '400',
      cllimit: '50',
      format: 'json',
    })

    try {
      const res = await fetch(`${WIKI_API}?${params}`)
      const data = await res.json()
      const pages = Object.values(data.query?.pages || {})
      results.push(...pages.filter((p) => p.extract && p.extract.length > 20))
    } catch {
      // continue with other batches
    }
  }

  return results
}

/**
 * Search for species by query. Used on the Explore page.
 *
 * Strategy:
 * 1. Direct title lookup (exact match + common variations)
 * 2. Wikipedia opensearch (autocomplete-style, great for partial names)
 * 3. Full-text search for broader coverage
 * 4. Light filtering (reject obvious non-species but don't over-filter)
 *
 * The goal: a kid types "fox" and gets Fox, Red fox, Arctic fox, Fennec fox.
 * A kid types "blue whale" and gets the Blue whale article immediately.
 */
export async function searchSpecies(query) {
  const cacheKey = `search:${query}`
  const cached = getCached(cacheKey)
  if (cached) return cached

  // Step 1: Try direct title lookups (exact + common variations)
  const titleVariations = [
    query,
    `${query} (animal)`,    // handles disambiguated titles like "Crane (bird)"
    `${query} (bird)`,
    `${query} (fish)`,
    `${query} (insect)`,
  ]
  const directPages = await fetchPagesByTitle(titleVariations)

  // Step 2: Run opensearch (Wikipedia autocomplete) + text searches in parallel
  const [opensearchRes, searchRes1, searchRes2] = await Promise.all([
    // Opensearch gives great results for partial names
    fetch(`${WIKI_API}?${wikiParams({
      action: 'opensearch',
      search: query,
      limit: '15',
      namespace: '0',
    })}`).catch(() => null),
    // Full text search: raw query
    fetch(`${WIKI_API}?${wikiParams({
      action: 'query', list: 'search',
      srsearch: query,
      srnamespace: '0', srlimit: '15',
    })}`).catch(() => null),
    // Full text search: query + "species" or "animal"
    fetch(`${WIKI_API}?${wikiParams({
      action: 'query', list: 'search',
      srsearch: `${query} animal OR species`,
      srnamespace: '0', srlimit: '10',
    })}`).catch(() => null),
  ])

  // Collect opensearch title suggestions
  const opensearchTitles = []
  if (opensearchRes) {
    try {
      const osData = await opensearchRes.json()
      // opensearch returns [query, [titles], [descriptions], [urls]]
      if (Array.isArray(osData) && osData[1]) {
        opensearchTitles.push(...osData[1])
      }
    } catch { /* ignore */ }
  }

  // Fetch opensearch results by title (these are usually very relevant)
  const opensearchPages = opensearchTitles.length > 0
    ? await fetchPagesByTitle(opensearchTitles.slice(0, 10))
    : []

  // Collect text search page IDs
  const seenIds = new Set()
  for (const page of [...directPages, ...opensearchPages]) {
    seenIds.add(page.pageid)
  }

  const searchPageIds = []
  for (const res of [searchRes1, searchRes2]) {
    if (!res) continue
    try {
      const data = await res.json()
      for (const result of (data.query?.search || [])) {
        if (!seenIds.has(result.pageid)) {
          seenIds.add(result.pageid)
          searchPageIds.push(result.pageid)
        }
      }
    } catch { /* ignore */ }
  }

  // Fetch details for text search results
  const searchPages = await fetchPageDetails(searchPageIds.slice(0, 15))

  // Step 3: Build species objects
  // Direct title matches: include if they look biological (the user typed exactly this)
  // Opensearch + text search results: filter to actual species pages
  const allSpecies = [
    ...directPages.filter((page) => isActualSpeciesPage(page)).map((page) => buildSpecies(page)),
    ...opensearchPages.filter((page) => isActualSpeciesPage(page)).map((page) => buildSpecies(page)),
    ...searchPages.filter((page) => isActualSpeciesPage(page)).map((page) => buildSpecies(page)),
  ]

  // Deduplicate by page ID
  const seen = new Set()
  const deduped = allSpecies.filter((s) => {
    if (seen.has(s.id)) return false
    seen.add(s.id)
    return true
  })

  // Sort: results whose title contains the search query come first
  const queryLower = query.toLowerCase()
  const species = deduped.sort((a, b) => {
    const aMatch = a.title.toLowerCase().includes(queryLower) ? 0 : 1
    const bMatch = b.title.toLowerCase().includes(queryLower) ? 0 : 1
    return aMatch - bMatch
  })

  setCache(cacheKey, species)
  return species
}

/**
 * Browse species by category using CURATED POPULAR SPECIES LISTS.
 *
 * Wikipedia's taxonomic categories return parasitic trematodes and obscure
 * nematodes instead of dolphins and sea turtles. So we use hand-curated
 * lists of popular, recognizable, kid-friendly species per category
 * and fetch their Wikipedia data by exact title.
 *
 * The categoryLabel param matches the label from CATEGORIES in helpers.js
 * (e.g., "Mammals", "Ocean Creatures", "Dinosaurs").
 */
export async function browseByCategory(categoryLabel) {
  const cacheKey = `browse:${categoryLabel}`
  const cached = getCached(cacheKey)
  if (cached) return cached

  // Get shuffled sample of curated species titles for this category
  const titles = getCuratedTitles(categoryLabel, 20)
  if (!titles.length) return []

  // Fetch Wikipedia pages by exact title (batch lookup)
  const pages = await fetchPagesByTitle(titles)

  // Build species objects (no isActualSpeciesPage filter needed for curated lists)
  const species = pages.map((page) => buildSpecies(page))

  setCache(cacheKey, species)
  return species
}

/**
 * Fetch Wikipedia pages by exact title in batches.
 * Unlike search, this does a direct title lookup, so "Giant squid"
 * returns the Giant Squid article, not a random search result.
 */
async function fetchPagesByTitle(titles) {
  const results = []

  // Wikipedia API accepts up to 50 titles per request
  for (let i = 0; i < titles.length; i += 20) {
    const batch = titles.slice(i, i + 20)
    const params = wikiParams({
      action: 'query',
      titles: batch.join('|'),
      prop: 'extracts|pageimages|categories',
      exintro: '1',
      explaintext: '1',
      exsentences: '4',
      piprop: 'thumbnail',
      pithumbsize: '400',
      cllimit: '50',
      redirects: '1', // Follow redirects (e.g., "Dolphin" → "Oceanic dolphin")
    })

    try {
      const res = await fetch(`${WIKI_API}?${params}`)
      const data = await res.json()
      const pages = Object.values(data.query?.pages || {})
      results.push(...pages.filter((p) => p.pageid > 0 && p.extract && p.extract.length > 20))
    } catch {
      // continue with other batches
    }
  }

  return results
}

/**
 * Get full details for a specific species by page ID or title.
 */
export async function getSpeciesDetails(titleOrId) {
  const isId = typeof titleOrId === 'number' || /^\d+$/.test(titleOrId)
  const params = wikiParams({
    action: 'query',
    [isId ? 'pageids' : 'titles']: String(titleOrId),
    prop: 'extracts|pageimages|categories|images',
    explaintext: '1',
    piprop: 'thumbnail',
    pithumbsize: '600',
    cllimit: '50',
    imlimit: '10',
  })

  const res = await fetch(`${WIKI_API}?${params}`)
  const data = await res.json()
  const page = Object.values(data.query?.pages || {})[0]

  if (!page || page.missing !== undefined) return null

  const type = classifySpecies(page)
  return {
    id: page.pageid,
    title: page.title,
    fullText: page.extract || '',
    summary: (page.extract || '').split('\n')[0] || '',
    image: page.thumbnail?.source || null,
    wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
    type,
    typeEmoji: getTypeEmoji(type),
    typeLabel: getTypeLabel(type),
    categories: (page.categories || []).map((c) => (c.title || c).replace('Category:', '')),
  }
}

/**
 * Fetch newly described species from Wikipedia year categories.
 * Used on the Discoveries page.
 */
export async function getNewlyDescribedSpecies(year) {
  const targetYear = year || new Date().getFullYear()
  const cacheKey = `discoveries:${targetYear}`
  const cached = getCached(cacheKey)
  if (cached) return cached

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

  // Fetch from multiple categories in parallel batches
  for (let i = 0; i < categoryNames.length; i += 4) {
    const batch = categoryNames.slice(i, i + 4)
    const fetches = batch.map(async (catName) => {
      try {
        const params = wikiParams({
          action: 'query',
          list: 'categorymembers',
          cmtitle: `Category:${catName}`,
          cmtype: 'page',
          cmlimit: '20',
        })
        const res = await fetch(`${WIKI_API}?${params}`)
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

  if (!allMembers.length) return []

  const sampleIds = shuffleArray(allMembers.map((m) => m.pageid)).slice(0, 30)
  const pages = await fetchPageDetails(sampleIds)

  const species = pages.map((page) =>
    buildSpecies(page, {
      yearDescribed: targetYear,
      isNewDiscovery: true,
    })
  )

  setCache(cacheKey, species)
  return species
}

/**
 * Search specifically for new species discoveries.
 */
export async function searchNewDiscoveries(query) {
  const searches = [
    `"new species" ${query}`,
    `"species described" ${query}`,
    `"newly discovered" ${query} species`,
  ]

  const allResults = []
  const seenIds = new Set()

  for (const searchTerm of searches) {
    const params = wikiParams({
      action: 'query',
      list: 'search',
      srsearch: searchTerm,
      srnamespace: '0',
      srlimit: '10',
    })

    try {
      const res = await fetch(`${WIKI_API}?${params}`)
      const data = await res.json()
      for (const result of (data.query?.search || [])) {
        if (!seenIds.has(result.pageid)) {
          seenIds.add(result.pageid)
          allResults.push(result)
        }
      }
    } catch {
      // continue
    }
    if (allResults.length >= 12) break
  }

  if (!allResults.length) return []

  const pageIds = allResults.slice(0, 15).map((r) => r.pageid)
  const pages = await fetchPageDetails(pageIds)

  return pages.map((page) => {
    const yearMatch = page.extract?.match(/described in (\d{4})/i)
    return buildSpecies(page, {
      yearDescribed: yearMatch ? parseInt(yearMatch[1]) : null,
      isNewDiscovery: true,
    })
  })
}
