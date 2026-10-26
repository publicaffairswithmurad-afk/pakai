'use client'

import { useState } from 'react'
import { Wand2 } from 'lucide-react'

export function SmartEdit() {
  const [instruction, setInstruction] = useState('')
  const [status, setStatus] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const value = instruction.trim()
    if (!value) {
      setStatus('Pehle likho kya change karna hai.')
      return
    }
    setStatus(`"${value}" — AI edit apply kar raha hai...`)
    setInstruction('')
  }

  return (
    <section
      aria-labelledby="smart-edit-heading"
      className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-6"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Wand2 className="size-5" aria-hidden="true" />
        </div>
        <h2 id="smart-edit-heading" className="text-xl font-black text-white sm:text-2xl">
          Smart Edit
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="smart-edit-input" className="sr-only">
          Kya Change Karna Hai Likho?
        </label>
        <input
          id="smart-edit-input"
          type="text"
          value={instruction}
          onChange={(e) => {
            setInstruction(e.target.value)
            setStatus('')
          }}
          placeholder="Kya Change Karna Hai Likho? Ex: Background hata do"
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black px-4 py-3.5 text-base text-white placeholder:text-white/35 focus:border-brand/50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-xl bg-brand px-6 py-3.5 font-extrabold text-black transition-all hover:brightness-110"
        >
          Apply Edit
        </button>
      </form>
      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-brand">
        {status}
      </p>
    </section>
  )
}
