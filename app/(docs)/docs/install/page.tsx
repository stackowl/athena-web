import type { Metadata } from 'next'
import { APP } from '@/lib/config'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Install',
  description: `Download ${APP.product} for macOS, Windows, or Linux, and opt into RC builds.`
}

const DOWNLOADS = [
  {
    platform: 'macOS',
    arch: 'Apple Silicon',
    href: `${APP.downloadsBase}/athena-macos-arm64.dmg`,
    available: false
  },
  {
    platform: 'macOS',
    arch: 'Intel',
    href: `${APP.downloadsBase}/athena-macos-x64.dmg`,
    available: false
  },
  {
    platform: 'Windows',
    arch: 'installer (x64)',
    href: `${APP.downloadsBase}/athena-windows-setup.exe`,
    available: true
  },
  {
    platform: 'Linux',
    arch: 'AppImage · .deb',
    href: `${APP.downloadsBase}/athena-linux.AppImage`,
    available: false
  }
]

export default function InstallPage() {
  return (
    <DocsArticle
      title="Install"
      lede="Download Athena for macOS, Windows, or Linux — no account, no sign-up, no telemetry."
    >
      <h2 id="download">Download</h2>
      <ul className="hidden md:grid">
        {DOWNLOADS.map((d, i) => (
          <li key={`${d.platform}-${d.arch}`} className="not:grid">
            <p>
              <strong>{d.platform}:</strong>{' '}
              {d.available ? (
                <a href={d.href}>download {d.arch}</a>
              ) : (
                <span className="text-white/60">{d.arch} — coming soon</span>
              )}
            </p>
          </li>
        ))}
      </ul>

      <p>
        <strong>Windows is live.</strong> Grab the <a href={APP.downloadsBase + '/athena-windows-setup.exe'}>Windows installer</a> — it runs without admin rights. macOS and Linux packages are built from native machines and follow as CI is wired up; until then, older builds are always available on{' '}
        <a href={APP.releasesUrl} target="_blank" rel="noreferrer">GitHub Releases</a>.
      </p>

      <Callout title="Prefer the CLI?">
        <p>
          Athena ships a <code>athena</code> binary on your PATH. You can install it standalone and
          drive sessions, worktrees, and orchestration entirely from the shell — no GUI required.
          See the <a href="/docs/cli/overview">CLI overview</a>.
        </p>
      </Callout>

      <h2 id="first-launch">First launch</h2>
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Start the app.</strong> Athena opens a workspace shell with an empty board and a
            terminal.
          </p>
        </li>
        <li>
          <p>
            <strong>Put your agent CLIs on PATH.</strong> Athena orchestrates the agent CLIs you already
            use. The setup guide can install Claude Code, Codex, or OpenCode for you.
          </p>
        </li>
        <li>
          <p>
            <strong>Open a project.</strong> A folder or git repo works — local or over SSH.
          </p>
        </li>
      </ol>

      <Callout type="warn" title="RC builds">
        <p>
          Athena is in early pre-release. Expect the occasional rough edge; pin to a specific release
          from <a href={APP.releasesUrl} target="_blank" rel="noreferrer">Releases</a> if you need a
          stable baseline.
        </p>
      </Callout>
    </DocsArticle>
  )
}
