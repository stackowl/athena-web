'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getDocsNav, docsAdjacent } from '@/lib/docs'
import { useLanguage } from '../LanguageContext'
import Footer from '../Footer'
import Navbar from '../Navbar'

function PrevNext() {
  const path = usePathname()
  const { lang } = useLanguage()
  const { prev, next } = docsAdjacent(path, lang)
  return (
    <nav className="mt-12 grid gap-4 pb-4 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.path}
          className="group rounded-lg border border-white/[0.08] p-4 transition-colors hover:border-white/[0.2]"
        >
          <div className="text-[13px] text-white/45">
            {lang === 'nl' ? '← Vorige' : '← Previous'}
          </div>
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
          <div className="text-[13px] text-white/45">
            {lang === 'nl' ? 'Volgende →' : 'Next →'}
          </div>
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
  const { lang } = useLanguage()
  const [items, setItems] = useState<{ id: string; label: string }[]>([])
  useEffect(() => {
    const found = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('.docs-content h2[id]')
    ).map((h) => ({ id: h.id, label: h.textContent ?? '' }))
    // eslint-disable-next-line react-hooks/set-state-in-effect -- DOM-driven TOC must sync after commit
    setItems(found)
  }, [path])
  if (items.length === 0) return null
  return (
    <aside className="docs-panel hidden w-[268px] shrink-0 border-l border-white/[0.06] px-5 py-12 xl:block">
      <div className="sticky top-24">
        <p className="docs-group-label mb-3">
          {lang === 'nl' ? 'Op deze pagina' : 'On this page'}
        </p>
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
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [prevPath, setPrevPath] = useState(path)
  if (prevPath !== path) {
    setPrevPath(path)
    setOpen(false)
  }
  const mainRef = useRef<HTMLElement>(null)

  const isDocsRoot = path === '/docs'
  const docsNav = getDocsNav(lang)

  return (
    <div className="docs-bg min-h-screen">
      <Navbar />

      <div className="flex w-full">
        {/* Sidebar */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setOpen(false)} />
        )}
        <aside
          className={`docs-panel fixed bottom-0 left-0 top-0 z-40 w-[268px] overflow-y-auto border-r border-white/[0.06] px-3 py-6 docs-scroll transition-transform lg:sticky lg:top-0 lg:z-auto lg:block lg:h-screen lg:translate-x-0 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-5" aria-label="Docs">
            <Link href="/docs" className="docs-sidebar-item" data-active={isDocsRoot}>
              <span className="truncate text-sm font-medium">
                {lang === 'nl' ? 'Wat is Athena?' : 'What is Athena?'}
              </span>
            </Link>
            {docsNav.map((g) => (
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.05] px-3 py-2 text-[13px] text-white/80 transition-colors hover:border-white/[0.2] hover:text-white lg:hidden"
          >
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              {open ? <path d="M3 3l10 10M13 3 3 13" /> : <path d="M2 3.5h12M2 8h12M2 12.5h12" />}
            </svg>
            Menu
          </button>
          <div className="mx-auto max-w-[820px]">{children}</div>
          <div className="mx-auto max-w-[820px]">
            <PrevNext />
          </div>
        </main>

        <TableOfContents />
      </div>

      <Footer className="border-t border-white/[0.06] bg-black" />
    </div>
  )
}
