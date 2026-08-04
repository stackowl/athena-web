import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Diff viewer',
  description:
    'Review AI-generated diffs in isolation before you ship them — see exactly what each agent changed in its own worktree.'
}

export default function DiffViewerPage() {
  return (
    <DocsArticle
      title="Diff viewer"
      lede="Review AI-generated diffs in isolation before you ship them — see exactly what each agent changed in its own worktree."
    >
      <p>
        Every agent works in its own isolated worktree, so the diff for an agent is exactly what that
        agent changed — nothing mixed in from other agents, other branches, or your own edits.
      </p>

      <h2 id="one-diff-per-agent">One diff per agent</h2>
      <p>
        Each worktree starts from the same base commit, so Athena can show you the precise set of
        changes an agent produced in its run. You review the AI&apos;s output alone, before it can
        affect anything else.
      </p>
      <ul>
        <li>Side-by-side and unified views, with syntax highlighting.</li>
        <li>A file tree with per-file status — added, modified, deleted, renamed.</li>
        <li>Ignore whitespace, or filter the diff down to a single file or hunk.</li>
        <li>Binary files are flagged with their size change instead of a broken text diff.</li>
      </ul>

      <h2 id="staged-and-committed">Staged and committed changes</h2>
      <p>
        The viewer follows git: switch between unstaged, staged, and committed changes in the
        worktree, so you can walk an agent&apos;s session as a series of commits instead of one giant
        blob.
      </p>

      <h2 id="review-before-you-ship">Review before you ship</h2>
      <p>
        Approve a diff and commit it, or annotate it when something is off — the agent picks the
        comment up and fixes it in its own worktree. Nothing reaches main until you decide it does.
      </p>

      <Callout type="info" title="Next steps">
        <p>
          Leave line-level feedback on a diff with{' '}
          <Link href="/docs/review/annotate-ai-diff">Annotate AI Diff</Link>, and every change you
          approve is recorded in the <Link href="/docs/review/attribution">Athena Ledger</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}