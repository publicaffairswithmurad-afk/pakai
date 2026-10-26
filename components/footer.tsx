import Link from 'next/link'

const links = [
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <span>
          <span className="font-black text-white">PAK</span>
          <span className="font-black text-brand">{"'AI"}</span> © 2026
        </span>
        {links.map((link) => (
          <span key={link.label} className="flex items-center gap-3">
            <span aria-hidden="true" className="text-white/20">
              |
            </span>
            <Link href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          </span>
        ))}
      </div>
    </footer>
  )
}
