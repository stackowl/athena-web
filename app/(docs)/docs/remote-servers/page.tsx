import type { Metadata } from 'next'
import Link from 'next/link'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Remote Athena Servers',
  description:
    'A dedicated Athena instance on your own VPS or bare metal, shared across your team and always on.'
}

export default function RemoteServersPage() {
  return (
    <DocsArticle
      title="Remote Athena Servers"
      lede="A dedicated, always-on Athena instance on infrastructure you control — one board, shared by your team."
    >
      <p>
        A remote Athena server is a headless Athena install on your own VPS, cloud box, or bare
        metal. Desktop clients connect to it over your network or the internet. It&apos;s the setup
        to pick when you want agents running 24/7 on real hardware without every team member
        re-creating the same environment on their laptop.
      </p>

      <h2 id="how-it-works">How it works</h2>
      <ul>
        <li>
          <strong>One server, many clients.</strong> Your desktop Athena window becomes a remote
          control; the worktrees, terminals, and agents live on the server.
        </li>
        <li>
          <strong>Your machines, your data.</strong> Athena doesn&apos;t host anything. Provision a
          box you already trust, in a region you choose.
        </li>
        <li>
          <strong>Shared board.</strong> Everyone connected to the same server sees the same
          worktrees, sessions, and the same Athena Ledger.
        </li>
      </ul>

      <h2 id="provision">Provisioning a server</h2>
      <ol className="docs-steps">
        <li>
          <p>
            <strong>Pick a machine.</strong> A 2-core / 4 GB box is a fine starting point; scale RAM
            and cores with how many agents you run at once.
          </p>
        </li>
        <li>
          <p>
            <strong>Install Athena headless.</strong> The <code>athena</code> binary runs a server
            mode — no GUI needed. Enable it as a systemd service so it survives reboots.
          </p>
        </li>
        <li>
          <p>
            <strong>Install agent CLIs.</strong> The agents you want to run (Claude Code, Codex, Pi…)
            must be installed and authenticated on the server.
          </p>
        </li>
        <li>
          <p>
            <strong>Connect clients.</strong> From the desktop app, add the server as a target and
            start sharing worktrees.
          </p>
        </li>
      </ol>

      <Callout type="info" title="Headless caveats">
        <p>
          Features that need a display — browser preview, Design Mode — run on the server too. If
          you need those, provision the box with a display or a virtual framebuffer available.
        </p>
      </Callout>

      <Callout type="warn" title="Exposure">
        <p>
          Only expose your server over connections you control — a VPN, an SSH tunnel, or a
          firewalled network. Don&apos;t put an unauthenticated Athena server on the public internet.
        </p>
      </Callout>

      <Callout title="Next">
        <p>
          New to remote work? Start with <Link href="/docs/ways-to-run">Ways to run Athena</Link>,
          then the <Link href="/docs/ssh">SSH worktree</Link> basics before scaling up to a shared
          server.
        </p>
      </Callout>
    </DocsArticle>
  )
}
