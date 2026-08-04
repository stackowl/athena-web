import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Worktrees',
  description:
    'Every agent edits its own isolated git worktree. No file collisions, agents run in parallel, and main stays clean until you review.'
}

export default function WorktreesPage() {
  return (
    <DocsArticle
      title="Worktrees"
      lede="Every agent edits its own checkout. No collisions, no queue — and main stays clean until you review."
    >
      <p>
        Athena gives every agent its own <strong>isolated git worktree</strong> from the same base
        commit. Each worktree is a full checkout with its own branch, its own terminal, and its own
        place on the board. Agents never share a working directory, so they can never overwrite each
        other&apos;s files.
      </p>

      <figure className="my-6">
        <div className="overflow-hidden rounded-lg border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screens/parallel-worktrees.jpg"
            alt="Multiple agent worktrees running side by side"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="mt-2 text-sm text-white/45">
          Several agents streaming output in parallel, each in its own worktree.
        </figcaption>
      </figure>

      <h2 id="why-isolation">Why isolation matters</h2>
      <ul>
        <li>
          <strong>No collisions.</strong> Two agents editing the same file in the same directory would
          fight. In separate worktrees they can&apos;t — each change lands in its own branch.
        </li>
        <li>
          <strong>Parallel, not queued.</strong> Agents don&apos;t wait their turn on one working copy.
          They run at the same time and meet only when you merge.
        </li>
        <li>
          <strong>Main stays clean.</strong> Nothing touches <code>main</code> until you review a diff
          and choose to merge it. Work in progress never leaks into the shared branch.
        </li>
      </ul>

      <h2 id="spawn-track-merge">The spawn → track → merge flow</h2>
      <p>
        This is the loop you use every day. Spawn an agent on a worktree, watch it on the board, then
        merge the result when you&apos;re happy.
      </p>
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Spawn.</strong> Add an agent to a session. Athena creates a fresh worktree from the
            current base commit and gives the agent its own branch.
          </p>
        </li>
        <li>
          <p>
            <strong>Track.</strong> Its work appears on the board — branches, commits, and PRs stream
            in as they happen. You see where each agent is without juggling tabs.
          </p>
        </li>
        <li>
          <p>
            <strong>Merge.</strong> Review the diff in isolation, then merge. Athena coordinates the
            merge; it never guesses for you.
          </p>
        </li>
      </ol>

      <Callout type="info" title="Same history, different working copies">
        <p>
          Worktrees share one git history — there&apos;s no duplicated repository. You get the safety
          of isolation without paying for N full clones.
        </p>
      </Callout>
    </DocsArticle>
  )
}
