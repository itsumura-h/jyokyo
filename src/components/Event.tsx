import { withBasePath } from '../lib/basePath'

const TICKET_URL = 'https://livepocket.jp/e/hbzef'

export function Event() {
  return (
    <section className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
          Event
        </p>
        <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl">
          イベント
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[320px_1fr] md:gap-16 lg:gap-20">
          {/* フライヤー画像 */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden md:max-w-none">
              <img
                src={withBasePath('/images/event/situationVol1.jpeg')}
                alt="The Situation Vol.1 イベントフライヤー"
                className="h-full w-full object-contain"
              />
            </div>
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-foreground px-6 py-3 text-center text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              チケットを購入
            </a>
          </div>

          {/* イベント詳細 */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground md:text-2xl">
                The Situation Vol.1
              </h3>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    開催日
                  </dt>
                  <dd className="mt-1 text-sm font-light text-foreground">
                    2026年3月15日（日）
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    時間
                  </dt>
                  <dd className="mt-1 text-sm font-light text-foreground">
                    開場 11:00 / 開演 11:20 / 終演 20:00
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    会場
                  </dt>
                  <dd className="mt-1 text-sm font-light text-foreground">
                    Crypto Lounge GOX
                    <br />
                    <span className="text-muted-foreground">
                      東京都新宿区歌舞伎町２丁目１９−１５ てなむタウンビル6階
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    チケット
                  </dt>
                  <dd className="mt-1 text-sm font-light text-foreground">
                    一般 ¥3,500（税込） / 学生 ¥1,500（税込）
                  </dd>
                </div>
              </dl>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
