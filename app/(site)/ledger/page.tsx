import type { Metadata } from 'next'
import { APP } from '@/lib/config'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'
import LedgerMock from '@/components/LedgerMock'
import BentoGrid from '@/components/BentoGrid'

export const metadata: Metadata = {
  title: 'Athena Ledger — Onveranderlijke Audit Trail voor AI-Code',
  description:
    'De Athena Ledger legt elke agent-wijziging, modelkeuze, sessie en menselijke review onveranderlijk vast. Local-first, append-only en klaar voor EU AI Act compliance.',
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

const LEDGER_PILLARS = [
  {
    title: 'Volledige Attributie',
    desc: 'Elke commit en code-wijziging wordt automatisch gekoppeld aan de specifieke agent (Claude Code, Codex, OpenCode, Pi), het gebruikte model en de sessie.',
    badge: 'Wie & Wat',
  },
  {
    title: 'Menselijke Review Trail',
    desc: 'Leg vast wie de agent-output heeft gecontroleerd en goedgekeurd. Een duidelijke scheiding tussen gegeneerde AI-code en menselijk geaccepteerde PRs.',
    badge: 'Verantwoording',
  },
  {
    title: 'EU AI Act Readiness',
    desc: 'Ondersteunt Artikel 50 (Transparantie), Artikel 26 (Audit Logs) en Artikel 4 (AI Geletterdheid) zonder extra administratieve druk op ontwikkelaars.',
    badge: 'Compliance',
  },
  {
    title: '100% Local-First',
    desc: 'Ledger-data blijft op jouw lokale machine in een append-only database. Geen verzending naar externe servers, geen tracking, geen cloud lock-in.',
    badge: 'Privacy',
  },
  {
    title: 'Cryptografische Integriteit',
    desc: 'Elke entry is voorzien van een SHA-256 checksum. Historie kan niet achteraf worden gewijzigd of verwijderd — historisch bewijs staat vast.',
    badge: 'Security',
  },
  {
    title: 'Voorspelbare Opschoning',
    desc: 'Standaard 6 maanden bewaartermijn met automatische veilige opschoning. Volledig opt-in en aanpasbaar aan jouw interne beveiligingsbeleid.',
    badge: 'Retentie',
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Multi-Agent Uitvoering',
    desc: 'Je agents draaien parallel in hun eigen geïsoleerde worktrees. Athena verzamelt metadata van elke agent-actie op de achtergrond.',
  },
  {
    n: '02',
    title: 'Append-Only Registratie',
    desc: 'Code-edits, model-parameters en menselijke goedkeuringen worden direct weggeschreven naar de lokale Athena Ledger logbook.',
  },
  {
    n: '03',
    title: 'Audit & Compliance Export',
    desc: 'Inzie direct welke code door AI is gegenereerd of exporteer gedetailleerde rapporten voor security audits en compliance checks.',
  },
]

const FAQS = [
  {
    q: 'Is de Athena Ledger verplicht om te gebruiken?',
    a: 'Nee, de Athena Ledger is volledig opt-in. Je activeert het wanneer jouw organisatie behoefte heeft aan audit-trails of compliance-verantwoording.',
  },
  {
    q: 'Verlaat er code of ledger-data mijn computer?',
    a: 'Nee. Athena is strikt local-first. Alle auditlogs, checksums en attributiegegevens blijven uitsluitend op jouw eigen schijf opgeslagen.',
  },
  {
    q: 'Hoe helpt de Ledger bij de EU AI Act?',
    a: 'De Ledger levert het concrete technische bewijs voor Art. 50 (labels voor AI-gegenereerde content) en Art. 26 (onveranderlijke audit-logs van AI-systemen).',
  },
  {
    q: 'Hoe beïnvloedt dit de prestaties van mijn agents?',
    a: 'Nul merkbare impact. De logging gebeurt asynchroon op de achtergrond via een lichtgewicht append-only SQLite engine.',
  },
]

export default function LedgerPage() {
  return (
    <TechnicalFrame>
      {/* -- Hero --------------------------------------- */}
      <section className="relative overflow-hidden text-center">
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-8 sm:px-10 sm:pt-12">
          <a
            href="/docs/review/attribution"
            className="anim-hero inline-flex items-center gap-2 border border-hairline bg-surface-1 px-3 py-1.5 transition-colors hover:border-hairline hover:bg-surface-2"
            style={{ animationDelay: '0ms' }}
          >
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            <span className="caption text-ink-muted">
              Athena Ledger
              <span className="mx-2 text-ink-muted/50">—</span>
              <span className="text-accent">Local Audit Trail & EU AI Act Ready</span>
            </span>
          </a>

          <h1
            className="anim-hero display-xl mx-auto mt-6 max-w-4xl text-ink"
            style={{ animationDelay: '90ms' }}
          >
            De Athena Ledger
            <span className="block text-ink-muted">Onveranderlijke audit trail voor AI-code</span>
          </h1>

          <p
            className="anim-hero body-lg mx-auto mt-8 max-w-2xl text-ink-muted"
            style={{ animationDelay: '180ms' }}
          >
            Weten wie welke code heeft geschreven, met welk model en wie het heeft goedgekeurd.
            De Athena Ledger is een lokaal, append-only logboek dat elke actie van je agent-team
            en menselijke reviews transparant en controleerbaar maakt.
          </p>

          <div
            className="anim-hero mt-10 flex flex-row items-center justify-center gap-3 sm:gap-4"
            style={{ animationDelay: '225ms' }}
          >
            <a href="/download" className="btn btn-primary group">
              Probeer Athena Gratis
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
            <a href="/docs/review/attribution" className="btn btn-secondary">
              Lees de Attributie Docs
            </a>
          </div>

          {/* Interactive Mock Preview */}
          <div className="anim-hero mt-14" style={{ animationDelay: '360ms' }}>
            <LedgerMock />
          </div>
        </div>
      </section>

      {/* -- Metrics / Compliance Bar ------------------- */}
      <section className="bg-surface-1/40 py-10">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="display-md text-ink">100%</p>
              <p className="caption mt-1 text-ink-muted">Local-first & Privé</p>
            </div>
            <div>
              <p className="display-md text-ink">SHA-256</p>
              <p className="caption mt-1 text-ink-muted">Cryptografische Checksums</p>
            </div>
            <div>
              <p className="display-md text-ink">Art. 50 & 26</p>
              <p className="caption mt-1 text-ink-muted">EU AI Act Afstemming</p>
            </div>
            <div>
              <p className="display-md text-ink">0 KB</p>
              <p className="caption mt-1 text-ink-muted">Cloud Telemetrie</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Pillars Grid ------------------------------- */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="display-lg text-ink">
                Controle en verantwoording
                <span className="block text-ink-muted">zonder in te leveren op snelheid</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LEDGER_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface-1/60 p-7 backdrop-blur-md transition-colors duration-200 hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="rounded border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-primary uppercase backdrop-blur-sm">
                      [ {p.badge} ]
                    </span>
                  </div>
                  <h3 className="headline-sm mt-5 text-ink group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="body-sm mt-2.5 flex-1 text-ink-muted leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Interactive Ledger Architecture Grid -------------- */}
      <section className="py-24 bg-canvas">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                [ INTERACTIVE AUDIT ARCHITECTURE ]
              </span>
              <h2 className="display-lg text-ink mt-2">
                Onveranderlijke Audit Architectuur
                <span className="block text-ink-muted">in realtime gevisualiseerd</span>
              </h2>
            </div>
          </Reveal>
          <BentoGrid />
        </div>
      </section>

      {/* -- How it works -------------------------------- */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="display-lg text-ink">
                Hoe de Ledger werkt
                <span className="block text-ink-muted">- stil op de achtergrond</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((st, i) => (
              <Reveal key={st.n} delay={i * 90} className="relative z-10">
                <div className="flex flex-col">
                  <span className="relative z-10 grid h-8 w-8 place-items-center border border-hairline bg-surface-1 font-mono text-xs text-ink-muted">
                    {st.n}
                  </span>
                  <h3 className="headline-sm mt-4 text-ink">{st.title}</h3>
                  <p className="body-sm mt-2 text-ink-muted leading-relaxed">{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------ */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <Reveal>
            <h2 className="display-lg text-center text-ink">Veelgestelde vragen</h2>
          </Reveal>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <details className="faq-item">
                  <summary>
                    <span className="title-lg text-ink">{faq.q}</span>
                    <span className="faq-chevron" aria-hidden>
                      +
                    </span>
                  </summary>
                  <div className="faq-body">
                    <p className="body text-ink-muted">{faq.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA ------------------------------------------ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <Reveal>
            <h2 className="display-lg text-ink">Bouw sneller. Schaal veilig met AI.</h2>
            <p className="body-lg mt-4 text-ink-muted">
              Download Athena ADE en krijg direct inzicht in alle acties van jouw agent-team op je eigen machine.
            </p>
            <div className="mt-10 flex flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/download"
                className="btn btn-primary group transition-shadow hover:shadow-[0_0_60px_rgba(50,240,140,0.3)]"
              >
                Download Athena ADE
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </a>
              <a href="/docs" className="btn btn-secondary">
                Bekijk Documentatie
              </a>
            </div>
            <p className="micro mt-4 text-ink-muted">macOS · Windows · Linux · 100% Gratis & Open Source</p>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
