import { useEffect, useRef, useState } from 'preact/hooks'

const stats = [
  { value: '30+', label: '年の出版実績' },
  { value: '500+', label: '独自調査レポート' },
  { value: '12,000+', label: '会員読者数' },
  { value: '50+', label: '専門アナリスト' },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
            About Us
          </p>
          <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl text-balance">
            出版社から
            <br />
            シンクタンクへ
          </h2>
          <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">
            私たちは30年以上にわたり、書籍・雑誌を通じて社会の深層を伝えてきました。
            しかし、情報環境が激変する今、より能動的に社会を分析し、
            読者と共に考える場が必要だと確信しました。
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            出版で培った取材力・編集力をベースに、データ分析・専門家ネットワーク・
            独自調査を加え、真に価値ある知のプラットフォームとして進化します。
            私たちが目指すのは、読者が社会の本質を理解し、
            自らの判断で未来を切り拓く力を得ることです。
          </p>
        </div>

        <div
          className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-border pt-6">
              <span className="font-serif text-3xl font-medium text-foreground md:text-4xl">
                {stat.value}
              </span>
              <p className="mt-2 text-xs font-light text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
