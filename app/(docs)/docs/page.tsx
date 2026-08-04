import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'What is Athena?',
  description: `A 60-second pitch: who ${APP.product} is for and when to reach for it.`
}

export default function WhatIsAthenaPage() {
  return (
    <DocsArticle
      title="What is Athena?"
      lede="A 60-second pitch: who Athena is for and when to reach for it."
    >
      <p>
        Athena is a desktop IDE for running multiple AI coding agents side by side. Every task gets
        its own git worktree, its own agent terminal, and its own place on the board — so you can fan
        out work across Claude Code, Codex, OpenCode, Pi and friends, without stashing,
        branch-juggling, or losing flow.
      </p>

      <figure className="my-6">
        <div className="overflow-hidden rounded-lg border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screens/hero.jpg"
            alt="Athena main window: a board of worktrees with agent terminals and a diff view"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="mt-2 text-sm text-white/45">
          Athena main window: a board of worktrees, agent terminals, and a diff view
        </figcaption>
      </figure>

      <h2 id="when-to-use-athena">When to use Athena</h2>
      <ul>
        <li>You want three agents trying the same bug in parallel and to pick the winner.</li>
        <li>You want to review AI-generated diffs seriously before you ship them.</li>
        <li>
          You already pay for Claude Code, Codex, or OpenCode and want one place to orchestrate them.
        </li>
        <li>
          You want agents to run remotely — over SSH or on a self-hosted server — without giving up
          your IDE.
        </li>
      </ul>

      <h2 id="who-its-for">Who it&apos;s for</h2>
      <p>
        Athena is designed for people who already write code for a living and want to use AI as
        leverage — not as a replacement. It assumes you read diffs, care about commits, and keep a
        worktree tidy. If you&apos;re looking for a no-code tool, Athena is not that.
      </p>

      <h2 id="what-athena-is-not">What Athena is not</h2>
      <ul>
        <li>
          <strong>Not a model.</strong> Athena runs agents you already use — bring your own Claude,
          Codex, or OpenCode subscription.
        </li>
        <li>
          <strong>Not a git replacement.</strong> Every worktree is a real git worktree. You can{' '}
          <code>cd</code> in and use plain git whenever you want.
        </li>
        <li>
          <strong>Not a hosted VPS product.</strong> Athena runs on your desktop by default. Remote
          compute uses machines and cloud accounts you control —{' '}
          <Link href="/docs/ssh">SSH targets</Link> or{' '}
          <Link href="/docs/remote-servers">self-hosted Athena servers</Link>.
        </li>
        <li>
          <strong>Not another telemetry truck.</strong> There&apos;s no account, no sign-up, and no
          hidden tracking. Athena is local-first and MIT open source.
        </li>
      </ul>

      <Callout title="Next steps">
        <p>
          Head to <Link href="/docs/install">Install</Link>, then walk through{' '}
          <Link href="/docs/first-session">Your first 3-agent session</Link> — the single most
          important page in these docs. When you&apos;re ready to move agents off the laptop, start
          with <Link href="/docs/ways-to-run">Ways to run Athena</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
