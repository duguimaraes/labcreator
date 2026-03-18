"use client"

import { useState, useRef, useCallback } from "react"

const comparisons = [
  {
    id: 1,
    title: "Arquitetura 3D",
    before: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=30&blur=50",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=95",
  },
  {
    id: 2,
    title: "Retrato",
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=30&blur=50",
    after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=95",
  },
]

function ImageComparisonSlider({
  before,
  after,
  title,
}: {
  before: string
  after: string
  title: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
      setSliderPosition(percent)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 transition-all duration-300 hover:border-primary/40">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After image (background) */}
        <img
          src={after}
          alt={`${title} - Depois`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${title} - Antes`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "blur(1px) brightness(0.9)" }}
            draggable={false}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-lg"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          {/* Slider handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black/50 backdrop-blur-sm shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="m9 18 6-6-6-6" />
              <path d="m15 6-6 6 6 6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 z-20 rounded-md bg-black/60 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-sm">
          ANTES
        </div>
        <div className="absolute bottom-4 right-4 z-20 rounded-md bg-primary/80 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-sm">
          DEPOIS
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
    </div>
  )
}

export function UpscalingShowcase() {
  return (
    <section id="upscaling" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Upscaling
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            De mais detalhamento as suas imagens!
          </h2>
          <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Voce vai aprender a usar o melhor metodo existente para melhorar seus renders 3D ou para dar mais realismo para imagens geradas por IA. Arraste o slider para ver a diferenca!
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {comparisons.map((comparison, index) => (
            <div
              key={comparison.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <ImageComparisonSlider
                before={comparison.before}
                after={comparison.after}
                title={comparison.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
