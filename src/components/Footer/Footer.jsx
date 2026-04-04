'use client'
import React from 'react'
import FooterContent from './FooterContent.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerContent}>
          <FooterContent />
        </div>
      </div>
    </footer>
  )
}
