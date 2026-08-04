import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Commit & push from Athena',
  description:
    'Branches, commits and PRs are tracked on the board — review, commit and push without leaving the app.'
}

export default function CommitPushPage() {
  return (
    <DocsArticle
      title="Commit & push from Athena"
      lede="Branches, commits and PRs are tracked on the board. Review, commit and push without leaving the app — Athena coordinates the merge, it never guesses for you."
    >
      <p>
        Each worktree is a real git checkout, so everything you do is regular git under the hood —
        with the board keeping every branch, commit, and PR in one place.
      </p>

      <h2 id="branches-commits-prs-on-the-board">Branches, commits &amp; PRs on the board</h2>
      <p>
        Every agent&apos;s worktree shows its branch name, its commit history, and the state of any
        open pull request. You see where each agent is without opening a terminal or a browser tab.
      </p>

      <h2 id="commit">Commit</h2>
      <ol className="docs-steps">
        <li>Open the worktree you want to ship.</li>
        <li>Review the diff and stage the files you want in the commit.</li>
        <li>Write a commit message and commit.</li>
      </ol>
      <p>
        Commits use your normal Git identity and signing configuration — to git, they are your
        commits, not the agent&apos;s.
      </p>

      <h2 id="push">Push</h2>
      <p>
        Push the branch to its remote from the board. The board updates the branch&apos;s status the
        moment the remote acknowledges it.
      </p>

      <h2 id="open-a-pull-request">Open a pull request</h2>
      <p>
        Once a branch has commits, open a pull request against its base. The PR appears on the board
        alongside the agent that produced the work.
      </p>

      <h2 id="athena-coordinates-the-merge">Athena coordinates the merge — it never guesses</h2>
      <p>
        When it&apos;s time to merge, Athena orchestrates the mechanics: it rebases, checks for
        conflicts, and runs your hooks and checks. But merging is a human action — Athena merges only
        the branch you approve, into the base you pick. If something conflicts, it stops and shows
        you, rather than picking a side.
      </p>

      <Callout type="success" title="Ship the winner">
        <p>
          Race three agents on one task, review each <Link href="/docs/review/diff-viewer">diff</Link>,
          then commit, push, and merge the best one. See{' '}
          <Link href="/docs/first-session">Your first 3-agent session</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}