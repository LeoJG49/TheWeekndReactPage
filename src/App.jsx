'use client'
import { useLenis } from "./hooks/useLenis.js"
import Header from "./components/Header/header"
import Hero from "./sections/Hero/hero.jsx"
import About from "./sections/About/about.jsx"
import Discography from "./sections/Discography/discography.jsx"
import Tour from "./sections/Tour/tour.jsx"
import Footer from "./components/Footer/footer.jsx"


//TODO: Hacer que funcione la animación horizontal de About.
// Arreglar el bug que hace que no se pueda scrollear en la web con el ratón.

function App() {
  useLenis()

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
