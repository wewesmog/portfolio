import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { site } from "@/lib/site"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-border pt-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-heading text-sm font-semibold">{site.name}</p>
          <p className="mt-1 max-w-xs text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <Link href="/#projects" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link
            href={site.lab.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary"
          >
            {site.lab.name}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </Link>
        </nav>
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-border/80 bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium">Open to roles and build partnerships.</p>
        <div className="flex gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/#projects">See work</Link>
          </Button>
        </div>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
