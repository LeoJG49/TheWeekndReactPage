import styles from './discography.module.css'
import React from 'react'
import DiscographyItems from '../../components/DiscographyItems/discographyItems.jsx'

export default function Discography() {
  return (
    <section className={styles.discography}>
      <DiscographyItems />
    </section>
  )
}
