import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * @param {React.RefObject}       wrapperRef
 * @param {React.RefObject<Array>} cardsRef 
 * @param {Array<{ endTranslateX: number, rotate: number }>} cardsConfig
 */
export function useHorizontalScroll(wrapperRef, cardsRef, cardsConfig) {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const cards = cardsRef.current;

    if (!wrapper || !cards.length) return;

    const wrapperTrigger = ScrollTrigger.create({
      trigger: wrapper,
      start: 'top top',
      end: '+=900vh',
      scrub: 1,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        gsap.to(wrapper, {
          x: `${-460 * self.progress}vw`,
          duration: 0.5,
          ease: 'power3.out',
        });
      },
    });

    const cardTriggers = cards.map((card, i) => {
      const config = cardsConfig[i];
      return ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: '+=1200vh',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(card, {
            x: `${config.endTranslateX * self.progress}px`,
            rotate: `${config.rotate * self.progress * 2}`,
            duration: 0.5,
            ease: 'power3.out',
          });
        },
      });
    });

    return () => {
      wrapperTrigger.kill();
      cardTriggers.forEach((t) => t.kill());
    };
  }, [wrapperRef, cardsRef, cardsConfig]);
}