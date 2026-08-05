import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'SSH worktrees',
  description:
    'Run agents on a remote machine over SSH and drive them from the Athena window on your laptop.'
}

export default function SshPage() {
  return (
    <DocsArticle
      title="SSH worktrees"
      lede="Run agents on a remote machine and drive them from the Athena window on your laptop."
    >
      <p>
        An SSH target is a machine you control that Athena can reach over SSH. Worktrees spawned on a
        target live on that machine: the agent edits, runs builds, and executes commands there, while
        the board and diff review stay in your local Athena window.
      </p>

      <h2 id="add-target">Add an SSH target</h2>
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Open the target picker.</strong> In the worktree dropdown, choose{' '}
            <strong>Add SSH target</strong>.
          </p>
        </li>
        <li>
          <p>
            <strong>Point it at a machine.</strong> Give it a label, a host (or <code>user@host</code>),
            and a port. Athena reuses your SSH agent and keys — no passwords stored.
          </p>
        </li>
        <li>
          <p>
            <strong>Test the connection.</strong> Athena checks the key, then lets you pick a base
            directory for worktrees.
          </p>
        </li>
      </ol>

      <h2 id="spawn-remote">Spawn a worktree on a target</h2>
      <p>
        When you spawn an agent, pick the SSH target as the worktree location. Athena clones the repo
        there and creates a branch — same as a local worktree, just on the remote box.
      </p>

      <h2 id="requirements">What the remote needs</h2>
      <ul>
        <li>SSH server running, with key-based auth for your user.</li>
        <li>Git installed, plus any agent CLIs you want to run there (Claude Code, Codex, etc.).</li>
        <li>Enough disk for the repositories and enough RAM for the agents you fan out.</li>
      </ul>

      <Callout type="warn" title="Security">
        <p>
          A machine you can SSH into is a machine an agent can act on. Only add targets you trust,
          and make sure your agent CLIs are authenticated with the right (least-privilege) accounts.
        </p>
      </Callout>

      <Callout title="Next">
        <p>
          For a full shared setup with multiple people, see{' '}
          <Link href="/docs/remote-servers">Remote Athena Servers</Link>. For a hands-on walkthrough,
          try the <Link href="/docs/recipes/remote-worktrees">remote worktree recipe</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
