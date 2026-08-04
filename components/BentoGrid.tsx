import Reveal from './Reveal'

type Tile = {
  /** Static screenshot (poster + fallback) */
  image: string
  /** Optional looping capture; served via <picture> when present */
  gif?: string
  alt: string
  eyebrow: string
  title: string
  desc?: string
  /** Grid span classes — only takes effect at lg (6-col grid) */
  span: string
}

const TILES: Tile[] = [
  {
    image: '/screens/parallel-worktrees.jpg',
    gif: '/screens/parallel-worktrees.gif',
    alt: 'Athena running several agents in parallel git worktrees',
    eyebrow: 'Parallel worktrees',
    title: 'Five agents. Five branches. One prompt.',
    desc: 'Fan a single request across as many agents as you like — each in its own isolated worktree — then compare the results and merge the winner.',
    span: 'lg:col-span-4 lg:row-span-2'
  },
  {
    image: '/screens/design-mode.jpg',
    alt: 'Athena Design Mode with the embedded browser',
    eyebrow: 'Design Mode',
    title: 'A browser your agent can drive',
    desc: 'Point an agent at the running app and watch it iterate the UI in the embedded browser — no tab-juggling.',
    span: 'lg:col-span-2 lg:row-span-2'
  },
  {
    image: '/screens/terminal-splits.jpg',
    alt: 'Split terminals inside Athena',
    eyebrow: 'Terminal splits',
    title: 'Every agent streaming at once',
    span: 'lg:col-span-2'
  },
  {
    image: '/screens/annotate-diff.jpg',
    alt: 'Annotating an AI-generated diff',
    eyebrow: 'Annotate AI diffs',
    title: 'Review changes with comments inline',
    span: 'lg:col-span-2'
  },
  {
    image: '/screens/github-linear.jpg',
    alt: 'GitHub pull requests and Linear issues inside Athena',
    eyebrow: 'GitHub · Linear',
    title: 'PRs, issues and tasks in one timeline',
    span: 'lg:col-span-2'
  },
  {
    image: '/screens/file-drag.jpg',
    alt: 'Dragging files and images into an agent prompt',
    eyebrow: 'Drag anything in',
    title: 'Drop files and images straight into a prompt',
    desc: 'No path-typing. Drag a file, a folder or a screenshot onto the composer and the agent gets it as context.',
    span: 'lg:col-span-4'
  },
  {
    image: '/screens/ssh-worktrees.jpg',
    alt: 'Remote worktrees over SSH inside Athena',
    eyebrow: 'SSH worktrees',
    title: 'Remote agents, same pane',
    span: 'lg:col-span-2'
  }
]

/** Real GUI captures from the Athena desktop app, laid out as a bento grid. */
export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[13rem]">
      {TILES.map((t, i) => (
        <Reveal key={t.title} delay={(i % 3) * 70} className={`h-full ${t.span}`}>
          <figure className="group relative h-full min-h-56 overflow-hidden border border-hairline-soft bg-surface-1 transition-colors duration-300 hover:border-hairline lg:min-h-0">
            <picture>
              {t.gif && <source srcSet={t.gif} type="image/gif" />}
              <img
                src={t.image}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </picture>
            {/* Legibility scrim — bottom-up, fades the label area */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              aria-hidden
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="caption text-white/60">{t.eyebrow}</p>
              <h3 className="headline mt-1 text-white">{t.title}</h3>
              {t.desc && <p className="body mt-1.5 max-w-md text-white/75">{t.desc}</p>}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}
