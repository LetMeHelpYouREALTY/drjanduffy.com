# Automated Quality Assurance Setup

## Overview

This project implements comprehensive automation for code quality, performance, and accessibility testing based on 2026 industry best practices.

## Pre-commit Automation (Husky + lint-staged)

**Runs automatically on every commit:**
- ESLint with accessibility rules (eslint-plugin-jsx-a11y)
- Prettier code formatting
- Type checking via TypeScript

### Configuration Files
- `.husky/pre-commit` - Git hook script
- `package.json` - lint-staged configuration

### How It Works
1. You make changes and run `git commit`
2. Husky triggers the pre-commit hook
3. lint-staged runs ESLint and Prettier on staged files
4. If checks pass, commit proceeds; if they fail, commit is blocked

## Performance Testing (Lighthouse CI)

**Automated performance monitoring:**
- Lighthouse scores for performance, accessibility, best practices, SEO
- Configurable score thresholds (90+ required)
- Runs on every build in CI/CD

### Run Locally
```bash
# Build and start the production server
pnpm build
pnpm start

# In another terminal, run Lighthouse
pnpm lighthouse
```

### Configuration
- `lighthouserc.json` - Lighthouse CI configuration
- Minimum scores: 90% for all categories
- Runs 3 times and takes median score

### CI/CD Integration
Runs automatically on every push and pull request via GitHub Actions.

## Accessibility Testing (Pa11y)

**Automated WCAG 2.1 AA compliance testing:**
- Tests critical pages for accessibility issues
- Validates semantic HTML, ARIA, keyboard navigation
- Fails build on accessibility violations

### Run Locally
```bash
# Start the development server
pnpm dev

# In another terminal, test a single page
pnpm a11y

# Or test multiple pages
pnpm a11y:ci
```

### Configuration
- `.pa11yci.json` - Pa11y CI configuration
- Standard: WCAG2AA
- Tests homepage, about, contact, success stories

## GitHub Actions CI/CD

**Three automated workflows on every push/PR:**

### 1. Lint & Format Check
- Runs ESLint with accessibility rules
- Validates Prettier formatting
- Runs TypeScript type checking

### 2. Lighthouse Performance
- Builds production bundle
- Runs Lighthouse CI tests
- Fails if scores below 90%

### 3. Accessibility Tests
- Builds and starts production server
- Runs Pa11y tests on configured pages
- Fails on WCAG 2.1 AA violations

### Configuration
`.github/workflows/quality-checks.yml`

## NPM Scripts Reference

```bash
# Development
pnpm dev                  # Start dev server with Turbopack
pnpm build               # Production build
pnpm start               # Start production server

# Code Quality
pnpm lint                # Run ESLint
pnpm format              # Format code with Prettier
pnpm format:check        # Check formatting (CI)
pnpm validate            # Run all checks (lint + format + build)

# Performance
pnpm lighthouse          # Run Lighthouse audit
pnpm lighthouse:assert   # Run Lighthouse with assertions (CI)
pnpm test:perf          # Full performance test (build + lighthouse)

# Accessibility
pnpm a11y               # Test single page
pnpm a11y:ci            # Test multiple pages (CI)

# Git Hooks
pnpm prepare            # Initialize Husky (automatic)
```

## Tools Installed

### Code Quality
- `eslint` - JavaScript/TypeScript linting
- `eslint-plugin-jsx-a11y` - Accessibility linting rules
- `prettier` - Code formatting
- `husky` - Git hooks
- `lint-staged` - Run linters on staged files

### Performance Testing
- `@lhci/cli` - Lighthouse CI command line tool
- `lighthouse` - Google Lighthouse performance auditing

### Accessibility Testing
- `@axe-core/cli` - Axe accessibility testing CLI
- `pa11y` - Automated accessibility testing

### Utilities
- `wait-on` - Wait for server startup in CI

## Best Practices Sources

This automation setup implements recommendations from:

### Next.js Performance
- [Next.js SEO Best Practices 2026](https://pagepro.co/blog/nextjs-seo/)
- [Complete Next.js SEO Guide](https://adeelhere.com/blog/2025-12-09-complete-nextjs-seo-guide-from-zero-to-hero)

### React Accessibility
- [React Accessibility Best Practices](https://www.allaccessible.org/blog/react-accessibility-best-practices-guide)
- [TypeScript for Accessibility](https://blog.srcinnovations.com.au/2025/09/11/level-up-your-react-apps-typescript-tricks-for-accessibility/)

### Real Estate Conversion
- [Conversion Rate Optimization](https://www.geeklymedia.com/blog/conversion-rate-optimization-best-practices-for-a-real-estate-website)
- [Real Estate Landing Pages](https://landingi.com/landing-page/real-estate-best-practices/)

### AI Development (Nate's Newsletter)
- [Nate's Newsletter](https://natesnewsletter.substack.com/)
- [AI Strategy Posts](https://natesnewsletter.substack.com/t/ai-strategy)
- [Complete Guide to AI Agents](https://natesnewsletter.substack.com/p/the-complete-guide-to-building-ai)

## Bypassing Pre-commit Checks (Emergency Only)

If you absolutely need to bypass checks (not recommended):
```bash
git commit --no-verify -m "Emergency commit"
```

**Use sparingly!** Bypassing checks can introduce bugs, accessibility issues, and performance problems.

## Troubleshooting

### Pre-commit Hook Not Running
```bash
# Reinitialize Husky
pnpm prepare
chmod +x .husky/pre-commit
```

### Lighthouse Fails to Start Server
```bash
# Ensure production build exists
pnpm build

# Check if port 3000 is available
lsof -i :3000
```

### Pa11y Fails
```bash
# Ensure server is running
pnpm start

# Wait for server to be ready
npx wait-on http://localhost:3000
```

## Maintenance

### Update Lighthouse Thresholds
Edit `lighthouserc.json` and adjust `minScore` values.

### Add Pages to Accessibility Testing
Edit `.pa11yci.json` and add URLs to the `urls` array.

### Modify Lint-Staged Rules
Edit `package.json` under the `lint-staged` key.

## Next Steps

1. **Add Visual Regression Testing** - Percy, Chromatic, or Playwright
2. **Add Unit Tests** - Jest + React Testing Library
3. **Add E2E Tests** - Playwright for critical user flows
4. **Add Performance Budgets** - Bundle size limits
5. **Add Dependency Scanning** - Snyk or Dependabot

---

**Last Updated:** June 6, 2026  
**Session Reference:** https://claude.ai/code/session_01LoUCXtuYgTGgYXpF2jZPpe
