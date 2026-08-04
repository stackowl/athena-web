'use client'

import { useState } from 'react'
import { APP } from '@/lib/config'

/**
 * Early-access waitlist email capture. Posts to APP.waitlistEndpoint when
 * configured; otherwise confirms locally so the page works without a backend.
 */
export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = email.trim()
    if (!value || status === 'submitting') {
      return
    }

    setStatus('submitting')
    try {
      if (APP.waitlistEndpoint) {
        const res = await fetch(APP.waitlistEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: value })
        })
        if (!res.ok) {
          throw new Error(`waitlist request failed: ${res.status}`)
        }
      }
      setStatus('done')
    } catch {
      setStatus('error')
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

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
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
      <button type="submit" disabled={status === 'submitting'} className="btn btn-primary">
        {status === 'submitting' ? 'Joining…' : 'Request early access'}
      </button>
      {status === 'error' && (
        <p className="body-sm text-[#ff5577]">
          Couldn&apos;t save your email — check the address and try again.
        </p>
      )}
    </form>
  )
}
