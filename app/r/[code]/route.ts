import { after, NextResponse, type NextRequest } from 'next/server'

// Tracked home value report link: /r/<code>, where <code> is base64url("<fubPersonId>.<cloudCmaGuid>").
// Sends the homeowner straight to their Cloud CMA live report and, after the response,
// tells Dr. Jan's Zapier workflow about the open (REPORT_OPEN_WEBHOOK_URL).
// Only ever redirects to cloudcma.com/live/<32-hex guid>, so it can't be used as an open redirect.

export const dynamic = 'force-dynamic'

const FALLBACK = 'https://www.drjanduffy.com/'

function decode(code: string): { personId: string; guid: string } | null {
  try {
    const raw = Buffer.from(code, 'base64url').toString('utf8')
    const m = /^(\d{1,12})\.([a-f0-9]{32})$/.exec(raw)
    return m ? { personId: m[1], guid: m[2] } : null
  } catch {
    return null
  }
}

function redirectTo(url: string) {
  const res = NextResponse.redirect(url, 302)
  res.headers.set('Cache-Control', 'no-store')
  res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  res.headers.set('Referrer-Policy', 'no-referrer')
  return res
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const link = decode(code)
  if (!link) return redirectTo(FALLBACK)

  const hook = process.env.REPORT_OPEN_WEBHOOK_URL
  if (hook) {
    const payload = {
      personId: link.personId,
      guid: link.guid,
      ua: (request.headers.get('user-agent') ?? '').slice(0, 300),
      src: 'drjanduffy.com/r',
    }
    after(async () => {
      try {
        await fetch(hook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch {
        // Never block the homeowner on tracking.
      }
    })
  }

  return redirectTo(`https://cloudcma.com/live/${link.guid}`)
}

// Link scanners often send HEAD first: redirect without counting an open.
export async function HEAD(_request: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const link = decode(code)
  return redirectTo(link ? `https://cloudcma.com/live/${link.guid}` : FALLBACK)
}
