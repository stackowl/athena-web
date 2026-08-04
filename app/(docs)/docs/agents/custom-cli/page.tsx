import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Add a custom CLI agent',
  description:
    'Drivers are just adapters over agent CLIs. Add any CLI to a session and Athena orchestrates it in its own worktree.'
}

export default function CustomCliPage() {
  return (
    <DocsArticle
      title="Add a custom CLI agent"
      lede="Drivers are just adapters over agent CLIs. Add any CLI to a session, and it gets its own worktree, context, and mission."
    >
      <p>
        A driver is an adapter over a CLI. If you have an agent CLI that Athena does not wrap yet, it
        can still run in a session: it gets its own worktree, its own context, and its own mission —
        same as any built-in agent.
      </p>

      <h2 id="drivers-are-adapters">Drivers are adapters</h2>
      <p>
        Behind every supported agent sits a driver that knows how to spawn the CLI, hand it a
        worktree and a terminal, pass the mission prompt, and read its output back onto the board.
        Swap the CLI, swap the driver — nothing else changes.
      </p>

      <h2 id="how-it-works">How it works</h2>
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Keep the agent on PATH.</strong> Athena talks to agent CLIs the same way a
            terminal does.
          </p>
        </li>
        <li>
          <p>
            <strong>Add it to the session.</strong> It gets a worktree, a terminal, and a column on
            the board.
          </p>
        </li>
        <li>
          <p>
            <strong>Let Athena orchestrate it.</strong> Spawn, track, and merge apply exactly as they
            do for built-in agents.
          </p>
        </li>
      </ol>

      <Callout type="info" title="Roadmap">
        <p>
          A generic &quot;add custom CLI&quot; surface in the UI is on the roadmap. Today Athena ships
          drivers for the <Link href="/docs/agents/supported">35+ supported CLIs</Link>; if yours is
          missing, open an issue on{' '}
          <a href={APP.issuesUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </Callout>
    </DocsArticle>
  )
}
