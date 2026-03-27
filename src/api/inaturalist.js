// iNaturalist API calls for species images and taxonomy data

const INAT_API = 'https://api.inaturalist.org/v1'

/**
 * Get photos and taxonomy info from iNaturalist for a species.
 */
export async function getSpeciesPhotos(speciesName) {
  try {
    const res = await fetch(
      `${INAT_API}/taxa?q=${encodeURIComponent(speciesName)}&per_page=1`
    )
    const data = await res.json()

    if (!data.results?.length) return { photos: [], iconicTaxon: null }

    const taxon = data.results[0]
    const photos = (taxon.taxon_photos || []).slice(0, 6).map((p) => ({
      url: p.photo?.medium_url || p.photo?.url,
      attribution: p.photo?.attribution || 'iNaturalist',
    }))

    return {
      photos,
      iconicTaxon: taxon.iconic_taxon_name || null,
      taxonId: taxon.id,
      commonName: taxon.preferred_common_name || null,
    }
  } catch {
    return { photos: [], iconicTaxon: null }
  }
}
