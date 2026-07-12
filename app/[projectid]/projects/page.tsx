import { notFound, redirect } from "next/navigation"

import { projects } from "@/app/data/projects_data"
import { ProjectArticle } from "@/components/project-article"

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectid: string }>
}) {
  const { projectid } = await params
  const project = projects.find((p) => p.id === Number(projectid))
  if (!project) notFound()

  if (project.slug) {
    redirect(`/articles/${project.slug}`)
  }

  return <ProjectArticle project={project} />
}
