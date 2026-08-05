import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Scheduled automations',
  description:
    'Run orchestrations on a cron-style schedule — nightly audits, morning agent batches, on-call reactions.'
}

export default function AutomationsPage() {
  return (
    <DocsArticle
      title="Scheduled automations"
      lede="Run orchestrations on a timer — nightly audits, morning batches, scheduled maintenance."
    >
      <p>
        Automations wrap an orchestration (or any command) in a schedule. Athena fires them on a
        cron-style interval, so repetitive work happens without you starting it by hand.
      </p>

      <h2 id="create">Create an automation</h2>
      <pre>{`athena automation create \\
  --name "nightly-auth-audit" \\
  --schedule "0 3 * * *" \\
  --cmd "athena orchestrate run --spec orchestrations/auth.yml"`}</pre>

      <h2 id="schedule-format">Schedule format</h2>
      <p>Standard cron: five fields for minute, hour, day-of-month, month, day-of-week.</p>
      <pre>{`"0 3 * * *"     # every day at 03:00
"30 9 * * 1-5"  # weekdays at 09:30
"0 */6 * * *"   # every six hours`}</pre>

      <h2 id="manage">Manage automations</h2>
      <pre>{`athena automation list          # what's scheduled and next run
athena automation pause <id>
athena automation resume <id>
athena automation delete <id>`}</pre>

      <h2 id="ideas">Good first automations</h2>
      <ul>
        <li>Nightly dependency-audit agent that opens a review with findings.</li>
        <li>A morning batch that re-runs flaky tests and summarizes failures.</li>
        <li>An on-call reaction that spawns an agent when a CI run goes red.</li>
      </ul>

      <Callout type="warn" title="Machine must be awake">
        <p>
          Automations run on the machine hosting the Athena engine. For 24/7 schedules, point them at
          a <Link href="/docs/remote-servers">remote Athena server</Link> that stays on.
        </p>
      </Callout>
    </DocsArticle>
  )
}
