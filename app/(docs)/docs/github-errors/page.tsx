import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Troubleshooting GitHub errors',
  description:
    'The most common GitHub failures Athena hits: auth, push, fork, and rate-limit errors — and how to clear them.'
}

export default function GithubErrorsPage() {
  return (
    <DocsArticle
      title="Troubleshooting GitHub errors"
      lede="The most common GitHub failures Athena hits — auth, push, fork, and rate limits — and how to clear them."
    >
      <h2 id="authentication">Authentication errors</h2>
      <p>
        <strong>401 / Permission denied to repository.</strong> Athena uses the same credentials your
        git does. Fix it the way you normally would:
      </p>
      <ul>
        <li>Run <code>gh auth login</code> if you use the GitHub CLI.</li>
        <li>Or set up a <code>git credential helper</code> for HTTPS access.</li>
        <li>Check that the account has write access to the repository.</li>
      </ul>

      <h2 id="push-rejected">Push rejected</h2>
      <p>
        <strong>Non-fast-forward / rejected push.</strong> The remote branch moved while the agent
        worked. Rebase the worktree onto the latest remote, then retry — or merge the remote branch
        in, resolve, and push again.
      </p>

      <h2 id="rate-limit">Rate limits</h2>
      <p>
        <strong>API rate limit exceeded.</strong> Athena hits the GitHub API for repo metadata and
        status checks. Wait for the limit window, or authenticate with a token that carries a higher
        quota — unauthenticated limits are the most restrictive.
      </p>

      <h2 id="fork">Fork and PR issues</h2>
      <p>
        <strong>PR from a fork can&apos;t push.</strong> Some setups need the worktree on a branch
        the target repo can pull from, or the agent needs a fork to push to first. Open the worktree
        in a terminal and inspect <code>git remote -v</code> to confirm where pushes are going.
      </p>

      <h2 id="known-limits">Known limits</h2>
      <ul>
        <li>Deploy keys work for read-only repos only — use a fine-grained PAT for write access.</li>
        <li>Organizations with SAML enforcement need an approved token for API access.</li>
      </ul>

      <Callout type="info" title="Check the Ledger">
        <p>
          Every failed push is recorded with its error in the Athena Ledger, so you can see the exact
          error string and when it happened before digging in.
        </p>
      </Callout>
    </DocsArticle>
  )
}
