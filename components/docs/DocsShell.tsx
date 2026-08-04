'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { APP } from '@/lib/config'
import { DOCS_NAV, docsAdjacent } from '@/lib/docs'
import { Logo } from '../Navbar'

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M13.5 3.2A13 13 0 0 0 10.3 2l-.5 1a12 12 0 0 0-3.6 0L5.7 2a13 13 0 0 0-3.2 1.2A13.6 13.6 0 0 0 .2 11.5a13 13 0 0 0 4 2l.8-1.3a8.4 8.4 0 0 1-1.3-.6l.3-.2a9.2 9.2 0 0 0 7.9 0l.3.2c-.4.2-.8.4-1.3.6l.8 1.3a13 13 0 0 0 4-2A13.6 13.6 0 0 0 13.5 3.2zM5.5 10a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm5 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
    </svg>
  )
}

function PrevNext() {
  const path = usePathname()
  const { prev, next } = docsAdjacent(path)
  return (
    <nav className="mt-12 grid gap-4 pb-4 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.path}
          className="group rounded-lg border border-white/[0.08] p-4 transition-colors hover:border-white/[0.2]"
        >
          <div className="text-[13px] text-white/45">← Previous</div>
          <div className="mt-1 font-medium text-white/85 group-hover:text-white">{prev.title}</div>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.path}
          className="group rounded-lg border border-white/[0.08] p-4 text-right transition-colors hover:border-white/[0.2]"
        >
          <div className="text-[13px] text-white/45">Next →</div>
          <div className="mt-1 font-medium text-white/85 group-hover:text-white">{next.title}</div>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}

function TableOfContents() {
  const path = usePathname()
  const [items, setItems] = useState<{ id: string; label: string }[]>([])
  useEffect(() => {
    const found = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('.docs-content h2[id]')
    ).map((h) => ({ id: h.id, label: h.textContent ?? '' }))
    setItems(found)
  }, [path])
  if (items.length === 0) return null
  return (
    <aside className="docs-panel hidden w-[268px] shrink-0 border-l border-white/[0.06] px-5 py-12 xl:block">
      <div className="sticky top-24">
        <p className="docs-group-label mb-3">On this page</p>
        <ul className="space-y-2 border-l border-white/[0.08]">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className="-ml-px block border-l border-transparent py-0.5 pl-4 text-[13px] text-white/50 transition-colors hover:border-white/60 hover:text-white"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default function DocsShell({ children }: { children: ReactNode }) {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [path])

  const isDocsRoot = path === '/docs'

  return (
    <div className="docs-bg min-h-screen">
      {/* Fixed site header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/85">
        <div className="container mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 px-4">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Athena home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-6 text-sm sm:flex">
            <Link href="/docs" className={`text-[13px] font-medium transition-colors ${isDocsRoot ? 'docs-active-link' : 'text-white/80 hover:text-white'}`}>
              Docs
            </Link>
            <a
              href={APP.releasesUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden text-[13px] text-white/80 transition-colors hover:text-white md:block"
            >
              Changelog
            </a>
            <a
              href="https://discord.gg/fzjDKHxv8Q"
              target="_blank"
              rel="noreferrer"
              aria-label="Join Athena on Discord"
              className="hidden text-white/80 transition-colors hover:text-white lg:block"
            >
              <DiscordIcon />
            </a>
            <a
              href={APP.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Athena on GitHub"
              className="text-white/80 transition-colors hover:text-white"
            >
              <GithubIcon />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/download"
              className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-4 text-[13px] font-medium text-black transition-all hover:bg-white/90"
            >
              Download
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/[0.16] bg-white/[0.05] text-white/80 transition-colors hover:border-white/[0.24] hover:bg-white/[0.08] hover:text-white lg:hidden"
            >
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                {open ? <path d="M3 3l10 10M13 3 3 13" /> : <path d="M2 3.5h12M2 8h12M2 12.5h12" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="pt-14">
        <div className="mx-auto flex w-full max-w-[1400px]">
          {/* Sidebar */}
          {open && (
            <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setOpen(false)} />
          )}
          <aside
            className={`docs-panel fixed bottom-0 left-0 top-14 z-40 w-[268px] overflow-y-auto border-r border-white/[0.06] px-3 py-6 docs-scroll transition-transform lg:sticky lg:top-14 lg:z-auto lg:block lg:h-[calc(100dvh-3.5rem)] lg:translate-x-0 ${
              open ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <nav className="flex flex-col gap-5" aria-label="Docs">
              <Link href="/docs" className="docs-sidebar-item" data-active={isDocsRoot}>
                <span className="truncate text-sm font-medium">What is Athena?</span>
              </Link>
              {DOCS_NAV.map((g) => (
                <div key={g.group}>
                  <p className="docs-group-label mb-1 px-2">{g.group}</p>
                  <ul className="space-y-0.5">
                    {g.items.map((item) => {
                      const active = path === item.path
                      return (
                        <li key={item.path}>
                          <Link href={item.path} className="docs-sidebar-item" data-active={active}>
                            <span className="truncate">{item.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main ref={mainRef} className="min-w-0 flex-1 px-5 py-12 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-[820px]">{children}</div>
            <div className="mx-auto max-w-[820px]">
              <PrevNext />
            </div>
          </main>

          <TableOfContents />
        </div>
      </div>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-8 py-8 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>
            © {APP.year} {APP.product}. MIT license · v{APP.version}
          </p>
          <div className="flex gap-5">
            <a href={APP.githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">GitHub</a>
            <a href={APP.releasesUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Releases</a>
            <a href="https://discord.gg/fzjDKHxv8Q" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Discord</a>
            <Link href="/" className="transition-colors hover:text-white">Site</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
