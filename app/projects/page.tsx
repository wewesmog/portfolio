// all projects page

import { projects } from "@/app/data/projects_data";



import ProjectsComponent from "@/components/projects";


export default function Projects() {
    

    return (
        <div>
         
          <h1 className="text-6xl font-extrabold mb-6 mt-10">My Best Works<span className="text-primary mb-2">.</span>
          </h1>
              <ProjectsComponent ProjectsToShow={projects} showTitle={false} />
        </div>
       
       
    );

}
