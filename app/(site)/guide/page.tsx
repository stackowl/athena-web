import type { Metadata } from 'next'
import Link from 'next/link'
import { APP, AGENT_CLIS } from '@/lib/config'
import AgentCliIcon from '@/components/AgentCliIcon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TerminalMock from '@/components/TerminalMock'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Guide',
  description: `Een snelle startgids voor ${APP.product} - installatie, eerste session, agents, worktrees en skills.`
}

const STEPS = [
  {
    n: '01',
    title: 'Installeer Athena',
    desc: 'Download de installer voor jouw platform en start de app. Geen account, geen aanmelding, geen telemetry.'
  },
  {
    n: '02',
    title: 'Maak een session',
    desc: 'Een session is een workspace plus de agents die eraan werken. Maak er een aan en wijs hem op een project - folder of git repo, lokaal of via SSH.'
  },
  {
    n: '03',
    title: 'Voeg agents toe',
    desc: 'Elke agent krijgt een eigen geïsoleerde worktree, een eigen context en een eigen missie. Voeg Codex, Claude Code, OpenCode of Pi toe - of mix ze.'
  },
  {
    n: '04',
    title: 'Track & merge',
    desc: "Elke branch, commit en PR stroomt in één board. Review het werk van elke agent apart en merge dan de winnaars."
  }
]

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="currentColor"
      className="mt-0.5 shrink-0 text-success"
      aria-hidden
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 6.4l-4 4a.8.8 0 0 1-1.1 0l-2-2a.8.8 0 1 1 1.1-1.1L7 8.8l3.4-3.4a.8.8 0 1 1 1.1 1z" />
    </svg>
  )
}

export default function GuidePage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Handleiding"
        title="Van installatie tot parallelle agents"
        lede={
          <>
            Een tour van vijf minuten door {APP.product}. Kun je een terminal en git aan? Dan weet
            je al alles wat je nodig hebt.
          </>
        }
      />

      {/* ── Steps ────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 100}>
                <div className="card h-full border border-hairline-soft p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center border border-hairline bg-canvas font-mono text-xs text-ink-muted">
                      {s.n}
                    </span>
                    <h2 className="headline text-ink">{s.title}</h2>
                  </div>
                  <p className="body mt-3 text-ink-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What it looks like ───────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Zo ziet een session eruit</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Start een paar agents en kijk hoe hun status de terminal en het board binnenstroomt - branches,
              PRs en alles erbij.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <TerminalMock />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Agents & skills ──────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="display-md text-ink">Neem je eigen agents mee</h2>
            <p className="body mt-3 text-ink-muted">
              Athena orchestreert de CLIs die je al gebruikt. Installeer er minstens één, zet hem op
              je PATH en voeg hem toe aan een session - de setup guide kan ze desgewenst voor je
              installeren.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {AGENT_CLIS.map((cli) => (
                <span
                  key={cli.id}
                  className="flex items-center gap-2 border border-hairline bg-surface-1 px-3 py-1.5 font-mono text-xs text-ink-muted"
                >
                  <AgentCliIcon cli={cli} />
                  {cli.label}
                </span>
              ))}
            </div>
            <p className="micro mt-4 text-ink-muted">
              Eén tegelijk of een heel team in dezelfde session - elk in een eigen worktree.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="display-md text-ink">Leer het je workflows</h2>
            <p className="body mt-3 text-ink-muted">
              Skills en plugins maken van Athena meer dan een parallel-agent runner: jouw team.
              Veelgebruikte recepten:
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>
                  <strong className="font-semibold text-ink">Code review</strong> - stuur na elke
                  wijziging een verse reviewer agent met een schone context op pad.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>
                  <strong className="font-semibold text-ink">Release automation</strong> - een skill
                  die de build draait, de versie verhoogt en de PR opent.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>
                  <strong className="font-semibold text-ink">Background fixes</strong> - vuur een
                  agent af op een bug terwijl jij doorwerkt op de mainline.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Terminal commands ────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">De CLI, als je van terminals houdt</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Alles wat de app doet, kun je ook vanaf de command line. Het ritme is: maak een
              session, voeg agents toe, volg status, merge.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <pre className="codeblock mt-8 max-w-3xl">{`$ athena session create --name ship-v2
$ athena session add agent --model claude --worktree feat/api
$ athena session add agent --model o4 --worktree feat/ui
$ athena status
feat/api  ✓ api routes done · PR #184 merged · 3 commits
feat/ui   ✓ design tokens done · PR #185 open · 5 commits
tracking 4 sessions · 2 worktrees · 0 conflicts`}</pre>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Klaar wanneer jij dat bent</h2>
            <p className="body mt-3 text-ink-muted">
              Download Athena en geef je volgende feature een heel team agents.
            </p>
            <Link href="/download" className="btn btn-primary group mt-8">
              Download Athena - het is gratis
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
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
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
