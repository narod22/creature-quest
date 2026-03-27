// Wikipedia API calls for species data
import { classifySpecies } from './taxonomy'
import { getTypeEmoji, getTypeLabel, getCached, setCache, shuffleArray } from './helpers'

const WIKI_API = 'https://en.wikipedia.org/w/api.php'

function wikiParams(extra) {
  return new URLSearchParams({ format: 'json', origin: '*', ...extra })
}

// Build a standardized species object from a Wikipedia page
function buildSpecies(page, overrides = {}) {
  const type = classifySpecies(page)
  return {
    id: page.pageid,
    title: page.title,
    summary: page.extract || '',
    image: page.thumbnail?.source || null,
    wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
    type,
    typeEmoji: getTypeEmoji(type),
    typeLabel: getTypeLabel(type),
    categories: (page.categories || []).map((c) => (c.title || c).replace('Category:', '')),
    ...overrides,
  }
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

  // Reject obvious non-species page titles
  const badTitlePrefixes = [
    'outline of', 'glossary of', 'list of', 'index of',
    'timeline of', 'history of', 'climate change and',
  ]
  const titleLower = title.toLowerCase()
  if (badTitlePrefixes.some((p) => titleLower.startsWith(p))) return false

  // Reject topic/concept articles by title patterns
  const badTitleWords = [
    'terminology', 'migration', 'birdcage', 'cage', 'membrane',
    'conservation', 'evolution of', 'anatomy of', 'plucking post',
    'fecal sac', 'foraging flock', 'helpers at the',
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
 * Searches Wikipedia and filters to pages with biological taxonomy categories.
 * Runs two searches in parallel: the raw query + "query species" to maximize
 * the chance of finding actual animal/species pages.
 */
export async function searchSpecies(query) {
  const cacheKey = `search:${query}`
  const cached = getCached(cacheKey)
  if (cached) return cached

  // Run two searches in parallel for better species coverage
  const [res1, res2] = await Promise.all([
    fetch(`${WIKI_API}?${wikiParams({
      action: 'query', list: 'search',
      srsearch: `${query} species animal`,
      srnamespace: '0', srlimit: '15',
    })}`),
    fetch(`${WIKI_API}?${wikiParams({
      action: 'query', list: 'search',
      srsearch: query,
      srnamespace: '0', srlimit: '10',
    })}`),
  ])

  const data1 = await res1.json()
  const data2 = await res2.json()

  // Merge results, deduplicating by page ID
  const seenIds = new Set()
  const allSearchResults = []
  for (const result of [...(data1.query?.search || []), ...(data2.query?.search || [])]) {
    if (!seenIds.has(result.pageid)) {
      seenIds.add(result.pageid)
      allSearchResults.push(result)
    }
  }

  if (!allSearchResults.length) return []

  const pageIds = allSearchResults.slice(0, 20).map((r) => r.pageid)
  const pages = await fetchPageDetails(pageIds)

  // Build species objects and STRICTLY filter to actual species pages
  // Must pass both: taxonomy classification AND the species-page check
  const species = pages
    .filter((page) => isActualSpeciesPage(page))
    .map((page) => buildSpecies(page))
    .filter((s) => s.type !== 'unknown')

  setCache(cacheKey, species)
  return species
}

/**
 * Browse species by taxonomy category using Wikipedia's category members API.
 * Used when tapping a category button (Mammals, Birds, etc.)
 *
 * Broad categories like "Mammals" contain mostly subcategories (Carnivora,
 * Rodentia, etc.) rather than direct species pages. So we dig into multiple
 * random subcategories to collect enough actual species articles.
 */
export async function browseByCategory(wikiCategory) {
  const cacheKey = `browse:${wikiCategory}`
  const cached = getCached(cacheKey)
  if (cached) return cached

  // Step 1: Get top-level members (pages + subcategories)
  const params = wikiParams({
    action: 'query',
    list: 'categorymembers',
    cmtitle: `Category:${wikiCategory}`,
    cmtype: 'page|subcat',
    cmlimit: '50',
  })

  const res = await fetch(`${WIKI_API}?${params}`)
  const data = await res.json()
  const members = data.query?.categorymembers || []

  const directPages = members.filter((m) => m.ns === 0)
  const subcats = members.filter((m) => m.ns === 14)

  const allPageIds = new Set(directPages.map((m) => m.pageid))

  // Step 2: Explore several random subcategories to find actual species pages
  // Most broad categories (Mammals, Birds) are almost entirely subcategories,
  // so we need to dig into 4-6 of them to get a good sample.
  if (subcats.length > 0) {
    const randomSubcats = shuffleArray(subcats).slice(0, 6)

    // Fetch from subcategories in parallel (2 at a time)
    for (let i = 0; i < randomSubcats.length; i += 2) {
      const batch = randomSubcats.slice(i, i + 2)
      const fetches = batch.map(async (subcat) => {
        try {
          // First try getting pages from this subcategory
          const subParams = wikiParams({
            action: 'query',
            list: 'categorymembers',
            cmtitle: subcat.title,
            cmtype: 'page|subcat',
            cmlimit: '30',
          })
          const subRes = await fetch(`${WIKI_API}?${subParams}`)
          const subData = await subRes.json()
          const subMembers = subData.query?.categorymembers || []

          const subPages = subMembers.filter((m) => m.ns === 0)
          const subSubcats = subMembers.filter((m) => m.ns === 14)

          // If this subcategory also has mostly subcategories, dig one level deeper
          if (subPages.length < 5 && subSubcats.length > 0) {
            const deepSubcat = subSubcats[Math.floor(Math.random() * subSubcats.length)]
            const deepParams = wikiParams({
              action: 'query',
              list: 'categorymembers',
              cmtitle: deepSubcat.title,
              cmtype: 'page',
              cmlimit: '20',
            })
            const deepRes = await fetch(`${WIKI_API}?${deepParams}`)
            const deepData = await deepRes.json()
            const deepPages = deepData.query?.categorymembers || []
            return [...subPages, ...deepPages]
          }

          return subPages
        } catch {
          return []
        }
      })

      const results = await Promise.all(fetches)
      for (const pages of results) {
        for (const p of pages) {
          allPageIds.add(p.pageid)
        }
      }

      // Stop early if we have plenty
      if (allPageIds.size >= 40) break
    }
  }

  // Step 3: Shuffle all collected page IDs and fetch details for a sample
  const sampleIds = shuffleArray([...allPageIds]).slice(0, 18)
  const pageDetails = await fetchPageDetails(sampleIds)

  // Filter to actual species pages (not "Bird migration", "Birdcage", etc.)
  const species = pageDetails
    .filter((page) => isActualSpeciesPage(page))
    .map((page) => buildSpecies(page))

  setCache(cacheKey, species)
  return species
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
