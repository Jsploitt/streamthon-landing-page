import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'STREAMATHON — AI Applications in Fintech Hackathon',
  description: 'Build innovative solutions using Stream APIs and Replit, powered by AI. Join the fintech hackathon organized by the Computer Club and the Student Fund at KFUPM. Cash prizes totaling SAR 50,000.',
  generator: 'v0.app',
  keywords: ['hackathon', 'fintech', 'AI', 'Stream', 'Replit', 'KFUPM', 'Saudi Arabia'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
