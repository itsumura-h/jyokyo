import Link from "next/link"

const footerNav = {
  navigation: [
    { label: "理念", href: "#philosophy" },
    { label: "事業領域", href: "#services" },
    { label: "最新分析", href: "#articles" },
    { label: "私たちについて", href: "#about" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  legal: [
    { label: "プライバシーポリシー", href: "#" },
    { label: "利用規約", href: "#" },
    { label: "特定商取引法に基づく表示", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-xl font-bold tracking-widest text-background"
            >
              VERITAS
            </Link>
            <p className="mt-4 text-xs font-light leading-relaxed text-background/50">
              社会の真実を直視し、
              <br />
              未来を読み解く。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-background/40">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="フッターナビゲーション">
              {footerNav.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-light text-background/60 transition-colors hover:text-background"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-background/40">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="法的情報">
              {footerNav.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-light text-background/60 transition-colors hover:text-background"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-background/40">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:contact@veritas-institute.jp"
                className="text-sm font-light text-background/60 transition-colors hover:text-background"
              >
                contact@veritas-institute.jp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-background/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs font-light text-background/30">
            {'© 2026 VERITAS Institute. All rights reserved.'}
          </p>
          <p className="text-xs font-light text-background/30">
            東京都千代田区
          </p>
        </div>
      </div>
    </footer>
  )
}
