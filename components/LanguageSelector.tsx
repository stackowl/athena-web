'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from './LanguageContext'
import type { Language } from '@/lib/i18n'

function UKFlag() {
  return (
    <svg className="h-3.5 w-5 rounded-xs" viewBox="0 0 640 480" fill="none" aria-hidden>
      <rect width="640" height="480" fill="#012169" />
      <path d="M0 0l640 480M640 0L0 480" stroke="#fff" strokeWidth="60" />
      <path d="M0 0l640 480M640 0L0 480" stroke="#C8102E" strokeWidth="40" />
      <path d="M320 0v480M0 240h640" stroke="#fff" strokeWidth="100" />
      <path d="M320 0v480M0 240h640" stroke="#C8102E" strokeWidth="60" />
    </svg>
  )
}

function NLFlag() {
  return (
    <svg className="h-3.5 w-5 rounded-xs" viewBox="0 0 640 480" fill="none" aria-hidden>
      <rect width="640" height="160" fill="#21468B" y="320" />
      <rect width="640" height="160" fill="#FFFFFF" y="160" />
      <rect width="640" height="160" fill="#AE1C28" y="0" />
    </svg>
  )
}

const LANGUAGES: { code: Language; label: string; flag: React.ReactNode }[] = [
  { code: 'en', label: 'English (US)', flag: <UKFlag /> },
  { code: 'nl', label: 'Nederlands', flag: <NLFlag /> },
]

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        className="inline-flex items-center gap-2 rounded-md border border-hairline bg-surface-1 px-2.5 py-1.5 text-xs font-medium text-ink transition-colors hover:border-hairline hover:bg-surface-2"
      >
        {currentLang.flag}
        <span className="uppercase tracking-wider">{currentLang.code}</span>
        <svg
          className={`h-3 w-3 text-ink-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-md border border-hairline bg-canvas p-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 animate-in fade-in zoom-in-95 duration-100">
          {LANGUAGES.map((l) => {
            const isSelected = l.code === lang
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLang(l.code)
                  setIsOpen(false)
                }}
                className={`flex w-full items-center justify-between gap-2.5 rounded-sm px-2.5 py-2 text-xs transition-colors ${
                  isSelected
                    ? 'bg-surface-2 text-primary font-medium'
                    : 'text-ink-muted hover:bg-surface-1 hover:text-ink'
                }`}
              >
                <div className="flex items-center gap-2">
                  {l.flag}
                  <span>{l.label}</span>
                </div>
                {isSelected && (
                  <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
