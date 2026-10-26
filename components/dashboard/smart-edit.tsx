'use client'

import { useState } from 'react'
import { Wand2 } from 'lucide-react'

export function SmartEdit() {
  const [instruction, setInstruction] = useState('')

  return (
    <form
      aria-labelledby="smart-edit-title"
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-3 rounded-2xl border border-brand/20 bg-[#0a0a0a] p-5 sm:p-6"
    >
      <h2 id="smart-edit-title" className="flex items-center gap-2 text-lg font-bold sm:text-xl">
        <Wand2 className="size-5 text-brand" aria-hidden="true" />
        Smart Edit
      </h2>
      <label htmlFor="smart-edit" className="text-sm text-white/60">
        Kya Change Karna Hai?
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="smart-edit"
          type="text"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Ex: Background hata do"
          className="flex-1 rounded-xl border border-white/10 bg-black px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
        <button
          type="submit"
          disabled={!instruction.trim()}
          className="rounded-xl bg-brand px-6 py-3 font-bold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Apply
        </button>
      </div>
    </form>
  )
}
