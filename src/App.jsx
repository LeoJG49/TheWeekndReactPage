'use client'
import Header from "./components/Header/header"
import Hero from "./sections/Hero/hero.jsx"
import About from "./sections/About/about.jsx"
import Discography from "./sections/Discography/discography.jsx"
import Tour from "./sections/Tour/tour.jsx"
import Footer from "./components/Footer/footer.jsx"
import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on("scroll", ScrollTrigger.update)
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tour />
        <Discography />
      </main>
      <Footer />
    </>
  )
}

export default App
