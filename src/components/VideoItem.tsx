import type { Video } from '../data/videos'

interface VideoItemProps {
  video: Video
}

export function VideoItem({ video }: VideoItemProps) {
  const youtubeIds = Array.isArray(video.youtubeId) ? video.youtubeId : [video.youtubeId]
  const hasValidIds = youtubeIds.some((id) => id && id.trim() !== '')

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-lg font-medium text-foreground md:text-xl">
          {video.title}
        </h3>
        {video.description && (
          <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
            {video.description}
          </p>
        )}
      </div>

      {hasValidIds ? (
        <div
          className={`grid gap-6 ${
            youtubeIds.length === 1
              ? 'grid-cols-1'
              : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {youtubeIds.map((youtubeId, index) => {
            if (!youtubeId || youtubeId.trim() === '') {
              return null
            }
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`
            return (
              <div
                key={index}
                className="aspect-video w-full overflow-hidden rounded-sm bg-muted"
              >
                <iframe
                  src={youtubeEmbedUrl}
                  title={`${video.title} - ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-muted">
          <p className="text-sm font-light text-muted-foreground">
            YouTube動画IDが設定されていません
          </p>
        </div>
      )}
    </div>
  )
}
