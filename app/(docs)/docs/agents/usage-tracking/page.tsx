import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Usage & rate-limit tracking',
  description: 'Track usage per agent, account, and model, and stay within rate limits.'
}

export default function UsageTrackingPage() {
  return (
    <DocsArticle
      title="Usage & rate-limit tracking"
      lede="Track usage per agent, account, and model, and stay within rate limits."
    >
      <p>
        When many agents share provider quotas, it pays to see who is spending what. Usage tracking
        shows consumption per agent, per account, and per model, so you can spot runaway spend and
        route work to models that still have headroom.
      </p>

      <h2 id="what-it-tracks">What it tracks</h2>
      <ul>
        <li>
          <strong>Per agent</strong> — how much each agent consumed on the board.
        </li>
        <li>
          <strong>Per account</strong> — aggregate consumption across a session or deployment.
        </li>
        <li>
          <strong>Per model</strong> — which models are eating the budget and their remaining quota.
        </li>
        <li>
          <strong>Rate limits</strong> — alerts near provider limits so you can throttle before a hard
          stop.
        </li>
      </ul>

      <h2 id="ledger">Connected to the Athena Ledger</h2>
      <p>
        Usage events flow into the Athena Ledger, an append-only audit log. Because it&apos;s
        append-only and attributed, you get a trustworthy record of consumption over time rather than a
        snapshot that can be silently rewritten.
      </p>
      <ul>
        <li>Append-only audit log — no silent edits to past usage.</li>
        <li>Designed for EU AI Act readiness (Art. 50/26/4).</li>
        <li>Six-month retention window.</li>
        <li>Opt-in — nothing is recorded unless you enable it.</li>
      </ul>

      <Callout type="warn" title="Roadmap">
        <p>
          Rich per-agent usage dashboards and automatic rate-limit throttling are planned but not yet
          shipped. The opt-in, append-only Ledger already provides the underlying consumption record.
        </p>
      </Callout>
    </DocsArticle>
  )
}
