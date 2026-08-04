import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Hosted reviews, issues & Actions',
  description:
    'PRs, issues and tasks surface in one timeline alongside agent work — with hosted reviews and CI/Actions inline.'
}

export default function GitHubPage() {
  return (
    <DocsArticle
      title="Hosted reviews, issues & Actions"
      lede="PRs, issues and tasks surface in one timeline alongside agent work — with hosted reviews and CI/Actions inline."
    >
      <p>
        Athena ties your code hosting into the same board where agent work lands. Agent runs, pull
        requests, issues, and CI checks share one timeline, so you never juggle tabs to see
        what&apos;s happening.
      </p>

      <figure className="my-6">
        <div className="overflow-hidden rounded-lg border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screens/github-linear.jpg"
            alt="GitHub pull requests and Linear issues next to agent work in a single timeline"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="mt-2 text-sm text-white/45">
          PRs and issues share a timeline with agent work.
        </figcaption>
      </figure>

      <h2 id="one-timeline">One timeline</h2>
      <p>
        Everything around your code lands in one place: when an agent starts, commits, or opens a
        PR, when a review lands, when CI turns red. You get the shape of a day at a glance instead
        of hunting through three apps.
      </p>

      <h2 id="github-integration">GitHub integration</h2>
      <p>
        Connect your repository and Athena mirrors the things that matter: pull requests, comments,
        review states, issue activity, and workflow runs.
      </p>

      <h2 id="hosted-reviews">Hosted reviews</h2>
      <p>
        Review a pull request without leaving the app: load the branch into a worktree, walk its
        diffs, comment, approve, or request changes. Your actions flow back to GitHub like any other
        review.
      </p>

      <h2 id="actions-and-ci">Actions &amp; CI</h2>
      <p>
        Workflow runs surface on the board — queued, running, failed, passed — colored by result. A
        click takes you to the run on GitHub when the raw log is what you need.
      </p>

      <h2 id="issues-and-tasks">Issues &amp; tasks</h2>
      <p>
        Issues and tasks appear in the same timeline and can be linked to agent work — see{' '}
        <Link href="/docs/review/linear">Linear items drawer</Link> for ticket coupling.
      </p>

      <Callout type="info" title="AI work is labelled">
        <p>
          Machine-created pull requests and commits carry their attribution, so reviewers can always
          tell agent output from human edits. See <Link href="/docs/review/attribution">Attribution</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}