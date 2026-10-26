import type { InputHTMLAttributes, ReactNode } from 'react'

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88]/10 blur-[110px]"
      />
      {children}
    </main>
  )
}

export function AuthCard({
  headingId,
  title,
  subtitle,
  children,
  footer,
}: {
  headingId: string
  title: ReactNode
  subtitle: string
  children: ReactNode
  footer: ReactNode
}) {
  return (
    <section
      aria-labelledby={headingId}
      className="relative flex w-full max-w-md flex-col gap-8 rounded-3xl border border-[#00ff88]/30 bg-gradient-to-b from-[#00ff88]/[0.06] to-black p-6 shadow-[0_0_50px_-12px_rgba(0,255,136,0.5)] sm:p-8"
    >
      <div className="flex flex-col gap-2 text-center">
        <h1 id={headingId} className="font-display text-3xl uppercase leading-tight tracking-wide text-balance sm:text-4xl">
          {title}
        </h1>
        <p className="text-sm text-white/60">{subtitle}</p>
      </div>
      {children}
      <p className="text-center text-sm text-white/60">{footer}</p>
    </section>
  )
}

export function AuthField({
  id,
  label,
  ...props
}: { id: string; label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-white/80">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        className="h-12 rounded-xl border border-white/15 bg-black px-4 text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/30"
      />
    </div>
  )
}

export function AuthError({ message }: { message: string }) {
  if (!message) return null
  return (
    <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
      {message}
    </p>
  )
}

export const authSubmitClass =
  'mt-2 h-14 cursor-pointer rounded-2xl bg-[#00ff88] text-base font-black uppercase tracking-wider text-black shadow-[0_0_30px_rgba(0,255,136,0.45)] transition-all hover:shadow-[0_0_50px_rgba(0,255,136,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-black'

export const authLinkClass = 'font-semibold text-[#00ff88] underline-offset-4 hover:underline'
