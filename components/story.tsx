import { site } from "@/lib/site"

export default function Story() {
  return (
    <section id="story" className="scroll-mt-24" aria-labelledby="story-heading">
      <h2 id="story-heading" className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        About
      </h2>
      <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          I&apos;ve spent most of my career in customer value management — Safaricom,
          KCB, IBM — running lifecycle, retention and growth programs in telco and
          fintech. I know what it takes to move ARPU, reduce churn, and get offers
          out the door, not just models on a slide.
        </p>
        <p>
          Over the last few years I went deep on building: FastAPI, LangGraph,
          Next.js, product design. That lets me own the full loop from customer
          insight → segment → treatment → measurement — especially where AI can
          compress weeks of planning or surface signals buried in verbatims.
        </p>
        <p>
          I&apos;m looking to partner with teams who care about{" "}
          <span className="text-foreground">engagement and growth outcomes</span>{" "}
          first, and use AI as leverage — not the other way around. This portfolio
          is the engineering proof;{" "}
          <a
            href={site.lab.url}
            className="font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {site.lab.name}
          </a>{" "}
          is where I think in public.
        </p>
      </div>
    </section>
  )
}
