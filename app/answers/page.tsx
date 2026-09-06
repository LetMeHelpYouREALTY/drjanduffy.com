import Link from 'next/link'
import Header from '@/app/components/header'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import NAPSection from '@/app/components/nap-section'
import { getAllAnswerPages } from '@/lib/content/answers'
import { AGENT_SHORT_NAME, PHONE_DISPLAY, PROOF } from '@/lib/seo/site'
import { buildPageMetadata } from '@/lib/seo/build-metadata'
import HeadingMedia from '@/app/components/heading-media'

export const metadata = buildPageMetadata({
  title: `Las Vegas Seller Answers | ${AGENT_SHORT_NAME} | ${PHONE_DISPLAY}`,
  description: `Direct answers to expired-listing questions in Las Vegas. Practice results: ${PROOF.averageDaysToContract}-day average, ${PROOF.percentOfAsking} of asking. Call ${PHONE_DISPLAY}.`,
  path: '/answers',
  keywords: ['las vegas expired listing faq', 'why listing expired', 'relist questions'],
})

export default function AnswersHubPage() {
  const answers = getAllAnswerPages()
  const faqs = answers.map((page) => ({
    question: page.h1,
    answer: page.directAnswer,
  }))

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Answers', url: '/answers' },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Las Vegas Seller Answers
              </h1>
              <HeadingMedia level={1} heading="Las Vegas Seller Answers" />
              <p data-aeo-answer className="text-xl text-center text-gray-700 mb-12">
                Short, citation-ready answers for homes that did not sell. Written by{' '}
                {AGENT_SHORT_NAME}. Last reviewed {PROOF.lastReviewed}. Call {PHONE_DISPLAY}.
              </p>
              <div className="space-y-6 mb-12">
                {answers.map((page) => (
                  <article
                    key={page.slug}
                    className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors"
                  >
                    <h2 className="text-2xl font-black mb-3">
                      <Link href={page.path} className="hover:text-primary">
                        {page.h1}
                      </Link>
                    </h2>
                    <p className="text-lg text-gray-700 mb-3">{page.directAnswer}</p>
                    <Link href={page.path} className="font-semibold text-primary hover:underline">
                      Full answer →
                    </Link>
                  </article>
                ))}
              </div>
              <h2 className="text-3xl font-black mb-4">How these answers are sourced</h2>
              <HeadingMedia level={2} heading="How these answers are sourced" />
              <p className="text-lg text-gray-700 mb-4">
                Practice facts on this site are limited to verified operating numbers:{' '}
                {PROOF.homesRelistedSold} relisted homes sold, {PROOF.averageDaysToContract}-day
                average to contract, {PROOF.percentOfAsking} of asking,{' '}
                {PROOF.marketingSpendPerListing} marketing, {PROOF.photographyInvestment}{' '}
                photography, and a {PROOF.maxListings}-listing cap. Valley-wide medians are not
                invented here.
              </p>
              <h2 className="text-3xl font-black mb-4">Talk to a person</h2>
              <HeadingMedia level={2} heading="Talk to a person" />
              <p className="text-lg text-gray-700 mb-8">
                Dr. Janet Duffy Real Estate, 1180 N Town Center Dr, Las Vegas, NV 89144. Hours:
                Monday–Sunday 8:00 AM – 8:00 PM.
              </p>
              <h3 className="text-2xl font-bold mb-3">Related guides</h3>
              <HeadingMedia level={3} heading="Related guides" />
              <ul className="list-disc pl-6 mb-12 text-lg">
                <li>
                  <Link href="/guides/how-to-relist-expired-home" className="text-primary hover:underline">
                    How to relist an expired home
                  </Link>
                </li>
                <li>
                  <Link href="/guides/nevada-listing-expiration-guide" className="text-primary hover:underline">
                    Nevada listing expiration guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-primary hover:underline">
                    Full FAQ
                  </Link>
                </li>
              </ul>
              <NAPSection variant="detailed" showMap />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
