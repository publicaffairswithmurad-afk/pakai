'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const MAX_WORDS = 620
const LANGUAGES = ['Urdu', 'Hindi', 'English'] as const
type Language = (typeof LANGUAGES)[number]

function countWords(text: string) {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

export function StudioComposer() {
  const [script, setScript] = useState('')
  const [language, setLanguage] = useState<Language>('Urdu')

  const words = countWords(script)
  const overLimit = words > MAX_WORDS
  const progress = Math.min((words / MAX_WORDS) * 100, 100)

  return (
    <section aria-labelledby="studio-title" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">Create</p>
        <h1 id="studio-title" className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
          AI VIDEO STUDIO
        </h1>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
        <div className="h-1 bg-white/5">
          <div
            className={cn('h-full transition-all', overLimit ? 'bg-red-500' : 'bg-brand')}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col gap-5 p-4 sm:p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="script" className="text-sm font-semibold text-white/80">
                Apni Kahani Likho
              </label>
              <span
                aria-live="polite"
                className={cn(
                  'rounded-md px-2 py-0.5 font-mono text-sm tabular-nums',
                  overLimit ? 'bg-red-500/15 text-red-400' : 'bg-brand/10 text-brand',
                )}
              >
                {words}/{MAX_WORDS}
              </span>
            </div>
            <textarea
              id="script"
              value={script}
              onChange={(e) => setScript(e.target.value)}
              rows={8}
              placeholder="Ek dafa ka zikr hai..."
              className="w-full resize-y rounded-xl border border-white/10 bg-black p-4 text-base leading-relaxed text-white placeholder:text-white/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
            {overLimit && (
              <p className="text-sm text-red-400">Max {MAX_WORDS} words allowed. Thora chhota karo.</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span id="lang-label" className="text-sm font-semibold text-white/80">
              Language
            </span>
            <div role="group" aria-labelledby="lang-label" className="grid grid-cols-3 gap-2 sm:max-w-md">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  aria-pressed={language === lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    'rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors',
                    language === lang
                      ? 'border-brand bg-brand text-black'
                      : 'border-white/15 text-white/70 hover:border-brand/50 hover:text-white',
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            disabled={words === 0 || overLimit}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-base font-black tracking-wide text-black shadow-[0_0_30px_-6px_var(--brand)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none sm:text-lg"
          >
            <Sparkles className="size-5" aria-hidden="true" />
            GENERATE CINEMATIC VIDEO
          </button>
        </div>
      </div>
    </section>
  )
}
