import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Mobile companion',
  description:
    'Keep an eye on running agents and get notified from your phone while Athena works on your desktop.'
}

export default function MobilePage() {
  return (
    <DocsArticle
      title="Mobile companion"
      lede="Watch your agents and get notified from your phone while Athena works on your desktop."
    >
      <p>
        The mobile companion is a lightweight app that mirrors what matters from your Athena board:
        which agents are running, what they&apos;ve just done, and when a run finishes or needs your
        attention.
      </p>

      <h2 id="connect">Connect your phone</h2>
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Open the mobile app</strong> and scan the pairing QR code from Athena&apos;s
            Settings → Mobile.
          </p>
        </li>
        <li>
          <p>
            <strong>Approve the device</strong> on the desktop once.
          </p>
        </li>
        <li>
          <p>
            <strong>Pick what to surface.</strong> Runs finishing, errors, review-ready diffs, or all
            of the above.
          </p>
        </li>
      </ol>

      <h2 id="what-it-shows">What it shows</h2>
      <ul>
        <li>Live status of every running agent and worktree.</li>
        <li>Push notifications when a run completes or hits an error.</li>
        <li>A quick glanceable feed of recent activity.</li>
      </ul>

      <h2 id="remote">Working from anywhere</h2>
      <p>
        Pair the companion to a{' '}
        <Link href="/docs/remote-servers">remote Athena server</Link> and your agents are visible
        wherever you are — no need to keep a laptop awake and in front of you.
      </p>

      <Callout type="warn" title="Notifications, not control">
        <p>
          The companion is read-mostly. You can dismiss and acknowledge runs, but heavy steering
          stays on the desktop — by design.
        </p>
      </Callout>
    </DocsArticle>
  )
}
