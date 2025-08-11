// skills component

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";

  type Skill = {
    name: string;
    subSkills: string[];
  }

  const skills: Skill[] = [
    {
      name: "Frontend",
      subSkills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    },
    {
      name: "Backend",
      subSkills: ["Python", "FastAPI", "PostgreSQL"],
    },
    {
      name: "AI Agents Dev",
      subSkills: ["LangChain", "LangGraph", "RAG", "Tool Use", "Retrieval", "Evaluation", "Observability"],
    },
    {
      name: "Product Management & Business",
      subSkills: [
        "Agile Product Management",
        "Customer Lifecycle (CVM)",
        "Churn & Retention",
        "Segmentation & CLV",
        "Analytics & Reporting",
      
      ],
    },
  ];

export default function Skills() {
    return (
            <section className="w-full mb-12 space-y-8" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="font-heading text-6xl font-extrabold mb-10">Skills<span className="text-primary">.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill) => (
                    <Card key={skill.name} className="shadow-none border-none">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-3xl font-extrabold text-gray-700">{skill.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <ul className="list-none space-y-3">
                                {skill.subSkills.map((subSkill) => (
                                    <div key={subSkill} className="flex items-center gap-2 text-lg">
                                        <FaCheck className="text-primary" />
                                        <li>{subSkill}</li>
                                    </div>
                                ))}
                               
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
            </section>
        
    )
}
