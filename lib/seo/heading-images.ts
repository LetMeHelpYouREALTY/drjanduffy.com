export type HeadingLevel = 1 | 2 | 3

export type HeadingImageAsset = {
  src: string
  alt: string
  width: number
  height: number
}

const WIDTH = 1280
const HEIGHT = 720

const ASSETS = {
  estate: {
    src: '/images/headings/summerlin-estate-twilight.jpg',
    alt: 'Twilight luxury estate in Summerlin near Red Rock Canyon — listing photography for Dr. Jan Duffy Real Estate',
    width: WIDTH,
    height: HEIGHT,
  },
  strip: {
    src: '/images/headings/strip-condo-dusk.jpg',
    alt: 'Las Vegas Strip luxury condo balcony at dusk — high-rise listing photography',
    width: WIDTH,
    height: HEIGHT,
  },
  consult: {
    src: '/images/headings/listing-consult-desk.jpg',
    alt: 'Luxury listing consultation desk in Summerlin with CMA portfolio and floor plans',
    width: WIDTH,
    height: HEIGHT,
  },
  showing: {
    src: '/images/headings/private-showing-foyer.jpg',
    alt: 'Private showing foyer in a Summerlin custom home prepared for qualified buyers',
    width: WIDTH,
    height: HEIGHT,
  },
  golf: {
    src: '/images/headings/golf-estate-ridges.jpg',
    alt: 'Custom golf-course estate in The Ridges, Summerlin — luxury listing photography',
    width: WIDTH,
    height: HEIGHT,
  },
  photo: {
    src: '/images/headings/twilight-listing-photo.jpg',
    alt: 'Twilight listing photograph of a luxury Las Vegas home with professional landscape lighting',
    width: WIDTH,
    height: HEIGHT,
  },
  henderson: {
    src: '/images/headings/henderson-midrise-condos.jpg',
    alt: 'Mid-rise condominiums in Henderson, Nevada with desert mountain backdrop',
    width: WIDTH,
    height: HEIGHT,
  },
  office: {
    src: '/images/headings/summerlin-office-consult.jpg',
    alt: 'Summerlin listing consult at 1180 N Town Center Dr, Las Vegas, NV 89144',
    width: WIDTH,
    height: HEIGHT,
  },
} as const

type AssetKey = keyof typeof ASSETS

function pickKey(heading: string, level: HeadingLevel): AssetKey {
  const h = heading.toLowerCase()

  if (
    /\bstrip\b|high[-\s]?rise|cosmopolitan|vdara|veer|turnberry|panorama|ogden|waldorf|palms|mgm|allure|city center/.test(
      h,
    )
  ) {
    return 'strip'
  }
  if (/ridges|red rock|golf|summit|spanish trail|country club/.test(h)) {
    return 'golf'
  }
  if (/henderson|green valley|anthem|macdonald|inspirada|seven hills/.test(h)) {
    return 'henderson'
  }
  if (/photo|media|staging|twilight|97-point|marketing system/.test(h)) {
    return 'photo'
  }
  if (/showing|buyer representation|private tour|foyer|off-market/.test(h)) {
    return 'showing'
  }
  if (/consult|office|contact|book a|schedule|next step|directions|visit our/.test(h)) {
    return 'office'
  }
  if (/cma|pric|cost|holding|calculator|negotiation/.test(h)) {
    return 'consult'
  }
  if (/listing|relist|expire|seller|representation|services|realtor/.test(h)) {
    return 'consult'
  }
  if (/condo/.test(h) && /summerlin|luxury/.test(h)) {
    return 'estate'
  }
  if (/condo/.test(h)) {
    return 'strip'
  }

  if (level === 1) return 'estate'
  if (level === 2) return 'consult'
  return 'photo'
}

export function headingImageFor(heading: string, level: HeadingLevel): HeadingImageAsset {
  const asset = ASSETS[pickKey(heading, level)]
  const clean = heading.replace(/\s+/g, ' ').trim()
  return {
    ...asset,
    alt: `${clean} — ${asset.alt}`,
  }
}

export const DEFAULT_OG_IMAGE = '/images/headings/summerlin-estate-twilight.jpg'
