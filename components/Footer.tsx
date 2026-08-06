'use client'

import Link from 'next/link'
import { APP } from '@/lib/config'
import { FOOTER_COLUMNS } from '@/lib/site'
import { Logo } from './Navbar'
import { useLanguage } from './LanguageContext'

export default function Footer({
  className = 'border-t border-hairline bg-canvas'
}: {
  className?: string
}) {
  const { t } = useLanguage()

  return (
    <footer className={className}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="caption mt-4 max-w-xs leading-relaxed text-ink-muted">
              {APP.description}
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="caption text-ink-muted">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {col.links.map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link href={link.href} className="transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="micro mt-12 flex flex-col gap-3 pt-6 text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {APP.year} {APP.name}. {t.footer.rights}
          </p>
          <p>
            {APP.license} · v{APP.version}
          </p>
        </div>
      </div>
    </footer>
  )
}
