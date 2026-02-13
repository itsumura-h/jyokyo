import { withBasePath } from '../lib/basePath'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={withBasePath('/images/humanities-forum.jpg')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
        fetchpriority="high"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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
      </div>
    </section>
  )
}
