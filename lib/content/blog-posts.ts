import { toSeoPage, type TopicRecord } from '@/lib/content/topics'
import { AGENT_SHORT_NAME, PHONE_DISPLAY, PROOF } from '@/lib/seo/site'
import type { SeoPageContent } from '@/lib/content/page-types'

const posts: TopicRecord[] = [
  {
    slug: 'why-house-wont-sell-las-vegas',
    kind: 'blog',
    path: '/blog/why-house-wont-sell-las-vegas',
    title: `Why Your House Will Not Sell in Las Vegas: 7 Common Mistakes | ${PHONE_DISPLAY}`,
    h1: 'Why Your House Will Not Sell in Las Vegas: 7 Common Mistakes',
    description: `Seven operational mistakes that stall Las Vegas listings — photos, price, access, follow-up. ${AGENT_SHORT_NAME} resets failed campaigns. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Las Vegas homes stall from phone photos, an ask above the current active set, limited showing access, missing HOA docs, generic remarks, no weekly follow-up, and recycled expired media. Fix the operating system, then relist. Call ${PHONE_DISPLAY}.`,
    keywords: ['why house wont sell las vegas', 'home not selling las vegas', 'listing mistakes'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: 'Why your house will not sell', url: '/blog/why-house-wont-sell-las-vegas' },
    ],
    serviceName: 'Failed listing diagnosis',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/home-wont-sell-las-vegas', anchor: 'Home will not sell in Las Vegas' },
      { href: '/why-expire', anchor: 'Why listings expire' },
      { href: '/blog/expired-listing-pricing-mistakes', anchor: 'Expired listing pricing mistakes' },
    ],
    faqs: [
      {
        question: 'Is the market the reason my house will not sell?',
        answer:
          'Sometimes demand is slower in a village. Even then, presentation and price still decide which homes in that village get the tours. Ask for a CMA dated this week.',
      },
    ],
    published: '2026-01-15',
    sections: [
      {
        heading: 'Mistake 1 — Phone photos against professional inventory',
        directAnswer: `New construction and well-funded resales use twilight stills. Phone photos lose the swipe. ${AGENT_SHORT_NAME} budgets ${PROOF.photographyInvestment}.`,
        paragraphs: [
          'The first five images are the listing. Everything else is extra.',
          'High-rises need dusk views. Desert noon sun blows windows.',
        ],
        subheadings: [
          {
            heading: 'Mistake 2 — Pricing from the last ask',
            paragraphs: [
              'The expired ask is not a comparable. Use actives, pendings, solds, and expireds in the same micro-area.',
              'A 3% cut on stale photos rarely reopens the buyer pool.',
            ],
          },
        ],
      },
      {
        heading: 'Mistakes 3–5 — Access, documents, remarks',
        directAnswer:
          'Limited showing windows, stale HOA packets, and generic remarks kill week-one traffic even when the price is close.',
        paragraphs: [
          'Gate codes and occupancy notes belong in MLS on day one.',
          'Remarks should name village, lot, and update years — not “must see.”',
        ],
        subheadings: [
          {
            heading: 'Mistake 6 — No written weekly update',
            paragraphs: [
              'If you cannot see views, tours, and next moves, you are not in a managed campaign.',
              `${AGENT_SHORT_NAME} sends written weekly updates as part of the ${PROOF.marketingPoints}-point system.`,
            ],
          },
        ],
      },
      {
        heading: 'Mistake 7 — Relisting the same campaign',
        directAnswer:
          'A new MLS row with the same 18 photos is not a reset. Buyers already passed.',
        paragraphs: [
          'Change media, price logic, and follow-up together.',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
      {
        heading: 'What to do this week',
        directAnswer: `Call ${PHONE_DISPLAY}. Bring the MLS printout. Office: 1180 N Town Center Dr, Las Vegas, NV 89144.`,
        paragraphs: [
          'Hours: Monday–Sunday 8:00 AM – 8:00 PM.',
          `Last reviewed ${PROOF.lastReviewed}.`,
        ],
      },
    ],
  },
  {
    slug: 'how-to-sell-house-fast-las-vegas',
    kind: 'blog',
    path: '/blog/how-to-sell-house-fast-las-vegas',
    title: `How to Sell Your House Fast in Las Vegas: 2026 Guide | ${PHONE_DISPLAY}`,
    h1: 'How to Sell Your House Fast in Las Vegas: Complete 2026 Guide',
    description: `A practical 2026 sequence: file, media, price, access. ${AGENT_SHORT_NAME}'s practice average is ${PROOF.averageDaysToContract} days to contract. Call ${PHONE_DISPLAY}.`,
    directAnswer: `To sell faster in Las Vegas in 2026: complete the file, shoot listing-grade media, price from a current CMA, and allow showings. ${AGENT_SHORT_NAME}'s practice average is ${PROOF.averageDaysToContract} days to contract on relisted homes. Call ${PHONE_DISPLAY}.`,
    keywords: ['sell house fast las vegas 2026', 'how to sell las vegas home', 'fast listing plan'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: 'How to sell fast', url: '/blog/how-to-sell-house-fast-las-vegas' },
    ],
    serviceName: 'Fast listing plan',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/sell-house-fast-las-vegas', anchor: 'Sell a house fast in Las Vegas' },
      { href: '/how-long-to-sell-house-las-vegas', anchor: 'How long to sell a house in Las Vegas' },
      { href: '/30-day-plan', anchor: '30-day plan' },
    ],
    faqs: [
      {
        question: 'Can you guarantee a 19-day sale?',
        answer: `No. ${PROOF.averageDaysToContract} days is a practice average, not a guarantee. Access, condition, and price still matter.`,
      },
    ],
    published: '2026-01-10',
    sections: [
      {
        heading: 'Speed is an operating choice',
        directAnswer:
          'Fast listings are ready on day one: photos, packet, access. Slow listings are still gathering HOA docs in week three.',
        paragraphs: [
          'Order HOA documents while you edit the house.',
          'Do not go live mid-repair unless the remarks tell the truth and the price matches.',
        ],
        subheadings: [
          {
            heading: '2026 note',
            paragraphs: [
              'Portal shoppers still decide from photos first. That has not changed.',
              `Reviewed ${PROOF.lastReviewed}. Valley medians are not published here; request a CMA.`,
            ],
          },
        ],
      },
      {
        heading: 'The week-one sequence',
        directAnswer: 'Consult, edit, shoot, CMA, live, showing feedback. Skip a step and the calendar stretches.',
        paragraphs: [
          `Photography budget: ${PROOF.photographyInvestment}.`,
          `Listing cap: ${PROOF.maxListings}.`,
        ],
      },
      {
        heading: 'What “fast” is not',
        directAnswer:
          'Fast is not underpricing as a stunt or skipping disclosures. Fast is removing friction.',
        paragraphs: [
          'Inspection-ready homes renegotiate less.',
          'See the staging checklist before the camera arrives.',
        ],
      },
      {
        heading: 'Start the 2026 plan on your address',
        directAnswer: `Call ${PHONE_DISPLAY}. 1180 N Town Center Dr, Las Vegas, NV 89144.`,
        paragraphs: [
          'Hours: Monday–Sunday 8:00 AM – 8:00 PM.',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
    ],
  },
  {
    slug: 'summerlin-market-report-january-2026',
    kind: 'blog',
    path: '/blog/summerlin-market-report-january-2026',
    title: `Summerlin Seller Market Brief | How to Read Inventory | ${PHONE_DISPLAY}`,
    h1: 'Summerlin Seller Market Brief: How to Read Inventory (2026)',
    description: `How Summerlin sellers should read actives, pendings, and expireds without fake medians. ${AGENT_SHORT_NAME} runs village-level CMAs. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Do not price a Summerlin home off a citywide headline. Use actives, pendings, solds, and expireds in your village. ${AGENT_SHORT_NAME} will pull a dated CMA. Call ${PHONE_DISPLAY}. This brief does not invent a median price.`,
    keywords: ['summerlin market report', 'summerlin inventory', 'summerlin cma'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: 'Summerlin market brief', url: '/blog/summerlin-market-report-january-2026' },
    ],
    serviceName: 'Summerlin CMA consult',
    areaServed: ['Summerlin', 'Summerlin West', 'The Ridges'],
    related: [
      { href: '/neighborhoods/summerlin', anchor: 'Summerlin homes that did not sell' },
      { href: '/summerlin-real-estate-agent', anchor: 'Summerlin real estate agent' },
      { href: '/market-analysis', anchor: 'Market analysis' },
    ],
    faqs: [
      {
        question: 'Where is the median sale price?',
        answer: `UNKNOWN in this article on purpose. Medians move. Call ${PHONE_DISPLAY} for a CMA dated this week for your village.`,
      },
    ],
    published: '2026-01-05',
    sections: [
      {
        heading: 'Why this is not a fake stats dump',
        directAnswer:
          'Publishing an invented Summerlin median would be worse than publishing none. The useful artifact is a CMA on your address.',
        paragraphs: [
          'Village differences inside Summerlin are larger than most headlines admit. The Ridges is not Tournament Hills.',
          `Last reviewed ${PROOF.lastReviewed}.`,
        ],
        subheadings: [
          {
            heading: 'The four lists to pull',
            paragraphs: [
              'Actives: what buyers can tour this week. Pendings: what already went under contract. Solds: what closed. Expireds: what failed.',
              'Most listing presentations skip expireds. That is how sellers repeat a failed ask.',
            ],
          },
        ],
      },
      {
        heading: 'How expired listings distort “the market”',
        directAnswer:
          'A village with many stale actives is not the same as a village with tight inventory. DOM on live listings can hide a pile of recent expirations.',
        paragraphs: [
          'Ask your agent for the expiration count in your price band.',
          `${AGENT_SHORT_NAME} uses that count in the reset plan.`,
        ],
      },
      {
        heading: 'What we can verify without a live MLS pull',
        directAnswer: `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking, ${PROOF.marketingSpendPerListing} marketing.`,
        paragraphs: [
          'Those numbers describe the practice, not GLVAR.',
          'They are the numbers this site will actually stand behind.',
        ],
      },
      {
        heading: 'Get the Summerlin CMA',
        directAnswer: `Call ${PHONE_DISPLAY}. Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Monday–Sunday 8:00 AM – 8:00 PM.`,
        paragraphs: [
          'Bring your address, community name, and the prior MLS printout.',
          'See Summerlin West, The Ridges, and Red Rock Country Club pages for village-specific listing notes.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-fire-your-listing-agent-nevada',
    kind: 'blog',
    path: '/blog/how-to-fire-your-listing-agent-nevada',
    title: `How to Fire Your Listing Agent in Nevada | ${PHONE_DISPLAY}`,
    h1: 'How to Fire Your Listing Agent in Nevada',
    description: `Read the listing agreement, use the cancellation clause or wait for expiration, then hire one new agent. ${AGENT_SHORT_NAME} reviews dates. Call ${PHONE_DISPLAY}.`,
    directAnswer: `To change listing agents in Nevada, read the cancellation and protection-period clauses. You cannot sign a second exclusive listing while the first is in force. ${AGENT_SHORT_NAME} will review dates. Call ${PHONE_DISPLAY}.`,
    keywords: ['fire listing agent nevada', 'cancel listing agreement', 'change realtor las vegas'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: 'Fire your listing agent', url: '/blog/how-to-fire-your-listing-agent-nevada' },
    ],
    serviceName: 'Listing agreement consult',
    areaServed: ['Las Vegas', 'Nevada'],
    related: [
      { href: '/answers/can-i-fire-my-realtor-in-nevada', anchor: 'Can I fire my realtor in Nevada?' },
      { href: '/guides/nevada-listing-expiration-guide', anchor: 'Nevada listing expiration guide' },
      { href: '/find-new-real-estate-agent-las-vegas', anchor: 'Find a new Las Vegas agent' },
    ],
    faqs: [
      {
        question: 'Is this legal advice?',
        answer: 'No. For a disputed contract, speak with a Nevada real estate attorney.',
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'Read before you call anyone else',
        directAnswer:
          'The listing agreement controls end dates, cancellation signatures, and any tail on prior buyers.',
        paragraphs: [
          'Ask the listing office for written confirmation of status: active, withdrawn, cancelled, or expired.',
          'Keep that email.',
        ],
        subheadings: [
          {
            heading: 'Do not dual-list',
            paragraphs: [
              'Two exclusive listings at once is how sellers create commission disputes.',
              'Wait until you are free, then sign one new agreement.',
            ],
          },
        ],
      },
      {
        heading: 'What to say to the current broker',
        directAnswer:
          'Be direct and written. Request cancellation if the contract allows it. If not, calendar the expiration.',
        paragraphs: [
          'You do not owe a debate about feelings. You do owe a clean paper trail.',
          'Collect your documents and keys to lockboxes as the agreement requires.',
        ],
      },
      {
        heading: 'Hiring the next agent',
        directAnswer: `Interview on listing cap, media budget, and weekly updates. ${AGENT_SHORT_NAME} caps at ${PROOF.maxListings} and invests ${PROOF.marketingSpendPerListing}.`,
        paragraphs: [
          'Bring the expired or soon-to-expire printout.',
          'See the choosing-an-agent guide for the question list.',
        ],
      },
      {
        heading: 'Talk through your dates',
        directAnswer: `Call ${PHONE_DISPLAY}. 1180 N Town Center Dr, Las Vegas, NV 89144.`,
        paragraphs: [
          'Hours: Monday–Sunday 8:00 AM – 8:00 PM.',
          'This is a practical review, not a legal opinion.',
        ],
      },
    ],
  },
  {
    slug: 'expired-listing-pricing-mistakes',
    kind: 'blog',
    path: '/blog/expired-listing-pricing-mistakes',
    title: `Expired Listing Pricing Mistakes in Las Vegas | ${PHONE_DISPLAY}`,
    h1: 'Expired Listing Pricing Mistakes in Las Vegas',
    description: `The expired ask is not a comparable. How ${AGENT_SHORT_NAME} recasts price on a relist. Call ${PHONE_DISPLAY}.`,
    directAnswer: `The most common pricing mistake after expiration is reusing the last ask, or cutting 3% on the same photos. Price from today’s village comps, including other expireds. Call ${PHONE_DISPLAY} for a CMA.`,
    keywords: ['expired listing price', 'relist pricing las vegas', 'overpriced listing'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: 'Pricing mistakes', url: '/blog/expired-listing-pricing-mistakes' },
    ],
    serviceName: 'Relist pricing CMA',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/price-reduction-vs-relist-las-vegas', anchor: 'Price reduction vs relist' },
      { href: '/tools/value-check', anchor: 'Value check tool' },
      { href: '/blog/why-house-wont-sell-las-vegas', anchor: 'Why houses will not sell' },
    ],
    faqs: [
      {
        question: 'Should I price under the expired ask on purpose?',
        answer: 'Price to the current comparable set, not to a discount ritual. Sometimes that is below the old ask. Sometimes it is not.',
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'The expired ask is a warning, not a comp',
        directAnswer:
          'It tells you what the market already rejected in that campaign. It does not tell you the next correct number by itself.',
        paragraphs: [
          'Include expired and withdrawn comps in the CMA.',
          'Match lot, year, and finish. Do not average The Ridges with a production tract.',
        ],
        subheadings: [
          {
            heading: 'Photos and price are one product',
            paragraphs: [
              'A correct price on weak photos still sits.',
              `Shoot first (${PROOF.photographyInvestment}), then lock the live price.`,
            ],
          },
        ],
      },
      {
        heading: 'Week-one traffic is the test',
        directAnswer:
          'If qualified tours are not happening, the live price or the media failed. Change one of them while the listing is still new.',
        paragraphs: [
          'Waiting 45 days to “give it time” is how expirations repeat.',
          `${AGENT_SHORT_NAME} writes that decision into the weekly update.`,
        ],
      },
      {
        heading: 'Percent of asking is not a pricing method',
        directAnswer: `${PROOF.percentOfAsking} of asking is a closed-file result. It starts with a defensible ask, not with a fantasy ask that you hope to “average down.”`,
        paragraphs: [
          'Sellers who pick a high ask to “leave room” often expire.',
          'Buyers do not split the difference with a listing that never gets toured.',
        ],
      },
      {
        heading: 'Get the CMA',
        directAnswer: `Call ${PHONE_DISPLAY}. 1180 N Town Center Dr, Las Vegas, NV 89144.`,
        paragraphs: [
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average.`,
          `Reviewed ${PROOF.lastReviewed}.`,
        ],
      },
    ],
  },
  {
    slug: 'luxury-home-marketing-summerlin',
    kind: 'blog',
    path: '/blog/luxury-home-marketing-summerlin',
    title: `Luxury Home Marketing in Summerlin | ${PHONE_DISPLAY}`,
    h1: 'Luxury Home Marketing in Summerlin',
    description: `Estate media, private-network outreach, and village-level comps for The Ridges, Red Rock, and Summerlin West. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Summerlin luxury marketing is estate photography, floor plans, and private-network outreach — not a production-home MLS dump. ${AGENT_SHORT_NAME} caps listings at ${PROOF.maxListings}. Call ${PHONE_DISPLAY}.`,
    keywords: ['summerlin luxury marketing', 'ridges listing marketing', 'red rock country club listing'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: 'Luxury home marketing', url: '/blog/luxury-home-marketing-summerlin' },
    ],
    serviceName: 'Summerlin luxury listing marketing',
    areaServed: ['Summerlin West', 'The Ridges', 'Red Rock Country Club'],
    related: [
      { href: '/luxury-home-wont-sell-las-vegas', anchor: 'Luxury home will not sell' },
      { href: '/neighborhoods/the-ridges', anchor: 'The Ridges homes' },
      { href: '/neighborhoods/red-rock-country-club', anchor: 'Red Rock Country Club homes' },
    ],
    faqs: [
      {
        question: 'Do luxury buyers only come from portals?',
        answer: 'No. Portals matter. Agent-to-agent and private lists still move custom product in Summerlin.',
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'Match the media to the gate',
        directAnswer: `Custom homes listed with phone photos look unfinished. The ${PROOF.photographyInvestment} budget exists so scale and lot show before the private showing.`,
        paragraphs: [
          'Twilight, aerials, and a floor plan are the baseline.',
          'Sequence: architecture, outdoor living, interiors — not the primary bedroom first.',
        ],
        subheadings: [
          {
            heading: 'Village names in remarks',
            paragraphs: [
              'Write The Ridges, Red Rock Country Club, or Summerlin West — not “Las Vegas luxury.”',
              'Buyers filter by community. Remarks should match the filter.',
            ],
          },
        ],
      },
      {
        heading: 'Comps that actually match',
        directAnswer:
          'Do not price a Ridges custom home off a Summerlin production sale. Lot, view, and finish have to match.',
        paragraphs: [
          'Include expired luxury comps. They show where the last ask died.',
          'Request a CMA dated this week. Do not use last season’s brochure.',
        ],
      },
      {
        heading: 'Private network',
        directAnswer:
          `The ${PROOF.marketingPoints}-point system includes agent calls and private shares, not only syndication.`,
        paragraphs: [
          'Weekly updates name the outreach, not only portal views.',
          `Cap: ${PROOF.maxListings} listings.`,
        ],
      },
      {
        heading: 'Start the estate file',
        directAnswer: `Call ${PHONE_DISPLAY}. 1180 N Town Center Dr, Las Vegas, NV 89144.`,
        paragraphs: [
          'Hours: Monday–Sunday 8:00 AM – 8:00 PM.',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
    ],
  },
  {
    slug: 'hoa-documents-before-you-relist',
    kind: 'blog',
    path: '/blog/hoa-documents-before-you-relist',
    title: `HOA Documents Before You Relist in Las Vegas | ${PHONE_DISPLAY}`,
    h1: 'HOA Documents Before You Relist in Las Vegas',
    description: `Stale HOA packets kill condo and gated-home contracts. Order them while you shoot new photos. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Order a current HOA resale packet before the relist live date. Missing CC&Rs, financials, and rental rules are a top reason Las Vegas condo contracts die after the first weekend. Call ${PHONE_DISPLAY}.`,
    keywords: ['hoa documents las vegas', 'condo resale packet', 'relist hoa'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: 'HOA documents', url: '/blog/hoa-documents-before-you-relist' },
    ],
    serviceName: 'HOA file preparation',
    areaServed: ['Las Vegas', 'Henderson', 'Summerlin'],
    related: [
      { href: '/condos', anchor: 'Las Vegas condos' },
      { href: '/guides/how-to-relist-expired-home', anchor: 'How to relist an expired home' },
      { href: '/condos/high-rise', anchor: 'High-rise condos' },
    ],
    faqs: [
      {
        question: 'How long do HOA packets take?',
        answer: 'It varies by association. Order at consult, not after the first offer. Do not guess the turnaround.',
      },
    ],
    published: '2026-09-06',
    sections: [
      {
        heading: 'What belongs in the packet',
        directAnswer:
          'CC&Rs, bylaws, budget, reserve summary, meeting minutes as required, rental rules, and any pending special assessment.',
        paragraphs: [
          'Rental caps matter for investor-occupants and for some owner-occupants who want flexibility.',
          'Out-of-area Strip condo buyers will ask on the first call.',
        ],
        subheadings: [
          {
            heading: 'Gated single-family is not exempt',
            paragraphs: [
              'Summerlin and Henderson gates still have architectural rules and transfer fees.',
              'Put transfer fees in the file so they are not a closing surprise.',
            ],
          },
        ],
      },
      {
        heading: 'Why expired condos often failed here',
        directAnswer:
          'The first listing went live without documents. The first serious buyer left when the packet took two weeks.',
        paragraphs: [
          'A relist should not repeat that lag.',
          'Order the packet while photography is scheduled.',
        ],
      },
      {
        heading: 'How we handle it',
        directAnswer: `${AGENT_SHORT_NAME} will not treat MLS live as more important than a complete file.`,
        paragraphs: [
          'Building-specific pages list the usual buyer questions for that tower.',
          `Call ${PHONE_DISPLAY} to start the file.`,
        ],
      },
      {
        heading: 'Start the packet',
        directAnswer: `1180 N Town Center Dr, Las Vegas, NV 89144. Monday–Sunday 8:00 AM – 8:00 PM.`,
        paragraphs: [
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average.`,
          `Reviewed ${PROOF.lastReviewed}.`,
        ],
      },
    ],
  },
]

export const BLOG_INDEX = posts.map((post) => ({
  slug: post.slug,
  title: post.h1,
  excerpt: post.directAnswer,
  date: post.published || PROOF.lastReviewed,
  category: post.slug.includes('market') ? 'Market Reports' : 'Selling Tips',
}))

const bySlug = new Map(posts.map((item) => [item.slug, item]))

export function getBlogSlugs(): string[] {
  return posts.map((item) => item.slug)
}

export function getBlogPage(slug: string): SeoPageContent | undefined {
  const topic = bySlug.get(slug)
  if (!topic) return undefined
  return toSeoPage(topic)
}

export function getAllBlogPages(): SeoPageContent[] {
  return posts.map(toSeoPage)
}
