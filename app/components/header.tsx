'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { JUST_CALL_DR_JAN_URL } from '@/lib/site'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    {
      href: JUST_CALL_DR_JAN_URL,
      label: 'Homes That Did Not Sell',
      external: true,
    },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <div className="bg-primary text-primary-foreground text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold">
            Dr. Jan Duffy · Las Vegas REALTOR® · Nevada License S.0197614.LLC
          </span>
        </div>
      </div>

      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex flex-col flex-shrink-0">
              <span className="text-2xl font-black text-gray-900 leading-tight">
                Dr. Jan Duffy
              </span>
              <span className="text-xs text-gray-700 font-semibold">
                Las Vegas Real Estate Agent
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {mainNavItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:7025001064"
                className="hidden sm:flex items-center gap-2 bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--color-cta-hover)] transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>(702) 500-1064</span>
              </a>
              <a
                href="tel:7025001064"
                className="sm:hidden flex items-center justify-center w-12 h-12 bg-[var(--color-cta)] text-[var(--color-cta-foreground)] rounded-lg font-bold hover:bg-[var(--color-cta-hover)] transition-colors shadow-md"
                aria-label="Call (702) 500-1064"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {mainNavItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
