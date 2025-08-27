// projects details page

import { projects } from "@/app/data/projects_data";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectsComponent from "@/components/projects";
import { getTechIcon } from "@/lib/tech-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Projects({ params }: { params: Promise<{ projectid: string }> }) {
    const { projectid } = await params;
    const project = projects.find((p) => p.id === Number(projectid));
    if (!project) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-6xl font-extrabold mb-6 mt-10">{project.name} <br /> <span className="text-lg text-gray-500 mb-2"> {project.title}</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10">{project.description}</p>
            {project.link ? (
              <Button variant="outline" className="mb-2" onClick={() => window.open(project.link, '_blank')}>
                <EyeIcon className="size-5" aria-label="View Project" />
                View Project
              </Button> 
            ) : <p className="text-lg text-gray-500">Coming Soon</p>}
            <div className="relative aspect-[21/9] w-full mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
            {project.Technologies && project.Technologies.length > 0 ? (
              <ul className="mb-8 flex flex-wrap gap-3">
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
            <div className="flex flex-col md:flex-row gap-4 my-10">
              {/* Left column reserved for date of delivery (kept as-is) */}
              <div className="w-full md:w-1/4">
                <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-lg p-4 mr-10 mt-36">
                  <p className="text-lg text-gray-500 mb-10">
                    <span className="font-bold">Status:</span> {project.status}
                  </p>
                  {project.date ? (
                    <p className="text-lg text-gray-500 mb-10">
                      <span className="font-bold">Delivered on:</span> {project.date}
                    </p>
                  ) : null}
                  <p className="text-lg text-gray-500 mb-10">
                    <span className="font-bold">My Role:</span> {project.myRole}
                  </p>
                  </div>
              </div>
              {/* Right column with project details */}
              <div className="w-full md:w-3/4">
            {project.about ? (
              <>
                <h2 className="text-5xl font-extrabold mb-6 mt-10">About<span className="text-primary mb-2">.</span>
                </h2>
                <p className="text-lg text-gray-500 mb-10">{project.about}</p>
              </>
            ) : null}
            {project.problemStatement ? (
              <>
                <h2 className="text-5xl font-extrabold mb-6 mt-10">Problem Statement<span className="text-primary mb-2">.</span>
                </h2>
                <p className="text-lg text-gray-500 mb-10">{project.problemStatement}</p>
              </>
            ) : null}
            {project.Solution ? (
              <>
                <h2 className="text-5xl font-extrabold mb-6 mt-10">Solution<span className="text-primary mb-2">.</span>
                </h2>
                <p className="text-lg text-gray-500 mb-10">{project.Solution}</p>
              </>
            ) : null}
            {project.Results ? (
              <>
                <h2 className="text-5xl font-extrabold mb-6 mt-10">Results<span className="text-primary mb-2">.</span>
                </h2>
                <ul className="text-lg text-gray-500 mb-10">
                  {project.Results?.map((result, i) => (
                    <li key={i} className="list-disc ml-6 mb-2">{result}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {project.Challenges ? (
              <>
                <h2 className="text-5xl font-extrabold mb-6 mt-10">Challenges<span className="text-primary mb-2">.</span>
                </h2>
                <ul className="text-lg text-gray-500 mb-10">
                  {project.Challenges?.map((challenge, i) => (
                    <li key={i} className="list-disc ml-6 mb-2">{challenge}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {project.lessonsLearned ? (
              <>
                <h2 className="text-5xl font-extrabold mb-6 mt-10">Lessons Learned<span className="text-primary mb-2">.</span>
                </h2>
                <ul className="text-lg text-gray-500 mb-10">
                  {project.lessonsLearned?.map((lesson, i) => (
                    <li key={i} className="list-disc ml-6 mb-2">{lesson}</li>
                  ))} 
                </ul>
              </>
            ) : null}
            {project.futureImprovements ? (
              <>
                <h2 className="text-5xl font-extrabold mb-6 mt-10">Future Improvements<span className="text-primary mb-2">.</span>  
                </h2>
                <ul className="text-lg text-gray-500 mb-10">
                  {project.futureImprovements?.map((improvement, i) => (
                    <li key={i} className="list-disc ml-6 mb-2">{improvement}</li>
                  ))}
                </ul>
              </>
            ) : null} 
              </div>
            </div>
            <h1 className="text-6xl font-extrabold mb-6 mt-10">Other Projects<span className="text-primary mb-2">.</span></h1>
              <ProjectsComponent ProjectsToShow={projects.filter((p) => p.id !== Number(projectid))} showTitle={false} />
        </div>
       
       
    );

}
