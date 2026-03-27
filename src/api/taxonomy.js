// Proper species classification using Wikipedia categories + iNaturalist fallback
// This replaces the old guessAnimalType() that was mislabeling bats as birds, etc.

// Priority-ordered: more specific taxonomic terms first
// When we scan a page's Wikipedia categories, the FIRST match wins
const WIKI_CATEGORY_MAP = [
  // Bats are mammals, not birds! This must come before any bird/wing matching
  ['chiroptera', 'mammal'],
  ['cetacea', 'mammal'],
  ['cetacean', 'mammal'],
  ['whale', 'mammal'],
  ['dolphin', 'mammal'],
  ['primates', 'mammal'],
  ['carnivora', 'mammal'],
  ['rodentia', 'mammal'],
  ['rodent', 'mammal'],
  ['canidae', 'mammal'],
  ['felidae', 'mammal'],
  ['marsupial', 'mammal'],
  ['monotreme', 'mammal'],
  ['ungulate', 'mammal'],
  ['artiodactyl', 'mammal'],
  ['perissodactyl', 'mammal'],
  ['proboscidea', 'mammal'],
  ['mammalia', 'mammal'],
  ['mammals', 'mammal'],

  // Dinosaurs before reptiles (they're related but distinct for kids)
  ['dinosauria', 'dinosaur'],
  ['theropod', 'dinosaur'],
  ['sauropod', 'dinosaur'],
  ['ornithisch', 'dinosaur'],
  ['ceratops', 'dinosaur'],
  ['pterosaur', 'dinosaur'],
  ['dinosaur', 'dinosaur'],

  // Birds
  ['aves', 'bird'],
  ['passeriformes', 'bird'],
  ['accipitriformes', 'bird'],
  ['strigiformes', 'bird'],
  ['psittaciformes', 'bird'],
  ['birds', 'bird'],

  // Reptiles
  ['squamata', 'reptile'],
  ['testudines', 'reptile'],
  ['crocodilia', 'reptile'],
  ['serpentes', 'reptile'],
  ['lacertilia', 'reptile'],
  ['gecko', 'reptile'],
  ['reptilia', 'reptile'],
  ['reptile', 'reptile'],

  // Amphibians
  ['anura', 'amphibian'],
  ['caudata', 'amphibian'],
  ['gymnophiona', 'amphibian'],
  ['salamander', 'amphibian'],
  ['amphibia', 'amphibian'],
  ['amphibian', 'amphibian'],
  ['frog', 'amphibian'],
  ['toad', 'amphibian'],

  // Fish
  ['actinopterygii', 'fish'],
  ['chondrichthyes', 'fish'],
  ['osteichthyes', 'fish'],
  ['teleost', 'fish'],
  ['perciformes', 'fish'],
  ['cypriniformes', 'fish'],
  ['sharks', 'fish'],
  ['rays', 'fish'],
  ['fish', 'fish'],

  // Insects
  ['coleoptera', 'insect'],
  ['lepidoptera', 'insect'],
  ['hymenoptera', 'insect'],
  ['diptera', 'insect'],
  ['hemiptera', 'insect'],
  ['odonata', 'insect'],
  ['orthoptera', 'insect'],
  ['insecta', 'insect'],
  ['insect', 'insect'],
  ['beetle', 'insect'],
  ['butterfly', 'insect'],
  ['moth', 'insect'],

  // Arachnids
  ['araneae', 'arachnid'],
  ['scorpiones', 'arachnid'],
  ['acari', 'arachnid'],
  ['arachnida', 'arachnid'],
  ['arachnid', 'arachnid'],
  ['spider', 'arachnid'],

  // Mollusks
  ['gastropoda', 'mollusk'],
  ['cephalopoda', 'mollusk'],
  ['bivalvia', 'mollusk'],
  ['mollusca', 'mollusk'],
  ['mollusc', 'mollusk'],
  ['mollusk', 'mollusk'],
  ['octop', 'mollusk'],
  ['squid', 'mollusk'],
  ['snail', 'mollusk'],

  // Crustaceans
  ['decapoda', 'crustacean'],
  ['crustacea', 'crustacean'],
  ['crustacean', 'crustacean'],
  ['crab', 'crustacean'],
  ['shrimp', 'crustacean'],
  ['lobster', 'crustacean'],

  // Plants and fungi
  ['fungi', 'fungus'],
  ['mushroom', 'fungus'],
  ['plantae', 'plant'],
  ['angiosperm', 'plant'],
]

