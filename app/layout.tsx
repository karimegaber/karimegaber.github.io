import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Karim Gaber | Senior Flutter Developer',
  description:
    'Senior Flutter Developer with 4+ years of experience building government-grade platforms and market-leading AI applications serving millions of users.',
  keywords: ['Flutter', 'Mobile Developer', 'Abu Dhabi', 'Karim Gaber', 'Senior Developer'],
  authors: [{ name: 'Karim Essam Gaber Ahmed' }],
  icons: {
    icon: '/images/website-icon.png',
  },
  openGraph: {
    title: "Karim Gaber | Senior Flutter Developer",
    description: "Senior Flutter Developer with 4+ years of experience building market-leading AI applications and government-grade platforms.",
    url: "https://karimegaber.github.io/",
    siteName: "Karim Gaber | Senior Flutter Developer",
    images: [
      {
        url: "https://karimegaber.github.io/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Karim Gaber | Senior Flutter Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // This is for X (formerly Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Karim Gaber | Senior Flutter Developer",
    description: "Senior Flutter Developer with 4+ years of experience building market-leading AI applications and government-grade platforms.",
    images: ["https://karimegaber.github.io/opengraph-image.png"],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#080c1a] text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
