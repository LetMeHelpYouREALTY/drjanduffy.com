import { buildPlacePage } from '@/lib/content/builders'
import type { PlaceRecord } from '@/lib/content/builders'
import type { SeoPageContent } from '@/lib/content/page-types'

export const STATIC_CONDO_SLUGS = [
  'cosmopolitan',
  'vdara',
  'veer-towers',
  'turnberry-place',
  'panorama-towers',
  'trump-international',
  'ogden',
  'waldorf-astoria',
  'one-las-vegas',
  'one-queensridge',
  'turnberry-towers',
  'mgm-city-center',
  'mgm-signature',
  'palms-place',
  'allure',
  'the-martin',
  'altair',
  'angel-court',
  'apache-hills',
  'terra-bella',
  'the-district',
  'viera',
  'tramonto',
  'wimbledon',
  'juhl-lofts',
  'newport-lofts',
  'soho-lofts',
  'fremont-street-lofts',
  'eleventh-street-lofts',
  'summerlin-lofts',
  'loft-5',
] as const

const records: PlaceRecord[] = [
  {
    slug: 'sky-las-vegas',
    name: 'Sky Las Vegas',
    city: 'Las Vegas',
    region: 'the Las Vegas Strip corridor',
    propertyMix: 'high-rise Strip-view and city-view condominiums',
    commute: 'Sky Las Vegas sits on Las Vegas Boulevard, with walking access to mid-Strip resorts.',
    amenities: 'Pool deck, concierge, and Strip-view corridors are the amenities buyers expect in the first five photos.',
    challenge: 'Hotel-condo confusion and HOA documents scare mainland buyers. Missing rental-rule PDFs kill contracts.',
    marketingAngle: 'Lead with true view photos, HOA packet, and rental rules. Do not use interior-only phone photos.',
    priceContext: 'View, floor, and line drive price. Average building asking prices are not a CMA.',
    related: [
      { href: '/condos/trump-international', anchor: 'Trump International condos' },
      { href: '/condos/turnberry-place', anchor: 'Turnberry Place condos' },
      { href: '/condos/strip', anchor: 'Las Vegas Strip condos' },
    ],
  },
  {
    slug: 'park-towers',
    name: 'Park Towers',
    city: 'Las Vegas',
    region: 'Hughes Center, east of the Strip',
    propertyMix: 'full-service luxury high-rise residences',
    commute: 'Park Towers is about 10 minutes from mid-Strip and minutes from the Las Vegas Country Club corridor.',
    amenities: 'Concierge, valet, and large floor plates are the luxury facts to prove with a floor plan.',
    challenge: 'Estate-sized units listed with one-bedroom photography look smaller than they are.',
    marketingAngle: 'Fund a floor plan, twilight exteriors, and interior stills that show scale. Then call the Hughes Center buyer list.',
    priceContext: 'Price by line, floor, and renovation vintage. Do not blend Park Towers with Turnberry without adjustments.',
    related: [
      { href: '/condos/turnberry-place', anchor: 'Turnberry Place condos' },
      { href: '/condos/turnberry-towers', anchor: 'Turnberry Towers condos' },
      { href: '/condos/luxury', anchor: 'Luxury Las Vegas condos' },
    ],
  },
  {
    slug: 'manhattan',
    name: 'Manhattan',
    city: 'Las Vegas',
    region: 'east of the Strip near the Las Vegas Country Club',
    propertyMix: 'high-rise condominiums with city and mountain views',
    commute: 'Manhattan is a short drive to mid-Strip and downtown via Paradise and Swenson.',
    amenities: 'Pool, fitness, and view corridors are standard high-rise amenities that still need professional photography.',
    challenge: 'Competes with newer glass towers. Dated interiors photographed poorly expire even when the view is strong.',
    marketingAngle: 'If the view is the product, shoot it at dusk. Then be honest about interior vintage.',
    priceContext: 'Floor and view line matter more than building-average PPSF.',
    related: [
      { href: '/condos/allure', anchor: 'Allure Las Vegas condos' },
      { href: '/condos/the-martin', anchor: 'The Martin condos' },
      { href: '/condos/high-rise', anchor: 'Las Vegas high-rise condos' },
    ],
  },
  {
    slug: 'streamline-tower',
    name: 'Streamline Tower',
    city: 'Las Vegas',
    region: 'downtown Las Vegas',
    propertyMix: 'urban high-rise condos near the Fremont corridor',
    commute: 'Streamline Tower is downtown, typically 15–20 minutes from mid-Strip.',
    amenities: 'Urban views, downtown walkability, and building amenities should be shown with street-context photos.',
    challenge: 'Downtown buyers want noise, parking, and HOA facts up front. Hide them and the second showing never happens.',
    marketingAngle: 'Package HOA, parking, and rental rules with view photography. Target downtown and investor-occupant lists separately.',
    priceContext: 'Downtown PPSF is not Strip PPSF. Use Streamline and nearby loft comps.',
    related: [
      { href: '/condos/soho-lofts', anchor: 'Soho Lofts downtown' },
      { href: '/condos/ogden', anchor: 'The Ogden condos' },
      { href: '/condos/juhl-lofts', anchor: 'Juhl Lofts' },
    ],
  },
  {
    slug: 'south-shore',
    name: 'South Shore',
    city: 'Henderson',
    region: 'Lake Las Vegas',
    propertyMix: 'lake-oriented condominiums and villas',
    commute: 'South Shore at Lake Las Vegas is 30–40 minutes from the Strip in typical traffic.',
    amenities: 'Lake views, trails, and resort neighbors are the features that must lead the carousel.',
    challenge: 'Out-of-area buyers need HOA and rental rules before they book a flight. Missing PDFs kill contracts.',
    marketingAngle: 'Send the document packet with the first brochure. Shoot water at multiple times of day.',
    priceContext: 'Water-front and water-view are different products. Do not average them with golf-view units.',
    related: [
      { href: '/neighborhoods/lake-las-vegas', anchor: 'Lake Las Vegas homes' },
      { href: '/condos/henderson', anchor: 'Henderson condos' },
      { href: '/condos/luxury', anchor: 'Luxury Las Vegas condos' },
    ],
  },
  {
    slug: 'regency-towers',
    name: 'Regency Towers',
    city: 'Las Vegas',
    region: 'Las Vegas Country Club',
    propertyMix: 'established high-rise residences on the country club',
    commute: 'Regency Towers is near Maryland Parkway and the country club, about 10–15 minutes from mid-Strip.',
    amenities: 'Country-club setting, high-rise amenities, and mature landscaping are the location story.',
    challenge: 'Older towers lose to new glass unless interiors and documents are presentation-grade.',
    marketingAngle: 'Show updates with dates. Provide HOA financials early. Photograph the club setting, not only the bedroom.',
    priceContext: 'Renovation vintage splits this tower into different price bands.',
    related: [
      { href: '/condos/park-towers', anchor: 'Park Towers luxury condos' },
      { href: '/condos/turnberry-place', anchor: 'Turnberry Place condos' },
      { href: '/condos/high-rise', anchor: 'Las Vegas high-rise condos' },
    ],
  },
]

const bySlug = new Map(records.map((record) => [record.slug, record]))

export function getDynamicCondoSlugs(): string[] {
  return records.map((record) => record.slug)
}

export function getCondoPage(slug: string): SeoPageContent | undefined {
  const record = bySlug.get(slug)
  if (!record) return undefined
  return buildPlacePage(record, 'condo')
}

export function getNewCondoHubLinks(): Array<{ href: string; name: string }> {
  return records.map((record) => ({
    href: `/condos/${record.slug}`,
    name: record.name,
  }))
}
