"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    category: "地政学",
    date: "2026.02.10",
    title: "エネルギー安全保障の新地図 ── 報じられない資源争奪の深層",
    excerpt:
      "再生可能エネルギーの急拡大の裏で進行するレアメタル争奪戦。大手メディアが伝えない各国の思惑と、企業が備えるべき戦略を読み解く。",
  },
  {
    category: "経済分析",
    date: "2026.02.05",
    title: "中央銀行の死角 ── 金融政策が見落とす構造的リスク",
    excerpt:
      "表面上は安定を見せる金融市場。しかし、その裏側では新たなシステミック・リスクが静かに蓄積されている。独自データから浮かぶ警告シグナル。",
  },
  {
    category: "テクノロジー",
    date: "2026.01.28",
    title: "AI規制の表と裏 ── 技術覇権をめぐる見えない戦争",
    excerpt:
      "各国で進むAI規制の背後にある真の動機とは。技術標準をめぐる覇権争いと、日本企業が取るべきポジショニングを分析する。",
  },
  {
    category: "社会構造",
    date: "2026.01.20",
    title: "人口動態が変える権力地図 ── 2030年の社会構造予測",
    excerpt:
      "少子高齢化の先に何が待つのか。人口動態の変化が政治・経済・社会に与える複合的影響を、独自のモデルで予測する。",
  },
]

export function Articles() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="articles"
      ref={sectionRef}
      className="border-t border-border bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
              Latest Analysis
            </p>
            <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl">
              最新分析
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            すべての記事を見る
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div
          className={`mt-12 divide-y divide-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {articles.map((article, index) => (
            <article
              key={index}
              className="group cursor-pointer py-8 transition-colors first:pt-0 hover:bg-background/50"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="flex shrink-0 items-center gap-4 md:w-48">
                  <span className="text-xs font-light tracking-wider text-accent">
                    {article.category}
                  </span>
                  <span className="text-xs font-light text-muted-foreground">
                    {article.date}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium leading-relaxed text-foreground transition-colors group-hover:text-accent md:text-xl">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                </div>
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground/0 transition-all group-hover:text-muted-foreground md:block" />
              </div>
            </article>
          ))}
        </div>

        <a
          href="#"
          className="mt-8 flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          すべての記事を見る
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
