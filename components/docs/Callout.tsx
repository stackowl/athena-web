import type { ReactNode } from 'react'

const ICONS = {
  info: (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 7.5v3.5M8 5h.01" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 6.4-4 4a.8.8 0 0 1-1.1 0l-2-2a.8.8 0 1 1 1.1-1.1L7 8.8l3.4-3.4a.8.8 0 1 1 1.1 1z" />
    </svg>
  ),
  warn: (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M8 1.5 15 13.5H1L8 1.5z" strokeLinejoin="round" />
      <path d="M8 6.5v3" strokeLinecap="round" />
      <path d="M8 11.5h.01" strokeLinecap="round" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M8 1l2 2h3a1 1 0 0 1 1 1v3l2 2-2 2v3a1 1 0 0 1-1 1H10l-2 2-2-2H3a1 1 0 0 1-1-1v-3l-2-2 2-2V4a1 1 0 0 1 1-1h3l2-2zm0 3v2h2V4H8zM4 8v2h2v1h4v-1h2V8H4z" />
    </svg>
  )
} as const

export default function Callout({
  title,
  type = 'info',
  children
}: {
  title?: ReactNode
  type?: keyof typeof ICONS
  children: ReactNode
}) {
  return (
    <aside className="my-6 rounded-lg border border-white/[0.1] bg-white/[0.03] p-4 text-sm text-white/75">
      {title && (
        <div className="mb-1 flex items-center gap-2 font-semibold text-white/85">
          <span className="inline-flex shrink-0 items-center text-white/70">{ICONS[type]}</span>
          {title}
        </div>
      )}
      <div>{children}</div>
    </aside>
  )
}
