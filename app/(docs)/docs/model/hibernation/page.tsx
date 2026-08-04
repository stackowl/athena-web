import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Agent Hibernation',
  description: 'Pause an agent suspending its worktree while keeping all context and state intact for later resumption.'
}

export default function HibernationPage() {
  return (
    <DocsArticle
      title="Agent Hibernation"
      lede="Pause an agent suspending its worktree while keeping all context and state intact for later resumption."
    >
      <p>
        Hibernation allows you to temporarily stop an agent’s work without losing any progress. The agent’s
worktree, code results, and any in-progress tasks remain preserved in the hibernated state. Resuming
starts exactly from where you left off – no lost context.
      </p>

      <h2 id="hibernate">Hibernate Agent</h2>
      <p>
        To hibernate an agent, navigate to its worktree and run:
        <code>athena agent hibernate</code>. This freezes all agent activity, but keeps the</p>
        <Callout type="info">
          <p>worktree intact. The agent’s environment variables, installed dependencies, and network state</p>
        </Callout>
        <p>are all preserved.</p>
      </p>

      <h2 id="resume">Resume Agent</h2>
      <p>
        To wake the agent, use:
        <code>athena agent resume</code>. The agent will pick up its last task automatically,</p>
      </p>
      <pre>{`🔍 The hibernated state
            worktree: hibernated/claude-fix
            git-hash: 3b2457d
hibernation-duration: 8h23m
            resume-prompt: Fix the login redirect so a session survives a page refresh.`}</pre>
      <hr>
      <p>
        Key benefits:
        • Zero time wasted resetting context
        • Retain workflow continuity during interruptions
        • Prevent wasted-capacity context switches
        • Maintain atomic state for rollback if needed
      </p>
      <Callout type="success" title="The Whole Picture">
        <p>
          Hibernation bridges development state with operational continuity – no more cold starts
or forced reset when interruptions occur.</p>
        </p>
      </Callout>
    </DocsArticle>
  )
}
