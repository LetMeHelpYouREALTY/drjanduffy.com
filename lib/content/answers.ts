import { toSeoPage, PRACTICE_LINE, type TopicRecord } from '@/lib/content/topics'
import { AGENT_SHORT_NAME, PHONE_DISPLAY, PROOF } from '@/lib/seo/site'
import type { SeoPageContent } from '@/lib/content/page-types'

function answerTopic(
  slug: string,
  h1: string,
  directAnswer: string,
  extra: string[],
  related: TopicRecord['related'],
): TopicRecord {
  return {
    slug,
    kind: 'answer',
    path: `/answers/${slug}`,
    title: `${h1} | ${AGENT_SHORT_NAME} | ${PHONE_DISPLAY}`,
    h1,
    description: `${directAnswer.slice(0, 150)} Call ${PHONE_DISPLAY}.`,
    directAnswer,
    keywords: [h1.toLowerCase(), 'las vegas expired listing', AGENT_SHORT_NAME.toLowerCase()],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Answers', url: '/answers' },
      { name: h1, url: `/answers/${slug}` },
    ],
    serviceName: 'Expired listing consult',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related,
    faqs: [
      {
        question: h1,
        answer: directAnswer,
      },
      {
        question: `How do I contact ${AGENT_SHORT_NAME}?`,
        answer: `Call ${PHONE_DISPLAY}. Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Hours: Monday–Sunday 8:00 AM – 8:00 PM.`,
      },
    ],
    sections: [
      {
        heading: 'Direct answer',
        directAnswer,
        paragraphs: extra,
      },
      {
        heading: 'What this does not include',
        directAnswer:
          'This page does not publish a live valley-wide median price or DOM. Those figures move. Ask for a CMA dated this week.',
        paragraphs: [
          PRACTICE_LINE,
          'Bring your MLS history printout to the consult so the answer can be applied to your address.',
        ],
        subheadings: [
          {
            heading: 'Verified practice facts',
            paragraphs: [
              `${PROOF.homesRelistedSold} relisted homes sold. ${PROOF.averageDaysToContract}-day average to contract. ${PROOF.percentOfAsking} of asking. ${PROOF.marketingSpendPerListing} marketing. ${PROOF.photographyInvestment} photography. Max ${PROOF.maxListings} listings.`,
              `Last reviewed ${PROOF.lastReviewed}.`,
            ],
          },
        ],
      },
      {
        heading: 'Next step',
        directAnswer: `Call ${PHONE_DISPLAY} or use the form below. Directions and Google reviews are linked in the footer.`,
        paragraphs: [
          'Consults can start within 24–48 hours.',
          'Photography typically follows within 3–5 days once the file is complete.',
        ],
      },
      {
        heading: 'Related reading',
        directAnswer: 'Use the localized links on this page to continue. Each page answers one seller question with the same NAP and proof facts.',
        paragraphs: [
          'If your listing already expired, start with the Nevada expiration guide.',
          'If you are still under contract, read your listing agreement before you call another agent.',
        ],
      },
    ],
  }
}

