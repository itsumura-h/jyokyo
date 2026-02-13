import { useEffect, useRef, useState } from 'preact/hooks'
import { BacknumberIssue } from './BacknumberIssue'
import { period6, placeholderCover } from '../data/backnumber'

const latestIssue = period6[0]

export function Latest() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
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
      id="latest"
      ref={sectionRef}
      className="border-t border-border bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
          Latest Issue
        </p>
        <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl">
          最新号
        </h2>

        <div
          className={`mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <BacknumberIssue
            issue={latestIssue}
            coverImage={latestIssue.coverImage || placeholderCover}
          />
        </div>
      </div>
    </section>
  )
}
