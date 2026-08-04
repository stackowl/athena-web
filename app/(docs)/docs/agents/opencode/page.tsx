import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'OpenCode in Athena',
  description:
    'Run OpenCode agents in isolated worktrees, in the same session as Claude Code, Codex, and Pi.'
}

export default function OpenCodePage() {
  return (
    <DocsArticle
      title="OpenCode in Athena"
      lede="Run OpenCode agents in isolated worktrees in the same session as other CLIs."
    >
      <p>
        OpenCode runs in Athena inside its own isolated worktree, in the same session as Claude Code,
        Codex, and Pi. One board tracks them all.
      </p>

      <h2 id="isolated-worktrees">Isolated worktrees</h2>
      <p>
        Each OpenCode agent gets a fresh worktree from the current base commit, a terminal, and its
        own column on the board — so its experiments never collide with another agent&apos;s.
      </p>

      <h2 id="add-an-opencode-agent">Add an OpenCode agent</h2>
      <pre>{`athena session add agent --model opencode --worktree opencode-fix`}</pre>

      <h2 id="mix-freely">Mix freely</h2>
      <p>
        OpenCode works side-by-side with any other supported CLI. Keep it for the tasks where you
        prefer it, and let other agents handle the rest — the board stays the single view of
        everything.
      </p>

      <Callout title="Open source">
        <p>
          OpenCode is open source, so there is no vendor account or subscription to configure. See{' '}
          <Link href="/docs/agents/supported">Supported agents</Link> for the full list.
        </p>
      </Callout>
    </DocsArticle>
  )
}
