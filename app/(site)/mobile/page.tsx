import type { Metadata } from 'next'
import { APP } from '@/lib/config'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import EmailCapture from '@/components/EmailCapture'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Mobile',
  description: `${APP.product} voor iOS - check sessions, review diffs en stuur agents aan vanaf je telefoon. Vraag early access aan.`
}

const COMING = [
  {
    title: 'Sessions checken',
    desc: 'Alle sessies, worktrees en agent-statussen in je zak - even naar het board kijken zonder je laptop open te klappen.',
    icon: 'M4 4a1 1 0 0 1 1-1h1v14H4V4zm4 0h4v14H8V4zm6 0h1a1 1 0 0 1 1 1v12h-2V4zm3 14v2H3v-2h14z'
  },
  {
    title: 'Diffs die werken op je telefoon',
    desc: 'Bestandswijzigingen verschijnen als rood/groene diff-kaarten met bestandsheaders - code die leesbaar blijft op een klein scherm.',
    icon: 'M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 3.5l3 2.5-3 2.5V7.5zM9 12h4v1.5H9V12z'
  },
  {
    title: 'Agents aansturen',
    desc: 'Beantwoord vragen van agents, keur merges goed en stuur vervolgvragen weg - houd de flow op gang vanaf elke plek.',
    icon: 'M12 2l2.4 2.4 3.4-.5.5 3.4L21 9.7l-2.4 2.4.5 3.4-3.4.5L12 20.7l-2.4-2.4-3.4.5-.5-3.4L3 9.7l2.4-2.4-.5-3.4 3.4-.5L12 2zm0 4.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z'
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

export default function MobilePage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Mobile"
        title="Athena, in je zak"
        lede={
          <>
            Hou je agents in de gaten vanaf elke plek. Sessions, worktrees en diff-reviews op iOS -
            gekoppeld aan dezelfde machine waar je
            {APP.product}-desktopapp op draait.
          </>
        }
      />

      {/* ── What's coming ────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="caption text-ink-muted">Wat eraan komt</p>
              <h2 className="display-lg mt-3 text-ink">
                Het board, <span className="text-ink-muted">in je zak</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMING.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 70} className="h-full">
                <div className="card group h-full border border-hairline-soft p-5">
                  <span className="grid h-10 w-10 place-items-center bg-surface-2 text-ink">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                      <path d={f.icon} />
                    </svg>
                  </span>
                  <h3 className="headline mt-5 text-ink">{f.title}</h3>
                  <p className="body mt-2 text-ink-muted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Waitlist ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 sm:px-10">
          <Reveal className="text-center">
            <p className="caption text-ink-muted">Early access</p>
            <h2 className="display-md mt-3 text-ink">Wees als eerste aan de beurt</h2>
            <p className="body mt-3 text-ink-muted">
              We nodigen eerst een beperkt aantal mensen uit om de iOS-app te proberen, en sturen
              iedereen een link zodra die klaar is.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8">
              <EmailCapture />
            </div>
            <p className="micro mt-4 text-center text-ink-muted">
              Geen spam. Alleen de uitnodiging wanneer die er is.
            </p>
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
            <Reveal delay={60}>
              <details className="faq-item">
                <summary>
                  <span className="headline text-[1.0625rem] text-ink">
                    Wanneer is de mobiele app beschikbaar?
                  </span>
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
                  <p className="body text-ink-muted">
                    Early access begint met een beperkte TestFlight-achtige periode en wordt daarna
                    verruimd. Op de waitlist zet je jezelf bovenaan de rij.
                  </p>
                </div>
              </details>
            </Reveal>
            <Reveal delay={120}>
              <details className="faq-item">
                <summary>
                  <span className="headline text-[1.0625rem] text-ink">
                    Heb ik een betaald abonnement nodig voor mobiele toegang?
                  </span>
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
                  <p className="body text-ink-muted">
                    Nee. Athena is gratis en open source, en de mobiele app koppelt aan je eigen machine
                    - hetzelfde local-first-model als de desktopapp.
                  </p>
                </div>
              </details>
            </Reveal>
            <Reveal delay={180}>
              <details className="faq-item">
                <summary>
                  <span className="headline text-[1.0625rem] text-ink">
                    Draait de app agents op mijn telefoon?
                  </span>
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
                  <p className="body text-ink-muted">
                    Nee - het werk draait op jouw machine. Je telefoon is een remote weergave: sessions,
                    diffs en steer-controls voor de agents die al draaien.
                  </p>
                </div>
              </details>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reassurance strip ────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <ul className="grid gap-6 text-center sm:grid-cols-3">
            {['Gratis & open source', 'Koppelt aan je eigen machine', 'Standaard local-first'].map(
              (label) => (
                <li key={label} className="flex items-center justify-center gap-2 text-ink-muted">
                  <CheckIcon />
                  <span className="caption">{label}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </TechnicalFrame>
  )
}
