import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vyria - Learn Languages Through AI Conversations',
  description: 'Master any language naturally through engaging AI-powered conversations. Your personal language learning companion.',
  keywords: 'language learning, AI chat, mobile app, language practice, conversational learning',
  openGraph: {
    title: 'Vyria - Learn Languages Through AI Conversations',
    description: 'Master any language naturally through engaging AI-powered conversations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}