import type { Metadata } from 'next'
import { APP } from '@/lib/config'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Privacy',
  description: `${APP.product} draait local-first: geen telemetrie, geen accounts.`
}

const SECTIONS = [
  {
    title: 'In het kort',
    body: 'Athena draait local-first by design. Jouw code, je agent-sessions en je context blijven op je machine. Geen accounts, geen cloud-sync en geen telemetrie. De app belt niets naar huis.'
  },
  {
    title: 'Wat Athena verzamelt',
    body: 'Standaard niets. Athena draait geen analytics, verzamelt geen crash reports zonder jouw toestemming en stuurt geen gebruiksgegevens op. Mocht een latere versie optionele diagnostics toevoegen, dan staan die standaard uit en worden ze duidelijk gemeld.'
  },
  {
    title: 'Waar je data woont',
    body: 'Op je computer. Sessions, worktrees, credentials en configuratie worden lokaal opgeslagen. Gebruik je een agent CLI van een derde partij (Codex, Claude Code, OpenCode of Pi), dan gaan je prompts en code naar de API van die provider onder de voorwaarden die jij met hen al hebt afgesproken - Athena is alleen de lokale orchestrator.'
  },
  {
    title: 'Wanneer data je machine verlaat',
    body: 'Alleen als jij het doet: branches pushen naar een remote, een pull request openen, met een agent-provider praten of git met een remote gebruiken. Athena start zelf nooit netwerkverkeer.'
  },
  {
    title: 'Credentials & tokens',
    body: 'Provider-tokens en git-credentials worden lokaal op je machine opgeslagen, net zoals je andere developer-tools dat doen. Athena uploadt ze nergens heen.'
  },
  {
    title: 'Derde partijen',
    body: 'De enige derde partijen zijn de partijen die jij kiest: je git-remotes en je agent-providers. Athena zelf heeft geen cloud-backend.'
  },
  {
    title: 'Wijzigingen in dit beleid',
    body: 'Verandert dit beleid, dan publiceren we de update hier en zie je dat aan het versienummer van deze pagina. Omdat Athena open source is, is elke wijziging aan dataverwerking ook terug te vinden in de code.'
  }
]

export default function PrivacyPage() {
  return (
    <TechnicalFrame>
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-16 pt-20 sm:px-10">
        <p className="anim-hero caption text-ink-muted" style={{ animationDelay: '0ms' }}>
          Privacy
        </p>
        <h1 className="anim-hero display-lg mt-6 text-ink" style={{ animationDelay: '90ms' }}>
          Jouw code verlaat je machine nooit
        </h1>
        <p
          className="anim-hero body-lg mt-4 max-w-2xl text-ink-muted"
          style={{ animationDelay: '180ms' }}
        >
          {APP.product} draait local-first by design. Deze pagina legt precies uit wat de app
          verzamelt - en dat is standaard niets.
        </p>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <div className="space-y-12">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <h2 className="headline text-ink">{s.title}</h2>
                <p className="body mt-3 text-ink-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="card mt-16 p-5">
              <p className="micro leading-relaxed text-ink-muted">
                Laatst bijgewerkt: {new Date().toISOString().slice(0, 10)} · {APP.license} · v
                {APP.version}. Vragen? Open een issue op GitHub.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
