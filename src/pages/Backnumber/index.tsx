import { useEffect } from 'preact/hooks'
import { useRoute, useLocation } from 'preact-iso'
import { BacknumberIssue } from '../../components/BacknumberIssue'
import { period4, period5, period6, placeholderCover } from '../../data/backnumber'
import { withBasePath } from '../../lib/basePath'

const periodNavItems = [
  { id: '6', label: '第6期（2023年-2026年）' },
  { id: '5', label: '第5期（2018年-2022年）' },
  { id: '4', label: '第4期（2012年-2018年）' },
  { id: '3', label: '第3期（2000年-2011年）' },
  { id: '2', label: '第2期（1900年-2000年）' },
  { id: '1', label: '第1期（1968年-1976年）' },
]

export function Backnumber() {
  const { params } = useRoute()
  const { route } = useLocation()
  const period = params.period ?? '6'

  useEffect(() => {
    if (!params.period) {
      route(withBasePath('/backnumber/6'), true)
    }
  }, [params.period, route])

  const currentPeriod = periodNavItems.find((item) => item.id === period) ?? periodNavItems[0]
  return (
    <>
      <main className="pt-24 min-h-screen">
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
            Back Number
          </p>
          <h1 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-4xl">
            バックナンバー
          </h1>
          <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground max-w-2xl">
            「情況」の過去の号をご覧いただけます。
          </p>

          {/* 期別ナビゲーション */}
          <nav
            className="mt-12 border-y border-border bg-card"
            aria-label="期別ナビゲーション"
          >
            <div className="flex flex-wrap items-stretch justify-start gap-x-4 md:gap-x-6 overflow-x-auto">
              {periodNavItems.map((item) => (
                <a
                  key={item.id}
                  href={withBasePath(`/backnumber/${item.id}`)}
                  className={`shrink-0 px-4 py-4 md:px-6 text-sm font-light tracking-wide transition-colors hover:text-foreground md:py-4 ${
                    period === item.id ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                  aria-current={period === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* 選択中の期のバックナンバー一覧 */}
          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-serif text-lg font-medium text-foreground md:text-xl">
              {currentPeriod.label}
            </h2>

            {period === '6' && (
              <div className="mt-12 space-y-24 md:space-y-32">
                {period6.map((issue) => (
                  <BacknumberIssue
                    key={issue.id}
                    issue={issue}
                    coverImage={issue.coverImage || placeholderCover}
                  />
                ))}
              </div>
            )}

            {period === '5' && (
              <div className="mt-12 space-y-24 md:space-y-32">
                {period5.map((issue) => (
                  <BacknumberIssue
                    key={issue.id}
                    issue={issue}
                    coverImage={issue.coverImage || placeholderCover}
                  />
                ))}
              </div>
            )}

            {period === '4' && (
              <div className="mt-12 space-y-24 md:space-y-32">
                {period4.map((issue) => (
                  <BacknumberIssue
                    key={issue.id}
                    issue={issue}
                    coverImage={issue.coverImage || placeholderCover}
                  />
                ))}
              </div>
            )}

            {period !== '6' && period !== '5' && period !== '4' && (
              <p className="mt-8 text-sm font-light text-muted-foreground">
                準備中です。
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
