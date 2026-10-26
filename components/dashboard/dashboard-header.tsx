import Link from 'next/link'
import { Logo } from '@/components/logo'

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
      <nav
        aria-label="Dashboard"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Logo />
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand sm:inline">
            3 Free Credits
          </span>
          <Link
            href="/"
            className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Home
          </Link>
        </div>
      </nav>
    </header>
  )
}
