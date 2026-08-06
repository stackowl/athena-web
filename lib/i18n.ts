export type Language = 'en' | 'nl'

export interface TranslationSchema {
  nav: {
    docs: string
    ledger: string
    download: string
    github: string
  }
  hero: {
    badge: string
    title: string
    shimmerText: string
    subhead: string
    desc: string
    downloadBtn: string
    githubBtn: string
  }
  funnel: {
    title: string
  }
  howItWorks: {
    title: string
    subhead: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
  }
  bento: {
    title: string
  }
  cta: {
    title: string
    shimmerText: string
    desc: string
    downloadBtn: string
    githubBtn: string
    osList: string
  }
  footer: {
    product: string
    resources: string
    rights: string
  }
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      docs: 'Docs',
      ledger: 'Ledger',
      download: 'Download',
      github: 'GitHub',
    },
    hero: {
      badge: 'Athena ADE — Multi-Agent Desktop Shell',
      title: 'Your agents,',
      shimmerText: 'in parallel',
      subhead: 'without friction',
      desc: 'Run Codex, Claude Code, OpenCode or Pi side-by-side. Athena gives each agent its own isolated worktree so they never collide on your files, tracks every branch and PR in one board, and preserves context between sessions — 100% on your machine.',
      downloadBtn: 'Download Athena',
      githubBtn: 'View on GitHub',
    },
    funnel: {
      title: 'One platform to orchestrate them all.',
    },
    howItWorks: {
      title: 'Live in five minutes',
      subhead: '- not five sprints',
      step1Title: 'Spawn agents',
      step1Desc: 'Create a session and add Codex, Claude Code, OpenCode or Pi — each agent gets its own isolated worktree, context, and mission.',
      step2Title: 'Track everything',
      step2Desc: 'Every branch, commit, and PR lands in one board. Nothing gets lost in the noise, and you always know what each agent is doing.',
      step3Title: 'Merge with confidence',
      step3Desc: 'Review each agent’s work in isolation and merge the winners. Athena coordinates the merge — it never guesses for you.',
    },
    bento: {
      title: 'See Athena in action',
    },
    cta: {
      title: 'Make the switch to',
      shimmerText: 'parallel development',
      desc: 'Download Athena ADE and give your next feature an entire team of agents.',
      downloadBtn: 'Download Athena — it’s free',
      githubBtn: 'View on GitHub',
      osList: 'macOS · Windows · Linux',
    },
    footer: {
      product: 'Product',
      resources: 'Resources',
      rights: 'All rights reserved.',
    },
  },
  nl: {
    nav: {
      docs: 'Docs',
      ledger: 'Ledger',
      download: 'Download',
      github: 'GitHub',
    },
    hero: {
      badge: 'Athena ADE — Multi-Agent Desktop Shell',
      title: 'Je agents,',
      shimmerText: 'in parallel',
      subhead: 'zonder weerstand',
      desc: 'Draai Codex, Claude Code, OpenCode of Pi naast elkaar. Athena geeft elke agent zijn eigen geïsoleerde worktree zodat ze nooit botsen op jouw bestanden, houdt elke branch en PR bij in één board en bewaart context tussen sessions — alles op jouw machine.',
      downloadBtn: 'Download Athena',
      githubBtn: 'Bekijk op GitHub',
    },
    funnel: {
      title: 'Eén platform om ze allemaal te orkestreren.',
    },
    howItWorks: {
      title: 'Live in vijf minuten',
      subhead: '- niet vijf sprints',
      step1Title: 'Spawn agents',
      step1Desc: 'Maak een session aan en voeg Codex, Claude Code, OpenCode of Pi toe — elke agent krijgt zijn eigen geïsoleerde worktree, zijn eigen context, zijn eigen missie.',
      step2Title: 'Houd alles bij',
      step2Desc: 'Elke branch, commit en PR komt in één board terecht. Niks gaat verloren in de ruis, en je weet altijd wat elke agent aan het doen is.',
      step3Title: 'Merge met vertrouwen',
      step3Desc: 'Review het werk van elke agent in isolatie en merge dan de winnaars. Athena coördineert de merge — het gokt of raadt nooit voor jou.',
    },
    bento: {
      title: 'Zie Athena in actie',
    },
    cta: {
      title: 'Maak de switch naar',
      shimmerText: 'parallel development',
      desc: 'Download Athena ADE en geef je volgende feature een heel team agents.',
      downloadBtn: 'Download Athena — het is gratis',
      githubBtn: 'Bekijk op GitHub',
      osList: 'macOS · Windows · Linux',
    },
    footer: {
      product: 'Product',
      resources: 'Bronnen',
      rights: 'Alle rechten voorbehouden.',
    },
  },
}
