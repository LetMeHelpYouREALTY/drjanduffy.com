import { NextResponse } from 'next/server'
import { start } from 'workflow/api'
import { verifyCalendlySignature } from '@/lib/calendly/verify'
import type { CalendlyWebhookBody } from '@/lib/calendly/types'
import { processCalendlyLead } from '@/workflows/calendly-lead'

export async function POST(request: Request) {
  const rawBody = await request.text()
  const signatureHeader = request.headers.get('calendly-webhook-signature')
  const signingKey = process.env.CALENDLY_WEBHOOK_SECRET

  if (!verifyCalendlySignature(signatureHeader, rawBody, signingKey)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let body: CalendlyWebhookBody
  try {
    body = JSON.parse(rawBody) as CalendlyWebhookBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  if (body.event !== 'invitee.created') {
    return NextResponse.json({ received: true, skipped: body.event })
  }

  const invitee = body.payload
  const scheduledEvent = invitee.scheduled_event
  const notes = invitee.questions_and_answers
    ?.map((qa) => `${qa.question}: ${qa.answer}`)
    .join('\n')

  const run = await start(processCalendlyLead, [
    {
      email: invitee.email,
      name: invitee.name,
      eventName: scheduledEvent.name,
      startTime: scheduledEvent.start_time,
      endTime: scheduledEvent.end_time,
      sourceUrl: invitee.uri,
      notes,
    },
  ])

  return NextResponse.json({
    received: true,
    runId: run.runId,
  })
}
