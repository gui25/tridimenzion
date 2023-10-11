import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/sizing.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tridimenzion',
  description:
    'Tridimenzion is a gallery of 3D ART, showcasing various artworks created using Three.js, React Three Fiber, and Drei.',
  icons: {
    icon: 'img/favicon/favicon.ico'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
