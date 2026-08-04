import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Remote & SSH',
  description:
    'Draai Athena op lokale, WSL- en SSH-hosts, behandel folder-workspaces als worktrees, en pair vanuit elke browser.'
}

const MODES = [
  {
    title: 'Lokaal',
    desc: 'De standaard - alles draait op jouw machine, sessions en code blijven waar ze zijn. Geen account, geen telemetrie.'
  },
  {
    title: 'WSL',
    desc: 'Draai Athena tegen een WSL-distro op dezelfde Windows-machine. Agents werken binnen het Linux-bestandssysteem; jij bedient vanaf Windows.'
  },
  {
    title: 'SSH-hosts',
    desc: 'Wijs Athena naar een remote host en draai er sessions. Werkt hetzelfde als lokaal - je code blijft op de host die jij kiest.'
  },
  {
    title: 'Browser-pairing',
    desc: 'Start een pairing-session en bedien hetzelfde board vanuit elke browser - op je telefoon, op een andere machine, via de relay.'
  }
]

const NOTES = [
  "Folder-workspaces zijn first-class: Athena behandelt een gewone folder-workspace hetzelfde als een git worktree, dus niets breekt als een project geen repo is.",
  'Remote-sessies blijven leven door reconnects en backpressure heen - een agent blijft werken, ook als je verbinding wegvalt.',
  'Hosts zijn standaard geïsoleerd: commando\'s draaien op de host die eigenaar is van de session, en capability-checks zijn per host afgebakend.'
]

export default function RemotePage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Docs · Remote & SSH"
        title="Draai het overal"
        lede={
          <>
            Athena maakt niet uit waar de code staat. Lokaal, WSL, een SSH-host of een folder-
            workspace - dezelfde sessions, hetzelfde board, dezelfde agents.
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-5 sm:grid-cols-2">
            {MODES.map((m, i) => (
              <Reveal key={m.title} delay={(i % 2) * 90} className="h-full">
                <div className="card h-full border border-hairline-soft p-6">
                  <h3 className="headline text-ink">{m.title}</h3>
                  <p className="body mt-2 text-ink-muted">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Sessions over SSH, in de app</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Agents die op remote worktrees draaien, bijgehouden op hetzelfde board als lokaal werk.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/ssh-worktrees.jpg"
              alt="Athena-sessions die over SSH draaien op remote worktrees"
              className="mt-10 w-full border border-hairline-soft"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">De moeite waard om te weten</p>
              <h2 className="display-md mt-3 text-ink">De details die ertoe doen</h2>
            </div>
          </Reveal>
          <ul className="mt-10 space-y-4">
            {NOTES.map((n, i) => (
              <Reveal key={n} delay={i * 80}>
                <li className="flex items-start gap-3 border border-hairline-soft bg-surface-1 p-5 text-sm text-ink-muted">
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
                  <span>{n}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <div className="border border-hairline-soft bg-surface-1 p-6">
              <p className="caption text-ink-muted">Begin hier</p>
              <p className="headline mt-2 text-ink">De getting-started-guide nog niet gelezen?</p>
              <p className="body mt-2 text-ink-muted">
                Installatie, eerste session, eerste agents - vijf minuten.
              </p>
              <Link href="/docs/getting-started" className="btn btn-secondary group mt-6">
                Lezen: Getting started
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
