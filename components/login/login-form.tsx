'use client'

import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export function LoginForm() {
  const router = useRouter()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push('/dashboard')
  }

  return (
    <section
      aria-labelledby="login-heading"
      className="relative flex w-full max-w-md flex-col gap-8 rounded-3xl border border-[#00ff88]/25 bg-gradient-to-b from-[#00ff88]/[0.05] to-black p-6 shadow-[0_0_50px_-15px_rgba(0,255,136,0.45)] sm:p-8"
    >
      <div className="flex flex-col gap-2 text-center">
        <h1 id="login-heading" className="font-display text-4xl uppercase tracking-wide">
          Welcome <span className="text-[#00ff88]">Back</span>
        </h1>
        <p className="text-sm text-white/60">Login karein aur apni cinematic videos banayein.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-white/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="aap@example.com"
            className="h-12 rounded-xl border border-white/15 bg-black px-4 text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-semibold text-white/80">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className="h-12 rounded-xl border border-white/15 bg-black px-4 text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/30"
          />
        </div>
        <button
          type="submit"
          className="mt-2 h-14 cursor-pointer rounded-2xl bg-[#00ff88] text-base font-black uppercase tracking-wider text-black shadow-[0_0_30px_rgba(0,255,136,0.45)] transition-all hover:shadow-[0_0_50px_rgba(0,255,136,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm text-white/60">
        {"Don't have account? "}
        <button
          type="button"
          onClick={() => router.push('/dashboard')}
          className="cursor-pointer font-semibold text-[#00ff88] underline-offset-4 hover:underline"
        >
          Free Try
        </button>{' '}
        pe click karein
      </p>
    </section>
  )
}
