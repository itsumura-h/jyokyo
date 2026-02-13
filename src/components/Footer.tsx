import { withBasePath } from '../lib/basePath'

const footerNav = {
  navigation: [
    { label: 'バックナンバー', href: '/backnumber' },
    { label: '書籍', href: '/books' },
    { label: '会社案内', href: '/company' },
    { label: '映像', href: '/videos' },
    { label: 'お問い合わせ', href: 'https://docs.google.com/forms/d/e/1FAIpQLScnSldFZIH3CQFRrETxLqL1SKdGTPCQGTuEurYTDAKxGRypIA/viewform' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href={withBasePath('/')}
              className="font-serif text-xl font-bold tracking-widest text-background"
            >
              情況出版
            </a>
            <p className="mt-4 text-xs font-light leading-relaxed text-background/50">
              変革のための総合誌
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-background/40">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="フッターナビゲーション">
              {footerNav.navigation.map((item) => (
                <a
                  key={item.href}
                  href={withBasePath(item.href)}
                  className="text-sm font-light text-background/60 transition-colors hover:text-background"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs font-light text-background/30">
            © 2026 情況出版. All rights reserved.
          </p>
          <p className="text-xs font-light text-background/30">
            東京都千代田区
          </p>
        </div>
      </div>
    </footer>
  )
}
