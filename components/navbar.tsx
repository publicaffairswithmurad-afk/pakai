import Link from 'next/link'
import { Logo } from './logo'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Logo />
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/pricing"
            className="px-2 py-2 text-sm font-semibold text-white/70 transition-colors hover:text-white sm:px-3"
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white/85 sm:px-5"
          >
            Free Try
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5 sm:px-5"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
