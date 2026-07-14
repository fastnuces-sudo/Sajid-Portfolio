import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Cursor } from '@/components/Cursor'
import { Loader } from '@/components/Loader'
import { ScrollProgress } from '@/components/ScrollProgress'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const space = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'Award-winning creative developer building premium digital experiences',
  keywords: ['developer', 'portfolio', 'creative', 'web development', 'UI/UX'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${space.variable} font-sans antialiased`}>
        <Loader />
        <Cursor />
        <ScrollProgress />
        <div className="noise">
          {children}
        </div>
      </body>
    </html>
  )
}
