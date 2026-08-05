import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Athena CLI overview',
  description:
    'The athena binary on your PATH: sessions, worktrees, terminals, and orchestration from the shell.'
}

export default function CliOverviewPage() {
  return (
    <DocsArticle
      title="Athena CLI overview"
      lede="The athena binary on your PATH: sessions, worktrees, terminals, and orchestration from the shell — GUI optional."
    >
      <p>
        Athena ships a <code>athena</code> binary alongside the desktop app. It talks to the same
        engine, so anything you can do from the board you can script from a terminal — handy for
        automation, CI, and people who live in the shell.
      </p>

      <h2 id="first-commands">First commands</h2>
      <pre>{`athena --help          # list top-level commands
athena session list    # show all sessions
athena worktree list   # show all worktrees and their branches
athena agent spawn --cli codex "Fix the flaky login test"`}</pre>

      <h2 id="what-you-can-do">What you can drive from the CLI</h2>
      <ul>
        <li>
          <strong>Sessions and worktrees.</strong> Create, list, pause, and delete; every operation
          is reflected live in the desktop board.
        </li>
        <li>
          <strong>Agents.</strong> Spawn, resume, and hibernate agents; feed them new tasks without
          touching the app.
        </li>
        <li>
          <strong>Terminals.</strong> Send keystrokes and wait for output or idle states in any
          worktree terminal.
        </li>
        <li>
          <strong>Automation.</strong> Schedule or trigger orchestration runs — see{' '}
          <Link href="/docs/cli/orchestration">Orchestration</Link> and{' '}
          <Link href="/docs/cli/automations">Scheduled automations</Link>.
        </li>
      </ul>

      <h2 id="no-gui">Running without the GUI</h2>
      <p>
        You can install the <code>athena</code> binary standalone and drive sessions and worktrees
        entirely from the shell. The engine runs the same either way; the desktop app is a window
        onto it.
      </p>

      <Callout title="Next">
        <p>
          Every command, flag, and exit code is on the{' '}
          <Link href="/docs/cli/reference">CLI reference</Link> page.
        </p>
      </Callout>
    </DocsArticle>
  )
}
