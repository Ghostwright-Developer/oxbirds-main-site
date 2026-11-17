import { Phone } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { Reveal } from "@/components/reveal"
import { callCta, emailCta } from "@/lib/site-config"

export function CtaSection({
  title = "What would you like your advertising to do better?",
  body = "Send your business website and a short note about your current campaigns and goals.",
  primary = emailCta,
  showCall = true,
}: {
  title?: string
  body?: string
  primary?: { label: string; href: string }
  showCall?: boolean
}) {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-ink-panel">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_77%_23%,rgba(96,175,109,0.2),transparent_38%),radial-gradient(circle_at_14%_76%,rgba(72,125,91,0.12),transparent_36%),linear-gradient(135deg,#0b1914,#10261e)]"
      />
      <Reveal className="container-site relative flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2
            id="cta-title"
            className="text-balance font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-ink-panel-foreground md:text-[40px]"
          >
            {title}
          </h2>
          {body && <p className="text-pretty text-[17px] leading-relaxed text-ink-panel-muted md:text-lg">{body}</p>}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
          {showCall && (
            <ButtonLink href={callCta.href} variant="outline-light">
              <Phone className="size-4" aria-hidden="true" />
              {callCta.label}
            </ButtonLink>
          )}
        </div>
      </Reveal>
    </section>
  )
}
