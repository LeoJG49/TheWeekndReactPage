import styles from './about.module.css'
import React from 'react'
import Biography from '../../components/AboutContent/Biography.jsx'
import HorizontalContent from '../../components/AboutContent/HorizontalTitle.jsx'

export default function About() {
  return (
    <section className={styles.about}>
      {/* <HorizontalContent /> */}
      <Biography />
    </section>
  )
}
