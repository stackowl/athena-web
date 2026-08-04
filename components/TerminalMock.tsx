"use client";

import { useEffect, useState } from "react";

type Line = {
  kind: "cmd" | "out" | "busy" | "meta";
  text: string;
  className: string;
};

const LINES: Line[] = [
  { kind: "cmd", className: "text-ink-muted", text: "athena session add agent --model claude --worktree feat/api" },
  { kind: "out", className: "text-ink-muted", text: "worktree feat/api ready on main@1f3a9c2" },
  { kind: "cmd", className: "text-ink-muted", text: "athena session add agent --model o4 --worktree feat/ui" },
  { kind: "out", className: "text-ink-muted", text: "worktree feat/ui ready on main@1f3a9c2" },
  { kind: "busy", className: "text-ink-muted/60", text: "…agents building in parallel…" },
  { kind: "cmd", className: "text-ink-muted", text: "athena status" },
  { kind: "out", className: "text-success", text: "feat/api  ✓ api routes done · PR #184 merged · 3 commits" },
  { kind: "out", className: "text-success", text: "feat/ui   ✓ design tokens done · PR #185 open · 5 commits" },
  { kind: "meta", className: "text-ink-muted/60", text: "tracking 4 sessions · 2 worktrees · 0 conflicts" },
];

function Cursor() {
  return <span className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 select-none bg-ink-muted" aria-hidden />;
}

function Equalizer() {
  return (
    <span className="ml-2 inline-flex items-end gap-0.5" aria-hidden>
      <span className="eq-bar" style={{ animationDelay: "0ms" }} />
      <span className="eq-bar" style={{ animationDelay: "160ms" }} />
      <span className="eq-bar" style={{ animationDelay: "320ms" }} />
    </span>
  );
}

/** Terminal window that types its transcript on mount. Reduced-motion users see the full transcript. */
export default function TerminalMock() {
  const [revealed, setRevealed] = useState(-1);
  const [typed, setTyped] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    const wait = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    let i = 0;
    let chars = 0;

    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setRevealed(LINES.length - 1);
        setFinished(true);
        return;
      }
      if (i >= LINES.length) {
        setFinished(true);
        return;
      }
      const line = LINES[i];
      if (line.kind === "cmd") {
        chars = 0;
        setRevealed(i);
        setTyped(0);
        const step = () => {
          chars += 1;
          setTyped(chars);
          if (chars < line.text.length) {
            wait(step, 16 + Math.random() * 26);
          } else {
            i += 1;
            wait(run, 360);
          }
        };
        wait(step, 500);
      } else {
        setRevealed(i);
        i += 1;
        wait(run, line.kind === "busy" || line.kind === "meta" ? 800 : 260);
      }
    };

    wait(run, 60);
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="light-edge card">
        <div className="flex items-center gap-2 border-b border-hairline-soft px-4 py-3">
          <span className="h-3 w-3 bg-ink-muted/30" aria-hidden />
          <span className="h-3 w-3 bg-ink-muted/30" aria-hidden />
          <span className="h-3 w-3 bg-ink-muted/30" aria-hidden />
          <span className="ml-3 font-mono text-xs text-ink-muted">athena — session: core</span>
          <span className="ml-auto hidden items-center gap-1.5 font-mono text-xs text-ink-muted sm:flex">
            <span className="status-pulse h-1.5 w-1.5 bg-success" aria-hidden />
            4 agents · 0 conflicts
          </span>
        </div>
        <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:p-6">
          {LINES.map((l, i) => {
            const active = i === revealed;
            if (!(i < revealed || active || finished)) {
              // Reserve layout space (full line, invisible) so the window doesn't grow while typing
              return (
                <p key={i} className={`${l.className} invisible`} aria-hidden>
                  {l.kind === "cmd" && <span className="mr-2 select-none">$</span>}
                  {l.text}
                  {l.kind === "busy" && <Equalizer />}
                </p>
              );
            }
            const text = active && l.kind === "cmd" ? l.text.slice(0, typed) : l.text;
            return (
              <p key={i} className={l.className}>
                {l.kind === "cmd" && <span className="mr-2 select-none text-ink-muted/40">$</span>}
                {text}
                {l.kind === "busy" && <Equalizer />}
                {active && l.kind === "cmd" && <Cursor />}
                {finished && i === LINES.length - 1 && <Cursor />}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
