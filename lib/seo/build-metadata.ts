import type { Metadata } from 'next'
import { DEFAULT_OG_IMAGE } from '@/lib/seo/heading-images'
import { AGENT_NAME, BUSINESS_NAME, PHONE_DISPLAY, SITE_URL } from '@/lib/seo/site'

type BuildMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
  publishedTime,
  modifiedTime,
}: BuildMetadataInput): Metadata {
  const url = path.startsWith('http') ? path : `${SITE_URL}${path}`
  const truncatedDescription =
    description.length > 160 ? `${description.slice(0, 157)}...` : description

  return {
    title,
    description: truncatedDescription,
    keywords,
    alternates: { canonical: url },
    authors: [{ name: AGENT_NAME }],
    creator: AGENT_NAME,
    publisher: BUSINESS_NAME,
    openGraph: {
      type,
      locale: 'en_US',
      url,
      siteName: BUSINESS_NAME,
      title,
      description: truncatedDescription,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1280, height: 720, alt: title }],
      ...(publishedTime || modifiedTime
        ? {
            publishedTime,
            modifiedTime,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: truncatedDescription,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'US-NV',
      'geo.placename': 'Las Vegas',
    },
  }
}

export function titleWithPhone(base: string): string {
  return `${base} | ${PHONE_DISPLAY}`
}
