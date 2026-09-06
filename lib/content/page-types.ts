export type PageKind =
  | 'neighborhood'
  | 'landing'
  | 'guide'
  | 'blog'
  | 'condo'
  | 'answer'

export type FaqItem = {
  question: string
  answer: string
}

export type RelatedLink = {
  href: string
  anchor: string
}

export type SubSection = {
  heading: string
  paragraphs: string[]
}

export type ContentSection = {
  heading: string
  /** 40–60 word direct answer for AEO / AI Overviews */
  directAnswer: string
  paragraphs: string[]
  subheadings?: SubSection[]
}

export type SeoPageContent = {
  slug: string
  kind: PageKind
  path: string
  title: string
  description: string
  h1: string
  /** Citation-ready 40–60 word answer placed immediately under the H1 */
  directAnswer: string
  keywords: string[]
  breadcrumbs: Array<{ name: string; url: string }>
  serviceName: string
  areaServed: string[]
  related: RelatedLink[]
  faqs: FaqItem[]
  sections: ContentSection[]
  published?: string
  modified?: string
  imageAlt?: string
}

export function assertNever(value: never): never {
  throw new Error(`Unhandled page kind: ${String(value)}`)
}
