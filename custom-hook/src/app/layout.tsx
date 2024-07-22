import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {BaseLayoutType} from "@/model/layoutType";


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Custom Hook App',
  description: 'React Custom Hook',
}


export default function RootLayout({ children }: BaseLayoutType) {
  return (
      <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
      </html>
  )
}
