"use client"

import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import React from "react"

import { site } from "@/lib/site"
import { Button } from "./ui/button"

const links = [
  { label: "Work", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#story" },
  { label: "Contact", href: "/contact" },
]

export default function Nav() {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="relative flex items-center justify-between gap-4">
      <Link
        href="/"
        className="font-heading text-lg font-semibold tracking-tight transition-colors hover:text-primary"
      >
        {site.shortName}
        <span className="text-primary">.</span>
      </Link>

      <div className="hidden items-center gap-1 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={site.lab.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        >
          {site.lab.name}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {open ? (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-background/95 px-4 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={site.lab.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10"
            >
              {site.lab.name}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
