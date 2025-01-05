import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eggleston Ventures',
  description: 'Eggleston Ventures is a company that acquires and manages small businesses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
