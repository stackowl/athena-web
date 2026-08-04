import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Monaco editor & autosave',
  description: 'A built-in Monaco editor with autosave; edit files inside a worktree without leaving the app.'
}

export default function MonacoPage() {
  return (
    <DocsArticle
      title="Monaco editor & autosave"
      lede="A built-in Monaco editor with autosave; edit files inside a worktree without leaving the app."
    >
      <p>
        The editor is a full-featured Monaco instance (the same engine that powers VS Code). It runs
        inside each worktree and auto-saves your changes to disk every few seconds. You never lose
        work even if the app crashes or a session hibernates.
      </p>

      <h2 id="features">Key features</h2>
      <ul>
        <li>Syntax highlighting for 50+ languages.</li>
        <li>IntelliSense completions, go-to-definition, and rename refactoring (where LSP is configured).</li>
        <li>Multi-cursor editing and block selection.</li>
        <li>Integrated terminal: run commands without leaving the editor.</li>
        <li>Autosave to disk (configurable interval).</li>
      </ul>

      <h2 id="worktree-context">Worktree-aware context</h2>
      <p>
        Each editor instance is bound to its worktree. Opening a file from the board automatically
        switches to the correct worktree’s editor. You can have multiple editor panes open across
        different worktrees simultaneously.
      </p>

      <Callout type="success" title="Always in sync">
        <p>
          Changes made in the editor are instantly reflected on the board and in the diff viewer.
          No manual refresh required.
        </p>
      </Callout>
    </DocsArticle>
  )
}