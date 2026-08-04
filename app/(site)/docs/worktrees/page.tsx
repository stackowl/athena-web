import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Worktrees',
  description:
    'Hoe parallelle worktrees voorkomen dat agents elkaars bestanden overschrijven, en hoe je de winnaars veilig merged.'
}

const WHY = [
  {
    title: 'Geen botsingen',
    desc: "Elke agent bewerkt zijn eigen kopie van de codebase. Twee agents kunnen tegelijk aan dezelfde repo werken en overschrijven nooit elkaars bestanden."
  },
  {
    title: 'Niet wachten',
    desc: 'Agents draaien naast elkaar in plaats van achter elkaar in de rij. Zet een heel team op één feature.'
  },
  {
    title: 'Schone main branch',
    desc: 'Er komt niets op main voordat jij het hebt gereviewed. Merge de winnaars apart, en houd de verliezers uit de history.'
  }
]

const FLOW = [
  {
    n: '01',
    title: 'Spawn',
    desc: 'Maak een session en voeg agents toe - elke agent krijgt zijn eigen worktree vanaf dezelfde base.'
  },
  {
    n: '02',
    title: 'Track',
    desc: 'Branches, commits en PRs stromen in één board. Je ziet in één oogopslag waar elke agent mee bezig is.'
  },
  {
    n: '03',
    title: 'Merge',
    desc: "Review elke diff apart en merge daarna de winnaars. Athena coördineert de merge - hij raadt niet voor jou."
  }
]

export default function WorktreesPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Docs · Worktrees"
        title="Parallelle worktrees, uitgelegd"
        lede={
          <>
            Het kernidee achter Athena: geef elke agent zijn eigen geïsoleerde checkout van de repo,
            zodat een team agents werkt als een team mensen - parallel, zonder elkaar voor de voeten
            te lopen.
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Waarom isolatie ertoe doet</p>
              <h2 className="display-lg mt-3 text-ink">
                Aparte kopieën,
                <span className="block text-ink-muted">gedeelde history</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 70} className="h-full">
                <div className="card h-full border border-hairline-soft p-6">
                  <h3 className="headline text-ink">{w.title}</h3>
                  <p className="body mt-2 text-ink-muted">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Spawn · Track · Merge</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Het ritme dat je main branch schoon houdt terwijl agents werk verzetten.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {FLOW.map((s, i) => (
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
            <h2 className="display-md text-ink">In de app</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Agents die hun eigen worktrees binnenstromen, met elke branch bijgehouden op het board.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/parallel-worktrees.jpg"
              alt="Agents die in parallelle worktrees draaien met branch-status"
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
              <p className="headline mt-2 text-ink">Neem je eigen agents mee</p>
              <p className="body mt-2 text-ink-muted">
                Welke CLI’s Athena orchestreert, en hoe ze in sessions passen.
              </p>
              <Link href="/docs/agents" className="btn btn-secondary group mt-6">
                Lezen: Agents
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
