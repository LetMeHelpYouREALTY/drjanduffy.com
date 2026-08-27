const PARALLEL_BETA = 'search-extract-2025-10-10'
const SEARCH_URL = 'https://api.parallel.ai/v1beta/search'

export type ParallelSearchResult = {
  title?: string
  url: string
  excerpts?: string[]
  publish_date?: string
}

export type ParallelSearchResponse = {
  search_id?: string
  results?: ParallelSearchResult[]
}

function parallelHeaders(apiKey: string): HeadersInit {
  return {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
    'parallel-beta': PARALLEL_BETA,
  }
}

export async function parallelSearch(params: {
  objective: string
  search_queries?: readonly string[]
  max_results?: number
}): Promise<ParallelSearchResponse | { skipped: true; reason: string }> {
  const apiKey = process.env.PARALLEL_API_KEY?.trim()
  if (!apiKey) {
    return { skipped: true, reason: 'PARALLEL_API_KEY not configured' }
  }

  const response = await fetch(SEARCH_URL, {
    method: 'POST',
    headers: parallelHeaders(apiKey),
    body: JSON.stringify({
      objective: params.objective,
      search_queries: params.search_queries,
      max_results: params.max_results ?? 8,
      mode: 'one-shot',
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Parallel search failed (${response.status}): ${text}`)
  }

  return response.json() as Promise<ParallelSearchResponse>
}

export const MARKET_INTEL_PRESETS = {
  'expired-listings': {
    objective:
      'Find current data and strategies for converting expired MLS listings in Las Vegas, including common reasons listings expire and agent repositioning tactics in 2026.',
    search_queries: [
      'Las Vegas expired listings statistics 2026',
      'expired listing conversion real estate agent',
      'why homes expire on MLS Las Vegas',
    ],
  },
  'summerlin-market': {
    objective:
      'Summarize Summerlin Las Vegas residential market conditions for sellers: median price, inventory, days on market, and expired listing trends in 2026.',
    search_queries: [
      'Summerlin Las Vegas housing market 2026',
      'Summerlin home prices days on market',
      'Las Vegas luxury home market Summerlin',
    ],
  },
} as const

export type MarketIntelPreset = keyof typeof MARKET_INTEL_PRESETS
