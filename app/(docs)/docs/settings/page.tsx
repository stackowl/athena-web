import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Settings reference',
  description:
    'Where every Athena setting lives: agents, worktrees, appearance, notifications, and remote targets.'
}

export default function SettingsPage() {
  return (
    <DocsArticle
      title="Settings reference"
      lede="Where every Athena setting lives — agents, worktrees, appearance, notifications, and remotes."
    >
      <h2 id="agents">Agents</h2>
      <ul>
        <li>Which agent CLIs are detected and enabled.</li>
        <li>Default CLI when spawning without one.</li>
        <li>Autonomy level: how much agents can install, run, or push before asking.</li>
        <li>Rate-limit and usage budgets per agent type.</li>
      </ul>

      <h2 id="worktrees">Worktrees</h2>
      <ul>
        <li>Default base directory for new worktrees.</li>
        <li>Default branch naming (for example, <code>agent/&lt;task&gt;</code>).</li>
        <li>Whether new worktrees auto-install the repo&apos;s dependencies.</li>
        <li>Checkpoint retention and cleanup behavior.</li>
      </ul>

      <h2 id="appearance">Appearance</h2>
      <ul>
        <li>Dark theme density and font size for the board.</li>
        <li>Whether the feed collapses churn by default.</li>
        <li>Panel layout: which panes are pinned and where.</li>
      </ul>

      <h2 id="notifications">Notifications</h2>
      <ul>
        <li>Which events raise notifications (errors, review-ready, runs finishing).</li>
        <li>Desktop push on/off and per-rule silencing.</li>
        <li>Pairing and management of the mobile companion.</li>
      </ul>

      <h2 id="remotes">Remote targets</h2>
      <ul>
        <li>SSH targets you&apos;ve added and their base directories.</li>
        <li>Remote Athena servers you connect to.</li>
        <li>Certificate and trust settings for those connections.</li>
      </ul>

      <h2 id="config-file">Config file</h2>
      <p>
        Settings persist to a config file so you can back them up or sync them across machines.
        Preferences set in the app write the same file — edit one, the other follows.
      </p>

      <Callout type="info" title="Per-worktree overrides">
        <p>
          Most of these have a per-worktree override where it matters (autonomy, dependency install,
          notifications), so one project doesn&apos;t inherit a setting meant for another.
        </p>
      </Callout>
    </DocsArticle>
  )
}
