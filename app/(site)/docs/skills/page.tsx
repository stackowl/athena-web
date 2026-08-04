import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Skills en plugins veranderen Athena van een parallelle-agent-runner in je team - code review, release-automatisering en meer.'
}

const RECIPES = [
  {
    title: 'Code review',
    desc: 'Een skill die na elke wijziging een verse reviewer-agent met een schone context stuurt - een echte second opinion, zonder bias door gedeelde state.'
  },
  {
    title: 'Release-automatisering',
    desc: 'Een skill die de build draait, de versie verhoogt en de PR opent. Eén commando, een hele release-pipeline.'
  },
  {
    title: 'Fixes op de achtergrond',
    desc: "Zet een agent op een bug terwijl jij op de mainline verderwerkt. Hij werkt in zijn eigen worktree; jij merged zodra hij klaar is."
  },
  {
    title: 'Security review',
    desc: 'Volg dataflow door bestanden heen en scan op injection, auth-bypass en blootgestelde secrets voordat de PR landt.'
  }
]

const HOW = [
  {
    n: '01',
    title: 'Zet ze neer',
    desc: "Skills leven in je repo of in de skill-map van de app. Het is gewoon markdown - prompts en recipes die je agents kunnen volgen."
  },
  {
    n: '02',
    title: 'Roep ze aan',
    desc: 'Verwijs naar een skill op naam en de agent laadt zijn instructies - van review-recipes tot release-pipelines.'
  },
  {
    n: '03',
    title: 'Breid uit met plugins',
    desc: 'Plugins voegen echte mogelijkheden toe aan de app zelf, niet alleen prompts. Bouw je eigen of gebruik die de community deelt.'
  }
]

export default function SkillsPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Docs · Skills"
        title="Leer het je workflows"
        lede={
          <>
            Skills verpakken prompts en recipes die je agents kunnen volgen; plugins breiden de app
            zelf uit. Samen veranderen ze Athena van een parallelle-agent-runner in je team.
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Vaakgebruikte recipes</p>
              <h2 className="display-lg mt-3 text-ink">
                Begin met de klassiekers,
                <span className="block text-ink-muted">maak daarna je eigen</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {RECIPES.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 90} className="h-full">
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
            <h2 className="display-md text-ink">Hoe skills werken</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {HOW.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="relative">
                <span className="grid h-8 w-8 place-items-center border border-hairline bg-canvas font-mono text-xs text-ink-muted">
                  {s.n}
                </span>
                <h3 className="headline mt-4 text-ink">{s.title}</h3>
                <p className="body mt-2 text-ink-muted">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Skills in actie</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Een design-mode-skill die een agent door een componentwijziging leidt.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/design-mode.jpg"
              alt="Een design-mode-skill toegepast op een component"
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
              <p className="headline mt-2 text-ink">De CLI, volledig</p>
              <p className="body mt-2 text-ink-muted">
                Elk commando - sessions, worktrees, terminals, orchestration, status.
              </p>
              <Link href="/docs/cli" className="btn btn-secondary group mt-6">
                Lezen: CLI reference
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
