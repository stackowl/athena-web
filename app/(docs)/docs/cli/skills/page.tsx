import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Skills registry & MCP',
  description:
    'Give agents shareable skills (markdown instructions) and MCP servers for extra tools, scoped per project.'
}

export default function SkillsPage() {
  return (
    <DocsArticle
      title="Skills registry & MCP"
      lede="Shareable skills and MCP servers — the two ways to give your agents capabilities beyond their default toolset."
    >
      <h2 id="skills">Skills</h2>
      <p>
        A skill is a short markdown file that teaches an agent how to do something: project
        conventions, release steps, security review checklists. Skills load on demand, so they add
        capability without bloating every prompt.
      </p>
      <ul>
        <li>Store them in a <strong>skills registry</strong> your agents can pull from.</li>
        <li>Attach skills per project, per worktree, or per agent type.</li>
        <li>Agents load the relevant skill when a task matches its description.</li>
      </ul>

      <h2 id="mcp">MCP servers</h2>
      <p>
        Model Context Protocol servers give agents access to external tools and data — databases,
        issue trackers, internal APIs. Register an MCP server in Athena and the agents in that
        context can call its tools.
      </p>
      <pre>{`athena mcp add --name "jira" --command "npx @some/mcp-jira"
athena mcp list
athena mcp remove --name "jira"`}</pre>

      <h2 id="scope">Scope</h2>
      <p>
        Both skills and MCP servers are scoped the way you need: globally, per project, or per
        worktree. That way a shared project can carry its own conventions and tooling without
        leaking into unrelated work.
      </p>

      <Callout type="info" title="Composable">
        <p>
          Skills teach an agent what to do; MCP servers give it the tools to do it. Start with a
          skill for the process, add an MCP server only when the agent needs live data.
        </p>
      </Callout>
    </DocsArticle>
  )
}
