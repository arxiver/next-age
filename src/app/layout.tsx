import './globals.css'
import type { Metadata } from 'next'
import { Wix_Madefor_Display } from 'next/font/google'
import StyledJsxRegistry from './registry'

const wixMadeforDisplay = Wix_Madefor_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next AGE',
  description: 'Apache AGE new era of Graph Database',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <StyledJsxRegistry>
        <body className={wixMadeforDisplay.className}>
          {children}
        </body>
      </StyledJsxRegistry>
    </html>
  )
}
