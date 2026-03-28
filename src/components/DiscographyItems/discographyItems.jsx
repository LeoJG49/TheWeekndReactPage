import React from 'react'
import { discographyItems } from '../../data/discographyData.js'
import styles from './discographyItems.module.css'

export default function DiscographyItems() {
  return (
    <div className={styles.timeline}>
      {discographyItems.map((item) => (
        <article key={item.src} className={styles.item}>
          <img className={styles.cover} src={item.src} alt={item.alt} />
          <p className={styles.timelineText}>{item.text}</p>
        </article>
      ))}
    </div>
  )
}
