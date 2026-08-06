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
    <div className={`relative ${className}`}>
      {children}
    </div>
  )
}
