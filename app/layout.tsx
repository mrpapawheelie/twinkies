import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Twinkies from '@/app/components/twinkies'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App with Twinkies',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='w-screen w-height'>
      <body className={inter.className}>
      <Twinkies />
      {children}
      </body>
    </html>
  )
}
