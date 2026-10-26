import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { AuthShell } from '@/components/auth/auth-card'
import { SignupForm } from '@/components/signup/signup-form'

export const metadata: Metadata = {
  title: "Sign Up | PAK'AI",
  description: "PAK'AI Empire join karein - free account banayein aur AI cinematic videos generate karein.",
}

export default function SignupPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-black text-white">
      <Navbar />
      <AuthShell>
        <SignupForm />
      </AuthShell>
    </div>
  )
}
