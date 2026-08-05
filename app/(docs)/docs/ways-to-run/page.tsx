import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Ways to run Athena',
  description:
    'Your desktop, a remote machine over SSH, or a self-hosted server — pick the setup that fits how you work.'
}

export default function WaysToRunPage() {
  return (
    <DocsArticle
      title="Ways to run Athena"
      lede="Your desktop, a remote box over SSH, or a self-hosted server — the IDE looks the same, the agent work runs where you point it."
    >
      <p>
        Athena is a desktop app by default: agents run on your machine, in isolated worktrees, with
        the output streaming into the board. When you need more compute, a cleaner network boundary,
        or a shared place for a team, you point the same window at a remote machine instead.
      </p>

      <h2 id="local-desktop">Local desktop (default)</h2>
      <p>
        Install Athena on macOS, Windows, or Linux and agents run on your laptop. Zero setup, zero
        servers, fully local-first. Good for a single developer who wants agents next to their
        editor.
      </p>

      <h2 id="ssh">SSH worktrees</h2>
      <p>
        Register an SSH target and spawn worktrees that live on that machine — a big build box, a GPU
        instance, or your home server. The agent runs remotely; you watch and steer it from Athena on
        your laptop. See <Link href="/docs/ssh">SSH worktrees</Link>.
      </p>

      <h2 id="remote-servers">Remote Athena Servers</h2>
      <p>
        Stand up a dedicated Athena server on infrastructure you control and connect your desktop
        clients to it. This is the team setup: multiple people can share the same board, and compute
        stays off individual laptops. See{' '}
        <Link href="/docs/remote-servers">Remote Athena Servers</Link>.
      </p>

      <h2 id="hybrid">Mixing it up</h2>
      <p>
        These aren&apos;t exclusive. You can run your day-to-day agents locally and hand the heavy
        workloads to a remote target. Every worktree is a real git worktree, so nothing about how you
        review or merge changes based on where it ran.
      </p>

      <Callout type="info" title="What stays the same">
        <p>
          Review, attribution, the Athena Ledger, and the diff workflow are identical whether the
          work ran on your laptop or a server in another region. You review the result, not the
          hardware.
        </p>
      </Callout>
    </DocsArticle>
  )
}
