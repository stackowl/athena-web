import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Getting started',
  description:
    'Installeer Athena, maak je eerste session en voeg agents toe - van begin tot eind zo\'n vijf minuten.'
}

const STEPS = [
  {
    n: '01',
    title: 'Installeer Athena',
    desc: 'Download de installer voor jouw platform en start de app. Geen account, geen aanmelding, geen telemetrie.'
  },
  {
    n: '02',
    title: 'Maak een session',
    desc: 'Een session is een workspace plus de agents die eraan werken. Maak er een en wijs hem naar een project - een folder of git repo, lokaal of via SSH.'
  },
  {
    n: '03',
    title: 'Voeg agents toe',
    desc: 'Elke agent krijgt zijn eigen geïsoleerde worktree, zijn eigen context en zijn eigen opdracht. Voeg Codex, Claude Code, OpenCode of Pi toe - of mix ze.'
  },
  {
    n: '04',
    title: 'Volg & merge',
    desc: 'Elke branch, commit en PR stroomt in één board. Bekijk het werk van elke agent apart, en merge daarna de winnaars.',
  }
]

export default function GettingStartedPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Docs · Getting started"
        title="Van installatie naar parallelle agents"
        lede={
          <>
            Kun je een terminal en git draaien, dan weet je eigenlijk al alles wat je nodig hebt. Vijf
            minuten van downloaden naar je eerste parallelle agents.
          </>
        }
      />

      <section className="py-20">
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Hoe een session eruitziet</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Zet een paar agents op en kijk hoe hun status het board binnenstroomt - branches,
              PRs en alles erbij.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/hero.jpg"
              alt="Athena-desktopapp met agents die in parallelle worktrees draaien"
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
              <p className="headline mt-2 text-ink">Worktrees begrijpen</p>
              <p className="body mt-2 text-ink-muted">
                Waarom elke agent zijn eigen geïsoleerde checkout krijgt - en hoe je de winnaars
                zonder angst merged.
              </p>
              <Link href="/docs/worktrees" className="btn btn-secondary group mt-6">
                Lezen: Worktrees
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
