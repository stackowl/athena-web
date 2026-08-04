# Athena Web — Landing Page Plan

Referentie voor de marketing-secties. Principe: **elke sectie = 1 pain → 1 mechanisme → bewijs → 1 CTA.** Geen "kop + zin"-secties; elk blok toont concreet bewijs (screens, cijfers, vergelijking, mini-demo).

## 1. Pain points (3 clusters)

**Cluster A — Multitasken met agents = chaos / onveilig**
- Agents overschrijven elkaars wijzigingen (collisions, verloren werk)
- Geen zicht op "wie deed wat" (welke branch/PR is veilig?)
- Parallel werk mergen = handmatig scouten + gokken

**Cluster B — Lock-in, privacy, één-tool-stysteem**
- Elke CLI is een eiland; "gebruik de mijne"-druk
- Cloud-agents: code weg, kosten, telemetrie → je wil local-first + open + geen lock-in

**Cluster C — Snelheid via parallellisme, niemand coördineert veilig**
- Eén agent = wachten; meer agents = spanning
- Context verliest over sessies; repetitieve setup/playbooks
- Vastzitten aan één host (lokaal / WSL / SSH / remote)

> Kern: de markt zegt "gebruik één agent". Athena zegt: *gebruik ze allemaal, veilig, op jouw machine.*

## 2. Key features (feature → lost pain)

| Feature | Pain |
|---|---|
| Echte parallelle agents (Codex, Claude Code, OpenCode, Pi + 35+) | B, snelheid |
| Geïsoleerde git-worktree per agent | A (geen collisions) |
| Eén bord (branches/commits/PRs per agent) | A (zicht) |
| Merge met vertrouwen (coördineert, gokt nooit) | A (geen gokken) |
| Local-first + open source (MIT) + geen telemetrie | B |
| Context over sessies heen | C |
| Skills & plugins (playbooks coderen) | C |
| Overal: lokaal, WSL, SSH, relay, browser, mobiel | C |

## 3. ICP & echte wensen

**ICP:** solofounder / senior engineer / agent power-user die dagelijks Claude Code/Codex/Cursor draait en single-agent-bottlenecks of multi-agent-chaos ervaart. Privacy/open-source-minded, wantrouwig over lock-in.
**Secundair:** kleine teams + platform-engineers die agent-workflows standaardiseren.

**Echte wensen:** snelheid mét veiligheid · vertrouwen & controle · geen lock-in · signaal boven ruis · voorspelbare winst · kosteneffectief parallellisme.

## 4. Sectieplan per pagina

- **Home:** Hero → pain-crop (3 microcards) → convergence maze → How-it-works (pain→jobs→bewijs) → bento (3 use-cases met captions) → Why Athena (per persona) → vergelijking (mini-tabel) → social proof-lite → CTA
- **IDE:** Hero → features gegroepeerd op pain (collisions/visibility/local/agnostisch, per feature bewijs) → board-screenshot+caption → 3-stappen → FAQ (echte bezwaren) → CTA
- **CLI:** Hero → "dezelfde kracht, zonder GUI" → live terminal-demo → worktree/status-weergave → integraties → CTA
- **Web (remote):** Hero → pain "weg van bureau, agents moeten door" → pairing (SSH/relay) → remote-board screens → FAQ → CTA
- **Mobile:** Hero → use-case "sturing uit je broekzak" → mini phone-demo → wat je ermee doet → early-access CTA
- **Pricing:** pain geopend → 3 tiers + eerlijke vergelijking (lokaal vs hosted) → privacy-FAQ → CTA
- **Guide / Getting-started:** klikbaar stappenpad met bewijs na elke stap → "Next up"
- **FAQ:** echte bezwaren (merge-veiligheid, code-upload, telemetrie, lock-in, wat is orkestreren) met bewijs-links
- **Community / Docs / Privacy / License / Download:** houden; elke kop heeft een job

## 5. "Niks"-secties → fix
- Screens zonder caption → pain-label + caption
- Generieke 3-stappen → pain→mechanisme→bewijs
- Feature-grids zonder bewijs → één feature = één bewijsje
- Kale Stats → echte metrics of laten vervallen

## 6. Eén lijn over alle heroes
Elke page-hero voelt identiek aan de root-home hero: gecentreerd, `display-xl` titel (met gedimde tweede regel), `body-lg` lede, pill-eyebrow, `hero-atmosphere`, zelfde stacking/spacing.
