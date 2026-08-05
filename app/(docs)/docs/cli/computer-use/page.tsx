import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Computer use',
  description:
    'Let an agent drive the desktop — click, type, and read the screen — inside a controlled worktree environment.'
}

export default function ComputerUsePage() {
  return (
    <DocsArticle
      title="Computer use"
      lede="Let an agent drive a desktop — click, type, and read the screen — inside a controlled environment."
    >
      <p>
        Computer use lets an agent operate a desktop interface the way a person would: moving the
        cursor, clicking, typing, and reading what&apos;s on screen. It&apos;s useful for testing
        native apps, automating installs, and working through UI flows that don&apos;t expose a CLI.
      </p>

      <h2 id="enable">Enable it per worktree</h2>
      <p>
        Computer use is opt-in per worktree. When you spawn an agent, toggle computer use to grant
        it access to the desktop session assigned to that worktree.
      </p>

      <h2 id="what-its-good-for">Good fits</h2>
      <ul>
        <li>Clicking through a desktop app to reproduce a reported bug.</li>
        <li>Driving an installer or a settings wizard.</li>
        <li>Verifying that a UI actually looks right after a code change.</li>
      </ul>

      <h2 id="keep-it-tame">Keeping it safe</h2>
      <ul>
        <li>Use a dedicated, disposable machine or VM where possible.</li>
        <li>Scope the agent to the task — it inherits the worktree&apos;s permissions.</li>
        <li>Watch the session live in the browser tab or terminal feed.</li>
      </ul>

      <Callout type="warn" title="Give it a real display">
        <p>
          Computer use needs a desktop session. On a headless server, set up a virtual display
          (for example, Xvfb or a similar framebuffer) before granting access.
        </p>
      </Callout>
    </DocsArticle>
  )
}
