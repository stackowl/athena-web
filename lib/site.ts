import { APP } from "./config";

/**
 * Site-wide navigation and product-surface data.
 * Single source for Navbar, Footer and the home-page product grid.
 */

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Product = {
  id: "ide" | "cli" | "web" | "mobile";
  name: string;
  tagline: string;
  href: string;
  icon: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "ide",
    name: "IDE",
    tagline:
      "De desktop-app — parallelle worktrees, één bord, terminal en skills. Alles lokaal.",
    href: "/ide",
    icon: "M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h6v8H7V7zm8 0h2v11h-2V7z",
  },
  {
    id: "cli",
    name: "CLI",
    tagline:
      "athena op de commandoregel — sessies, worktrees en orchestration zonder de terminal te verlaten.",
    href: "/cli",
    icon: "M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 3.5 3 2.5-3 2.5V7.5zM9 12h4v1.5H9V12z",
  },
  {
    id: "web",
    name: "Web",
    tagline:
      "Bestuur Athena vanuit elke browser — koppel je machine via SSH of relay en blijf op afstand werken.",
    href: "/web",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.5 9H15a16 16 0 0 0-1.9-7 8 8 0 0 1 6.4 7zM12 4c1.4 1.6 2.4 4 2.7 7H9.3C9.6 8 10.6 5.6 12 4zm0 16c-1.4-1.6-2.4-4-2.7-7h5.4c-.3 3-1.3 5.4-2.7 7zM6.9 4A16 16 0 0 0 5 11H4.5A8 8 0 0 1 6.9 4zM4.5 13H5c.3 3 .9 5.4 1.9 7a8 8 0 0 1-2.4-7zM17.1 20c1-1.6 1.6-4 1.9-7h1.5a8 8 0 0 1-3.4 7z",
  },
  {
    id: "mobile",
    name: "Mobile",
    tagline:
      "Check je sessies, review diffs en stuur agents vanuit je telefoon. Early access.",
    href: "/mobile",
    icon: "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8zm1 3h6v12H9V5z",
    badge: "Wachtlijst",
  },
];

export const PRIMARY_NAV: NavLink[] = [
  { label: "IDE", href: "/ide" },
  { label: "CLI", href: "/cli" },
  { label: "Web", href: "/web" },
  { label: "Mobile", href: "/mobile" },
  { label: "Prijzen", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Community", href: "/community" },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "IDE", href: "/ide" },
      { label: "CLI", href: "/cli" },
      { label: "Web", href: "/web" },
      { label: "Mobile", href: "/mobile" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    title: "Bronnen",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Gids", href: "/guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Prijzen", href: "/pricing" },
    ],
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Community", href: "/community" },
      { label: "Compliance", href: "/compliance" },
      { label: "Privacy", href: "/privacy" },
      { label: "Licentie", href: "/license" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "GitHub", href: APP.githubUrl, external: true },
      { label: "Issues", href: APP.issuesUrl, external: true },
      { label: "Discord", href: APP.discordUrl, external: true },
    ],
  },
];
