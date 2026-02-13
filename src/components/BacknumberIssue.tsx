import type { BacknumberIssue as BacknumberIssueType } from '../data/backnumber'

interface BacknumberIssueProps {
  issue: BacknumberIssueType
  coverImage?: string
}

export function BacknumberIssue({ issue, coverImage }: BacknumberIssueProps) {
  return (
    <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-16 lg:gap-20">
      {/* 表紙・価格・注文 */}
      <div className="flex flex-col gap-6">
        <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden md:max-w-none">
          {coverImage ? (
            <img
              src={coverImage}
              alt={`${issue.title} 表紙`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-xs font-light text-muted-foreground">
                表紙
              </span>
            </div>
          )}
        </div>
        <div className="border-t border-border pt-6">
          <p className="font-serif text-2xl font-medium text-foreground">
            {issue.title}
          </p>
          <p className="mt-2 text-sm font-light text-muted-foreground">
            価格：{issue.price}
          </p>
          {(issue.mosakushaUrl || issue.amazonUrl) && (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {issue.mosakushaUrl && (
                <a
                  href={issue.mosakushaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-foreground px-6 py-3 text-center text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  模索舎で注文
                </a>
              )}
              {issue.amazonUrl && (
                <a
                  href={issue.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-foreground px-6 py-3 text-center text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Amazonで注文
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 目次 */}
      <div>
        <h3 className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          【目次】
        </h3>
        <div className="mt-8 divide-y divide-border">
          {issue.tocSections.map((section) => (
            <div key={section.title} className="py-8 first:pt-0">
              <h4 className="font-serif text-lg font-medium text-foreground md:text-xl">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-light leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
