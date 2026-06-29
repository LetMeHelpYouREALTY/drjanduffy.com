export type CalendlyWebhookEvent =
  | 'invitee.created'
  | 'invitee.canceled'
  | 'invitee_no_show.created'
  | 'invitee_no_show.deleted'

export type CalendlyScheduledEvent = {
  uri: string
  name: string
  start_time: string
  end_time: string
}

export type CalendlyInviteePayload = {
  uri: string
  email: string
  name: string
  cancel_url?: string
  reschedule_url?: string
  questions_and_answers?: Array<{
    question: string
    answer: string
  }>
  scheduled_event: CalendlyScheduledEvent
}

export type CalendlyWebhookBody = {
  event: CalendlyWebhookEvent
  created_at: string
  payload: CalendlyInviteePayload
}
