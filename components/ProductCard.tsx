import Link from "next/link";

/**
 * Product surface card (IDE / CLI / Web / Mobile) used on the home page.
 * Mirrors the four-surface grid of the kiro.dev reference: icon tile,
 * name, one-liner, and a link to the product's own page.
 */
export default function ProductCard({
  name,
  tagline,
  href,
  icon,
  badge,
}: {
  name: string;
  tagline: string;
  href: string;
  icon: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="card group block h-full border border-hairline-soft p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-hairline hover:bg-surface-2"
    >
      <span className="grid h-10 w-10 place-items-center bg-surface-2 text-ink transition-colors duration-300 group-hover:bg-canvas">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d={icon} />
        </svg>
      </span>
      <div className="mt-5 flex items-center gap-2">
        <h3 className="headline text-ink">{name}</h3>
        {badge && (
          <span className="border border-hairline bg-surface-1 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-ink-muted">
            {badge}
          </span>
        )}
      </div>
      <p className="body mt-2 text-ink-muted">{tagline}</p>
      <span className="micro mt-4 inline-flex items-center gap-1 text-accent transition-transform duration-200 group-hover:translate-x-0.5">
        Learn more
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
        </svg>
      </span>
    </Link>
  );
}
