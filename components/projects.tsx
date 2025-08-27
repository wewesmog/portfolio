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
import Link from "next/link";
import { getTechIcon } from "@/lib/tech-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
type Project = (typeof projectsData)[number];

export default function Projects({
  ProjectsToShow = [],
  showTitle = true,
}: {
  ProjectsToShow?: Project[];
  showTitle?: boolean;
}) {
  const list: Project[] = ProjectsToShow.length > 0 ? ProjectsToShow : projects;
  return (
    <section id="projects" className="w-full mb-12 space-y-8" aria-labelledby="projects-heading">
      {showTitle && (
        <h2 id="projects-heading" className="font-heading text-5xl sm:text-6xl font-extrabold mb-6">
          Projects<span className="text-primary mb-2">.</span>
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((project) => (
          <Card key={project.id} className="overflow-hidden rounded-lg transition duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
            <Link
              href={`/${project.id}/projects`}
              aria-label={`View ${project.title}`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md after:absolute after:inset-0 after:bg-black/5 after:opacity-0 after:transition-opacity group-hover:after:opacity-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:brightness-95"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzMwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjZWVlZWVlJy8+PC9zdmc+"
                  priority={project.id === 1}
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="min-h-[80px]">
                  <CardTitle className="font-heading text-3xl font-extrabold text-gray-700">
                    {project.name}
                  </CardTitle>
                  <span className="text-lg text-gray-500 block mt-1">
                    {project.title}
                  </span>
                </div>
                
                <div className="h-[40px]">
                  {project.link ? (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <EyeIcon className="size-5 mr-2" aria-label="View Project" />
                      View Project
                    </Button> 
                  ) : (
                    <p className="text-lg font-medium text-primary/80 flex items-center justify-center h-full bg-primary/5 rounded-md border border-primary/20">
                      Coming Soon
                    </p>
                  )}
                </div>

                {project.description && (
                  <CardDescription className="line-clamp-3 text-lg leading-relaxed min-h-[72px]">
                    {project.description}
                  </CardDescription>
                )}

                {project.Technologies && project.Technologies.length > 0 && (
                  <ul className="flex flex-wrap gap-3">
                    {project.Technologies.map((tech) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <li key={tech} title={tech} className="text-gray-700 group-hover:text-primary">
                          {Icon ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Icon className="size-5" aria-label={tech} />
                                </TooltipTrigger>
                                <TooltipContent>{tech}</TooltipContent>
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
            </Link>
            <CardContent className="pt-0" />
          </Card>
        ))}
      </div>
    </section>
  );
}
