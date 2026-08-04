import Link from 'next/link'
import { APP } from '@/lib/config'
import { PRIMARY_NAV } from '@/lib/site'
import AnnouncementBar from './AnnouncementBar'

function OwlMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 3.6 L6.4 1.2 Q4.4 3.4 3.4 6.8 Q2.4 10.2 2.4 14.5 L2.4 20.4 Q2.4 21.6 3.6 21.6 L20.4 21.6 Q21.6 21.6 21.6 20.4 L21.6 14.5 Q21.6 10.2 20.6 6.8 Q19.6 3.4 17.6 1.2 Z M8.7 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M15.3 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M11.15 15.3 L12.85 15.3 L12 18.6 Z"
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
        <span className="ml-1.5 border border-hairline bg-surface-1 px-1.5 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wider text-ink-muted">
          ADE
        </span>
      </span>
    </span>
  )
}

const MOBILE_EXTRA: { label: string; href: string }[] = []

export default function Navbar() {
  return (
    <header>
      <AnnouncementBar />
      <div className="border-b border-hairline bg-canvas/85 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Athena ADE home">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 text-sm text-ink-muted md:flex">
            {PRIMARY_NAV.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={APP.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Athena on GitHub"
              className="hidden h-10 w-10 place-items-center bg-surface-1 text-ink transition-colors hover:bg-surface-2 sm:grid"
            >
              <svg viewBox="0 0 16 16" width="17" height="17" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <Link href="/download" className="btn btn-primary">
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
                {MOBILE_EXTRA.map((link) => (
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
