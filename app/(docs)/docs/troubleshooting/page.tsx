import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Troubleshooting & FAQ',
  description:
    'Common problems and answers: agents that stall, missing CLIs, remote targets that won\u2019t connect, and more.'
}

export default function TroubleshootingPage() {
  return (
    <DocsArticle
      title="Troubleshooting & FAQ"
      lede="Common problems and answers: agents that stall, missing CLIs, remotes that won\u2019t connect."
    >
      <h2 id="agent-stalls">Agent is stuck or silent</h2>
      <ul>
        <li>Check the feed for the last command the agent ran — is it waiting on input?</li>
        <li>Confirm the agent CLI is authenticated. A failed auth usually looks like a silent stall.</li>
        <li>Hibernate and resume the agent to reset its session without losing context.</li>
      </ul>

      <h2 id="cli-not-detected">Agent CLI not detected</h2>
      <ul>
        <li>Make sure the CLI is on <code>PATH</code> for the environment Athena starts.</li>
        <li>Restart Athena after installing a new agent CLI.</li>
        <li>On macOS, check that the CLI is installed for your shell&apos;s PATH, not just one editor.</li>
      </ul>

      <h2 id="remote-wont-connect">SSH target won&apos;t connect</h2>
      <ul>
        <li>Verify you can <code>ssh user@host</code> from your terminal with the same key.</li>
        <li>Check that git and any agent CLIs are installed on the remote.</li>
        <li>Confirm the base directory exists and is writable by your user.</li>
      </ul>

      <h2 id="merge-conflicts">Merge conflicts from parallel agents</h2>
      <p>
        Worktrees are isolated, so agents can&apos;t collide mid-flight — but their branches can
        conflict when you merge. Review each diff, merge them one at a time, and resolve the conflict
        in the order that makes the least churn.
      </p>

      <h2 id="faq">FAQ</h2>
      <p>
        <strong>Does Athena share my code?</strong> No. Agent traffic goes to your configured
        providers; Athena itself is local-first. See{' '}
        <Link href="/docs/telemetry">Privacy &amp; Telemetry</Link>.
      </p>
      <p>
        <strong>Can I use plain git in a worktree?</strong> Yes — every worktree is a real git
        worktree. <code>cd</code> in and use whatever git workflow you like.
      </p>
      <p>
        <strong>Do I need a subscription to Athena?</strong> No. You bring your own agent CLIs and
        their subscriptions; Athena is free and open source.
      </p>
      <p>
        <strong>Can I run Athena on a server?</strong> Yes — see{' '}
        <Link href="/docs/remote-servers">Remote Athena Servers</Link>.
      </p>

      <Callout type="warn" title="Still stuck?">
        <p>
          Open an issue on <a href="https://github.com/stackowl/athena/issues" target="_blank" rel="noreferrer">GitHub Issues</a> or
          drop by the <a href="https://discord.gg/fzjDKHxv8Q" target="_blank" rel="noreferrer">Discord server</a> — include the
          failing command and the relevant feed entries.
        </p>
      </Callout>
    </DocsArticle>
  )
}
