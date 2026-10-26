import { Captions, Film } from 'lucide-react'

export function FeatureBoxes() {
  return (
    <section aria-label="Features" className="grid gap-4 md:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Film className="size-5" aria-hidden="true" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white sm:text-xl">Smart B-Roll</h2>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
          AI har sentence samajh ke Pakistani cinematic image lagayega.
        </p>
      </article>

      <article className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Captions className="size-5" aria-hidden="true" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white sm:text-xl">Caption</h2>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Word-by-word yellow highlight bounce like CapCut.
        </p>
        <p
          aria-hidden="true"
          className="mt-4 flex flex-wrap gap-x-2 rounded-xl bg-black px-4 py-3 text-lg font-black text-white uppercase"
        >
          <span>Raat</span>
          <span>ka</span>
          <span className="inline-block animate-bounce text-yellow-300">waqt</span>
          <span>tha</span>
        </p>
      </article>
    </section>
  )
}
