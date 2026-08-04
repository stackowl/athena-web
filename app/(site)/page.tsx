import { APP } from '@/lib/config'
import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'
import BentoGrid from '@/components/BentoGrid'
import OrchestrationReel from '@/components/OrchestrationReel'
import AgentIconWall from '@/components/AgentIconWall'
import TechnicalFrame from '@/components/TechnicalFrame'
import ConnectorLine from '@/components/ConnectorLine'

/* eslint-disable @next/next/no-img-element -- static-host portable; next/image needs a server optimizer */

const STATS = [{ to: 35, suffix: '', label: "agent-CLI's ondersteund" }]

const STEPS = [
  {
    n: '01',
    title: 'Spawn agents',
    desc: 'Maak een session aan en voeg Codex, Claude Code, OpenCode of Pi toe - elke agent krijgt zijn eigen geïsoleerde worktree, zijn eigen context, zijn eigen missie.'
  },
  {
    n: '02',
    title: 'Houd alles bij',
    desc: 'Elke branch, commit en PR komt in één board terecht. Niks gaat verloren in de ruis, en je weet altijd wat elke agent aan het doen is.'
  },
  {
    n: '03',
    title: 'Merge met vertrouwen',
    desc: "Review het werk van elke agent in isolatie en merge dan de winnaars. Athena coördineert de merge - het raadt nooit voor jou."
  }
]

