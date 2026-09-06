import Header from '@/app/components/header'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import HeadingMedia from '@/app/components/heading-media'
export const metadata = {
  title: 'Terms of Service | Dr. Jan Duffy',
  description: 'Terms of service for Dr. Janet Duffy real estate website.',
}
export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms' }]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h1 className="text-4xl md:text-5xl font-black mb-8">
                Terms of Service
              </h1>
              <HeadingMedia level={1} heading="Terms of Service" />
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                  <HeadingMedia level={2} heading="Agreement to Terms" />
                  <p>
                    By accessing and using this website, you agree to be bound by these Terms of Service.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Real Estate Services</h2>
                  <HeadingMedia level={2} heading="Real Estate Services" />
                  <p>
                    Dr. Janet Duffy is a licensed real estate agent. All real estate services are subject to
                    separate written agreements and applicable real estate laws and regulations.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Website Content</h2>
                  <HeadingMedia level={2} heading="Website Content" />
                  <p>
                    All content on this website is for informational purposes only. Results may vary.
                    Statistics and testimonials are based on actual results but individual results may differ.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact</h2>
                  <HeadingMedia level={2} heading="Contact" />
                  <p>
                    For questions about these terms, contact:
                  </p>
                  <p>
                    <strong>Dr. Janet Duffy</strong>
                    <br />
                    Phone: <a href="tel:7025001064" className="text-primary">(702) 500-1064</a>
                    <br />
                    Email: <a href="mailto:drjan@drjanduffy.com" className="text-primary">drjan@drjanduffy.com</a>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Last updated: November 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
