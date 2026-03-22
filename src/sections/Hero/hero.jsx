import HeroCarousel from '../../components/HeroCarousel/heroCarousel'
import styles from './hero.module.css'
import React from 'react'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroCarousel />
    </section>
  )
}
