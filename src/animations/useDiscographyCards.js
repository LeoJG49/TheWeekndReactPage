import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARD_Y_OFFSET = 5;
const CARD_SCALE_STEP = 0.075;

/**
 * @param {React.RefObject} sectionRef
 * @param {React.RefObject<Array>} cardsRef
 */
export function useDiscographyCards(sectionRef, cardsRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards.length) return;

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
  }, [sectionRef, cardsRef]);
}