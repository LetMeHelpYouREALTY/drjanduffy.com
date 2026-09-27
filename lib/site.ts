/** Site-wide URL and NAP helpers for drjanduffy.com (www primary). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.drjanduffy.com'

export const JUST_CALL_DR_JAN_URL = 'https://www.justcalldrjan.com'

/** Brand-site routes that stay on drjanduffy.com; other paths redirect to justcalldrjan.com. */
export const BRAND_SITE_PATHS = new Set([
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
])

export const SITE_PHONE_TEL = '7025001064'
export const SITE_PHONE_DISPLAY = '(702) 500-1064'

export function siteCanonical(path: string = '/'): string {
  if (path === '/' || path === '') {
    return `${SITE_URL}/`
  }
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
