import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand/15 bg-black/80 backdrop-blur-md">
      <nav
        aria-label="Dashboard"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        <p className="flex items-center gap-2 text-base font-black tracking-tight sm:text-lg">
          <span className="size-2 rounded-full bg-brand shadow-[0_0_12px_var(--brand)]" aria-hidden="true" />
          <span>
            PAK<span className="text-brand">{"'"}AI</span>
          </span>
          <span className="font-medium text-white/50">Dashboard</span>
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>
            Back<span className="hidden sm:inline"> to Home</span>
          </span>
        </Link>
      </nav>
    </header>
  )
}
