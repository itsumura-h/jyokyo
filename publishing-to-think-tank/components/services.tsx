"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const services = [
  {
    image: "/images/research.jpg",
    title: "独自調査レポート",
    description:
      "政治・経済・国際情勢の深層を独自取材と分析で解き明かす、会員限定の調査レポートを定期配信。",
  },
  {
    image: "/images/analysis.jpg",
    title: "メディア批評・検証",
    description:
      "大手メディアの報道を独自の視点で検証し、伝えられない事実や歪められた情報を明らかにします。",
  },
  {
    image: "/images/insight.jpg",
    title: "経営者向けブリーフィング",
    description:
      "社会の構造変化がビジネスに与える影響を分析し、経営判断に活かせるインテリジェンスを提供。",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
        Our Services
      </p>
      <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl text-balance">
        包括的なアプローチで
        <br />
        社会の深層に迫る
      </h2>

      <div
        className={`mt-16 grid gap-6 md:grid-cols-3 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay with plus icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-background/0 text-background/0 transition-all group-hover:border-background/80 group-hover:text-background/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="mt-5 text-base font-medium tracking-wide text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
