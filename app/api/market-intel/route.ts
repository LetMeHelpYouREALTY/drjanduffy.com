import { unstable_cache } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import {
  MARKET_INTEL_PRESETS,
  type MarketIntelPreset,
  parallelSearch,
} from '@/lib/parallel/client'
import { checkMarketIntelRateLimit } from '@/lib/parallel/rate-limit'

const CACHE_TAG = 'market-intel'

type MarketIntelRequest = {
  preset?: MarketIntelPreset
  objective?: string
  search_queries?: string[]
}

const DISCLAIMER =
  'Research summary for agent use only. Verify figures with MLS and licensed sources before publishing.'

async function fetchMarketIntel(
  objective: string,
  search_queries?: readonly string[],
  preset?: MarketIntelPreset | null,
) {
  const result = await parallelSearch({
    objective,
    search_queries,
    max_results: 8,
  })

  if ('skipped' in result) {
    return result
  }

  return {
    preset: preset ?? null,
    generatedAt: new Date().toISOString(),
    disclaimer: DISCLAIMER,
    ...result,
  }
}

function getCachedMarketIntel(
  objective: string,
  search_queries: readonly string[] | undefined,
  preset: MarketIntelPreset | null,
) {
  const cacheKey = preset ?? objective.slice(0, 64)
  return unstable_cache(
    () => fetchMarketIntel(objective, search_queries, preset),
    ['market-intel', cacheKey],
    { revalidate: 3600, tags: [CACHE_TAG, `market-intel-${cacheKey}`] },
  )()
}

export async function GET() {
  return NextResponse.json({
    presets: Object.entries(MARKET_INTEL_PRESETS).map(([id, preset]) => ({
      id,
      objective: preset.objective,
    })),
    disclaimer: DISCLAIMER,
  })
}

export async function POST(request: NextRequest) {
  try {
    const rate = await checkMarketIntelRateLimit(request)
    if (!rate.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Try again later.' },
        {
          status: 429,
          headers: rate.reset
            ? { 'Retry-After': String(Math.ceil((rate.reset - Date.now()) / 1000)) }
            : undefined,
        },
      )
    }

    const body = (await request.json()) as MarketIntelRequest
    const preset = body.preset ? MARKET_INTEL_PRESETS[body.preset] : null
    const objective = body.objective?.trim() ?? preset?.objective

    if (!objective) {
      return NextResponse.json(
        { error: 'objective or preset is required' },
        { status: 400 },
      )
    }

    if (body.objective && !body.preset) {
      const result = await fetchMarketIntel(
        objective,
        body.search_queries,
        null,
      )
      if ('skipped' in result) {
        return NextResponse.json(result, { status: 503 })
      }
      return NextResponse.json(result)
    }

    const result = await getCachedMarketIntel(
      objective,
      body.search_queries ?? preset?.search_queries,
      body.preset ?? null,
    )

    if ('skipped' in result) {
      return NextResponse.json(result, { status: 503 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Market intel error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Market intel failed' },
      { status: 500 },
    )
  }
}
