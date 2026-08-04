import { APP } from "./config";

/**
 * Site-wide navigation and footer data.
 * Single source for Navbar and Footer.
 */

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const PRIMARY_NAV: NavLink[] = [
  { label: "Docs", href: "/docs" },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "/download" },
      { label: "Docs", href: "/docs" },
      { label: "GitHub", href: APP.githubUrl, external: true },
      { label: "Releases", href: APP.releasesUrl, external: true },
    ],
  },
  {
    title: "Bronnen",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Issues", href: APP.issuesUrl, external: true },
      { label: "Discord", href: APP.discordUrl, external: true },
    ],
  },
];
