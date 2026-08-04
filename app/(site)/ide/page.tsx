import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'IDE',
  description: `De ${APP.product} desktop-app - parallelle worktrees, één overzicht voor elke branch en PR, terminal en skills. Local-first.`
}

const FEATURES = [
  {
    title: 'Parallelle worktrees',
    desc: "Elke agent werkt in zijn eigen geïsoleerde git worktree - geen botsingen, geen wachten, nooit bang om elkaars bestanden te overschrijven.",
    detail:
      'Agents bewerken elk een eigen kopie van de codebase, dus twee agents kunnen elkaars werk nooit overschrijven. Merge de winnaars terug met vertrouwen.',
    icon: 'M4 5a2 2 0 0 1 2-2h3.5a1 1 0 0 1 .8.4L12 5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5z'
  },
  {
    title: 'Breng je eigen agent mee',
    desc: 'Draai Codex, Claude Code, OpenCode of Pi naast elkaar in één session. Athena orkestreert ze allemaal - geen lock-in.',
    detail:
      'Installeer de CLIs die je al gebruikt en voeg ze toe aan een session. Athena stuurt ze allemaal aan, of laat de setup-gids ze voor je installeren.',
    icon: 'M8 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1v4h2v-4h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H8z'
  },
  {
    title: 'Alles op één plek te volgen',
    desc: 'Elke branch, PR, commit en statusregel verschijnt in één paneel. Jij kijkt naar het bord - Athena doet de boekhouding.',
    detail:
      'Niet meer heen en weer tussen terminals en browsertabs. Eén tijdlijn toont de branches, PRs en commits van elke agent zodra ze binnenkomen.',
    icon: 'M4 4a1 1 0 0 1 1-1h1v14H4V4zm4 0h4v14H8V4zm6 0h1a1 1 0 0 1 1 1v12h-2V4zm3 14v2H3v-2h14z'
  },
  {
    title: 'Geïntegreerde terminal',
    desc: 'Een snelle, vertrouwde terminal die je agents begrijpt - spawn, attach en volg live output van agents zonder te wisselen van tab.',
    detail:
      'Split panes, volg agent-sessions en spring vanuit hetzelfde venster naar elke worktree. Geen context-switching, geen extra vensters.',
    icon: 'M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 3.5l3 2.5-3 2.5V7.5zM9 12h4v1.5H9V12z'
  },
  {
    title: 'Uitbreidbare skills',
    desc: 'Voeg skills en plugins toe om Athena je workflows te leren - van code-review-recepten tot release-automatisering.',
    detail:
      'Skills bundelen prompts en recepten die je agents kunnen volgen; plugins breiden de app zelf uit. Het playbook van je team, versiebeheerd in de repo.',
    icon: 'M12 2l2.4 2.4 3.4-.5.5 3.4L21 9.7l-2.4 2.4.5 3.4-3.4.5L12 20.7l-2.4-2.4-3.4.5-.5-3.4L3 9.7l2.4-2.4-.5-3.4 3.4-.5L12 2zm0 4.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z'
  },
  {
    title: 'Local-first & privé',
    desc: 'Alles draait op jouw machine. Je code en agent-sessions verlaten je computer nooit, tenzij jij dat zegt.',
    detail:
      'Geen account, geen telemetrie, geen cloud. De enige netwerk-calls zijn degene die jij zelf start - pushen naar een remote of de API van een agent.',
    icon: 'M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 1 1 6 0v3H9z'
  }
]

const STEPS = [
  {
    n: '01',
    title: 'Spawn agents',
    desc: 'Maak een session en voeg agents toe - elk krijgt zijn eigen worktree, zijn eigen context, zijn eigen missie.'
  },
  {
    n: '02',
    title: 'Volg alles',
    desc: 'Branches, commits, PRs en status-updates stromen in één tijdlijn. Niets verdwijnt in de ruis.'
  },
  {
    n: '03',
    title: 'Merge met vertrouwen',
    desc: "Bekijk het werk van elke agent in isolatie en merge dan de winnaars. Athena houdt je main branch schoon."
  }
]

