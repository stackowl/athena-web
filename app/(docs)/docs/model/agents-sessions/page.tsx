import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Agents & sessions',
  description:
    'A session is a workspace plus the agents that work on it. Each agent gets its own worktree, context, and mission — and you can mix providers in one session.'
}

export default function AgentsSessionsPage() {
  return (
    <DocsArticle
      title="Agents & sessions"
      lede="A session is a workspace plus the agents that work on it. Mix providers, keep no lock-in."
    >
      <p>
        A <strong>session</strong> is a workspace plus the agents that work on it. Opening a project
        and creating a session wires the two together: the workspace holds the board and the worktrees,
        and the session holds the agents that are doing the work.
      </p>

      <h2 id="each-agent">Each agent gets its own everything</h2>
      <ul>
        <li>
          <strong>Its own isolated worktree</strong> — a private checkout and branch, so agents never
          collide.
        </li>
        <li>
          <strong>Its own context</strong> — a fresh prompt/context window per agent, so one agent&apos;s
          history never bleeds into another&apos;s.
        </li>
        <li>
          <strong>Its own mission</strong> — a briefing scoped to what you want that agent to do.
        </li>
      </ul>

      <h2 id="mix-providers">Mix providers in one session</h2>
      <p>
        Athena orchestrates agent CLIs you already use — Claude Code, Codex, OpenCode, Pi, and dozens
        more — side by side in the same session. There&apos;s no requirement to standardize on one
        provider. Race them on the same bug, or split the work by strength.
      </p>
      <pre>{`athena session add agent --model claude   --worktree claude-fix
athena session add agent --model codex    --worktree codex-fix
athena session add agent --model opencode --worktree opencode-fix
athena session add agent --model pi       --worktree pi-fix`}</pre>

      <h2 id="no-lock-in">Drivers are adapters, not lock-in</h2>
      <p>
        Each provider is a <strong>driver</strong> — a thin adapter over that CLI. There is no
        proprietary runtime and no migration tax. Any agent CLI you can run from a terminal, Athena can
        run in a session; if your stack changes, your session setup stays the same.
      </p>

      <h2 id="session-flow">Session flow</h2>
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Create a session.</strong> Point it at a repo and give it a name.
          </p>
        </li>
        <li>
          <p>
            <strong>Add agents.</strong> Attach one or more agents — mixed across providers — each with
            its own worktree and briefing.
          </p>
        </li>
        <li>
          <p>
            <strong>Track.</strong> Their branches, commits, and PRs stream onto the session&apos;s
            board.
          </p>
        </li>
        <li>
          <p>
            <strong>Merge.</strong> Review the diffs in isolation and merge the winners.
          </p>
        </li>
      </ol>

      <Callout type="info" title="Reopening a session">
        <p>
          Sessions persist. Reopening Athena restores the session, the board, and each agent&apos;s
          worktree exactly as you left them — see{' '}
          <a href="/docs/model/session-restore">Session restore</a>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
