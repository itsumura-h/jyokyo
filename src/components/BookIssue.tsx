import type { Book } from '../data/books'
import { withBasePath } from '../lib/basePath'

interface BookIssueProps {
  book: Book
  coverImage?: string
}

export function BookIssue({ book, coverImage }: BookIssueProps) {
  return (
    <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-16 lg:gap-20">
      {/* 表紙・価格・注文 */}
      <div className="flex flex-col gap-6">
        <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden md:max-w-none">
          {coverImage ? (
            <img
              src={withBasePath(coverImage)}
              alt={`${book.title} 表紙`}
              className="h-full w-full object-contain"
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
            {book.title}
          </p>
          {book.price && (
            <p className="mt-2 text-sm font-light text-muted-foreground">
              価格：{book.price}
            </p>
          )}
          {(book.mosakushaUrl || book.amazonUrl || book.hontoUrl || book.externalUrl) && (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {book.mosakushaUrl && (
                <a
                  href={book.mosakushaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-foreground px-6 py-3 text-center text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  模索舎で注文
                </a>
              )}
              {book.amazonUrl && (
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-foreground px-6 py-3 text-center text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Amazonで注文
                </a>
              )}
              {book.hontoUrl && (
                <a
                  href={book.hontoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-foreground px-6 py-3 text-center text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  hontoで注文
                </a>
              )}
              {book.externalUrl && (
                <a
                  href={book.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-foreground px-6 py-3 text-center text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  詳細ページ
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 目次・説明 */}
      <div>
        {book.tocSections && book.tocSections.length > 0 && (
          <>
            <h3 className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              【目次】
            </h3>
            <div className="mt-8 divide-y divide-border">
              {book.tocSections.map((section) => (
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
          </>
        )}
        {book.description && (
          <div className="mt-8">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              【内容】
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {book.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
