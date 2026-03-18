"use client"

const influencerImages = [
  {
    src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmJlMzN6cmRsZ25mamRxMm1oazI5NzQ0aDUzdjU3djVocWd0M3V3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nujkTnBawybWpcfrBF/giphy.gif",
    alt: "Influencer virtual em ambiente elegante",
  },
  {
    src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9rNTJxcXNlaW9uaW8wYXh3dm9vZXF4MDhhMHdjOGo5cGt0bGQ4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PJ65Cbcw9JRavIx0dk/giphy.gif",
    alt: "Influencer virtual em roupa formal",
  },
  {
    src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRpdXRmbWRybGxqZXFjaWQyeml1bTFnMjAzNHplamxjb2NieG1iaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v9APgfFwggOM79coBi/giphy.gif",
    alt: "Influencer virtual em pose relaxada",
  },
  {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDNqZXc1eG14MjVsZm1kMWNiOW9mZ292emdla3AxZjM0aXFjaGpyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6aFklpKVyv7MMZPFte/giphy.gif",
    alt: "Influencer virtual em giro 360",
  },
]

export function InfluencerShowcase() {
  return (
    <section id="influencer" className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Criação de Personagens
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Crie a sua própria Influenciadora!
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Aprenda métodos para criar influencers e personagens consistentes que estarão prontos pra fazer tudo o que você quiser.
          </p>
        </div>

        {/* Image Grid - 4 columns */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {influencerImages.map((image, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <article className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-border/60 bg-card/40 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 hover-lift glass">
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
