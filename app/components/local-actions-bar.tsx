import { Phone, Navigation, Star } from 'lucide-react'
import {
  ADDRESS,
  DIRECTIONS_URL,
  GBP_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/seo/site'

/**
 * GBP-required actions on every page: Call, Directions, View Google Reviews.
 */
export default function LocalActionsBar() {
  return (
    <nav
      aria-label="Contact Dr. Janet Duffy Real Estate"
      className="bg-white border-t border-gray-200"
    >
      <div className="container mx-auto px-4 py-4">
        <p className="text-center text-sm text-gray-600 mb-3">
          Dr. Janet Duffy Real Estate · {ADDRESS.full} · {PHONE_DISPLAY}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-900 px-5 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Directions
          </a>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-900 px-5 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
          >
            <Star className="w-4 h-4" />
            View Google Reviews
          </a>
        </div>
      </div>
    </nav>
  )
}
