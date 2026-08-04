'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** ms before the reveal transition starts once in view */
  delay?: number
  /** initial translateY offset in px */
  y?: number
}

/** Fades + lifts children into view on first scroll. Reduced-motion users see content immediately. */
export default function Reveal({ children, className = '', delay = 0, y = 18 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -48px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? 'none' : `translateY(${y}px)`,
    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
  }

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
