import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import styles from './HorizontalTitle.module.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const CARDS = [
  { image: 'AfterHours.webp',      posClass: styles.card1, endX: -200,  rotate: 45  },
  { image: 'HurryUpTomorrow.webp', posClass: styles.card2, endX: -1000, rotate: -30 },
  { image: 'DawnFM.webp',          posClass: styles.card3, endX: -2000, rotate: 45  },
  { image: 'Starboy.webp',         posClass: styles.card4, endX: -1500, rotate: -30 },
]

const SCROLL_DISTANCE = '+=900vh'
const TEXT_TRAVEL     = '-350vw'

export default function HorizontalContent() {
  const sectionRef = useRef(null)
  const textRef    = useRef(null)
  const cardsRef   = useRef([])

  useGSAP(
    () => {
      const section = sectionRef.current
      const text    = textRef.current
      if (!section || !text) return

      // Scroll trigger compartido para que ambas animaciones
      // estén pinned en el mismo punto y recorran la misma distancia
      const sharedTrigger = {
        trigger: section,   // elemento DOM real, no string de clase
        start: 'top top',
        end: SCROLL_DISTANCE,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }

      // Texto: se mueve más rápido (350vw)
      gsap.to(text, {
        x: TEXT_TRAVEL,
        ease: 'none',
        scrollTrigger: sharedTrigger,
      })

      // Cartas: cada una con su propia velocidad y rotación (parallax)
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        const { endX, rotate } = CARDS[i]

        gsap.to(card, {
          x: endX,
          rotation: rotate,
          ease: 'none',
          scrollTrigger: sharedTrigger,
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className={styles.wrapperIntro}>
      <h2 ref={textRef} className={styles.gigantText}>
        The Weeknd
      </h2>

      {CARDS.map(({ image, posClass }, i) => (
        <div
          key={image}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`${styles.card} ${posClass}`}
        >
          <img
            src={`/src/assets/${image}`}
            alt={image.replace('.webp', '')}
            loading="lazy"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}
    </section>
  )
}
