#!/usr/bin/env node
// Lightweight content/schema audit for app/**/page.tsx.
// Approximates heading counts, word counts, and schema-component usage
// by scanning raw source text (not a full render).
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..')

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue
      walk(full, out)
    } else if (entry.name === 'page.tsx') {
      out.push(full)
    }
  }
  return out
}

const files = walk(path.join(ROOT, 'app')).sort()

function countTag(src, tag) {
  const re = new RegExp('<' + tag + '[\\s>]', 'g')
  return (src.match(re) || []).length
}

function approxWordCount(src) {
  let s = src
  s = s.replace(/<script[\s\S]*?<\/script>/gi, ' ')
  s = s.replace(/dangerouslySetInnerHTML[\s\S]*?}}/g, ' ')
  s = s.replace(/className="[^"]*"/g, ' ')
  s = s.replace(/href="[^"]*"/g, ' ')
  s = s.replace(/src="[^"]*"/g, ' ')
  s = s.replace(/import[^\n]*\n/g, ' ')
  s = s.replace(/export const metadata[\s\S]*?\n}\n/, ' ')
  s = s.replace(/<[^>]+>/g, ' ')
  s = s.replace(/[{}[\]();,'"`]/g, ' ')
  const words = s.split(/\s+/).filter((w) => /[a-zA-Z]{2,}/.test(w))
  return words.length
}

const rows = []
for (const file of files) {
  const src = readFileSync(file, 'utf8')
  const rel = path.relative(ROOT, file)
  const h1 = countTag(src, 'h1')
  const h2 = countTag(src, 'h2')
  const h3 = countTag(src, 'h3')
  const words = approxWordCount(src)
  const hasBreadcrumb = /BreadcrumbSchema/.test(src)
  const hasFAQ = /FAQSchema/.test(src)
  const hasService = /ServiceSchema/.test(src)
  rows.push({ rel, h1, h2, h3, words, hasBreadcrumb, hasFAQ, hasService })
}

const issues = rows.filter(
  (r) => r.h1 !== 1 || r.h2 < 3 || r.words < 1200 || !r.hasBreadcrumb
)

console.log(
  'Scanned ' + rows.length + ' page.tsx files. ' + issues.length +
  ' flagged below threshold (H1!=1, H2<3, words<1200, or missing BreadcrumbSchema).\n'
)
for (const r of issues) {
  console.log(
    r.rel.padEnd(55) +
    ' H1=' + r.h1 + ' H2=' + r.h2 + ' H3=' + r.h3 +
    ' words~' + r.words +
    ' breadcrumb=' + (r.hasBreadcrumb ? 'Y' : 'N') +
    ' faq=' + (r.hasFAQ ? 'Y' : 'N') +
    ' service=' + (r.hasService ? 'Y' : 'N')
  )
}
