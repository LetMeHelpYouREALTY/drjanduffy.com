import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/contact', '/privacy-policy', '/terms'] as const

  return pages.map((path) => ({
    url: path === '' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/contact' ? 0.9 : 0.8,
  }))
}
