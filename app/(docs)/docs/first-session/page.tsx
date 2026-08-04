import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Your first 3-agent session',
  description: 'From a fresh install to three agents racing on the same bug — in about five minutes.'
}

export default function FirstSessionPage() {
  return (
    <DocsArticle
      title="Your first 3-agent session"
      lede="From a fresh install to three agents racing on the same bug — in about five minutes."
    >
      <p>
        This is the most important page in these docs. It gets you from nothing to a running session
        with three agents working in parallel, and it teaches the core loop you&apos;ll use every day:
        <strong> spawn, track, merge</strong>.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>Athena installed — see <a href="/docs/install">Install</a>.</li>
        <li>
          At least one agent CLI on your PATH (Claude Code, Codex, or OpenCode). If you have all
          three, even better.
        </li>
        <li>A small project with a real bug you can have an agent fix.</li>
      </ul>

      <h2 id="create-a-session">1. Create a session</h2>
      <p>
        A session is a workspace plus the agents that work on it. Open the project, then create a
        session and point it at the repo.
      </p>
      <pre>{`athena session create --name fix-login-bug --path ./my-app`}</pre>

      <h2 id="add-agents">2. Add three agents</h2>
      <p>
        Each agent gets its own isolated worktree from the same base commit. Add three, mixed across
        providers:
      </p>
      <pre>{`athena session add agent --model claude --worktree claude-fix
athena session add agent --model codex   --worktree codex-fix
athena session add agent --model opencode --worktree opencode-fix`}</pre>

      <h2 id="brief-them">3. Brief them on the same task</h2>
      <p>
        Send each agent the identical instruction. The point of racing three agents is that they take
        different paths to the same target.
      </p>
      <pre>{`Fix the login redirect so a session survives a page refresh.
Keep the change small and add a test for the regression.`}</pre>

      <h2 id="track">4. Watch the board</h2>
      <p>
        Branches, commits, and PRs stream into one board. You see in a glance where each agent is and
        what it has touched — no tab-juggling.
      </p>

      <h2 id="merge">5. Review and merge the winner</h2>
      <p>
        Review each diff in isolation, then merge the winner. Athena coordinates the merge — it never
        guesses for you.
      </p>

      <Callout type="success" title="Done">
        <p>
          You just ran three parallel agents. From here, you can mix providers, review AI diffs
          line-by-line, or move agents off the laptop. If you hit a snag, see{' '}
          <a href="/docs/troubleshooting">Troubleshooting & FAQ</a>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
