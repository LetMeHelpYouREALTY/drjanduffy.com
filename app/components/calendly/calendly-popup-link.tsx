'use client'

import { CALENDLY_URL } from '@/lib/config/calendly'
import '@/app/components/calendly/calendly-types'

type CalendlyPopupLinkProps = {
  children: React.ReactNode
  className?: string
}

export default function CalendlyPopupLink({
  children,
  className = '',
}: CalendlyPopupLinkProps) {
  const openCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a href={CALENDLY_URL} onClick={openCalendly} className={className}>
      {children}
    </a>
  )
}
