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
    "title": "Mwalimu — AI Educational Tutoring Chatbot",
    "description": "Intelligent tutoring system for Kenyan students delivering personalized educational content via Telegram with LangGraph multi-agent architecture.",
    "status": "pilot",
    "image": "/images/mwalimus3.png",
    "link": "https://t.me/Mwalimus",
    "about": "Mwalimu (meaning 'teacher' in Swahili) is an AI-powered educational chatbot designed specifically for Kenyan students. It provides interactive tutoring, practice problems, and personalized feedback across subjects like Mathematics, Sciences, Languages, and Social Studies. The system uses a sophisticated multi-agent architecture to deliver grade-appropriate content for both primary (Class 1-8) and secondary (Form 1-4) school students.",
    "problemStatement": "Many Kenyan students lack access to personalized tutoring and struggle with understanding complex subjects without individual guidance. Traditional educational apps often lack cultural relevance and don't adapt to local curriculum requirements.",
    "Solution": [
      "Multi-agent LangGraph architecture with intelligent routing and specialized tutoring agents",
      "Cultural localization with Swahili greetings and Kenyan curriculum alignment",
      "Grade-appropriate content delivery for primary (Class 1-8) and secondary (Form 1-4) students",
      "Interactive Q&A system with practice problems and instant feedback",
      "Conversation state persistence for continuous learning across sessions",
      "Multi-platform support (Telegram and WhatsApp) for accessibility"
    ],
    "Technologies": [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Python Telegram Bot",
      "PostgreSQL",
      "Pydantic",
      "OpenAI API",
      "Groq API",
      "OpenRouter API",
      "Instructor (Structured LLM Outputs)",
      "Twilio (WhatsApp Integration)",
      "Uvicorn",
      "Python-dotenv"
    ],
    "Results": [
      "Successfully deployed Telegram bot with webhook integration",
      "Multi-agent system handles complex educational conversations with context awareness",
      "Structured conversation flow with proper state management and persistence",
      "Cultural localization with Swahili integration and Kenyan curriculum focus",
      "Scalable architecture supporting multiple concurrent student sessions"
    ],
    "Challenges": [
      "Implementing secure API token management and webhook configuration",
      "Designing intuitive conversation flows for different educational scenarios",
      "Ensuring consistent state management across complex multi-agent interactions",
      "Balancing educational content depth with chat interface limitations",
      "Creating culturally appropriate responses while maintaining educational standards"
    ],
    "lessonsLearned": [
      "LangGraph provides excellent workflow orchestration for complex conversational AI",
      "Structured LLM outputs with Pydantic models significantly improve response quality",
      "Cultural localization is crucial for educational technology adoption",
      "Multi-agent architectures require careful state management and error handling",
      "Webhook-based chatbot deployment requires robust error handling and logging"
    ],
    "futureImprovements": [
      "Add multimedia content support (images, diagrams, videos)",
      "Implement progress tracking and learning analytics dashboard",
      "Add spaced repetition algorithms for better knowledge retention",
      "Create admin dashboard for content management and student monitoring",
      "Integrate with Kenyan education databases for curriculum alignment",
      "Add voice message support for accessibility",
      "Implement A/B testing for different teaching approaches"
    ],
    "otherPics": [
      "/images/mwalimu-telegram.png",
      "/images/mwalimu-architecture.png",
      "/images/mwalimu-dashboard.png"
    ],
    "date": "2024-11-15",
    "myRole": "AI Engineer & Full-Stack Developer"
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