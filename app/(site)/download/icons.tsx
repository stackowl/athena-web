/* SVG assets for the Athena /download page. */

/** Athena owl mark - the brand glyph (from components/Navbar.tsx) */
export function OwlMark({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M12 3.6 L6.4 1.2 Q4.4 3.4 3.4 6.8 Q2.4 10.2 2.4 14.5 L2.4 20.4 Q2.4 21.6 3.6 21.6 L20.4 21.6 Q21.6 21.6 21.6 20.4 L21.6 14.5 Q21.6 10.2 20.6 6.8 Q19.6 3.4 17.6 1.2 Z M8.7 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M15.3 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M11.15 15.3 L12.85 15.3 L12 18.6 Z"
        transform="translate(0 0.6)"
      />
    </svg>
  )
}

/** Header wordmark - owl + "Athena" (mirrors the Athena logo slot) */
export function AthenaLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-ink ${className}`}>
      <OwlMark size={22} />
      <span className="text-[19px] font-semibold tracking-tight">Athena</span>
    </span>
  )
}

/** 14×14 arrow (banner / external links) */
export function Arrow14({ className = '' }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className} aria-hidden>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        d="M2.25 7h9.5m0 0L8.357 3.5M11.75 7l-3.393 3.5"
      />
    </svg>
  )
}

/** 18×18 close (banner dismiss) */
export function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      width="18"
      height="18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        d="m12.5 5.5-7 7m7 0-7-7"
      />
    </svg>
  )
}

/** 18×18 chevron-down (nav dropdowns) */
export function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M5.25 7.125 9 10.875l3.75-3.75"
      />
    </svg>
  )
}

/** 24×24 QR code icon (download rows) */
export function QRCodeIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        width="5"
        height="5"
        rx="2"
        transform="matrix(1 0 0 -1 6 11)"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3H6C4.34315 3 3 4.34315 3 6V8M16 3H18C19.6569 3 21 4.34315 21 6V8M21 16V18C21 19.6569 19.6569 21 18 21H16M3 16V18C3 19.6569 4.34315 21 6 21H8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="5"
        height="5"
        rx="2"
        transform="matrix(1 0 0 -1 6 18)"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="5"
        height="5"
        rx="2"
        transform="matrix(1 0 0 -1 13 11)"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="5"
        height="5"
        rx="2"
        transform="matrix(1 0 0 -1 13 18)"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Hamburger (mobile nav) */
export function Hamburger({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M15 6H3M15 12H3"
      />
    </svg>
  )
}

/** Windows logo - dock tile + row glyph */
export function WindowsGlyph({ className = '' }: { className?: string }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className={className} aria-hidden>
      <path
        d="M3 9.5 21.5 6.9v16.9H3V9.5Zm21.7-3.1L49 4v19.8H24.7V6.4ZM3 29.3h18.5v16.9L3 43.5V29.3Zm21.7 0H49V49L24.7 46.2V29.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Apple/macOS logo - dock tile glyph */
export function MacOSGlyph({ className = '' }: { className?: string }) {
  return (
    <svg width="44" height="52" viewBox="0 0 44 52" fill="none" className={className} aria-hidden>
      <path
        d="M33.5 27.6c0-6.9 5.7-10.2 5.9-10.4-3.2-4.7-8.2-5.3-10-5.4-4.2-.4-8.3 2.5-10.4 2.5-2.1 0-5.4-2.5-8.9-2.4-4.6.1-8.8 2.7-11.2 6.8-4.8 8.3-1.2 20.5 3.4 27.2 2.3 3.3 5 7 8.6 6.9 3.4-.1 4.7-2.2 8.9-2.2 4.1 0 5.3 2.2 8.9 2.1 3.7-.1 6-3.4 8.3-6.7 2.6-3.8 3.7-7.5 3.8-7.7-.1 0-7.2-2.8-7.3-11.1ZM27.4 6.9C29.3 4.6 30.6 1.5 30.3.2c-2.6.1-5.7 1.7-7.6 3.9-1.7 2-3.2 5.1-2.8 8.1 2.9.2 5.9-1.5 7.5-3.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** GitHub mark (footer) */
export function GitHubIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
    </svg>
  )
}

/** Discord mark (footer) */
export function DiscordIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416 0-15.36 11.648-28.416 26.112-28.416 14.592 0 26.112 13.056 26.112 28.416zm-139.264 0c0 15.616-11.776 28.416-26.112 28.416-14.464 0-26.112-12.8-26.112-28.416 0-15.36 11.648-28.416 26.112-28.416 14.464 0 26.112 13.056 26.112 28.416zM447.616 371.328c-24.192 27.264-53.504 48-88.064 59.776-12.8-19.2-24.064-39.68-34.944-60.16-20.608 6.4-42.368 9.6-64.768 9.6-22.144 0-43.904-3.072-64.768-9.6-10.88 20.352-22.272 40.96-34.944 60.16-34.56-11.776-63.872-32.512-88.064-59.776-32.896-37.184-57.088-83.584-61.568-144.512 27.392-20.352 55.04-32.64 88.064-39.04 6.912 14.272 13.568 28.672 19.84 42.752 20.352-9.6 41.6-16.64 64.256-20.224-3.072-7.168-6.272-14.208-9.6-21.248-39.04-8.448-75.008-14.848-110.976-20.224-14.848 20.48-27.904 42.24-38.912 64.384-29.184-6.4-57.216-10.112-84.992-10.112-28.032 0-56.064 3.712-84.992 10.112-10.88-22.144-24.064-43.904-38.912-64.384-35.968 5.504-71.808 11.776-110.848 20.224-3.328 7.04-6.528 14.08-9.6 21.248 22.656 3.584 43.904 10.624 64.256 20.224 6.4 14.08 13.056 28.416 19.84 42.752 33.024 6.4 60.672 18.816 88.064 39.04-4.48 60.992-28.672 107.328-61.568 144.512zm-65.024-57.6c-14.464 0-26.112-12.8-26.112-28.416 0-15.36 11.648-28.416 26.112-28.416 14.592 0 26.112 13.056 26.112 28.416 0 15.616-11.648 28.416-26.112 28.416zm139.264 0c-14.464 0-26.112-12.8-26.112-28.416 0-15.36 11.648-28.416 26.112-28.416 14.592 0 26.112 13.056 26.112 28.416 0 15.616-11.648 28.416-26.112 28.416z" />
    </svg>
  )
}
