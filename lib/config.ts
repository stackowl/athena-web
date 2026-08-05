/**
 * Central site configuration for the Athena ADE website.
 * Update these values when the first release is cut / artifacts are published.
 */

export const APP = {
  name: 'Athena',
  product: 'Athena ADE',
  tagline: 'Agentic Development Environment',
  version: '1.6.0',
  description:
    'Athena ADE draait Codex, Claude Code, OpenCode en Pi naast elkaar — elk in een eigen geïsoleerde git-worktree, bijgehouden in één bord. Geen bestandsbotsingen, geen verloren context, geen mysterieuze agents. Local-first en open source.',
  githubUrl: 'https://github.com/stackowl/athena',
  releasesUrl: 'https://github.com/stackowl/athena/releases',
  issuesUrl: 'https://github.com/stackowl/athena/issues',
  discordUrl: 'https://discord.gg/fzjDKHxv8Q',
  /** Canonical site origin — used for QR codes and absolute links. */
  siteUrl: 'https://athena.dev',
  /** Waitlist form target. Empty until a form backend is deployed (Formspree-style URL or an API route). */
  waitlistEndpoint: '',
  /** GitHub release asset base URL for direct downloads. */
  downloadsBase: 'https://github.com/stackowl/athena/releases/latest/download',
  license: 'MIT',
  year: new Date().getFullYear()
} as const

/**
 * Agent CLIs Athena can orchestrate side-by-side.
 * Mirrors the TuiAgent union in src/shared/types.ts (35 agents).
 * `svg` entries render a hand-authored brand glyph; `png` entries load a
 * bundled favicon from /agent-icons/ (copied from src/shared/agent-icons).
 */
export type AgentCli = {
  id: string
  label: string
  svg?: 'claude' | 'codex' | 'pi' | 'omp' | 'aider' | 'opencode' | 'kilo' | 'copilot' | 'droid'
  png?: string
}

export const AGENT_CLIS: AgentCli[] = [
  { id: 'claude', label: 'Claude', svg: 'claude' },
  { id: 'claude-agent-teams', label: 'Claude Agent Teams', svg: 'claude' },
  { id: 'openclaude', label: 'OpenClaude', png: '/agent-icons/openclaude.png' },
  { id: 'codex', label: 'Codex', svg: 'codex' },
  { id: 'opencode', label: 'OpenCode', svg: 'opencode' },
  { id: 'pi', label: 'Pi', svg: 'pi' },
  { id: 'omp', label: 'OMP', svg: 'omp' },
  { id: 'aider', label: 'Aider', svg: 'aider' },
  { id: 'kilo', label: 'Kilocode', svg: 'kilo' },
  { id: 'copilot', label: 'GitHub Copilot', svg: 'copilot' },
  { id: 'droid', label: 'Droid', svg: 'droid' },
  { id: 'autohand', label: 'Autohand Code', png: '/agent-icons/autohand.png' },
  { id: 'mimo-code', label: 'MiMo Code', png: '/agent-icons/mimo-code.png' },
  { id: 'gemini', label: 'Gemini', png: '/agent-icons/gemini.png' },
  { id: 'antigravity', label: 'Antigravity', png: '/agent-icons/antigravity.png' },
  { id: 'goose', label: 'Goose', png: '/agent-icons/goose.png' },
  { id: 'amp', label: 'Amp', png: '/agent-icons/amp.png' },
  { id: 'kiro', label: 'Kiro', png: '/agent-icons/kiro.png' },
  { id: 'crush', label: 'Charm', png: '/agent-icons/crush.png' },
  { id: 'aug', label: 'Auggie', png: '/agent-icons/aug.png' },
  { id: 'cline', label: 'Cline', png: '/agent-icons/cline.png' },
  { id: 'codebuff', label: 'Codebuff', png: '/agent-icons/codebuff.png' },
  { id: 'command-code', label: 'Command Code', png: '/agent-icons/command-code.png' },
  { id: 'continue', label: 'Continue', png: '/agent-icons/continue.png' },
  { id: 'cursor', label: 'Cursor', png: '/agent-icons/cursor.png' },
  { id: 'kimi', label: 'Kimi', png: '/agent-icons/kimi.png' },
  { id: 'mistral-vibe', label: 'Mistral Vibe', png: '/agent-icons/mistral-vibe.png' },
  { id: 'qwen-code', label: 'Qwen Code', png: '/agent-icons/qwen-code.png' },
  { id: 'rovo', label: 'Rovo Dev', png: '/agent-icons/rovo.png' },
  { id: 'hermes', label: 'Hermes', png: '/agent-icons/hermes.png' },
  { id: 'openclaw', label: 'OpenClaw', png: '/agent-icons/openclaw.png' },
  { id: 'grok', label: 'Grok', png: '/agent-icons/grok.png' },
  { id: 'devin', label: 'Devin', png: '/agent-icons/devin.png' },
  { id: 'ante', label: 'Ante', png: '/agent-icons/ante.png' },
  { id: 'trae', label: 'Trae', png: '/agent-icons/trae.png' }
]

export type Platform = {
  id: string
  name: string
  arch: string
  file: string
  size: string
  icon: string
  requirements: string[]
  note: string
  /** Whether a real installer artifact is published at downloadsBase */
  available: boolean
}

export const PLATFORMS: Platform[] = [
  {
    id: 'windows',
    name: 'Windows',
    arch: 'x64 · 10/11',
    file: 'athena-windows-setup.exe',
    size: '571 MB',
    icon: 'M12 2L2 6v12l10 4 10-4V6l-10-4z',
    requirements: ['Windows 10 / 11 (x64)', '4 GB RAM', '500 MB disk space'],
    note: 'Run the installer — no admin rights required.',
    available: true
  },
  {
    id: 'macos',
    name: 'macOS',
    arch: 'Apple Silicon & Intel',
    file: 'athena-macos-universal.dmg',
    size: '~128 MB',
    icon: 'M16 2c.3 1.2-.4 2.4-1.3 3.3-.9.9-2.3 1.5-3.4 1.3-.2-1.2.5-2.5 1.4-3.4C13.7 2.3 15 1.7 16 2zM21 15.5c-.6 1.6-2.4 4.4-4.2 4.4-1 0-1.3-.6-2.6-.6s-1.7.6-2.7.6c-1.8 0-3.5-2.6-4.1-4.2C6.6 13.4 7 9.7 9 8c1.3-1.1 2.9-1.4 4-1.3 1 .1 2 .6 2.8.6.8 0 1.9-.6 3.2-.5 1.5 0 2.9.8 3.8 2-2.2 1.4-2 4.5-.3 5.7z',
    requirements: ['macOS 12.0+', 'Apple Silicon or Intel', '4 GB RAM', '500 MB disk space'],
    note: 'Built from a macOS machine — coming soon.',
    available: false
  },
  {
    id: 'linux',
    name: 'Linux',
    arch: 'x64 · .AppImage / .deb',
    file: 'athena-linux.AppImage',
    size: '~115 MB',
    icon: 'M4 14c0 5 8 8 8 8s8-3 8-8c0-4-3-9-8-9s-8 5-8 9zm8 5.5c-2.5 0-4-1.6-4-4 0-2.4 4-6.5 4-6.5s4 4.1 4 6.5c0 2.4-1.5 4-4 4z',
    requirements: [
      'Ubuntu 20.04+ / Fedora 35+',
      'x64 architecture',
      '4 GB RAM',
      '500 MB disk space'
    ],
    note: 'Built from a Linux machine — coming soon.',
    available: false
  }
]
