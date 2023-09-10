import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavigationHeader } from './navigation-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SwiftDER | Home',
  description: 'SwiftDER Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <NavigationHeader />
        {children}
      </body>
    </html>
  )
}
