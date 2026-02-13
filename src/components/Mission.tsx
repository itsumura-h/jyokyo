import { withBasePath } from '../lib/basePath'

export function Mission() {
  return (
    <section className="bg-foreground py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-2xl font-medium tracking-wide text-background md:text-4xl lg:text-5xl text-balance">
          出版の知見と分析力を融合し、
          <br />
          社会の深層に迫る
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-light leading-relaxed text-background/70">
          数十年にわたる出版事業で培った情報収集力・編集力と、
          シンクタンクとしての分析力を掛け合わせ、
          誰もが見過ごしている社会の構造的問題を浮き彫りにします。
        </p>

        {/* Two images side by side */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={withBasePath('/images/research.svg')}
              alt="独自の調査・研究による深い分析"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={withBasePath('/images/analysis.svg')}
              alt="報道の裏側を読み解く調査分析"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm font-light leading-relaxed text-background/60">
          私たちは、情報の受け手を「消費者」ではなく「思考者」として尊重し、
          読者が自らの判断で未来を切り拓くための知的基盤を提供します。
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#about"
            className="border border-background/30 px-8 py-3 text-sm font-light tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            私たちについて
          </a>
        </div>
      </div>
    </section>
  )
}