// Map iNaturalist iconic_taxon_name to our types
const INAT_TAXON_MAP = {
  Mammalia: 'mammal',
  Aves: 'bird',
  Reptilia: 'reptile',
  Amphibia: 'amphibian',
  Actinopterygii: 'fish',
  Insecta: 'insect',
  Arachnida: 'arachnid',
  Mollusca: 'mollusk',
  Plantae: 'plant',
  Fungi: 'fungus',
  Chromista: 'plant',
  Protozoa: 'unknown',
  Animalia: 'unknown',
}

/**
 * Classify a species using its Wikipedia categories.
 * This is Tier 1 and the most reliable method.
 * @param {string[]} categories - Array of category titles from Wikipedia
 * @returns {string|null} - The species type, or null if no match
 */
export function classifyFromCategories(categories) {
  if (!categories?.length) return null

  const catText = categories.map((c) => c.toLowerCase()).join(' ')

  for (const [keyword, type] of WIKI_CATEGORY_MAP) {
    if (catText.includes(keyword)) {
      return type
    }
  }

  return null
}

/**
 * Classify a species using iNaturalist's iconic_taxon_name.
 * This is Tier 2, used when Wikipedia categories aren't conclusive.
 * @param {string} iconicTaxonName - The iconic_taxon_name from iNaturalist
 * @returns {string} - The species type
 */
export function classifyFromINat(iconicTaxonName) {
  return INAT_TAXON_MAP[iconicTaxonName] || 'unknown'
}

/**
 * Classify a species from its extract text as a last resort.
 * Tier 3 - only used when categories and iNaturalist both fail.
 * @param {string} text - The Wikipedia extract text
 * @returns {string} - The species type
 */
export function classifyFromText(text) {
  if (!text) return 'unknown'
  const t = text.toLowerCase()

  // Check in priority order matching the category map logic
  if (t.includes('bat ') || t.includes('chiroptera')) return 'mammal'
  if (t.includes('mammal')) return 'mammal'
  if (t.includes('dinosaur') || t.includes('theropod') || t.includes('sauropod')) return 'dinosaur'
  if (t.includes(' bird') || t.includes('avian') || t.includes('passerine')) return 'bird'
  if (t.includes('reptile') || t.includes('lizard') || t.includes('snake') || t.includes('turtle')) return 'reptile'
  if (t.includes('amphibian') || t.includes(' frog') || t.includes('salamander') || t.includes(' toad')) return 'amphibian'
  if (t.includes(' fish') || t.includes('shark') || t.includes(' ray ')) return 'fish'
  if (t.includes('insect') || t.includes('beetle') || t.includes('butterfly') || t.includes(' moth ')) return 'insect'
  if (t.includes('spider') || t.includes('arachnid') || t.includes('scorpion')) return 'arachnid'
  if (t.includes('mollus') || t.includes('octopus') || t.includes('squid') || t.includes('snail')) return 'mollusk'
  if (t.includes('crab') || t.includes('shrimp') || t.includes('crustacean') || t.includes('lobster')) return 'crustacean'
  if (t.includes('fungus') || t.includes('fungi') || t.includes('mushroom')) return 'fungus'
  if (t.includes('plant') || t.includes('flora') || t.includes('flower')) return 'plant'

  return 'unknown'
}

/**
 * Full classification pipeline: categories -> iNat -> text fallback
 * @param {object} page - Wikipedia page data with categories and extract
 * @param {string|null} inatTaxon - iNaturalist iconic_taxon_name if available
 * @returns {string} - The classified species type
 */
export function classifySpecies(page, inatTaxon = null) {
  // Tier 1: Wikipedia categories (most reliable)
  const catNames = (page.categories || []).map((c) =>
    (c.title || c).replace('Category:', '')
  )
  const fromCats = classifyFromCategories(catNames)
  if (fromCats) return fromCats

  // Tier 2: iNaturalist iconic taxon
  if (inatTaxon) {
    const fromINat = classifyFromINat(inatTaxon)
    if (fromINat !== 'unknown') return fromINat
  }

  // Tier 3: Text analysis (last resort)
  return classifyFromText(page.extract || '')
}
