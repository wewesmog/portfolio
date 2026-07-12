import Link from "next/link"
import { ArrowUpRight, FlaskConical } from "lucide-react"

import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"

export function LabBanner() {
  return (
    <section className="rounded-xl border border-border/80 bg-gradient-to-br from-card via-card to-primary/[0.06] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FlaskConical className="h-5 w-5" />
          </span>
          <div>
            <p className="font-heading text-base font-semibold tracking-tight">
              {site.lab.name} — blog & lab
            </p>
            <p className="mt-0.5 max-w-md text-sm text-muted-foreground">
              {site.lab.tagline}. Echo, CVM Copilot, and essays on the new lifecycle stack.
            </p>
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="shrink-0">
          <Link href={site.lab.url} target="_blank" rel="noreferrer">
            Visit cvm-ai.com
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
