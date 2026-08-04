import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Linear items drawer',
  description:
    'Couple agent work to Linear tickets — read the linked issue, comment on it, and search tickets from the drawer or the CLI.'
}

export default function LinearPage() {
  return (
    <DocsArticle
      title="Linear items drawer"
      lede="Couple agent work to Linear tickets — read the linked issue, comment on it, and search tickets, from the drawer or the CLI."
    >
      <p>
        The Linear drawer keeps the ticketing context next to the work. Open it from an agent or a
        worktree, link the task, read the issue, and comment — without switching windows.
      </p>

      <h2 id="link-work-to-a-ticket">Link agent work to a ticket</h2>
      <p>
        Select a Linear issue and attach it to an agent or a worktree. The link shows on the board
        and in the timeline, so the ticket&apos;s context travels with the work.
      </p>

      <h2 id="read-and-comment">Read &amp; comment on the issue</h2>
      <p>
        From the drawer you can read the description and existing comments of the linked issue, and
        leave your own — a status note, a question for a teammate, or a heads-up that the fix is in
        review.
      </p>

      <h2 id="search-tickets">Search tickets</h2>
      <p>
        Searching happens in the same drawer: type to search, filter by team or state, and attach the
        result. One flow from idea to linked work.
      </p>

      <h2 id="from-the-terminal">From the terminal</h2>
      <p>The same actions exist as CLI commands, all with <code>--json</code> for scripting:</p>
      <pre>{`athena linear issue --current --full --json`}</pre>
      <p>Reads the issue linked to the current worktree, fully expanded, as JSON.</p>
      <pre>{`athena linear comment add --current`}</pre>
      <p>Adds a comment to the issue linked to the current worktree.</p>
      <pre>{`athena linear search "rate limit"`}</pre>
      <p>Searches tickets from the terminal.</p>

      <Callout type="info" title="Linear or GitHub issues">
        <p>
          The drawer covers Linear; GitHub issues, PRs and Actions live in the same timeline — see{' '}
          <Link href="/docs/review/github">Hosted reviews, issues &amp; Actions</Link>.
        </p>
      </Callout>
    </DocsArticle>
  )
}