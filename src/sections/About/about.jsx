import styles from './about.module.css'
import React from 'react'
import Biography from './AboutContent/biography.jsx'
import HorizontalContent from './AboutContent/horizontalContent.jsx'

export default function About() {
  return (
    <section className={styles.about}>
      <HorizontalContent />
      <Biography />
    </section>
  )
}
