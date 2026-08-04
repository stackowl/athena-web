import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Chat UI (native chat)',
  description: 'Steer an agent from a built-in chat surface instead of juggling a separate CLI.'
}

export default function NativeChatPage() {
  return (
    <DocsArticle
      title="Chat UI (native chat)"
      lede="Steer an agent from a built-in chat surface instead of juggling a separate CLI."
    >
      <p>
        Athena runs agent CLIs in dedicated terminals, but a chat surface is the more natural place
        to brief and steer a single agent. A native chat panel would keep the conversation, the
        worktree, and the diff in one window — no copying prompts between a separate terminal and
        your editor.
      </p>

      <h2 id="what-it-would-look-like">What it would look like</h2>
      <p>
        Each agent on the board gets its own conversation. You type an instruction, the agent works,
        its changes land in its worktree, and the diff appears inline for review — then you merge
        from the same panel.
      </p>
      <ul>
        <li>A running transcript per agent, persistent for the session.</li>
        <li>Inline diff preview after each turn.</li>
        <li>Merge or hand the agent another task without leaving the panel.</li>
      </ul>

      <h2 id="today">What you can do today</h2>
      <p>
        The terminal panel already gives each agent an interactive shell, so you can drive it
        conversationally with the CLI you already know. This is the honest bridge until the richer
        chat UI lands.
      </p>
      <pre>{`athena session send --agent claude "Fix the login redirect and add a regression test"`}</pre>

      <Callout type="info" title="Roadmap">
        <p>
          The native chat UI is planned but not shipped. Today, steer agents through the terminal
          panel and the <code>athena session send</code> command.
        </p>
      </Callout>
    </DocsArticle>
  )
}
