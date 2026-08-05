import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Orchestration',
  description:
    'Define multi-agent workflows as specs: spawn agents, wait on their output, branch and coordinate — repeatable and scriptable.'
}

export default function OrchestrationPage() {
  return (
    <DocsArticle
      title="Orchestration"
      lede="Turn multi-agent work into a repeatable spec: spawn, wait, branch, and coordinate from one file."
    >
      <p>
        Orchestration is how you move from &ldquo;I started three agents by hand&rdquo; to
        &ldquo;this pipeline reliably runs the same way every time.&rdquo; An orchestration spec
        describes the agents to run, what to wait for, and how to react — and Athena executes it.
      </p>

      <h2 id="minimal-spec">A minimal spec</h2>
      <pre>{`# orchestrations/daily.yml
agents:
  - cli: codex
    prompt: "Audit the auth module for race conditions."
    worktree: audit/auth
steps:
  - wait: agent(audit/auth)
  - notify: discord
`}</pre>

      <h2 id="run-it">Run it</h2>
      <pre>{`athena orchestrate run --spec orchestrations/daily.yml`}</pre>
      <p>
        Athena spawns each agent in its own worktree, streams the results to the board, and runs the
        steps in order. The whole run stays visible and attributable in the Athena Ledger.
      </p>

      <h2 id="what-specs-can-do">What specs can do</h2>
      <ul>
        <li>Fan out several agents on one task and compare results.</li>
        <li>Gate a later step on an earlier agent finishing (or failing).</li>
        <li>Send notifications to Discord, email, or your inbox when runs finish.</li>
        <li>Reference existing worktrees instead of creating new ones.</li>
      </ul>

      <Callout type="info" title="Repeatable by design">
        <p>
          Because a spec is a file, the same orchestration can run on your laptop, on a CI runner,
          or on a remote Athena server — no UI needed.
        </p>
      </Callout>

      <Callout title="Next">
        <p>
          To run orchestrations on a timer, see{' '}
          <Link href="/docs/cli/automations">Scheduled automations</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
