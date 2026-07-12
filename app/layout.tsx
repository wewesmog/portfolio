import type { Metadata } from "next"
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google"

import "./globals.css"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import { site } from "@/lib/site"

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})
const body = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: "https://www.wesleymogaka.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${mono.variable} min-h-screen antialiased font-sans`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
            <div className="relative mx-auto w-full max-w-5xl px-4 py-3 sm:px-6">
              <Nav />
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">{children}</div>
          </main>

          <footer className="mt-8">
            <div className="mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6">
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
