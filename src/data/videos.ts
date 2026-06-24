export interface Video {
  id: string
  title: string
  youtubeId: string | string[]
  description?: string
  category?: string
}

export const videos: Video[] = [
  {
    id: 'situation-room-vol1',
    title: 'SR#1 「『異端審問の時代』に自由でいるために」（2026年5月31日）ダイジェスト映像',
    youtubeId: '1bYae1CLfeY',
    category: 'イベント',
  },
  {
    id: 'situation-vol1.1',
    title: 'The Situation Vol1「認知戦とインテリジェンス」ダイジェスト映像',
    youtubeId: 'nBXCZfNbNbk',
    category: 'イベント',
  },
  {
    id: 'situation-vol1',
    title: 'The Situation Vol.1 ダイジェスト映像（2026/3/15）',
    youtubeId: 'z-uujlDrbWI',
    category: 'イベント',
  },
]
