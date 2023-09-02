import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/providers/theme-provider'
import Navigation from '@/components/navigation'

import {ToasterProvider} from '@/providers/toast-provider'


import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Branches | Ecommerce',
  description: 'Every Business should have Online Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <ToasterProvider />
          {children}
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
