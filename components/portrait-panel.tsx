import { cn } from "@/lib/utils"

export function PortraitPanel({
  className,
  priority = false,
  position = "50% 100%",
}: {
  className?: string
  priority?: boolean
  sizes?: string
  position?: string
}) {
  return (
    <div className={cn("relative", className)}>
      <img
        src="/images/daniel-portrait-new.png"
        alt="Daniel Wilkinson, founder of oxbird"
        width={1190}
        height={1322}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={{ objectPosition: position }}
        className="absolute inset-0 size-full object-contain object-bottom"
      />
    </div>
  )
}
