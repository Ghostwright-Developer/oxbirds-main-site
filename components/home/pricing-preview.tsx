import { Check } from "lucide-react"
import { ButtonLink, TextLink } from "@/components/button-link"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { onboardingCta, pricing, terms, tierCta } from "@/lib/site-config"

export function PricingPreview() {
  return (
    <section aria-labelledby="pricing-preview-title" className="container-site py-16 md:py-24">
      <div className="flex flex-col gap-10">
        <Reveal className="flex flex-col gap-6 lg:max-w-xl">
          <SectionHeading id="pricing-preview-title" title="Straightforward management pricing." />
          <p className="text-base leading-relaxed text-muted-foreground">
            Advertising spend is separate from our management fee. {terms.charAt(0).toUpperCase() + terms.slice(1)}
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-primary/40 bg-accent p-6 md:p-8">
              <div className="flex flex-col gap-2">
                <p className="eyebrow">Step one</p>
                <h3 className="text-2xl font-bold text-ink">Onboarding</h3>
                <p className="text-[48px] font-bold leading-none tracking-[-0.03em] text-ink tabular-nums">
                  {pricing.onboarding.price}
                </p>
                <p className="text-[15px] text-muted-foreground">{pricing.onboarding.turnaround}</p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {pricing.onboarding.inclusions.slice(0, 5).map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
              <ButtonLink href={onboardingCta.href} variant="outline" className="mt-auto">
                {onboardingCta.label}
              </ButtonLink>
            </div>
          </Reveal>

          {pricing.tiers.map((t, i) => {
            const cta = tierCta[t.id]
            const featured = t.id === "dominate"
            return (
              <Reveal key={t.id} delay={(i + 1) * 100} className="h-full">
                <div
                  className={
                    featured
                      ? "flex h-full flex-col gap-6 rounded-2xl bg-ink-panel p-6 text-ink-panel-foreground md:p-8"
                      : "flex h-full flex-col gap-6 rounded-2xl border border-primary/35 bg-secondary p-6 md:p-8"
                  }
                >
                  <div className="flex flex-col gap-2">
                    <p className={featured ? "eyebrow text-ink-panel-muted" : "eyebrow"}>
                      {featured ? "Higher ad spend" : "Monthly management"}
                    </p>
                    <h3 className={featured ? "text-2xl font-bold text-ink-panel-foreground" : "text-2xl font-bold text-ink"}>
                      {t.name}
                    </h3>
                    <p
                      className={
                        featured
                          ? "text-[48px] font-bold leading-none tracking-[-0.03em] text-ink-panel-foreground tabular-nums"
                          : "text-[48px] font-bold leading-none tracking-[-0.03em] text-ink tabular-nums"
                      }
                    >
                      {t.price}
                      <span
                        className={
                          featured
                            ? "text-lg font-medium tracking-normal text-ink-panel-muted"
                            : "text-lg font-medium tracking-normal text-muted-foreground"
                        }
                      >
                        /month
                      </span>
                    </p>
                    <p
                      className={
                        featured
                          ? "w-fit rounded-md bg-ink-panel-foreground/10 px-2.5 py-1 text-[15px] font-semibold text-ink-panel-foreground"
                            : "w-fit rounded-md bg-panel px-2.5 py-1 text-[15px] font-semibold text-white"
                      }
                    >
                      {t.threshold}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {pricing.sharedInclusions.slice(0, 4).map((i) => (
                      <li
                        key={i}
                        className={
                          featured
                            ? "flex items-start gap-2.5 text-[15px] text-ink-panel-foreground"
                            : "flex items-start gap-2.5 text-[15px] text-ink"
                        }
                      >
                        <Check
                          className={featured ? "mt-0.5 size-4 shrink-0 text-ink-panel-foreground" : "mt-0.5 size-4 shrink-0 text-primary"}
                          aria-hidden="true"
                        />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={cta.href} variant={featured ? "light" : "outline"} className="mt-auto">
                    {cta.label}
                  </ButtonLink>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] text-muted-foreground">{pricing.custom}</p>
          <TextLink href="/pricing">View full pricing details</TextLink>
        </div>
      </div>
    </section>
  )
}
