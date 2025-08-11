// skills component

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  type Skill = {
    name: string;
    subSkills: string[];
  }

  const skills: Skill[] = [
    {
        name: "Frontend",
        subSkills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
    },
    {
        name: "Backend",
        subSkills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL"],
    },
    {
        name: "DevOps",
        subSkills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure"],
    },
  ];

export default function Skills() {
    return (
            <section className="w-full mb-12 space-y-8" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-6xl font-extrabold mb-6">Skills<span className="text-primary mb-2">.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <Card key={skill.name} className="shadow-none border-none">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-3xl font-extrabold text-gray-700">{skill.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <ul className="list-none space-y-3">
                                {skill.subSkills.map((subSkill) => (
                                    <li key={subSkill} className="text-lg">{subSkill}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
            </section>
        
    )
}
