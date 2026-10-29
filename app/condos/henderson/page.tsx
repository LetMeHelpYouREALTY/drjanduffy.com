import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
export const metadata = {
  title: 'Henderson Condos | Dr. Jan Duffy',
  description:
    'Expert help selling expired Henderson condos. Mid-rise condos and townhomes in Henderson. Proven results and professional marketing.',
  alternates: {
    canonical: '/condos/henderson',
  },
}
export default function HendersonCondosPage() {
  const faqs = [
    {
      question: 'What real estate services does Dr. Jan Duffy provide for Henderson condos?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Henderson condos that did not sell, including professional photography ($3,700 investment), staging, 97-point marketing system, strategic pricing for mid-rise condos and townhomes, specialized marketing for value-conscious buyers, and highlighting amenities. She serves Green Valley, Anthem, and throughout Henderson.',
    },
    {
      question: 'How long does it take to sell a condo in Henderson?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Henderson condos that did not sell. She specializes in mid-rise condos and townhomes in Henderson and uses strategic marketing to attract value-conscious and family buyers, achieving fast sales at top dollar.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my Henderson condo?',
      answer:
        'Dr. Jan Duffy specializes in Henderson condos and understands the unique challenges including competition with new construction, value-conscious buyers, and emphasis on amenities. She invests $5,000+ per listing in professional marketing and has proven results selling Henderson condos in Green Valley, Anthem, and throughout Henderson that did not sell with previous agents.',
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
                HENDERSON CONDOS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired Henderson condos - mid-rise condos and townhomes in Las Vegas's community
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Henderson is Las Vegas's community, offering mid-rise condos, townhomes, and affordable properties in a suburban setting. If your Henderson condo home DID NOT sell, you're not alone. Henderson condos face unique challenges - from competition with new construction to value-conscious buyers to emphasis on community amenities. Most agents do not understand Henderson condos. They use generic strategies, and Henderson condos expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired Henderson condos. I understand the Henderson market. I know how to market mid-rise condos and townhomes. I know how to attract value-conscious buyers. I've sold expired condos in Green Valley, Anthem, and throughout Henderson. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Henderson condos require value-focused marketing. Professional photography highlighting community features. Strategic positioning emphasizing affordability and value. Emphasis on older neighborhoods and older communities. Most agents do not understand this. They use generic strategies, and Henderson condos expire. I use value-focused marketing, highlight community features, and attract value-conscious buyers. Henderson condos sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Henderson Condos Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson condos expire for the same reasons other condos expire - poor marketing, minimal investment, and zero follow-up. But Henderson condos face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Value-Conscious Buyer Market</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson attracts value-conscious buyers. Families. First-time buyers. Retirees. Most agents do not know how to market to value-conscious buyers. They use luxury marketing, and value-conscious buyers look elsewhere. I know how to market to value-conscious buyers. I emphasize affordability, highlight value, and showcase community features that attract value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Competition from New Construction</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson has constant new construction. New condos compete with existing condos. New amenities compete with older amenities. New pricing competes with older pricing. Most agents do not know how to position existing condos against new construction. They do not highlight unique features. They do not emphasize older communities. I know how to position existing condos competitively. I highlight unique features. I emphasize older communities. I showcase older neighborhoods and proven value.
                </p>
                <h3 className="text-2xl font-bold mb-3">Amenity Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson offers community amenities. Parks. Schools. Community centers. Recreation features. Most agents do not market community amenities effectively. They do not highlight parks. They do not showcase schools. They do not emphasize recreation features. I market community amenities effectively. I highlight parks, showcase schools, and emphasize recreation features that attract value-conscious buyers.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Henderson Condo Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired Henderson condos in Green Valley, Anthem, and throughout Henderson. I understand the Henderson market. I know how to market mid-rise condos and townhomes. I know how to attract value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Value-Focused Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson condos require value-focused marketing. Professional photography highlighting features. Strategic positioning emphasizing affordability and value. Emphasis on neighborhoods. Most agents do not understand this. I do. I use value-focused marketing, highlight features, and attract value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Affordability Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson attracts value-conscious buyers who prioritize affordability. I position Henderson condos by emphasizing affordability, highlighting value, and showcasing features. Most agents do not do this. They use generic positioning, and Henderson condos expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Feature Highlighting</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson offers practical features. Parks. Schools. Community centers. Community amenities. I highlight these features effectively. I showcase parks, emphasize schools, and highlight community amenities that attract value-conscious buyers. Most agents do not do this. They use generic marketing, and Henderson condos expire.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Henderson Condo Areas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson has many condo areas. Each area has unique features, amenities, and buyer appeal. I've sold expired condos in many of these areas. I understand what makes each area unique. I know how to market each area effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Green Valley</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Green Valley offers mid-rise condos and townhomes with older communities, community amenities, and prime location. I've sold expired Green Valley condos by highlighting older communities, showcasing community amenities, and positioning condos competitively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Anthem</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Anthem offers mid-rise condos and townhomes with master-planned community features, amenities, and value positioning. I've sold expired Anthem condos by emphasizing master-planned features, highlighting amenities, and targeting value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">MacDonald Ranch</h3>
                <p className="text-lg text-gray-700 mb-4">
                  MacDonald Ranch offers mid-rise condos and townhomes with older neighborhoods, mature landscaping, and proven value. I've sold expired MacDonald Ranch condos by showcasing older neighborhoods, highlighting mature landscaping, and attracting value-conscious buyers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR HENDERSON CONDO?
                </h2>
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
