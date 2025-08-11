//About page
import { Separator } from "@/components/ui/separator";
import Story from "@/components/story";
import { getTechIcon } from "@/lib/tech-icons";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
export default function About() {
    const techIcons = [
        { name: "React", icon: getTechIcon("React") },
        { name: "Next.js", icon: getTechIcon("Next.js") },
        { name: "Tailwind CSS", icon: getTechIcon("Tailwind CSS") },
        { name: "TypeScript", icon: getTechIcon("TypeScript") },
        { name: "JavaScript", icon: getTechIcon("JavaScript") },
    ];
    return (
        <div className="flex flex-col gap-5 mb-30 mt-10">
      
            <h1 className="text-8xl font-extrabold mb-4">About Me<span className="text-primary mb-2">.</span></h1>
{/* My stack */}
            <div className="flex flex-wrap gap-4 justify-start">
                {techIcons.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    {tech.icon && React.createElement(tech.icon, { className: "size-5" })}
                                    <TooltipContent>
                                        {tech.name}
                                    </TooltipContent>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>              
                        
                        
                    </div>
                ))}
            </div>
            <p className=" border-l-8 border-primary pl-4 py-2 text-xl text-gray-900">I'm a n end to end AI Applications Developer as well as product manager. I marry business needs with advanced AI Solutions.</p>
          <div className="flex flex-col mt-30">
           <Story />
          </div>
            
        </div>
    )
}
