'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  className?: string
}

/**
 * A horizontal hairline that draws itself in (scaleX 0 → 1) once it enters
 * the viewport. Used to connect numbered steps in a row. Reduced-motion users
 * see the line snap in instantly (global transition kill).
 */
export default function ConnectorLine({ className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} aria-hidden>
      <div
        className="h-px w-full origin-left bg-gradient-to-r from-transparent via-hairline to-transparent transition-transform duration-1000 ease-out"
        style={{ transform: shown ? 'scaleX(1)' : 'scaleX(0)' }}
      />
    </div>
  )
}
