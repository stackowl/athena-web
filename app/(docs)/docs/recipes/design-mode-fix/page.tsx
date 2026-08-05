import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Fix a UI bug with Design Mode',
  description:
    'Reproduce a visual bug, steer the agent in the embedded browser, and verify the fix live before committing.'
}

export default function DesignModeFixPage() {
  return (
    <DocsArticle
      title="Fix a UI bug with Design Mode"
      lede="Reproduce a visual bug, steer the agent in the embedded browser, and verify the fix live."
    >
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Reproduce it.</strong> Open the worktree&apos;s browser tab and walk to the
            broken state. Note what looks wrong.
          </p>
        </li>
        <li>
          <p>
            <strong>Turn on Design Mode.</strong> Open the steering panel and toggle Design Mode so
            the browser synchronizes with the app.
          </p>
        </li>
        <li>
          <p>
            <strong>Describe the bug to the agent.</strong> Point it at the screen and tell it what
            you expect to see. The agent edits the code while you watch the interface update.
          </p>
        </li>
        <li>
          <p>
            <strong>Iterate live.</strong> Adjust the prompt, inspect elements in devtools, and
            verify each change lands in the running app before it&apos;s committed.
          </p>
        </li>
        <li>
          <p>
            <strong>Review and keep.</strong> The changes persist to the project, so you review the
            diff in the viewer and merge when it&apos;s right.
          </p>
        </li>
      </ol>

      <Callout type="info" title="Fast feedback loop">
        <p>
          Because changes are live, you catch wrong assumptions in seconds instead of after a commit.
          Perfect for layout tweaks, spacing, and state that&apos;s hard to describe in words.
        </p>
      </Callout>

      <Callout title="Related">
        <p>
          The full mechanics are on the{' '}
          <Link href="/docs/browser/design-mode">Design Mode</Link> page.
        </p>
      </Callout>
    </DocsArticle>
  )
}
