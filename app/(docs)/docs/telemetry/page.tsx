import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Privacy & Telemetry',
  description:
    'Athena is local-first: no account, no sign-up, and opt-in telemetry that you control. Here is exactly what leaves your machine.'
}

export default function TelemetryPage() {
  return (
    <DocsArticle
      title="Privacy & Telemetry"
      lede="Local-first by default: no account, no sign-up, and telemetry that is opt-in and clear."
    >
      <h2 id="what-stays-local">What stays on your machine</h2>
      <ul>
        <li>Your worktrees, sessions, diffs, and the Athena Ledger.</li>
        <li>Prompts and agent output — they go to the agent provider you configured, not to Athena.</li>
        <li>Credentials and SSH keys. Athena never stores or uploads your secrets.</li>
      </ul>

      <h2 id="what-leaves">What leaves your machine</h2>
      <ul>
        <li>Nothing by default. Athena is local-first; the desktop app doesn&apos;t phone home.</li>
        <li>
          Update checks and crash reports, if you enable them, carry only version and platform
          info — never project or prompt content.
        </li>
      </ul>

      <h2 id="opt-in">Telemetry is opt-in</h2>
      <p>
        When you do enable telemetry, you choose the level. Each option is off until you turn it on,
        and turning it off is immediate — no delayed uploads, no re-arming.
      </p>

      <h2 id="agent-providers">A note on agent providers</h2>
      <p>
        Your code and prompts are sent to the agent CLIs you run (Claude Code, Codex, OpenCode, and
        friends) under those providers&apos; own terms. That traffic is between you and the provider
        — Athena orchestrates it, it doesn&apos;t relay it.
      </p>

      <Callout type="success" title="Local-first and MIT">
        <p>
          Athena is open source under the MIT license. If you care about what the binary does, the
          source is on <a href="https://github.com/stackowl/athena" target="_blank" rel="noreferrer">GitHub</a> and you can build it yourself.
        </p>
      </Callout>
    </DocsArticle>
  )
}
