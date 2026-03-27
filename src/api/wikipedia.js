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

  // Build species objects and STRICTLY filter to actual biological species
  // Only keep pages that our taxonomy system can classify (type !== 'unknown')
  const species = pages
    .map((page) => buildSpecies(page))
    .filter((s) => s.type !== 'unknown')

  setCache(cacheKey, species)
  return species
}

/**
 * Browse species by taxonomy category using Wikipedia's category members API.
 * Used when tapping a category button (Mammals, Birds, etc.)
 */
export async function browseByCategory(wikiCategory) {
  const cacheKey = `browse:${wikiCategory}`
  const cached = getCached(cacheKey)
  if (cached) return cached

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

  // Separate pages from subcategories
  const pages = members.filter((m) => m.ns === 0)
  const subcats = members.filter((m) => m.ns === 14)

  // If few direct pages, also browse a random subcategory
  let allPageIds = pages.map((m) => m.pageid)

  if (allPageIds.length < 10 && subcats.length > 0) {
    const randomSubcat = subcats[Math.floor(Math.random() * subcats.length)]
    const subParams = wikiParams({
      action: 'query',
      list: 'categorymembers',
      cmtitle: randomSubcat.title,
      cmtype: 'page',
      cmlimit: '20',
    })
    try {
      const subRes = await fetch(`${WIKI_API}?${subParams}`)
      const subData = await subRes.json()
      const subPages = subData.query?.categorymembers || []
      allPageIds.push(...subPages.map((m) => m.pageid))
    } catch {
      // continue with what we have
    }
  }

  // Shuffle and take a sample
  const sampleIds = shuffleArray(allPageIds).slice(0, 18)
  const pageDetails = await fetchPageDetails(sampleIds)

  const species = pageDetails.map((page) => buildSpecies(page))
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
