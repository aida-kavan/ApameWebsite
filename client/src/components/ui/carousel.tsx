
"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: 'rtl', loop: true })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="overflow-hidden relative" dir="rtl">
      <div className="flex" ref={emblaRef}>
        {children}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
        <Button size="icon" onClick={scrollNext}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
        <Button size="icon" onClick={scrollPrev}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
