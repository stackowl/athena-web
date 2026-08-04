import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Veelgestelde vragen over ${APP.product} - agents, worktrees, privacy en platformondersteuning.`
}

type FaqGroup = {
  topic: string
  items: { q: string; a: string }[]
}

const GROUPS: FaqGroup[] = [
  {
    topic: 'Aan de slag',
    items: [
      {
        q: 'Wat is Athena ADE?',
        a: 'Athena is een agentic development environment. Het draait meerdere coding agents - Codex, Claude Code, OpenCode of Pi - naast elkaar in één session, elk in een eigen geïsoleerde git worktree, en volgt elke branch, commit en PR in één overzicht.'
      },
      {
        q: 'Hoe zit dit anders dan meerdere terminals openen?',
        a: 'In losse terminals regel je context, branches en conflicten met de hand. Athena geeft elke agent vanaf het begin een eigen worktree, zodat ze nooit botsen op dezelfde bestanden, en toont de status van elke agent, branch en PR in één pane.'
      },
      {
        q: 'Heb ik een account of abonnement nodig?',
        a: 'Nee - geen account, geen abonnement, geen aanmelding. Athena is gratis en open source (MIT). Je neemt gewoon de agent CLIs mee die je al gebruikt.'
      }
    ]
  },
  {
    topic: 'Agents & workflows',
    items: [
      {
        q: 'Welke agent CLIs worden ondersteund?',
        a: 'Athena bundelt drivers voor Codex, Claude Code, OpenCode en Pi. De CLI binaries installeer je zelf - of laat de setup guide ze installeren - en Athena regelt de rest.'
      },
      {
        q: 'Kunnen agents echt parallel werken zonder conflicten?',
        a: 'Ja. Elke agent draait in een eigen git worktree die van dezelfde base vertakt, dus ze bewerken elk een eigen kopie van de codebase. Athena volgt de lineage en helpt je de winnaars te mergen terwijl main schoon blijft.'
      },
      {
        q: 'Wat als twee agents dezelfde code moeten aanraken?',
        a: "Ze bewerken aparte worktrees, dus ze overschrijven elkaar nooit. Wanneer je wilt mergen, review je de diff van elke agent apart en beslis jij wat er doorgaat - Athena coördineert de merge, het raadt niet voor je."
      }
    ]
  },
  {
    topic: 'Privacy & security',
    items: [
      {
        q: 'Wordt mijn code ergens geüpload?',
        a: "Nee. Athena is standaard local-first: sessions, context en code blijven op je machine. De enige netwerkoproepen zijn wat jij zelf start - bijvoorbeeld pushen naar een remote of praten met de API van je agent provider."
      },
      {
        q: 'Stuurt Athena telemetry?',
        a: "Geen telemetry, geen analytics, geen crash reporting zonder jouw toestemming. Athena belt niet naar huis."
      },
      {
        q: 'Is Athena open source?',
        a: 'Ja - het hele project is MIT-gelicentieerd op GitHub. Je kunt de source lezen, het zelf bouwen of bijdragen.'
      }
    ]
  },
  {
    topic: 'Platformondersteuning',
    items: [
      {
        q: 'Welke platforms ondersteunt Athena?',
        a: 'Windows 10/11 (x64), macOS 12.0+ (Apple Silicon en Intel) en Linux (Ubuntu 20.04+ / Fedora 35+, x64). De Windows-build is live; macOS- en Linux-artefacten worden op hun eigen platform gebouwd en verschijnen op GitHub releases.'
      },
      {
        q: 'Wat zijn de systeemvereisten?',
        a: '4 GB RAM en ongeveer 500 MB schijfruimte. Je hebt ook git en minstens één ondersteunde agent CLI op je PATH nodig - git is bij Windows gebundeld.'
      },
      {
        q: 'Kan ik Athena via SSH of in een remote omgeving draaien?',
        a: 'Ja. Athena is ontworpen om te draaien tegen lokale, WSL- en SSH-hosts en behandelt folder workspaces hetzelfde als git worktrees.'
      }
    ]
  }
]

function PlusIcon() {
  return (
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
  )
}

export default function FaqPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="FAQ"
        title="Vragen, beantwoord"
        lede={
          <>
            Alles wat je waarschijnlijk vraagt voordat je op download drukt - en een paar dingen die
            het weten waard zijn voor je eerste session.
          </>
        }
      />

      {GROUPS.map((group, gi) => (
        <section key={group.topic} className={gi > 0 ? 'py-16' : 'pb-16'}>
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <Reveal>
              <h2 className="caption uppercase tracking-wider text-ink-muted">{group.topic}</h2>
            </Reveal>
            <div className="mt-5 space-y-3">
              {group.items.map((item, i) => (
                <Reveal key={item.q} delay={i * 60}>
                  <details className="faq-item">
                    <summary>
                      <span className="headline text-[1.0625rem] text-ink">{item.q}</span>
                      <span className="faq-chevron">
                        <PlusIcon />
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
      ))}

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <Reveal>
            <h2 className="display-md text-ink">Nog een vraag?</h2>
            <p className="body mt-3 text-ink-muted">
              Open een issue op GitHub en de maintainers nemen contact met je op.
            </p>
            <Link href={APP.issuesUrl} className="btn btn-secondary group mt-8">
              Stel je vraag op GitHub
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
            </Link>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
