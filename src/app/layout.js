import './globals.css'
import {  Geologica, Man, Outfitrope } from 'next/font/google'

const barlow = Geologica({ subsets: ['latin'] })

export const metadata = {
  title: 'Certificate generator ',
  description: 'A tool to bulk generate certificates in the browser by Devignx',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
