import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Notifications & Inbox',
  description:
    'Every run that finishes, errors, or needs review lands in one inbox — plus native push when you want it.'
}

export default function NotificationsPage() {
  return (
    <DocsArticle
      title="Notifications & Inbox"
      lede="Every run that finishes, errors, or needs review lands in one inbox — plus push when you want it."
    >
      <p>
        The Inbox collects the events that matter across all your sessions: agents that finished, ran
        into errors, or produced a diff ready for review. It&apos;s the single place to check
        instead of tabbing through every worktree.
      </p>

      <h2 id="what-lands-here">What lands here</h2>
      <ul>
        <li>Agent runs completing, with a summary of what changed.</li>
        <li>Errors and stalled agents that need a decision.</li>
        <li>Diffs marked ready for review.</li>
        <li>Automation runs finishing (or failing) on their schedule.</li>
      </ul>

      <h2 id="actions">Acting on a notification</h2>
      <ul>
        <li>Open the worktree and diff directly from the item.</li>
        <li>Dismiss or snooze noise you don&apos;t want to act on.</li>
        <li>Keep it as a to-do for later — the inbox is persistent, not a feed.</li>
      </ul>

      <h2 id="push">Push notifications</h2>
      <p>
        Enable desktop push, or pair the <strong>mobile companion</strong> to get the same events on
        your phone. Fine-grained rules let you silence noise and only get pushed for errors and
        review-ready diffs.
      </p>

      <Callout type="info" title="Auditable">
        <p>
          Notifications link back to the Athena Ledger, so every item traces to who ran what and
          when — nothing arrives without provenance.
        </p>
      </Callout>
    </DocsArticle>
  )
}
