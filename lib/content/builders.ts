import type { ContentSection, FaqItem, RelatedLink, SeoPageContent } from '@/lib/content/page-types'
import { AGENT_SHORT_NAME, PHONE_DISPLAY, PROOF } from '@/lib/seo/site'

export type PlaceRecord = {
  slug: string
  name: string
  city: string
  region: string
  propertyMix: string
  commute: string
  amenities: string
  challenge: string
  marketingAngle: string
  priceContext: string
  related: RelatedLink[]
}

function daysProof(): string {
  return `${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average to contract, and ${PROOF.percentOfAsking} of asking`
}

export function neighborhoodFaqs(place: PlaceRecord): FaqItem[] {
  return [
    {
      question: `How long does it take to sell a home in ${place.name}?`,
      answer: `${AGENT_SHORT_NAME}'s practice average is ${PROOF.averageDaysToContract} days from listing to contract on homes that did not sell. ${place.name} timing still depends on price, condition, and buyer traffic. Call ${PHONE_DISPLAY} for a current CMA at your address.`,
    },
    {
      question: `Why do listings expire in ${place.name}?`,
      answer: `Most ${place.name} listings stall from thin marketing, weak photos, and slow showing follow-up. ${place.challenge} ${AGENT_SHORT_NAME} resets the listing with a ${PROOF.marketingPoints}-point system and ${PROOF.marketingSpendPerListing} in marketing.`,
    },
    {
      question: `What does ${AGENT_SHORT_NAME} do differently in ${place.name}?`,
      answer: `She takes a maximum of ${PROOF.maxListings} listings, invests ${PROOF.photographyInvestment} in photography, and markets ${place.propertyMix} with ${place.marketingAngle} Call ${PHONE_DISPLAY}.`,
    },
    {
      question: `Does ${AGENT_SHORT_NAME} serve ${place.name} from the Summerlin office?`,
      answer: `Yes. ${AGENT_SHORT_NAME} works from 1180 N Town Center Dr, Las Vegas, NV 89144 and serves ${place.name} in ${place.city}. Hours are Monday–Sunday 8:00 AM – 8:00 PM. Call ${PHONE_DISPLAY} or request directions to the office.`,
    },
  ]
}

