import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { getUserIdentifier } from '@/lib/rate-limiter'

const upstashUrl = process.env.KV_REST_API_URL
const upstashToken = process.env.KV_REST_API_TOKEN
const isEnabled =
  Boolean(upstashUrl?.trim()) && Boolean(upstashToken?.trim())

let marketIntelLimit: Ratelimit | null = null

if (isEnabled) {
  const redis = new Redis({
    url: upstashUrl!,
    token: upstashToken!,
  })

  marketIntelLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '3600 s'),
    analytics: true,
    prefix: 'market_intel_limit',
  })
}

export async function checkMarketIntelRateLimit(request: Request) {
  const identifier = getUserIdentifier(request)

  if (!marketIntelLimit) {
    return { success: true, identifier, remaining: 10 }
  }

  const { success, remaining, reset } = await marketIntelLimit.limit(identifier)
  return { success, identifier, remaining, reset }
}
