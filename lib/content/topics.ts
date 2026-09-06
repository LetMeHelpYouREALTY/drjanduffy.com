import type {
  ContentSection,
  FaqItem,
  PageKind,
  RelatedLink,
  SeoPageContent,
} from '@/lib/content/page-types'
import { AGENT_SHORT_NAME, PHONE_DISPLAY, PROOF } from '@/lib/seo/site'

export type TopicRecord = {
  slug: string
  kind: PageKind
  path: string
  title: string
  h1: string
  description: string
  directAnswer: string
  keywords: string[]
  breadcrumbs: Array<{ name: string; url: string }>
  serviceName: string
  areaServed: string[]
  related: RelatedLink[]
  faqs: FaqItem[]
  sections: ContentSection[]
  published?: string
}

export function toSeoPage(topic: TopicRecord): SeoPageContent {
  return {
    slug: topic.slug,
    kind: topic.kind,
    path: topic.path,
    title: topic.title,
    description: topic.description,
    h1: topic.h1,
    directAnswer: topic.directAnswer,
    keywords: topic.keywords,
    breadcrumbs: topic.breadcrumbs,
    serviceName: topic.serviceName,
    areaServed: topic.areaServed,
    related: topic.related,
    faqs: topic.faqs,
    sections: topic.sections,
    published: topic.published,
    modified: PROOF.lastReviewed,
  }
}

export const PRACTICE_LINE = `${AGENT_SHORT_NAME}'s verified practice results: ${PROOF.homesRelistedSold} relisted homes sold, ${PROOF.averageDaysToContract}-day average to contract, ${PROOF.percentOfAsking} of asking. Call ${PHONE_DISPLAY}.`
