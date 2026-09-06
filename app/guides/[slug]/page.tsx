import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SeoLandingPage from '@/app/components/seo-landing-page'
import { getGuidePage, getGuideSlugs } from '@/lib/content/guides'
import { buildPageMetadata } from '@/lib/seo/build-metadata'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getGuidePage(slug)
  if (!page) return {}
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
    type: 'article',
    publishedTime: page.published,
    modifiedTime: page.modified,
  })
}

export default async function GuideSlugPage({ params }: PageProps) {
  const { slug } = await params
  const page = getGuidePage(slug)
  if (!page) notFound()
  return <SeoLandingPage page={page} />
}