const AUDIENCES = [
  {
    title: 'Voor solo-builders',
    lede: 'Prompt één keer, krijg meerdere implementaties om te vergelijken. Je persoonlijke agent-team, op jouw machine.',
    href: '/docs/first-session',
    cta: 'Begin met bouwen',
    icon: 'M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 1 1 6 0v3H9z'
  },
  {
    title: 'Voor teams',
    lede: 'Elke agent werkt in zijn eigen worktree, dus parallel werk botst nooit. Review de diffs in isolatie, merge de winnaars, hou main clean.',
    href: '/docs/model/worktrees',
    cta: 'Zie hoe worktrees je veilig houden',
    icon: 'M6 3v12M18 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 9a9 9 0 0 1-9 9'
  },
  {
    title: 'Voor platform-engineers',
    lede: 'Skills en plugins vertalen je playbooks. Draai via SSH en WSL, self-host, en blijf MIT open source - geen lock-in, geen telemetry.',
    href: '/docs/cli/skills',
    cta: 'Brei Athena uit',
    icon: 'M12 2l2.4 2.4 3.4-.5.5 3.4L21 9.7l-2.4 2.4.5 3.4-3.4.5L12 20.7l-2.4-2.4-3.4.5-.5-3.4L3 9.7l2.4-2.4-.5-3.4 3.4-.5L12 2zm0 4.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z'
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

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export default function Home() {
  return (
    <TechnicalFrame>
      {/* -- Hero --------------------------------------- */}
      <section className="relative overflow-hidden text-center">
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
          <a
            href="/download"
            className="anim-hero inline-flex items-center gap-2 border border-hairline bg-surface-1 px-3 py-1.5 transition-colors hover:border-hairline hover:bg-surface-2"
            style={{ animationDelay: '0ms' }}
          >
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            <span className="caption text-ink-muted">
              v{APP.version} · pre-release
              <span className="mx-2 text-ink-muted/50">—</span>
              <span className="text-accent">Windows is live</span>
            </span>
          </a>

          <h1
            className="anim-hero display-xl mx-auto mt-8 max-w-4xl text-ink"
            style={{ animationDelay: '90ms' }}
          >
            Je agents, in parallel
            <span className="block text-ink-muted">zonder opstoppingen</span>
          </h1>

          <div className="anim-hero mt-10" style={{ animationDelay: '360ms' }}>
            <img
              src="/screens/hero.jpg"
              alt="De Athena desktop-app die agents draait in parallelle worktrees"
              className="mx-auto w-full max-w-3xl border border-hairline-soft shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              fetchPriority="high"
            />
          </div>

          <p
            className="anim-hero body-lg mx-auto mt-8 max-w-2xl text-ink-muted"
            style={{ animationDelay: '180ms' }}
          >
            Draai Codex, Claude Code, OpenCode of Pi naast elkaar. Athena geeft elke agent zijn eigen
            geïsoleerde worktree zodat ze nooit botsen op jouw bestanden, houdt elke branch en PR bij
            in één board en bewaart context tussen sessions - alles op jouw machine.
          </p>

          <div
            className="anim-hero mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '225ms' }}
          >
            <a href="/download" className="btn btn-primary group">
              Download Athena
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="https://github.com/stackowl/athena"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon />
              Bekijk op GitHub
            </a>
          </div>
        </div>
      </section>

      {/* -- Convergence funnel --------------------------- */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2
              className="display-lg mx-auto max-w-3xl text-center text-ink"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 3.75rem)' }}
            >
              Eén platform om ze allemaal te orkestreren.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <OrchestrationReel />
          </Reveal>
        </div>
      </section>

      {/* -- Stats ---------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="divide-y divide-dashed divide-hairline">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              {i === 0 ? (
                /* first stat — agent-icon wall as the block background */
                <div className="relative min-h-[160px] overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
                    <AgentIconWall />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_50%,rgba(10,11,13,0.9),rgba(10,11,13,0.35))]"
                    aria-hidden
                  />
                  <div className="relative z-10 flex min-h-[160px] flex-col items-center justify-center px-4 text-center">
                    <p className="display-md text-ink">
                      <CountUp to={s.to} suffix={s.suffix} />
                    </p>
                    <p className="caption mt-2 text-ink-muted">{s.label}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
                  <p className="display-md text-ink">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="caption mt-2 text-ink-muted">{s.label}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* -- How it works -------------------------------- */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="display-lg text-ink">
                Live in vijf minuten
                <span className="block text-ink-muted">- niet vijf sprints</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-14 grid gap-10 md:grid-cols-3">
            <ConnectorLine className="pointer-events-none absolute inset-x-0 top-4 hidden md:block" />
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="relative">
                <span className="relative z-10 grid h-8 w-8 place-items-center border border-hairline bg-surface-1 font-mono text-xs text-ink-muted">
                  {s.n}
                </span>
                <h3 className="headline mt-4 text-ink">{s.title}</h3>
                <p className="body mt-2 text-ink-muted">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Real screens in a bento grid ------------------ */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="display-lg text-ink">
                Eén venster, een heel team agents
                <span className="block text-ink-muted">- echte screens uit de desktop-app</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14">
            <BentoGrid />
          </div>
        </div>
      </section>

      {/* -- Why Athena ----------------------------------- */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="display-lg text-ink">
                Gemaakt voor hoe jij werkt
                <span className="block text-ink-muted">- niet hoe jouw stack het wil</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.title} delay={i * 90} className="h-full">
                <a
                  href={a.href}
                  className="card group flex h-full flex-col border border-hairline-soft p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-hairline hover:bg-surface-2"
                >
                  <span className="grid h-10 w-10 place-items-center bg-surface-2 text-ink transition-colors duration-300 group-hover:bg-canvas">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                      <path d={a.icon} />
                    </svg>
                  </span>
                  <h3 className="headline mt-5 text-ink">{a.title}</h3>
                  <p className="body mt-2 flex-1 text-ink-muted">{a.lede}</p>
                  <span className="micro mt-4 inline-flex items-center gap-1 text-accent transition-transform duration-200 group-hover:translate-x-0.5">
                    {a.cta}
                    <ArrowIcon />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA ------------------------------------------ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <Reveal>
            <h2 className="display-lg text-ink">Maak de switch naar parallel development.</h2>
            <p className="body-lg mt-4 text-ink-muted">
              Download Athena ADE en geef je volgende feature een heel team agents.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/download"
                className="btn btn-primary group transition-shadow hover:shadow-[0_0_60px_rgba(50,240,140,0.3)]"
              >
                Download Athena - het is gratis
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </a>
              <a href={APP.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <GithubIcon />
                Bekijk het op GitHub
              </a>
            </div>
            <p className="micro mt-4 text-ink-muted">macOS · Windows · Linux</p>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
