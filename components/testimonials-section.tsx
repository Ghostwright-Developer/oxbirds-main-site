import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { testimonials } from "@/lib/site-config"

export function TestimonialsSection({ title = "What clients say." }: { title?: string }) {
  const [featured, ...rest] = testimonials

  return (
    <section aria-labelledby="testimonials-title" className="border-y border-border bg-card">
      <div className="container-site py-16 md:py-24">
        <h2 id="testimonials-title" className="sr-only">
          {title}
        </h2>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="flex flex-col gap-6">
              <blockquote className="text-balance text-[28px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink md:text-[36px]">
                {`“${featured.quote}”`}
              </blockquote>
              <figcaption className="flex items-center gap-3 text-base text-muted-foreground">
                <Image
                  src={featured.image || "/placeholder.svg"}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-full border border-border object-cover"
                />
                <span>
                  <span className="font-semibold text-ink">{featured.name}</span> · {featured.role}, {featured.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="flex flex-col lg:col-span-5">
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="flex flex-col gap-3 border-t border-border py-6 last:border-b">
                  <blockquote className="text-lg leading-relaxed text-ink">{`“${t.quote}”`}</blockquote>
                  <figcaption className="flex items-center gap-3 text-[15px] text-muted-foreground">
                    <Image
                      src={t.image || "/placeholder.svg"}
                      alt=""
                      aria-hidden="true"
                      width={40}
                      height={40}
                      className="size-10 shrink-0 rounded-full border border-border object-cover"
                    />
                    <span>
                      <span className="font-semibold text-ink">{t.name}</span> · {t.role}, {t.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
