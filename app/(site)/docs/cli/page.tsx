import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'CLI reference',
  description:
    'Elk athena-commando - sessions, worktrees, terminals, orchestration, status en integraties, allemaal met --json-output.'
}

const GROUPS = [
  {
    title: 'Sessions',
    desc: 'Een session is een workspace plus de agents die eraan werken.',
    commands: [
      { cmd: 'athena session create --name <name>', note: 'Maak een session' },
      {
        cmd: 'athena session add agent --model <agent> --worktree <name>',
        note: 'Voeg een agent toe in zijn eigen worktree'
      },
      { cmd: 'athena status', note: 'Branches, PRs, commits, conflicten - één weergave' }
    ]
  },
  {
    title: 'Worktrees',
    desc: 'Geïsoleerde checkouts met git-lineage erin gebakken.',
    commands: [
      {
        cmd: 'athena worktree create --name <name> --agent <agent> --setup run',
        note: 'Start een agent-worktree'
      },
      {
        cmd: 'athena worktree create --name <name> --no-parent',
        note: 'Onafhankelijke top-level worktree'
      },
      { cmd: 'athena worktree list', note: 'Elke worktree en zijn lineage' }
    ]
  },
  {
    title: 'Terminals',
    desc: 'Hetzelfde terminaloppervlak als de GUI, vanuit de shell.',
    commands: [
      {
        cmd: 'athena terminal create --worktree <id> --command <cmd>',
        note: 'Open een terminal in een worktree'
      },
      {
        cmd: 'athena terminal split --terminal <handle> --direction horizontal',
        note: 'Splits een paneel'
      },
      {
        cmd: 'athena terminal send --terminal <handle> --text <text> --enter',
        note: 'Stuur input naar een agent'
      },
      {
        cmd: 'athena terminal wait --terminal <handle> --for tui-idle --timeout-ms 60000',
        note: 'Wacht tot de agent idle is'
      }
    ]
  },
  {
    title: 'Orchestration',
    desc: 'Gestructureerde multi-agent-coördinatie met task-DAGs en decision gates.',
    commands: [
      {
        cmd: 'athena orchestration run-create --objective <text>',
        note: 'Maak een coördinatie-run'
      },
      { cmd: 'athena orchestration task-create --spec <text>', note: 'Definieer een taak' },
      {
        cmd: 'athena orchestration worker-start --task <id> --worktree current --agent codex',
        note: 'Stuur een begeleide worker'
      },
      {
        cmd: 'athena orchestration check --wait --types worker_done,escalation,question --timeout-ms 900000',
        note: 'Wacht op worker-rapporten'
      }
    ]
  },
  {
    title: 'Integrations',
    desc: 'Ticketing- en issue-workflows vanuit de terminal.',
    commands: [
      { cmd: 'athena linear issue --current --full --json', note: 'Lees het gekoppelde ticket' },
      {
        cmd: 'athena linear comment add --current --body-file - --json',
        note: 'Plaats een afrondende comment'
      },
      {
        cmd: 'athena linear search "auth bug" --workspace all --limit 10 --json',
        note: 'Zoek tickets'
      }
    ]
  },
  {
    title: 'Output',
    desc: 'Standaard machineleesbaar.',
    commands: [
      { cmd: 'athena status --json', note: 'Gestructureerde status voor scripts' },
      { cmd: 'athena open --json', note: 'Start de runtime, krijg JSON terug' },
      { cmd: 'athena <command> --help', note: 'Elk commando documenteert zichzelf' }
    ]
  }
]

export default function CliReferencePage() {
  return (
    <TechnicalFrame>
      <PageHero
        eyebrow="Docs · CLI reference"
        title="Het athena-commandovoeroppervlak"
        lede={
          <>
            Alles wat de app doet, vanuit de shell. De commando’s hieronder zijn de kernloop; elk
            daarvan spreekt ook <span className="font-mono text-ink">--json</span>.
          </>
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {GROUPS.map((g, i) => (
              <Reveal key={g.title} delay={(i % 2) * 90}>
                <div className="card h-full border border-hairline-soft p-6">
                  <h2 className="headline text-ink">{g.title}</h2>
                  <p className="body mt-2 text-ink-muted">{g.desc}</p>
                  <ul className="mt-5 space-y-3">
                    {g.commands.map((c) => (
                      <li key={c.cmd}>
                        <pre className="codeblock text-xs">{`$ ${c.cmd}`}</pre>
                        <p className="micro mt-1.5 text-ink-muted">{c.note}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <div className="border border-hairline-soft bg-surface-1 p-6">
              <p className="caption text-ink-muted">Daarna</p>
              <p className="headline mt-2 text-ink">Draai het op afstand</p>
              <p className="body mt-2 text-ink-muted">
                WSL, SSH-hosts en pairing vanuit elke browser.
              </p>
              <Link href="/docs/remote" className="btn btn-secondary group mt-6">
                Lezen: Remote & SSH
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
            </div>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
