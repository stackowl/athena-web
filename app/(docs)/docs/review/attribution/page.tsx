import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Attribution',
  description:
    'Every change is attributed to the agent, the model, and the session that produced it — or the human who reviewed it. That trail powers the Athena Ledger.'
}

export default function AttributionPage() {
  return (
    <DocsArticle
      title="Attribution"
      lede="Every change is attributed to the agent, the model, and the session that produced it — or the human who reviewed it. That trail powers the Athena Ledger."
    >
      <p>
        When an agent edits code, Athena records who did it: which agent CLI, which model, which
        session, and when. When a human reviews or approves, that&apos;s recorded too. Nothing ships
        anonymously.
      </p>

      <h2 id="what-is-recorded">What is recorded</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agent</strong></td>
            <td>The CLI that produced the change (Claude Code, Codex, OpenCode, Pi, ...).</td>
          </tr>
          <tr>
            <td><strong>Model</strong></td>
            <td>The model the agent ran on.</td>
          </tr>
          <tr>
            <td><strong>Session</strong></td>
            <td>The workspace session the work belongs to.</td>
          </tr>
          <tr>
            <td><strong>Reviewer</strong></td>
            <td>The human who reviewed or approved the change, if any.</td>
          </tr>
          <tr>
            <td><strong>Timestamp</strong></td>
            <td>When the change or the review happened.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="the-athena-ledger">The Athena Ledger</h2>
      <p>
        Attribution feeds the Athena Ledger, an append-only audit log of AI-assisted development.
        Entries are never edited or deleted — history only grows. For any change you can reconstruct
        who made it, with which model, in which session, and who reviewed it.
      </p>

      <h2 id="eu-ai-act-readiness">EU AI Act readiness</h2>
      <p>
        The Ledger is designed to make compliance work concrete rather than guesswork. It keeps the
        records your team needs to demonstrate:
      </p>
      <ul>
        <li>
          <strong>Art 50 — transparency:</strong> AI-produced changes are labelled, so humans can
          tell agent output from human edits.
        </li>
        <li>
          <strong>Art 26 — audit log:</strong> an unchangeable trail of who changed what, and which
          model did it.
        </li>
        <li>
          <strong>Art 4 — AI literacy:</strong> visibility into where and how AI is used across your
          team&apos;s development.
        </li>
      </ul>

      <Callout type="warn" title="Not legal advice">
        <p>
          Athena records the data; how you use it to satisfy a regulation is up to you. Talk to your
          compliance counsel before relying on the Ledger for a filing.
        </p>
      </Callout>

      <h2 id="retention-and-privacy">Retention &amp; privacy</h2>
      <ul>
        <li><strong>6-month retention:</strong> entries are purged after six months.</li>
        <li><strong>Opt-in:</strong> the Ledger records nothing until you enable it.</li>
        <li>
          <strong>Local-first:</strong> ledger data stays on your machine, like everything in Athena.
        </li>
      </ul>
    </DocsArticle>
  )
}