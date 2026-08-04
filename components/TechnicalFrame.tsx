import type { ReactNode } from 'react'
import { LineV, Hatch } from './Gridline'

/**
 * Technical/blueprint page frame — wraps a page's content with the signature
 * "lines and stuff" look from /download:
 *   - vertical hairline borders on the outer edges
 *   - diagonal-hatch bands on the far left/right columns (lg+)
 *   - dashed vertical gridlines aligned to the content column edges
 * Children render full-width and keep their own centering; the decorations
 * sit behind them (pointer-events: none).
 */
export default function TechnicalFrame({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative border-x border-hairline ${className}`}>
      {/* outer hatch bands */}
      <Hatch className="pointer-events-none absolute inset-y-0 left-0 hidden w-[8.333%] text-surface-2 lg:block" />
      <Hatch className="pointer-events-none absolute inset-y-0 right-0 hidden w-[8.333%] text-surface-2 lg:block" />

      {/* flanking dashed gridlines, aligned to the content column */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <div className="mx-auto flex h-full max-w-6xl justify-between px-4 sm:px-6">
          <LineV className="text-hairline" />
          <LineV className="text-hairline" />
        </div>
      </div>

      {/* content — a 1px dashed hairline separates stacked sections (like /download) */}
      <div className="divide-y divide-dashed divide-hairline">{children}</div>
    </div>
  )
}
