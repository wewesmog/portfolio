import type { Project } from "@/app/data/projects_data"

export function getProjectHref(project: Project): string {
  if (project.slug) return `/articles/${project.slug}`
  if (project.link?.startsWith("http")) return project.link
  return `/${project.id}/projects`
}

export function isProjectExternal(project: Project): boolean {
  return Boolean(project.link?.startsWith("http") && !project.slug)
}

export function getProjectLinkLabel(project: Project): string {
  if (project.linkLabel) return project.linkLabel
  if (project.lab) return "View on CVM×AI"
  if (project.slug) return "Read article"
  if (project.link?.startsWith("http")) return "Visit site"
  return "Case study"
}

export function getProjectExternalLabel(project: Project): string | null {
  if (!project.link?.startsWith("http")) return null
  if (project.lab) return "View on cvm-ai.com"
  return project.linkLabel ?? "Visit site"
}
