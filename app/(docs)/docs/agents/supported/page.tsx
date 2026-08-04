import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Supported agents',
  description:
    'Athena orchestrates the agent CLIs you already use — Claude Code, Codex, OpenCode, Pi, and 35+ more — side by side in one session.'
}

const AGENTS: [string, string][] = [
  ['Claude Code', 'Anthropic'],
  ['Codex', 'OpenAI'],
  ['OpenCode', 'Open source'],
  ['Pi', 'Open source'],
  ['OMP', 'Open source'],
  ['Aider', 'Open source'],
  ['Kilocode', 'Kilo'],
  ['GitHub Copilot', 'GitHub'],
  ['Droid', 'Open source'],
  ['Gemini', 'Google'],
  ['Cursor', 'Cursor'],
  ['Devin', 'Cognition'],
  ['Trae', 'ByteDance'],
  ['Grok', 'xAI'],
  ['Cline', 'Open source'],
  ['Goose', 'Block']
]

export default function SupportedAgentsPage() {
  return (
    <DocsArticle
      title="Supported agents"
      lede="Athena orchestrates the agent CLIs you already use — Claude Code, Codex, OpenCode, Pi, and 35+ more — side by side in one session."
    >
      <p>
        Athena does not reimplement agent CLIs — it orchestrates the ones you already use. Each CLI
        runs in its own isolated worktree in the same session, with its own terminal and its own spot
        on the board. Mix providers freely; there is no lock-in.
      </p>

      <h2 id="supported-clis">Supported agent CLIs</h2>
      <p>A representative set — the full catalog is 35+ and grows as drivers land:</p>
      <table>
        <thead>
          <tr>
            <th>Agent CLI</th>
            <th>Provider</th>
          </tr>
        </thead>
        <tbody>
          {AGENTS.map(([name, provider]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{provider}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        …plus Antigravity, Auggie, Kimi, Qwen Code, Mistral Vibe, Rovo Dev, Hermes, OpenClaw,
        Command Code, and more.
      </p>

      <h2 id="how-it-works">How it works</h2>
      <p>
        Adding an agent to a session gives it a fresh worktree from the current base commit, a
        terminal, and a column on the board. From there the core loop is the same for every provider:
        <strong> spawn, track, merge</strong>.
      </p>
      <pre>{`athena session add agent --model codex --worktree codex-auth`}</pre>

      <h2 id="bring-your-own">Bring your own subscription</h2>
      <p>
        Each CLI uses the account and subscription you already have for it — your Anthropic, OpenAI,
        or other plan. Athena adds no account of its own, no extra billing, and no per-seat
        licensing.
      </p>

      <Callout title="No lock-in">
        <p>
          Your code, git history, and subscriptions stay yours. Any agent can be removed or replaced
          mid-session, and the worktrees it leaves behind are ordinary git branches you keep. See{' '}
          <Link href="/docs/agents/custom-cli">Add a custom CLI agent</Link> to bring your own.
        </p>
      </Callout>
    </DocsArticle>
  )
}
