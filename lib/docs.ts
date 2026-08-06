import type { Language } from './i18n'

export type DocsGroup = {
  group: string
  items: { slug: string; title: string; path: string }[]
}

export const DOCS_NAV_EN: DocsGroup[] = [
  {
    group: 'Start Here',
    items: [
      { slug: 'install', title: 'Install', path: '/docs/install' },
      { slug: 'first-session', title: 'Your first 3-agent session', path: '/docs/first-session' },
    ],
  },
  {
    group: 'The Athena Model',
    items: [
      { slug: 'worktrees', title: 'Worktrees', path: '/docs/model/worktrees' },
      { slug: 'tabs-panes-splits', title: 'Tabs, panes & split layouts', path: '/docs/model/tabs-panes-splits' },
      { slug: 'agents-sessions', title: 'Agents & sessions', path: '/docs/model/agents-sessions' },
      { slug: 'session-restore', title: 'Session restore', path: '/docs/model/session-restore' },
      { slug: 'quick-open', title: 'Quick Open & Jump Palette', path: '/docs/model/quick-open' },
      { slug: 'hibernation', title: 'Agent hibernation', path: '/docs/model/hibernation' },
    ],
  },
  {
    group: 'Working with Agents',
    items: [
      { slug: 'supported', title: 'Supported agents', path: '/docs/agents/supported' },
      { slug: 'claude-code', title: 'Claude Code in Athena', path: '/docs/agents/claude-code' },
      { slug: 'codex', title: 'Codex in Athena', path: '/docs/agents/codex' },
      { slug: 'opencode', title: 'OpenCode in Athena', path: '/docs/agents/opencode' },
      { slug: 'pi', title: 'Pi in Athena', path: '/docs/agents/pi' },
      { slug: 'custom-cli', title: 'Add a custom CLI agent', path: '/docs/agents/custom-cli' },
      { slug: 'native-chat', title: 'Chat UI (native chat)', path: '/docs/agents/native-chat' },
      { slug: 'session-history', title: 'Agent session history', path: '/docs/agents/session-history' },
      { slug: 'usage-tracking', title: 'Usage & rate-limit tracking', path: '/docs/agents/usage-tracking' },
      { slug: 'hooks-memory', title: 'Agent hooks & memory', path: '/docs/agents/hooks-memory' },
    ],
  },
  {
    group: 'Reviewing & Shipping Code',
    items: [
      { slug: 'diff-viewer', title: 'Diff viewer', path: '/docs/review/diff-viewer' },
      { slug: 'annotate-ai-diff', title: 'Annotate AI Diff', path: '/docs/review/annotate-ai-diff' },
      { slug: 'attribution', title: 'Attribution', path: '/docs/review/attribution' },
      { slug: 'commit-push', title: 'Commit & push from Athena', path: '/docs/review/commit-push' },
      { slug: 'github', title: 'Hosted reviews, issues & Actions', path: '/docs/review/github' },
      { slug: 'linear', title: 'Linear items drawer', path: '/docs/review/linear' },
    ],
  },
  {
    group: 'Editing in Athena',
    items: [
      { slug: 'monaco', title: 'Monaco editor & autosave', path: '/docs/editing/monaco' },
      { slug: 'markdown', title: 'Rich markdown editor', path: '/docs/editing/markdown' },
      { slug: 'viewers', title: 'Mermaid, PDF & image viewers', path: '/docs/editing/viewers' },
      { slug: 'file-explorer', title: 'File explorer & external drag-drop', path: '/docs/editing/file-explorer' },
    ],
  },
  {
    group: 'Browser & Terminal',
    items: [
      { slug: 'overview', title: 'Per-worktree browser', path: '/docs/browser/overview' },
      { slug: 'design-mode', title: 'Design Mode', path: '/docs/browser/design-mode' },
      { slug: 'profiles', title: 'Browser-use profiles', path: '/docs/browser/profiles' },
      { slug: 'terminal', title: 'Terminal', path: '/docs/terminal' },
    ],
  },
  {
    group: 'Running Remotely',
    items: [
      { slug: 'ways-to-run', title: 'Ways to run Athena', path: '/docs/ways-to-run' },
      { slug: 'ssh', title: 'SSH worktrees', path: '/docs/ssh' },
      { slug: 'remote-servers', title: 'Remote Athena Servers', path: '/docs/remote-servers' },
    ],
  },
  {
    group: 'CLI & Automation',
    items: [
      { slug: 'overview', title: 'Athena CLI overview', path: '/docs/cli/overview' },
      { slug: 'reference', title: 'Athena CLI reference', path: '/docs/cli/reference' },
      { slug: 'orchestration', title: 'Orchestration', path: '/docs/cli/orchestration' },
      { slug: 'automations', title: 'Scheduled automations', path: '/docs/cli/automations' },
      { slug: 'computer-use', title: 'Computer use', path: '/docs/cli/computer-use' },
      { slug: 'worktree-checkpoints', title: 'Worktree checkpoints', path: '/docs/cli/worktree-checkpoints' },
      { slug: 'skills', title: 'Skills registry & MCP', path: '/docs/cli/skills' },
    ],
  },
  {
    group: 'Mobile & Notifications',
    items: [
      { slug: 'mobile', title: 'Mobile companion', path: '/docs/mobile' },
      { slug: 'notifications', title: 'Notifications & Inbox', path: '/docs/notifications' },
      { slug: 'activity', title: 'Agents feed', path: '/docs/activity' },
    ],
  },
  {
    group: 'Recipes',
    items: [
      { slug: 'parallel-agents', title: 'Race three agents on the same task', path: '/docs/recipes/parallel-agents' },
      { slug: 'review-ai-diff', title: 'Review an AI diff line-by-line', path: '/docs/recipes/review-ai-diff' },
      { slug: 'jump-worktrees', title: 'Jump between 10 worktrees', path: '/docs/recipes/jump-worktrees' },
      { slug: 'design-mode-fix', title: 'Fix a UI bug with Design Mode', path: '/docs/recipes/design-mode-fix' },
      { slug: 'remote-worktrees', title: 'Work on a remote machine over SSH', path: '/docs/recipes/remote-worktrees' },
    ],
  },
  {
    group: 'Settings & Debugging',
    items: [
      { slug: 'settings', title: 'Settings reference', path: '/docs/settings' },
      { slug: 'telemetry', title: 'Privacy & Telemetry', path: '/docs/telemetry' },
      { slug: 'troubleshooting', title: 'Troubleshooting & FAQ', path: '/docs/troubleshooting' },
      { slug: 'github-errors', title: 'Troubleshooting GitHub errors', path: '/docs/github-errors' },
    ],
  },
]

