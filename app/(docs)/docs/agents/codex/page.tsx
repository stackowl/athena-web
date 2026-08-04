import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Codex in Athena',
  description:
    'Run Codex agents side-by-side in their own worktrees and track every commit and PR on the board.'
}

export default function CodexPage() {
  return (
    <DocsArticle
      title="Codex in Athena"
      lede="Run Codex agents side-by-side in their own worktrees and track their commits and PRs on the board."
    >
      <p>
        Run Codex agents side-by-side in their own worktrees — alongside Claude Code, OpenCode, Pi,
        or another Codex agent — and watch every commit and PR land on the shared board.
      </p>

      <h2 id="add-a-codex-agent">Add a Codex agent</h2>
      <p>
        Adding Codex to a session gives it a fresh worktree, a terminal, and its own column on the
        board. It uses the OpenAI account you already have.
      </p>
      <pre>{`athena session add agent --model codex --worktree codex-fix`}</pre>

      <h2 id="track-on-the-board">Track commits and PRs on the board</h2>
      <p>
        Everything Codex produces — branches, commits, PRs — streams into the board next to the work
        of every other agent. No tab-juggling to see who did what.
      </p>

      <h2 id="alongside-other-providers">Alongside other providers</h2>
      <p>
        Codex and Claude Code can work the same task in parallel; you review each diff in isolation
        and pick the winner. Athena coordinates the merge — it never guesses for you.
      </p>

      <Callout title="Bring your own OpenAI plan">
        <p>
          Codex uses your existing OpenAI subscription and API credentials. Athena adds no account
          and no extra billing — see <Link href="/docs/agents/supported">Supported agents</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
