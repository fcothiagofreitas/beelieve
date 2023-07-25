'use client'
import SplashScreen from '@/components/splashscreen'
import './globals.css'
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (isLoading) return
  }, [isLoading])
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Beelieve</title>
        <meta
          name="description"
          content="Technological bees, creative developers, believing and creating inspiring solutions."
        />
        <meta property="og:title" content="Beelieve" />
        <meta
          property="og:description"
          content="Technological bees, creative developers, believing and creating inspiring solutions."
        />
        <meta property="og:url" content="https://beelieve.dev/" />
        <meta property="og:site_name" content="Next.js" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:url" content="https://beelieve.dev/og.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:url"
          content="https://beelieve.dev/og-alt.png"
        />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:alt" content="Beelieve" />
        <meta property="og:type" content="website" />
      </head>
      <body className={poppins.className}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  )
}
