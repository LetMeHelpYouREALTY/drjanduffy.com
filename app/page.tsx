import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import BreadcrumbSchema from './components/breadcrumb-schema'
import FAQSchema from './components/faq-schema'
import NAPSection from './components/nap-section'
import GoogleMapEmbed from './components/google-map-embed'
import GoogleReviews from './components/google-reviews'
import GoogleBusinessLink from './components/google-business-link'
import {
  JUST_CALL_DR_JAN_URL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  siteCanonical,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Meet Dr. Jan Duffy | Las Vegas Real Estate Agent',
  description:
    'Meet Dr. Jan Duffy, Nevada-licensed REALTOR® (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. Las Vegas agent profile, background, and contact. Call (702) 500-1064.',
  alternates: {
    canonical: siteCanonical('/'),
  },
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteCanonical('/'),
    siteName: 'Dr. Jan Duffy',
    title: 'Meet Dr. Jan Duffy | Las Vegas Real Estate Agent',
    description:
      'Personal brand and professional biography for Dr. Jan Duffy, Las Vegas REALTOR®. License S.0197614.LLC. Call (702) 500-1064.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Dr. Jan Duffy | Las Vegas Real Estate Agent',
    description:
      'Las Vegas real estate agent biography, Nevada license, and contact for Dr. Jan Duffy. (702) 500-1064.',
  },
}

export default function HomePage() {
  const faqs = [
    {
      question: 'Who is Dr. Jan Duffy?',
      answer:
        'Dr. Jan Duffy is a Nevada-licensed real estate agent (License S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties in Las Vegas. This site is her personal brand and professional biography destination.',
    },
    {
      question: 'What is Dr. Jan Duffy\'s Nevada real estate license number?',
      answer:
        'Dr. Jan Duffy holds Nevada real estate license S.0197614.LLC. License details appear in site footer and structured data for verification.',
    },
    {
      question: 'How do I contact Dr. Jan Duffy in Las Vegas?',
      answer:
        `Call ${SITE_PHONE_DISPLAY}, email info@drjanduffy.com, or use the contact page. Office hours are Monday through Sunday, 8:00 AM to 8:00 PM.`,
    },
    {
      question: 'Where can I get help if my Las Vegas home did not sell?',
      answer:
        `Expired and relist strategy lives on ${JUST_CALL_DR_JAN_URL.replace('https://', '')} so this site stays focused on Dr. Jan Duffy\'s agent profile and biography.`,
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <FAQSchema faqs={faqs} />
      <Header />

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/60 shadow-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-600/70">
                  <Image
                    src="/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg"
                    alt="Dr. Jan Duffy, Las Vegas REALTOR® headshot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Meet Dr. Jan Duffy, REALTOR®, Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Nevada license S.0197614.LLC · Las Vegas real estate agent · Personal biography and professional contact
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90"
              >
                Call {SITE_PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 font-bold hover:bg-white/10"
              >
                Contact Dr. Jan Duffy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-black text-center mb-8 not-prose">
              Dr. Jan Duffy Las Vegas Real Estate Agent
            </h2>
            <p>
              Dr. Jan Duffy is a Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties.
              She brings a research-driven, direct approach to client work across the Las Vegas Valley —
              from Summerlin and Henderson to Southern Highlands and MacDonald Ranch.
            </p>
            <p>
              This site is the main personal-brand biography and identity destination: background, credentials,
              contact paths, and links to related Las Vegas real estate resources. For homes that did not sell
              or relist strategy, visit{' '}
              <a href={JUST_CALL_DR_JAN_URL} className="text-primary font-semibold">
                justcalldrjan.com
              </a>
              .
            </p>
            <p>
              Explore more about Dr. Jan on the{' '}
              <Link href="/about" className="text-primary font-semibold">
                about page
              </Link>
              , or compare Las Vegas agent resources on sister sites{' '}
              <a
                href="https://www.lasvegashomeexpert.com"
                className="text-primary font-semibold"
              >
                lasvegashomeexpert.com
              </a>{' '}
              (Las Vegas real estate expert) and{' '}
              <a href="https://www.vegashomeagents.com" className="text-primary font-semibold">
                vegashomeagents.com
              </a>{' '}
              (how to choose a real estate agent in Las Vegas).
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-black mb-4">View Google Reviews</h2>
          <p className="text-gray-600 mb-6">
            Read verified client feedback on Dr. Jan Duffy&apos;s Google Business Profile.
          </p>
          <GoogleBusinessLink variant="button" />
        </div>
      </section>

      <GoogleReviews showSchema={false} />
      <NAPSection />
      <GoogleMapEmbed />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-8">Common Questions</h2>
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-bold text-lg mb-2">{faq.question}</dt>
                  <dd className="text-gray-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