export function buildPlaceSections(place: PlaceRecord): ContentSection[] {
  return [
    {
      heading: `Why ${place.name} homes sit after the first listing`,
      directAnswer: `${place.name} homes stall when the first listing uses MLS-only marketing and phone photos. Buyers comparing ${place.propertyMix} skip weak media. A reset with professional photography, tighter pricing, and same-day showing follow-up is how ${AGENT_SHORT_NAME} gets relisted homes to contract.`,
      paragraphs: [
        `${place.name} sits in ${place.city}, ${place.region}. ${place.commute} That geography shapes who tours and how they judge condition, lot, and finish level. Generic citywide ads miss those buyers.`,
        `${place.challenge} Agents who treat every west-valley or Henderson street the same leave days on market on the table. The listing does not expire because the address is wrong. It expires because the presentation does not match how ${place.name} buyers shop.`,
        `Verified practice results — ${daysProof()} — come from resetting marketing, not from promising a citywide median. Request a CMA dated to this week before you pick a list price.`,
      ],
      subheadings: [
        {
          heading: `${place.name} photo and media standards`,
          paragraphs: [
            `${AGENT_SHORT_NAME} budgets ${PROOF.photographyInvestment} for listing media. ${place.amenities} Those features only convert if twilight exteriors, room-accurate interiors, and floor plans load before the first showing request.`,
            `Phone snapshots compress ceilings and hide lot context. In ${place.name}, that gap is obvious next to competing actives. New media is the first step of a relist, not a later upgrade.`,
          ],
        },
        {
          heading: `Pricing that matches today's ${place.name} set`,
          paragraphs: [
            `${place.priceContext} A CMA that ignores expired and withdrawn comps in the same micro-area repeats the first listing's mistake.`,
            `Price is a marketing input. If showing traffic is thin in week one, the plan changes in week one — not after another 90-day expiration.`,
          ],
        },
      ],
    },
    {
      heading: `How ${AGENT_SHORT_NAME} relists ${place.name} property`,
      directAnswer: `The relist uses a ${PROOF.marketingPoints}-point system, ${PROOF.marketingSpendPerListing} in marketing, a ${PROOF.maxListings}-listing cap, and weekly written updates. ${place.marketingAngle} Call ${PHONE_DISPLAY} to start within 24–48 hours.`,
      paragraphs: [
        `Cap the inventory. A ${PROOF.maxListings}-listing maximum is the operating rule, not a slogan. ${place.name} sellers get showing notes, offer strategy, and vendor coordination from the same agent who priced the home.`,
        `The reset is operational: new photos, new remarks, retargeted buyer lists, and a showing-feedback loop. ${place.commute} Those commute patterns tell us which buyer lists to activate first.`,
      ],
      subheadings: [
        {
          heading: '97-point marketing system',
          paragraphs: [
            `MLS syndication is the floor. The system also covers portal remarks, agent-to-agent calls, private-network shares, open-house timing, and paid media where the ${place.name} buyer actually looks.`,
            `${place.marketingAngle} That is the difference between a relist that looks like the expired listing and a relist that looks like a new product.`,
          ],
        },
        {
          heading: 'Accountability after the first weekend',
          paragraphs: [
            `Weekly written updates include showing count, feedback themes, portal views, and the next pricing or media move. If traffic is light, the plan changes while the listing is still fresh.`,
            `Sellers who already lived through a silent 90-day listing get a different standard: you always know what happened this week.`,
          ],
        },
      ],
    },
    {
      heading: `What ${place.name} buyers actually compare`,
      directAnswer: `Buyers in ${place.name} compare ${place.propertyMix} on lot, light, finish, HOA documents, and commute. ${place.amenities} Marketing that hides those facts loses the tour to a better-presented neighbor.`,
      paragraphs: [
        `${place.name} is not a single product. ${place.propertyMix} each draw a different tour. Remarks and photos have to name the actual product, not a generic “beautiful home in Las Vegas.”`,
        `HOA rules, rental restrictions, and renovation history belong in the file before the first offer. Surprises after inspection are how ${place.name} contracts die.`,
      ],
      subheadings: [
        {
          heading: 'Condition and inspection readiness',
          paragraphs: [
            `Pre-list repairs on obvious items (paint, HVAC service, roof documentation) shorten inspection renegotiation. ${AGENT_SHORT_NAME} will tell you what to fix and what to disclose.`,
            `Do not guess at repair costs in remarks. Put invoices and permits in the document packet.`,
          ],
        },
        {
          heading: `${place.city} showing logistics`,
          paragraphs: [
            `Gate codes, alarm instructions, and occupancy status should be in the showing notes on day one. Missed first showings in ${place.name} rarely get a second chance from the same buyer.`,
            `Office hours are Monday–Sunday 8:00 AM – 8:00 PM at 1180 N Town Center Dr, Las Vegas, NV 89144. Call ${PHONE_DISPLAY} to schedule the listing consult at the property.`,
          ],
        },
      ],
    },
    {
      heading: `Next step if your ${place.name} listing already expired`,
      directAnswer: `Do not relist at the same price with the same photos. Book a consult with ${AGENT_SHORT_NAME} at ${PHONE_DISPLAY}. The plan covers media, price, and buyer targeting for ${place.name} before a new MLS live date.`,
      paragraphs: [
        `An expired MLS row is public. Buyers and agents can see the history. The reset has to look and read like a new listing, not a recycled one.`,
        `Bring the old listing remarks, showing log if you have it, and any inspection reports. That file is how we avoid repeating the first campaign.`,
      ],
    },
  ]
}

export function buildPlacePage(
  place: PlaceRecord,
  kind: 'neighborhood' | 'condo',
  extraFaqs: FaqItem[] = [],
): SeoPageContent {
  const path =
    kind === 'neighborhood' ? `/neighborhoods/${place.slug}` : `/condos/${place.slug}`
  const parent =
    kind === 'neighborhood'
      ? { name: 'Las Vegas Neighborhoods', url: '/neighborhoods' }
      : { name: 'Las Vegas Condos', url: '/condos' }
  const h1 =
    kind === 'neighborhood'
      ? `${place.name} Homes That Did Not Sell | ${place.city} Real Estate`
      : `${place.name} Condos Las Vegas | Expired Listing Help`

  return {
    slug: place.slug,
    kind,
    path,
    title: `${h1} | ${PHONE_DISPLAY}`,
    description: `Sell a home that did not sell in ${place.name}, ${place.city}. ${AGENT_SHORT_NAME} uses a ${PROOF.marketingPoints}-point system. ${PROOF.averageDaysToContract}-day average. Call ${PHONE_DISPLAY}.`,
    h1,
    directAnswer: `If your ${place.name} home did not sell, ${AGENT_SHORT_NAME} resets photos, price, and buyer targeting. Practice results: ${daysProof()}. Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Call ${PHONE_DISPLAY}.`,
    keywords: [
      `${place.name.toLowerCase()} homes for sale`,
      `${place.name.toLowerCase()} expired listing`,
      `sell house ${place.city.toLowerCase()}`,
      `${place.name.toLowerCase()} real estate agent`,
    ],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      parent,
      { name: place.name, url: path },
    ],
    serviceName: `${place.name} listing reset and resale`,
    areaServed: [place.city, place.name, 'Las Vegas'],
    related: place.related,
    faqs: [...neighborhoodFaqs(place), ...extraFaqs],
    sections: buildPlaceSections(place),
    modified: PROOF.lastReviewed,
    imageAlt: `${place.name} ${kind === 'condo' ? 'condos' : 'homes'} in ${place.city}, Nevada — listing reset by ${AGENT_SHORT_NAME}`,
  }
}
