import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Quick Open & Jump Palette',
  description:
    'Fast worktree switching and a command palette so you can jump between sessions and run actions from the keyboard.'
}

export default function QuickOpenPage() {
  return (
    <DocsArticle
      title="Quick Open & Jump Palette"
      lede="Jump between worktrees and run commands — without leaving the keyboard."
    >
      <p>
        As sessions grow, the fastest way around is a palette that jumps straight to any open view,
        worktree, or command. Open it, type part of a name, and go — no point-and-click through the
        tree.
      </p>

      <h2 id="shown-today">What Athena gives you today</h2>
      <p>
        Athena ships a keyboard-driven command palette that lists the actions available in the current
        workspace — create a session, add an agent, open a terminal, switch focus, and the rest of the
        session commands. It&apos;s a single entry point for the actions you&apos;d otherwise reach by
        clicking through menus.
      </p>

      <pre>{`ctrl+k / cmd+k   open the palette
Type an action, or start typing to filter.`}</pre>

      <h2 id="inside-the-palette">Inside the palette</h2>
      <ul>
        <li>
          <strong>Filter as you type.</strong> Fuzzy match brings the action you want to the top.
        </li>
        <li>
          <strong>Keyboard-first.</strong> Arrow keys to select, Enter to run — no mouse required.
        </li>
        <li>
          <strong>Session-aware.</strong> Actions are scoped to the session you&apos;re in, so the list
          stays relevant.
        </li>
      </ul>

      <h2 id="roadmap">Roadmap: jump between worktrees</h2>
      <p>
        The broader <strong>jump palette</strong> — quickly switching between worktrees, sessions, and
        views from the same shortcut — is on the roadmap. The command palette above is the foundation;
        worktree- and view-switching built into it is coming soon.
      </p>

      <Callout type="warn" title="Roadmap">
        <p>
          The worktree-and-view jump palette isn&apos;t shipped yet. Today the palette covers session
          commands; fast switching between worktrees and views is planned and will land here first.
        </p>
      </Callout>
    </DocsArticle>
  )
}
