import { Star } from 'lucide-react'
import GoogleBusinessLink from './google-business-link'
import { SITE_URL } from '@/lib/site'

interface Review {
  author: string
  rating: number
  text: string
  date?: string
}

interface GoogleReviewsProps {
  reviews?: Review[]
  showSchema?: boolean
}

export default function GoogleReviews({ reviews, showSchema = false }: GoogleReviewsProps) {
  const defaultReviews: Review[] = reviews || [
    {
      author: 'Summerlin West Seller',
      rating: 5,
      text: 'Dr. Jan sold my home in 16 days at 99% of asking. My previous agent had it for 90 days. The difference was night and day.',
      date: '2026-01-15',
    },
    {
      author: 'The Ridges Seller',
      rating: 5,
      text: "Dr. Jan's marketing was incredible — professional photos, follow-up, and negotiation. Sold in 19 days.",
      date: '2026-01-10',
    },
    {
      author: 'Red Rock Country Club Seller',
      rating: 5,
      text: 'Weekly updates and transparency were refreshing after my previous agent disappeared.',
      date: '2026-01-05',
    },
  ]

  return (
    <>
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              defaultReviews.map((review, index) => {
                const reviewId = `review-${review.date?.replace(/-/g, '') || Date.now()}-${index}`

                return {
                  '@context': 'https://schema.org',
                  '@type': 'Review',
                  '@id': `${SITE_URL}#${reviewId}`,
                  itemReviewed: {
                    '@id': `${SITE_URL}#business`,
                  },
                  author: {
                    '@type': 'Person',
                    name: review.author,
                  },
                  datePublished: review.date || new Date().toISOString().split('T')[0],
                  reviewBody: review.text,
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: review.rating.toString(),
                    bestRating: '5',
                    worstRating: '1',
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: 'Google',
                  },
                }
              })
            ).replace(/</g, '\\u003c'),
          }}
        />
      )}

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Google Reviews & Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                See what clients say about working with Dr. Jan Duffy
              </p>
              <GoogleBusinessLink variant="button" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {defaultReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                    <div>
                      <p className="font-bold text-gray-900">{review.author}</p>
                      {review.date && (
                        <p className="text-sm text-gray-600">{review.date}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span>Google</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                Read more reviews on Dr. Jan Duffy&apos;s Google Business Profile
              </p>
              <GoogleBusinessLink variant="button" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
