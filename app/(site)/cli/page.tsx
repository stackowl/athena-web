import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'CLI',
  description: `De ${APP.product} CLI - maak sessions, spawn worktrees, stuur agents aan en volg de status zonder je terminal te verlaten.`
}

const COMMANDS: { title: string; desc: string; code: string }[] = [
  {
    title: 'Maak een session',
    desc: 'Een session is een workspace plus de agents die eraan werken. Wijs hem naar een project - een folder of git repo, lokaal of via SSH.',
    code: `$ athena session create --name ship-v2`
  },
  {
    title: 'Spawn agents in worktrees',
    desc: 'Elke agent krijgt zijn eigen geïsoleerde worktree - geen botsingen, ook niet als ze tegelijk aan dezelfde repo werken.',
    code: `$ athena worktree create --name feat/api --agent codex
$ athena worktree create --name feat/ui --agent claude`
  },
  {
    title: 'Volg de status op één plek',
    desc: 'Elke branch, PR en commit stroomt in één statusregel.',
    code: `$ athena status
feat/api  ✓ api routes done · PR #184 merged · 3 commits
feat/ui   ✓ design tokens done · PR #185 open · 5 commits
tracking 4 sessions · 2 worktrees · 0 conflicts`
  },
  {
    title: 'Orkestreer een team van agents',
    desc: 'Stuur gestructureerde taken naar begeleide workers, verzamel worker_done-rapporten en los decision gates op - allemaal vanuit de CLI.',
    code: `$ athena orchestration run-create --objective "Ship login v2"
$ athena orchestration task-create --spec "Refactor auth service"
$ athena orchestration worker-start --task <task_id> --worktree current --agent codex
$ athena orchestration check --wait --types worker_done,escalation,question --timeout-ms 900000`
  }
]

const CAPABILITIES = [
  {
    title: 'Worktree-beheer',
    desc: 'Maak child- of top-level worktrees met git-lineage ingebakken - geen handmatig branch-gesleep.'
  },
  {
    title: 'Terminal-bediening',
    desc: 'Maak, split, lees en stuur naar terminals. Spring vanuit een shell naar elke agent-session.'
  },
  {
    title: 'Remote & SSH hosts',
    desc: 'Draai agents op WSL, SSH-hosts of verbonden servers met --on <saved-environment>.'
  },
  {
    title: 'Ticket-integratie',
    desc: 'Lees, triage en update Linear-issues vanuit de terminal - athena linear ...'
  },
  {
    title: 'Machine-leesbare output',
    desc: 'Elk commando spreekt --json, zodat scripts en agents Athena kunnen aansturen.'
  },
  {
    title: 'Scriptable & composable',
    desc: 'De hele app is scriptable vanuit de shell. De GUI is een dunne laag op hetzelfde fundament.'
  }
]

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  )
}

export default function CliPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="CLI"
        title="Jouw terminal, georkestreerd"
        lede={
          <>
            Alles wat de app doet, kan vanaf de commandoregel. Maak sessions, spawn agents in
            geïsoleerde worktrees, stuur georkestreerde taken aan en volg het hele bord via{' '}
            <span className="font-mono text-ink">athena status</span> - geen GUI nodig.
          </>
        }
      />

      {/* ── Command walkthrough ──────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Het ritme</p>
              <h2 className="display-lg mt-3 text-ink">
                Sessions, worktrees, status
                <span className="block text-ink-muted">- de hele loop in vier commando’s</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {COMMANDS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 100}>
                <div className="card h-full border border-hairline-soft p-6">
                  <span className="grid h-8 w-8 place-items-center border border-hairline bg-canvas font-mono text-xs text-ink-muted">
                    0{i + 1}
                  </span>
                  <h3 className="headline mt-4 text-ink">{c.title}</h3>
                  <p className="body mt-2 text-ink-muted">{c.desc}</p>
                  <pre className="codeblock mt-4">{c.code}</pre>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Mogelijkheden</p>
              <h2 className="display-md mt-3 text-ink">Krachtig op elke schaal</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={(i % 3) * 70} className="h-full">
                <div className="card h-full border border-hairline-soft p-5">
                  <h3 className="headline text-ink">{cap.title}</h3>
                  <p className="body mt-2 text-ink-muted">{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Install ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="display-md text-ink">Binnen één install aan de slag</h2>
              <p className="body mt-3 text-ink-muted">
                De CLI wordt meegeleverd met {APP.product}. Installeer de app voor jouw platform en{' '}
                <span className="font-mono text-ink">athena</span> staat op je PATH - de desktop-app
                en de terminal praten tegen dezelfde runtime.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link href="/download" className="btn btn-primary group">
                  Download Athena
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowIcon />
                  </span>
                </Link>
                <Link
                  href="/docs/cli"
                  className="text-accent underline underline-offset-2 hover:opacity-80"
                >
                  CLI-referentie →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <pre className="codeblock">{`$ athena open --json
{ "runtime": "running", "sessions": 1, "worktrees": 2 }

$ athena status --json
{ "sessions": 4, "worktrees": 2, "conflicts": 0 }`}</pre>
            </Reveal>
          </div>
        </div>
      </section>
    </TechnicalFrame>
  )
}
