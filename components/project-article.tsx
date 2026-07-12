import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { projects, type Project } from "@/app/data/projects_data"
import ProjectsComponent from "@/components/projects"
import { ProjectIllustration } from "@/components/project-illustrations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectExternalLabel } from "@/lib/project-links"
import { getTechIcon } from "@/lib/tech-icons"

export function ProjectArticle({ project }: { project: Project }) {
  const externalLabel = getProjectExternalLabel(project)

  return (
    <article className="space-y-8 py-8">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.lab ? <Badge variant="outline">CVM×AI Lab</Badge> : null}
          <Badge variant="secondary" className="capitalize">
            {project.status}
          </Badge>
        </div>
        <h1 className="font-heading text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="max-w-2xl text-muted-foreground">{project.description}</p>
        {project.link && externalLabel ? (
          <Button asChild size="sm" variant="outline">
            <Link href={project.link} target="_blank" rel="noreferrer">
              {externalLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        ) : null}
      </header>

      <div className="overflow-hidden rounded-xl border border-border/60">
        <ProjectIllustration cover={project.cover} />
      </div>

      {project.Technologies?.length ? (
        <ul className="flex flex-wrap gap-3">
          {project.Technologies.map((tech) => {
            const Icon = getTechIcon(tech)
            return (
              <li key={tech} className="text-muted-foreground" title={tech}>
                {Icon ? <Icon className="size-5" /> : <span className="text-xs">{tech}</span>}
              </li>
            )
          })}
        </ul>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[12rem_1fr]">
        <aside className="space-y-2 rounded-xl border border-border/80 p-4 text-sm lg:sticky lg:top-20 lg:self-start">
          <p>
            <span className="text-muted-foreground">Status</span>
            <br />
            <span className="capitalize">{project.status}</span>
          </p>
          {project.myRole ? (
            <p>
              <span className="text-muted-foreground">Role</span>
              <br />
              {project.myRole}
            </p>
          ) : null}
          {project.date ? (
            <p>
              <span className="text-muted-foreground">Date</span>
              <br />
              {project.date}
            </p>
          ) : null}
        </aside>

        <div className="prose-section space-y-8 text-sm text-muted-foreground sm:text-base">
          {project.about ? (
            <section>
              <h2 className="mb-2 font-heading text-lg font-semibold text-foreground">About</h2>
              <p className="leading-relaxed">{project.about}</p>
            </section>
          ) : null}
          {project.problemStatement ? (
            <section>
              <h2 className="mb-2 font-heading text-lg font-semibold text-foreground">Problem</h2>
              <p className="leading-relaxed">{project.problemStatement}</p>
            </section>
          ) : null}
          {project.Solution ? (
            <section>
              <h2 className="mb-2 font-heading text-lg font-semibold text-foreground">Solution</h2>
              {Array.isArray(project.Solution) ? (
                <ul className="list-inside list-disc space-y-1">
                  {project.Solution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.Solution}</p>
              )}
            </section>
          ) : null}
          {project.Results?.length ? (
            <section>
              <h2 className="mb-2 font-heading text-lg font-semibold text-foreground">Results</h2>
              <ul className="list-inside list-disc space-y-1">
                {project.Results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {project.lessonsLearned?.length ? (
            <section>
              <h2 className="mb-2 font-heading text-lg font-semibold text-foreground">
                Lessons learned
              </h2>
              <ul className="list-inside list-disc space-y-1">
                {project.lessonsLearned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>

      <section>
        <h2 className="mb-4 font-heading text-xl font-semibold">Other projects</h2>
        <ProjectsComponent
          ProjectsToShow={projects.filter((p) => p.id !== project.id)}
          showTitle={false}
        />
      </section>
    </article>
  )
}
