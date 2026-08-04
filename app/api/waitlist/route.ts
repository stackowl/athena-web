import { NextResponse } from 'next/server'
import { APP } from '@/lib/config'

const SECRET = process.env.TURNSTILE_SECRET_KEY ?? ''

async function passBotCheck(token: string): Promise<boolean> {
  // No secret configured yet -> skip verification so the site stays usable.
  if (!SECRET) return true

  const form = new URLSearchParams({ secret: SECRET, response: token })
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form
  })
  const data = (await res.json()) as { success?: boolean }
  return data.success === true
}

export async function POST(req: Request) {
  let body: { email?: unknown; token?: unknown }
  try {
    body = (await req.json()) as typeof body
  } catch {
    return NextResponse.json({ error: 'invalid request body' }, { status: 400 })
  }

  const email = String(body.email ?? '').trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'invalid email' }, { status: 400 })
  }

  if (!(await passBotCheck(String(body.token ?? '')))) {
    return NextResponse.json({ error: 'bot check failed' }, { status: 403 })
  }

  // Forward to the configured waitlist backend (e.g. Formspree) if present.
  if (APP.waitlistEndpoint) {
    await fetch(APP.waitlistEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
  }

  return NextResponse.json({ ok: true })
}
