import { AGENT_NAME, LICENSE_NUMBER, SITE_URL } from '@/lib/seo/site'

type ArticleSchemaProps = {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
}

export default function ArticleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: ArticleSchemaProps) {
  const url = path.startsWith('http') ? path : `${SITE_URL}${path}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    image: `${SITE_URL}/og-image.png`,
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}#person`,
      name: AGENT_NAME,
      jobTitle: 'Real Estate Agent',
      identifier: LICENSE_NUMBER,
    },
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
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
