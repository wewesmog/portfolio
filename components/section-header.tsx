import { cn } from "@/lib/utils"

export function SectionHeader({
  title,
  description,
  id,
  className,
}: {
  title: string
  description?: string
  id?: string
  className?: string
}) {
  return (
    <div className={cn("mb-5", className)}>
      <h2 id={id} className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
