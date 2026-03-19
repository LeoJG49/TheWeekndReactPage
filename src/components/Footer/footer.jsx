import styles from './footer.module.css'
import React from 'react'
import FooterContent from './footerContent'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterContent />
    </footer>
  )
}
