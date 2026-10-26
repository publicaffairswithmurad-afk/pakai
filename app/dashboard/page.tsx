import type { Metadata } from 'next'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { StudioComposer } from '@/components/dashboard/studio-composer'
import { MyVideos } from '@/components/dashboard/my-videos'
import { FeatureBoxes } from '@/components/dashboard/feature-boxes'
import { SmartEdit } from '@/components/dashboard/smart-edit'

export const metadata: Metadata = {
  title: "AI Video Studio | PAK'AI Dashboard",
  description:
    'Kahani likho, language chuno aur cinematic video generate karo. Smart B-Roll, CapCut-style captions aur viral shorts.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-dvh bg-black text-white [--brand:#00ff88] [--ring:#00ff88]">
      <DashboardHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 sm:py-12">
        <StudioComposer />
        <MyVideos />
        <section aria-label="Tools" className="flex flex-col gap-6">
          <FeatureBoxes />
          <SmartEdit />
        </section>
      </main>
    </div>
  )
}
