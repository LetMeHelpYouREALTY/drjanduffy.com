'use client'

import { Button } from '@/components/ui/button'
import { CALENDLY_URL } from '@/lib/config/calendly'
import '@/app/components/calendly/calendly-types'

type CalendlyPopupButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: 'cta' | 'default' | 'outline'
  size?: 'default' | 'lg'
  onClick?: () => void
}

export default function CalendlyPopupButton({
  children,
  className = '',
  variant = 'cta',
  size = 'lg',
  onClick,
}: CalendlyPopupButtonProps) {
  const openCalendly = () => {
    onClick?.()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={openCalendly}
    >
      {children}
    </Button>
  )
}
