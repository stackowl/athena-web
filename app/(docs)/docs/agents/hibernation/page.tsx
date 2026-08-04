import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Agent hibernation',
  description: 'Pause an agent preserving its worktree and state, then resume it later instead of killing it.'
}

export default function HibernationPage() {
  return (
    <DocsArticle
      title="Agent hibernation"
      lede="Pause an agent preserving its worktree and state, then resume it later instead of killing it."
    >
      <p>
        Not every agent should run to completion in one sitting. Hibernation lets you put an agent to
        sleep without losing the work: its worktree, its conversation, and its in-flight state all stay
        intact, and you wake it exactly where it stopped.
      </p>

      <h2 id="why">Why pause instead of kill</h2>
      <ul>
        <li>A long task hits a blocker you want to resolve yourself first.</li>
        <li>You want to free machine resources without throwing away progress.</li>
        <li>A change in direction means parking one agent while another finishes.</li>
      </ul>

      <h2 id="today">What you can do today</h2>
      <p>
        Sessions already persist across launches, and each agent keeps its own worktree. Closing a
        session effectively parks it — reopen it and the agent and its context are waiting for you.
        This gives you a manual form of hibernation today.
      </p>
      <pre>{`# park an agent for later
# reopen the session to resume it
athena session open --name parked-task`}</pre>

      <Callout type="info" title="Roadmap">
        <p>
          First-class hibernation — an explicit per-agent sleep that parks the worktree and context and
          frees the process, then resumes on demand — is planned but not shipped. Today, park agents by
          closing the session and reopening it later.
        </p>
      </Callout>
    </DocsArticle>
  )
}
