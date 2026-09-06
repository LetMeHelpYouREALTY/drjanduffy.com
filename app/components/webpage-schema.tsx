import { AGENT_NAME, BUSINESS_NAME, PHONE_DISPLAY, SITE_URL } from '@/lib/seo/site'

type WebPageSchemaProps = {
  name: string
  description: string
  path: string
  dateModified?: string
}

export default function WebPageSchema({
  name,
  description,
  path,
  dateModified,
}: WebPageSchemaProps) {
  const url = path.startsWith('http') ? path : `${SITE_URL}${path}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    dateModified: dateModified || '2026-09-06',
    isPartOf: {
      '@id': `${SITE_URL}#website`,
    },
    about: {
      '@id': `${SITE_URL}#business`,
    },
    primaryImageOfPage: `${SITE_URL}/images/headings/summerlin-estate-twilight.jpg`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-aeo-answer]'],
    },
    mainEntity: {
      '@type': 'RealEstateAgent',
      name: AGENT_NAME,
      telephone: PHONE_DISPLAY,
      worksFor: {
        '@type': 'Organization',
        name: BUSINESS_NAME,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}
