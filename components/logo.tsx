import Link from 'next/link'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="PAK'AI home"
      className={`font-sans text-xl font-black tracking-tight sm:text-2xl ${className}`}
    >
      <span className="text-white">PAK</span>
      <span className="text-brand">{"'AI"}</span>
    </Link>
  )
}
