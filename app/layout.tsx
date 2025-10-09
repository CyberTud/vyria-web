import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vyria - Learn Languages Through AI Conversations',
  description: 'Master any language naturally through engaging AI-powered conversations. Your personal language learning companion.',
  keywords: 'language learning, AI chat, mobile app, language practice, conversational learning',
  icons: {
    icon: '/vyria_logo.png',
    apple: '/vyria_logo.png',
  },
  openGraph: {
    title: 'Vyria - Learn Languages Through AI Conversations',
    description: 'Master any language naturally through engaging AI-powered conversations.',
    type: 'website',
    images: ['/vyria_logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://getlaunchlist.com/js/widget.js" defer></script>
        <script
          defer
          data-website-id="dfid_KeZpFFEIGPipNDBMfik9p"
          data-domain="vyria.app"
          src="https://datafa.st/js/script.js">
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}