import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Race three agents on the same task',
  description: 'Give the same brief to three agents in separate worktrees, track on the board, review each diff, merge the winner.'
}

export default function ParallelAgentsPage() {
  return (
    <DocsArticle
      title="Race three agents on the same task"
      lede="Give the same brief to three agents in separate worktrees, track on the board, review each diff, merge the winner."
    >
      <p>
        This recipe shows how to race three parallel agents on the same bug or feature.
        Each agent gets its own isolated worktree, so they cannot interfere with each other.
      </p>

      <h2 id="create-session">1. Create a session</h2>
      <pre>{`athena session create --name race-auth-fix --path ./my-app`}</pre>

      <h2 id="add-agents">2. Add three agents</h2>
      <pre>{`athena session add agent --model claude --worktree claude-fix
athena session add agent --model codex   --worktree codex-fix
athena session add agent --model opencode --worktree opencode-fix`}</pre>

      <h2 id="brief">3. Brief them on the same task</h2>
      <pre>{`Fix the login redirect so a session survives a page refresh.
Keep the change small and add a test for the regression.`}</pre>

      <h2 id="track">4. Track the board</h2>
      <p>
        Watch the board for branches, commits, and PRs from each agent. You see in a glance
        where each agent is and what it has touched.
      </p>

      <h2 id="merge">5. Review and merge the winner</h2>
      <p>
        Review each diff in isolation, then merge the winner. Athena coordinates the merge — it never
        guesses for you.
      </p>

      <Callout type="success" title="Done">
        <p>
          You just raced three parallel agents. From here, you can mix providers, review AI diffs
          line-by-line, or move agents off the laptop.
        </p>
      </Callout>
    </DocsArticle>
  )
}