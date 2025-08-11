// projects data

type Project = {
    id: number;
    title: string;
    description: string;
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
    "title": "AI Customer Support Agent",
    "description": "An AI agent that answers customer questions using company documentation with RAG.",
    "image": "/images/p1.jfif",
    "link": "https://github.com/yourname/ai-support-agent",
    "about": "Built an AI support agent that ingests product guides, FAQs, and release notes and answers user questions in natural language.",
    "problemStatement": "Human support couldn’t scale; repetitive questions increased response times and costs.",
    "Solution": "Implemented Retrieval-Augmented Generation (RAG) with chunked documents and semantic search to ground LLM responses in official docs.",
    "Technologies": [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "LangChain",
      "Pinecone",
      "Redis"
    ],
    "Results": [
      "65% reduction in average first response time",
      "35% fewer human escalations",
      "CSAT +12%"
    ],
    "Challenges": [
      "Mitigating prompt injection",
      "preventing hallucinations",
      "designing good chunking/metadata for retrieval"
    ],
    "lessonsLearned": [
      "Grounding significantly improves answer reliability.",
      "Careful chunking + metadata filtering beats naive embeddings.",
      "Observability (traces, feedback) is critical for iteration."
    ],
    "futureImprovements": [
      "Multi-tenant ingestion pipeline with per-tenant namespaces",
      "Active learning from thumbs-up/down",
      "Cost-aware routing to smaller models"
    ],
    "otherPics": [
      "/images/p1_screenshot1.png",
      "/images/p1_screenshot2.png"
    ],
    "date": "2024-01-01",
    "myRole": "Software Engineer"
  },
  {
    "id": 2,
    "title": "E‑commerce Analytics Dashboard",
    "description": "Interactive dashboard for sales, cohorts, and funnel analysis.",
    "image": "/images/p2.jfif",
    "link": "https://demo.example.com/analytics",
    "about": "Aggregates orders, sessions, and marketing spend to visualize growth and profitability.",
    "problemStatement": "Disparate data sources made it hard for teams to trust numbers and make decisions.",
    "Solution": "Built ELT jobs to unify data and a dashboard with drill‑downs, segments, and exports.",
    "Technologies": [
      "Next.js",
      "Tailwind",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "ClickHouse",
      "Chart.js"
    ],
    "Results": [
      "Cut reporting time from days to minutes",
      "identified a 9% drop‑off step and recovered 3% conversion"
    ],
    "Challenges": [
      "Schema drift",
      "ensuring query performance on growing datasets"
    ],
    "lessonsLearned": [
      "Materialized views make heavy charts feel instant.",
      "Define a single source of truth for key metrics early."
    ],
    "futureImprovements": [
      "Anomaly alerts",
      "Embeddable share links"
    ],
    "otherPics": [
      "/images/p2_screenshot1.png",
      "/images/p2_screenshot2.png"
    ],
    "date": "2024-01-01",
    "myRole": "Software Engineer"
  },
  {
    "id": 3,
    "title": "Payments Service",
    "description": "Microservice for card and mobile money payments with webhooks.",
    "image": "/images/p3.jfif",
    "link": "https://github.com/yourname/payments-service",
    "about": "Unified payment API with retries, idempotency keys, and dashboard for settlements.",
    "problemStatement": "Inconsistent provider APIs and reconciliation pain across markets.",
    "Solution": "Normalized provider responses, added idempotent charge endpoints, and webhook signature verification.",
    "Technologies": [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "Playwright"
    ],
    "Results": [
      "99.95% successful capture rate",
      "reduced duplicate charges to near zero"
    ],
    "Challenges": [
      "Handling provider timeouts",
      "eventual consistency across webhooks"
    ],
    "lessonsLearned": [
      "Design idempotency from day one",
      "Test timeouts and retries explicitly"
    ],
    "futureImprovements": [
      "Add BNPL providers",
      "Grafana dashboards for finance team"
    ],
    "otherPics": [
      "/images/p3_screenshot1.png",
      "/images/p3_screenshot2.png"
    ],
    "date": "2024-01-01",
    "myRole": "Software Engineer"
  },
  {
    "id": 4,
    "title": "Realtime Collaboration Notes",
    "description": "Google‑Docs‑style notes with presence and comments.",
    "image": "/images/p4.jfif",
    "link": "https://notes.example.com",
    "about": "CRDT‑based editor enabling multiplayer editing and offline support.",
    "problemStatement": "Teams needed lightweight shared notes without vendor lock‑in.",
    "Solution": "Used Yjs for CRDTs, websockets for presence, and server persistence with snapshots.",
    "Technologies": [
      "Next.js",
      "TipTap",
      "Yjs",
      "WebSockets",
      "Prisma",
      "PostgreSQL"
    ],
    "Results": [
      "Median sync under 150ms",
      "zero merge conflicts reported by users"
    ],
    "Challenges": [
      "Awareness UI",
      "resolving cursor flicker on slow networks"
    ],
    "lessonsLearned": [
      "CRDTs simplify merge logic",
      "Throttle presence updates"
    ],
    "futureImprovements": [
      "End‑to‑end encryption",
      "Export to Markdown/PDF"
    ],
    "otherPics": [
      "/images/p4_screenshot1.png",
      "/images/p4_screenshot2.png"
    ],
    "date": "2024-01-01",
    "myRole": "Software Engineer"
  },
  {
    "id": 5,
    "title": "Portfolio Site",
    "description": "Fast, accessible personal site showcasing work and writing.",
    "image": "/images/p5.jfif",
    "link": "https://yourdomain.com",
    "about": "Built to be blazing fast with good semantics and lighting‑quick navigation.",
    "problemStatement": "Needed a maintainable site that scores highly on performance and SEO.",
    "Solution": "Server components with image optimization, local fonts, and structured data.",
    "Technologies": [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Vercel"
    ],
    "Results": [
      "Lighthouse 95+ across categories",
      "<1s LCP on desktop"
    ],
    "Challenges": [
      "Balancing custom design with simplicity and bundle size."
    ],
    "lessonsLearned": [
      "Prefer .woff2 for local fonts",
      "Measure before optimizing"
    ],
    "futureImprovements": [
      "Blog with MDX",
      "Dark mode toggle"
    ],
    "otherPics": [
      "/images/p5_screenshot1.png",
      "/images/p5_screenshot2.png"
    ],
    "date": "2024-01-01",
    "myRole": "Software Engineer"
  }
]