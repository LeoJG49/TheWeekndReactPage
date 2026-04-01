import { useRef } from 'react'
import { CARDS_DATA } from '../../data/discographyData.js'
import { useDiscographyCards } from '../../animations/useDiscographyCards.js'
import styles from './DiscographyCards.module.css'

export default function DiscographyCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useDiscographyCards(sectionRef, cardsRef);

  return (
    <section ref={sectionRef} className={styles.stickyCards}>
      {CARDS_DATA.map(({ id, zIndex, image, text, alt, count, title }, i) => (
        <div
          key={id}
          ref={(el) => (cardsRef.current[i] = el)}
          className={styles.card}
          style={{ zIndex }}
          id={id}
        >
          <div className={styles.col}>
            <h3>{title}</h3>
            <p>{text}</p>
            <h5>{count}</h5>
          </div>
          <div className={styles.col}>
            <img src={image} alt={alt} loading='lazy'/>
          </div>
        </div>
      ))}
    </section>
  );
}
