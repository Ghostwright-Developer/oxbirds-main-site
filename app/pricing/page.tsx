import { Check } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { CtaSection } from "@/components/cta-section"
import { FaqList } from "@/components/faq-list"
import { PageIntro, SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { pageMetadata } from "@/lib/page-metadata"
import { pricing, tierCta } from "@/lib/site-config"

export const metadata = pageMetadata(
  "Pricing",
  "$795 one-time onboarding. Grow $695/month up to $5,000/month in ad spend; Dominate $995/month up to $10,000/month. No long-term contracts.",
  "/pricing",
)

const faqs = [
  { q: "Is advertising spend included?", a: "No. Advertising spend and our management fee are separate." },
  { q: "Is there a long-term contract?", a: "No. You can cancel anytime." },
  {
    q: "What if our ad spend is above $10,000 per month?",
    a: "We'll discuss the scope and provide a custom quote.",
  },
  {
    q: "How do we choose the channels?",
    a: "We discuss your goals, market and budget before recommending the mix.",
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="container-site pb-12 pt-12 md:pb-16 md:pt-20">
        <PageIntro
          eyebrow="Our pricing"
          title="Clear fees for ongoing advertising management."
          intro="Know the management fee before we start. No long-term contracts; cancel anytime."
        />
      </section>

      <section aria-labelledby="onboarding-title" className="container-site pb-12">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:p-10 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-4">
              <p className="eyebrow">Step one</p>
              <h2 id="onboarding-title" className="text-[26px] font-bold tracking-[-0.02em] text-ink md:text-[32px]">
                One-time onboarding.
              </h2>
              <p className="text-[48px] font-bold leading-none tracking-[-0.03em] text-ink tabular-nums">
                {pricing.onboarding.price}
              </p>
              <p className="text-[15px] text-muted-foreground">{pricing.onboarding.turnaround}</p>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-8">
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Research, account setup, ads, reporting, technical integrations, conversion tracking and a kickoff meeting.
              </p>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {pricing.onboarding.inclusions.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-ink">
                    <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="monthly-title" className="container-site pb-16 md:pb-24">
        <div className="flex flex-col gap-3 pb-8 pt-4">
          <p className="eyebrow">Then, each month</p>
          <h2 id="monthly-title" className="text-[26px] font-bold tracking-[-0.02em] text-ink md:text-[32px]">
            Monthly management.
          </h2>
          <p className="max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            The tiers reflect the monthly advertising spend we manage. Advertising spend is separate from our management
            fee.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pricing.tiers.map((t, idx) => {
            const cta = tierCta[t.id]
            return (
              <Reveal key={t.id} delay={idx * 100}>
                <div className="flex flex-col gap-6 rounded-2xl border border-primary/35 bg-secondary p-6 shadow-[0_18px_50px_rgba(16,38,30,0.06)] md:p-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-ink">{t.name}</h3>
                    <p className="text-[48px] font-bold leading-none tracking-[-0.03em] text-ink tabular-nums">
                      {t.price}
                      <span className="text-lg font-medium tracking-normal text-muted-foreground">/month</span>
                    </p>
                    <p className="w-fit rounded-md bg-panel px-2.5 py-1 text-[15px] font-semibold text-white">
                      {t.threshold}
                    </p>
                  </div>
                  <ButtonLink href={cta.href} variant="primary" className="mt-auto">
                    {cta.label}
                  </ButtonLink>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-6 grid gap-6 rounded-2xl border border-primary/20 bg-accent p-6 md:p-8 lg:grid-cols-12">
            <p className="text-lg font-bold text-ink lg:col-span-3">Both tiers include</p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
              {pricing.sharedInclusions.map((i) => (
                <li key={i} className="flex items-start gap-3 text-base text-ink">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-6 text-[17px] font-medium text-ink">
          More than $10,000/month in ad spend? {"We'll provide a custom quote."}
        </p>
      </section>

      <section aria-labelledby="pricing-faq-title" className="border-t border-border">
        <div className="container-site grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading id="pricing-faq-title" title="Pricing questions." />
          </Reveal>
          <div className="lg:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <CtaSection title="Let's discuss the right scope for your account." showCall={false} />
    </>
  )
}
