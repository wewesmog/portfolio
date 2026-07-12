"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import userPic from "@/public/images/userpic.jpg"
import { site } from "@/lib/site"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
      <div className="order-2 flex flex-col gap-4 md:order-1">
        <p className="text-sm font-medium text-muted-foreground">
          {site.role} · {site.location}
        </p>
        <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
          Customer engagement &{" "}
          <span className="text-primary">growth with AI</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          {site.description} I combine a decade in CVM and lifecycle with
          hands-on engineering - LangGraph, FastAPI, Next.js - to ship tools
          that help teams unlock customer value.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Button asChild size="default">
            <Link href="/#projects">Selected work</Link>
          </Button>
          <Button asChild variant="outline" size="default">
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button asChild variant="ghost" size="default" className="text-muted-foreground">
            <Link href={site.lab.url} target="_blank" rel="noreferrer">
              {site.lab.name}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="order-1 mx-auto md:order-2 md:mx-0 md:shrink-0">
        <div className="relative h-52 w-52 overflow-hidden rounded-2xl ring-1 ring-border shadow-sm sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80">
          <Image
            src={userPic}
            alt={site.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, (min-width: 640px) 15rem, 13rem"
            priority
          />
        </div>
      </div>
    </section>
  )
}
