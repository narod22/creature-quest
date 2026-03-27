// Uses Wikipedia API for species info and iNaturalist for images
// Both are free, no API key needed

const WIKI_API = 'https://en.wikipedia.org/api/rest_v1'
const WIKI_SEARCH = 'https://en.wikipedia.org/w/api.php'
const INAT_API = 'https://api.inaturalist.org/v1'

// Search for species using Wikipedia
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

  // Get page details with images and extracts
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

// Get more details about a specific species from Wikipedia
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

  // Try to get images from iNaturalist too
  let inatImages = []
  try {
    inatImages = await getInatImages(title)
  } catch (e) {
    // silently fail, we still have wiki data
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

// Get photos from iNaturalist
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

// Get trending/recent species observations from iNaturalist
export async function getRecentDiscoveries() {
  try {
    const res = await fetch(
      `${INAT_API}/observations?order_by=created_at&order=desc&quality_grade=research&photos=true&per_page=12&iconic_taxa=Mammalia,Reptilia,Amphibia,Aves,Actinopterygii,Insecta,Arachnida,Mollusca`
    )
    const data = await res.json()

    return data.results
      .filter((obs) => obs.taxon && obs.photos?.length)
      .map((obs) => ({
        id: obs.id,
        title: obs.taxon?.preferred_common_name || obs.taxon?.name || 'Mystery Creature',
        scientificName: obs.taxon?.name,
        image: obs.photos[0]?.url?.replace('square', 'medium'),
        location: obs.place_guess || 'Somewhere on Earth',
        observedOn: obs.observed_on,
        iconic: obs.taxon?.iconic_taxon_name,
      }))
  } catch {
    return []
  }
}

// Search specifically for newly discovered species
export async function searchNewSpecies(query = '') {
  const searchTerm = query || 'new species discovered'
  const params = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: `${searchTerm} new species discovered`,
    srnamespace: '0',
    srlimit: '10',
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
    exsentences: '3',
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

// Fun facts generator based on species info
export function generateKidFacts(details) {
  if (!details?.fullText) return []

  const text = details.fullText.toLowerCase()
  const facts = []

  // Extract size info
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

  // Habitat clues
  if (text.includes('ocean') || text.includes('marine') || text.includes('sea')) {
    facts.push('This animal lives in the ocean! It calls the salty sea its home.')
  } else if (text.includes('forest') || text.includes('jungle') || text.includes('rainforest')) {
    facts.push('This creature lives in the forest, surrounded by tall trees!')
  } else if (text.includes('desert')) {
    facts.push('This tough animal lives in the desert where it is super hot and dry!')
  } else if (text.includes('arctic') || text.includes('polar') || text.includes('ice')) {
    facts.push('Brrr! This animal lives in the freezing cold arctic!')
  }

  // Extinct or endangered
  if (text.includes('extinct')) {
    facts.push(
      "This animal is extinct, which means it doesn't live on Earth anymore. But scientists found it!"
    )
  } else if (text.includes('endangered')) {
    facts.push(
      'This animal is endangered, which means there are very few left. We need to protect them!'
    )
  }

  // Discovered info
  const yearMatch = details.fullText.match(/discovered in (\d{4})/i)
  if (yearMatch) {
    facts.push(`Scientists discovered this species in ${yearMatch[1]}!`)
  }

  const describedMatch = details.fullText.match(/described in (\d{4})/i)
  if (describedMatch) {
    facts.push(`Scientists first described this species in ${describedMatch[1]}!`)
  }

  // Nocturnal
  if (text.includes('nocturnal')) {
    facts.push('This animal is nocturnal, which means it sleeps during the day and is awake at night!')
  }

  // Can fly
  if (text.includes('wingspan') || (text.includes('fly') && text.includes('wing'))) {
    facts.push('This creature can fly! It has wings to soar through the sky!')
  }

  // Venomous
  if (text.includes('venom') || text.includes('poisonous')) {
    facts.push('Watch out! This animal has special venom or poison to protect itself!')
  }

  // If we didn't find enough specific facts, add some generic ones
  if (facts.length < 2) {
    facts.push('Every animal species is special and has its own unique features!')
    facts.push('Scientists are still discovering new species every single year!')
  }

  return facts.slice(0, 5)
}
