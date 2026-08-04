import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Agent session history',
  description: 'Agent context and conversations persist across sessions — restore where you left off.'
}

export default function SessionHistoryPage() {
  return (
    <DocsArticle
      title="Agent session history"
      lede="Agent context and conversations persist across sessions — restore where you left off."
    >
      <p>
        A session is a workspace plus its agents. When you close Athena and come back the next day,
        the session is still there: the agents, their worktrees, their prompts, and where each one
        stopped. You resume the conversation instead of re-briefing from scratch.
      </p>

      <h2 id="resume">Resume where you left off</h2>
      <p>
        Reopen a saved session and each agent picks up with the context it had when you left. Branches,
        open diffs, and pending work on the board are intact, so nothing is lost between launches.
      </p>
      <pre>{`athena session list
athena session open --name fix-login-bug`}</pre>

      <h2 id="ledger">Attribution in the Athena Ledger</h2>
      <p>
        Every change an agent makes is tagged in the Athena Ledger with the agent, the model, the
        session, and when it happened. Session history therefore isn&apos;t just a resume point — it&apos;s
        an auditable record of <em>who</em> changed <em>what</em>, so you can trace any line back to the
        agent and conversation that produced it.
      </p>
      <ul>
        <li>Each change attributed to agent + model + session.</li>
        <li>Continues across sessions, so attribution survives a resume.</li>
        <li>Part of an append-only, opt-in audit log.</li>
      </ul>

      <Callout title="Ledger">
        <p>
          Session history and attribution are local-first and opt-in. The Ledger stays on the host you
          choose and is designed for EU AI Act AI Act Art. 50/26/4 readiness. See{' '}
          <a href="/docs/ledger/overview">Athena Ledger</a>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
