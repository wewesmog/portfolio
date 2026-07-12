import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import Story from "@/components/story"
import { site } from "@/lib/site"

export default function About() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-8">
      <div>
        <h1 className="font-heading text-3xl font-semibold tracking-tight">About</h1>
        <p className="mt-3 text-base text-muted-foreground">{site.tagline}</p>
      </div>
      <Story />
      <p className="text-sm text-muted-foreground">
        More writing and experiments on{" "}
        <Link
          href={site.lab.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
        >
          {site.lab.url.replace("https://", "")}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </p>
    </div>
  )
}
