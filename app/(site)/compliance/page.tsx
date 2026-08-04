import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Compliance & EU AI Act',
  description: `${APP.product} houdt bij welke agent en welk model elke wijziging maakte en kan daar audit-ready bewijs van genereren voor de EU AI Act (Art 4, 26 en 50).`
}

const PILLARS = [
  {
    art: 'Art 50',
    title: 'Transparantie',
    desc: 'Welke bestanden zijn AI-gemaakt en door welke agent + model? Athena blijft per wijziging bij wie wat deed en of een mens het heeft nagekeken.',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM11 6h2v6.5l3.5 2-1 1.7-4.5-2.7V6z'
  },
  {
    art: 'Art 26',
    title: 'Auditlog',
    desc: 'Een append-only log van al je agentgebruik met instelbare retentie - standaard 183 dagen (6 maanden), wat voldoet aan de minimale bewaartermijn.',
    icon: 'M5 3a1 1 0 0 1 1-1h6l4 4v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm7 0v4h4V7l-4-4zm-1 6h2v8h-2V9z'
  },
  {
    art: 'Art 4',
    title: 'AI-geletterdheid',
    desc: 'Registreer wanneer je team de AI-geletterdheidsattestatie voltooit, zodat je kunt aantonen dat operators weten hoe ze de systemen correct gebruiken.',
    icon: 'M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-8 6a8 8 0 0 1 16 0H4z'
  }
]

const EVIDENCE = [
  'Elke wijziging geduid aan agent, model en session - of aan een mens',
  'Recital 134: menselijk nagekeken AI-werk apart geteld als "reviewed"',
  'Audit-ready export in JSON voor je externe auditor',
  'Encryptie-at-rest optioneel via het OS-sleutelbeheer (safeStorage)',
  'Local-first: de ledger blijft op je machine, geen telemetry'
]

const FAQS = [
  {
    q: 'Is dit al beschikbaar?',
    a: 'De Athena Ledger draait in de desktop-app (opt-in, alleen als je hem aanzet). De publieke audit-dashboard en exportflows volgen in de roadmap. Schrijf je in voor early access om er als eerste mee te werken.'
  },
  {
    q: 'Zet ik hiermee mijn code ergens uploaden?',
    a: 'Nee. De ledger is local-first: alle records worden op je eigen machine bewaard en je kiest zelf of je evidentie exporteert. Athena stuurt geen telemetry.'
  },
  {
    q: 'Welke EU AI Act-verplichtingen dekt dit?',
    a: 'Transparantie (Art 50), deployer-auditlog van minimaal 6 maanden (Art 26), AI-geletterdheid (Art 4) en de review-carve-out (Recital 134). De roadmap voegt risicobeoordelingen en modeldocumentatie toe.'
  },
  {
    q: 'Is Athena AI Act-proof?',
    a: 'Niemand kan "compliance" garanderen - dat hangt af van jouw inzet en je auditor. Wat Athena doet is het bewijsmateriaal maken dat normaal ontbreekt: wie deed wat, met welke agent en welk model, en is het nagekeken.'
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

export default function CompliancePage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="EU AI Act"
        title="Bewijs hoe je bouwt"
        lede={
          <>
            Athena Ledger houdt bij welke agent en welk model elke wijziging maakte en kan daar
            audit-ready bewijs van genereren voor de EU AI Act. De enige ADE die je mee kunt nemen
            naar je auditor.
          </>
        }
      />

      {/* ── Pillars ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">De drie pijlers</p>
              <h2 className="display-lg mt-3 text-ink">
                Regelgeving, vertaald naar
                <span className="block text-ink-muted">evidence waar je code wordt geschreven</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70} className="h-full">
                <div className="card group h-full border border-hairline-soft p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-hairline hover:bg-surface-2">
                  <span className="label-lg grid h-10 w-fit place-items-center border border-hairline bg-surface-2 px-3 text-ink">
                    {p.art}
                  </span>
                  <h3 className="headline mt-5 text-ink">{p.title}</h3>
                  <p className="body mt-2 text-ink-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Evidence list ───────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Wat de ledger oplevert</p>
              <h2 className="display-lg mt-3 text-ink">
                Een audittrail die er al is
                <span className="block text-ink-muted">- voordat je hem nodig hebt</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-10 grid gap-3 md:grid-cols-2">
              {EVIDENCE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border border-hairline-soft bg-surface-1 p-4"
                >
                  <CheckIcon />
                  <span className="body text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Voordat je het vraagt</h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {FAQS.map((item, i) => (
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
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M10 3 6 7 2 3" />
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

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Bouw met bewijs, niet met gokken.</h2>
            <p className="body mt-3 text-ink-muted">
              Athena Ledger draait al in de desktop-app. Download {APP.product} en neem je volgende
              feature - en je audit - in parallel.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/download" className="btn btn-primary group">
                Download Athena
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </Link>
              <Link href="/docs/getting-started" className="btn btn-secondary">
                Lees de gids
              </Link>
            </div>
            <p className="micro mt-4 text-ink-muted">
              Opt-in · local-first · MIT open source
            </p>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
