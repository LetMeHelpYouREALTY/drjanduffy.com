import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SeoLandingPage from '@/app/components/seo-landing-page'
import { getLandingPage, getLandingSlugs } from '@/lib/content/landings'
import { buildPageMetadata } from '@/lib/seo/build-metadata'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getLandingSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getLandingPage(slug)
  if (!page) return {}
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
  })
}

export default async function RootLandingPage({ params }: PageProps) {
  const { slug } = await params
  const page = getLandingPage(slug)
  if (!page) notFound()
  return <SeoLandingPage page={page} />
}
