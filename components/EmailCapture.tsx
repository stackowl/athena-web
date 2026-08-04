'use client'

import { useRef, useState } from 'react'
import Turnstile, { type TurnstileHandle } from '@/components/Turnstile'

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

/**
 * Early-access waitlist email capture. Submits to the local /api/waitlist
 * route, which enforces the Turnstile bot check before forwarding to the
 * configured waitlist backend.
 */
export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
  const turnstileRef = useRef<TurnstileHandle>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = email.trim()
    if (!value || status === 'submitting') {
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, token })
      })
      if (!res.ok) {
        throw new Error(`waitlist request failed: ${res.status}`)
      }
      setStatus('done')
    } catch {
      setStatus('error')
      turnstileRef.current?.reset()
      setToken('')
    }
  }

  if (status === 'done') {
    return (
      <div className="border border-hairline bg-surface-1 p-6 text-center">
        <p className="headline text-ink">You&apos;re on the list</p>
        <p className="body mt-2 text-ink-muted">
          We&apos;ll email you an invite when the early access window opens.
        </p>
      </div>
    )
  }

  const botCheckPending = Boolean(SITE_KEY) && !token

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === 'submitting'}
          className="h-11 flex-1 border border-hairline bg-surface-1 px-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-[rgba(50,240,140,0.4)]"
        />
        <button
          type="submit"
          disabled={status === 'submitting' || botCheckPending}
          className="btn btn-primary"
        >
          {status === 'submitting' ? 'Joining…' : 'Request early access'}
        </button>
      </div>
      <Turnstile ref={turnstileRef} onToken={setToken} />
      {botCheckPending && (
        <p className="body-sm text-ink-muted">Complete the security check to join the list.</p>
      )}
      {status === 'error' && (
        <p className="body-sm text-[#ff5577]">
          Couldn&apos;t save your email — check the address and try again.
        </p>
      )}
    </form>
  )
}
