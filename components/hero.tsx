import { StoryGenerator } from './story-generator'

const features = ['No Stock', 'Urdu/Hindi/English', 'CapCut Best Caption + Smart B-Roll']

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-14 pb-16 sm:px-6 sm:pt-24 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[480px] w-[min(900px,140vw)] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <span className="size-1.5 animate-pulse rounded-full bg-brand" aria-hidden="true" />
          {"Pakistan's AI Video Maker"}
        </p>

        <h1 className="font-display text-5xl leading-[0.95] tracking-wide text-balance uppercase sm:text-7xl md:text-8xl">
          <span className="block text-white">620 Words Se 5 Min Video</span>
          <span className="mt-2 block text-brand">20 Min Me Ready</span>
        </h1>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground sm:text-base">
          {features.map((feature, i) => (
            <li key={feature} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="hidden text-white/20 sm:inline">
                  |
                </span>
              )}
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <StoryGenerator />
      </div>
    </section>
  )
}
