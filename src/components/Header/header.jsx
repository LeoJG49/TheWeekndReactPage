import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className='hover-underline' href="#"><span>HOME</span></a>
        <a className='hover-underline' href="#"><span>ABOUT</span></a>
        <a className='hover-underline' href="#"><span>DISCOGRAPHY</span></a>
        <a className='hover-underline' href="#"><span>TOUR</span></a>
      </nav>
    </header>
  )
}
