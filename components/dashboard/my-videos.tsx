import Image from 'next/image'
import { CheckCircle2, Download, Loader2 } from 'lucide-react'

type Video = {
  title: string
  thumbnail: string
} & (
  | { status: 'generating'; progress: number; timeLeft: string }
  | { status: 'ready'; downloadable: boolean }
)

const VIDEOS: Video[] = [
  {
    title: 'Islamic Story',
    thumbnail: '/thumbnails/umar-story.png',
    status: 'generating',
    progress: 45,
    timeLeft: '12 min left',
  },
  {
    title: 'Horror Story',
    thumbnail: '/thumbnails/lahore-night.png',
    status: 'ready',
    downloadable: true,
  },
  {
    title: 'Business Story',
    thumbnail: '/thumbnails/business-story.png',
    status: 'ready',
    downloadable: false,
  },
]

export function MyVideos() {
  return (
    <section aria-labelledby="videos-title" className="flex flex-col gap-5">
      <div className="flex items-end justify-between">
        <h2 id="videos-title" className="text-2xl font-black tracking-tight sm:text-3xl">
          My Videos
        </h2>
        <span className="text-sm text-white/50">{VIDEOS.length} videos</span>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((video, i) => (
          <li
            key={video.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]"
          >
            <div className="relative aspect-video bg-black">
              <Image
                src={video.thumbnail}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={video.status === 'generating' ? 'object-cover opacity-40' : 'object-cover opacity-80'}
              />
              <span className="absolute top-3 left-3 rounded-md bg-black/70 px-2 py-1 font-mono text-xs text-white/70">
                Video {i + 1}
              </span>
              {video.status === 'generating' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-3xl font-black text-brand">{video.progress}%</span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="text-lg font-bold">{video.title}</h3>

              {video.status === 'generating' ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-yellow-300">
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      Generating {video.progress}%
                    </span>
                    <span className="text-white/50">{video.timeLeft}</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={`${video.title} progress`}
                    aria-valuenow={video.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 overflow-hidden rounded-full bg-white/10"
                  >
                    <div className="h-full rounded-full bg-brand" style={{ width: `${video.progress}%` }} />
                  </div>
                </div>
              ) : (
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
                    <CheckCircle2 className="size-4" aria-hidden="true" />
                    Ready
                  </span>
                  {video.downloadable && (
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black transition-colors hover:bg-brand"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      Download
                    </button>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
