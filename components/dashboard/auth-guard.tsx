'use client'

import { useEffect, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useCurrentUser } from '@/lib/auth'

export function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter()
  const currentUser = useCurrentUser()

  useEffect(() => {
    if (currentUser === null) router.replace('/login')
  }, [currentUser, router])

  if (!currentUser) {
    return (
      <div role="status" className="flex min-h-dvh items-center justify-center bg-black">
        <span className="size-10 animate-spin rounded-full border-2 border-[#00ff88]/20 border-t-[#00ff88]" />
        <span className="sr-only">Loading dashboard</span>
      </div>
    )
  }

  return children
}

export function WelcomeBar() {
  const currentUser = useCurrentUser()
  if (!currentUser) return null

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand/20 bg-brand/[0.04] px-5 py-4">
      <p className="text-lg font-bold">
        Welcome, <span className="text-brand">{currentUser.name}</span>
      </p>
      <p className="flex items-center gap-2 text-sm text-white/60">
        Plan:
        <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
          {currentUser.plan}
        </span>
      </p>
    </div>
  )
}
