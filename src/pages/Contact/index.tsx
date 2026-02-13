import { Footer } from '../../components/Footer'

export function Contact() {
  return (
    <>
      <main className="pt-24 min-h-screen">
        <section className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-4xl text-balance">
            お問い合わせ
          </h1>
          <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">
            ご質問・ご相談など、お気軽にお問い合わせください。
          </p>
          <div className="mt-12">
            <a
              href="mailto:contact@joukyo-shuppan.jp"
              className="inline-block border border-foreground px-10 py-4 text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              メールでお問い合わせ
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
