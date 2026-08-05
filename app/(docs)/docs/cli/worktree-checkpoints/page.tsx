import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Worktree checkpoints',
  description:
    'Snapshot a worktree before risky agent work so you can roll back instantly if things go sideways.'
}

export default function WorktreeCheckpointsPage() {
  return (
    <DocsArticle
      title="Worktree checkpoints"
      lede="Snapshot a worktree before risky work so you can roll back instantly if things go sideways."
    >
      <p>
        A checkpoint captures the state of a worktree — files, branch, and uncommitted work — at a
        moment in time. It&apos;s insurance for the situations where an agent goes further than you
        wanted and you want a clean way back.
      </p>

      <h2 id="create">Create a checkpoint</h2>
      <pre>{`athena worktree checkpoint create <id> --message "before bot refactor"`}</pre>

      <h2 id="rollback">Roll back</h2>
      <pre>{`athena worktree checkpoint list <id>
athena worktree checkpoint restore <id> <checkpoint>`}</pre>
      <p>
        Restoring resets the worktree to the checkpoint&apos;s state. Any work done after the
        checkpoint is kept out of the way — the working tree is restored from the snapshot.
      </p>

      <h2 id="when">When to use them</h2>
      <ul>
        <li>Before handing an agent a large, ambiguous refactor.</li>
        <li>Before a destructive operation like a wide search-and-replace.</li>
        <li>At milestones inside a long session, so you can rewind to a known-good state.</li>
      </ul>

      <Callout type="info" title="Not a git replacement">
        <p>
          Checkpoints are not branches and don&apos;t show up in git history. For work you want to
          keep forever, review and merge the diff like any other{' '}
          <Link href="/docs/model/worktrees">worktree</Link> change.
        </p>
      </Callout>
    </DocsArticle>
  )
}
