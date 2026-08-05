import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Review an AI diff line-by-line',
  description:
    'A tight loop for reading AI output carefully: open the diff, walk each hunk, annotate, then approve.'
}

export default function ReviewAiDiffPage() {
  return (
    <DocsArticle
      title="Review an AI diff line-by-line"
      lede="The tight loop for reading AI output carefully: open the diff, walk each hunk, annotate, then approve."
    >
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Open the diff viewer.</strong> Select the worktree in the board and open its
            diff. Every agent change shows there, attributed to the run that made it.
          </p>
        </li>
        <li>
          <p>
            <strong>Walk the hunks.</strong> Read each hunk top to bottom. Ask: does this change what
            the prompt asked for, and does it break anything adjacent?
          </p>
        </li>
        <li>
          <p>
            <strong>Annotate as you go.</strong> Drop comments on lines that need changes, questions,
            or context for the next round — the agent picks them up in its next pass.
          </p>
        </li>
        <li>
          <p>
            <strong>Check attribution.</strong> Confirm the diff is agent output, not something a
            human edited alongside. The Ledger marks the boundary.
          </p>
        </li>
        <li>
          <p>
            <strong>Approve and merge.</strong> Only merge when the diff is what you&apos;d have
            written. Athena coordinates the merge; it never guesses for you.
          </p>
        </li>
      </ol>

      <Callout type="info" title="The rule of thumb">
        <p>
          If you wouldn&apos;t ship it because you don&apos;t understand it, don&apos;t merge it.
          Send it back with a comment instead.
        </p>
      </Callout>

      <Callout title="Related">
        <p>
          Learn the tools first: <Link href="/docs/review/diff-viewer">Diff viewer</Link> and{' '}
          <Link href="/docs/review/annotate-ai-diff">Annotate AI Diff</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