const answers: TopicRecord[] = [
  answerTopic(
    'why-did-my-las-vegas-listing-expire',
    'Why did my Las Vegas listing expire?',
    'Most Las Vegas listings expire because of thin marketing, weak photos, and slow showing follow-up — not because the address is unsellable. A reset with new media and a current CMA is the usual fix.',
    [
      'Overpricing relative to the current active set is common. So is recycling phone photos against new construction.',
      'Read the showing log. Zero tours is a media or access problem. Many tours and no offers is a price or condition problem.',
    ],
    [
      { href: '/why-expire', anchor: 'Why homes fail to sell in Las Vegas' },
      { href: '/expired-listing-specialist-las-vegas', anchor: 'Expired listing specialist' },
    ],
  ),
  answerTopic(
    'how-long-does-it-take-to-sell-a-house-in-las-vegas',
    'How long does it take to sell a house in Las Vegas?',
    `${AGENT_SHORT_NAME}'s practice average is ${PROOF.averageDaysToContract} days to contract on homes that did not sell. That is not a GLVAR median. Request a CMA for your village.`,
    [
      'Access hours, HOA document speed, and photo quality change the calendar more than a slogan.',
      'See the longer timeline page for how practice averages and market medians differ.',
    ],
    [
      { href: '/how-long-to-sell-house-las-vegas', anchor: 'How long to sell a house in Las Vegas' },
      { href: '/30-day-plan', anchor: '30-day listing plan' },
    ],
  ),
  answerTopic(
    'can-i-fire-my-realtor-in-nevada',
    'Can I fire my realtor in Nevada?',
    'You can usually end a listing by following the cancellation clause in your listing agreement, or wait until it expires. Read the contract before you interview a new agent. Call 702-500-1064 if you want the dates reviewed.',
    [
      'Some agreements include a protection period for buyers who already toured.',
      'Do not sign a second listing while the first is still exclusive.',
    ],
    [
      { href: '/find-new-real-estate-agent-las-vegas', anchor: 'Find a new Las Vegas real estate agent' },
      { href: '/blog/how-to-fire-your-listing-agent-nevada', anchor: 'How to fire a listing agent in Nevada' },
    ],
  ),
  answerTopic(
    'what-is-an-expired-listing',
    'What is an expired listing?',
    'An expired listing is a home whose listing contract ended without a closing. The property is off MLS until a new agreement is signed. History usually remains visible to agents.',
    [
      'Withdrawn and cancelled are different flags with the same seller problem: no closing.',
      'Treat the next live date as a new campaign.',
    ],
    [
      { href: '/what-happens-when-listing-expires-nevada', anchor: 'What happens when a Nevada listing expires' },
      { href: '/expired-mls-listing-las-vegas', anchor: 'Expired MLS listing help' },
    ],
  ),
  answerTopic(
    'how-much-does-it-cost-to-relist',
    'How much does it cost to relist a Las Vegas home?',
    `Standard listing commission still applies. ${AGENT_SHORT_NAME} invests ${PROOF.marketingSpendPerListing} in marketing, including ${PROOF.photographyInvestment} photography, as an operating cost of the listing.`,
    [
      'Ask any agent whether photography is billed extra.',
      'Compare carrying costs of another 90 days to the listing fee.',
    ],
    [
      { href: '/tools/cost-calculator', anchor: 'Expired listing cost calculator' },
      { href: '/comparison', anchor: 'Compare listing agents' },
    ],
  ),
  answerTopic(
    'should-i-drop-my-price-or-relist',
    'Should I drop my price or relist?',
    'Drop the price if showings are strong and feedback is price-only. Relist if photos, remarks, or follow-up also failed. Most expirations need a relist with new media, not a 3% cut on stale photos.',
    [
      'Portal history still shows the old ask after a cut.',
      'New photos are what makes a relist look like a new product.',
    ],
    [
      { href: '/price-reduction-vs-relist-las-vegas', anchor: 'Price reduction vs relist in Las Vegas' },
      { href: '/relist-home-las-vegas', anchor: 'Relist a home in Las Vegas' },
    ],
  ),
  answerTopic(
    'do-expired-homes-sell-for-less',
    'Do expired homes sell for less?',
    `${AGENT_SHORT_NAME}'s closed relists averaged ${PROOF.percentOfAsking} of asking. There is no law that an expired home must discount. The prior campaign does not set the next sale price — the current comparable set does.`,
    [
      'A copied ask from the expired listing is the usual way sellers leave money on the table or sit again.',
      'Use expired comps as a warning, not as the new list price.',
    ],
    [
      { href: '/results', anchor: 'Listing reset results' },
      { href: '/success-stories', anchor: 'Success stories' },
    ],
  ),
  answerTopic(
    'what-photos-do-las-vegas-listings-need',
    'What photos do Las Vegas listings need?',
    `Twilight exteriors, lit interiors with straight verticals, and a floor plan. ${AGENT_SHORT_NAME} budgets ${PROOF.photographyInvestment} because phone photos are a common expiration cause.`,
    [
      'High-rises need dusk view shots. Desert noon sun blows windows.',
      'Do not reuse the expired photo set.',
    ],
    [
      { href: '/listing-photography-las-vegas', anchor: 'Las Vegas listing photography' },
      { href: '/las-vegas-home-staging', anchor: 'Las Vegas home staging' },
    ],
  ),
]

const bySlug = new Map(answers.map((item) => [item.slug, item]))

export function getAnswerSlugs(): string[] {
  return answers.map((item) => item.slug)
}

export function getAnswerPage(slug: string): SeoPageContent | undefined {
  const topic = bySlug.get(slug)
  if (!topic) return undefined
  return toSeoPage(topic)
}

export function getAllAnswerPages(): SeoPageContent[] {
  return answers.map(toSeoPage)
}
