import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Design Mode',
  description: 'An embedded browser your agent can drive to iterate the UI; you watch it update the interface live.'
}

export default function DesignModePage() {
  return (
    <DocsArticle
      title="Design Mode"
      lede="An embedded browser your agent can drive to iterate the UI; you watch it update the interface live."
    >
      <p>
        Design Mode is an embedded browser where you can steer the UI as an agent would. Point it at a
        running app and let the agent iterate the interface, making changes and seeing them update
        live. It&apos;s perfect for fixing UI bugs or exploring how new features would feel.
      </p>

      <h2 id="browser">Where it lives</h2>
      <p>
        Design Mode runs inside a worktree's browser tab. It is an isolated browser window that
        synchronizes with the worktree's state. The browser reflects exactly what the app is
        showing at that moment.
      </p>

      <h2 id="howto">
        1. Start Design Mode
      </h2>
      <p>
        Open the browser tab for a worktree. Click the <strong>Steer</strong> button to open the steering
        panel. Click the <strong>Design Mode</strong> toggle to activate.
      </p>

      <h2 id="inspect">
        2. Inspect elements
      </h2>
      <p>
        Use the "Steer" button to open the steering panel. This shows the most recent actions performed
        by the agent in that tab, letting you issue commands or review logs without switching contexts.
      </p>

      <Callout type="info" title="Live editing">
        <p>
          Changes you make in Design Mode are persisted to the project and visible to all agents.
          This allows you to prototype UI changes before they&apos;re committed.
        </p>
      </Callout>
    </DocsArticle>
  )
}