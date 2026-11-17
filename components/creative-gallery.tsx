"use client"

import Image from "next/image"
import { useState } from "react"
import { Play } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { adVideos } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type Video = (typeof adVideos)[number]

function VideoFrame({ video, featured }: { video: Video; featured?: boolean }) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="flex flex-col gap-3">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-ink-panel">
        {playing ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={`${video.format}: ${video.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full"
            aria-label={`Play ${video.format.toLowerCase()}: ${video.title}`}
          >
            <Image
              src={video.poster}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-ink-panel/20 transition-colors duration-200 group-hover:bg-ink-panel/10" />
            <span
              className={cn(
                "absolute bottom-4 left-4 flex items-center justify-center rounded-full bg-card text-ink shadow-md",
                featured ? "size-16" : "size-12",
              )}
            >
              <Play className="size-5 translate-x-px fill-ink" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="text-[15px] text-muted-foreground">
        <span className="font-semibold text-ink">{video.format}</span> · {video.title}
      </figcaption>
    </figure>
  )
}

export function CreativeGallery() {
  const [first, second] = adVideos
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Reveal>
        <VideoFrame video={first} featured />
      </Reveal>
      <Reveal delay={120}>
        <VideoFrame video={second} featured />
      </Reveal>
    </div>
  )
}
