import { toSeoPage, type TopicRecord } from '@/lib/content/topics'
import { AGENT_SHORT_NAME, PHONE_DISPLAY, PROOF } from '@/lib/seo/site'
import type { SeoPageContent } from '@/lib/content/page-types'

const guides: TopicRecord[] = [
  {
    slug: 'how-to-relist-expired-home',
    kind: 'guide',
    path: '/guides/how-to-relist-expired-home',
    title: `How to Relist an Expired Home in Las Vegas | ${PHONE_DISPLAY}`,
    h1: 'How to Relist an Expired Home in Las Vegas',
    description: `Step-by-step relist: file, media, price, MLS, showings. ${AGENT_SHORT_NAME} runs a ${PROOF.marketingPoints}-point reset. Call ${PHONE_DISPLAY}.`,
    directAnswer: `To relist an expired Las Vegas home: gather the old file, hire one agent, shoot new media, price from a current CMA, then go live with showing instructions. ${AGENT_SHORT_NAME} starts consults within 24–48 hours. Call ${PHONE_DISPLAY}.`,
    keywords: ['how to relist expired home', 'relist house las vegas', 'expired listing checklist'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Guides', url: '/guides/sellers-guide' },
      { name: 'How to relist', url: '/guides/how-to-relist-expired-home' },
    ],
    serviceName: 'Expired home relist',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/relist-home-las-vegas', anchor: 'Relist a home in Las Vegas' },
      { href: '/guides/nevada-listing-expiration-guide', anchor: 'Nevada listing expiration guide' },
      { href: '/guides/photography-staging-checklist', anchor: 'Photography and staging checklist' },
    ],
    faqs: [
      {
        question: 'How soon can I relist after expiration?',
        answer: 'As soon as the prior contract is ended and a new listing agreement is signed. Read any protection period first.',
      },
      {
        question: 'Do I need new photos?',
        answer: `Yes. ${AGENT_SHORT_NAME} budgets ${PROOF.photographyInvestment} so the relist does not look like the expired listing.`,
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'Step 1 — Collect the expired file',
        directAnswer:
          'Print the MLS history, listing agreement, showing log, HOA packet, permits, and inspection reports. The next campaign is a diagnosis, not a guess.',
        paragraphs: [
          'If you do not have a showing log, say so. Silence is also data.',
          'Order a fresh HOA packet if the last one is stale.',
        ],
        subheadings: [
          {
            heading: 'What to highlight',
            paragraphs: [
              'Prior asks, price-cut dates, and any failed contract. Those dates explain buyer behavior.',
              'Repair invoices prove what is already done.',
            ],
          },
        ],
      },
      {
        heading: 'Step 2 — Interview one specialist',
        directAnswer: `Ask for a listing cap, a media budget, and a weekly update sample. ${AGENT_SHORT_NAME} caps at ${PROOF.maxListings} listings and invests ${PROOF.marketingSpendPerListing}.`,
        paragraphs: [
          'Do not sign on a promised sale price alone.',
          `Call ${PHONE_DISPLAY} to book the consult at the property.`,
        ],
      },
      {
        heading: 'Step 3 — Media, then price, then live',
        directAnswer:
          'Stage or edit, shoot, then pick the live price from a CMA that includes expired comps. Going live on old photos wastes the relist.',
        paragraphs: [
          'Twilight exteriors and a floor plan belong in the first media set.',
          'If week-one traffic is light, change price or media in week one.',
        ],
        subheadings: [
          {
            heading: 'Showing instructions',
            paragraphs: [
              'Gate codes, alarm, occupancy, and pet notes go in the MLS file on day one.',
              'Missed first showings rarely return.',
            ],
          },
        ],
      },
      {
        heading: 'Step 4 — Run the 97-point system',
        directAnswer: `MLS is the floor. The ${PROOF.marketingPoints}-point system covers remarks, syndication, agent calls, and offer strategy.`,
        paragraphs: [
          'Weekly written updates are part of the operating system.',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
    ],
  },
  {
    slug: 'nevada-listing-expiration-guide',
    kind: 'guide',
    path: '/guides/nevada-listing-expiration-guide',
    title: `Nevada Listing Expiration Guide | ${PHONE_DISPLAY}`,
    h1: 'Nevada Listing Expiration Guide',
    description: `What expiration, cancellation, and protection periods mean for Nevada sellers. ${AGENT_SHORT_NAME} reviews dates on consult. Call ${PHONE_DISPLAY}.`,
    directAnswer: `In Nevada, expiration ends the listing contract. You may then hire a new agent. Read cancellation and protection-period clauses before you sign again. ${AGENT_SHORT_NAME} will review dates. Call ${PHONE_DISPLAY}.`,
    keywords: ['nevada listing expiration', 'cancel listing agreement nevada', 'realtor protection period'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Guides', url: '/guides/sellers-guide' },
      { name: 'Nevada expiration guide', url: '/guides/nevada-listing-expiration-guide' },
    ],
    serviceName: 'Listing contract consult',
    areaServed: ['Las Vegas', 'Henderson', 'Nevada'],
    related: [
      { href: '/what-happens-when-listing-expires-nevada', anchor: 'What happens when a listing expires in Nevada' },
      { href: '/answers/can-i-fire-my-realtor-in-nevada', anchor: 'Can I fire my realtor in Nevada?' },
      { href: '/find-new-real-estate-agent-las-vegas', anchor: 'Find a new agent in Las Vegas' },
    ],
    faqs: [
      {
        question: 'Is this legal advice?',
        answer: 'No. This is a practical seller guide. Read your contract and, if needed, ask a Nevada real estate attorney about disputed clauses.',
      },
      {
        question: 'Can two brokers list the same home?',
        answer: 'Not while an exclusive listing is in force. Wait for expiration or a signed cancellation.',
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'Expiration vs cancellation',
        directAnswer:
          'Expiration is the end date arriving. Cancellation is an agreed early end. Both take the home off active MLS. History remains.',
        paragraphs: [
          'Ask the listing office for written confirmation of the end date.',
          'Keep that email with the contract.',
        ],
        subheadings: [
          {
            heading: 'Withdrawn',
            paragraphs: [
              'Withdrawn usually means temporarily off-market while the contract may still exist. Confirm the flag before you interview anyone else.',
              'Do not assume withdrawn equals free to relist elsewhere.',
            ],
          },
        ],
      },
      {
        heading: 'Protection periods',
        directAnswer:
          'Some listing contracts pay the original broker if a named buyer who already toured closes within a stated window. Read that clause.',
        paragraphs: [
          'A written showing log makes this cleaner.',
          'Bring the contract to the consult. Do not paraphrase from memory.',
        ],
      },
      {
        heading: 'Hiring the next agent',
        directAnswer: `Wait until you are free to sign. Then hire on operating system, not on a promised price. ${AGENT_SHORT_NAME} caps at ${PROOF.maxListings} listings.`,
        paragraphs: [
          'See the comparison page for the questions to ask.',
          `Call ${PHONE_DISPLAY}. Office: 1180 N Town Center Dr, Las Vegas, NV 89144.`,
        ],
      },
      {
        heading: 'After you are free to list',
        directAnswer: 'Reset media and price. Do not recycle the expired campaign.',
        paragraphs: [
          `Photography budget: ${PROOF.photographyInvestment}.`,
          `Last reviewed ${PROOF.lastReviewed}.`,
        ],
      },
    ],
  },
  {
    slug: 'photography-staging-checklist',
    kind: 'guide',
    path: '/guides/photography-staging-checklist',
    title: `Las Vegas Listing Photography & Staging Checklist | ${PHONE_DISPLAY}`,
    h1: 'Photography and Staging Checklist for Las Vegas Relists',
    description: `Room-by-room checklist before the camera arrives. Used with ${AGENT_SHORT_NAME}'s ${PROOF.photographyInvestment} media budget. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Before listing photos: edit counters, hide personal photos, light every room, confirm HVAC filters, and finish outdoor living. Shoot after the edit, not before. Call ${PHONE_DISPLAY} to schedule.`,
    keywords: ['listing photo checklist las vegas', 'staging checklist', 'prepare house for photos'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Guides', url: '/guides/sellers-guide' },
      { name: 'Photo and staging checklist', url: '/guides/photography-staging-checklist' },
    ],
    serviceName: 'Listing media preparation',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/listing-photography-las-vegas', anchor: 'Las Vegas listing photography' },
      { href: '/las-vegas-home-staging', anchor: 'Las Vegas home staging' },
      { href: '/guides/how-to-relist-expired-home', anchor: 'How to relist an expired home' },
    ],
    faqs: [
      {
        question: 'How long does a shoot take?',
        answer: 'Most occupied homes take 2–4 hours including twilight. Large custom homes take longer.',
      },
      {
        question: 'Should pets be home?',
        answer: 'No. Remove pets and pet equipment before the camera arrives.',
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'Whole-house edit',
        directAnswer:
          'Remove personal photos, magnets, packed counters, and overflow from every visible surface. The camera exaggerates clutter.',
        paragraphs: [
          'Close garage storage or stage the first six feet if the garage is in the photo plan.',
          'Replace burned bulbs. Dark corners read as deferred maintenance.',
        ],
        subheadings: [
          {
            heading: 'Kitchen and baths',
            paragraphs: [
              'Clear sinks, hide sponges, fold towels in one color, remove products from showers.',
              'Run the fan. Mirrors show everything the stills will show.',
            ],
          },
        ],
      },
      {
        heading: 'Desert exteriors',
        directAnswer:
          'Sweep hardscape, coil hoses, hide bins, and water plantings the morning of the shoot. Twilight exteriors need a clean silhouette.',
        paragraphs: [
          'Pool water should be clear. Green water is a click killer.',
          'Move cars off the driveway unless the listing is selling garage count with vehicles staged neatly.',
        ],
      },
      {
        heading: 'High-rise extras',
        directAnswer:
          'Book elevator time, confirm HOA photo rules, and shoot views at dusk. Daytime glass often fails.',
        paragraphs: [
          'Balcony furniture should match the interior edit.',
          'HOA documents should be in the file the same week as the shoot.',
        ],
      },
      {
        heading: 'Day-of timeline',
        directAnswer: `Edit complete, house empty of people and pets, lights on, blinds set. ${AGENT_SHORT_NAME} coordinates the crew. Call ${PHONE_DISPLAY}.`,
        paragraphs: [
          `Media budget: ${PROOF.photographyInvestment}.`,
          'Office: 1180 N Town Center Dr, Las Vegas, NV 89144.',
        ],
      },
    ],
  },
  {
    slug: '97-point-marketing-system',
    kind: 'guide',
    path: '/guides/97-point-marketing-system',
    title: `97-Point Listing Marketing System | ${AGENT_SHORT_NAME}`,
    h1: 'The 97-Point Marketing System for Las Vegas Relists',
    description: `What the ${PROOF.marketingPoints}-point listing system covers beyond MLS. Used by ${AGENT_SHORT_NAME}. Call ${PHONE_DISPLAY}.`,
    directAnswer: `The ${PROOF.marketingPoints}-point system is the operating checklist behind each listing: media, remarks, syndication, agent outreach, showings, and offer strategy. MLS entry is one line, not the plan. Call ${PHONE_DISPLAY}.`,
    keywords: ['97 point marketing', 'listing marketing system las vegas', 'beyond mls marketing'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Guides', url: '/guides/sellers-guide' },
      { name: '97-point marketing system', url: '/guides/97-point-marketing-system' },
    ],
    serviceName: '97-point listing marketing',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/marketing-strategy', anchor: 'Marketing strategy' },
      { href: '/process', anchor: 'Selling process' },
      { href: '/comparison', anchor: 'Agent comparison' },
    ],
    faqs: [
      {
        question: 'Is this a secret checklist?',
        answer: 'No. The point is that it is written and executed. Most expired listings had no written system at all.',
      },
      {
        question: 'Why a listing cap?',
        answer: `A ${PROOF.maxListings}-listing cap is how the checklist stays real instead of becoming a brochure.`,
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'Media and file',
        directAnswer: `Photography at ${PROOF.photographyInvestment}, floor plan, HOA packet, disclosures, and showing notes before the live date.`,
        paragraphs: [
          'Incomplete files create incomplete first weekends.',
          'New media is mandatory on a relist.',
        ],
        subheadings: [
          {
            heading: 'Remarks',
            paragraphs: [
              'Village, lot type, outdoor living, and update years. No generic “must see” copy.',
              'Fair, specific, and checkable against the photos.',
            ],
          },
        ],
      },
      {
        heading: 'Distribution and outreach',
        directAnswer:
          'Syndication plus agent-to-agent calls plus private-network shares. Portals are necessary and not sufficient.',
        paragraphs: [
          'Luxury product needs the private list, not only Zillow.',
          'Weekly updates include who was contacted.',
        ],
      },
      {
        heading: 'Showings and offers',
        directAnswer:
          'Same-day feedback, repair strategy, and written offer comparison. Silence after a Sunday open is how listings die.',
        paragraphs: [
          'If traffic is light, the system forces a media or price decision — not another month of hoping.',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
      {
        heading: 'How to see it on your house',
        directAnswer: `Call ${PHONE_DISPLAY}. Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Monday–Sunday 8:00 AM – 8:00 PM.`,
        paragraphs: [
          'Bring the expired MLS printout.',
          `Marketing investment: ${PROOF.marketingSpendPerListing} per listing.`,
        ],
      },
    ],
  },
  {
    slug: 'choosing-a-listing-agent-after-expiration',
    kind: 'guide',
    path: '/guides/choosing-a-listing-agent-after-expiration',
    title: `Choosing a Listing Agent After Expiration | Las Vegas | ${PHONE_DISPLAY}`,
    h1: 'Choosing a Listing Agent After Your Home Expired',
    description: `Questions to ask after an expiration: listing cap, media budget, update cadence. ${AGENT_SHORT_NAME} publishes her numbers. Call ${PHONE_DISPLAY}.`,
    directAnswer: `After an expiration, hire on listing cap, media budget, and written weekly updates — not on a promised price. ${AGENT_SHORT_NAME} caps at ${PROOF.maxListings} listings and invests ${PROOF.marketingSpendPerListing}. Call ${PHONE_DISPLAY}.`,
    keywords: ['choose listing agent after expiration', 'interview realtor las vegas', 'expired listing agent questions'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Guides', url: '/guides/sellers-guide' },
      { name: 'Choosing an agent after expiration', url: '/guides/choosing-a-listing-agent-after-expiration' },
    ],
    serviceName: 'Listing agent consult after expiration',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/find-new-real-estate-agent-las-vegas', anchor: 'Find a new Las Vegas real estate agent' },
      { href: '/comparison', anchor: 'Compare listing agents' },
      { href: '/why-choose-me', anchor: 'Why choose Dr. Jan Duffy' },
    ],
    faqs: [
      {
        question: 'Should I rehire the same agent?',
        answer: 'Only if they can explain the failure with a new operating plan. Repeating the same photos and price is not a plan.',
      },
      {
        question: 'How many listings is too many?',
        answer: `${AGENT_SHORT_NAME} stops at ${PROOF.maxListings}. Ask every candidate for their current count.`,
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'Questions that expose the operating system',
        directAnswer:
          'How many actives do you have? What do photos cost? When do I get written updates? What happens if week-one traffic is light?',
        paragraphs: [
          'If the answers are vague, the campaign will be vague.',
          'Ask to see a sample weekly update from a recent listing.',
        ],
        subheadings: [
          {
            heading: 'Numbers already published here',
            paragraphs: [
              `Max ${PROOF.maxListings} listings. ${PROOF.photographyInvestment} photography. ${PROOF.marketingSpendPerListing} marketing. ${PROOF.marketingPoints}-point system.`,
              `${PROOF.homesRelistedSold} relisted homes sold. ${PROOF.averageDaysToContract}-day average. ${PROOF.percentOfAsking} of asking.`,
            ],
          },
        ],
      },
      {
        heading: 'Red flags in expired-listing pitches',
        directAnswer:
          'Guaranteed sale prices, same-week live dates with old photos, and “I already have a buyer” with no plan for if that buyer disappears.',
        paragraphs: [
          'Door-knock scripts are not a marketing system.',
          'See the seller’s guide for how to evaluate outreach.',
        ],
      },
      {
        heading: 'How to run the consult',
        directAnswer: 'Meet at the property. Walk the issues. Leave with a written sequence, not a brochure.',
        paragraphs: [
          `Call ${PHONE_DISPLAY} to schedule.`,
          'Office: 1180 N Town Center Dr, Las Vegas, NV 89144.',
        ],
      },
      {
        heading: 'After you choose',
        directAnswer: 'Sign one exclusive listing. Complete the file. Shoot. Go live. Review traffic in writing every week.',
        paragraphs: [
          'Do not split the listing across two brands.',
          `Hours: Monday–Sunday 8:00 AM – 8:00 PM.`,
        ],
      },
    ],
  },
]

const bySlug = new Map(guides.map((item) => [item.slug, item]))

export function getGuideSlugs(): string[] {
  return guides.map((item) => item.slug)
}

export function getGuidePage(slug: string): SeoPageContent | undefined {
  const topic = bySlug.get(slug)
  if (!topic) return undefined
  return toSeoPage(topic)
}

export function getAllGuidePages(): SeoPageContent[] {
  return guides.map(toSeoPage)
}
