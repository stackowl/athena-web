import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Jump between 10 worktrees',
  description:
    'Keep a swarm of agents moving and find any worktree in seconds with Quick Open and keyboard-first navigation.'
}

export default function JumpWorktreesPage() {
  return (
    <DocsArticle
      title="Jump between 10 worktrees"
      lede="Keep a swarm of agents moving and find any worktree in seconds — keyboard-first."
    >
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Open the Jump Palette.</strong> Use the Quick Open shortcut. It searches
            worktrees, files, sessions, and commands from one box.
          </p>
        </li>
        <li>
          <p>
            <strong>Search by branch or task.</strong> Worktrees are indexed by branch name and
            current task, so typing what the agent is working on surfaces the right one.
          </p>
        </li>
        <li>
          <p>
            <strong>Name your worktrees.</strong> Give each spawned worktree a short tag
            (e.g. <code>auth/races</code>, <code>ui/onboarding</code>) and you&apos;ll jump by
            memory, not by list.
          </p>
        </li>
        <li>
          <p>
            <strong>Stack your layout.</strong> Pin the two or three you&apos;re actively watching
            and keep the rest one keystroke away.
          </p>
        </li>
      </ol>

      <Callout type="info" title="Find by what it is">
        <p>
          You can also jump by agent name or by the file an agent is touching — Quick Open indexes
          the live state, not just the branch names.
        </p>
      </Callout>

      <Callout title="Related">
        <p>
          The full index of what you can jump to is on the{' '}
          <Link href="/docs/model/quick-open">Quick Open &amp; Jump Palette</Link> page.
        </p>
      </Callout>
    </DocsArticle>
  )
}
