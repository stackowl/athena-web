import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Claude Code in Athena',
  description:
    'Run Claude Code in isolated worktrees, fan multiple Claude agents across branches, review each diff in isolation, and keep session history.'
}

export default function ClaudeCodePage() {
  return (
    <DocsArticle
      title="Claude Code in Athena"
      lede="Run Claude Code in isolated worktrees — fan multiple Claude agents across branches, review each diff in isolation, and keep session history."
    >
      <p>
        Claude Code runs in Athena the way it runs in your terminal — same prompts, same permissions,
        same subscription — plus the things a solo terminal can&apos;t give you: isolated worktrees,
        multiple Claude agents fanning across branches, isolated diff review, and preserved session
        history.
      </p>

      <h2 id="isolated-worktrees">Isolated worktrees</h2>
      <p>
        Each Claude agent works in its own worktree from the same base commit. Two Claude agents can
        edit the same file at the same time without ever touching each other&apos;s changes.
      </p>

      <h2 id="fan-out">Fan out multiple Claude agents</h2>
      <p>
        Spawn as many Claude agents as you need — several on one task to compare approaches, or one
        per branch for parallel features.
      </p>
      <pre>{`athena session add agent --model claude --worktree claude-auth
athena session add agent --model claude --worktree claude-db`}</pre>

      <h2 id="review-diffs">Review each diff in isolation</h2>
      <p>
        Every Claude agent&apos;s changes land on its own branch. Open the diff viewer to review each
        one line-by-line, add inline comments, and merge only what you want. See the{' '}
        <Link href="/docs/review/diff-viewer">Diff viewer</Link>.
      </p>

      <h2 id="session-history">Session history preserved</h2>
      <p>
        Claude&apos;s conversation and context are preserved per worktree, so an agent picks up where
        it left off after a restart — no re-briefing, no lost context. See{' '}
        <Link href="/docs/agents/session-history">Agent session history</Link>.
      </p>

      <Callout type="success" title="One of 35+">
        <p>
          Claude Code is one of the <Link href="/docs/agents/supported">35+ supported CLIs</Link> —
          run it in the same session as Codex, OpenCode, and Pi.
        </p>
      </Callout>
    </DocsArticle>
  )
}
