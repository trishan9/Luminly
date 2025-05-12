import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import "./globals.css"

// Font setup
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Luminly - Tech Solutions",
  description: "Empowering businesses with seamless tech solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
