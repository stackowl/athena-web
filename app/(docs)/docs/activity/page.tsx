import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Agents feed',
  description:
    'A live, scrolling timeline of everything your agents did — commands, edits, commits — with filters per worktree.'
}

export default function ActivityPage() {
  return (
    <DocsArticle
      title="Agents feed"
      lede="A live timeline of everything your agents did — commands, edits, commits — filterable per worktree."
    >
      <p>
        The feed is a chronological stream of agent activity across your board: every command run,
        file edited, commit made, and message sent. It&apos;s the fastest way to understand what an
        agent actually did while you were elsewhere.
      </p>

      <h2 id="read-the-feed">Reading the feed</h2>
      <ul>
        <li>Filter by worktree, session, agent type, or event kind.</li>
        <li>Jump from any entry to the worktree state at that moment.</li>
        <li>Collapse churn — repeated commands and auto-saves — to see the signal.</li>
      </ul>

      <h2 id="tie-to-ledger">Tied to the Ledger</h2>
      <p>
        Every feed entry is recorded with attribution in the Athena Ledger, the same place diff
        reviews and notifications point. The feed is the live view; the Ledger is the permanent
        record.
      </p>

      <Callout title="Related">
        <p>
          For the curated view of things needing your attention, see{' '}
          <Link href="/docs/notifications">Notifications &amp; Inbox</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}
