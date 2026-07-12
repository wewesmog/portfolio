"use client"

import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { SectionHeader } from "@/components/section-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Experience = {
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
  roles: string[]
}

const experiences: Experience[] = [
  {
    company: "KCB Bank",
    position: "Senior Manager, Customer Value Management",
    description:
      "CVM and DFS growth across digital channels — lifecycle, churn, and cross-sell.",
    startDate: "Jan 2023",
    endDate: "Present",
    roles: [
      "DFS revenue via ARPU/ARPA and wallet transaction growth",
      "Merchant onboarding, promotions and engagement programs",
      "Vooma wallet onboarding, engagement and retention",
      "Lifecycle programs to extend product LTV",
      "Dormant account reactivation with data-led churn playbooks",
      "Cross-sell into Mobile Money and Vooma",
      "CVM and online sales KPI tracking (ARPU, churn, txn volumes)",
    ],
  },
  {
    company: "Safaricom",
    position: "CVM Platforms Manager",
    description: "Campaigns, analytics and roadmaps with product segment owners.",
    startDate: "Aug 2018",
    endDate: "Dec 2022",
    roles: [
      "CVM campaigns across product segments",
      "Retention, churn and cross-sell from behavioral analysis",
      "Campaign effectiveness analysis and recommendations",
      "CVM strategy leveraging advanced analytics",
      "Platform and touchpoint reviews for lifecycle improvements",
    ],
  },
  {
    company: "IBM",
    position: "CVM Campaigns Consultant (Kenya & Zambia)",
    description: "Unica/CVM programs for telco clients.",
    startDate: "Feb 2015",
    endDate: "Aug 2018",
    roles: [
      "Campaign design, execution and continuous improvement",
      "Churn models and retention campaigns",
      "Stakeholder alignment and results reporting",
    ],
  },
  {
    company: "FlyTxt",
    position: "Marketing Operations Executive",
    description: "Campaign operations and analysis for Airtel.",
    startDate: "Sep 2012",
    endDate: "Jan 2015",
    roles: [
      "Pre/post-campaign analysis and revenue dashboards",
      "Segmentation support and campaign tracking",
    ],
  },
]

export default function Experience() {
  const tabValues = experiences.map((e) => ({ value: e.company, label: e.company }))
  const [value, setValue] = React.useState(tabValues[0].value)
  const currentIndex = tabValues.findIndex((t) => t.value === value)

  return (
    <section id="experience" className="scroll-mt-24" aria-labelledby="experience-heading">
      <SectionHeader
        id="experience-heading"
        title="Experience"
        description="A decade in lifecycle and CVM before building AI products on the same problems."
      />

      <Tabs
        value={value}
        onValueChange={setValue}
        orientation="vertical"
        className="flex flex-col gap-4 md:flex-row md:gap-6"
      >
        <TabsList className="hidden h-auto w-full flex-col gap-0.5 bg-transparent p-0 md:flex md:w-44 md:shrink-0">
          {tabValues.map((t) => (
            <TabsTrigger
              key={t.value}
              value={t.value}
              className="w-full justify-start rounded-md px-3 py-2 text-left text-sm font-medium data-[state=active]:bg-muted data-[state=active]:text-primary"
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="min-w-0 flex-1">
          {experiences.map((experience) => (
            <TabsContent key={experience.company} value={experience.company} className="mt-0">
              <p className="text-base font-semibold">
                {experience.position}
                <span className="text-muted-foreground"> · {experience.company}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{experience.description}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                {experience.startDate} – {experience.endDate}
                {experience.endDate === "Present" ? (
                  <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    Current
                  </span>
                ) : null}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {experience.roles.map((role) => (
                  <li key={role} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-primary">
                    {role}
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}

          <div className="mt-4 flex items-center justify-between md:hidden">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setValue(tabValues[currentIndex - 1].value)}
              className="inline-flex items-center gap-1 text-sm disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <span className="text-xs text-muted-foreground">{tabValues[currentIndex]?.label}</span>
            <button
              type="button"
              disabled={currentIndex === tabValues.length - 1}
              onClick={() => setValue(tabValues[currentIndex + 1].value)}
              className="inline-flex items-center gap-1 text-sm disabled:opacity-40"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Tabs>
    </section>
  )
}
