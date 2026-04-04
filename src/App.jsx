'use client'
import { useLenis } from "./hooks/useLenis.js"
import Header from "./components/Header/Header.jsx"
import Hero from "./sections/Hero/Hero.jsx"
import About from "./sections/About/About.jsx"
import Discography from "./sections/Discography/Discography.jsx"
import Footer from "./components/Footer/Footer.jsx"


function App() {
  useLenis()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Discography />
      </main>
      <Footer />
    </>
  )
}

export default App
