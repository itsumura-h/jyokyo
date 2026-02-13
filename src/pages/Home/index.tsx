import { Hero } from '../../components/Hero'
import { Latest } from '../../components/Latest'
import { Event } from '../../components/Event'

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <Event />
        <Latest />
      </main>
    </>
  )
}
