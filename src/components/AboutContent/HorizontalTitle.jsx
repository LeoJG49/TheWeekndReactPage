import { useRef } from 'react'
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll.js'
import styles from './HorizontalTitle.module.css'

const CARDS_CONFIG = [
  { endTranslateX: -200, rotate: 45  },
  { endTranslateX: -1000, rotate: -30 },
  { endTranslateX: -2000, rotate: 45  },
  { endTranslateX: -1500, rotate: -30 },
]

const CARDS_IMAGES = [
  { src: '/AfterHours.webp', alt: 'After Hours Cover Album' },
  { src: '/HurryUpTomorrow.webp', alt: 'Hurry Up Tomorrow Cover Album' },
  { src: '/DawnFM.webp', alt: 'Dawn FM Cover Album' },
  { src: '/Starboy.webp', alt: 'Starboy Cover Album' },
]

export default function HorizontalContent() {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useHorizontalScroll(wrapperRef, cardsRef, CARDS_CONFIG);

  return (
    <>
      <section ref={wrapperRef} className={styles.wrapperIntro}>
        <h2 className={styles.giantText}>About The Weeknd</h2>

        {CARDS_IMAGES.map(({ src, alt }, i) => {
          return (
            <div
            key={i}
            ref={(el) => (cardsRef.current[i] = (el))}
            className={`${styles.card} ${styles[`card${i + 1}`]}`}
            >
              <img src={src} alt={alt} />
            </div>
          )
        })}
      </section>
    </>
  )
}
