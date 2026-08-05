import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Agent hooks & memory',
  description: 'Skills, plugins, hooks, and cross-session memory shape how agents behave and what context they keep.'
}

export default function HooksMemoryPage() {
  return (
    <DocsArticle
      title="Agent hooks & memory"
      lede="Skills, plugins, hooks, and cross-session memory shape how agents behave and what context they keep."
    >
      <p>
        An agent&apos;s behavior and context come from more than its prompt. Four mechanisms shape what
        it can do and what it remembers: skills, plugins, hooks, and cross-session memory.
      </p>

      <h2 id="skills">Skills</h2>
      <p>
        Skills are markdown instructions an agent can load on demand — project conventions, release
        automation, security review. They keep an agent grounded in your working style without bloating
        every prompt. See the{' '}
        <Link href="/docs/cli/skills">skills reference</Link>.
      </p>

      <h2 id="plugins">Plugins</h2>
      <p>
        Plugins extend an agent with tools and commands, letting it do more inside its own worktree —
        from CI scaffolding to observability wiring — without you switching apps.
      </p>

      <h2 id="hooks">Hooks</h2>
      <p>
        Hooks fire at lifecycle points — before a prompt, after a commit, on an error. They let you
        inject policy, guardrails, or logging automatically rather than relying on each agent to
        remember.
      </p>

      <h2 id="memory">Cross-session memory</h2>
      <p>
        Context an agent keeps across sessions lives alongside your session history. Combined with the
        Athena Ledger&apos;s attribution, memory persists what matters while the audit log preserves who
        changed what and when.
      </p>

      <Callout title="Chain them">
        <p>
          Skills give an agent knowledge, plugins give it tools, hooks give it guardrails, and memory
          gives it continuity. Start with a skill, then layer hooks to enforce the parts you never want
          skipped.
        </p>
      </Callout>
    </DocsArticle>
  )
}
