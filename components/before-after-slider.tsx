"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BeforeAfterItem {
  before: string
  after: string
}

interface BeforeAfterSliderProps {
  items: BeforeAfterItem[]
  alt: string
}

export function BeforeAfterSlider({
  items,
  alt,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const currentItem = items[activeIndex]

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    setPosition(50)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    setPosition(50)
  }

  useEffect(() => {
    if (isHovering || isDragging) return

    let frame = 0
    let direction = 1
    let current = 50

    const animate = () => {
      current += direction * 0.45

      if (current >= 72) direction = -1
      if (current <= 28) direction = 1

      setPosition(current)
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [isHovering, isDragging, activeIndex])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      updatePosition(e.clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      const touch = e.touches[0]
      if (!touch) return
      updatePosition(touch.clientX)
    }

    const stopDragging = () => {
      setIsDragging(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", stopDragging)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", stopDragging)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", stopDragging)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", stopDragging)
    }
  }, [isDragging])

  if (!items?.length || !currentItem) return null

  return (
    <div className="relative h-full w-full">
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            goToPrev()
          }}
          className={cn(
            "absolute left-[-28px] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full",
            "border border-white/15 bg-black/70 text-white/90 backdrop-blur-md transition-all duration-300",
            "hover:scale-105 hover:bg-black/85"
          )}
          aria-label="Comparação anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
          className={cn(
            "absolute right-[-28px] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full",
            "border border-white/15 bg-black/70 text-white/90 backdrop-blur-md transition-all duration-300",
            "hover:scale-105 hover:bg-black/85"
          )}
          aria-label="Próxima comparação"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      <div
        ref={containerRef}
        className="group/slider relative h-full w-full overflow-hidden rounded-lg bg-black select-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={(e) => {
          setIsDragging(true)
          updatePosition(e.clientX)
        }}
        onTouchStart={(e) => {
          const touch = e.touches[0]
          if (!touch) return
          setIsDragging(true)
          updatePosition(touch.clientX)
        }}
      >
        <Image
          key={`before-${activeIndex}`}
          src={currentItem.before}
          alt={`${alt} antes ${activeIndex + 1}`}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover/slider:scale-[1.02]"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-full">
            <Image
              key={`after-${activeIndex}`}
              src={currentItem.after}
              alt={`${alt} depois ${activeIndex + 1}`}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover/slider:scale-[1.02]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10" />

        <div
          className="absolute inset-y-0 z-20"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="relative h-full w-[2px] bg-white/95 shadow-[0_0_18px_rgba(255,255,255,0.95)]">
            <div className="absolute inset-0 bg-emerald-400/70 blur-[7px]" />
          </div>

          <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" />

          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 shadow-[0_0_30px_rgba(16,185,129,0.30)] backdrop-blur-xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/25 via-transparent to-cyan-400/25" />
            <ChevronLeft className="relative z-10 h-4 w-4 text-white/90" />
            <ChevronRight className="relative z-10 -ml-1 h-4 w-4 text-white/90" />
          </div>
        </div>

        <div className="absolute left-3 top-3 z-20 rounded-md border border-white/10 bg-black/45 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
          Antes
        </div>

        <div className="absolute right-3 top-3 z-20 rounded-md border border-white/10 bg-black/45 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
          Depois
        </div>

        {!isHovering && !isDragging && items.length === 1 && (
          <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[11px] text-white/80 backdrop-blur-md animate-pulse">
            Comparação automática
          </div>
        )}
      </div>

      {items.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 backdrop-blur-md">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(index)
                setPosition(50)
              }}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  : "bg-white/30 hover:bg-white/60"
              )}
              aria-label={`Ir para comparação ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}