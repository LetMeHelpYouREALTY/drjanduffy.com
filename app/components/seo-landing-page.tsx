import Link from 'next/link'
import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import ServiceSchema from '@/app/components/service-schema'
import WebPageSchema from '@/app/components/webpage-schema'
import ArticleSchema from '@/app/components/article-schema'
import HowToSchema from '@/app/components/howto-schema'
import NAPSection from '@/app/components/nap-section'
import GoogleMapEmbed from '@/app/components/google-map-embed'
import GoogleReviews from '@/app/components/google-reviews'
import HeadingMedia from '@/app/components/heading-media'
import { assertNever, type PageKind, type SeoPageContent } from '@/lib/content/page-types'
import { AGENT_SHORT_NAME, PHONE_DISPLAY, PROOF } from '@/lib/seo/site'

function isArticleKind(kind: PageKind): boolean {
  switch (kind) {
    case 'blog':
    case 'guide':
    case 'answer':
      return true
    case 'neighborhood':
    case 'landing':
    case 'condo':
      return false
    default:
      return assertNever(kind)
  }
}

function isHowToKind(kind: PageKind): boolean {
  switch (kind) {
    case 'guide':
      return true
    case 'blog':
    case 'answer':
    case 'neighborhood':
    case 'landing':
    case 'condo':
      return false
    default:
      return assertNever(kind)
  }
}

type SeoLandingPageProps = {
  page: SeoPageContent
}

export default function SeoLandingPage({ page }: SeoLandingPageProps) {
  const howToSteps = page.sections.slice(0, 6).map((section) => ({
    name: section.heading,
    text: section.directAnswer,
  }))

  return (
    <>
      <WebPageSchema
        name={page.h1}
        description={page.description}
        path={page.path}
        dateModified={page.modified || PROOF.lastReviewed}
      />
      <BreadcrumbSchema items={page.breadcrumbs} />
      <FAQSchema faqs={page.faqs} />
      <ServiceSchema
        serviceName={page.serviceName}
        description={page.description}
        areaServed={page.areaServed}
      />
      {isArticleKind(page.kind) && (
        <ArticleSchema
          headline={page.h1}
          description={page.description}
          path={page.path}
          datePublished={page.published || PROOF.lastReviewed}
          dateModified={page.modified || PROOF.lastReviewed}
        />
      )}
      {isHowToKind(page.kind) && (
        <HowToSchema
          name={page.h1}
          description={page.description}
          steps={howToSteps}
        />
      )}
      <Header />
      <div className="min-h-screen bg-gray-50">
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-gray-500 text-center mb-4">
                Last reviewed {PROOF.lastReviewed} · {AGENT_SHORT_NAME} · Nevada license S.0197614.LLC
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                {page.h1}
              </h1>
              <HeadingMedia level={1} heading={page.h1} />
              <div
                data-aeo-answer
                className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-10"
              >
                <p className="text-lg text-gray-900 font-medium leading-relaxed">
                  {page.directAnswer}
                </p>
              </div>

              {page.sections.map((section) => (
                <section key={section.heading} className="mb-12">
                  <h2 className="text-3xl font-black mb-4">{section.heading}</h2>
                  <HeadingMedia level={2} heading={section.heading} />
                  <p className="text-lg text-gray-800 mb-4 font-medium">
                    {section.directAnswer}
                  </p>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-lg text-gray-700 mb-4">
                      {paragraph}
                    </p>
                  ))}
                  {section.subheadings?.map((sub) => (
                    <div key={sub.heading} className="mb-6">
                      <h3 className="text-2xl font-bold mb-3">{sub.heading}</h3>
                      <HeadingMedia level={3} heading={sub.heading} />
                      {sub.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="text-lg text-gray-700 mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </section>
              ))}

              <section className="mb-12">
                <h2 className="text-3xl font-black mb-4">
                  Questions sellers ask {AGENT_SHORT_NAME}
                </h2>
                <HeadingMedia
                  level={2}
                  heading={`Questions sellers ask ${AGENT_SHORT_NAME}`}
                />
                <p className="text-lg text-gray-800 mb-6">
                  These answers use verified practice results: {PROOF.homesRelistedSold}{' '}
                  relisted homes sold, a {PROOF.averageDaysToContract}-day average to
                  contract, and {PROOF.percentOfAsking} of asking price. Call{' '}
                  {PHONE_DISPLAY} for a current CMA on your address.
                </p>
                <div className="space-y-6">
                  {page.faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-gray-200 pb-4">
                      <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                      <p className="text-lg text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {page.related.length > 0 && (
                <section className="bg-gray-100 p-8 rounded-lg mb-12">
                  <h2 className="text-2xl font-black mb-4">Related Las Vegas pages</h2>
                  <HeadingMedia level={2} heading="Related Las Vegas pages" />
                  <ul className="grid md:grid-cols-2 gap-3">
                    {page.related.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-primary hover:underline font-semibold"
                        >
                          {link.anchor}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <NAPSection variant="detailed" showMap={false} className="mb-8" />
              <div className="mb-12">
                <GoogleMapEmbed />
              </div>

              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">
                  Get a listing reset plan
                </h2>
                <HeadingMedia level={2} heading="Get a listing reset plan" />
                <p className="text-center text-lg text-gray-700 mb-6">
                  Call {PHONE_DISPLAY} or send the form. {AGENT_SHORT_NAME} takes a
                  maximum of {PROOF.maxListings} listings so each home gets a{' '}
                  {PROOF.marketingPoints}-point marketing system.
                </p>
                <LeadForm source={`seo_${page.slug}`} buttonText="GET MY LISTING SOLD" />
              </div>
            </div>
          </div>
        </article>
        <GoogleReviews showSchema={false} />
      </div>
    </>
  )
}
