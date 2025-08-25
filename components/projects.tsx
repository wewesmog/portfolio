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
              <CardHeader className="space-y-1">
                <CardTitle className="font-heading text-3xl font-extrabold flex items-center gap-2 mb-2 text-gray-700">
                  {project.title}
                </CardTitle>
                {project.link ? (
              <Link href={project.link} className="text-lg text-gray-500 mb-10">
                <EyeIcon className="size-5" aria-label="View Project" />
              </Link>
            ) : null}
                {project.description ? (
                  <CardDescription className="line-clamp-3 text-lg leading-relaxed">
                    {project.description}
                  </CardDescription>
                ) : null}
                {project.Technologies && project.Technologies.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-3">
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
