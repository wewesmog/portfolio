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
    "title": "Trivia Pals — Social Trivia Gaming Platform",
    "description": "Real-time multiplayer trivia platform with AI-powered question generation, live leaderboards, and social gaming features.",
    "status": "live",
    "image": "/images/trivia-pals.png",
    "link": "https://www.triviapals.com",
    "about": "Trivia Pals is a modern, social trivia gaming platform that brings friends together through real-time multiplayer trivia games. Built with Next.js and FastAPI, it features AI-generated questions, live leaderboards, attempt tracking, and a beautiful responsive UI that works seamlessly across devices.",
    "problemStatement": "Traditional trivia apps lack social interaction, real-time multiplayer capabilities, and engaging user experiences that keep players coming back for more.",
    "Solution": [
      "Real-time multiplayer trivia games with live leaderboards and player tracking",
      "AI-powered question generation for dynamic, fresh content",
      "Comprehensive attempt history and performance analytics",
      "Responsive design with mobile-first approach and beautiful UI/UX",
      "Social features including game sharing, player profiles, and achievement tracking",
      "Advanced pagination and filtering for large game libraries"
    ],
    "Technologies": [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Supabase (Auth & Database)",
      "Vercel (Deployment)",
      "OpenAI API",
      "Lucide React (Icons)",
      "Radix UI (Components)"
    ],
    "Results": [
      "Real-time multiplayer functionality with live score updates",
      "Responsive design supporting mobile, tablet, and desktop",
      "Comprehensive game history with attempt tracking and analytics",
      "Modern UI with smooth animations and intuitive navigation",
      "Scalable architecture supporting multiple concurrent games"
    ],
    "Challenges": [
      "Implementing real-time multiplayer synchronization across devices",
      "Designing responsive UI that works seamlessly on all screen sizes",
      "Optimizing performance for large game libraries with pagination",
      "Creating intuitive user flows for both hosts and players",
      "Ensuring consistent state management across complex game interactions"
    ],
    "lessonsLearned": [
      "Component-based architecture with proper separation of concerns improves maintainability",
      "Responsive design with mobile-first approach enhances user experience significantly",
      "Proper error handling and loading states are crucial for user trust",
      "TypeScript provides excellent developer experience and reduces runtime errors",
      "Vercel deployment with automatic CI/CD streamlines the development process"
    ],
    "futureImprovements": [
      "Voice chat integration for enhanced social interaction",
      "Custom trivia categories and difficulty levels",
      "Tournament mode with brackets and elimination rounds",
      "Achievement system with badges and rewards",
      "Integration with social media platforms for game sharing",
      "Advanced analytics dashboard for game hosts"
    ],
    "otherPics": [
      "/images/trivia-pals 2.png",
      "/images/trivia-pals 3.png",
      "/images/trivia-pals 4.png"
    ],
    "date": "2024-12-01",
    "myRole": "Full-Stack Developer"
  },
  
  {
    "id": 3,
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

    ],
    "date": "2024-08-15",
    "myRole": "AI Product Engineer"
  },
  {
    "id": 4,
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
   
    ],
    "date": "2024-06-01",
    "myRole": "Product & Engineering"
  },

]