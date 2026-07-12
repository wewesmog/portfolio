import { notFound } from "next/navigation"

import { projects } from "@/app/data/projects_data"
import { ProjectArticle } from "@/components/project-article"

export function generateStaticParams() {
  return projects.filter((p) => p.slug).map((p) => ({ slug: p.slug! }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return <ProjectArticle project={project} />
}
