import Image from "next/image"
import { cn } from "@/lib/utils"

export function OxbirdWordmark({
  className,
  tone = "default",
}: {
  className?: string
  tone?: "default" | "inverted"
}) {
  if (tone === "inverted") {
    return (
      <span className={cn("inline-flex items-baseline font-heading text-xl font-bold tracking-tight", className)}>
        <span className="text-ink-panel-foreground">ox</span>
        <span className="text-primary">bird</span>
      </span>
    )
  }

  return (
    <span className={cn("relative block h-6 w-[105px]", className)}>
      <Image
        src="/images/oxbird-logo.png"
        alt="oxbird"
        fill
        priority
        sizes="105px"
        className="object-contain object-left"
      />
    </span>
  )
}
