import { Button } from "@/components/ui/button";

import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Story from "@/components/story";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Story />
      </main>
     
    </div>
  );
}
