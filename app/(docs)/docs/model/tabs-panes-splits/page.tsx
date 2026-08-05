import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Tabs, panes & split layouts',
  description: 'Split terminals and panes so multiple agents stream at once; run design mode or a diff view in a pane next to a terminal.'
}

export default function TabsPanesSplitsPage() {
  return (
    <DocsArticle
      title="Tabs, panes & split layouts"
      lede="Split terminals and panes so multiple agents stream at once; run design mode or a diff view in a pane next to a terminal."
    >
      <p>
        Every worktree gets its own set of panes. You can run multiple agents side‑by‑side, or
        combine a terminal and a browser view. Pane splits are organized with <code>horizontal</code> or
        <code>vertical</code> directions and can be resized live. This keeps control of the board without
        tab‑juggling.
      </p>

      <h2 id="split-terminal">1. Split the terminal</h2>
      <p>
        Click the terminal header and choose <strong>Split</strong>, then select a direction. Each split
        gets its own terminal id and can be controlled independently: <code>athena terminal send --terminal
term-3 --text &quot;git status&quot; --enter</code>. Run background jobs or prompts in one pane while
watching the other.
      </p>

      <h2 id="browser-design-mode">2. Browser + Design Mode in separate panes</h2>
      <p>
        Open an embedded browser in one pane and point an agent at it. Simultaneously run a terminal
        in the adjacent pane to give the agent commands. You can split the workspace to see both
        screens at once. Use the design-mode view for UI iteration where the agent can drive the app
        while you inspect the diff.
      </p>

      <Callout type="info" title="Design Mode">
        <p>
          Design Mode is an embedded browser your agent can drive to iterate the UI; you watch it
          update the interface live. Use it when fixing a UI bug or building a new feature.
        </p>
      </Callout>

      <h2 id="pane-control">3. Control all splits</h2>
      <ul>
        <li>Send commands to a specific pane: <code>athena terminal send --terminal pane‑id --text</code></li>
        <li>Wait for idle in a pane: <code>athena terminal wait --terminal pane‑id --for tui‑idle</code></li>
        <li>Close or re‑orient splits without losing agent state.</li>
      </ul>

      <p>
        With pane splits, you keep all the agent activity in one session while maintaining visual
        separation between different parts of the workflow.
      </p>
    </DocsArticle>
  )
}