const FAQ = [
  {
    q: 'Wat is een worktree, en waarom hebben agents er een eigen nodig?',
    a: 'Een git worktree is een aparte checkout van de repository die dezelfde geschiedenis deelt. Elke agent krijgt er één, zodat twee agents tegelijk aan dezelfde codebase kunnen werken zonder ooit dezelfde bestanden te bewerken - geen conflicten, geen overschrijvingen, geen wachten.'
  },
  {
    q: 'Welke agent-CLIs werken met Athena?',
    a: 'Athena bundelt drivers voor Codex, Claude Code, OpenCode en Pi, en ondersteunt 35+ agent-CLIs in totaal. Jij brengt de CLI-binaries mee (of laat de setup-gids ze installeren) en Athena orkestreert de rest.'
  },
  {
    q: 'Wordt mijn code ergens geüpload?',
    a: "Nee. Sessions, context en code blijven op jouw machine. De enige netwerk-calls zijn degene die jij zelf start - pushen naar een remote of praten met de API van je agent-provider."
  },
  {
    q: 'Wat als twee agents dezelfde code moeten aanraken?',
    a: "Ze bewerken aparte worktrees, dus ze overschrijven elkaar nooit. Bij het mergen beoordeel je de diff van elke agent in isolatie en bepaal jij wat er doorgaat - Athena coördineert de merge, maar gokt niet voor jou."
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

const SCREENS = [
  {
    src: '/screens/parallel-worktrees.jpg',
    alt: 'Agents draaien in parallelle worktrees met branch-status'
  },
  { src: '/screens/terminal-splits.jpg', alt: 'Gesplitste terminal-panes die agent-sessions volgen' },
  {
    src: '/screens/annotate-diff.jpg',
    alt: "Aangetekende diff-review voordat het werk van een agent gemerged wordt"
  },
  { src: '/screens/design-mode.jpg', alt: 'Design-mode skill toegepast op een component' }
]

export default function IdePage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="IDE"
        title="Jouw agents, in parallel"
        lede={
          <>
            De {APP.product} desktop-app geeft elke agent zijn eigen worktree, zet elke branch en PR
            op één bord en houdt context bij over sessions - zodat je Codex, Claude Code, OpenCode
            en Pi naast elkaar kunt draaien zonder dat ze elkaar voor de voeten lopen.
          </>
        }
      />

      {/* ── Features ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Wat je krijgt</p>
              <h2 className="display-lg mt-3 text-ink">
                Gebouwd voor teams van één -
                <span className="block text-ink-muted">aangedreven door vele agents</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 70} className="h-full">
                <div className="card group h-full border border-hairline-soft p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-hairline hover:bg-surface-2">
                  <span className="grid h-10 w-10 place-items-center bg-surface-2 text-ink transition-colors duration-300 group-hover:bg-canvas">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                      <path d={f.icon} />
                    </svg>
                  </span>
                  <h3 className="headline mt-5 text-ink">{f.title}</h3>
                  <p className="body mt-2 text-ink-muted">{f.desc}</p>
                  <p className="micro mt-3 text-ink-muted/80">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real screens ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">De workspace van dichtbij</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Echte screens uit de desktop-app - geen mockups, geen renders.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SCREENS.map((s, i) => (
              <Reveal key={s.src} delay={(i % 2) * 100}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.alt} className="w-full border border-hairline-soft" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-lg max-w-2xl text-ink">
              Van één idee naar vele agents
              <span className="block text-ink-muted">in drie stappen</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="relative">
                <span className="grid h-8 w-8 place-items-center border border-hairline bg-surface-1 font-mono text-xs text-ink-muted">
                  {s.n}
                </span>
                <h3 className="headline mt-4 text-ink">{s.title}</h3>
                <p className="body mt-2 text-ink-muted">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Vragen die je vast hebt</h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <details className="faq-item">
                  <summary>
                    <span className="headline text-[1.0625rem] text-ink">{item.q}</span>
                    <span className="faq-chevron">
                      <svg
                        viewBox="0 0 12 12"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-body">
                    <p className="body text-ink-muted">{item.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Klaar om in parallel te bouwen?</h2>
            <p className="body mt-3 text-ink-muted">
              Download Athena en geef je volgende feature een heel team van agents.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/download" className="btn btn-primary group">
                Download Athena
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </Link>
              <Link href="/docs/getting-started" className="btn btn-secondary">
                Lees de getting-started-gids
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-ink-muted">
              <li className="flex items-center gap-1.5">
                <CheckIcon />
                <span className="micro">Local-first standaard</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon />
                <span className="micro">Geen account nodig</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon />
                <span className="micro">Open source (MIT)</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
