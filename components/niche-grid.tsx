const niches = [
  { icon: '🕌', name: 'Islamic', desc: 'Seerat, Sahaba & waqiaat' },
  { icon: '👻', name: 'Horror', desc: 'Darawni raat ki kahaniyan' },
  { icon: '📜', name: 'History', desc: 'Saltanat aur jang-e-azeem' },
  { icon: '💼', name: 'Business', desc: 'Success & startup stories' },
  { icon: '🧒', name: 'Kids', desc: 'Moral & bedtime stories' },
  { icon: '❤️', name: 'Motivational', desc: 'Himmat aur kamyabi' },
  { icon: '🕵️', name: 'Crime', desc: 'True crime mysteries' },
  { icon: '🧠', name: 'Health', desc: 'Sehat ke raaz' },
]

export function NicheGrid() {
  return (
    <section aria-labelledby="niches-heading" className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2
            id="niches-heading"
            className="font-display text-3xl tracking-wide text-white uppercase sm:text-4xl"
          >
            Apni <span className="text-brand">Niche</span> Chuno
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Har niche ke liye alag cinematic style, voice aur music
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {niches.map((niche) => (
            <li key={niche.name}>
              <a
                href="#generate"
                className="group flex h-full flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#141414] px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:bg-[#181818] hover:shadow-[0_10px_40px_-12px] hover:shadow-brand/40 focus-visible:border-brand focus-visible:outline-none sm:py-8"
              >
                <span
                  aria-hidden="true"
                  className="text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl"
                >
                  {niche.icon}
                </span>
                <span className="text-base font-bold text-white group-hover:text-brand sm:text-lg">
                  {niche.name}
                </span>
                <span className="text-xs text-muted-foreground sm:text-sm">{niche.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
