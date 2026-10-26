import Image from 'next/image'
import { Smartphone } from 'lucide-react'

type Video = {
  title: string
  thumbnail: string
  status: 'Ready' | 'Generating 20 min'
  duration: string
}

const VIDEOS: Video[] = [
  {
    title: 'Hazrat Umar Story',
    thumbnail: '/thumbnails/umar-story.png',
    status: 'Generating 20 min',
    duration: '5:00',
  },
  {
    title: 'Lahore Ki Woh Raat',
    thumbnail: '/thumbnails/lahore-night.png',
    status: 'Ready',
    duration: '5:00',
  },
  {
    title: 'Hunza Ka Raaz',
    thumbnail: '/thumbnails/village-tale.png',
    status: 'Ready',
    duration: '5:00',
  },
]

export function MyVideos() {
  return (
    <section aria-labelledby="my-videos-heading">
      <div className="flex items-end justify-between gap-4">
        <h2 id="my-videos-heading" className="text-2xl font-black text-white sm:text-3xl">
          My Videos
        </h2>
        <span className="text-sm text-muted-foreground">{VIDEOS.length} videos</span>
      </div>

      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((video) => {
          const ready = video.status === 'Ready'
          return (
            <li
              key={video.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]"
            >
              <div className="relative aspect-video bg-black">
                <Image
                  src={video.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${ready ? 'opacity-80' : 'opacity-40'}`}
                />
                <span
                  className={`absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
                    ready ? 'bg-brand text-black' : 'border border-yellow-400/40 bg-black/70 text-yellow-300'
                  }`}
                >
                  {!ready && (
                    <span className="size-1.5 animate-pulse rounded-full bg-yellow-300" aria-hidden="true" />
                  )}
                  {video.status}
                </span>
                <span className="absolute right-3 bottom-3 rounded-md bg-black/80 px-2 py-0.5 text-xs font-semibold tabular-nums text-white">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white">{video.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">Urdu &middot; 16:9 &middot; 1080p</p>
              </div>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand bg-brand/5 px-6 py-4 text-base font-extrabold text-brand transition-colors hover:bg-brand hover:text-black sm:text-lg"
      >
        <Smartphone className="size-5" aria-hidden="true" />
        Isi Se 3 Viral Shorts Banao (9:16)
      </button>
    </section>
  )
}
