'use client'

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string
      reset: (widgetId: string) => void
    }
  }
}

export type TurnstileHandle = { reset: () => void }

type Props = {
  onToken: (token: string) => void
  theme?: 'light' | 'dark'
}

/** Cloudflare Turnstile widget. Renders nothing until a site key is set. */
const Turnstile = forwardRef<TurnstileHandle, Props>(function Turnstile(
  { onToken, theme = 'dark' },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string>('')
  const onTokenRef = useRef(onToken)
  onTokenRef.current = onToken

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.reset(widgetId.current)
      }
    }
  }))

  useEffect(() => {
    if (!siteKey) return

    let mounted = true

    const render = () => {
      if (!mounted || !containerRef.current || !window.turnstile) return
      try {
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token: string) => onTokenRef.current(token),
          'expired-callback': () => onTokenRef.current(''),
          'error-callback': () => onTokenRef.current('')
        })
      } catch {
        // script may not be ready yet; a later state change re-runs the effect
      }
    }

    if (window.turnstile) {
      render()
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = render
    document.head.appendChild(script)

    return () => {
      mounted = false
      if (widgetId.current && window.turnstile) {
        window.turnstile.reset(widgetId.current)
      }
    }
  }, [siteKey, theme])

  if (!siteKey) return null
  return <div ref={containerRef} aria-hidden="true" />
})

export default Turnstile
