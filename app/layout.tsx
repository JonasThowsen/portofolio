import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { LanguageProvider } from './context/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jonas Ådland Thowsen - CV',
    template: '%s | Personal CV of Jonas Ådland Thowsen',
  },
  description: 'Personal portfolio and CV of Jonas Ådland Thowsen.',
  openGraph: {
    title: 'Jonas Ådland Thowsen Portfolio',
    description: 'Personal portfolio and CV of Jonas Ådland Thowsen.',
    url: baseUrl,
    siteName: 'Jonas Ådland Thowsen Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <LanguageProvider>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <SpeedInsights />
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}