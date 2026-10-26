import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { NicheGrid } from '@/components/niche-grid'

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <NicheGrid />
      </main>
      <Footer />
    </div>
  )
}
