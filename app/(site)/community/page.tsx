import type { Metadata } from 'next'
import { APP } from '@/lib/config'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Community',
  description: `Sluit je aan bij de ${APP.product}-community - Discord, GitHub issues en WeChat-groepen voor builders die agents parallel draaien.`
}

const CHANNELS = [
  {
    title: 'Discord',
    desc: 'Real-time chat met andere Athena-gebruikers en de maintainers. Laat je setups zien, vraag hulp, meld bugs snel.',
    href: APP.discordUrl,
    cta: 'Sluit aan op Discord',
    icon: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.9 13.2c-.3.9-.9 1.5-1.4 2.1-.9.9-2.1.9-3.1.9-1 0-2.2 0-3.1-.9-.5-.5-1.1-1.2-1.4-2.1-.2-.5-.1-1-.2-1.5-.1-.6-.4-1.1-.6-1.7.2-.1.5-.2.7-.2.4-.1.7-.1 1.1-.1.2 0 .3.2.4.3.5.8 1 1.5 1.7 2 .3.2.7.2 1 .2s.7 0 1-.2c.7-.5 1.3-1.2 1.7-2 .1-.1.2-.3.4-.3.4 0 .7.1 1.1.1.2 0 .5.1.7.2-.2.6-.5 1.1-.6 1.7-.1.5 0 1-.2 1.5zM8.5 10.5c-.7 0-1.2-.6-1.2-1.3s.5-1.3 1.2-1.3 1.2.6 1.2 1.3-.5 1.3-1.2 1.3zm7 0c-.7 0-1.2-.6-1.2-1.3s.5-1.3 1.2-1.3 1.2.6 1.2 1.3-.5 1.3-1.2 1.3z'
  },
  {
    title: 'GitHub',
    desc: 'Open issues, stuur PRs, lees de source. Athena is MIT-gelicentieerd - het hele project staat op GitHub.',
    href: APP.githubUrl,
    cta: 'Geef een star op GitHub',
    icon: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z'
  },
  {
    title: 'Issues',
    desc: 'Bug gevonden of wil je een feature? Open een issue - maintainers en de community triagen ze op GitHub.',
    href: APP.issuesUrl,
    cta: 'Open een issue',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v7h-2V7zm0 9h2v2h-2v-2z'
  }
]

/* eslint-disable @next/next/no-img-element -- static-host portable */

export default function CommunityPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Community"
        title="Build with us"
        lede={
          <>
            Athena wordt in het openbaar gebouwd, samen met de mensen die het gebruiken. Krijg hulp,
            deel workflows, of kijk gewoon wat parallelle agents kunnen.
          </>
        }
      />

      {/* ── Channels ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70} className="h-full">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex h-full flex-col border border-hairline-soft p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-hairline hover:bg-surface-2"
                >
                  <span className="grid h-10 w-10 place-items-center bg-surface-2 text-ink transition-colors duration-300 group-hover:bg-canvas">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                      <path d={c.icon} />
                    </svg>
                  </span>
                  <h3 className="headline mt-5 text-ink">{c.title}</h3>
                  <p className="body mt-2 flex-1 text-ink-muted">{c.desc}</p>
                  <span className="micro mt-4 inline-flex items-center gap-1 text-accent transition-transform duration-200 group-hover:translate-x-0.5">
                    {c.cta}
                    <svg
                      viewBox="0 0 16 16"
                      width="12"
                      height="12"
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
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WeChat ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">WeChat</p>
              <h2 className="display-md mt-3 text-ink">中文社区</h2>
              <p className="body mt-3 text-ink-muted">
                Scan een QR-code om mee te doen aan de Chinese WeChat-groepen.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-2xl">
            <Reveal delay={80}>
              <img
                src="/community/wechat-qr.jpg"
                alt="QR-code van WeChat-groep 5"
                className="w-full max-w-xs border border-hairline-soft"
              />
              <p className="caption mt-3 text-ink-muted">Groep 5</p>
            </Reveal>
            <Reveal delay={160}>
              <img
                src="/community/wechat-qr-group6.jpg"
                alt="QR-code van WeChat-groep 6"
                className="w-full max-w-xs border border-hairline-soft"
              />
              <p className="caption mt-3 text-ink-muted">Groep 6</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contribute ───────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Wil je bijdragen?</h2>
            <p className="body mt-3 text-ink-muted">
              Het repo is MIT-gelicentieerd en de roadmap is openbaar. Kies een issue, open een PR of
              start een gesprek op Discord.
            </p>
            <a
              href={APP.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary group mt-8"
            >
              Bekijk de source
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
            </a>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
