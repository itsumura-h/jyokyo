import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-sm font-light uppercase tracking-[0.3em] text-background/70">
          Publishing × Think Tank
        </p>
        <h1 className="font-serif text-3xl font-medium leading-relaxed tracking-wide text-background md:text-5xl lg:text-6xl text-balance">
          社会の真実を直視し、
          <br />
          未来を読み解く
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-sm font-light leading-relaxed text-background/80 md:text-base">
          大手メディアが伝えない社会の深層構造を解き明かし、
          <br className="hidden md:inline" />
          あなたの人生とビジネスに真の洞察を届ける。
        </p>
        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="#philosophy"
            className="border border-background/40 px-8 py-3 text-sm font-light tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            理念を知る
          </a>
          <a
            href="#articles"
            className="px-8 py-3 text-sm font-light tracking-widest text-background/70 underline underline-offset-4 transition-colors hover:text-background"
          >
            最新分析
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="h-12 w-px bg-background/30" />
      </div>
    </section>
  )
}
