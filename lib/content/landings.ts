import { toSeoPage, type TopicRecord } from '@/lib/content/topics'
import { AGENT_SHORT_NAME, PHONE_DISPLAY, PROOF } from '@/lib/seo/site'
import type { SeoPageContent } from '@/lib/content/page-types'

const landings: TopicRecord[] = [
  {
    slug: 'expired-listing-specialist-las-vegas',
    kind: 'landing',
    path: '/expired-listing-specialist-las-vegas',
    title: `Expired Listing Specialist Las Vegas | ${AGENT_SHORT_NAME} | ${PHONE_DISPLAY}`,
    h1: 'Expired Listing Specialist in Las Vegas',
    description: `Hire an expired listing specialist in Las Vegas. ${AGENT_SHORT_NAME} resets photos, price, and follow-up. ${PROOF.averageDaysToContract}-day average. Call ${PHONE_DISPLAY}.`,
    directAnswer: `An expired listing specialist relists a home that did not sell with new media, pricing, and buyer targeting. ${AGENT_SHORT_NAME} takes a maximum of ${PROOF.maxListings} listings and invests ${PROOF.marketingSpendPerListing} per home. Practice average: ${PROOF.averageDaysToContract} days to contract. Call ${PHONE_DISPLAY}.`,
    keywords: ['expired listing specialist las vegas', 'expired mls listing', 'relist home las vegas'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Expired Listing Specialist', url: '/expired-listing-specialist-las-vegas' },
    ],
    serviceName: 'Expired listing reset in Las Vegas',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/relist-home-las-vegas', anchor: 'Relist a home in Las Vegas' },
      { href: '/home-wont-sell-las-vegas', anchor: 'Home will not sell in Las Vegas' },
      { href: '/what-happens-when-listing-expires-nevada', anchor: 'What happens when a Nevada listing expires' },
    ],
    faqs: [
      {
        question: 'What does an expired listing specialist do in Las Vegas?',
        answer: `They diagnose why the first campaign failed, then reset photography, remarks, price, and showing follow-up. ${AGENT_SHORT_NAME} uses a ${PROOF.marketingPoints}-point system and ${PROOF.photographyInvestment} photography.`,
      },
      {
        question: 'Is an expired listing the same as a withdrawn listing?',
        answer:
          'No. Expired means the listing contract ended without a sale. Withdrawn means the listing was taken off MLS before the end date. Both need a reset before a new live date.',
      },
      {
        question: `How fast can ${AGENT_SHORT_NAME} start?`,
        answer: `Consults can start within 24–48 hours. Photography typically happens within 3–5 days. Call ${PHONE_DISPLAY}.`,
      },
    ],
    sections: [
      {
        heading: 'What “expired” actually means on the MLS',
        directAnswer:
          'Expired means the listing agreement ended and the home did not close. The MLS history stays visible. Buyers and agents can see prior asking prices, so a copy-paste relist rarely works.',
        paragraphs: [
          'Nevada sellers often hear that expiration is invisible. It is not. Portal history and agent tools still show the prior campaign. The new listing has to look like a new product.',
          `That is why ${AGENT_SHORT_NAME} will not recycle the old photos. The ${PROOF.photographyInvestment} media budget is the first line item, not an upgrade.`,
        ],
        subheadings: [
          {
            heading: 'Expired vs cancelled vs withdrawn',
            paragraphs: [
              'Cancelled and withdrawn have different MLS flags but the same seller problem: no closing. The reset still starts with media, price, and a showing plan.',
              'Ask your next agent which flag you are on before you sign. It changes how remarks should read.',
            ],
          },
        ],
      },
      {
        heading: 'Why Las Vegas listings expire',
        directAnswer:
          'Most Las Vegas expirations come from MLS-only marketing, phone photos, and slow showing follow-up — not from a “dead” address. Summerlin, Henderson, and Strip-adjacent product all fail the same way when the campaign is thin.',
        paragraphs: [
          'Overpricing relative to the current active set is common. So is under-investing in twilight exteriors. Buyers swipe past both.',
          `The fix is operational: ${PROOF.marketingSpendPerListing} in marketing, a ${PROOF.maxListings}-listing cap, and weekly written updates.`,
        ],
        subheadings: [
          {
            heading: 'The 97-point reset',
            paragraphs: [
              `The ${PROOF.marketingPoints}-point system covers media, remarks, syndication, agent-to-agent calls, and offer strategy. MLS entry is the floor.`,
              'If week-one traffic is light, price and media change in week one — not after another expiration.',
            ],
          },
        ],
      },
      {
        heading: 'How to hire the next agent',
        directAnswer: `Ask for a written marketing plan, a photo sample, a listing cap, and a showing-feedback cadence. ${AGENT_SHORT_NAME} publishes those rules: max ${PROOF.maxListings} listings, ${PROOF.photographyInvestment} photography, weekly updates. Call ${PHONE_DISPLAY}.`,
        paragraphs: [
          'Do not hire on a promised sale price alone. Hire on the operating system behind the listing.',
          'Bring the old listing remarks and any inspection reports to the consult. That file is how we avoid repeating the first campaign.',
        ],
      },
      {
        heading: 'Office, hours, and next step',
        directAnswer: `Dr. Janet Duffy Real Estate is at 1180 N Town Center Dr, Las Vegas, NV 89144. Hours: Monday–Sunday 8:00 AM – 8:00 PM. Call ${PHONE_DISPLAY} or request directions and Google reviews from any page.`,
        paragraphs: [
          'The office is in Summerlin’s Town Center. Consults can be at the property or at the office.',
          `Practice results remain ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking. Those are not citywide medians.`,
        ],
      },
    ],
  },
  {
    slug: 'what-happens-when-listing-expires-nevada',
    kind: 'landing',
    path: '/what-happens-when-listing-expires-nevada',
    title: `What Happens When a Listing Expires in Nevada | ${PHONE_DISPLAY}`,
    h1: 'What Happens When a Listing Expires in Nevada?',
    description: `When a Nevada listing expires, the contract ends and the home is off MLS. Learn next steps, relist timing, and how ${AGENT_SHORT_NAME} resets the campaign. Call ${PHONE_DISPLAY}.`,
    directAnswer: `When a Nevada listing expires, the listing contract ends and the home is no longer active on MLS. You can interview a new agent, reset photos and price, and relist. ${AGENT_SHORT_NAME} starts consults within 24–48 hours. Call ${PHONE_DISPLAY}.`,
    keywords: ['listing expired nevada', 'what happens when listing expires', 'relist after expiration nevada'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'What happens when a listing expires', url: '/what-happens-when-listing-expires-nevada' },
    ],
    serviceName: 'Nevada listing expiration consult',
    areaServed: ['Las Vegas', 'Henderson', 'North Las Vegas'],
    related: [
      { href: '/guides/nevada-listing-expiration-guide', anchor: 'Nevada listing expiration guide' },
      { href: '/relist-home-las-vegas', anchor: 'Relist a home in Las Vegas' },
      { href: '/find-new-real-estate-agent-las-vegas', anchor: 'Find a new Las Vegas agent' },
    ],
    faqs: [
      {
        question: 'Does the home automatically relist when the contract expires?',
        answer: 'No. A new listing agreement is required. The prior broker cannot keep marketing the home without a new contract.',
      },
      {
        question: 'Can I hire a different agent immediately?',
        answer: `Usually yes once the listing is expired or cancelled. Read your prior agreement for any tail or protection period. ${AGENT_SHORT_NAME} will review dates on the consult.`,
      },
      {
        question: 'Will buyers see that it expired?',
        answer: 'Agents can see listing history. Many portals also keep price history. Plan the relist as a new campaign, not a copy.',
      },
    ],
    sections: [
      {
        heading: 'The contract ends. The history does not.',
        directAnswer:
          'Expiration ends the listing agreement. It does not erase MLS history, portal price history, or showing feedback. Treat the next live date as a new product launch.',
        paragraphs: [
          'You are not obligated to re-sign with the same broker. Interview agents who can explain why the first campaign failed in specifics, not slogans.',
          'Collect the showing log, flyers, and any inspection reports before you interview. That file shortens the diagnosis.',
        ],
        subheadings: [
          {
            heading: 'Protection periods',
            paragraphs: [
              'Some listing contracts include a protection period for buyers who already toured. Read that clause before you relist with a new agent.',
              'Bring the contract to the consult. Do not guess about tail dates.',
            ],
          },
        ],
      },
      {
        heading: 'What to do in the first 72 hours',
        directAnswer: `Pause recycling the old photos. Interview one specialist. Order new media only after a written plan. ${AGENT_SHORT_NAME} can consult within 24–48 hours at ${PHONE_DISPLAY}.`,
        paragraphs: [
          'Do not drop the price 3% and relist Friday with the same 18 photos. Buyers already passed that package.',
          `The operating reset is media, remarks, price, and follow-up. That is the ${PROOF.marketingPoints}-point system.`,
        ],
        subheadings: [
          {
            heading: 'Documents to gather',
            paragraphs: [
              'Listing agreement, MLS printout, HOA packet, permits, and inspection reports. Incomplete files slow photography and MLS entry.',
              'If HOA docs are stale, order a new packet while media is being shot.',
            ],
          },
        ],
      },
      {
        heading: 'When a relist should wait',
        directAnswer:
          'Wait if repairs that failed the last inspection are still open, or if you cannot support a price that matches today’s actives. A live date without those items repeats the expiration.',
        paragraphs: [
          'A two-week repair window is cheaper than another 90 days of carrying costs.',
          'If you are not ready, keep the home off MLS and finish the file. Then launch.',
        ],
      },
      {
        heading: 'Talk to a Las Vegas specialist',
        directAnswer: `Call ${PHONE_DISPLAY}. Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Hours: Monday–Sunday 8:00 AM – 8:00 PM.`,
        paragraphs: [
          `${AGENT_SHORT_NAME} works expired and failed listings in Summerlin, Henderson, and the greater valley.`,
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
    ],
  },
  {
    slug: 'luxury-home-wont-sell-las-vegas',
    kind: 'landing',
    path: '/luxury-home-wont-sell-las-vegas',
    title: `Luxury Home Will Not Sell Las Vegas | ${AGENT_SHORT_NAME}`,
    h1: 'Luxury Home Will Not Sell in Las Vegas?',
    description: `Luxury homes in The Ridges, Red Rock, and Summerlin West stall without estate-level media. ${AGENT_SHORT_NAME} resets the campaign. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Luxury Las Vegas homes stall when they are marketed like production listings. ${AGENT_SHORT_NAME} uses estate photography, private-network outreach, and a ${PROOF.maxListings}-listing cap. Call ${PHONE_DISPLAY}.`,
    keywords: ['luxury home wont sell las vegas', 'ridges home expired', 'summerlin luxury listing'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Luxury home will not sell', url: '/luxury-home-wont-sell-las-vegas' },
    ],
    serviceName: 'Luxury listing reset',
    areaServed: ['The Ridges', 'Summerlin West', 'Red Rock Country Club'],
    related: [
      { href: '/neighborhoods/the-ridges', anchor: 'The Ridges homes that did not sell' },
      { href: '/neighborhoods/red-rock-country-club', anchor: 'Red Rock Country Club homes' },
      { href: '/neighborhoods/spanish-trail', anchor: 'Spanish Trail luxury homes' },
    ],
    faqs: [
      {
        question: 'Why do luxury Las Vegas listings expire?',
        answer:
          'Thin photography, public-portal-only marketing, and pricing against the wrong comparable set. Estate buyers compare finishes, lot, and privacy — not a citywide average.',
      },
      {
        question: 'Do you take every luxury listing?',
        answer: `No. The cap is ${PROOF.maxListings} listings so each home gets ${PROOF.marketingSpendPerListing} in marketing.`,
      },
    ],
    sections: [
      {
        heading: 'Estate product needs estate media',
        directAnswer: `Phone photos shrink volume. ${AGENT_SHORT_NAME} budgets ${PROOF.photographyInvestment} so scale, lot, and twilight exteriors are visible before the first private showing.`,
        paragraphs: [
          'The Ridges, Red Rock Country Club, The Summit, Spanish Trail, and Queensridge buyers already have options. The first five photos decide the tour.',
          'Floor plans are not optional above a custom-home price band. They reduce no-show rates.',
        ],
        subheadings: [
          {
            heading: 'Private network vs portal only',
            paragraphs: [
              'Portals are necessary and not sufficient. Agent-to-agent calls and off-market shares still move luxury product in this valley.',
              'Weekly written updates include who was called, not only view counts.',
            ],
          },
        ],
      },
      {
        heading: 'Pricing custom homes without a fake “market average”',
        directAnswer:
          'Custom homes do not have a useful citywide median. Use closed, pending, and expired comps that match lot, view, and finish. Request a CMA dated this week.',
        paragraphs: [
          'Expired luxury comps are the ones most listing presentations skip. They are the ones that tell you where the last ask failed.',
          'If showing traffic is light after the first two weekends, the price was a marketing choice that can be changed.',
        ],
      },
      {
        heading: 'What the reset includes',
        directAnswer: `Media, remarks, private-network launch, showing choreography, and offer strategy. Call ${PHONE_DISPLAY}.`,
        paragraphs: [
          'Occupancy, gate instructions, and vendor timing belong in the listing file before the live date.',
          'Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Hours: Monday–Sunday 8:00 AM – 8:00 PM.',
        ],
      },
      {
        heading: 'Where this work happens',
        directAnswer:
          'Summerlin West, The Ridges, Red Rock Country Club, The Summit, Queensridge, Spanish Trail, and Henderson custom gates.',
        paragraphs: [
          'Each gate has a different buyer list. Remarks should name the community, not “Las Vegas luxury.”',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
    ],
  },
  {
    slug: 'las-vegas-home-staging',
    kind: 'landing',
    path: '/las-vegas-home-staging',
    title: `Las Vegas Home Staging for Listings That Did Not Sell | ${PHONE_DISPLAY}`,
    h1: 'Las Vegas Home Staging for Homes That Did Not Sell',
    description: `Staging is part of a listing reset, not a decoration hobby. ${AGENT_SHORT_NAME} pairs staging with ${PROOF.photographyInvestment} photography. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Las Vegas staging for a failed listing means editing furniture and light so new photos can compete. It is scheduled before photography, not after the home sits. Call ${PHONE_DISPLAY} for a reset plan.`,
    keywords: ['las vegas home staging', 'staging expired listing', 'listing photos las vegas'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Las Vegas home staging', url: '/las-vegas-home-staging' },
    ],
    serviceName: 'Listing staging and media reset',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/listing-photography-las-vegas', anchor: 'Las Vegas listing photography' },
      { href: '/guides/photography-staging-checklist', anchor: 'Photography and staging checklist' },
      { href: '/expired-listing-specialist-las-vegas', anchor: 'Expired listing specialist' },
    ],
    faqs: [
      {
        question: 'Should I stage before or after new photos?',
        answer: 'Before. Staging that happens after photography wastes the media budget.',
      },
      {
        question: 'Do every rooms need rented furniture?',
        answer:
          'No. Many resets are edit-and-edit: remove clutter, keep a few rooms of furniture, and light the house for twilight exteriors.',
      },
    ],
    sections: [
      {
        heading: 'Staging is a photography input',
        directAnswer: `If the camera cannot see scale and light, buyers will not tour. ${AGENT_SHORT_NAME} sequences staging, then ${PROOF.photographyInvestment} media, then MLS.`,
        paragraphs: [
          'Occupied homes can stage. Vacant homes usually must. The plan depends on floor plate, not on a trend.',
          'Desert light is harsh at noon. Twilight exteriors and interior stills at the right hour matter more than extra throw pillows.',
        ],
        subheadings: [
          {
            heading: 'What we edit first',
            paragraphs: [
              'Personal photos, packed counters, oversized furniture, and dark window treatments. Those four items kill clicks.',
              'Pet equipment and garage overflow belong in a pod or a closed room before the camera arrives.',
            ],
          },
        ],
      },
      {
        heading: 'Staging will not fix the wrong price',
        directAnswer:
          'Staging increases presentation. It does not replace a CMA. If the ask is above the current active set, staged photos still sit.',
        paragraphs: [
          'Use staging and price together. That is the reset, not décor as a substitute for strategy.',
          `Weekly updates include showing feedback on furniture and light so we can adjust.`,
        ],
      },
      {
        heading: 'Vendor timing',
        directAnswer: `Consult within 24–48 hours. Staging and photography typically land inside a week. Call ${PHONE_DISPLAY}.`,
        paragraphs: [
          'Office: 1180 N Town Center Dr, Las Vegas, NV 89144.',
          'Hours: Monday–Sunday 8:00 AM – 8:00 PM.',
        ],
      },
      {
        heading: 'Where staging changes outcomes',
        directAnswer:
          'High-rise condos, vacant custom homes, and dated interiors in Green Valley and Summerlin see the largest photo lift from a real stage.',
        paragraphs: [
          'Condo staging must respect elevator and HOA rules. Plan the load-in, do not improvise on live day.',
          'Custom homes need scale furniture. Undersized rental sets make rooms look smaller.',
        ],
      },
    ],
  },
  {
    slug: 'how-long-to-sell-house-las-vegas',
    kind: 'landing',
    path: '/how-long-to-sell-house-las-vegas',
    title: `How Long Does It Take to Sell a House in Las Vegas? | ${PHONE_DISPLAY}`,
    h1: 'How Long Does It Take to Sell a House in Las Vegas?',
    description: `${AGENT_SHORT_NAME}'s practice average is ${PROOF.averageDaysToContract} days to contract on homes that did not sell. Your address still needs a current CMA. Call ${PHONE_DISPLAY}.`,
    directAnswer: `${AGENT_SHORT_NAME}'s practice average is ${PROOF.averageDaysToContract} days from listing to contract on homes that did not sell. Valley-wide medians move. Ask for a CMA on your address instead of a headline number. Call ${PHONE_DISPLAY}.`,
    keywords: ['how long to sell house las vegas', 'days on market las vegas', '19 day listing'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'How long to sell a house', url: '/how-long-to-sell-house-las-vegas' },
    ],
    serviceName: 'Listing timeline consult',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/answers/how-long-does-it-take-to-sell-a-house-in-las-vegas', anchor: 'Short answer: days to sell' },
      { href: '/sell-house-fast-las-vegas', anchor: 'Sell a house fast in Las Vegas' },
      { href: '/market-analysis', anchor: 'Las Vegas market analysis' },
    ],
    faqs: [
      {
        question: 'Is 19 days a Las Vegas median?',
        answer: `No. ${PROOF.averageDaysToContract} days is ${AGENT_SHORT_NAME}'s practice average on relisted homes, not a GLVAR median. Medians change; request a dated CMA.`,
      },
      {
        question: 'What slows a listing down?',
        answer: 'Weak photos, an ask above the current active set, delayed showing access, and missing HOA documents.',
      },
    ],
    sections: [
      {
        heading: 'Practice average vs market median',
        directAnswer: `Use both, and do not confuse them. The practice average is ${PROOF.averageDaysToContract} days to contract. A market median is a different statistic and is UNKNOWN here without a dated MLS pull.`,
        paragraphs: [
          'Sellers get hurt when an agent quotes a citywide number that does not match the village.',
          'The honest answer is a CMA with actives, pendings, solds, and expireds for your micro-area.',
        ],
        subheadings: [
          {
            heading: 'What we can verify today',
            paragraphs: [
              `${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.percentOfAsking} of asking, ${PROOF.marketingSpendPerListing} marketing, max ${PROOF.maxListings} listings.`,
              `Last reviewed ${PROOF.lastReviewed}.`,
            ],
          },
        ],
      },
      {
        heading: 'How to shorten days on market',
        directAnswer:
          'Launch with professional media, a price that matches the current set, and same-day showing feedback. Those three items move more timelines than a slogan.',
        paragraphs: [
          'Access hours matter. If the home can only show two evenings a week, the calendar stretches.',
          'Repair obvious inspection items before live day when you already failed a prior contract.',
        ],
      },
      {
        heading: 'When a 30-day plan is realistic',
        directAnswer: `When media, price, and access are ready on day one. That is the ${AGENT_SHORT_NAME} 30-day operating plan — not a guaranteed close date.`,
        paragraphs: [
          'See the 30-day plan page for the week-by-week sequence.',
          `Call ${PHONE_DISPLAY} to map that sequence onto your address.`,
        ],
      },
      {
        heading: 'Get a dated timeline for your house',
        directAnswer: `Call ${PHONE_DISPLAY}. Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Monday–Sunday 8:00 AM – 8:00 PM.`,
        paragraphs: [
          'Bring the prior MLS printout. The expired days-on-market number is part of the diagnosis.',
          'Do not relist until the new live date has a written traffic plan.',
        ],
      },
    ],
  },
  {
    slug: 'henderson-real-estate-agent',
    kind: 'landing',
    path: '/henderson-real-estate-agent',
    title: `Henderson Real Estate Agent for Homes That Did Not Sell | ${PHONE_DISPLAY}`,
    h1: 'Henderson Real Estate Agent for Homes That Did Not Sell',
    description: `${AGENT_SHORT_NAME} sells failed Henderson listings in Green Valley, Anthem, Seven Hills, and Inspirada. Call ${PHONE_DISPLAY}.`,
    directAnswer: `${AGENT_SHORT_NAME} is a Las Vegas / Henderson listing specialist for homes that did not sell. She works Green Valley, Anthem, Seven Hills, Inspirada, and Lake Las Vegas with a ${PROOF.maxListings}-listing cap. Call ${PHONE_DISPLAY}.`,
    keywords: ['henderson real estate agent', 'henderson expired listing', 'green valley realtor'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Henderson real estate agent', url: '/henderson-real-estate-agent' },
    ],
    serviceName: 'Henderson listing reset',
    areaServed: ['Henderson', 'Green Valley', 'Anthem'],
    related: [
      { href: '/neighborhoods/henderson', anchor: 'Henderson homes that did not sell' },
      { href: '/neighborhoods/green-valley', anchor: 'Green Valley homes' },
      { href: '/condos/henderson', anchor: 'Henderson condos' },
    ],
    faqs: [
      {
        question: 'Do you have a Henderson office?',
        answer:
          'The office is 1180 N Town Center Dr, Las Vegas, NV 89144. Consults are routinely held at Henderson properties. Hours: Monday–Sunday 8:00 AM – 8:00 PM.',
      },
      {
        question: 'Which Henderson villages do you work?',
        answer: 'Green Valley, Green Valley Ranch, Anthem, Anthem Country Club, Inspirada, Seven Hills, MacDonald Ranch, and Lake Las Vegas.',
      },
    ],
    sections: [
      {
        heading: 'Henderson is not one market',
        directAnswer:
          'Green Valley, Anthem, Inspirada, and Seven Hills have different buyer lists and different competing inventory. Generic “Henderson home” remarks expire.',
        paragraphs: [
          'Name the village, lot, and outdoor living in the first 80 words.',
          'Builder incentives in south Henderson can undercut a resale overnight. Recheck them before the live date.',
        ],
        subheadings: [
          {
            heading: 'Condo vs house campaigns',
            paragraphs: [
              'Altair, The District, Terra Bella, and Lake Las Vegas product need HOA packets in the first inquiry.',
              'See Henderson condo pages for building-specific notes.',
            ],
          },
        ],
      },
      {
        heading: 'How the Henderson reset works',
        directAnswer: `${PROOF.marketingPoints}-point marketing, ${PROOF.photographyInvestment} photography, weekly updates. Call ${PHONE_DISPLAY}.`,
        paragraphs: [
          'Showings in gated Henderson communities fail when gate instructions are wrong. That is a file problem, not a market problem.',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
      {
        heading: 'Travel time from the Summerlin office',
        directAnswer:
          'Most Henderson consults are 25–40 minutes from 1180 N Town Center Dr depending on village and traffic. Evening consults are available through 8:00 PM.',
        paragraphs: [
          'Directions and Google reviews are linked in the footer of every page.',
          `Call ${PHONE_DISPLAY} to set the property walkthrough.`,
        ],
      },
      {
        heading: 'Start the Henderson listing file',
        directAnswer: 'Bring HOA docs, the prior MLS printout, and any inspection reports.',
        paragraphs: [
          'If documents are stale, we order them while media is scheduled.',
          'Do not relist until the packet is complete.',
        ],
      },
    ],
  },
  {
    slug: 'fsbo-relist-las-vegas',
    kind: 'landing',
    path: '/fsbo-relist-las-vegas',
    title: `FSBO to Agent Relist Las Vegas | ${PHONE_DISPLAY}`,
    h1: 'Going from FSBO to a Relist in Las Vegas',
    description: `If a for-sale-by-owner campaign stalled, ${AGENT_SHORT_NAME} converts it to a professional listing reset. Call ${PHONE_DISPLAY}.`,
    directAnswer: `A stalled FSBO in Las Vegas usually lacks syndication, showing infrastructure, and professional media. ${AGENT_SHORT_NAME} converts it to a ${PROOF.marketingPoints}-point listing. Call ${PHONE_DISPLAY}.`,
    keywords: ['fsbo las vegas', 'fsbo relist', 'sell fsbo las vegas agent'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'FSBO relist', url: '/fsbo-relist-las-vegas' },
    ],
    serviceName: 'FSBO to MLS listing conversion',
    areaServed: ['Las Vegas', 'Henderson', 'North Las Vegas'],
    related: [
      { href: '/sell-my-home-no-commission', anchor: 'No-commission listing questions' },
      { href: '/expired-listing-specialist-las-vegas', anchor: 'Expired listing specialist' },
      { href: '/relist-home-las-vegas', anchor: 'Relist a home in Las Vegas' },
    ],
    faqs: [
      {
        question: 'Can you list a home that is currently FSBO?',
        answer: `Yes, after you sign a listing agreement and we take new media. Call ${PHONE_DISPLAY}.`,
      },
      {
        question: 'Do FSBO days on market hurt a later MLS listing?',
        answer: 'Portal history can linger. New photos and a clean MLS launch still outperform recycling the FSBO pictures.',
      },
    ],
    sections: [
      {
        heading: 'Why FSBO campaigns stall in this valley',
        directAnswer:
          'Limited buyer-agent access, weak media, and no showing feedback loop. Las Vegas buyers still tour most homes with an agent.',
        paragraphs: [
          'Yard signs and Craigslist do not replace MLS syndication.',
          'Pricing without sold comps in the same tract is the usual miss.',
        ],
        subheadings: [
          {
            heading: 'What we keep from the FSBO file',
            paragraphs: [
              'Repair invoices, permits, and a list of what already failed. We do not keep the photos unless they meet listing grade.',
              'If you collected buyer names, bring them. Protection-period questions are easier with a written log.',
            ],
          },
        ],
      },
      {
        heading: 'The conversion sequence',
        directAnswer: 'Agreement, staging edit, photography, MLS, showing instructions, weekly updates.',
        paragraphs: [
          `Photography budget: ${PROOF.photographyInvestment}. Marketing: ${PROOF.marketingSpendPerListing}.`,
          `Cap: ${PROOF.maxListings} listings.`,
        ],
      },
      {
        heading: 'Commission vs carrying cost',
        directAnswer:
          'A longer FSBO calendar has a carrying cost. Run that number before you assume a listing commission is the expensive path.',
        paragraphs: [
          'We can walk the math on your actual PITI, HOA, and utilities.',
          `Call ${PHONE_DISPLAY} for that worksheet.`,
        ],
      },
      {
        heading: 'Book the conversion consult',
        directAnswer: `Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Hours: Monday–Sunday 8:00 AM – 8:00 PM.`,
        paragraphs: [
          'Consults can be at the property the same week.',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
        ],
      },
    ],
  },
  {
    slug: 'listing-photography-las-vegas',
    kind: 'landing',
    path: '/listing-photography-las-vegas',
    title: `Las Vegas Listing Photography | ${PROOF.photographyInvestment} Media Reset`,
    h1: 'Las Vegas Listing Photography for Failed Listings',
    description: `${AGENT_SHORT_NAME} invests ${PROOF.photographyInvestment} in listing media because phone photos are the usual reason a Las Vegas home expires. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Las Vegas listing photography for a relist means twilight exteriors, accurate interiors, and a floor plan — not phone snapshots. ${AGENT_SHORT_NAME} budgets ${PROOF.photographyInvestment}. Call ${PHONE_DISPLAY}.`,
    keywords: ['las vegas listing photography', 'real estate photographer las vegas', 'twilight listing photos'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Listing photography', url: '/listing-photography-las-vegas' },
    ],
    serviceName: 'Listing photography and media reset',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/las-vegas-home-staging', anchor: 'Las Vegas home staging' },
      { href: '/guides/photography-staging-checklist', anchor: 'Photography and staging checklist' },
      { href: '/marketing-strategy', anchor: 'Listing marketing strategy' },
    ],
    faqs: [
      {
        question: 'Why $3,700 for photos?',
        answer: `${PROOF.photographyInvestment} covers professional stills, twilight, and related media so the listing can compete with new construction and well-funded resales.`,
      },
      {
        question: 'Can I reuse old MLS photos?',
        answer: 'Not for a relist. Buyers already skipped that set. New media is the point of a reset.',
      },
    ],
    sections: [
      {
        heading: 'What “listing grade” means here',
        directAnswer:
          'Verticals straight, rooms fully lit, twilight exteriors, and no HDR halos. If the photos look like a phone, the listing performs like a phone listing.',
        paragraphs: [
          'Desert sun blows windows at noon. Shoot interiors when the light is controllable.',
          'High-rises need dusk view shots. Daytime glass is often a gray reflection.',
        ],
        subheadings: [
          {
            heading: 'Floor plans',
            paragraphs: [
              'Floor plans cut no-shows. They belong in the MLS media set, not in a text thread after the second asking.',
              'Condo buyers especially filter by layout. Missing plans lose the click to the next tower.',
            ],
          },
        ],
      },
      {
        heading: 'Sequence with staging',
        directAnswer: 'Stage or edit, then shoot, then go live. Reverse that order and you pay twice.',
        paragraphs: [
          'See the staging page for the edit list.',
          'See the checklist guide for a room-by-room punch list.',
        ],
      },
      {
        heading: 'Who pays',
        directAnswer: `${AGENT_SHORT_NAME} invests ${PROOF.photographyInvestment} as part of ${PROOF.marketingSpendPerListing} marketing per listing.`,
        paragraphs: [
          'That is an operating cost of the listing, not an invoice to surprise you at closing.',
          `Maximum ${PROOF.maxListings} listings so the media budget stays real.`,
        ],
      },
      {
        heading: 'Schedule the shoot',
        directAnswer: `Call ${PHONE_DISPLAY}. Office: 1180 N Town Center Dr, Las Vegas, NV 89144.`,
        paragraphs: [
          'Most shoots land within 3–5 days of the consult.',
          'Hours: Monday–Sunday 8:00 AM – 8:00 PM.',
        ],
      },
    ],
  },
  {
    slug: 'price-reduction-vs-relist-las-vegas',
    kind: 'landing',
    path: '/price-reduction-vs-relist-las-vegas',
    title: `Price Reduction vs Relist in Las Vegas | ${PHONE_DISPLAY}`,
    h1: 'Price Reduction vs Relist in Las Vegas',
    description: `A price cut on stale photos rarely fixes an expired Las Vegas listing. Compare reduction vs a full relist with ${AGENT_SHORT_NAME}. Call ${PHONE_DISPLAY}.`,
    directAnswer: `Cut the price if traffic is real and the ask is the only blocker. Relist if photos, remarks, and follow-up also failed. Most expirations need a relist, not a 3% cut. Call ${PHONE_DISPLAY}.`,
    keywords: ['price reduction vs relist', 'drop price or relist', 'las vegas listing price cut'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Price reduction vs relist', url: '/price-reduction-vs-relist-las-vegas' },
    ],
    serviceName: 'Pricing and relist strategy',
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson'],
    related: [
      { href: '/answers/should-i-drop-my-price-or-relist', anchor: 'Should I drop my price or relist?' },
      { href: '/relist-home-las-vegas', anchor: 'Relist a home in Las Vegas' },
      { href: '/blog/expired-listing-pricing-mistakes', anchor: 'Expired listing pricing mistakes' },
    ],
    faqs: [
      {
        question: 'Will a price cut reset days on market?',
        answer: 'Not in the way sellers hope. Portal history still shows the prior ask. A full relist with new media is cleaner.',
      },
      {
        question: 'When is a cut enough?',
        answer: 'When showing count is healthy and feedback is “price” only. If nobody is touring, media and access are the first problems.',
      },
    ],
    sections: [
      {
        heading: 'Read the showing log before you cut',
        directAnswer:
          'No showings means the click or the access failed. Many showings and no offers means price or condition. Those are different repairs.',
        paragraphs: [
          'Agents who cut price without reading feedback are guessing.',
          'Bring the showing log to the consult even if it is embarrassing. It is the diagnosis.',
        ],
        subheadings: [
          {
            heading: 'Stale photos plus a cut',
            paragraphs: [
              'Buyers who already skipped the photos will not return for 3%. They will return for a listing that looks new.',
              'That is why expired homes get a media reset first.',
            ],
          },
        ],
      },
      {
        heading: 'How we recast price on a relist',
        directAnswer:
          'CMA against actives, pendings, solds, and expireds in the same micro-area. Then pick a live price that can create week-one traffic.',
        paragraphs: [
          'Do not copy the prior ask minus a round number.',
          `Practice result on closed relists: ${PROOF.percentOfAsking} of asking — which starts with a defensible ask.`,
        ],
      },
      {
        heading: 'Communication with prior visitors',
        directAnswer:
          'If a protection period applies, your prior broker may still have claims on certain buyers. Read the clause.',
        paragraphs: [
          'We review dates before a new agreement is signed.',
          `Call ${PHONE_DISPLAY}.`,
        ],
      },
      {
        heading: 'Choose the next move',
        directAnswer: `Office: 1180 N Town Center Dr, Las Vegas, NV 89144. Monday–Sunday 8:00 AM – 8:00 PM.`,
        paragraphs: [
          'Bring the MLS history printout.',
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average.`,
        ],
      },
    ],
  },
  {
    slug: 'expired-mls-listing-las-vegas',
    kind: 'landing',
    path: '/expired-mls-listing-las-vegas',
    title: `Expired MLS Listing Las Vegas | Relist Help | ${PHONE_DISPLAY}`,
    h1: 'Expired MLS Listing Help in Las Vegas',
    description: `Your MLS listing expired in Las Vegas. ${AGENT_SHORT_NAME} builds a new campaign with new media and pricing. Call ${PHONE_DISPLAY}.`,
    directAnswer: `An expired MLS listing in Las Vegas is off-market until a new listing agreement is signed. ${AGENT_SHORT_NAME} resets media and price before the next live date. Call ${PHONE_DISPLAY}.`,
    keywords: ['expired mls listing las vegas', 'mls expired home', 'relist mls las vegas'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Expired MLS listing', url: '/expired-mls-listing-las-vegas' },
    ],
    serviceName: 'Expired MLS listing reset',
    areaServed: ['Las Vegas', 'Henderson', 'North Las Vegas'],
    related: [
      { href: '/expired-listing-specialist-las-vegas', anchor: 'Expired listing specialist Las Vegas' },
      { href: '/what-happens-when-listing-expires-nevada', anchor: 'What happens when a listing expires in Nevada' },
      { href: '/guides/how-to-relist-expired-home', anchor: 'How to relist an expired home' },
    ],
    faqs: [
      {
        question: 'Can I be on MLS tomorrow?',
        answer:
          'Only if the file, photos, and agreement are ready. A rushed live date with old photos repeats the expiration. Photography usually needs 3–5 days.',
      },
      {
        question: 'Will you use the same MLS number?',
        answer: 'A new listing is a new campaign. Do not optimize for recycling the old record.',
      },
    ],
    sections: [
      {
        heading: 'What agents see after expiration',
        directAnswer:
          'History, prior asks, and often DOM. Pretending they cannot see it is how weak relists are written.',
        paragraphs: [
          'Remarks should not apologize. They should present a new product.',
          'New photos are the proof that the campaign changed.',
        ],
        subheadings: [
          {
            heading: 'Syndication lag',
            paragraphs: [
              'Portals can lag. Plan for old photos to linger a few days and make the new set obviously different.',
              'That is another reason not to reuse the prior 18 images.',
            ],
          },
        ],
      },
      {
        heading: 'The MLS-ready file',
        directAnswer:
          'Agreement, disclosures, HOA packet, media, showing instructions, and a CMA. Missing any one of those slows the live date.',
        paragraphs: [
          `${AGENT_SHORT_NAME} will not go live on an incomplete file.`,
          `Call ${PHONE_DISPLAY} to start the checklist.`,
        ],
      },
      {
        heading: 'After the live date',
        directAnswer: 'Weekly written updates: views, showings, feedback, next move.',
        paragraphs: [
          'If traffic is light, we change price or media while the listing is still new.',
          `Cap: ${PROOF.maxListings} listings.`,
        ],
      },
      {
        heading: 'Start the new MLS file',
        directAnswer: `1180 N Town Center Dr, Las Vegas, NV 89144. Monday–Sunday 8:00 AM – 8:00 PM. ${PHONE_DISPLAY}.`,
        paragraphs: [
          `Practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking.`,
          'Directions and Google reviews are in the footer on every page.',
        ],
      },
    ],
  },
]

const bySlug = new Map(landings.map((item) => [item.slug, item]))

export function getLandingSlugs(): string[] {
  return landings.map((item) => item.slug)
}

export function getLandingPage(slug: string): SeoPageContent | undefined {
  const topic = bySlug.get(slug)
  if (!topic) return undefined
  return toSeoPage(topic)
}

export function getAllLandingPages(): SeoPageContent[] {
  return landings.map(toSeoPage)
}
