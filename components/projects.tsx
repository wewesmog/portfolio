// projects component
"use client";
import { projects } from "@/app/data/projects_data";
import type { projects as projectsData } from "@/app/data/projects_data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { getTechIcon } from "@/lib/tech-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
type Project = (typeof projectsData)[number];

export default function Projects({
  ProjectsToShow = [],
  showTitle = true,
}: {
  ProjectsToShow?: Project[];
  showTitle?: boolean;
}) {
  const list: Project[] = ProjectsToShow.length > 0 ? ProjectsToShow : projects;
  const router = useRouter();
  return (
    <section className="w-full mb-12 space-y-8" aria-labelledby="projects-heading">
      {showTitle && (
        <h2 id="projects-heading" className="text-6xl font-extrabold mb-6">
          Projects<span className="text-primary mb-2">.</span>
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzMwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZWVlZWVlJy8+PC9zdmc+"
                priority={project.id === 1}
              />
            </div>
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-extrabold flex items-center gap-2 mb-2 text-gray-700">
                {project.title}
                
                  <Button variant="ghost" size="icon" onClick={() => router.push(`/${project.id}/projects`)}>
                    <ArrowUpRight className="w-10 h-10 rounded-full  text-gray-700 border-2 border-gray-700 hover:bg-primary/90" />
                  </Button>
                
              </CardTitle>
              {project.description ? (
                <CardDescription className="line-clamp-3 text-lg">
                  {project.description}
                </CardDescription>
              ) : null}
              {project.Technologies && project.Technologies.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-3">
                  {project.Technologies.map((tech) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <li key={tech} title={tech} className="text-gray-700 hover:text-primary">
                        
                              {Icon ? (
                                <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>  
                                <Icon className="size-5" aria-label={tech} />
                                </TooltipTrigger>
                                <TooltipContent>
                                  {tech}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                              ) : (
                                <span className="text-sm font-medium">{tech}</span>
                              )}
                            
                            
                          
                        
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </CardHeader>
            <CardContent className="pt-0" />
          </Card>
        ))}
      </div>
    </section>
  );
}
