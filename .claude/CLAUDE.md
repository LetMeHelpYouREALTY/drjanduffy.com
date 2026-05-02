# drjanduffy.com — Claude Code Project Instructions

## SITE PURPOSE
Dr. Jan Duffy's flagship real estate website. Main hub for all Las Vegas real estate services, lead capture, and SEO authority.

## TECH STACK
- Framework: Next.js (src/ directory structure — NOT App Router yet)
- Styling: Tailwind CSS
- Deployment: Manual / migration in progress
- CRM Integration: Follow Up Boss, RealScout widgets, CallAction
- Analytics: Google Analytics, Google Search Console

## STRUCTURE
```
src/
  components/    # Reusable UI components
  pages/         # Next.js pages (Pages Router)
  styles/        # Global + module CSS
  lib/           # Utilities, API helpers
  data/          # Static data, community info
public/          # Images, favicons, sitemap
```

## PRIORITIES
1. Migrate from Pages Router to App Router (Next.js 15)
2. Schema markup on all pages (LocalBusiness, RealEstateAgent, FAQPage)
3. Core Web Vitals optimization (LCP < 2.5s, CLS < 0.1)
4. RealScout widget integration on community pages
5. E-E-A-T signals: author bio, credentials, local photos

## SEO TARGETS
- Primary: "Las Vegas real estate agent", "Las Vegas realtor"
- Long-tail: "Summerlin homes for sale", "luxury homes Las Vegas"
- Local: "real estate agent near me Las Vegas"
- All pages need: meta title, description, OG tags, canonical URL

## REALSCOUT WIDGETS
- Property search on homepage
- Community-specific filtered searches on neighborhood pages
- Listing alerts CTA on all property pages

## DO NOT
- Break existing page URLs (301 redirect any changes)
- Remove or modify Google Analytics/Tag Manager snippets
- Hard-code prices or market stats (use API or dynamic data)
- Use Zillow/Redfin links or references anywhere
- Add dependencies without checking bundle size impact
