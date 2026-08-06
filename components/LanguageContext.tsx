'use client'

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { TRANSLATIONS, type Language, type TranslationSchema } from '@/lib/i18n'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: TranslationSchema
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: TRANSLATIONS['en'],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('athena_lang') as Language | null
    if (saved === 'en' || saved === 'nl') {
      setLangState(saved)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('athena_lang', newLang)
  }

  const t = TRANSLATIONS[lang] || TRANSLATIONS['en']

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
