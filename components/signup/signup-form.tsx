'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signUp } from '@/lib/auth'
import { AuthCard, AuthError, AuthField, authLinkClass, authSubmitClass } from '@/components/auth/auth-card'

export function SignupForm() {
  const router = useRouter()
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '')
    const password = String(data.get('password') ?? '')
    const confirmPassword = String(data.get('confirmPassword') ?? '')

    if (!name) return setError('Apna poora naam likhein.')
    if (password.length < 6) return setError('Password kam az kam 6 characters ka hona chahiye.')
    if (password !== confirmPassword) return setError('Dono passwords match nahi kar rahe.')

    const result = signUp({ name, email, password })
    if (!result.ok) return setError(result.error)
    router.push('/dashboard')
  }

  return (
    <AuthCard
      headingId="signup-heading"
      title={
        <>
          Join <span className="text-[#00ff88]">{"PAK'AI"}</span> Empire
          <span className="mt-2 block text-base tracking-[0.2em] text-[#00ff88]/80 sm:text-lg">Raja Murad Waheed</span>
        </>
      }
      subtitle="Free account banayein aur pehli cinematic video abhi generate karein."
      footer={
        <>
          {'Already have account? '}
          <Link href="/login" className={authLinkClass}>
            Login
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} onChange={() => error && setError('')} className="flex flex-col gap-5">
        <AuthError message={error} />
        <AuthField id="name" label="Full Name" type="text" autoComplete="name" placeholder="Raja Murad Waheed" />
        <AuthField id="email" label="Email" type="email" autoComplete="email" placeholder="aap@example.com" />
        <AuthField id="password" label="Password" type="password" autoComplete="new-password" minLength={6} placeholder="••••••••" />
        <AuthField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          minLength={6}
          placeholder="••••••••"
        />
        <button type="submit" className={authSubmitClass}>
          Create Account
        </button>
      </form>
    </AuthCard>
  )
}