export const DOCS_NAV_NL: DocsGroup[] = [
  {
    group: 'Begin Hier',
    items: [
      { slug: 'install', title: 'Installatie', path: '/docs/install' },
      { slug: 'first-session', title: 'Je eerste 3-agent sessie', path: '/docs/first-session' },
    ],
  },
  {
    group: 'Het Athena Model',
    items: [
      { slug: 'worktrees', title: 'Worktrees', path: '/docs/model/worktrees' },
      { slug: 'tabs-panes-splits', title: 'Tabs, vensters & splits', path: '/docs/model/tabs-panes-splits' },
      { slug: 'agents-sessions', title: 'Agents & sessies', path: '/docs/model/agents-sessions' },
      { slug: 'session-restore', title: 'Sessie herstel', path: '/docs/model/session-restore' },
      { slug: 'quick-open', title: 'Snel openen & Navigatie', path: '/docs/model/quick-open' },
      { slug: 'hibernation', title: 'Agent zomerslaap', path: '/docs/model/hibernation' },
    ],
  },
  {
    group: 'Werken met Agents',
    items: [
      { slug: 'supported', title: 'Ondersteunde agents', path: '/docs/agents/supported' },
      { slug: 'claude-code', title: 'Claude Code in Athena', path: '/docs/agents/claude-code' },
      { slug: 'codex', title: 'Codex in Athena', path: '/docs/agents/codex' },
      { slug: 'opencode', title: 'OpenCode in Athena', path: '/docs/agents/opencode' },
      { slug: 'pi', title: 'Pi in Athena', path: '/docs/agents/pi' },
      { slug: 'custom-cli', title: 'Aangepaste CLI-agent toevoegen', path: '/docs/agents/custom-cli' },
      { slug: 'native-chat', title: 'Chat UI (native chat)', path: '/docs/agents/native-chat' },
      { slug: 'session-history', title: 'Agent sessie historie', path: '/docs/agents/session-history' },
      { slug: 'usage-tracking', title: 'Verbruik & limieten', path: '/docs/agents/usage-tracking' },
      { slug: 'hooks-memory', title: 'Agent hooks & geheugen', path: '/docs/agents/hooks-memory' },
    ],
  },
  {
    group: 'Code Reviewen & Shippen',
    items: [
      { slug: 'diff-viewer', title: 'Diff viewer', path: '/docs/review/diff-viewer' },
      { slug: 'annotate-ai-diff', title: 'AI Diff annoteren', path: '/docs/review/annotate-ai-diff' },
      { slug: 'attribution', title: 'Attributie & Ledger', path: '/docs/review/attribution' },
      { slug: 'commit-push', title: 'Commit & push vanuit Athena', path: '/docs/review/commit-push' },
      { slug: 'github', title: 'Hosted reviews, issues & Actions', path: '/docs/review/github' },
      { slug: 'linear', title: 'Linear taken overzicht', path: '/docs/review/linear' },
    ],
  },
  {
    group: 'Bewerken in Athena',
    items: [
      { slug: 'monaco', title: 'Monaco editor & automatisch opslaan', path: '/docs/editing/monaco' },
      { slug: 'markdown', title: 'Rijke markdown editor', path: '/docs/editing/markdown' },
      { slug: 'viewers', title: 'Mermaid, PDF & afbeeldingen', path: '/docs/editing/viewers' },
      { slug: 'file-explorer', title: 'Bestandsbeheer & slepen', path: '/docs/editing/file-explorer' },
    ],
  },
  {
    group: 'Browser & Terminal',
    items: [
      { slug: 'overview', title: 'Per-worktree browser', path: '/docs/browser/overview' },
      { slug: 'design-mode', title: 'Ontwerpmodus (Design Mode)', path: '/docs/browser/design-mode' },
      { slug: 'profiles', title: 'Browser profielen', path: '/docs/browser/profiles' },
      { slug: 'terminal', title: 'Geïntegreerde Terminal', path: '/docs/terminal' },
    ],
  },
  {
    group: 'Remote Draaien',
    items: [
      { slug: 'ways-to-run', title: 'Manieren om Athena te draaien', path: '/docs/ways-to-run' },
      { slug: 'ssh', title: 'SSH worktrees', path: '/docs/ssh' },
      { slug: 'remote-servers', title: 'Remote Athena Servers', path: '/docs/remote-servers' },
    ],
  },
  {
    group: 'CLI & Automatisering',
    items: [
      { slug: 'overview', title: 'Athena CLI overzicht', path: '/docs/cli/overview' },
      { slug: 'reference', title: 'Athena CLI referentie', path: '/docs/cli/reference' },
      { slug: 'orchestration', title: 'Orkestratie', path: '/docs/cli/orchestration' },
      { slug: 'automations', title: 'Geplande automatiseringen', path: '/docs/cli/automations' },
      { slug: 'computer-use', title: 'Computer use', path: '/docs/cli/computer-use' },
      { slug: 'worktree-checkpoints', title: 'Worktree controlepunten', path: '/docs/cli/worktree-checkpoints' },
      { slug: 'skills', title: 'Skills register & MCP', path: '/docs/cli/skills' },
    ],
  },
  {
    group: 'Mobiel & Meldingen',
    items: [
      { slug: 'mobile', title: 'Mobiele app', path: '/docs/mobile' },
      { slug: 'notifications', title: 'Meldingen & Inbox', path: '/docs/notifications' },
      { slug: 'activity', title: 'Agents activiteit', path: '/docs/activity' },
    ],
  },
  {
    group: 'Recepten',
    items: [
      { slug: 'parallel-agents', title: 'Laat drie agents strijden op dezelfde taak', path: '/docs/recipes/parallel-agents' },
      { slug: 'review-ai-diff', title: 'Review een AI diff regel-voor-regel', path: '/docs/recipes/review-ai-diff' },
      { slug: 'jump-worktrees', title: 'Schakel tussen 10 worktrees', path: '/docs/recipes/jump-worktrees' },
      { slug: 'design-mode-fix', title: 'Los een UI bug op met Design Mode', path: '/docs/recipes/design-mode-fix' },
      { slug: 'remote-worktrees', title: 'Werk op een remote server via SSH', path: '/docs/recipes/remote-worktrees' },
    ],
  },
  {
    group: 'Instellingen & Debugging',
    items: [
      { slug: 'settings', title: 'Instellingen referentie', path: '/docs/settings' },
      { slug: 'telemetry', title: 'Privacy & Telemetrie', path: '/docs/telemetry' },
      { slug: 'troubleshooting', title: 'Probleemoplossing & FAQ', path: '/docs/troubleshooting' },
      { slug: 'github-errors', title: 'GitHub fouten oplossen', path: '/docs/github-errors' },
    ],
  },
]

export const DOCS_NAV = DOCS_NAV_EN
export const DOCS_FLAT = getDocsFlat('en')

export function getDocsNav(lang: Language = 'en'): DocsGroup[] {
  return lang === 'nl' ? DOCS_NAV_NL : DOCS_NAV_EN
}

export function getDocsFlat(lang: Language = 'en'): { title: string; path: string }[] {
  return getDocsNav(lang).flatMap((g) =>
    g.items.map((i) => ({ title: i.title, path: i.path }))
  )
}

/** Look up prev/next siblings for a given path. */
export function docsAdjacent(path: string, lang: Language = 'en') {
  const flat = getDocsFlat(lang)
  const idx = flat.findIndex((p) => p.path === path)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  }
}
