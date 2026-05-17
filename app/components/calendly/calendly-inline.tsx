'use client'

import { CALENDLY_URL } from '@/lib/config/calendly'

type CalendlyInlineProps = {
  height?: number
  className?: string
}

export default function CalendlyInline({
  height = 700,
  className = '',
}: CalendlyInlineProps) {
  return (
    <div
      className={`calendly-inline-widget w-full ${className}`.trim()}
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  )
}
