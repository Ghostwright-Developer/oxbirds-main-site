import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SiteMotion } from '@/components/site-motion'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const description =
  'Google Ads, Meta, Microsoft Ads, LinkedIn and Yelp advertising management. You work directly with our owner, Daniel, who personally manages your ads. No long-term contracts.'

export const metadata: Metadata = {
  metadataBase: new URL('https://oxbird.com'),
  title: {
    default: 'oxbird | Paid advertising. Personally managed.',
    template: '%s | oxbird',
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'oxbird | Paid advertising. Personally managed.',
    description,
    url: 'https://oxbird.com',
    siteName: 'oxbird',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'oxbird | Paid advertising. Personally managed.',
    description,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only z-[60] rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <SiteMotion />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
