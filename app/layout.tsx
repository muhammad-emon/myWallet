import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MyWallet - Smart Financial Management",
  description: "Track income, manage expenses, set budgets, and achieve your financial goals with MyWallet",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('unhandledrejection', (event) => {
                if (event.reason && typeof event.reason === 'string' && event.reason.includes('MetaMask')) {
                  event.preventDefault();
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
