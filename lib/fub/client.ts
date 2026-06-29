export type CalendlyLeadInput = {
  email: string
  name: string
  eventName: string
  startTime: string
  endTime?: string
  sourceUrl?: string
  notes?: string
}

export type FubEventResponse = {
  id: number
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim()
  const spaceIndex = trimmed.indexOf(' ')
  if (spaceIndex === -1) {
    return { firstName: trimmed, lastName: '' }
  }
  return {
    firstName: trimmed.slice(0, spaceIndex),
    lastName: trimmed.slice(spaceIndex + 1).trim(),
  }
}

function getFubAuthHeader(): string {
  const apiKey = process.env.FUB_API_KEY
  if (!apiKey) {
    throw new Error('FUB_API_KEY is not configured')
  }
  return `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`
}

export async function createCalendlyLeadEvent(
  input: CalendlyLeadInput,
): Promise<FubEventResponse> {
  const { firstName, lastName } = splitName(input.name)
  const siteHost = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com')
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')

  const messageLines = [
    `Calendly booking: ${input.eventName}`,
    `Start: ${input.startTime}`,
    input.endTime ? `End: ${input.endTime}` : null,
    input.notes ? `Notes: ${input.notes}` : null,
  ].filter(Boolean)

  const body = {
    source: siteHost,
    system: process.env.FUB_SYSTEM || 'drjanduffy.com',
    type: 'Appointment',
    message: messageLines.join('\n'),
    person: {
      firstName,
      lastName: lastName || undefined,
      emails: [{ value: input.email, type: 'home' }],
      tags: ['Calendly', 'drjanduffy.com'],
      sourceUrl: input.sourceUrl,
    },
  }

  const headers: Record<string, string> = {
    Authorization: getFubAuthHeader(),
    'Content-Type': 'application/json',
  }

  const systemKey = process.env.FUB_SYSTEM_KEY
  if (systemKey) {
    headers['X-System'] = process.env.FUB_SYSTEM || 'drjanduffy.com'
    headers['X-System-Key'] = systemKey
  }

  const response = await fetch('https://api.followupboss.com/v1/events', {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Follow Up Boss API error (${response.status}): ${errorText}`)
  }

  const data = (await response.json()) as FubEventResponse
  return data
}
