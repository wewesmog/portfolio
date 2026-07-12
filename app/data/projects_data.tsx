export type ProjectCover = "echo" | "copilot" | "triviapals" | "mwalimu"

export type Project = {
  id: number
  title: string
  description: string
  status: "live" | "in progress" | "pilot" | "experiment" | "beta"
  cover: ProjectCover
  image?: string
  link?: string
  lab?: boolean
  about?: string
  problemStatement?: string
  Solution?: string | string[]
  Technologies?: string[]
  Results?: string[]
  Challenges?: string[]
  lessonsLearned?: string[]
  futureImprovements?: string[]
  date?: string
  myRole?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Echo",
    description:
      "Turn messy customer conversations into sentiment and themes you can segment on — built for CVM, not just dashboards.",
    status: "experiment",
    cover: "echo",
    link: "https://cvm-ai.com/lab/echo",
    lab: true,
    about:
      "Echo ingests surveys, tickets, reviews and call notes, scores sentiment with confidence, rolls up to customer level, and exports signals for lifecycle segments — e.g. declining sentiment + high value + renewal in 60 days.",
    problemStatement:
      "Lifecycle teams know tone matters, but manual review doesn't scale. Most sentiment tools stop at a chart instead of feeding targeting.",
    Solution: [
      "LangGraph pipeline: ingest → per-verbatim extract → deterministic rollups",
      "Structured outputs: sentiment, themes, churn risk, issues vs delights",
      "Customer-level roll-up for segment export",
      "FastAPI backend + Next.js dashboard wired end-to-end",
    ],
    Technologies: [
      "Next.js",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "OpenAI",
      "TypeScript",
      "Tailwind CSS",
    ],
    Results: [
      "End-to-end pipeline from CSV upload to insight dashboard",
      "Designed for segment export, not report-only VOC",
    ],
    Challenges: [
      "Keeping KPI math in code while LLM only structures per-verbatim records",
      "Handling messy real-world text without annotation armies",
    ],
    lessonsLearned: [
      "Aggregates should be deterministic — models structure rows, code counts them",
      "CVM teams need themes and churn risk, not positive/negative alone",
    ],
    futureImprovements: [
      "Dedup cache and parallel extract in the graph",
      "Warehouse connectors and segment push",
    ],
    myRole: "Product & full-stack / AI engineering",
  },
  {
    id: 2,
    title: "CVM Copilot",
    description:
      "Describe a base, goal and constraint — get segmented plays, treatment arms and offers you can actually ship.",
    status: "beta",
    cover: "copilot",
    link: "https://cvm-ai.com/lab/cvm-copilot",
    lab: true,
    about:
      "CVM Copilot compresses the gap between strategy deck and campaign build. You specify who you're targeting, what you're trying to move, and your constraints — it returns audience splits, treatment arms, offer ideas and a rollout schedule.",
    problemStatement:
      "Lifecycle planning still dies in spreadsheets before a single offer goes live. Teams rebuild segmentation logic every quarter.",
    Solution: [
      "Brief → structured play: segments, arms, offers, schedule",
      "Built for retention, upsell, win-back and churn reduction use cases",
      "Output designed to wire into existing CVM stacks, not slide ware",
    ],
    Technologies: [
      "Next.js",
      "FastAPI",
      "LangGraph",
      "TypeScript",
      "OpenAI",
      "Tailwind CSS",
    ],
    Results: [
      "Working private beta with shippable play output",
      "Validates AI-assisted planning for lifecycle teams",
    ],
    Challenges: [
      "Garbage-in still produces weak plays — guardrails and brief quality matter",
      "Balancing flexibility with telecom/fintech compliance constraints",
    ],
    lessonsLearned: [
      "CVM users want plans they can execute, not impressive prose",
      "Graph orchestration beats one-shot prompts for auditable flows",
    ],
    futureImprovements: [
      "Campaign execution hooks and warehouse-backed audiences",
      "Preset libraries per industry",
    ],
    myRole: "Product & AI engineering",
  },
  {
    id: 3,
    title: "Trivia Pals",
    description:
      "Gamified learning with dynamic, adaptive trivia — LangGraph-generated questions that keep learners engaged.",
    status: "live",
    cover: "triviapals",
    link: "https://github.com/yourname/trivia-pals",
    about:
      "Trivia Pals generates fresh, level-appropriate questions on the fly. LangGraph orchestrates generation, validation and scoring; difficulty adapts to mastery gaps while streaks and XP sustain motivation.",
    problemStatement:
      "Static question banks get stale quickly and don't adapt to learner progress, leading to poor engagement and limited retention.",
    Solution: [
      "LangGraph flow for question generation, validation and scoring",
      "Adaptive difficulty based on recent performance and mastery gaps",
      "Hinting and explanations generated per question",
      "Leaderboards, streaks, and XP for sustained motivation",
    ],
    Technologies: [
      "Next.js",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "OpenAI",
      "TypeScript",
    ],
    Results: [
      "Session length +28% versus static quiz baseline",
      "Repeat play increased with streak incentives",
      "Question rejection rate under 3% after validator tuning",
    ],
    Challenges: [
      "Guarding against repetitive or low-quality generations",
      "Balancing difficulty progression without frustrating learners",
    ],
    lessonsLearned: [
      "Small rubric-based validators dramatically improve question quality",
      "Mixing retrieval and generation produces more grounded explanations",
    ],
    futureImprovements: [
      "Multiplayer rooms and live tournaments",
      "Topic coverage dashboards for teachers",
    ],
    myRole: "Full-stack / AI product engineer",
  },
  {
    id: 4,
    title: "Mwalimu",
    description:
      "A Telegram tutor bot — LangGraph orchestrates lessons, quizzes, hints and progress tracking in chat.",
    status: "pilot",
    cover: "mwalimu",
    link: "https://github.com/yourname/mwalimu",
    about:
      "Mwalimu is an AI tutor on Telegram. Learners message the bot to study a topic, get adaptive quizzes, receive hints and explanations, and track mastery over time — all driven by a LangGraph state machine for auditable, step-by-step tutoring flows.",
    problemStatement:
      "Most learners live in messaging apps, but tutoring bots are either dumb FAQ trees or unstructured chat with no real progression.",
    Solution: [
      "Telegram bot interface — low friction, mobile-first",
      "LangGraph flows: assess level → teach → quiz → hint → score → next topic",
      "Session memory and mastery tracking per learner",
      "Structured outputs for question quality and safe tutoring boundaries",
    ],
    Technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Telegram Bot API",
      "PostgreSQL",
      "OpenAI",
    ],
    Results: [
      "Working POC with multi-step tutoring flows in Telegram",
      "Median response under 1s for common intents on tuned deployment",
    ],
    Challenges: [
      "Keeping graph flows testable vs free-form chat",
      "Message length limits and formatting on Telegram",
    ],
    lessonsLearned: [
      "Graph-based orchestration makes tutoring flows easier to debug and extend",
      "Users prefer short, step-by-step lessons over long AI monologues",
    ],
    futureImprovements: [
      "Voice notes and image-based questions",
      "Teacher dashboard for topic seeding and coverage",
      "Spaced repetition scheduling in the graph",
    ],
    date: "2024",
    myRole: "AI product engineer",
  },
]
