import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import HeadingMedia from '@/app/components/heading-media'
export const metadata = {
  title: 'Henderson Condos for Sale | Green Valley & Anthem | Dr. Jan Duffy',
  description:
    'Henderson condos for sale in Green Valley, Anthem, and MacDonald Ranch. Dr. Jan Duffy represents buyers and sellers, and resets condos that did not sell. 19-day average. Call (702) 500-1064.',
  alternates: {
    canonical: '/condos/henderson',
  },
}
export default function HendersonCondosPage() {
  const faqs = [
    {
      question: 'Are there condos for sale in Henderson?',
      answer:
        'Yes. Dr. Jan Duffy represents Henderson condos for sale, including Green Valley, Anthem, and MacDonald Ranch buildings. Inventory changes daily. Call (702) 500-1064 for a current search. She also resets Henderson condos that did not sell with a 97-point system, $3,700 photography, and a 19-day average to contract on relisted homes.',
    },
    {
      question: 'What real estate services does Dr. Jan Duffy provide for Henderson condos?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Henderson condos that did not sell, including professional photography ($3,700 investment), staging, 97-point marketing system, strategic pricing for mid-rise condos and townhomes, specialized marketing for value-conscious buyers, and highlighting parks, pools, and recreation amenities. She serves Green Valley, Anthem, and throughout Henderson.',
    },
    {
      question: 'How long does it take to sell a condo in Henderson?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Henderson condos that did not sell. She specializes in mid-rise condos and townhomes in Henderson and uses strategic marketing to attract value-conscious buyers comparing parks and recreation, achieving fast sales at top dollar.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my Henderson condo?',
      answer:
        'Dr. Jan Duffy specializes in Henderson condos and understands the unique challenges including competition with new construction, value-conscious buyers, and emphasis on parks, pools, and recreation amenities. She invests $5,000+ per listing in professional marketing and has proven results selling Henderson condos in Green Valley, Anthem, and throughout Henderson that did not sell with previous agents.',
    },
    {
      question: 'What areas of Henderson does Dr. Jan Duffy serve for condos?',
      answer:
        'Dr. Jan Duffy serves condos throughout Henderson including Green Valley, Anthem, MacDonald Ranch, and surrounding Henderson areas. She specializes in expired condos and has proven results selling mid-rise condos and townhomes that did not sell with previous agents in these Henderson neighborhoods.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Las Vegas Condos', url: '/condos' },
          { name: 'Henderson Condos', url: '/condos/henderson' },
        ]}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                HENDERSON CONDOS FOR SALE
              </h1>
              <HeadingMedia level={1} heading="HENDERSON CONDOS FOR SALE" />
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired Henderson condos - mid-rise condos and townhomes in Green Valley, Anthem, and MacDonald Ranch
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Henderson is a southeast-valley city with parks and recreation amenities, offering mid-rise condos, townhomes, and affordable properties in a suburban setting. If your Henderson condo home DID NOT sell, you're not alone. Henderson condos face unique challenges - from competition with new construction to value-conscious buyers to emphasis on parks, pools, and recreation amenities. Most agents do not understand Henderson condos. They use generic strategies, and Henderson condos expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired Henderson condos. I understand the Henderson market. I know how to market mid-rise condos and townhomes. I know how to attract value-conscious buyers. I've sold expired condos in Green Valley, Anthem, and throughout Henderson. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Henderson condos require value-focused marketing. Professional photography highlighting parks, recreation amenities, and lot size. Strategic positioning emphasizing affordability and value. Emphasis on streets with mature landscaping and mature communities. Most agents do not understand this. They use generic strategies, and Henderson condos expire. I use value-focused marketing, highlight parks, recreation amenities, and lot size, and attract value-conscious buyers. Henderson condos sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Henderson Condos Expire</h2>
                <HeadingMedia level={2} heading="Why Henderson Condos Expire" />
                <p className="text-lg text-gray-700 mb-4">
                  Henderson condos expire for the same reasons other condos expire - poor marketing, minimal investment, and zero follow-up. But Henderson condos face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Value-Conscious Buyer Market</h3>
                <HeadingMedia level={3} heading="Value-Conscious Buyer Market" />
                <p className="text-lg text-gray-700 mb-4">
                  Henderson attracts value-conscious buyers. First-time buyers. Relocating professionals. Move-up buyers. Most agents do not know how to market to value-conscious buyers. They use luxury marketing, and value-conscious buyers look elsewhere. I know how to market to value-conscious buyers. I emphasize affordability, highlight value, and showcase parks, recreation amenities, and lot size that attract value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Competition from New Construction</h3>
                <HeadingMedia level={3} heading="Competition from New Construction" />
                <p className="text-lg text-gray-700 mb-4">
                  Henderson has constant new construction. New condos compete with existing condos. New amenities compete with older amenities. New pricing competes with older pricing. Most agents do not know how to position existing condos against new construction. They do not highlight unique features. They do not emphasize mature landscaping. I know how to position existing condos competitively. I highlight unique features. I emphasize mature landscaping. I showcase mature neighborhoods and proven value.
                </p>
                <h3 className="text-2xl font-bold mb-3">Park and Recreation Amenity Marketing</h3>
                <HeadingMedia level={3} heading="Park and Recreation Amenity Marketing" />
                <p className="text-lg text-gray-700 mb-4">
                  Henderson offers parks, pools, and recreation amenities. Parks. Pools. Community centers. Recreation amenities. Most agents do not market parks, pools, and recreation amenities effectively. They do not highlight parks. They do not showcase recreation centers. They do not emphasize park and recreation amenities. I market parks, pools, and recreation amenities effectively. I highlight parks, showcase recreation centers, and emphasize park and recreation amenities that attract buyers comparing parks, recreation, and square footage.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Henderson Condo Expertise</h2>
                <HeadingMedia level={2} heading="My Henderson Condo Expertise" />
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired Henderson condos in Green Valley, Anthem, and throughout Henderson. I understand the Henderson market. I know how to market mid-rise condos and townhomes. I know how to attract value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Value-Focused Marketing</h3>
                <HeadingMedia level={3} heading="Value-Focused Marketing" />
                <p className="text-lg text-gray-700 mb-4">
                  Henderson condos require value-focused marketing. Professional photography highlighting parks, recreation amenities, and lot size. Strategic positioning emphasizing affordability and value. Emphasis on streets with mature landscaping. Most agents do not understand this. I do. I use value-focused marketing, highlight parks, recreation amenities, and lot size, and attract value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Affordability Positioning</h3>
                <HeadingMedia level={3} heading="Affordability Positioning" />
                <p className="text-lg text-gray-700 mb-4">
                  Henderson attracts value-conscious buyers who prioritize affordability. I position Henderson condos by emphasizing affordability, highlighting value, and showcasing parks, recreation amenities, and lot size. Most agents do not do this. They use generic positioning, and Henderson condos expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Park and Recreation Feature Highlighting</h3>
                <HeadingMedia level={3} heading="Park and Recreation Feature Highlighting" />
                <p className="text-lg text-gray-700 mb-4">
                  Henderson offers parks, recreation amenities, and lot size. Parks. Pools. Community centers. Recreation amenities. I highlight these features effectively. I showcase parks, emphasize recreation centers, and highlight recreation-focused amenities that attract buyers comparing parks, recreation, and square footage. Most agents do not do this. They use generic marketing, and Henderson condos expire.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Henderson Condo Areas</h2>
                <HeadingMedia level={2} heading="Popular Henderson Condo Areas" />
                <p className="text-lg text-gray-700 mb-4">
                  Henderson has many condo areas. Each area has unique features, amenities, and buyer appeal. I've sold expired condos in many of these areas. I understand what makes each area unique. I know how to market each area effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Green Valley</h3>
                <HeadingMedia level={3} heading="Green Valley" />
                <p className="text-lg text-gray-700 mb-4">
                  Green Valley offers mid-rise condos and townhomes with mature landscaping, parks, pools, and recreation amenities, and prime location. I've sold expired Green Valley condos by highlighting mature landscaping, showcasing parks, pools, and recreation amenities, and positioning condos competitively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Anthem</h3>
                <HeadingMedia level={3} heading="Anthem" />
                <p className="text-lg text-gray-700 mb-4">
                  Anthem offers mid-rise condos and townhomes with master-planned community features, parks, pools, and recreation amenities, and value positioning. I've sold expired Anthem condos by emphasizing master-planned features, highlighting parks, pools, and recreation amenities, and targeting value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">MacDonald Ranch</h3>
                <HeadingMedia level={3} heading="MacDonald Ranch" />
                <p className="text-lg text-gray-700 mb-4">
                  MacDonald Ranch offers mid-rise condos and townhomes with streets with mature landscaping, mature landscaping, and proven value. I've sold expired MacDonald Ranch condos by showcasing streets with mature landscaping, highlighting mature landscaping, and attracting value-conscious buyers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR HENDERSON CONDO?
                </h2>
                <HeadingMedia level={2} heading={"READY TO SELL YOUR HENDERSON CONDO?"} />
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Henderson condo home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="henderson_condos" buttonText="GET MY HENDERSON CONDO SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
