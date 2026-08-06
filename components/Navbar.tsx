'use client'

import Link from 'next/link'
import { APP } from '@/lib/config'
import { PRIMARY_NAV } from '@/lib/site'
import AnnouncementBar from './AnnouncementBar'
import LanguageSelector from './LanguageSelector'

function OwlMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 3.6 L6.4 1.2 Q4.4 3.4 3.4 6.8 Q2.4 10.2 2.4 14.5 L2.4 20.4 Q2.4 21.6 3.6 21.6 L20.4 21.6 Q21.6 21.6 21.6 20.4 L21.6 14.5 Q19.6 3.4 17.6 1.2 Z M8.7 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M15.3 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M11.15 15.3 L12.85 15.3 L12 18.6 Z"
        transform="translate(0 0.6)"
      />
    </svg>
  )
}

export function Logo({ size = 20 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-ink">
      <OwlMark size={size} />
      <span className="text-[15px] font-semibold tracking-tight">
        {APP.name}
      </span>
    </span>
  )
}

export default function Navbar() {
  return (
    <header className="border-none shadow-none">
      <AnnouncementBar />
      <div className="bg-canvas/85 backdrop-blur-md border-none shadow-none">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 relative border-none shadow-none">
          <div className="flex items-center">
            <Link href="/" aria-label="Athena home">
              <Logo />
            </Link>
          </div>

          {/* Desktop nav — centered */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
            {PRIMARY_NAV.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Link href="/download" className="inline-flex items-center justify-center rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-on-primary transition-opacity hover:opacity-85">
              Download
            </Link>

            {/* Mobile hamburger — no-JS via details/summary */}
            <details className="group relative md:hidden">
              <summary
                aria-label="Menu"
                className="grid h-10 w-10 list-none cursor-pointer place-items-center bg-surface-1 text-ink transition-colors hover:bg-surface-2 [&::-webkit-details-marker]:hidden"
              >
                <svg viewBox="0 0 16 16" width="17" height="17" fill="currentColor" aria-hidden>
                  <path d="M2 3.5h12v1.8H2V3.5zm0 3.6h12v1.8H2V7.1zm0 3.6h12v1.8H2v-1.8z" />
                </svg>
              </summary>
              <div className="absolute right-0 top-12 w-56 border border-hairline bg-canvas p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                {PRIMARY_NAV.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </nav>
      </div>
    </header>
  )
}
