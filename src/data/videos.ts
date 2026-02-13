export interface Video {
  id: string
  title: string
  youtubeId: string | string[]
  description?: string
  category?: string
}

export const videos: Video[] = [
  {
    id: 'jokyo-hoso-16',
    title: '【初海外ロケ】幻の犬肉料理を食べる旅 ソウル・東大門市場 情況放送第16回',
    youtubeId: 'sLv6iAkkspA',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-15',
    title: '【創価学会】「池田大作が来るとどんな問題児も真面目に掃除する 宗教2世芸人 長井秀和の壮絶人生」情況放送第15回',
    youtubeId: '5hEsgtmGCtw',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-14',
    title: '【新編集長】塩野谷恭輔が第6期『情況』編集長になりました',
    youtubeId: 'z7tpX4Q-als',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-11',
    title: '【肉体廃止】蘭茶みすみさんコラボ「メタバースで叶える真の自由 肉体廃止社会は本当に実現するのか？」インタビューダイジェスト版 情況放送第11回',
    youtubeId: 'sjkz4HxBKDU',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-10',
    title: '笠井潔さんに聞く「方法としての現象学と『観念的倒錯の病理』の切開」情況放送第10回',
    youtubeId: '2DFwv7VxwzA',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-9',
    title: '『赤軍の人々』馬込伸吾監督インタビュー（ダイジェスト版）情況放送第9回',
    youtubeId: 'Nd7ZC8mXVNE',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-8',
    title: '【アフガン】レシャード・カレッド医師に聞くアフガニスタンの現状（ノーカット版）情況放送第8回',
    youtubeId: 'P5yHlEHp2DM',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-7',
    title: '情況放送第7回 【入管特集】大学1年生 宮島ヨハナさんに聞く',
    youtubeId: 'aqWXF1Ees4c',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-6',
    title: '情況放送第6回 祝開店！ミャンマーカフェをメディア初取材（タウンジーカフェ&バー/高田馬場）後編',
    youtubeId: 'Ym0jXjhZeRM',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-5',
    title: '情況放送第5回 戦禍のミャンマー料理を食べる（ノングインレイ/高田馬場）',
    youtubeId: 'n3JJo4gMCoM',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-4',
    title: '情況放送第4回 塩野谷恭輔『コロナワクチンをめぐる政治学』',
    youtubeId: 'k4QysZ8kDak',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-3',
    title: '情況放送第3回 大学生座談会『大学生は社会とどう向き合っているか。』',
    youtubeId: '0h7lpQaPecg',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-2',
    title: '情況放送第2回 髙井ホアン『国家権力は、いったい何を取り締まったのか』',
    youtubeId: '1g8qHJeGGCk',
    category: '情況放送',
  },
  {
    id: 'jokyo-hoso-1',
    title: '情況放送第1回 亀戸事務所探訪',
    youtubeId: 'pljfvr72bPs',
    category: '情況放送',
  },
  {
    id: 'demo-koenji',
    title: '「延長するなら補償しろ！」デモ＠高円寺（2020年5月5日）',
    youtubeId: 'mwKiPiGk350',
    category: 'その他',
  },
  {
    id: 'koko-toso-50',
    title: '高校闘争から半世紀〜私たちは何を残したのか、未来への継承〜',
    youtubeId: ['JF4LHx7iFPI', 'rHEuajaeqN4', 'orvzWpvNXVk', 'WQHOTdrxunY'],
    category: 'その他',
    description: '第I部「1968年は我々に何をもたらしたか」高校全共闘パート、第I部「1968年は我々に何をもたらしたか」山本義隆さんの応答、第II部「運動の現場から（香港の学生の闘い）」香港パート、第III部「いま高校生は社会とどう向き合っているか」若者パート',
  },
  {
    id: 'oshita-tsuikai',
    title: '大下敦史ゆかりの集い 追悼！記念講演会（2018年6月17日）',
    youtubeId: ['Fa3JE5X3i_k', '-xW9-WcLWsY'],
    category: 'その他',
    description: '白井聡さん講演、山本義隆さん講演',
  },
  {
    id: 'chisaka-kouji',
    title: '千坂恭二が語る『思想としてのファシズム』（出版記念イベント＠大阪 味園ビル）',
    youtubeId: 'FKlU6WitAHA',
    category: 'その他',
  },
  {
    id: 'oshita-saigo',
    title: '情況出版元代表・大下敦史さん最期の言葉',
    youtubeId: 'H0r4-y0PsFk',
    category: 'その他',
  },
  {
    id: 'yamazaki-project',
    title: '10・8山﨑博昭プロジェクト ベトナム ホーチミンの旅',
    youtubeId: 'O3wuRZQgmxQ',
    category: 'その他',
    description: '山本義隆さん挨拶 完全版はこちら',
  },
]
