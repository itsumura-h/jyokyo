import { Footer } from '../../components/Footer'
import { VideoItem } from '../../components/VideoItem'
import { videos } from '../../data/videos'

export function Videos() {
  // カテゴリごとに動画をグループ化
  const videosByCategory = videos.reduce(
    (acc, video) => {
      const category = video.category || 'その他'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(video)
      return acc
    },
    {} as Record<string, typeof videos>
  )

  return (
    <>
      <main className="pt-24 min-h-screen">
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
            Videos
          </p>
          <h1 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-4xl">
            映像
          </h1>
          <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground max-w-2xl">
            情況出版がお届けする映像コンテンツです。
          </p>

          {/* 動画一覧 */}
          <div className="mt-16 border-t border-border pt-12">
            <div className="space-y-24 md:space-y-32">
              {Object.entries(videosByCategory).map(([category, categoryVideos]) => (
                <div key={category}>
                  <h2 className="font-serif text-lg font-medium text-foreground md:text-xl">
                    {category}
                  </h2>
                  <div className="mt-12 space-y-24 md:space-y-32">
                    {categoryVideos.map((video) => (
                      <VideoItem key={video.id} video={video} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
