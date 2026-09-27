import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { BRAND_SITE_PATHS, JUST_CALL_DR_JAN_URL } from '@/lib/site'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  if (hostname === 'drjanduffy.com') {
    url.host = 'www.drjanduffy.com'
    return NextResponse.redirect(url, 301)
  }

  const pathname = request.nextUrl.pathname

  if (
    !BRAND_SITE_PATHS.has(pathname) &&
    !pathname.startsWith('/api') &&
    pathname !== '/sitemap.xml' &&
    pathname !== '/robots.txt'
  ) {
    const destination = new URL(pathname, JUST_CALL_DR_JAN_URL)
    destination.search = request.nextUrl.search
    return NextResponse.redirect(destination, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
