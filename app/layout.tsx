import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PAK'AI - Pakistani AI Video Maker",
  description: "620 words se 5 min video",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
