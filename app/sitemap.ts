import type { MetadataRoute } from 'next'
import { absoluteUrl, getAllSitemapEntries } from '@/lib/seo/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSitemapEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: new Date('2026-09-06'),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
