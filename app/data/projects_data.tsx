// projects data

type Project = {
    id: number;
    title: string;
    description: string;
    status: "live" | "in progress" | "pilot";
    image: string; // path under /public (e.g., "/images/p1.jpg") or external URL
    link?: string;
    about?: string;
    problemStatement?: string;
    Solution?: string | string[];
    Technologies?: string[];
    Results?: string[];
    Challenges?: string[];
    lessonsLearned?: string[];
    futureImprovements?: string[];
    otherPics?: string[] ;
    date?: string;
    myRole?: string;
}

export const projects: Project[] =[
  {
    "id": 1,
    "title": "Maswali — AI‑Powered Trivia Platform",
    "description": "Gamified learning with dynamic, adaptive trivia powered by LangGraph + OpenAI.",
    "status": "live",
      "image": "/images/p1.jpeg",
    "link": "https://github.com/yourname/maswali",
    "about": "Maswali is a trivia and practice platform that generates fresh, level‑appropriate questions on the fly. Using LangGraph to orchestrate content flows, it adapts difficulty, offers hints, and tracks mastery—keeping learners engaged while reinforcing knowledge over time.",
    "problemStatement": "Static question banks get stale quickly and don’t adapt to learner progress, leading to poor engagement and limited retention.",
    "Solution": [
      "LangGraph flow orchestrates question generation, validation, and scoring",
      "Adaptive difficulty based on recent performance and mastery gaps",
      "Hinting and explanations generated per question to reinforce concepts",
      "Leaderboards, streaks, and XP for sustained motivation",
      "Admin tools to seed topics, constraints, and syllabus coverage"
    ],
    "Technologies": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "LangGraph"
    ],
    "Results": [
      "Session length +28% versus static quiz baseline",
      "Repeat play increased by 2.1× with streak incentives",
      "Question rejection rate < 3% after validator tuning"
    ],
    "Challenges": [
      "Guarding against repetitive or low‑quality generations",
      "Balancing difficulty progression without frustrating learners"
    ],
    "lessonsLearned": [
      "Small rubric‑based validators dramatically improve question quality",
      "Mixing retrieval and generation produces more grounded explanations"
    ],
    "futureImprovements": [
      "Multiplayer rooms and live tournaments",
      "Topic coverage dashboards for teachers",
      "Offline play with local caching"
    ],
    "otherPics": [
      "/images/p1_screenshot1.png",
      "/images/p1_screenshot2.png"
    ],
    "date": "",
    "myRole": "Full‑stack / AI Product Engineer"
  },
  {
    "id": 2,
    "title": "Mwalimu — AI Financial Advisory Chatbot",
    "description": "POC advisor delivering personalized money guidance via LangChain/LangGraph + Groq.",
      "status": "pilot",
      "image": "/images/p2.jpeg",
    "link": "https://github.com/yourname/mwalimu",
    "about": "Mwalimu provides actionable, personalized financial coaching across web and chat channels. It profiles a user’s goals, cash flow, and risk appetite to suggest budgets, savings plans, and product recommendations in plain language.",
    "problemStatement": "Most users lack access to contextual, trustworthy guidance—especially in low‑touch digital channels.",
    "Solution": [
      "LangChain tools for data collection (income/expense), planning, and comparison shopping",
      "LangGraph state machine to ensure deterministic, auditable flows",
      "Groq LLMs for low‑latency inference and cost control",
      "Consent‑based personalization and explanation‑first responses"
    ],
    "Technologies": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "OpenAI"
    ],
    "Results": [
      "Median response < 900ms on common intents with Groq deployment",
      "85% of test users reported advice was \"clear and actionable\""
    ],
    "Challenges": [
      "Clear disclaimers and scope limits to avoid \"advice\" liability",
      "Guardrails for affordability and risk checks"
    ],
    "lessonsLearned": [
      "Graph‑based orchestration is easier to test than free‑form prompts",
      "Users value step‑by‑step plans more than generic summaries"
    ],
    "futureImprovements": [
      "WhatsApp integration",
      "Bank aggregation for transaction‑level insights",
      "A/B tested nudges to improve adherence"
    ],
    "otherPics": [
      "/images/p2_screenshot1.png",
      "/images/p2_screenshot2.png"
    ],
    "date": "2024-08-15",
    "myRole": "AI Product Engineer"
  },
  {
    "id": 3,
    "title": "Brand Experience Meter",
    "description": "Real‑time customer sentiment tracker using LLMs + FastAPI with a React dashboard.",
      "status": "pilot",
      "image": "/images/p3.jpeg",
    "link": "https://github.com/yourname/brand-experience-meter",
    "about": "Continuously ingests tickets, surveys, and social mentions; classifies sentiment, tags topics, and surfaces emerging issues in a live dashboard so teams can react fast.",
    "problemStatement": "Customer experience signals live in silos; teams spot issues late, when damage is already done.",
    "Solution": [
      "Streaming ingestion to FastAPI; queueing for stable throughput",
      "LLM classifiers for sentiment, intent, and topic clustering",
      "Priority scoring and routing for \"act now\" items",
      "React dashboard with trends, drill‑downs, and exports"
    ],
    "Technologies": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "OpenAI"
    ],
    "Results": [
      "Alert lead time improved from days to hours in pilot",
      "NPS dip detected 48h sooner during pricing change test"
    ],
    "Challenges": [
      "Noise filtering for social streams",
      "PII scrubbing and policy controls"
    ],
    "lessonsLearned": [
      "Human‑in‑the‑loop review improves precision on edge cases",
      "Event‑driven architecture keeps costs predictable"
    ],
    "futureImprovements": [
      "Bring‑your‑own‑LLM to tune for cost/latency",
      "Custom taxonomies per team",
      "Slack/Teams push alerts"
    ],
    "otherPics": [
      "/images/p3_screenshot1.png",
      "/images/p3_screenshot2.png"
    ],
    "date": "2024-06-01",
    "myRole": "Product & Engineering"
  },

]