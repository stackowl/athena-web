import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Session restore',
  description:
    'Reopening Athena restores sessions, the board, branches and PRs, and agent context exactly as you left them — and remote agents keep working even if you disconnect.'
}

export default function SessionRestorePage() {
  return (
    <DocsArticle
      title="Session restore"
      lede="Close the lid, come back, and everything is where you left it — even on remote hosts."
    >
      <p>
        Reopening Athena restores your workspace state as if you&apos;d never left. You don&apos;t
        rebuild context or hunt for where each agent was; it&apos;s all still there.
      </p>

      <h2 id="what-restores">What restores</h2>
      <ul>
        <li>
          <strong>Sessions</strong> — every session you had open, with its name and its attached
          agents.
        </li>
        <li>
          <strong>The board</strong> — branches, commits, and PRs, laid out the way you left them.
        </li>
        <li>
          <strong>Worktrees</strong> — each agent&apos;s isolated checkout and branch, intact.
        </li>
        <li>
          <strong>Agent context</strong> — each agent&apos;s conversation and mission, restored so it
          can keep going.
        </li>
      </ul>

      <h2 id="local-sessions">Local sessions</h2>
      <p>
        Quitting Athena doesn&apos;t throw anything away. The workspace is written to disk, and the
        next launch reloads it. Pick up an agent where it stopped, or continue reviewing a diff you
        were mid-way through.
      </p>

      <h2 id="remote-sessions">Remote sessions survive reconnects</h2>
      <p>
        Remote sessions — on a WSL, SSH, or remote host — keep running even when your connection
        drops. Athena applies <strong>backpressure</strong>: the agent keeps working on the host, and
        the reconnected UI simply catches up when you return. A dropped laptop or a flaky network
        won&apos;t stall the work.
      </p>

      <Callout type="success" title="Code stays where you choose">
        <p>
          With remote sessions the code lives on the host you picked, not on your machine. Restore
          brings back the same host, tree, and agent — wherever you open Athena from.
        </p>
      </Callout>
    </DocsArticle>
  )
}
