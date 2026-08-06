'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { APP } from '@/lib/config'
import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'
import OrchestrationReel from '@/components/OrchestrationReel'
import AgentIconWall from '@/components/AgentIconWall'
import TechnicalFrame from '@/components/TechnicalFrame'
import { TextShimmer } from '@/components/TextShimmer'
import { useLanguage } from '@/components/LanguageContext'

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

function FluidStepsStack({ steps }: { steps: { n: string; title: string; desc: string }[] }) {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, idx) => {
        const isActive = activeIdx === idx
        return (
          <motion.div
            key={step.n}
            layout
            onClick={() => setActiveIdx(idx)}
            className={`cursor-pointer rounded-2xl border p-8 transition-colors duration-200 ${
              isActive
                ? 'border-primary/40 bg-surface-1'
                : 'border-hairline bg-surface-1/40 hover:border-white/20'
            }`}
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs font-semibold text-primary">{step.n}</span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block h-2 w-2 rounded-full bg-primary"
                />
              )}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
          </motion.div>
        )
      })}
    </div>
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

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export default function Home() {
  const { t } = useLanguage()

  return (
    <TechnicalFrame>
      {/* -- Hero --------------------------------------- */}
      <section className="relative overflow-hidden text-center pt-8 pb-16 sm:pt-16 sm:pb-24">
        {/* Full-Bleed 35 Agent CLI Background Wall */}
        <div className="pointer-events-none absolute inset-0 opacity-35 overflow-hidden scale-105" aria-hidden>
          <AgentIconWall repeat={3} variant="background" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_35%,rgba(10,11,13,0.65),#0a0b0d)]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
          {/* Main Headline with Inline Logo Badge */}
          <h1
            className="anim-hero display-xl mx-auto mt-0 max-w-4xl text-ink"
            style={{ animationDelay: '90ms' }}
          >
            {t.hero.title} <TextShimmer>{t.hero.shimmerText}</TextShimmer>
            <span className="block text-ink-muted">{t.hero.subhead}</span>
          </h1>

          {/* Subtitle / Description */}
          <p
            className="anim-hero body-lg mx-auto mt-8 max-w-2xl text-ink-muted"
            style={{ animationDelay: '180ms' }}
          >
            {t.hero.desc}
          </p>

          {/* CTA Buttons */}
          <div
            className="anim-hero mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4"
            style={{ animationDelay: '225ms' }}
          >
            <a
              href="/download"
              className="btn btn-primary group"
            >
              {t.hero.downloadBtn}
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="/docs"
              className="btn btn-secondary"
            >
              Documentation
            </a>
          </div>

          {/* Main Hero App Screenshot with Ambient Glow */}
          <div className="anim-hero relative mt-12 sm:mt-16" style={{ animationDelay: '360ms' }}>
            {/* Ambient Light / Glow behind the hero image */}
            <div 
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[80%] rounded-full bg-primary/20 blur-[100px] opacity-70"
              aria-hidden
            />

            <img
              src="/screens/hero.jpg"
              alt="Athena Desktop App"
              className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl border border-hairline-soft shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
              fetchPriority="high"
            />
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
              {t.funnel.title}
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
              <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
                <p className="display-md text-ink">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="caption mt-2 text-ink-muted">{s.label}</p>
              </div>
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
                {t.howItWorks.title}
                <span className="block text-ink-muted">{t.howItWorks.subhead}</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <FluidStepsStack
              steps={[
                { n: '01', title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
                { n: '02', title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
                { n: '03', title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc },
              ]}
            />
          </Reveal>
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
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface-1/60 p-7 backdrop-blur-md transition-colors duration-200 hover:border-primary/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-black">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                        <path d={a.icon} />
                      </svg>
                    </span>
                    <span className="font-mono text-[10px] font-medium tracking-wider text-ink-muted uppercase">
                      [ WORKFLOW ]
                    </span>
                  </div>
                  <h3 className="headline-sm mt-5 text-ink group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="body-sm mt-2 flex-1 text-ink-muted leading-relaxed">{a.lede}</p>
                  <span className="micro mt-5 inline-flex items-center gap-1.5 font-mono text-primary transition-transform duration-200 group-hover:translate-x-1">
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
            <h2 className="display-lg text-ink">
              {t.cta.title} <TextShimmer>{t.cta.shimmerText}</TextShimmer>.
            </h2>
            <p className="body-lg mt-4 text-ink-muted">
              {t.cta.desc}
            </p>
            <div className="mt-10 flex flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/download"
                className="btn btn-primary group transition-shadow hover:shadow-[0_0_60px_rgba(50,240,140,0.3)]"
              >
                {t.cta.downloadBtn}
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </a>
              <a href="/docs" className="btn btn-secondary">
                Documentation
              </a>
            </div>
            <p className="micro mt-4 text-ink-muted">{t.cta.osList}</p>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
