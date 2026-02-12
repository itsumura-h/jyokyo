import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'

import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['300', '400', '500', '700'],
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'VERITAS | 真実を見抜く知のシンクタンク',
  description:
    '出版社からシンクタンクへ。大手マスメディアが扱わない社会の裏側に踏み込み、読者の人生とビジネスに真の洞察を届けます。',
}

export const viewport: Viewport = {
  themeColor: '#121212',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
