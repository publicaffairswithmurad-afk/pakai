import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { LoginForm } from '@/components/login/login-form'

export const metadata: Metadata = {
  title: "Login | PAK'AI",
  description: "Apne PAK'AI account mein login karein aur AI Video Studio kholen.",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-black text-white">
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88]/10 blur-[110px]"
        />
        <LoginForm />
      </main>
    </div>
  )
}
