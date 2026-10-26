'use client'

import { useRouter } from 'next/navigation'
import { Logo } from './logo'
import { logOut, useCurrentUser } from '@/lib/auth'

const ghostClass =
  'cursor-pointer px-2 py-2 text-sm font-semibold text-white/70 transition-colors hover:text-[#00ff88] sm:px-3'
const primaryClass =
  'cursor-pointer rounded-full bg-[#00ff88] px-4 py-2 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_24px_rgba(0,255,136,0.6)] sm:px-5'
const outlineClass =
  'cursor-pointer rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#00ff88] hover:text-[#00ff88] sm:px-5'

export function Navbar() {
  const router = useRouter()
  const currentUser = useCurrentUser()

  function handleLogout() {
    logOut()
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Logo />
        <div className="flex items-center gap-2 sm:gap-3">
          {currentUser ? (
            <>
              <button type="button" onClick={() => router.push('/dashboard')} className={primaryClass}>
                Dashboard
              </button>
              <button type="button" onClick={handleLogout} className={outlineClass}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={() => router.push('/pricing')} className={ghostClass}>
                Pricing
              </button>
              <button type="button" onClick={() => router.push('/dashboard')} className={primaryClass}>
                Free Try
              </button>
              <button type="button" onClick={() => router.push('/login')} className={outlineClass}>
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
