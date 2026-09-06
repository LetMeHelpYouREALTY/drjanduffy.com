import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import HeadingMedia from '@/app/components/heading-media'

export const metadata = {
  title: 'Mountains Edge Homes for Sale | Dr. Jan Duffy',
  description:
    'Homes for sale in Mountains Edge, Las Vegas. Master-planned homes with parks and recreation amenities. 19 day average, 98.7% of asking price.',
  alternates: {
    canonical: '/neighborhoods/mountains-edge',
  },
}

export default function MountainsEdgePage() {
  const faqs = [
    {
      question: 'Are there homes for sale in Mountains Edge, Las Vegas?',
      answer:
        'Yes. Dr. Jan Duffy represents Mountains Edge homes for sale in Las Vegas. Inventory changes daily. Call (702) 500-1064 for a current search or a CMA at a specific address. She also resets expired Mountains Edge listings with a 97-point system. Practice results: 7 relisted homes sold, 19-day average to contract, and 98.7% of asking.',
    },
    {
      question: 'What real estate services does Dr. Jan Duffy provide for Mountains Edge homes?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Mountains Edge homes that did not sell, including professional photography ($3,700 investment), staging, 97-point marketing system, strategic pricing for master-planned communities, and specialized marketing for homes with parks and recreation amenities in this Las Vegas neighborhood.',
    },
    {
      question: 'How long does it take to sell a home in Mountains Edge, Las Vegas?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Mountains Edge homes that did not sell. She specializes in master-planned community properties in Las Vegas and uses strategic marketing to attract buyers for recreation-focused homes in Mountains Edge.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my Mountains Edge home?',
      answer:
        'Dr. Jan Duffy specializes in Mountains Edge and understands master-planned community marketing for this Las Vegas neighborhood. She invests $5,000+ per listing in professional marketing, highlights community amenities and parks, recreation amenities, and lot size, and attracts buyers looking for quality Las Vegas communities. She has sold homes in Mountains Edge that did not sell with previous agents.',
    },
    {
      question: 'What makes Mountains Edge real estate market unique in Las Vegas?',
      answer:
        'Mountains Edge is a master-planned community in Las Vegas offering homes with parks and recreation amenities with community amenities, parks, trails, and recreation amenities. Dr. Jan Duffy specializes in marketing these properties and has proven results selling Mountains Edge homes that did not sell with other agents.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Neighborhoods', url: '/neighborhoods' },
          { name: 'Mountains Edge', url: '/neighborhoods/mountains-edge' },
        ]}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                MOUNTAINS EDGE HOMES FOR SALE
              </h1>
              <HeadingMedia level={1} heading="MOUNTAINS EDGE HOMES FOR SALE" />
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling homes that DID NOT sell in Mountains Edge - Las Vegas's recreation-focused master-planned community
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  If your Mountains Edge home DID NOT sell, you're dealing with one of Las Vegas's most recreation-focused master-planned communities. Mountains Edge offers production and custom homes with master-planned amenities, parks and trail connections, and recreation-focused living. Even in this master-planned village, homes fail to sell when agents do not understand recreation-amenity marketing. I've sold homes that DID NOT sell in Mountains Edge and throughout Las Vegas. I understand recreation-amenity marketing. I know how to attract buyers comparing parks and recreation. I can sell your expired Mountains Edge listing. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Mountains Edge is Las Vegas's recreation-focused master-planned community, offering production and custom homes with master-planned amenities, parks and trail connections, and recreation-focused living. Properties range from $450K to $1.5M+, attracting buyers who value parks and recreation amenities, recreation amenities, and recreation-focused communities. Most agents do not understand the Mountains Edge buyer. They use generic marketing, and Mountains Edge homes fail to sell. I understand the Mountains Edge buyer. I use recreation-amenity marketing strategies, highlight parks and recreation amenities, and attract buyers comparing parks and recreation. Mountains Edge listings sell. Fast. At top dollar.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The Mountains Edge market is competitive. Master-planned villages compete for buyers comparing parks and recreation. Buyers have expectations for parks and recreation amenities, recreation amenities, and park and recreation amenities. Most agents do not meet these expectations. They use minimal marketing, do not highlight park and recreation amenities, and fail to showcase parks and recreation amenities. I meet these expectations. I invest $5,000+ in professional marketing per listing, highlight park and recreation amenities, and showcase every aspect of recreation-focused community living.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Mountains Edge homes fail to sell</h2>
                <HeadingMedia level={2} heading="Why Mountains Edge homes fail to sell" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge homes fail to sell for the same reasons other recreation-focused community homes fail to sell - poor marketing, minimal investment, and zero follow-up. But Mountains Edge properties face unique challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Recreation-Amenity Marketing</h3>
                <HeadingMedia level={3} heading="Recreation-Amenity Marketing" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge properties require specialized recreation-amenity marketing. Professional photography showcasing parks and recreation amenities. Strategic positioning emphasizing park and recreation benefits. Marketing targeting buyers comparing parks and recreation. Most agents do not understand recreation-amenity marketing. They use generic strategies, do not highlight park and recreation amenities, and fail to target buyers comparing parks and recreation. I understand recreation-amenity marketing. I use specialized strategies, highlight park and recreation amenities, and target buyers comparing parks and recreation who value these properties.
                </p>
                <h3 className="text-2xl font-bold mb-3">School Quality Value</h3>
                <HeadingMedia level={3} heading="School Quality Value" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge offers parks and trail connections that add significant value. Buyers pay premium prices for recreation amenities, parks and recreation amenities, and park and recreation amenities. Most agents do not understand this value. They do not showcase park and trail access. They do not explain recreation-amenity benefits. They do not emphasize park and recreation amenities. I understand this value. I showcase park and trail access. I explain recreation-amenity benefits. I emphasize park and recreation amenities. I attract buyers comparing parks and recreation who understand and value recreation amenities.
                </p>
                <h3 className="text-2xl font-bold mb-3">Family Amenities Positioning</h3>
                <HeadingMedia level={3} heading="Family Amenities Positioning" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge offers parks and recreation amenities through master-planned design and park and recreation amenities. Buyers value these amenities and expect them to be highlighted. Most agents do not highlight parks and recreation amenities. They do not explain master-planned design advantages. They do not showcase park and recreation amenities. They do not emphasize parks and recreation amenities. I highlight parks and recreation amenities. I explain master-planned design advantages. I showcase park and recreation amenities. I emphasize parks and recreation amenities. I attract buyers who value recreation-focused communities.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Mountains Edge Expertise</h2>
                <HeadingMedia level={2} heading="My Mountains Edge Expertise" />
                <p className="text-lg text-gray-700 mb-4">
                  I've sold homes that DID NOT sell in Mountains Edge and understand the unique challenges of marketing recreation-focused community properties. I know how to attract buyers comparing parks and recreation. I know how to showcase park and recreation amenities. I know how to sell Mountains Edge properties.
                </p>
                <h3 className="text-2xl font-bold mb-3">Recreation-Amenity Marketing</h3>
                <HeadingMedia level={3} heading="Recreation-Amenity Marketing" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge requires specialized recreation-amenity marketing. Professional photography showcasing parks and recreation amenities and park and recreation amenities. Strategic positioning emphasizing park and recreation benefits. Marketing targeting buyers comparing parks and recreation. Network activation reaching buyers comparing parks and recreation. Most agents do not invest in this specialized marketing. I invest $5,000+ in professional media, recreation-focused positioning, and targeted marketing that attracts buyers comparing parks and recreation.
                </p>
                <h3 className="text-2xl font-bold mb-3">Family Amenities Highlighting</h3>
                <HeadingMedia level={3} heading="Family Amenities Highlighting" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge properties require highlighting parks and recreation amenities. Buyers need to understand amenity benefits, park and recreation amenities, and park and trail advantages. Most agents do not explain these benefits. They do not showcase parks and recreation amenities. They do not emphasize park and recreation amenities. I explain these benefits. I showcase parks and recreation amenities. I emphasize park and recreation amenities. I attract buyers comparing parks and recreation who understand and value recreation-focused communities.
                </p>
                <h3 className="text-2xl font-bold mb-3">School Quality Strategy</h3>
                <HeadingMedia level={3} heading="School Quality Strategy" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge requires park-and-trail marketing. Buyers expect park and trail information, recreation-amenity details, and recreation-focused presentation. Most agents do not provide this. They use generic information, do not highlight park and trail access, and fail to showcase parks and recreation amenities. I provide park and trail information, highlight parks and recreation amenities, and showcase park and recreation amenities that attract buyers who value master-planned villages.
                </p>
              </div>

              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Mountains Edge Market Overview</h2>
                <HeadingMedia level={2} heading="Mountains Edge Market Overview" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge is Las Vegas's recreation-focused master-planned community, offering production and custom homes with master-planned amenities, parks and trail connections, and recreation-focused living. Understanding this market is key to effective marketing.
                </p>
                <h3 className="text-2xl font-bold mb-3">Property Types</h3>
                <HeadingMedia level={3} heading="Property Types" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge offers custom and production homes, master-planned community properties, and recreation-focused homes. Each requires specialized recreation-amenity marketing strategies. Most agents do not understand these differences. I do. I use targeted strategies for each property type, highlighting park and recreation amenities and attracting buyers comparing parks and recreation.
                </p>
                <h3 className="text-2xl font-bold mb-3">Price Range</h3>
                <HeadingMedia level={3} heading="Price Range" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge properties range from $450K to $1.5M+, attracting buyers with significant purchasing power who value parks and recreation amenities and recreation amenities. These buyers expect specialized recreation-amenity marketing, professional service, and recreation-amenity presentation. Most agents do not meet these expectations. I do. I provide specialized recreation-amenity marketing, professional service, and recreation-amenity presentation that attracts buyers comparing parks and recreation.
                </p>
                <h3 className="text-2xl font-bold mb-3">Buyer Profile</h3>
                <HeadingMedia level={3} heading="Buyer Profile" />
                <p className="text-lg text-gray-700 mb-4">
                  Mountains Edge buyers are recreation-focused, successful, and value parks and recreation amenities. They expect specialized recreation-amenity marketing, park and trail information, and recreation-amenity presentation. Most agents do not understand these buyers. I do. I understand what Mountains Edge buyers want, and I deliver it. Specialized recreation-amenity marketing. School quality information. Recreation-amenity presentation.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">The Mountains Edge HOME THAT DID NOT SELL Opportunity</h2>
                <HeadingMedia level={2} heading="The Mountains Edge HOME THAT DID NOT SELL Opportunity" />
                <p className="text-lg text-gray-700 mb-4">
                  HOMES FOR SALE in Mountains Edge represent significant opportunities. Sellers are frustrated. They have tried once and failed. They are ready to work with an agent who actually understands recreation-amenity marketing. I understand recreation-amenity marketing. I know how to market Mountains Edge properties. I know how to attract buyers comparing parks and recreation.
                </p>
                <h3 className="text-2xl font-bold mb-3">Complete Recreation-Amenity Reset</h3>
                <HeadingMedia level={3} heading="Complete Recreation-Amenity Reset" />
                <p className="text-lg text-gray-700 mb-4">
                  Expired Mountains Edge listings need a complete recreation-amenity reset. New professional photography showcasing parks and recreation amenities and park and recreation amenities. Strategic positioning emphasizing park and recreation benefits. Fresh MLS listing with optimized recreation-focused description. Strategic pricing positioning. Aggressive marketing targeting buyers comparing parks and recreation. Most agents do not do this. I do. I provide complete recreation-amenity reset services that transform HOMES FOR SALE into attractive opportunities.
                </p>
                <h3 className="text-2xl font-bold mb-3">Recreation-Amenity Marketing System</h3>
                <HeadingMedia level={3} heading="Recreation-Amenity Marketing System" />
                <p className="text-lg text-gray-700 mb-4">
                  I use a 97-point marketing system specifically designed for recreation-focused community properties. Professional photography showcasing park and recreation amenities. Strategic positioning emphasizing park and recreation benefits. Targeted marketing reaching buyers comparing parks and recreation. Network activation reaching buyers comparing parks and recreation. Strategic open houses. Aggressive follow-up. Most agents do not have this system. I do. I use this system to sell expired Mountains Edge listings. Fast. At top dollar.
                </p>
                <h3 className="text-2xl font-bold mb-3">Proven Results</h3>
                <HeadingMedia level={3} heading="Proven Results" />
                <p className="text-lg text-gray-700 mb-4">
                  I've sold 7 Summerlin sellers who could not sell with an average of 19 days to contract and 98.7% of asking price. These are not hypothetical results. These are real HOMES FOR SALE that I sold after other agents failed. I can do the same for your Mountains Edge listing. Fast. At top dollar. With zero excuses.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR MOUNTAINS EDGE LISTING?
                </h2>
                <HeadingMedia level={2} heading={"READY TO SELL YOUR MOUNTAINS EDGE LISTING?"} />
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Mountains Edge home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="mountains_edge_neighborhood" buttonText="GET MY LISTING SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

