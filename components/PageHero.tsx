import type { ReactNode } from 'react'

/**
 * Shared page hero — centered, display-xl title, pill eyebrow + atmosphere glow.
 * Mirrors the home/root hero so every page header feels identical.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: ReactNode
  lede: ReactNode
}) {
  return (
    <section className="relative overflow-hidden text-center">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
        <p
          className="anim-hero inline-flex items-center gap-2 border border-hairline bg-surface-1 px-3 py-1.5 text-ink-muted"
          style={{ animationDelay: '0ms' }}
        >
          <span className="caption leading-none">{eyebrow}</span>
        </p>
        <h1
          className="anim-hero display-xl mx-auto mt-8 max-w-4xl text-balance text-ink"
          style={{ animationDelay: '90ms' }}
        >
          {title}
        </h1>
        <p
          className="anim-hero body-lg mx-auto mt-8 max-w-2xl text-balance text-ink-muted"
          style={{ animationDelay: '180ms' }}
        >
          {lede}
        </p>
      </div>
    </section>
  )
}
