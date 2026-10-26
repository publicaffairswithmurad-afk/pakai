import { Check, Crown } from 'lucide-react'

export const WHATSAPP_NUMBER = '923249931995'

type Plan = {
  id: string
  name: string
  price: string
  features: string[]
  whatsappMessage: string
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: 'standard',
    name: 'Standard Plan',
    price: '10,000',
    whatsappMessage: 'Salam Raja Murad Waheed, Mujhe STANDARD PLAN Rs 10000 chahiye, 60 Videos wala',
    features: [
      '60 Videos per month (20 min each)',
      'Urdu / Hindi / English AI Voice',
      'Smart B-Roll - Pakistani cinematic images',
      'CapCut Yellow Word-by-Word Captions',
      '3 Viral Shorts (9:16) per video',
      'Smart Edit Option',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Unlimited',
    price: '18,000',
    whatsappMessage: 'Salam Raja Murad Waheed, Mujhe PREMIUM UNLIMITED Rs 18000 chahiye',
    popular: true,
    features: [
      'Unlimited Videos - No Limit',
      'Everything in Standard',
      'Priority Fast Generation',
      '4K Download',
      'WhatsApp Support',
    ],
  },
]

export function PricingCards() {
  return (
    <div className="grid w-full gap-6 md:grid-cols-2 md:gap-8">
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const headingId = `plan-${plan.id}`
  return (
    <article
      aria-labelledby={headingId}
      className={`relative flex flex-col gap-8 rounded-3xl border bg-gradient-to-b p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
        plan.popular
          ? 'border-[#ffd60a]/60 from-[#ffd60a]/[0.07] to-black shadow-[0_0_60px_-10px_rgba(255,214,10,0.45)]'
          : 'border-[#00ff88]/25 from-[#00ff88]/[0.05] to-black shadow-[0_0_50px_-15px_rgba(0,255,136,0.4)]'
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#ffd60a] px-4 py-1 text-xs font-black uppercase tracking-widest text-black shadow-[0_0_24px_rgba(255,214,10,0.7)]">
          <Crown className="size-3.5" aria-hidden="true" />
          Most Popular
        </span>
      )}

      <div className="flex flex-col gap-4">
        <h2
          id={headingId}
          className={`font-display text-2xl uppercase tracking-wide sm:text-3xl ${
            plan.popular ? 'text-[#ffd60a]' : 'text-white'
          }`}
        >
          {plan.name}
        </h2>
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-lg font-semibold text-white/60">Rs</span>
          <span className="font-display text-5xl text-white sm:text-6xl">{plan.price}</span>
          <span className="text-sm text-white/60">PKR / Month</span>
        </p>
      </div>

      <ul className="flex flex-1 flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#00ff88]/15">
              <Check className="size-3.5 text-[#00ff88]" strokeWidth={3} aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Buy ${plan.name} on WhatsApp`}
        className="inline-flex h-14 cursor-pointer items-center justify-center rounded-2xl bg-[#00ff88] text-base font-black uppercase tracking-wider text-black shadow-[0_0_30px_rgba(0,255,136,0.45)] transition-all hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(0,255,136,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Buy Now
      </a>
    </article>
  )
}
