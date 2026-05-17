'use client'

import CalendlyInline from '@/app/components/calendly/calendly-inline'
import CalendlyPopupButton from '@/app/components/calendly/calendly-popup-button'

interface LeadFormProps {
  source: string
  onSubmit?: never
  buttonText?: string
  showAddress?: boolean
  variant?: 'inline' | 'popup'
  height?: number
}

export default function LeadForm({
  buttonText = 'Schedule time with me',
  variant = 'inline',
  height = 700,
}: LeadFormProps) {
  if (variant === 'popup') {
    return (
      <div className="space-y-4 text-center">
        <p className="text-lg font-semibold text-gray-800">{buttonText}</p>
        <CalendlyPopupButton className="w-full py-6 text-lg font-bold">
          Schedule time with me
        </CalendlyPopupButton>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold text-gray-800">
        {buttonText}
      </p>
      <CalendlyInline height={height} />
    </div>
  )
}
