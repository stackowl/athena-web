import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Pi in Athena',
  description:
    'Run Pi agents in their own worktrees within a session, alongside Claude Code, Codex, and OpenCode.'
}

export default function PiPage() {
  return (
    <DocsArticle
      title="Pi in Athena"
      lede="Run Pi agents in their own worktrees within a session, alongside Claude Code, Codex, and OpenCode."
    >
      <p>
        Pi agents run in their own worktrees inside the same session as Claude Code, Codex, and
        OpenCode. Each gets a terminal, a mission, and a column on the board — and none of them can
        step on another&apos;s files.
      </p>

      <h2 id="add-a-pi-agent">Add a Pi agent</h2>
      <pre>{`athena session add agent --model pi --worktree pi-fix`}</pre>

      <h2 id="its-own-worktree">Its own worktree</h2>
      <p>
        Pi works from a fresh worktree of the same base commit, so you can race it against another
        provider on the same task — same starting point, different approaches.
      </p>

      <h2 id="alongside-other-clis">Alongside other CLIs</h2>
      <p>
        Pi shares the board with Claude Code, Codex, and OpenCode agents. Review each diff in
        isolation, then merge the winner.
      </p>

      <Callout title="Mix providers">
        <p>
          No lock-in: Pi is one of the <Link href="/docs/agents/supported">35+ supported CLIs</Link>,
          and every agent in a session can come from a different provider.
        </p>
      </Callout>
    </DocsArticle>
  )
}
