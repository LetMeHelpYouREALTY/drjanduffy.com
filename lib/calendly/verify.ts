import { createHmac, timingSafeEqual } from 'crypto'

const SIGNATURE_TOLERANCE_SECONDS = 300

function timingSafeEqualHex(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, 'utf8')
  const bBuf = Buffer.from(b, 'utf8')
  if (aBuf.length !== bBuf.length) return false
  return timingSafeEqual(aBuf, bBuf)
}

function parseCalendlySignatureHeader(
  header: string,
): { timestamp: string; signature: string } | null {
  const parts = header.split(',').map((part) => part.trim())
  let timestamp: string | undefined
  let signature: string | undefined

  for (const part of parts) {
    const [key, value] = part.split('=')
    if (key === 't') timestamp = value
    if (key === 'v1') signature = value
  }

  if (!timestamp || !signature) return null
  return { timestamp, signature }
}

export function verifyCalendlySignature(
  signatureHeader: string | null,
  rawBody: string,
  signingKey: string | undefined,
): boolean {
  if (!signatureHeader || !signingKey) return false

  const parsed = parseCalendlySignatureHeader(signatureHeader)
  if (!parsed) return false

  const timestampSeconds = Number(parsed.timestamp)
  if (!Number.isFinite(timestampSeconds)) return false

  const now = Math.floor(Date.now() / 1000)
  if (Math.abs(now - timestampSeconds) > SIGNATURE_TOLERANCE_SECONDS) return false

  const payload = `${parsed.timestamp}.${rawBody}`
  const expected = createHmac('sha256', signingKey).update(payload).digest('hex')

  return timingSafeEqualHex(expected.toLowerCase(), parsed.signature.toLowerCase())
}
