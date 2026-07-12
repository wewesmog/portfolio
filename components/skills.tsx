import { FaCheck } from "react-icons/fa"

import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    name: "Customer engagement",
    subSkills: ["CVM / lifecycle", "Retention & churn", "Segmentation", "CLV", "Campaign analytics"],
  },
  {
    name: "AI engineering",
    subSkills: ["LangGraph", "LangChain", "RAG", "Structured extraction", "Evaluation"],
  },
  {
    name: "Full-stack",
    subSkills: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    name: "Product",
    subSkills: ["0→1 experiments", "shadcn / Tailwind UI", "Agile delivery", "Stakeholder alignment"],
  },
]

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeader
        id="skills-heading"
        title="Skills"
        description="Business context first — engineering to ship."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill.name} className="border-border/80 py-0 shadow-none">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-semibold">{skill.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <ul className="space-y-1.5">
                {skill.subSkills.map((sub) => (
                  <li key={sub} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <FaCheck className="mt-0.5 shrink-0 text-primary" size={12} />
                    {sub}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
