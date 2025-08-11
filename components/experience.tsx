"use client"
// experience component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Experience = {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  roles: string[];
}

const experiences: Experience[] = [

  {
    company: "KCB Group",
    position: "Software Engineer",
    description: "Worked in KCB Group as a Software Engineer. I was responsible for the development of the KCB Group website. I was also responsible for the development of the KCB Group mobile app. I was also responsible for the development of the KCB Group backend. I was also responsible for the development of the KCB Group frontend.",
    startDate: "Jan 2020",
    endDate: "Present",
    roles: ["Kicked off the project", "Built the backend", "Built the frontend", "Deployed the application"],
  },
  {
    company: "Safaricom",
    position: "Software Engineer",
    description: "Worked in Safaricom as a Software Engineer. I was responsible for the development of the Safaricom website. I was also responsible for the development of the Safaricom mobile app. I was also responsible for the development of the Safaricom backend. I was also responsible for the development of the Safaricom frontend.",
    startDate: "Jan 2019",
    endDate: "Jan 2022",
    roles: ["Kicked off the project", "Built the backend", "Built the frontend", "Deployed the application"],
  },    
  {
    company: "Flutterwave",
    position: "Software Engineer",
    description: "Worked in Safaricom as a Software Engineer. I was responsible for the development of the Safaricom website. I was also responsible for the development of the Safaricom mobile app. I was also responsible for the development of the Safaricom backend. I was also responsible for the development of the Safaricom frontend.",
    startDate: "Jan 2016",
    endDate: "Jan 2019",
    roles: ["Kicked off the project", "Built the backend", "Built the frontend", "Deployed the application"],
  },    
];

export default function Experience() {
  const tabValues = experiences.map((experience) => ({
    value: experience.company,
    label: experience.company,
  }));

  const [value, setValue] = React.useState<string>(tabValues[0].value);
  const currentIndex = tabValues.findIndex((t) => t.value === value);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === tabValues.length - 1;

  const goPrev = () => {
    if (isFirst) return;
    const nextIndex = currentIndex - 1;
    setValue(tabValues[nextIndex].value);
  };

  const goNext = () => {
    if (isLast) return;
    const nextIndex = currentIndex + 1;
    setValue(tabValues[nextIndex].value);
  };

  return (
    <section className="w-full mb-12 space-y-8" aria-labelledby="experience-heading">
    <h2 id="experience-heading" className="text-6xl font-extrabold mb-6">Experience<span className="text-primary mb-2">.</span></h2>
    <Tabs
      value={value}
      onValueChange={setValue}
      orientation="vertical"
      className="flex flex-col md:flex-row md:items-stretch gap-6 w-full"
    >
      {/* Triggers hidden on mobile; vertical list on md+ */}
      <TabsList className="hidden md:flex md:flex-col md:w-56 md:shrink-0 md:self-stretch md:gap-1 bg-transparent h-auto p-0 relative before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gray-900">
        {tabValues.map((t) => (
          <TabsTrigger
            key={t.value}
            value={t.value}
            className="relative w-full justify-start border-0 rounded-none pl-6 bg-transparent shadow-none data-[state=active]:shadow-none data-[state=active]:text-primary before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-transparent data-[state=active]:before:bg-primary text-2xl font-extrabold tracking-tight text-gray-700"
          >
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Content area */}
      <div className="flex-1 w-full space-y-4 md:self-stretch md:flex md:flex-col">
        {experiences.map((experience) => (
          <TabsContent key={experience.company} value={experience.company} className="flex-1">
         
            <p className="text-3xl font-bold text-gray-700 my-2">{experience.position} @ <span className="text-primary">{experience.company}</span></p>
            {/* <p className="text-sm text-gray-500">{experience.description}</p> */}
            <p className="text-lg text-gray-500 mb-2">{experience.startDate} - {experience.endDate}</p>
            <ul className="list-none space-y-3">
              {experience.roles.map((role) => (
                <li
                  key={role}
                  className="relative pl-7 before:content-['✓'] before:text-primary before:absolute before:left-0 before:top-1 text-lg"
                >
                  {role}
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
  

        {/* Mobile navigation arrows */}
        <div className="md:hidden flex items-center justify-between pt-2">
          {!isFirst ? (
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous experience"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <ChevronLeft className="size-5" /> Prev
            </button>
          ) : (
            <span />
          )}
          <div className="text-sm font-medium">{tabValues[currentIndex]?.label}</div>
          {!isLast ? (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next experience"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Next <ChevronRight className="size-5" />
            </button>
          ) : (
            <span />
          )}
        </div>
      </div>
    </Tabs>
    </section>
  );
}
