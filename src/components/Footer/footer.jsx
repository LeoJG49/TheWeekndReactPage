import React from 'react'
import FooterContent from './footerContent'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <FooterContent />
      </div>
    </footer>
  )
}
