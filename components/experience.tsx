"use client"
// experience component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
    company: "KCB Bank",
    position: "Senior Manager, Customer Value Management",
    description:
      "Ownership of CVM programs and DFS growth across digital channels with lifecycle, churn, and cross‑sell initiatives.",
    startDate: "Jan 2023",
    endDate: "Present",
    roles: [
      "Meet DFS revenue targets by growing ARPU/ARPA and wallet transactions (P2P, B2C, C2B)",
      "Onboard and engage online merchants with promotions, discounts, and incentives",
      "Scale Vooma wallet onboarding, engagement, and retention",
      "Design lifecycle programs to extend product LTV",
      "Reactivate dormant accounts using data mining and churn playbooks",
      "Cross‑sell to Mobile Money and Vooma to increase basket size and frequency",
      "Institute customer‑focused practices and training to prevent service issues",
      "Drive final‑stop resolution for merchants, agents, and customers",
      "Embed CVM and online sales KPIs/tracking (ARPU, ARPA, IBRO, txn size/vols, churn)"
    ],
  },
  {
    company: "Safaricom",
    position: "CVM Platforms Manager",
    description:
      "Ran CVM campaigns, analytics and roadmaps in collaboration with product segment owners.",
    startDate: "Aug 2018",
    endDate: "Dec 2022",
    roles: [
      "Created and managed CVM campaigns across product segments",
      "Owned the campaigns roadmap and daily operations",
      "Delivered campaign reporting, analysis and insights",
      "Built retention, churn and cross‑sell programs from behavioral analysis",
      "Tracked churn trends and optimized tactics continuously",
      "Produced weekly/monthly CVM & CRM reports and decks",
      "Led in‑depth campaign effectiveness analysis and recommendations",
      "Developed CVM strategy leveraging advanced analytics",
      "Reviewed platforms/channels/touchpoints and recommended enhancements"
    ],
  },
  {
    company: "IBM",
    position: "CVM Campaigns Management Consultant (Kenya & Zambia)",
    description:
      "Consulted on Unica/CVM programs for telco clients, driving strategy, operations and improvements.",
    startDate: "Feb 2015",
    endDate: "Aug 2018",
    roles: [
      "Managed day‑to‑day execution of Airtel marketing programs",
      "Drove continuous improvement initiatives in campaign management",
      "Provided thought leadership in campaign design and implementation",
      "Built churn models and retention campaigns",
      "Aligned stakeholders and ensured on‑time delivery of plans",
      "Developed compelling propositions and messaging for target audiences",
      "Led best‑practice strategy for campaign design and execution",
      "Analyzed and presented results; recommended changes to hit objectives",
      "Guided solution enhancements and integrations; led QA and troubleshooting"
    ],
  },
  {
    company: "FlyTxt",
    position: "Marketing Operations Executive",
    description:
      "Campaign operations and analysis for Airtel; dashboards, RA data support and invoicing.",
    startDate: "Sep 2012",
    endDate: "Jan 2015",
    roles: [
      "Ran continuous improvement initiatives in campaign management",
      "Owned pre/post‑campaign analysis and weekly revenue dashboards",
      "Presented campaign analyses to Airtel Kenya",
      "Ensured all marketing activity was tracked and insights fed future plans",
      "Provided data to Revenue Assurance and handled segmentation for campaigns",
      "Maintained processes/templates and supported timely invoicing"
    ],
  },
  {
    company: "Comviva",
    position: "Business Operations Manager (CRBT)",
    description:
      "Operations for CRBT: campaigns, OBD coordination, BI and RA for Airtel francophone markets.",
    startDate: "Apr 2011",
    endDate: "Sep 2012",
    roles: [
      "Managed CRBT campaign operations including OBD",
      "Produced timely stakeholder reporting (mail/SMS alerts)",
      "Coordinated with technical teams to resolve data/report issues",
      "Analyzed CDRs for Revenue Assurance and delivered BI for Congo‑Brazzaville",
      "Prepared documentation and presented progress to clients"
    ],
  },

];

export default function Experience() {
  const router = useRouter();
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
    <section id="experience" className="w-full mb-12 space-y-8" aria-labelledby="experience-heading">
    <h2 id="experience-heading" className="font-heading text-5xl sm:text-6xl font-extrabold mb-10">Experience<span className="text-primary mb-2">.</span></h2>
      <Tabs
      value={value}
      onValueChange={setValue}
      orientation="vertical"
        className="flex flex-col md:flex-row md:items-stretch gap-8 w-full"
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
      <div className="flex-1 w-full space-y-6 md:self-stretch md:flex md:flex-col">
        {experiences.map((experience) => (
          <TabsContent key={experience.company} value={experience.company} className="flex-1">
         
            <p className="text-3xl font-bold text-gray-700 my-2">{experience.position} @ <span className="text-primary">{experience.company}</span></p>
            <p className="text-base text-gray-600 mb-2">{experience.description}</p>
            <p className="text-lg text-gray-500 mb-2">
              {experience.startDate} - {experience.endDate}
              {experience.endDate === "Present" && (
                <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary align-middle">
                  Current
                </span>
              )}
            </p>
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
              onClick={() => {goPrev(); router.push("/#experience")}}
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
              onClick={() => {goNext(); router.push("/#experience")}}
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
