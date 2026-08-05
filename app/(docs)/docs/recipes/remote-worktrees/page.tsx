import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Work on a remote machine over SSH',
  description:
    'Point a heavy build or test workload at a remote box and keep the review experience on your laptop.'
}

export default function RemoteWorktreesPage() {
  return (
    <DocsArticle
      title="Work on a remote machine over SSH"
      lede="Run heavy agent workloads on a remote box while keeping the review experience on your laptop."
    >
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Add the machine as an SSH target.</strong> Give it a label and host; Athena uses
            your SSH agent for keys.
          </p>
        </li>
        <li>
          <p>
            <strong>Clone or open the repo there.</strong> Choose a base directory on the remote and
            open the project — the worktree lives on the box.
          </p>
        </li>
        <li>
          <p>
            <strong>Spawn agents on the remote.</strong> Pick the SSH target as the worktree
            location. The agent runs builds and tests with the remote machine&apos;s resources.
          </p>
        </li>
        <li>
          <p>
            <strong>Review locally.</strong> Commits, diffs, and attribution stream back into your
            laptop&apos;s board. Merge from there.
          </p>
        </li>
      </ol>

      <Callout type="info" title="Why you&apos;d do this">
        <p>
          Big test suites, GPU work, or repos that don&apos;t fit on a laptop. The agent gets real
          hardware; you keep the ergonomics of your own machine.
        </p>
      </Callout>

      <Callout title="Related">
        <p>
          Setup details and requirements: <Link href="/docs/ssh">SSH worktrees</Link>. For a shared
          always-on setup, see{' '}
          <Link href="/docs/remote-servers">Remote Athena Servers</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
