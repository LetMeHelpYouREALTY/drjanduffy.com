import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SeoLandingPage from '@/app/components/seo-landing-page'
import { getAnswerPage, getAnswerSlugs } from '@/lib/content/answers'
import { buildPageMetadata } from '@/lib/seo/build-metadata'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAnswerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getAnswerPage(slug)
  if (!page) return {}
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
    type: 'article',
  })
}

export default async function AnswerSlugPage({ params }: PageProps) {
  const { slug } = await params
  const page = getAnswerPage(slug)
  if (!page) notFound()
  return <SeoLandingPage page={page} />
}
