export function Company() {
  return (
    <>
      <main className="pt-24 min-h-screen">
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
            Company
          </p>
          <h1 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-4xl">
            会社案内
          </h1>
          <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground max-w-2xl">
            情況出版についてご案内します。
          </p>

          <div className="mt-16 border-t border-border pt-12">
            <div className="max-w-3xl">
              <table className="w-full text-sm font-light">
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-4 pr-8 align-top text-muted-foreground w-32">
                      名称
                    </td>
                    <td className="py-4 text-foreground">
                      情況出版株式会社
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-8 align-top text-muted-foreground">
                      設立
                    </td>
                    <td className="py-4 text-foreground">
                      平成2年5月21日（第2期「情況」設立 / 第1期は1968年〜）
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-8 align-top text-muted-foreground">
                      代表者
                    </td>
                    <td className="py-4 text-foreground">
                      成瀬恭輔
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-8 align-top text-muted-foreground">
                      事業内容
                    </td>
                    <td className="py-4 text-foreground">
                      書籍、雑誌の出版および販売
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-8 align-top text-muted-foreground">
                      本社
                    </td>
                    <td className="py-4 text-foreground">
                      350-2202 埼玉県鶴ヶ島市五味ケ谷15-12-102
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
