"use client"

import { useEffect, useRef, useState } from "react"

const principles = [
  {
    number: "1",
    title: "深層への視座",
    description:
      "表面的な報道の裏側にある構造的な力学を読み解き、社会が真に動いているメカニズムを明らかにします。",
  },
  {
    number: "2",
    title: "独立した知性",
    description:
      "特定の勢力や利害関係に縛られることなく、独立した立場から社会の真実を追求し、客観的な分析を提供します。",
  },
]

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      id="philosophy"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
        Our Philosophy
      </p>
      <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl text-balance">
        私たちの核心的価値
      </h2>

      <div
        className={`mt-16 grid gap-6 md:grid-cols-2 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="border border-border p-8 md:p-10 transition-colors hover:bg-card"
          >
            <span className="font-serif text-5xl font-medium text-foreground md:text-6xl">
              {principle.number}
            </span>
            <h3 className="mt-6 text-lg font-medium tracking-wide text-foreground">
              {principle.title}
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
