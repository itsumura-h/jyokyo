import { Hero } from '../../components/Hero'
import { Latest } from "../../components/Latest"
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <Latest />
      </main>
      <Footer />
    </>
  )
}
