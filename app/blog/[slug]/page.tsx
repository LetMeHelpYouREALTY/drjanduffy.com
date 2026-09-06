import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SeoLandingPage from '@/app/components/seo-landing-page'
import { getBlogPage, getBlogSlugs } from '@/lib/content/blog-posts'
import { buildPageMetadata } from '@/lib/seo/build-metadata'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getBlogPage(slug)
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const page = getBlogPage(slug)
  if (!page) notFound()
  return <SeoLandingPage page={page} />
}
