import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PricingCards } from '@/components/pricing/pricing-cards'
import { PaymentBox } from '@/components/pricing/payment-box'

export const metadata: Metadata = {
  title: "Pricing | PAK'AI Plans - Choose Your Empire",
  description:
    'PAK\'AI Standard Rs 10,000/month ya Premium Unlimited Rs 18,000/month. Urdu, Hindi, English AI voice, Smart B-Roll, CapCut captions aur 4K download.',
}

export default function PricingPage() {
  return (
    <div className="min-h-dvh bg-black text-white [--brand:#00ff88] [--ring:#00ff88]">
      <Navbar />
      <main className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-[#00ff88]/10 blur-[120px]"
        />
        <section className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 py-16 sm:px-6 sm:py-24">
          <header className="flex flex-col items-center gap-4 text-center">
            <span className="rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff88]">
              Pricing
            </span>
            <h1 className="font-display text-5xl uppercase leading-none tracking-tight text-balance sm:text-7xl">
              PAK<span className="text-[#00ff88]">{"'"}AI</span> Plans
            </h1>
            <p className="font-display text-2xl uppercase tracking-wide text-[#ffd60a] [text-shadow:0_0_24px_rgba(255,214,10,0.45)] sm:text-3xl">
              Choose Your Empire
            </p>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-white/60 sm:text-base">
              Kahani likho, AI cinematic video banayega. Apna plan chuno aur aaj hi channel grow karo.
            </p>
          </header>
          <PricingCards />
          <PaymentBox />
        </section>
      </main>
      <Footer />
    </div>
  )
}
