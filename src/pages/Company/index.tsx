import { Footer } from '../../components/Footer'

export function Company() {
  return (
    <>
      <main className="pt-24 min-h-screen">
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
            Company
          </p>
          <h1 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-4xl">
            会社案内
          </h1>
          <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground max-w-2xl">
            情況出版についてご案内します。
          </p>
          <div className="mt-16 border-t border-border pt-12">
            <p className="text-sm font-light text-muted-foreground">
              準備中です。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
