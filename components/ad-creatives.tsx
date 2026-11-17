import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { adCreatives } from "@/lib/site-config"

export function AdCreatives() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[15px] leading-relaxed text-muted-foreground">
        Standard 336×280 HTML5 display banners, built for remarketing and placement across the Google Display
        Network.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {adCreatives.map((ad, i) => (
          <Reveal key={ad.title} delay={i * 90}>
            <figure className="flex flex-col gap-3">
              <div className="flex items-center justify-center rounded-xl border border-border bg-muted p-6">
                <div className="relative aspect-[336/280] w-full max-w-[336px] overflow-hidden rounded-md border border-border bg-card shadow-sm">
                  <Image
                    src={ad.src || "/placeholder.svg"}
                    alt={ad.alt}
                    fill
                    unoptimized
                    sizes="336px"
                    className="object-contain"
                  />
                </div>
              </div>
              <figcaption className="text-[15px] text-muted-foreground">
                <span className="font-semibold text-ink">{ad.industry}</span> · {ad.title}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
