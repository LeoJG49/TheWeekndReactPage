'use client'
import Header from "./components/Header/header"
import Hero from "./sections/Hero/hero.jsx"
import About from "./sections/About/about.jsx"
import Discography from "./sections/Discography/discography.jsx"
import Tour from "./sections/Tour/tour.jsx"
import Footer from "./components/Footer/footer.jsx"
import { useEffect } from "react"
import Lenis from "lenis"

function App() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Discography />
        <Tour />
      </main>
      <Footer />
    </>
  )
}

export default App
