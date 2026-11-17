import Image from "next/image"
import { cn } from "@/lib/utils"

const logos: Record<string, string> = {
  "Google Ads": "/images/logos/google-ads.png",
  Google: "/images/logos/google-ads.png",
  Meta: "/images/logos/meta-ads.png",
  "Meta Ads": "/images/logos/meta-ads.png",
  "Microsoft Ads": "/images/logos/microsoft-ads.png",
  LinkedIn: "/images/logos/linkedin-ads.png",
  "LinkedIn Ads": "/images/logos/linkedin-ads.png",
}

export function PlatformLogo({
  platform,
  className,
  size = 20,
}: {
  platform: string
  className?: string
  size?: number
}) {
  const src = logos[platform]
  if (!src) return null

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={cn("shrink-0 rounded-[5px]", className)}
      style={{ width: size, height: size }}
    />
  )
}
