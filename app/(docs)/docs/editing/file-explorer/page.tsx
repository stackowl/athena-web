import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'File explorer & external drag-drop',
  description: 'Browse the worktree file tree; drag files and images straight into a prompt as context.'
}

export default function FileExplorerPage() {
  return (
    <DocsArticle
      title="File explorer & external drag-drop"
      lede="Browse the worktree file tree; drag files and images straight into a prompt as context."
    >
      <p>
        The file explorer gives you a clear view of your worktree’s directory structure. Drag files
        and images directly from the explorer into the prompt area to attach them as context for
        the agent.
      </p>

      <h2 id="explorer-overview">1. Explorer overview</h2>
      <p>
        The explorer pane shows all files and folders in the current worktree. You can expand or
        collapse folders, sort by name or modification date, and search for files using the search
        bar at the top.
      </p>

      <h2 id="drag-drop">2. Drag‑and‑drop</h2>
      <p>
        Select a file or image in the explorer, drag it into the prompt area, and release. Athena
        will automatically add the file as a context reference for the current agent.
      </p>

      <h2 id="context-attachment">3. Context attachment</h2>
      <p>
        When you drag a file into the prompt, Athena includes its contents (or a preview for
        images) in the agent’s input. This lets the agent see the exact file you’re referencing,
        making its responses more precise.
      </p>

      <h2 id="sync-with-board">4. Sync with the board</h2>
      <p>
        Any new file you create in the explorer appears instantly on the board. Conversely,
        files created by the agent can be added to the worktree directly from the board.
      </p>

      <Callout type="info" title="Fast workflow">
        <p>
          Drag‑and‑drop eliminates the need to manually upload files, streamlining the feedback loop
          between you and the AI agents.
        </p>
      </Callout>
    </DocsArticle>
  )
}