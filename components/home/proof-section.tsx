import { CaseEvidence } from "@/components/case-evidence"
import { TextLink } from "@/components/button-link"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { results } from "@/lib/site-config"

const featuredIds = new Set(["engraving", "barber", "dental"])

export function ProofSection() {
  const featuredResults = results.filter((result) => featuredIds.has(result.id))

  return (
    <section aria-labelledby="proof-title" className="border-y border-border bg-card">
      <div className="container-site flex flex-col gap-10 py-16 md:py-24">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="proof-title"
            title="Selected campaign results"
            intro="A closer look at campaign results across different businesses."
          />
          <TextLink href="/results">View all six results</TextLink>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredResults.map((result, i) => (
            <Reveal key={result.id} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-primary/30 bg-secondary p-5 transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg motion-reduce:transform-none md:p-6">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-accent-foreground">
                    {result.platform} · {result.descriptor}
                  </p>
                  <h3 className="text-balance text-[24px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                    {result.heading}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{result.narrative}</p>
                </div>
                <div className="mt-auto">
                  <CaseEvidence src={result.image.src} alt={result.image.alt} caption={result.sourceCaption} />
                </div>
                <TextLink href={`/results#case-${result.id}`}>Read the full case</TextLink>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Results vary with the account, business, competition, budget and starting point.
        </p>
      </div>
    </section>
  )
}
