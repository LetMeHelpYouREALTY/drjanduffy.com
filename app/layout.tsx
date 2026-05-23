import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import Footer from './components/footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'),
  title: 'Sell Your House Fast Las Vegas | Summerlin Real Estate Specialist',
  description:
    'Las Vegas real estate specialist for homes that will not sell. 7 homes that did not sell - now sold. Summerlin luxury expert. Free consultation: 702-222-1964',
  keywords: [
    'home that DID NOT sell las vegas',
    'house will not sell vegas',
    'could not sell my house',
    'fire my real estate agent',
    'failed listing help',
    'unsold home las vegas',
    'home that failed to sell',
    're-list my home las vegas',
  ],
  openGraph: {
    title: 'could not Sell Your Las Vegas Home? | Dr. Jan Duffy - I Sell Homes That DID NOT Sell',
    description:
      'Your home DID NOT sell? I have helped 7 Summerlin sellers who could not sell with their previous agent. Average 19 days to contract, 98.7% of asking.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'could not Sell Your Home? | Dr. Jan Duffy',
    description:
      'Your house DID NOT sell? Sell your home that did not sell in 30 days or less with proven results.',
    images: ['/og-image.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// SEO/AEO/GEO 3-Surface Schema Strategy (per CLAUDE.md v3.1.6, May 2026)
// - Phone number in schema = site-specific CallAction (702-500-1064) — matches GBP NAP
// - sameAs uses env-var slots for verifiable web-wide entity footprint (GEO trust signal)
// - hasCredential is an array: NV license + PhD (March 2026 author-expertise signal)
// - worksFor: full BHHS Nevada Properties entity name

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'
const SCHEMA_PHONE = '(702) 500-1064' // Site-specific CallAction — NEVER replace with 702-222-1964
const SITE_AGENT_ID = `${SITE_URL}#agent`
const SITE_BUSINESS_ID = `${SITE_URL}#business`
const SITE_PERSON_ID = `${SITE_URL}#person`
const SITE_ORG_ID = `${SITE_URL}#organization`
const SITE_WEBSITE_ID = `${SITE_URL}#website`

const sameAsLinks = [
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || 'https://share.google/ocO9fjtV1xkSkqZIe',
  process.env.NEXT_PUBLIC_BHHS_PROFILE_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_REALTOR_COM_URL,
  process.env.NEXT_PUBLIC_ZILLOW_PROFILE_URL,
].filter(Boolean) as string[]

const credentials = [
  {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Professional License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Nevada Real Estate Division',
    },
    credentialNumber: 'S.0197614.LLC',
  },
  {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    educationalLevel: 'Doctorate',
    name: 'PhD',
  },
]

const bhhsNevadaProperties = {
  '@type': 'Organization',
  name: 'Berkshire Hathaway HomeServices Nevada Properties',
  url: 'https://www.bhhsnv.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BXTZ077LFQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BXTZ077LFQ');
          `}
        </Script>
        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        {/* Hotjar */}
        {process.env.NEXT_PUBLIC_HOTJAR_ID && (
          <Script id="hotjar" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}
        {/* CallRail */}
        {process.env.NEXT_PUBLIC_CALLRAIL_ID && (
          <Script id="callrail" strategy="afterInteractive">
            {`
              (function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.callrail.com/companies/${process.env.NEXT_PUBLIC_CALLRAIL_ID}/12/swap.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();
            `}
          </Script>
        )}
        {/* Schema Markup - Multiple Schemas (SEO/AEO/GEO 3-Surface Strategy, May 2026) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              '@id': SITE_AGENT_ID,
              name: 'Dr. Janet Duffy',
              alternateName: 'Dr. Jan Duffy',
              description: 'Las Vegas real estate expert specializing in homes that DID NOT sell. Helped 7 Summerlin sellers who could not sell with their previous agent - 19 day average and 98.7% of asking price.',
              telephone: SCHEMA_PHONE,
              email: 'info@drjanduffy.com',
              url: SITE_URL,
              image: `${SITE_URL}/og-image.png`,
              specialty: ['Homes That DID NOT Sell', 'Failed Listing Specialist', 'Homes That Did Not Sell Specialist', 'Unsold Home Expert', 'Luxury Real Estate', 'Summerlin Real Estate'],
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Las Vegas',
                  containedIn: {
                    '@type': 'State',
                    name: 'Nevada',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Summerlin West',
                },
                {
                  '@type': 'City',
                  name: 'Henderson',
                },
              ],
              priceRange: '$400K-$10M+',
              award: ['Failed Listing Specialist 2026', 'Good Neighbor Award'],
              knowsAbout: ['Real Estate', 'Homes That DID NOT Sell', 'Failed Listings', 'Unsold Homes', 'Re-listing Service', 'Luxury Properties', 'Property Marketing', 'Real Estate Negotiation'],
              memberOf: [
                {
                  '@type': 'Organization',
                  name: 'Nevada Real Estate Division',
                },
                bhhsNevadaProperties,
              ],
              hasCredential: credentials,
              sameAs: sameAsLinks,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': SITE_BUSINESS_ID,
              name: 'Dr. Janet Duffy Real Estate',
              alternateName: 'Dr. Jan Duffy - Failed Listing Specialist',
              description: 'Las Vegas real estate agent specializing in homes that DID NOT sell and luxury properties in Summerlin, The Ridges, and surrounding areas.',
              telephone: SCHEMA_PHONE,
              email: 'info@drjanduffy.com',
              url: SITE_URL,
              image: [
                `${SITE_URL}/og-image.png`,
                `${SITE_URL}/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg`,
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1180 N Town Center Dr',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89144',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '36.1579',
                longitude: '-115.3030',
              },
              priceRange: '$400K-$10M+',
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Las Vegas',
                },
                {
                  '@type': 'City',
                  name: 'Summerlin',
                },
                {
                  '@type': 'City',
                  name: 'Henderson',
                },
                {
                  '@type': 'City',
                  name: 'The Ridges',
                },
                {
                  '@type': 'City',
                  name: 'Red Rock Country Club',
                },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '08:00',
                  closes: '20:00',
                },
              ],
              openingHours: 'Mo-Su 08:00-20:00',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '47',
                bestRating: '5',
                worstRating: '1',
              },
              paymentAccepted: 'Cash, Check, Credit Card',
              currenciesAccepted: 'USD',
              sameAs: sameAsLinks,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': SITE_PERSON_ID,
              name: 'Dr. Janet Duffy',
              alternateName: 'Dr. Jan Duffy',
              jobTitle: 'Real Estate Agent',
              description: 'Las Vegas real estate expert with extensive experience helping sellers whose homes DID NOT sell. Specializes in luxury properties in Summerlin, The Ridges, and surrounding areas. 7 homes that did not sell - now sold.',
              worksFor: bhhsNevadaProperties,
              hasCredential: credentials,
              telephone: SCHEMA_PHONE,
              email: 'info@drjanduffy.com',
              url: SITE_URL,
              image: `${SITE_URL}/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg`,
              award: ['Failed Listing Specialist 2026', 'Good Neighbor Award'],
              knowsAbout: ['Real Estate', 'Homes That DID NOT Sell', 'Failed Listings', 'Unsold Homes', 'Luxury Properties', 'Property Marketing', 'Real Estate Negotiation', 'Summerlin Real Estate', 'Las Vegas Real Estate Market'],
              sameAs: sameAsLinks,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': SITE_ORG_ID,
              name: 'Dr. Janet Duffy Real Estate',
              alternateName: 'Dr. Jan Duffy - Failed Listing Specialist',
              url: SITE_URL,
              logo: `${SITE_URL}/og-image.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: SCHEMA_PHONE,
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              parentOrganization: bhhsNevadaProperties,
              sameAs: sameAsLinks,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': SITE_WEBSITE_ID,
              name: 'Dr. Janet Duffy - Failed Listing Specialist',
              url: SITE_URL,
              description: 'Las Vegas real estate expert specializing in homes that DID NOT sell. Helped 7 Summerlin sellers who could not sell with their previous agent - 19 day average and 98.7% of asking price.',
              publisher: {
                '@id': SITE_ORG_ID,
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            },
          ]).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
