'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logIn } from '@/lib/auth'
import { AuthCard, AuthError, AuthField, authLinkClass, authSubmitClass } from '@/components/auth/auth-card'

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = logIn({
      email: String(data.get('email') ?? ''),
      password: String(data.get('password') ?? ''),
    })
    if (!result.ok) {
      setError(result.error)
      return
    }
    router.push('/dashboard')
  }

  return (
    <AuthCard
      headingId="login-heading"
      title={
        <>
          Welcome Back to <span className="text-[#00ff88]">{"PAK'AI"}</span>
        </>
      }
      subtitle="Login karein aur apni cinematic videos banayein."
      footer={
        <>
          {"Don't have account? "}
          <Link href="/signup" className={authLinkClass}>
            Sign Up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} onChange={() => error && setError('')} className="flex flex-col gap-5">
        <AuthError message={error} />
        <AuthField id="email" label="Email" type="email" autoComplete="email" placeholder="aap@example.com" />
        <AuthField id="password" label="Password" type="password" autoComplete="current-password" placeholder="••••••••" />
        <button type="submit" className={authSubmitClass}>
          Login
        </button>
      </form>
    </AuthCard>
  )
}
