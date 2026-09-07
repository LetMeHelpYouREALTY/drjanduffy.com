# drjanduffy.com — agent instructions

Next.js 16 App Router site for Dr. Jan Duffy (BHHS Nevada Properties), deployed on Vercel. Package manager is pnpm `10.6.2`. Client CTA phone is `702-222-1964` unless a page has its own tracking number.

Refresh the marked Vercel section (only) with:

```bash
vercel agent init --yes
```

## Vercel CLI

Install and verify ([Vercel CLI overview](https://vercel.com/docs/cli), last updated 2026-08-25):

```bash
pnpm i -g vercel@latest
vercel --version
```

Native binaries (optional, no Node.js required): `pnpm i -g @vercel/vc-native -f`.

### Auth

- Interactive: `vercel login`
- CI/agents: set `VERCEL_TOKEN`. Do **not** pass `--token` on the command line — it shows up in process lists and logs. If both are set, `--token` wins.
- Confirm identity with `vercel whoami` before linking or deploying.

### Local / CI workflow

| Goal | Command |
| --- | --- |
| Link this directory | `vercel link` |
| Pull env + project settings | `vercel pull` / `vercel pull --environment=production` |
| Local Vercel runtime | `vercel dev --port 3000` |
| Production-like build | `vercel build` or `vercel build --prod` |
| Preview deploy | `vercel deploy` |
| Production deploy | `vercel deploy --prebuilt --prod` (only after an explicit go-ahead) |
| Protected preview URL | `vercel curl <path>` — do not disable Deployment Protection |
| Runtime logs | `vercel logs [deployment-url] --follow` |

`package.json` `build` must stay `next build`. Vercel’s platform runs that script; setting it to `vercel build` recurses.

GitHub Actions on `main` (`.github/workflows/vercel-production.yml`) authenticates with `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` as environment variables, then:

```bash
npx vercel pull --yes --environment=production
npx vercel build --prod
npx vercel deploy --prebuilt --prod
```

Always pass `--yes` in non-interactive shells.

<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

These defaults are optimized for AI coding agents (and humans) working on apps that deploy to Vercel.

- Treat Vercel Functions as stateless + ephemeral (no durable RAM/FS, no background daemons), use Blob or marketplace integrations for preserving state
- Edge Functions (standalone) are deprecated; prefer Vercel Functions
- Don't start new projects on Vercel KV/Postgres (both discontinued); use Marketplace Redis/Postgres instead
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Provision Marketplace native integrations with `vercel integration add` (CI/agent-friendly)
- Sync env + project settings with `vercel env pull` / `vercel pull` when you need local/offline parity
- Use `waitUntil` for post-response work; avoid the deprecated Function `context` parameter
- Set Function regions near your primary data source; avoid cross-region DB/service roundtrips
- Tune Fluid Compute knobs (e.g., `maxDuration`, memory/CPU) for long I/O-heavy calls (LLMs, APIs)
- Use Runtime Cache for fast **regional** caching + tag invalidation (don't treat it as global KV)
- Use Cron Jobs for schedules; cron runs in UTC and triggers your production URL via HTTP GET
- Use Vercel Blob for uploads/media; Use Edge Config for small, globally-read config
- If a deployment URL returns a Vercel Deployment Protection 401/403, retry the same URL with `vercel curl <url>`; don't disable protection or manage bypass secrets manually
- Add OpenTelemetry via `@vercel/otel` on Node; don't expect OTEL support on the Edge runtime
- Enable Web Analytics + Speed Insights early
- Use AI Gateway for model routing, set AI_GATEWAY_API_KEY, using a model string (e.g. 'anthropic/claude-sonnet-4.6'), Gateway is already default in AI SDK
  needed. Always curl https://ai-gateway.vercel.sh/v1/models first; never trust model IDs from memory
- For durable agent loops or untrusted code: use Workflow (pause/resume/state) + Sandbox; use Vercel MCP for secure infra access
<!-- VERCEL BEST PRACTICES END -->
