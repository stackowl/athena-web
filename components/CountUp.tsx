'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  to: number
  duration?: number
  suffix?: string
}

/** Counts 0 → `to` once when scrolled into view. Reduced-motion users get the final value. */
export default function CountUp({ to, duration = 1400, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }
        io.disconnect()
        if (reduced) {
          setValue(to)
          return
        }
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration)
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) {
            raf = requestAnimationFrame(tick)
          }
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return (
    <span ref={ref} className="stat-num">
      {value}
      {suffix}
    </span>
  )
}
