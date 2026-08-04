import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Annotate AI Diff',
  description:
    'Leave inline comments on a diff — point precisely at the problem and give the agent the why, not just the what.'
}

export default function AnnotateAiDiffPage() {
  return (
    <DocsArticle
      title="Annotate AI Diff"
      lede="Leave inline comments on a diff — point precisely at the problem and give the agent the why, not just the what."
    >
      <p>
        An inline comment anchors to an exact line — or range of lines — of a diff. It&apos;s the
        fastest way to correct an AI agent: point at the problem, explain why it&apos;s wrong, and let
        the agent fix it in its own worktree.
      </p>

      <figure className="my-6">
        <div className="overflow-hidden rounded-lg border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screens/annotate-diff.jpg"
            alt="Inline comments anchored to lines of an AI-generated diff"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="mt-2 text-sm text-white/45">
          Inline comments anchored to lines of an AI diff.
        </figcaption>
      </figure>

      <h2 id="add-an-inline-comment">Add an inline comment</h2>
      <ol className="docs-steps">
        <li>Open the worktree&apos;s diff in the <Link href="/docs/review/diff-viewer">diff viewer</Link>.</li>
        <li>Select a line, or drag to select a range.</li>
        <li>Type your note and send it.</li>
      </ol>
      <p>
        The comment stays anchored to the code you selected. If the diff shifts as the agent revises,
        Athena re-anchors it to the same content instead of letting it drift.
      </p>

      <h2 id="point-at-the-problem">Point at the problem</h2>
      <p>
        Because the comment is tied to a precise range — a line, a hunk, a whole file — the agent
        knows exactly where to look. No need to describe coordinates in prose.
      </p>

      <h2 id="give-the-why">Give the why, not just the what</h2>
      <p>
        A comment that only says what is wrong helps; one that says why it is wrong fixes the problem
        in a single pass.
      </p>
      <blockquote>
        <p>
          Weak: &quot;This looks wrong.&quot;
          <br />
          Better: &quot;This returns before the cache is written, so the updated value is never
          persisted. Move the write above the return.&quot;
        </p>
      </blockquote>

      <h2 id="the-agent-picks-it-up">The agent picks it up</h2>
      <p>
        Your comment goes straight into the agent&apos;s context for that worktree. The agent can
        reply, apply the fix, and push an updated diff — you review again and loop until it&apos;s
        right.
      </p>

      <Callout type="info" title="Anchored, not copied">
        <p>
          Comments live on the diff itself, not in a separate thread, and the reviewers&apos;s trail is
          recorded with the change — see{' '}
          <Link href="/docs/review/attribution">Attribution</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}