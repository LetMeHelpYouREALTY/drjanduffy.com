import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import { getNeighborhoodHubLinks } from '@/lib/content/neighborhoods'
import HeadingMedia from '@/app/components/heading-media'

export const metadata = {
  title: 'Las Vegas Neighborhoods | failed listing specialist | Dr. Jan Duffy',
  description:
    'Expert help selling homes that DID NOT sell in Las Vegas neighborhoods: Summerlin West, The Ridges, Red Rock Country Club, The Summit, and more. 19 day average, 98.7% of asking price.',
  alternates: {
    canonical: 'https://www.drjanduffy.com/neighborhoods',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/neighborhoods',
    title: 'Las Vegas Neighborhoods | failed listing specialist',
    description: 'Expert help selling homes that DID NOT sell in Las Vegas neighborhoods.',
  },
}

export default function NeighborhoodsPage() {
  const faqs = [
    {
      question: 'What Las Vegas neighborhoods does Dr. Jan Duffy serve?',
      answer:
        'Dr. Jan Duffy specializes in Summerlin West luxury neighborhoods including The Ridges, Red Rock Country Club, The Summit, and newer villages. She also serves Henderson, Southern Highlands, Mountains Edge, and surrounding Las Vegas areas. She has sold 7 homes in these neighborhoods that did not sell with previous agents.',
    },
    {
      question: 'What real estate services does Dr. Jan Duffy provide for Las Vegas neighborhoods?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Las Vegas neighborhoods, including professional photography ($3,700 investment), staging, 97-point marketing system, strategic pricing for each neighborhood market, aggressive follow-up, and specialized marketing for luxury homes in Summerlin, Henderson, and surrounding areas.',
    },
    {
      question: 'How long does it take to sell homes in Las Vegas neighborhoods?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Las Vegas neighborhood homes that did not sell. She has sold 7 homes in Summerlin West (The Ridges, Red Rock Country Club, The Summit), Henderson, and surrounding areas that did not sell with previous agents, achieving 98.7% of asking price on average.',
    },
    {
      question: 'Why choose Dr. Jan Duffy for neighborhood-specific real estate services in Las Vegas?',
      answer:
        'Dr. Jan Duffy specializes in Las Vegas neighborhoods and understands each market\'s unique characteristics. She invests $5,000+ per listing in marketing, takes maximum 6 listings for 100% focus, and has proven results selling homes in The Ridges, Red Rock Country Club, The Summit, Summerlin West, and Henderson that did not sell with other agents.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Neighborhoods', url: '/neighborhoods' },
        ]}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                LAS VEGAS NEIGHBORHOODS
              </h1>
              <HeadingMedia level={1} heading="LAS VEGAS NEIGHBORHOODS" />
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling homes that DID NOT sell in Las Vegas's premier neighborhoods
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  If your home DID NOT sell in any Las Vegas neighborhood, you're not alone. Even in the most prestigious communities - Summerlin West, The Ridges, Red Rock Country Club, The Summit - homes fail to sell when agents do not understand neighborhood-specific marketing. I've sold 7 Summerlin sellers who could not sell with an average of 19 days to contract and 98.7% of asking price. I understand neighborhood-specific marketing. I know how to market properties in each unique community. I can sell your HOME THAT DID NOT SELL. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas neighborhoods are diverse. Each community has unique characteristics, buyer profiles, and marketing requirements. Summerlin West offers luxury estates and golf course properties. The Ridges offers custom estates with golf and mountain backdrops. Red Rock Country Club offers golf course access and mountain views. The Summit offers gated streets and larger lots. MacDonald Ranch offers mature landscaping and mixed custom and production homes. Southern Highlands offers master-planned amenities and recreation facilities. Skye Canyon offers newer construction and modern elevations. Mountains Edge offers parks, trail connections, and southwest-valley production homes. Each requires different marketing strategies. Most agents do not understand this. They use generic strategies, and homes fail to sell. I understand neighborhood-specific marketing. I use targeted strategies for each community, and listings sell. Fast. At top dollar.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The Las Vegas neighborhood market is competitive. Each community competes for specific buyer types. Luxury communities compete for high-end buyers. Family communities compete for family buyers. Golf communities compete for golf-conscious buyers. Most agents do not understand these distinctions. They use mass marketing, do not target specific buyers, and fail to meet community-specific requirements. I understand these distinctions. I use targeted marketing, target specific buyers, and meet community-specific requirements that attract the right buyers for each neighborhood.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Neighborhood homes fail to sell</h2>
                <HeadingMedia level={2} heading="Why Neighborhood homes fail to sell" />
                <p className="text-lg text-gray-700 mb-4">
                  Neighborhood homes fail to sell for the same reasons other homes fail to sell - poor marketing, minimal investment, and zero follow-up. But neighborhood properties face unique challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Neighborhood-Specific Marketing Requirements</h3>
                <HeadingMedia level={3} heading="Neighborhood-Specific Marketing Requirements" />
                <p className="text-lg text-gray-700 mb-4">
                  Each neighborhood requires specialized marketing. Luxury communities require luxury marketing. Golf communities require golf course marketing. Family communities require family-oriented marketing. Gated communities require security-focused marketing. Most agents do not understand these requirements. They use generic strategies, do not highlight neighborhood-specific features, and fail to target neighborhood-specific buyers. I understand these requirements. I use specialized strategies, highlight neighborhood-specific features, and target neighborhood-specific buyers who value these properties.
                </p>
                <h3 className="text-2xl font-bold mb-3">Buyer Profile Differences</h3>
                <HeadingMedia level={3} heading="Buyer Profile Differences" />
                <p className="text-lg text-gray-700 mb-4">
                  Each neighborhood attracts different buyer profiles. Luxury communities attract high-end buyers. Golf communities attract golf-conscious buyers. Family communities attract family buyers. Gated communities attract security-conscious buyers. Most agents do not understand these differences. They use mass marketing, do not target specific profiles, and fail to meet buyer expectations. I understand these differences. I use targeted marketing, target specific profiles, and meet buyer expectations that attract the right buyers for each neighborhood.
                </p>
                <h3 className="text-2xl font-bold mb-3">Community Feature Highlighting</h3>
                <HeadingMedia level={3} heading="Community Feature Highlighting" />
                <p className="text-lg text-gray-700 mb-4">
                  Each neighborhood has unique features that need highlighting. Luxury communities have exclusive amenities. Golf communities have golf course access. Family communities have family amenities. Gated communities have security features. Most agents do not highlight these features. They do not explain community benefits. They do not showcase unique amenities. They do not emphasize community advantages. I highlight these features. I explain community benefits. I showcase unique amenities. I emphasize community advantages. I attract buyers who value neighborhood-specific features.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Neighborhood Expertise</h2>
                <HeadingMedia level={2} heading="My Neighborhood Expertise" />
                <p className="text-lg text-gray-700 mb-4">
                  I've sold homes that DID NOT sell throughout Las Vegas neighborhoods and understand the unique challenges of marketing neighborhood-specific properties. I know how to attract neighborhood-specific buyers. I know how to showcase neighborhood features. I know how to sell neighborhood properties.
                </p>
                <h3 className="text-2xl font-bold mb-3">Neighborhood-Specific Marketing</h3>
                <HeadingMedia level={3} heading="Neighborhood-Specific Marketing" />
                <p className="text-lg text-gray-700 mb-4">
                  Each neighborhood requires specialized marketing strategies. I use targeted strategies for each community, highlighting unique features and attracting the right buyers. Luxury communities get luxury marketing. Golf communities get golf course marketing. Family communities get family-oriented marketing. Gated communities get security-focused marketing. Most agents do not do this. I do. I provide neighborhood-specific marketing that attracts the right buyers for each community.
                </p>
                <h3 className="text-2xl font-bold mb-3">Buyer Profile Targeting</h3>
                <HeadingMedia level={3} heading="Buyer Profile Targeting" />
                <p className="text-lg text-gray-700 mb-4">
                  Each neighborhood requires targeting specific buyer profiles. I use targeted marketing to reach the right buyers for each community. Luxury communities target high-end buyers. Golf communities target golf-conscious buyers. Family communities target family buyers. Gated communities target security-conscious buyers. Most agents do not do this. I do. I provide buyer profile targeting that attracts the right buyers for each neighborhood.
                </p>
                <h3 className="text-2xl font-bold mb-3">Community Feature Showcasing</h3>
                <HeadingMedia level={3} heading="Community Feature Showcasing" />
                <p className="text-lg text-gray-700 mb-4">
                  Each neighborhood requires showcasing unique community features. I highlight unique features for each community, explaining benefits and attracting buyers who value these features. Luxury communities showcase exclusive amenities. Golf communities showcase golf course access. Family communities showcase family amenities. Gated communities showcase security features. Most agents do not do this. I do. I provide community feature showcasing that attracts buyers who value neighborhood-specific features.
                </p>
              </div>

              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">
                  EXPLORE LAS VEGAS NEIGHBORHOODS
                </h2>
                <HeadingMedia level={2} heading="EXPLORE LAS VEGAS NEIGHBORHOODS" />
                <p className="text-center text-lg text-gray-700 mb-6">
                  Find expert help for your specific neighborhood:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getNeighborhoodHubLinks().map((place) => (
                    <a
                      key={place.href}
                      href={place.href}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                      <p className="text-sm text-gray-600">{place.blurb}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">The Neighborhood HOME THAT DID NOT SELL Opportunity</h2>
                <HeadingMedia level={2} heading="The Neighborhood HOME THAT DID NOT SELL Opportunity" />
                <p className="text-lg text-gray-700 mb-4">
                  HOMES THAT DID NOT SELL in Las Vegas neighborhoods represent significant opportunities. Sellers are frustrated. They have tried once and failed. They are ready to work with an agent who actually understands neighborhood-specific marketing. I understand neighborhood-specific marketing. I know how to market neighborhood properties. I know how to attract neighborhood-specific buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Complete Neighborhood Reset</h3>
                <HeadingMedia level={3} heading="Complete Neighborhood Reset" />
                <p className="text-lg text-gray-700 mb-4">
                  Expired neighborhood listings need a complete neighborhood-specific reset. New professional photography showcasing neighborhood features. Strategic positioning emphasizing neighborhood benefits. Fresh MLS listing with optimized neighborhood description. Strategic pricing positioning. Aggressive marketing targeting neighborhood-specific buyers. Most agents do not do this. I do. I provide complete neighborhood reset services that transform HOMES THAT DID NOT SELL into attractive opportunities.
                </p>
                <h3 className="text-2xl font-bold mb-3">Neighborhood Marketing System</h3>
                <HeadingMedia level={3} heading="Neighborhood Marketing System" />
                <p className="text-lg text-gray-700 mb-4">
                  I use a 97-point marketing system specifically designed for neighborhood properties. Professional photography showcasing neighborhood features. Strategic positioning emphasizing neighborhood benefits. Targeted marketing reaching neighborhood-specific buyers. Network activation reaching neighborhood buyers. Strategic open houses. Aggressive follow-up. Most agents do not have this system. I do. I use this system to sell expired neighborhood listings. Fast. At top dollar.
                </p>
                <h3 className="text-2xl font-bold mb-3">Proven Results</h3>
                <HeadingMedia level={3} heading="Proven Results" />
                <p className="text-lg text-gray-700 mb-4">
                  I've sold 7 Summerlin sellers who could not sell with an average of 19 days to contract and 98.7% of asking price. These are not hypothetical results. These are real HOMES THAT DID NOT SELL that I sold after other agents failed. I can do the same for your neighborhood listing. Fast. At top dollar. With zero excuses.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR NEIGHBORHOOD LISTING?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your neighborhood home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="neighborhoods_page" buttonText="GET MY LISTING SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

