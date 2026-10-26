'use client'

import { useState } from 'react'

const TARGET_WORDS = 620
const LANGUAGES = ['Urdu', 'Hindi', 'English'] as const
type Language = (typeof LANGUAGES)[number]

export function StudioComposer() {
  const [story, setStory] = useState('')
  const [language, setLanguage] = useState<Language>('Urdu')
  const [status, setStatus] = useState('')

  const wordCount = story.trim() ? story.trim().split(/\s+/).length : 0
  const progress = Math.min(100, (wordCount / TARGET_WORDS) * 100)
  const reached = wordCount >= TARGET_WORDS

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(
      wordCount
        ? `${language} video queue me add ho gayi! ~20 min me ready hogi.`
        : 'Pehle apni kahani likho.',
    )
  }

  return (
    <section aria-labelledby="studio-heading">
      <h1
        id="studio-heading"
        className="font-display text-4xl tracking-wide text-white uppercase sm:text-6xl"
      >
        AI VIDEO <span className="text-brand">STUDIO</span>
      </h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        620 words likho, 5 minute ki cinematic video pao.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 rounded-2xl border border-white/10 bg-[#0d0d0d] p-3 shadow-[0_0_80px_-20px] shadow-brand/30 sm:p-4"
      >
        <label htmlFor="studio-story" className="sr-only">
          Apni kahani likho
        </label>
        <textarea
          id="studio-story"
          rows={8}
          value={story}
          onChange={(e) => {
            setStory(e.target.value)
            setStatus('')
          }}
          placeholder="Yahan apni kahani likho... Ex: Hazrat Umar raat ko Madine ki galiyon me..."
          className="w-full resize-none rounded-xl border border-white/5 bg-black p-4 text-base leading-relaxed text-white placeholder:text-white/35 focus:border-brand/50 focus:outline-none sm:text-lg"
        />

        <div className="mt-3 flex items-center gap-3 px-1">
          <div
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-label="Word count progress"
            aria-valuemin={0}
            aria-valuemax={TARGET_WORDS}
            aria-valuenow={Math.min(wordCount, TARGET_WORDS)}
          >
            <div
              className="h-full rounded-full bg-brand transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span
            aria-live="polite"
            className={`shrink-0 text-sm font-semibold tabular-nums ${reached ? 'text-brand' : 'text-muted-foreground'}`}
          >
            {wordCount} / {TARGET_WORDS} words
          </span>
        </div>

        <fieldset className="mt-5 px-1">
          <legend className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Voice Language
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {LANGUAGES.map((lang) => {
              const active = lang === language
              return (
                <button
                  key={lang}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setLanguage(lang)}
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition-colors sm:text-base ${
                    active
                      ? 'border-brand bg-brand/10 text-brand'
                      : 'border-white/10 bg-black text-white/70 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              )
            })}
          </div>
        </fieldset>

        <button
          type="submit"
          className="mt-5 w-full rounded-xl bg-brand px-6 py-5 text-base font-extrabold tracking-wide text-black uppercase transition-all hover:brightness-110 hover:shadow-[0_0_40px_-8px] hover:shadow-brand active:scale-[0.99] sm:text-xl"
        >
          GENERATE CINEMATIC VIDEO
        </button>

        <p aria-live="polite" className="mt-3 min-h-5 px-1 text-center text-sm text-brand">
          {status}
        </p>
      </form>
    </section>
  )
}
