import ProjectsComponent from "@/components/projects"
import { SectionHeader } from "@/components/section-header"
import { projects } from "@/app/data/projects_data"

export default function ProjectsPage() {
  return (
    <div className="space-y-6 py-8">
      <SectionHeader
        title="Projects"
        description="AI for customer engagement — lab experiments and shipped products."
      />
      <ProjectsComponent ProjectsToShow={projects} showTitle={false} />
    </div>
  )
}
