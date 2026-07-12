import Link from "next/link"

import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Story from "@/components/story"
import { LabBanner } from "@/components/lab-banner"
import { projects } from "./data/projects_data"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 pb-12 pt-2 sm:gap-14">
      <Hero />
      <LabBanner />
      <Projects ProjectsToShow={projects} showTitle />
      <div className="flex justify-center">
        <Button asChild variant="outline" size="sm">
          <Link href="/projects">All projects</Link>
        </Button>
      </div>
      <Story />
      <Skills />
      <Experience />
    </div>
  )
}
