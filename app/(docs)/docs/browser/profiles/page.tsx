import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Browser-use profiles',
  description: 'Reusable browsing and steering profiles for agents; Roadmap.'
}

export default function BrowserProfilesPage() {
  return (
    <DocsArticle
      title="Browser-use profiles"
      lede="Reusable browsing and steering profiles for agents; Roadmap."
    >
      <p>
        Browser-use profiles let you save a set of navigation steps, selectors, and
        actions as a reusable recipe. An agent can replay a profile to perform a
        consistent browsing task across multiple worktrees.
      </p>

      <h2 id="create-profile">1. Create a profile</h2>
      <p>
        Open the steering panel for a worktree, navigate to the profile section, and
        click <strong>New profile</strong>. Record each step (click, type, scroll,
        wait) and save the profile with a name.
      </p>

      <h2 id="reuse">2. Reuse across sessions</h2>
      <p>
        Once saved, a profile is available to any agent in any worktree. Select the
        profile from the dropdown and the agent will execute the recorded steps
        automatically.
      </p>

      <Callout type="warn" title="Roadmap">
        <p>
          Browser-use profiles are currently in Roadmap. The feature is planned for the
          next release; stay tuned for updates.
        </p>
      </Callout>
    </DocsArticle>
  )
}