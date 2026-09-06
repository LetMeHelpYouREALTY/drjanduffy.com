import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SeoLandingPage from '@/app/components/seo-landing-page'
import { getNeighborhoodPage, getDynamicNeighborhoodSlugs } from '@/lib/content/neighborhoods'
import { buildPageMetadata } from '@/lib/seo/build-metadata'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getDynamicNeighborhoodSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getNeighborhoodPage(slug)
  if (!page) return {}
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
  })
}

export default async function NeighborhoodSlugPage({ params }: PageProps) {
  const { slug } = await params
  const page = getNeighborhoodPage(slug)
  if (!page) notFound()
  return <SeoLandingPage page={page} />
}
