import { createCalendlyLeadEvent, type CalendlyLeadInput } from '@/lib/fub/client'

export type CalendlyLeadPayload = CalendlyLeadInput

export async function processCalendlyLead(payload: CalendlyLeadPayload) {
  'use workflow'

  const fubEventId = await syncLeadToFub(payload)
  return { fubEventId, email: payload.email }
}

async function syncLeadToFub(payload: CalendlyLeadPayload) {
  'use step'

  const result = await createCalendlyLeadEvent(payload)
  return result.id
}
