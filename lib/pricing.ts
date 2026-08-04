/**
 * Pricing tiers. Local is free forever (open source); hosted services are
 * paid. Prices and names are placeholders to be confirmed before launch.
 */
export type Tier = {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const TIERS: Tier[] = [
  {
    id: "free",
    name: "Gratis",
    price: "$0",
    period: "voor altijd",
    tagline: "Athena local — alles op jouw machine.",
    features: [
      "Onbeperkte lokale sessions & worktrees",
      "Alle 35+ agent-CLI's",
      "One-board tracking, terminal, skills",
      "Open source (MIT)",
      "Community support",
    ],
    cta: { label: "Download Athena", href: "/download" },
  },
  {
    id: "pro",
    name: "Pro",
    price: "$20",
    period: "/ gebruiker / maand",
    tagline: "Hosted remote sessions — jouw agents, overal bereikbaar.",
    features: [
      "Alles uit Gratis",
      "Hosted relay voor pairing & remote sessions",
      "Prioriteitssupport",
      "Early access tot nieuwe surfaces",
    ],
    cta: { label: "Ga op de waitlist", href: "/community" },
    featured: true,
  },
  {
    id: "team",
    name: "Team",
    price: "$40",
    period: "/ gebruiker / maand",
    tagline: "Gedeelde boards en een managed relay voor teams.",
    features: [
      "Alles uit Pro",
      "Gedeelde boards & org-workspaces",
      "Managed relay voor het hele team",
      "SSO & audit log",
    ],
    cta: { label: "Praat met ons", href: "/community" },
  },
];

export const COMPARISON: { label: string; local: string; hosted: string }[] = [
  {
    label: "Waar sessies draaien",
    local: "Jouw machine",
    hosted: "Athena relay / jouw host",
  },
  {
    label: "Locatie van de code",
    local: "Blijft op jouw computer",
    hosted: "Session-weergave reist; code blijft op de host",
  },
  {
    label: "Kosten",
    local: "Gratis, voor altijd",
    hosted: "Abonnement",
  },
  {
    label: "Het beste voor",
    local: "Solo-devs die alles lokaal willen",
    hosted: "Remote-toegang, teams, aansturing buiten de machine",
  },
];
