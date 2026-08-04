import { ImageResponse } from 'next/og'

export const alt = 'Athena ADE - Agentic Development Environment'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#090909',
        color: '#ffffff',
        padding: '72px 80px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 88,
            height: 88,
            background: 'linear-gradient(135deg, #6a4cf5 0%, #d44df0 100%)',
            fontSize: 52,
            fontWeight: 700
          }}
        >
          A
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 30, letterSpacing: '-0.02em', color: '#999999' }}>ATHENA ADE</div>
          <div style={{ fontSize: 22, letterSpacing: '0.08em', color: '#666666' }}>
            AGENTIC DEVELOPMENT ENVIRONMENT
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1
          }}
        >
          <span>The agentic dev environment</span>
          <span style={{ color: '#999999' }}>for parallel builders</span>
        </div>
        <div style={{ fontSize: 30, color: '#999999', letterSpacing: '-0.01em', maxWidth: 900 }}>
          Run Codex, Claude Code, OpenCode or Pi side-by-side - each in its own isolated worktree,
          tracked in one place.
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        {['LOCAL-FIRST', 'NO TELEMETRY', 'MIT LICENSE', 'v0.0.1'].map((chip) => (
          <div
            key={chip}
            style={{
              display: 'flex',
              alignItems: 'center',
              height: 52,
              padding: '0 24px',
              border: '1px solid #262626',
              background: '#141414',
              color: '#999999',
              fontSize: 20,
              fontFamily: MONO
            }}
          >
            {chip}
          </div>
        ))}
      </div>
    </div>,
    { ...size }
  )
}
