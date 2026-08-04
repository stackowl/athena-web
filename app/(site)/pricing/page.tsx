import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import { TIERS, COMPARISON } from '@/lib/pricing'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `${APP.product}-prijzen - Athena local is gratis en open source, voor altijd. Hosted services zijn betaald. Geen lock-in, geen account nodig.`
}

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

const FAQ = [
  {
    q: 'Is Athena echt gratis?',
    a: 'Ja - de lokale app is gratis voor altijd en open source onder MIT. Onbeperkte sessions, worktrees, agents en skills, allemaal op jouw machine, zonder account en zonder telemetry.'
  },
  {
    q: 'Wat zit er in de hosted abonnementen?',
    a: "Hosted-abonnementen dekken Athena's hosted services - remote sessions via de relay, pairing vanuit elke browser, en teamfuncties zoals gedeelde boards. De lokale app zelf blijft gratis."
  },
  {
    q: 'Wanneer lanceren de hosted abonnementen?',
    a: "Hosted services zijn in early access. Ga op de waitlist en jij hoort het als eerste wanneer ze opengaan."
  },
  {
    q: 'Betaal ik voor agent modelgebruik?',
    a: 'Nee - je gebruikt je eigen agent-CLI\'s en je eigen API-keys of abonnementen. Athena orchestreert ze; jouw provider stuurt de rekening zoals altijd.'
  }
]

export default function PricingPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Pricing"
        title="Gratis waar het telt"
        lede={
          <>
            Athena local is gratis en open source, voor altijd. Je betaalt alleen voor de hosted services -
            remote sessions, pairing en team-infrastructuur - en alleen wanneer je ze wilt.
          </>
        }
      />

      {/* ── Tiers ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {TIERS.map((tier, i) => (
              <Reveal key={tier.id} delay={i * 90} className="h-full">
                <div
                  className={`card flex h-full flex-col border p-6 ${
                    tier.featured
                      ? 'border-hairline bg-surface-2'
                      : 'border-hairline-soft bg-surface-1'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="headline text-ink">{tier.name}</h3>
                    {tier.featured && (
                      <span className="border border-hairline bg-canvas px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                        Populair
                      </span>
                    )}
                  </div>
                  <p className="mt-4 flex items-baseline gap-1">
                    <span className="display-md text-ink">{tier.price}</span>
                    <span className="caption text-ink-muted">{tier.period}</span>
                  </p>
                  <p className="body-sm mt-3 text-ink-muted">{tier.tagline}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.cta.href}
                    className={`btn group mt-8 ${tier.featured ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {tier.cta.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="micro mt-8 text-center text-ink-muted">
            Prijzen zijn indicatief - hosted services zijn in early access en kunnen wijzigen.
          </p>
        </div>
      </section>

      {/* ── Local vs hosted ──────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <Reveal className="text-center">
            <p className="caption text-ink-muted">Het model</p>
            <h2 className="display-md mt-3 text-ink">Local of hosted - jouw keuze</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full border border-hairline-soft text-left text-sm">
                <thead>
                  <tr className="border-b border-hairline-soft">
                    <th className="px-4 py-3 font-medium text-ink-muted"> </th>
                    <th className="px-4 py-3 font-semibold text-ink">Local (Gratis)</th>
                    <th className="px-4 py-3 font-semibold text-ink">Hosted (Betaald)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-b border-hairline-soft last:border-0">
                      <td className="px-4 py-3 text-ink">{row.label}</td>
                      <td className="px-4 py-3 text-ink-muted">{row.local}</td>
                      <td className="px-4 py-3 text-ink-muted">{row.hosted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Voordat je het vraagt</h2>
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
    </TechnicalFrame>
  )
}
