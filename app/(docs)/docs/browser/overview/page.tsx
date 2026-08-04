import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Per-worktree browser',
  description: 'Each worktree gets its own browser tab tied to its running app.'
}

export default function BrowserOverviewPage() {
  return (
    <DocsArticle
      title="Per‑worktree browser"
      lede="Each worktree gets its own browser tab tied to its running app."
    >
      <p>
        Every worktree has its own dedicated browser tab that is linked to its running agent. This ensures that the tab state stays consistent with the worktree. Changes made in the browser reflect only that worktree.
      </p>

      <h2 id="browser-connection">1. Browser connection</h2>
      <p>
        Opening the web view for a worktree creates a separate tab. The tab loads via the worktree specific endpoint and remains isolated. Closing the tab does not affect other worktrees.
      </p>

      <h2 id="steer-graphic">2. Graphic where you steer</h2>
      <p>
        Use the “Steer” button on a tab to open the steering panel. This panel shows the most recent actions performed by the agent in that tab, letting you issue commands or review logs without switching contexts.
      </p>

      <h2 id="link-to-tree">3. Link to worktree</h2>
      <p>
        Each browser tab includes a badge with the worktree identifier. Clicking the badge jumps the board view to that worktree.
      </p>

      <Callout type="info" title="Tab isolation">
        <p>
          The browser tab is completely isolated. It can be closed, refreshed, or inspected without influencing any other worktree.
        </p>
      </Callout>
    </DocsArticle>
  )
}