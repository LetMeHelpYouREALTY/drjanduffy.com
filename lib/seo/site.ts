/**
 * Canonical NAP, entity, and citation-ready facts for SEO / GEO / AEO.
 * Keep these values identical in visible copy, schema, GBP, and llms.txt.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'

export const BUSINESS_NAME = 'Dr. Janet Duffy Real Estate'
export const AGENT_NAME = 'Dr. Janet Duffy'
export const AGENT_SHORT_NAME = 'Dr. Jan Duffy'
export const LICENSE_NUMBER = 'S.0197614.LLC'
export const BROKERAGE = 'Berkshire Hathaway HomeServices Nevada Properties'

export const PHONE_DISPLAY = '(702) 500-1064'
export const PHONE_TEL = '7025001064'
export const EMAIL = 'info@drjanduffy.com'

export const ADDRESS = {
  street: '1180 N Town Center Dr',
  city: 'Las Vegas',
  state: 'NV',
  zip: '89144',
  full: '1180 N Town Center Dr, Las Vegas, NV 89144',
} as const

export const HOURS_DISPLAY = 'Monday–Sunday 8:00 AM – 8:00 PM'
export const HOURS_NOTE = 'Available 7 days a week'
export const OPENING_HOURS = 'Mo-Su 08:00-20:00'

export const GBP_URL =
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ||
  'https://share.google/ocO9fjtV1xkSkqZIe'

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS.full)}`
export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS.full)}`

export const GEO = {
  latitude: '36.1579',
  longitude: '-115.3030',
} as const

/** Verified practice stats used in copy and schema. Do not invent market medians. */
export const PROOF = {
  homesRelistedSold: 7,
  averageDaysToContract: 19,
  percentOfAsking: '98.7%',
  marketingSpendPerListing: '$5,000+',
  photographyInvestment: '$3,700',
  maxListings: 6,
  marketingPoints: 97,
  googleReviewCount: 47,
  googleRating: '5.0',
  lastReviewed: '2026-09-06',
} as const

export const PRIMARY_AREAS = [
  'Las Vegas',
  'Summerlin',
  'Summerlin West',
  'The Ridges',
  'Red Rock Country Club',
  'Henderson',
] as const

export const ENTITY_DESCRIPTION = `${AGENT_SHORT_NAME} is a Las Vegas real estate agent at ${BROKERAGE} who specializes in homes that did not sell. Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average to contract, ${PROOF.percentOfAsking} of asking price.`
