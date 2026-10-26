'use client'

import { useMemo, useSyncExternalStore } from 'react'

export type StoredUser = {
  id: string
  name: string
  email: string
  password: string
  plan: string
  videosUsed: number
  createdAt: string
}

export type CurrentUser = Omit<StoredUser, 'password'>

const USERS_KEY = 'pakai_users'
const CURRENT_USER_KEY = 'pakai_current_user'
const AUTH_EVENT = 'pakai-auth-change'

function readUsers(): StoredUser[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(USERS_KEY) ?? '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function setCurrentUser(user: StoredUser) {
  const { password: _password, ...safeUser } = user
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser))
  window.dispatchEvent(new Event(AUTH_EVENT))
}

const normalizeEmail = (email: string) => email.trim().toLowerCase()

export function signUp(input: { name: string; email: string; password: string }) {
  const users = readUsers()
  const email = normalizeEmail(input.email)
  if (users.some((user) => user.email === email)) {
    return { ok: false as const, error: 'Is email se account pehle se mojood hai. Login karein.' }
  }
  const user: StoredUser = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    email,
    password: input.password,
    plan: 'Free',
    videosUsed: 0,
    createdAt: new Date().toISOString(),
  }
  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]))
  setCurrentUser(user)
  return { ok: true as const }
}

export function logIn(input: { email: string; password: string }) {
  const email = normalizeEmail(input.email)
  const user = readUsers().find((u) => u.email === email && u.password === input.password)
  if (!user) {
    return { ok: false as const, error: 'Email ya password ghalat hai.' }
  }
  setCurrentUser(user)
  return { ok: true as const }
}

export function logOut() {
  localStorage.removeItem(CURRENT_USER_KEY)
  window.dispatchEvent(new Event(AUTH_EVENT))
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener(AUTH_EVENT, callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(AUTH_EVENT, callback)
  }
}

/**
 * Returns `undefined` until hydrated (auth state unknown),
 * `null` when logged out, or the current user.
 */
export function useCurrentUser(): CurrentUser | null | undefined {
  const raw = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(CURRENT_USER_KEY) ?? '',
    () => undefined,
  )
  return useMemo(() => {
    if (raw === undefined) return undefined
    if (!raw) return null
    try {
      return JSON.parse(raw) as CurrentUser
    } catch {
      return null
    }
  }, [raw])
}
