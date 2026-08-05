import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Terminal',
  description: 'Terminals with splits, live streaming and wait-for-idle detection.'
}

export default function TerminalPage() {
  return (
    <DocsArticle
      title="Terminal"
      lede="Terminals with splits, live streaming and wait-for-idle detection."
    >
      <p>
        Each worktree has a dedicated terminal that streams the agent’s commands and output in
        real-time. Terminals support splitting, live streaming, and wait-for-idle — so the
        terminal stays in sync with the agent’s activity.
      </p>

      <h2 id="splitting">1. Splitting the terminal</h2>
      <p>
        Use the split icons on the terminal header to divide the terminal into panes. Each
        split pane shares the same context but can be used to run separate commands. Splitting
        helps you monitor multiple aspects of a session simultaneously.
      </p>

      <h2 id="live-streaming">2. Live streaming</h2>
      <p>
        Live streaming lets you watch the terminal output as it happens — no polling
        required. The terminal view updates continuously, so you’ll never miss a beat when
        the agent is working.
      </p>

      <h2 id="wait-for-idle">3. Wait for idle</h2>
      <p>
        The terminal can automatically detect when a command or agent is idle. Use the
        <code>wait-for-idle</code> toggle to have the terminal notify you when the agent is
        finished. This is useful in split view where you might be monitoring multiple agents.
      </p>

      <h2 id="commands">4. Useful terminal commands</h2>
      <ul>
        <li><code>athena terminal send --terminal term-1 --text &quot;git status&quot; --enter</code></li>
        <li><code>athena terminal wait --terminal term-1 --for tui-idle --timeout-ms 60000</code></li>
      </ul>

      <Callout type="success" title="Integrated workflow">
        <p>
          All of your agent work — edits, terminal output, and changes — stays in one place.
          You can review a diff side-by-side with the terminal output that generated it.
        </p>
      </Callout>
    </DocsArticle>
  )
}