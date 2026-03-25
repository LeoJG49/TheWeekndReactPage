import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Clave: sincronizar Lenis con el ticker de GSAP
    // Así ScrollTrigger recibe las posiciones correctas de scroll
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Evita que GSAP use requestAnimationFrame propio, lo delega a Lenis
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      // Limpia el ticker al desmontar para no acumular listeners
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])
}