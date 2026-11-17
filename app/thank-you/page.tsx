import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your message has been sent to oxbird. We'll be in touch soon.",
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-panel py-24 text-ink-panel-foreground sm:py-32">
      <div className="dark-panel-radial pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-site relative flex flex-col items-center gap-6 text-center">
        <Reveal className="flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="size-9" aria-hidden="true" strokeWidth={1.75} />
        </Reveal>
        <Reveal delay={80} className="flex max-w-xl flex-col gap-4">
          <h1 className="font-heading text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Thanks for reaching out.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-ink-panel-muted">
            Your message is on its way to Daniel. He personally reviews every inquiry and will reply directly, usually
            within one business day.
          </p>
        </Reveal>
        <Reveal delay={160} className="flex flex-col items-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="light">
            Back to home
          </ButtonLink>
          <ButtonLink href="/results" variant="outline-light">
            See client results
          </ButtonLink>
        </Reveal>
        <Reveal delay={220} className="pt-4 text-sm text-ink-panel-muted">
          {"Prefer to talk now? Call "}
          <a href={siteConfig.phone.href} className="font-semibold text-ink-panel-foreground underline underline-offset-4 hover:text-primary">
            {siteConfig.phone.display}
          </a>
          .
        </Reveal>
      </div>
    </section>
  )
}
