import React, { useRef, useCallback } from 'react'
import styles from './HeroCarousel.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroCarouselItems } from '../../data/albumsData.js'

gsap.registerPlugin(useGSAP)

function isExternalHref(href) {
  return /^https?:\/\//i.test(href)
}

function CarouselRow({ rowRef, items }) {
  return (
    <div ref={rowRef} className={styles.innerContainer}>
      {items.map((item, index) => (
        <a
          key={`${item.src}-${index}`}
          href={item.href}
          className={styles.carouselLink}
          {...(isExternalHref(item.href)
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <img src={item.src} alt={item.alt} className={styles.carousel} />
        </a>
      ))}
    </div>
  )
}

export default function HeroCarousel() {
  const carouselRef1 = useRef(null)
  const carouselRef2 = useRef(null)
  const carouselRef3 = useRef(null)
  const tweensRef = useRef([])

  useGSAP(() => {
    const tweens = [
      gsap.fromTo(
        carouselRef1.current,
        { xPercent: 0 },
        {
          xPercent: -100,
          duration: 20,
          repeat: -1,
          ease: 'none',
        }
      ),
      gsap.fromTo(
        carouselRef2.current,
        { xPercent: 0 },
        {
          xPercent: -100,
          duration: 20,
          repeat: -1,
          ease: 'none',
        }
      ),
      gsap.fromTo(
        carouselRef3.current,
        { xPercent: 0 },
        {
          xPercent: -100,
          duration: 20,
          repeat: -1,
          ease: 'none',
        }
      ),
    ]
    tweensRef.current = tweens
    return () => {
      tweens.forEach((t) => t.kill())
    }
  })

  const pauseCarousel = useCallback(() => {
    tweensRef.current.forEach((t) => t.pause())
  }, [])

  const resumeCarousel = useCallback(() => {
    tweensRef.current.forEach((t) => t.resume())
  }, [])

  return (
    <div
      className={styles.outerContainer}
      onMouseEnter={pauseCarousel}
      onMouseLeave={resumeCarousel}
    >
      <CarouselRow rowRef={carouselRef1} items={heroCarouselItems} />
      <CarouselRow rowRef={carouselRef2} items={heroCarouselItems} />
      <CarouselRow rowRef={carouselRef3} items={heroCarouselItems} />
    </div>
  )
}
