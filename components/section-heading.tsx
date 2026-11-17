import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  id,
  tone = "light",
}: {
  eyebrow?: string
  title: string
  intro?: string
  className?: string
  id?: string
  tone?: "light" | "dark"
}) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-4", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", tone === "dark" && "text-[#8fcfa6]")}>{eyebrow}</p>
      )}
      <h2
        id={id}
        className={cn(
          "text-balance text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[40px]",
          tone === "dark" ? "text-ink-panel-foreground" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "text-pretty text-[17px] leading-relaxed md:text-lg",
            tone === "dark" ? "text-ink-panel-muted" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

export function PageIntro({
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  eyebrow: string
  title: string
  intro: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex max-w-3xl flex-col gap-5", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.025em] text-ink md:text-[52px]">
        {title}
      </h1>
      <p className="max-w-2xl text-pretty text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">{intro}</p>
      {children}
    </div>
  )
}
