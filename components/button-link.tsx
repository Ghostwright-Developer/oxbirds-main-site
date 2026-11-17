import Link from "next/link"
import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-[#4b9a5a]",
  outline: "border border-input bg-card text-ink hover:border-ink",
  light: "bg-ink-panel-foreground text-ink-panel hover:opacity-90",
  "outline-light":
    "border border-ink-panel-foreground/30 text-ink-panel-foreground hover:border-ink-panel-foreground",
  ghostLight: "border border-ink-panel-foreground/40 text-ink-panel-foreground hover:border-ink-panel-foreground",
} as const

const sizes = {
  sm: "h-11 px-4 text-[15px]",
  md: "h-12 px-5 text-base",
} as const

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
}) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(96,175,109,0.22)] active:scale-[0.98] motion-reduce:transform-none",
    variants[variant],
    sizes[size],
    className,
  )
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}

export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary",
        className,
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}
