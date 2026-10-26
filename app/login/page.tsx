import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { AuthShell } from '@/components/auth/auth-card'
import { LoginForm } from '@/components/login/login-form'

export const metadata: Metadata = {
  title: "Login | PAK'AI",
  description: "Apne PAK'AI account mein login karein aur AI Video Studio kholen.",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-black text-white">
      <Navbar />
      <AuthShell>
        <LoginForm />
      </AuthShell>
    </div>
  )
}
