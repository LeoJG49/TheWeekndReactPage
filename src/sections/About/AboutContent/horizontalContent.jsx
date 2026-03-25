import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import styles from './horizontalContent.module.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const IMAGES = [
  'AfterHours.webp',
  'HurryUpTomorrow.webp',
  'DawnFM.webp',
  'Starboy.webp',
]

const CARD_POSITIONS = [
  styles.card1,
  styles.card2,
  styles.card3,
  styles.card4,
]

export default function HorizontalContent() {
  const wrapperRef = useRef();

  useGSAP(
    () => {
      // const section = wrapperRef.current
      // if (!section) return

      gsap.to(wrapperRef.current, {
        x: '-350vw',
        ease: 'none',
        scrollTrigger: {
          trigger: styles.wrapperIntro,
          start: 'top top',
          end: '+=900vh',
          scrub: 1,
          pin: true,
          markers: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        }
      })

      // const scroll = {
      //   trigger: section,
      //   start: 'top top',
      //   end: '+=1000vh',
      //   scrub: 1,
      //   pin: true,
      // }

      // const tl = gsap.timeline({ ScrollTrigger: scroll })

      // tl.to(section, {x: '-780vw', ease: 'none', duration: 1}, 0)

      // const cards = section.querySelectorAll(`.${styles.card}`)
      // cards.forEach((card, i) => {
      //   tl.to(
      //     card,
      //     {
      //       x: (i - 1.5) * 40,
      //       rotation: i % 2 === 0 ? 10 : -10,
      //       ease: 'none',
      //     }, 
      //     0
      //   )
      // })
    },
    { scope: wrapperRef }
  )

  return (
    <div ref={wrapperRef} className={styles.wrapperIntro}>
      <h2 className={styles.gigantText}>Page Not Found</h2>

    </div>
  )
}
