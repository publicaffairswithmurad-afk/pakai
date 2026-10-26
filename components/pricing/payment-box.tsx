import { MessageCircle, Phone } from 'lucide-react'

const methods = ['JazzCash', 'Easypaisa']

export function PaymentBox() {
  return (
    <section
      aria-labelledby="payment-heading"
      className="flex w-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2 text-center">
        <h2 id="payment-heading" className="font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
          Payment Details
        </h2>
        <p className="text-sm text-white/60">
          Payment bhejein aur screenshot WhatsApp karein. Account 1 ghante mein active.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {methods.map((method) => (
          <li key={method}>
            <a
              href="tel:03249931995"
              className="flex cursor-pointer items-center gap-4 rounded-2xl border border-[#00ff88]/25 bg-black p-4 transition-all hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.35)]"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#00ff88]/15">
                <Phone className="size-5 text-[#00ff88]" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">{method}</span>
                <span className="font-mono text-lg font-bold text-white">0324 9931995</span>
                <span className="text-xs text-white/50">Raja Murad Waheed</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/923249931995?text=Salam%20Raja%20Murad%20Waheed%2C%20payment%20screenshot%20bhej%20raha%20hoon"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 self-center rounded-full border border-[#00ff88]/40 px-6 text-sm font-bold text-[#00ff88] transition-all hover:bg-[#00ff88] hover:text-black hover:shadow-[0_0_30px_rgba(0,255,136,0.6)]"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp Screenshot Bhejein
      </a>
    </section>
  )
}
