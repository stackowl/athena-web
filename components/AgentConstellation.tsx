const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

type AgentNode = { label: string; glyph: string; x: number; y: number; state: "done" | "busy" };

const AGENTS: AgentNode[] = [
  { label: "codex", glyph: "C", x: 120, y: 64, state: "done" },
  { label: "claude code", glyph: "Cl", x: 1032, y: 64, state: "busy" },
  { label: "opencode", glyph: "O", x: 120, y: 336, state: "done" },
  { label: "pi", glyph: "π", x: 1032, y: 336, state: "busy" },
];

const CENTER = { x: 576, y: 200 };

/** Agent worktree constellation — decorative, sits behind the hero mockup. Pure CSS animation. */
export default function AgentConstellation({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1152 400"
      preserveAspectRatio="xMidYMid slice"
      className={`h-80 w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="const-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(106, 76, 245, 0.2)" />
          <stop offset="100%" stopColor="rgba(106, 76, 245, 0)" />
        </radialGradient>
      </defs>

      {/* central glow */}
      <circle cx={CENTER.x} cy={CENTER.y} r="130" fill="url(#const-glow)" />

      {/* orbits */}
      <ellipse
        className="orbit-a"
        cx={CENTER.x}
        cy={CENTER.y}
        rx="430"
        ry="150"
        fill="none"
        stroke="var(--color-hairline-soft)"
      />
      <ellipse
        className="orbit-b"
        cx={CENTER.x}
        cy={CENTER.y}
        rx="300"
        ry="88"
        fill="none"
        stroke="var(--color-hairline-soft)"
      />

      {/* connectors */}
      {AGENTS.map((a) => (
        <line
          key={a.label}
          className="const-line"
          x1={a.x}
          y1={a.y}
          x2={CENTER.x}
          y2={CENTER.y}
          stroke="var(--color-hairline)"
        />
      ))}

      {/* floating dust */}
      <circle className="float-dot" cx="90" cy="212" r="2" fill="var(--color-ink-muted)" opacity="0.5" />
      <circle
        className="float-dot"
        cx="1064"
        cy="188"
        r="2"
        fill="var(--color-ink-muted)"
        opacity="0.5"
        style={{ animationDelay: "1.2s" }}
      />
      <circle
        className="float-dot"
        cx="168"
        cy="128"
        r="1.5"
        fill="var(--color-ink-muted)"
        opacity="0.4"
        style={{ animationDelay: "2.4s" }}
      />
      <circle
        className="float-dot"
        cx="988"
        cy="286"
        r="1.5"
        fill="var(--color-ink-muted)"
        opacity="0.4"
        style={{ animationDelay: "3.1s" }}
      />

      {/* main branch */}
      <rect x="544" y="168" width="64" height="64" fill="var(--color-surface-1)" stroke="var(--color-hairline)" />
      <text x={CENTER.x} y="206" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="var(--color-ink)">
        main
      </text>

      {/* agent worktrees */}
      {AGENTS.map((a) => (
        <g key={a.label}>
          <rect x={a.x - 22} y={a.y - 22} width="44" height="44" fill="var(--color-surface-1)" stroke="var(--color-hairline)" />
          <text x={a.x} y={a.y + 5} textAnchor="middle" fontFamily={MONO} fontSize="13" fill="var(--color-ink)">
            {a.glyph}
          </text>
          <rect
            x={a.x + 18}
            y={a.y - 30}
            width="6"
            height="6"
            fill={a.state === "done" ? "var(--color-success)" : "var(--color-ink-muted)"}
            className={a.state === "busy" ? "status-pulse" : undefined}
          />
          <text x={a.x} y={a.y + 38} textAnchor="middle" fontFamily={MONO} fontSize="10" fill="var(--color-ink-muted)">
            {a.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
