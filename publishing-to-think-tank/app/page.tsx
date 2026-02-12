import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Mission } from "@/components/mission"
import { Services } from "@/components/services"
import { Articles } from "@/components/articles"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Mission />
        <Services />
        <Articles />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
