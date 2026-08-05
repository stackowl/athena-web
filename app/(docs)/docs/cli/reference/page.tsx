import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Athena CLI reference',
  description:
    'Every athena command, flag, and exit code — a quick lookup for scripting and day-to-day shell use.'
}

export default function CliReferencePage() {
  return (
    <DocsArticle
      title="Athena CLI reference"
      lede="Every athena command, flag, and exit code — quick lookup for scripting and shell use."
    >
      <h2 id="session">Session commands</h2>
      <pre>{`athena session list                 # list sessions
athena session create [--name NAME]
athena session open <id>
athena session close <id>`}</pre>

      <h2 id="worktree">Worktree commands</h2>
      <pre>{`athena worktree list                # all worktrees + branches
athena worktree create --repo PATH --branch NAME
athena worktree open <id>
athena worktree checkout <id>        # switch the active worktree
athena worktree checkpoint create <id> [--message MSG]`}</pre>

      <h2 id="agent">Agent commands</h2>
      <pre>{`athena agent spawn --cli <cli> [prompt...]
athena agent spawn --cli codex "Fix the flaky login test"
athena agent pause <id>
athena agent resume <id>
athena agent hibernate <id>          # freeze; keep context
athena agent list`}</pre>

      <h2 id="terminal">Terminal commands</h2>
      <pre>{`athena terminal send --terminal <id> --text "<cmd>" --enter
athena terminal wait --terminal <id> --for tui-idle --timeout-ms 60000
athena terminal list`}</pre>

      <h2 id="orchestration">Orchestration commands</h2>
      <pre>{`athena orchestrate run --spec FILE
athena automation create --name NAME --schedule "0 9 * * *" --cmd "..."
athena automation list
athena automation delete <id>`}</pre>

      <h2 id="global-flags">Global flags</h2>
      <ul>
        <li>
          <code>--json</code> — machine-readable output for scripting.
        </li>
        <li>
          <code>--server &lt;url&gt;</code> — target a remote Athena server instead of the local engine.
        </li>
        <li>
          <code>-v, --verbose</code> — debug-level logging.
        </li>
        <li>
          <code>--help</code> — command-specific help.
        </li>
      </ul>

      <h2 id="exit-codes">Exit codes</h2>
      <ul>
        <li>
          <code>0</code> — success.
        </li>
        <li>
          <code>1</code> — command failed (invalid input, agent error).
        </li>
        <li>
          <code>2</code> — usage error (unknown command or malformed flags).
        </li>
        <li>
          <code>3</code> — engine unreachable (server down or not authenticated).
        </li>
      </ul>

      <Callout type="info" title="Run athena --help">
        <p>
          This page tracks the stable surface. The binary is the source of truth —{' '}
          <code>athena &lt;command&gt; --help</code> always shows the exact flags for your installed
          version.
        </p>
      </Callout>
    </DocsArticle>
  )
}
