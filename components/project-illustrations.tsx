import { cn } from "@/lib/utils"

export type ProjectCoverType = "echo" | "copilot" | "triviapals" | "mwalimu"

export function EchoIllustration({ className }: { className?: string }) {
  const stages = ["Ingest", "Score", "Customer", "Segment", "Play"]
  return (
    <div
      className={cn(
        "flex aspect-[16/10] w-full flex-col items-center justify-center bg-gradient-to-br from-sky-500/10 via-background to-primary/5 px-4",
        className
      )}
    >
      <svg viewBox="0 0 400 120" className="w-full max-w-sm" aria-hidden>
        {stages.map((stage, i) => {
          const x = 20 + i * 76
          return (
            <g key={stage}>
              <rect
                x={x}
                y={36}
                width={64}
                height={48}
                rx={10}
                fill="var(--card)"
                stroke="var(--border)"
                strokeWidth="1"
              />
              <text
                x={x + 32}
                y={58}
                textAnchor="middle"
                className="fill-foreground text-[11px] font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stage}
              </text>
              {i === 1 && (
                <text x={x + 32} y={72} textAnchor="middle" className="fill-sky-600 text-[9px]">
                  0.82 → 0.41
                </text>
              )}
              {i === 3 && (
                <text x={x + 32} y={72} textAnchor="middle" className="fill-primary text-[8px]">
                  high value + risk
                </text>
              )}
              {i < stages.length - 1 && (
                <path
                  d={`M ${x + 66} 60 L ${x + 72} 60`}
                  stroke="var(--primary)"
                  strokeWidth="1.5"
                  opacity="0.5"
                  markerEnd="url(#echo-arrow)"
                />
              )}
            </g>
          )
        })}
        <defs>
          <marker id="echo-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--primary)" opacity="0.6" />
          </marker>
        </defs>
        <text x={200} y={22} textAnchor="middle" className="fill-muted-foreground text-[10px]">
          verbatim → actionable segment
        </text>
      </svg>
    </div>
  )
}

export function CopilotIllustration({ className }: { className?: string }) {
  const steps = [
    { label: "Full base", w: 280 },
    { label: "Engaged 30d", w: 200 },
    { label: "Churn risk", w: 120 },
    { label: "Top 5%", w: 72 },
  ]
  return (
    <div
      className={cn(
        "flex aspect-[16/10] w-full flex-col items-center justify-center bg-gradient-to-br from-primary/8 via-background to-amber-500/8 px-6 py-4",
        className
      )}
    >
      <svg viewBox="0 0 320 140" className="w-full max-w-xs" aria-hidden>
        <text x={160} y={18} textAnchor="middle" className="fill-muted-foreground text-[10px]">
          base → shippable play
        </text>
        {steps.map((step, i) => {
          const y = 32 + i * 26
          return (
            <g key={step.label}>
              <rect
                x={(320 - step.w) / 2}
                y={y}
                width={step.w}
                height={22}
                rx={8}
                fill="var(--primary)"
                opacity={0.35 + i * 0.18}
              />
              <text
                x={160}
                y={y + 15}
                textAnchor="middle"
                className="fill-primary-foreground text-[10px] font-medium"
              >
                {step.label}
              </text>
            </g>
          )
        })}
        <circle cx={160} cy={128} r={6} fill="var(--primary)" opacity="0.9" />
        <text x={160} y={131} textAnchor="middle" className="fill-primary-foreground text-[6px] font-bold">
          AI
        </text>
      </svg>
    </div>
  )
}

/** Stacked quiz cards + many questions — adaptive trivia */
export function TriviaPalsIllustration({ className }: { className?: string }) {
  const cards = [
    { x: 48, y: 52, rot: -8, q: "?" },
    { x: 88, y: 44, rot: -3, q: "2+2?" },
    { x: 128, y: 38, rot: 2, q: "?" },
    { x: 168, y: 46, rot: 6, q: "Capital?" },
    { x: 208, y: 54, rot: 10, q: "?" },
  ]

  return (
    <div
      className={cn(
        "flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-violet-500/14 via-background to-fuchsia-500/8 px-4",
        className
      )}
    >
      <svg viewBox="0 0 360 140" className="w-full max-w-md" aria-hidden>
        <text x={180} y={20} textAnchor="middle" className="fill-muted-foreground text-[10px]">
          infinite questions · adaptive difficulty
        </text>

        {cards.map((card, i) => (
          <g key={i} transform={`rotate(${card.rot} ${card.x + 36} ${card.y + 28})`}>
            <rect
              x={card.x}
              y={card.y}
              width={72}
              height={56}
              rx={10}
              fill="var(--card)"
              stroke="var(--border)"
              strokeWidth="1"
              opacity={0.92 - i * 0.06}
            />
            <text
              x={card.x + 36}
              y={card.y + 34}
              textAnchor="middle"
              className="fill-violet-600 text-[13px] font-bold dark:fill-violet-400"
            >
              {card.q}
            </text>
            <circle cx={card.x + 58} cy={card.y + 14} r={8} fill="var(--primary)" opacity="0.2" />
            <text x={card.x + 58} y={card.y + 17} textAnchor="middle" className="fill-primary text-[7px] font-bold">
              AI
            </text>
          </g>
        ))}

        {/* Active question card (front) */}
        <rect x={118} y={62} width={124} height={68} rx={12} fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
        <text x={180} y={88} textAnchor="middle" className="fill-foreground text-[11px] font-semibold">
          Which planet is closest to the Sun?
        </text>
        {["A", "B", "C", "D"].map((opt, i) => (
          <rect
            key={opt}
            x={132 + i * 28}
            y={98}
            width={22}
            height={16}
            rx={4}
            fill={i === 1 ? "var(--primary)" : "var(--muted)"}
            opacity={i === 1 ? 0.35 : 1}
          />
        ))}
        {["A", "B", "C", "D"].map((opt, i) => (
          <text
            key={`${opt}-l`}
            x={143 + i * 28}
            y={109}
            textAnchor="middle"
            className="fill-foreground text-[8px] font-medium"
          >
            {opt}
          </text>
        ))}

        {/* Streak badge */}
        <rect x={268} y={28} width={72} height={32} rx={16} fill="var(--primary)" opacity="0.15" />
        <text x={304} y={42} textAnchor="middle" className="fill-primary text-[9px] font-semibold">
          🔥 12 streak
        </text>
        <text x={304} y={54} textAnchor="middle" className="fill-muted-foreground text-[8px]">
          +240 XP
        </text>
      </svg>
    </div>
  )
}

