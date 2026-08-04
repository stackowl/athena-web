import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'Docs',
  description: `${APP.product} documentatie - installatie, worktrees, agents, skills, CLI-referentie en remote sessies.`
}

const CATEGORIES = [
  {
    title: 'Getting started',
    desc: 'Installeer Athena, maak je eerste session en voeg agents toe - van begin tot eind zo\'n vijf minuten.',
    href: '/docs/getting-started',
    icon: 'M4 5a2 2 0 0 1 2-2h3.5a1 1 0 0 1 .8.4L12 5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5z'
  },
  {
    title: 'Worktrees',
    desc: 'Hoe parallelle worktrees voorkomen dat agents elkaar in de weg zitten, en hoe je de winnaars veilig merged.',
    href: '/docs/worktrees',
    icon: 'M6 3v12M18 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 9a9 9 0 0 1-9 9'
  },
  {
    title: 'Agents',
    desc: 'Neem je eigen agent-CLI\'s mee - Codex, Claude Code, OpenCode, Pi - en orchestreer ze naast elkaar.',
    href: '/docs/agents',
    icon: 'M8 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1v4h2v-4h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H8z'
  },
  {
    title: 'Skills',
    desc: 'Verpak prompts en recipes in skills, en breid Athena uit met plugins voor jouw workflows.',
    href: '/docs/skills',
    icon: 'M12 2l2.4 2.4 3.4-.5.5 3.4L21 9.7l-2.4 2.4.5 3.4-3.4.5L12 20.7l-2.4-2.4-3.4.5-.5-3.4L3 9.7l2.4-2.4-.5-3.4 3.4-.5L12 2zm0 4.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z'
  },
  {
    title: 'CLI reference',
    desc: 'Elk athena-commando - sessions, worktrees, terminals, orchestration, status en integraties.',
    href: '/docs/cli',
    icon: 'M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 3.5l3 2.5-3 2.5V7.5zM9 12h4v1.5H9V12z'
  },
  {
    title: 'Remote & SSH',
    desc: 'Draai Athena op WSL, SSH-hosts en verbonden servers, en pair vanuit elke browser.',
    href: '/docs/remote',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.5 9H15a16 16 0 0 0-1.9-7 8 8 0 0 1 6.4 7zM12 4c1.4 1.6 2.4 4 2.7 7H9.3C9.6 8 10.6 5.6 12 4zm0 16c-1.4-1.6-2.4-4-2.7-7h5.4c-.3 3-1.3 5.4-2.7 7zM6.9 4A16 16 0 0 0 5 11H4.5A8 8 0 0 1 6.9 4zM4.5 13H5c.3 3 .9 5.4 1.9 7a8 8 0 0 1-2.4-7zM17.1 20c1-1.6 1.6-4 1.9-7h1.5a8 8 0 0 1-3.4 7z'
  }
]

export default function DocsPage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Docs"
        title="Documentatie"
        lede={
          <>
            Alles wat je nodig hebt om van installatie naar een heel team parallelle agents te gaan -
            kort, concreet en accuraat op het scherm.
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.href} delay={(i % 3) * 70} className="h-full">
                <Link
                  href={c.href}
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
                    Lezen
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
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </TechnicalFrame>
  )
}
