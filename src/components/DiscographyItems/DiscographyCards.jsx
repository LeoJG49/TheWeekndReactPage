import { useEffect, useRef } from 'react'
import { CARDS_DATA } from '../../data/discographyData.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './DiscographyCards.module.css'

gsap.registerPlugin(ScrollTrigger);

const CARD_Y_OFFSET = 5;
const CARD_SCALE_STEP = 0.075;

export default function DiscographyCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const totalCards = cards.length;
    const segmentSize = 1 / totalCards;

    cards.forEach((card, i) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50 + i * CARD_Y_OFFSET,
        scale: 1 - i * CARD_SCALE_STEP,
      });
    });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.min(
          Math.floor(progress / segmentSize),
          totalCards - 1
        );
        const segProgress =
          (progress - activeIndex * segmentSize) / segmentSize;

        cards.forEach((card, i) => {
          if (i < activeIndex) {
            gsap.set(card, { yPercent: -250, rotationX: 35 });
          } else if (i === activeIndex) {
            gsap.set(card, {
              yPercent: gsap.utils.interpolate(-50, -250, segProgress),
              rotationX: gsap.utils.interpolate(0, 35, segProgress),
              scale: 1,
            });
          } else {
            const behindIndex = i - activeIndex;
            gsap.set(card, {
              yPercent: -50 + (behindIndex - segProgress) * CARD_Y_OFFSET,
              rotationX: 0,
              scale: 1 - (behindIndex - segProgress) * CARD_SCALE_STEP,
            });
          }
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

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
            <h2>{title}</h2>
            <p>{text}</p>
            <h4>{count}</h4>
          </div>
          <div className={styles.col}>
            <img src={image} alt={alt} />
          </div>
        </div>
      ))}
    </section>
  );
}
