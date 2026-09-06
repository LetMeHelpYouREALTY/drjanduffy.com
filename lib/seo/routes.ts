import { getDynamicNeighborhoodSlugs } from '@/lib/content/neighborhoods'
import { getDynamicCondoSlugs } from '@/lib/content/condos'
import { getLandingSlugs } from '@/lib/content/landings'
import { getGuideSlugs } from '@/lib/content/guides'
import { getBlogSlugs } from '@/lib/content/blog-posts'
import { getAnswerSlugs } from '@/lib/content/answers'
import { SITE_URL } from '@/lib/seo/site'

export type SitemapEntry = {
  path: string
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: number
}

const STATIC_PATHS: SitemapEntry[] = [
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/success-stories', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/testimonials', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/case-studies', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/why-expire', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/comparison', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/30-day-plan', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/process', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/why-choose-me', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/resources', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/sellers-guide', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/marketing-strategy', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/selling-tips', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/market-analysis', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/results', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/tools/cost-calculator', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/tools/blame-analyzer', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/tools/value-check', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/condos', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/condos/new-listings', changeFrequency: 'daily', priority: 0.8 },
  { path: '/condos/strip', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/high-rise', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/luxury', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/mid-rise', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/townhomes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/summerlin', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/henderson', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/condo-hotels', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/sold', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/condos/most-expensive', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/cosmopolitan', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/vdara', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/veer-towers', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/turnberry-place', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/panorama-towers', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/trump-international', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/ogden', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/waldorf-astoria', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/one-las-vegas', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/one-queensridge', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/turnberry-towers', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/mgm-city-center', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/mgm-signature', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/palms-place', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/allure', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/the-martin', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/condos/altair', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/angel-court', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/apache-hills', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/terra-bella', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/the-district', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/viera', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/tramonto', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/wimbledon', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/juhl-lofts', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/newport-lofts', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/soho-lofts', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/fremont-street-lofts', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/eleventh-street-lofts', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/summerlin-lofts', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/condos/loft-5', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/neighborhoods', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/neighborhoods/summerlin-west', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/neighborhoods/the-ridges', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/neighborhoods/red-rock-country-club', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/neighborhoods/the-summit', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/neighborhoods/macdonald-ranch', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/neighborhoods/southern-highlands', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/neighborhoods/skye-canyon', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/neighborhoods/mountains-edge', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/neighborhoods/del-webb-north-ranch', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/sell-house-fast-las-vegas', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/sell-my-home-no-commission', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/home-wont-sell-las-vegas', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/summerlin-real-estate-agent', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/sell-my-house-fast-summerlin', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/relist-home-las-vegas', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/find-new-real-estate-agent-las-vegas', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/answers', changeFrequency: 'weekly', priority: 0.8 },
]

export function getAllSitemapEntries(): SitemapEntry[] {
  const dynamic: SitemapEntry[] = [
    ...getDynamicNeighborhoodSlugs().map((slug) => ({
      path: `/neighborhoods/${slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...getDynamicCondoSlugs().map((slug) => ({
      path: `/condos/${slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...getLandingSlugs().map((slug) => ({
      path: `/${slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...getGuideSlugs().map((slug) => ({
      path: `/guides/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...getBlogSlugs().map((slug) => ({
      path: `/blog/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...getAnswerSlugs().map((slug) => ({
      path: `/answers/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  const seen = new Set<string>()
  const merged: SitemapEntry[] = []
  for (const entry of [...STATIC_PATHS, ...dynamic]) {
    if (seen.has(entry.path)) continue
    seen.add(entry.path)
    merged.push(entry)
  }
  return merged
}

export function absoluteUrl(path: string): string {
  if (path === '/') return SITE_URL
  return `${SITE_URL}${path}`
}
