"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { projects, type Project } from "@/app/data/projects_data"
import { ProjectIllustration } from "@/components/project-illustrations"
import { SectionHeader } from "@/components/section-header"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getTechIcon } from "@/lib/tech-icons"

function ProjectCover({ project }: { project: Project }) {
  return <ProjectIllustration cover={project.cover} />
}

export default function Projects({
  ProjectsToShow = [],
  showTitle = true,
}: {
  ProjectsToShow?: Project[]
  showTitle?: boolean
}) {
  const list = ProjectsToShow.length > 0 ? ProjectsToShow : projects

  return (
    <section id="projects" className="scroll-mt-24" aria-labelledby="projects-heading">
      {showTitle ? (
        <SectionHeader
          id="projects-heading"
          title="Selected work"
          description="AI products aimed at lifecycle, retention and customer engagement — including experiments from the CVM×AI lab."
        />
      ) : null}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((project) => {
          const href = project.link?.startsWith("http")
            ? project.link
            : `/${project.id}/projects`
          const external = project.link?.startsWith("http")

          return (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/80 py-0 shadow-sm transition-shadow hover:shadow-md"
            >
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="block"
              >
                <ProjectCover project={project} />
                <CardHeader className="gap-2 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-heading text-base font-semibold leading-snug">
                      {project.title}
                    </CardTitle>
                    <div className="flex shrink-0 items-center gap-1.5">
                      {project.lab ? (
                        <Badge variant="outline" className="text-[10px]">
                          Lab
                        </Badge>
                      ) : null}
                      <Badge variant="secondary" className="text-[10px] capitalize">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  {project.description ? (
                    <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  ) : null}
                  {project.Technologies && project.Technologies.length > 0 ? (
                    <ul className="flex flex-wrap gap-2 pt-1">
                      {project.Technologies.slice(0, 5).map((tech) => {
                        const Icon = getTechIcon(tech)
                        return (
                          <li key={tech} className="text-muted-foreground" title={tech}>
                            {Icon ? <Icon className="size-4" aria-label={tech} /> : null}
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                    {external ? "View on CVM×AI" : "Case study"}
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </CardHeader>
              </Link>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
