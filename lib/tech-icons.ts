// Centralized mapping from technology names to react-icons Simple Icons
// Keep this in sync with names used in your data (e.g., `Technologies` arrays)

import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiClickhouse,
  SiRedis,
  SiPrisma,
  SiTrpc,
  SiFastapi,
  SiOpenai,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiVercel,
 
} from "react-icons/si";

// Map display names (as they appear in your data) to icons
export const techIconMap: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  ClickHouse: SiClickhouse,
  Redis: SiRedis,
  Prisma: SiPrisma,
  tRPC: SiTrpc,
  FastAPI: SiFastapi,
  OpenAI: SiOpenai,
  Python: SiPython,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Vercel: SiVercel,

};

// Helper: find an icon by technology name; returns null if not found
export function getTechIcon(technologyName: string): IconType | null {
  return techIconMap[technologyName] ?? null;
}


