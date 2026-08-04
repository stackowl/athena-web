import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_CLIS } from '@/lib/config'
import AgentCliIcon from '@/components/AgentCliIcon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Agents',
  description:
    'Neem je eigen agent-CLI\'s mee - Codex, Claude Code, OpenCode, Pi en 30+ meer - en orchestreer ze naast elkaar.'
}

const POINTS = [
  {
    title: 'Neem je eigen CLI\'s mee',
    desc: 'Athena orchestreert de agent-CLI\'s die je al gebruikt. Installeer er minstens één, houd hem op je PATH, en voeg hem toe aan een session - de setup-guide kan ze desgewenst voor je installeren.'
  },
  {
    title: 'Mix providers in één session',
    desc: 'Draai Codex en Claude Code op dezelfde feature, of verdeel het werk over OpenCode en Pi. Elke agent houdt zijn eigen context en opdracht.'
  },
  {
    title: 'Geen lock-in',
    desc: 'Drivers zijn gewoon adapters over de CLI\'s. Wissel agents per taak, per worktree, of per gewoonte van het team - niets is propriëtair.'
  }
]

const RECIPES = [
  {
    title: 'Code review',
    desc: 'Stuur na elke wijziging een verse reviewer-agent met een schone context - elke keer een echte second opinion.'
  },
  {
    title: 'Fixes op de achtergrond',
    desc: "Zet een agent op een bug terwijl jij op de mainline verderwerkt. Hij werkt in zijn eigen worktree; jij merged zodra hij klaar is."
  },
  {
    title: 'Parallelle feature-slices',
    desc: 'Snijd een feature in slices en geef elke agent er een. Ze werken naast elkaar; jij volgt alles op één board.'
  }
]

export default function AgentsPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Docs · Agents"
        title="Neem je eigen agents mee"
        lede={
          <>
            Athena vervangt je agents niet - het geeft ze ruimte om parallel te werken.
            Installeer de CLI’s die je al gebruikt, voeg ze toe aan een session, en laat Athena de
            coördinatie regelen.
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70} className="h-full">
                <div className="card h-full border border-hairline-soft p-6">
                  <h3 className="headline text-ink">{p.title}</h3>
                  <p className="body mt-2 text-ink-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Ondersteunde CLI’s</p>
              <h2 className="display-md mt-3 text-ink">Eén tegelijk, of een heel team</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-2">
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
              35+ agent-CLI’s ondersteund - elk in zijn eigen worktree in dezelfde session.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Workflows die werken</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {RECIPES.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="card h-full border border-hairline-soft p-6">
                  <h3 className="headline text-ink">{r.title}</h3>
                  <p className="body mt-2 text-ink-muted">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Bijgehouden tegen je tools</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Agent-branches en PRs komen bovendrijven naast je ticketing-workflow - GitHub en
              Linear, in één weergave.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/github-linear.jpg"
              alt="Agentwerk bijgehouden tegen GitHub en Linear"
              className="mt-10 w-full border border-hairline-soft"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <div className="border border-hairline-soft bg-surface-1 p-6">
              <p className="caption text-ink-muted">Daarna</p>
              <p className="headline mt-2 text-ink">Leer het je workflows</p>
              <p className="body mt-2 text-ink-muted">
                Skills en plugins veranderen Athena van een parallelle-agent-runner in je team.
              </p>
              <Link href="/docs/skills" className="btn btn-secondary group mt-6">
                Lezen: Skills
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
            </div>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
