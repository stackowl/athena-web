/**
 * Blueprint gridline primitives — shared by TechnicalFrame and the download
 * page. Subtle 1px dashed lines + diagonal-hatch used to give sections a
 * technical/"blueprint" feel. Stroke content via `className="text-..."`.
 */

/** Vertical dashed line, full parent height. */
export function LineV({ className = '' }: { className?: string }) {
  return (
    <svg width="1" height="100%" className={className} aria-hidden>
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="100%"
        stroke="currentColor"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Horizontal dashed rule, full width, 1px tall. */
export function LineHDashed({ className = '' }: { className?: string }) {
  return (
    <svg width="100%" height="1" className={className} aria-hidden>
      <line
        x1="0"
        y1="0.5"
        x2="100%"
        y2="0.5"
        stroke="currentColor"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Diagonal-hatch band — tints via `text-*` (currentColor). */
export function Hatch({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`[background-image:repeating-linear-gradient(125deg,transparent,transparent_6px,currentColor_6px,currentColor_7px)] ${className}`}
    />
  )
}
