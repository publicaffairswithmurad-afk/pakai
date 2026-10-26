'use client'

import { useState } from 'react'

const TARGET_WORDS = 620

export function StoryGenerator() {
  const [story, setStory] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const wordCount = story.trim() ? story.trim().split(/\s+/).length : 0
  const progress = Math.min(100, (wordCount / TARGET_WORDS) * 100)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(wordCount < 5) {
      alert("Janu kam se kam 10 lafz likho!");
      return;
    }
    setSubmitted(true)
    setLoading(true)
    setResult('')
    
    try {
      const res = await fetch('/api/groq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: story })
      });
      const data = await res.json();
      setResult(data.script);
      localStorage.setItem('pakai_script', data.script);
      localStorage.setItem('pakai_story', story);
    } catch(err) {
      setResult('Error: Groq connect nahi hua');
    }
    setLoading(false)
  }

  return (
    <form
      id="generate"
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-3xl scroll-mt-24 rounded-2xl border border-white/10 bg-[#0d0d0d] p-3 text-left shadow-[0_0_80px_-20px] shadow-brand/30 sm:p-4"
    >
      <label htmlFor="story" className="sr-only">
        Apni kahani likho
      </label>
      <textarea
        id="story"
        name="story"
        rows={7}
        value={story}
        onChange={(e) => {
          setStory(e.target.value)
          setSubmitted(false)
          setResult('')
        }}
        placeholder="Yahan apni kahani likho... Ex: Hazrat Umar raat ko Madine me..."
        className="w-full resize-none rounded-xl border border-white/5 bg-black p-4 text-base leading-relaxed text-white placeholder:text-white/35 focus:border-brand/50 focus:outline-none sm:text-lg"
      />

      <div className="mt-3 flex items-center gap-3 px-1">
        <div
          className="h-1 flex-1 overflow-hidden rounded-full bg-white/10"
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
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
          {wordCount} / {TARGET_WORDS} words
        </span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded-xl bg-brand px-6 py-4 text-base font-extrabold tracking-wide text-brand-foreground uppercase transition-all hover:brightness-110 hover:shadow-[0_0_40px_-8px] hover:shadow-brand active:scale-[0.99] sm:text-lg disabled:opacity-50"
      >
        {loading ? "⏳ PAK'AI SOCH RAHA HAI..." : "🔥 GENERATE CINEMATIC VIDEO"}
      </button>

      <p
        aria-live="polite"
        className={`mt-3 min-h-5 px-1 text-center text-sm ${wordCount ? 'text-brand' : 'text-muted-foreground'}`}
      >
        {submitted && !loading &&
          (result
            ? `✅ ${result}`
            : wordCount
            ? 'Kahani mil gayi! Video banane ke liye Login karein — free try available hai.'
            : 'Pehle upar apni kahani likho.')}
      </p>
    </form>
  )
}