/** Telegram tutor — teach, quiz, hint flow */
export function MwalimuIllustration({ className }: { className?: string }) {
  const lessonSteps = ["Assess", "Teach", "Quiz", "Hint", "Score"]

  return (
    <div
      className={cn(
        "flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-sky-500/12 via-background to-emerald-500/8 px-4",
        className
      )}
    >
      <svg viewBox="0 0 380 140" className="w-full max-w-md" aria-hidden>
        <text x={190} y={18} textAnchor="middle" className="fill-muted-foreground text-[10px]">
          Telegram tutor · LangGraph lesson flow
        </text>

        {/* Phone / Telegram */}
        <rect x={24} y={28} width={100} height={100} rx={18} fill="var(--card)" stroke="var(--border)" />
        <rect x={24} y={28} width={100} height={22} rx={18} fill="#229ED9" opacity="0.85" />
        <text x={74} y={42} textAnchor="middle" className="fill-white text-[9px] font-semibold">
          Mwalimu
        </text>
        <rect x={34} y={58} width={52} height={18} rx={9} fill="var(--muted)" />
        <text x={42} y={70} className="fill-muted-foreground text-[7px]">
          Teach me algebra
        </text>
        <rect x={48} y={82} width={68} height={28} rx={10} fill="var(--primary)" opacity="0.2" />
        <text x={56} y={94} className="fill-foreground text-[6px] font-medium">
          Step 1: variables
        </text>
        <text x={56} y={104} className="fill-muted-foreground text-[6px]">
          x + 3 = 7 → x = 4
        </text>

        {/* Chalkboard / teach panel */}
        <rect x={140} y={32} width={120} height={88} rx={8} fill="#1e3a2f" opacity="0.92" />
        <rect x={148} y={40} width={104} height={4} rx={2} fill="white" opacity="0.15" />
        <text x={200} y={58} textAnchor="middle" className="fill-emerald-200 text-[10px] font-semibold">
          {`Today's lesson`}
        </text>
        <text x={156} y={74} className="fill-white/80 text-[7px]">
          • Introduce the concept
        </text>
        <text x={156} y={86} className="fill-white/80 text-[7px]">
          • Worked example
        </text>
        <text x={156} y={98} className="fill-white/80 text-[7px]">
          • Quick quiz (3 Qs)
        </text>
        <text x={156} y={110} className="fill-emerald-300/90 text-[7px]">
          • Hint if stuck
        </text>

        {/* LangGraph flow */}
        <rect x={276} y={36} width={80} height={84} rx={10} fill="var(--card)" stroke="var(--border)" />
        <text x={316} y={52} textAnchor="middle" className="fill-primary text-[8px] font-semibold">
          LangGraph
        </text>
        {lessonSteps.map((step, i) => (
          <g key={step}>
            <rect
              x={286}
              y={58 + i * 14}
              width={60}
              height={11}
              rx={4}
              fill="var(--primary)"
              opacity={0.12 + i * 0.08}
            />
            <text
              x={316}
              y={66 + i * 14}
              textAnchor="middle"
              className="fill-foreground text-[6px]"
            >
              {step}
            </text>
          </g>
        ))}

        <path
          d="M 124 78 L 136 78"
          stroke="var(--primary)"
          strokeWidth="1.5"
          opacity="0.4"
          markerEnd="url(#mw-arrow)"
        />
        <path d="M 260 76 L 272 76" stroke="var(--primary)" strokeWidth="1.5" opacity="0.4" />
        <defs>
          <marker id="mw-arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="var(--primary)" opacity="0.5" />
          </marker>
        </defs>
      </svg>
    </div>
  )
}

export function ProjectIllustration({ cover }: { cover: ProjectCoverType }) {
  switch (cover) {
    case "echo":
      return <EchoIllustration />
    case "copilot":
      return <CopilotIllustration />
    case "triviapals":
      return <TriviaPalsIllustration />
    case "mwalimu":
      return <MwalimuIllustration />
    default:
      return null
  }
}
