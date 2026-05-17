'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { CALENDLY_BADGE, CALENDLY_URL } from '@/lib/config/calendly'

export default function CalendlyProvider() {
  useEffect(() => {
    const initBadge = () => {
      if (!window.Calendly) return
      window.Calendly.initBadgeWidget({
        url: CALENDLY_URL,
        ...CALENDLY_BADGE,
      })
    }

    if (window.Calendly) {
      initBadge()
      return
    }

    const interval = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(interval)
        initBadge()
      }
    }, 100)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
    />
  )
}
