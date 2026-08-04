import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Web',
  description: `Bestuur ${APP.product} vanuit elke browser - koppel je machine via SSH of relay en houd je agents draaiend terwijl je niet achter je bureau zit.`
}

const STEPS = [
  {
    n: '01',
    title: 'Koppel je machine',
    desc: 'Start een koppelsessie vanuit de desktop-app. Athena geeft je een link die je browser verbindt met je draaiende sessies - via SSH of door de relay.'
  },
  {
    n: '02',
    title: 'Volg vanaf elke plek',
    desc: 'Live agent-output, branch- en PR-status, terminals - hetzelfde bord, in elke browsertab op elk apparaat.'
  },
  {
    n: '03',
    title: 'Review en merge',
    desc: 'Laat feedback achter op agent-PR\u2019s, volg CI en merge de winnaars zonder terug naar je bureau te hoeven.'
  }
]

const FAQ = [
  {
    q: 'Is dit hetzelfde als Athena in de cloud draaien?',
    a: 'Nee - het werk draait nog steeds op jouw machine. De browser is een afstandsbediening. Je code verlaat je computer nooit; alleen de sessie-weergave reist mee.'
  },
  {
    q: 'Werkt het via SSH?',
    a: 'Ja. Athena draait op lokale, WSL- en SSH-hosts, en koppelen werkt hetzelfde - maak verbinding met de machine waar de sessies draaien.'
  },
  {
    q: 'Kan ik vanuit de browser met agents werken?',
    a: 'Je kunt sessies volgen, agent-output lezen, diffs en status reviewen en reageren waar de sessie dat toestaat. Zwaar bewerken blijft in de IDE of CLI - de web-omgeving is voor sturen en reviewen.'
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

const SCREENS = [
  {
    src: '/screens/ssh-worktrees.jpg',
    alt: 'Athena sessions running over SSH on remote worktrees'
  },
  {
    src: '/screens/github-linear.jpg',
    alt: 'Agent work tracked against GitHub and Linear from a remote session'
  }
]

export default function WebPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Web"
        title="Jouw machine, vanuit elke browser"
        lede={
          <>
            Koppel {APP.product} één keer en bestuur je sessies vanaf elk apparaat. Live
            agent-output, branch- en PR-status, terminals - hetzelfde bord als achter je bureau,
            gewoon in een browsertab.
          </>
        }
      />

      {/* ── Zo werkt het ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Zo werkt koppelen</p>
              <h2 className="display-lg mt-3 text-ink">
                Eenmaal koppelen, overal sturen
                <span className="block text-ink-muted">- je code verlaat de machine nooit</span>
              </h2>
            </div>
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

      {/* ── Schermen ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Hetzelfde bord, op afstand</h2>
            <p className="body mt-3 max-w-2xl text-ink-muted">
              Echte sessies via SSH en relay - agents die aan remote worktrees werken, bijgehouden
              in je issue-tracker.
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

      {/* ── Veelgestelde vragen ──────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Voor je het vraagt</h2>
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
            <h2 className="display-md text-ink">Houd je agents draaiend</h2>
            <p className="body mt-3 text-ink-muted">
              Koppelen hoort bij {APP.product}. Installeer het, start een sessie en pak de link op
              je telefoon.
            </p>
            <Link href="/download" className="btn btn-primary group mt-8">
              Download Athena
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
