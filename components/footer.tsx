// footer component
"use client"
import Link from "next/link";
import { Button } from "./ui/button";


export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Top row: links and socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-base sm:text-lg font-medium">
            <Link href="/" className="hover:underline underline-offset-4">Home</Link>
            <Link href="/projects" className="hover:underline underline-offset-4">Projects</Link>
            <Link href="/#story" className="hover:underline underline-offset-4">About</Link>
            <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
          </nav>

          {/* Socials (optional) */}
          {/* <div className="flex items-center gap-4 text-xl">
            <Link href="/"><FaLinkedin /></Link>
            <Link href="/"><FaGithub /></Link>
            <Link href="/"><FaTwitter /></Link>
            <Link href="/"><FaInstagram /></Link>
          </div> */}
        </div>

        {/* CTA card */}
        <div className="mt-8 rounded-xl border bg-card p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold">Interested in working together?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">Let’s build something useful and beautiful.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button variant="outline" onClick={() => window.open('/contact', '_blank')} className="w-full sm:w-auto">Contact me</Button>
            <Button variant="default" onClick={() => window.open('/projects', '_blank')} className="w-full sm:w-auto">See my work</Button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2025 Wesley Mogaka. All rights reserved.</p>
          {/* <p>Built with Next.js and Tailwind.</p> */}
        </div>
      </div>
    </footer>
  )
}