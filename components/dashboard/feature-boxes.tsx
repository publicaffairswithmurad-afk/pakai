import { Captions, Film, Smartphone } from 'lucide-react'

export function FeatureBoxes() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="flex gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 sm:p-6">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <Film className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">Feature 1</p>
            <h3 className="mt-1 text-lg font-bold sm:text-xl">Smart B-Roll</h3>
            <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">
              AI har sentence samajh ke us ke mutabiq Pakistani cinematic image ya clip khud laga deta hai.
            </p>
          </div>
        </article>

        <article className="flex gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 sm:p-6">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <Captions className="size-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">Feature 2</p>
            <h3 className="mt-1 text-lg font-bold sm:text-xl">Captions</h3>
            <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">
              Word-by-word yellow highlight bounce, bilkul CapCut jaisa.
            </p>
            <p
              aria-hidden="true"
              className="mt-3 flex flex-wrap gap-x-2 rounded-lg bg-black px-3 py-2 text-base font-black uppercase"
            >
              <span>Raat</span>
              <span>ka</span>
              <span className="inline-block animate-bounce text-yellow-300">waqt</span>
              <span>tha</span>
            </p>
          </div>
        </article>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand bg-brand/5 px-6 py-4 text-base font-bold text-brand transition-colors hover:bg-brand hover:text-black"
      >
        <Smartphone className="size-5" aria-hidden="true" />
        Isi Se 3 Viral Shorts Banao (9:16)
      </button>
    </div>
  )
}
