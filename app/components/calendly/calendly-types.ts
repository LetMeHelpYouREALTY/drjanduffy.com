export type CalendlyGlobal = {
  initPopupWidget: (options: { url: string }) => void
  initBadgeWidget: (options: {
    url: string
    text: string
    color: string
    textColor: string
    branding: boolean
  }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyGlobal
  }
}

export {}
