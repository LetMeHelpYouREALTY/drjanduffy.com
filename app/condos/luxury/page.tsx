import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import HeadingMedia from '@/app/components/heading-media'
export const metadata = {
  title: 'Las Vegas Luxury Condos for Sale | Strip & Summerlin | Dr. Jan Duffy',
  description:
    'Las Vegas luxury condos for sale on the Strip and in Summerlin. Dr. Jan Duffy represents buyers and sellers, and resets luxury condos that did not sell. 19-day average. Call (702) 500-1064.',
  keywords: [
    'luxury condos in las vegas',
    'las vegas luxury condos for sale',
    'luxury condos las vegas',
    'high-end condos las vegas',
    'luxury condos for sale las vegas',
  ],
  alternates: {
    canonical: '/condos/luxury',
  },
}
export default function LuxuryCondosPage() {
  const faqs = [
    {
      question: 'Are there luxury condos for sale in Las Vegas?',
      answer:
        'Yes. Dr. Jan Duffy works luxury condos for sale in Las Vegas, including Turnberry Place, Panorama Towers, The Ogden, Cosmopolitan, Vdara, and Veer Towers. Call (702) 500-1064 for a current search. Inventory changes daily; do not rely on a cached count.',
    },
    {
      question: 'Are there luxury condos for sale in Las Vegas NV?',
      answer:
        'Yes. Luxury condo inventory spans the Strip, Summerlin, and select Henderson buildings. Dr. Jan Duffy lists and represents buyers from 1180 N Town Center Dr, Las Vegas, NV 89144. If a luxury condo already expired, she resets photography, price, and buyer targeting. Practice average: 19 days to contract on relisted homes.',
    },
    {
      question: 'How long does it take to sell a luxury condo in Las Vegas?',
      answer:
        'Dr. Jan Duffy\'s practice average is 19 days from listing to contract on homes that did not sell. Luxury condo timing still depends on HOA dues, view, finish, and competing towers. Call (702) 500-1064 for a CMA at your unit.',
    },
    {
      question: 'What luxury condo buildings in Las Vegas does Dr. Jan Duffy serve?',
      answer:
        'Turnberry Place, Panorama Towers, The Ogden, Trump International, The Cosmopolitan, Vdara, Veer Towers, and other high-rise product. She markets amenities, square footage, and HOA documents — not resident demographics.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Las Vegas Condos', url: '/condos' },
          { name: 'Luxury Condos', url: '/condos/luxury' },
        ]}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                Las Vegas Luxury Condos for Sale
              </h1>
              <HeadingMedia level={1} heading="Las Vegas Luxury Condos for Sale" />
              <p className="text-xl text-center text-gray-600 mb-12">
                Strip and Summerlin luxury condos — plus a listing reset if yours already expired
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas luxury condos are high-end properties that require sophisticated marketing, exclusive access, and premium positioning. They compete with world-class resorts, attract discerning buyers, and demand professional presentation. Most agents do not understand luxury condos. They use generic strategies, and luxury condos expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired luxury condos. I understand the luxury market. I know how to market high-end properties. I know how to attract discerning buyers. I've sold expired luxury condos in Turnberry Place, Panorama Towers, The Ogden, Trump International, and other premium buildings. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Luxury condos face unique challenges. Competition from luxury resorts. High HOA fees that require justification. Strict building restrictions. Buyers who expect exclusive amenities and sophisticated marketing. Most agents do not address these challenges. They use generic strategies, and luxury condos expire. I address these challenges. I use luxury marketing strategies, highlight exclusive amenities, and attract discerning buyers. Luxury condos sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Luxury Condos Expire</h2>
                <HeadingMedia level={2} heading="Why Luxury Condos Expire" />
                <p className="text-lg text-gray-700 mb-4">
                  Luxury condos expire for the same reasons other condos expire - poor marketing, minimal investment, and zero follow-up. But luxury condos face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Inadequate Luxury Marketing</h3>
                <HeadingMedia level={3} heading="Inadequate Luxury Marketing" />
                <p className="text-lg text-gray-700 mb-4">
                  Luxury condos require luxury marketing. Professional photography with luxury staging. Exclusive access events. High-end advertising in luxury publications. Most agents do not invest in luxury marketing. They use generic strategies, and luxury condos expire. I invest $5,000+ in professional media, luxury staging, and exclusive marketing that attracts discerning buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Wrong Buyer Targeting</h3>
                <HeadingMedia level={3} heading="Wrong Buyer Targeting" />
                <p className="text-lg text-gray-700 mb-4">
                  Luxury condos attract discerning buyers. High-net-worth individuals. Investors seeking premium properties. Second-home buyers wanting luxury lifestyle. Most agents do not know how to target these buyers. They use generic advertising, and luxury condos expire. I use targeted advertising, exclusive access events, and luxury marketing that attracts discerning buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Failure to Justify Premium Pricing</h3>
                <HeadingMedia level={3} heading="Failure to Justify Premium Pricing" />
                <p className="text-lg text-gray-700 mb-4">
                  Luxury condos command premium pricing. Buyers need to understand value. Most agents do not justify premium pricing effectively. They do not explain luxury amenities. They do not showcase exclusive access. They do not highlight sophisticated design. I justify premium pricing effectively. I explain luxury amenities, showcase exclusive access, and highlight sophisticated design that attracts value-conscious luxury buyers.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Luxury Condo Expertise</h2>
                <HeadingMedia level={2} heading="My Luxury Condo Expertise" />
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired luxury condos in Turnberry Place, Panorama Towers, The Ogden, Trump International, and other premium buildings. I understand the luxury market. I know how to market high-end properties. I know how to attract discerning buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Luxury Marketing Investment</h3>
                <HeadingMedia level={3} heading="Luxury Marketing Investment" />
                <p className="text-lg text-gray-700 mb-4">
                  Luxury condos require luxury marketing investment. Professional photography with luxury staging. Exclusive access events. High-end advertising in luxury publications. Most agents do not invest in luxury marketing. I invest $5,000+ in professional media, luxury staging, and exclusive marketing that attracts discerning buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Discerning Buyer Network</h3>
                <HeadingMedia level={3} heading="Discerning Buyer Network" />
                <p className="text-lg text-gray-700 mb-4">
                  Luxury condos attract discerning buyers. I have a network of high-net-worth individuals, investors seeking premium properties, and second-home buyers wanting luxury lifestyle. I use this network to market luxury condos effectively. Most agents do not have this network. They use generic advertising, and luxury condos expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Premium Positioning</h3>
                <HeadingMedia level={3} heading="Premium Positioning" />
                <p className="text-lg text-gray-700 mb-4">
                  Luxury condos require premium positioning. I position luxury condos as exclusive properties with sophisticated design, world-class amenities, and prime locations. I highlight unique features, emphasize exclusive access, and showcase premium value. Most agents do not position luxury condos effectively. They use generic positioning, and luxury condos expire.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Luxury Condo Buildings</h2>
                <HeadingMedia level={2} heading="Popular Luxury Condo Buildings" />
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has many luxury condo buildings. Each building has unique features, amenities, and buyer appeal. I've sold expired condos in many of these buildings. I understand what makes each building unique. I know how to market each building effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Turnberry Place</h3>
                <HeadingMedia level={3} heading="Turnberry Place" />
                <p className="text-lg text-gray-700 mb-4">
                  Turnberry Place offers luxury condos with resort access, exclusive amenities, and sophisticated design. I've sold expired Turnberry Place condos by emphasizing resort access, highlighting amenities, and targeting sophisticated buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Panorama Towers</h3>
                <HeadingMedia level={3} heading="Panorama Towers" />
                <p className="text-lg text-gray-700 mb-4">
                  Panorama Towers offers luxury condos with Strip views, world-class amenities, and prime location. I've sold expired Panorama Towers condos by highlighting Strip views, showcasing amenities, and positioning condos competitively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Trump International</h3>
                <HeadingMedia level={3} heading="Trump International" />
                <p className="text-lg text-gray-700 mb-4">
                  Trump International offers luxury condos with brand recognition, exclusive amenities, and prime Strip location. I've sold expired Trump International condos by emphasizing brand recognition, highlighting amenities, and targeting brand-conscious buyers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR LUXURY CONDO?
                </h2>
                <HeadingMedia level={2} heading={"READY TO SELL YOUR LUXURY CONDO?"} />
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Las Vegas luxury condo home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="luxury_condos" buttonText="GET MY LUXURY CONDO SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
