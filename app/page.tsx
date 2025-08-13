"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Story from "@/components/story";
import { projects } from "./data/projects_data";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  // Get count of projects
  const previewCount = 3;
  const hasMoreProjects = projects.length > previewCount;
  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
      
        <Projects ProjectsToShow={projects.slice(0, 3)} showTitle={true} />
    {hasMoreProjects && (
        <div className="mt-2 flex justify-center w-full">
          <Link
            href="/projects"
            aria-label="See all projects"
            className="group inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-primary/20 hover:ring-primary/40 transition-transform duration-200 hover:scale-105 m-5"
            title="See all projects"
          >
            <Plus className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
          </div>
        )}
        <Story />
        <Skills />
        <Experience />
       
        
      </main>
     
    </div>
  );
}
