export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
          Contact
        </p>
        <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl text-balance">
          真実を共に追求する
          <br />
          パートナーをお待ちしています
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
          法人のお客様向けのブリーフィング、共同研究、
          メディア掲載のご相談など、お気軽にお問い合わせください。
        </p>
        <div className="mt-10">
          <a
            href="mailto:contact@veritas-institute.jp"
            className="inline-block border border-foreground px-10 py-4 text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  )
}
