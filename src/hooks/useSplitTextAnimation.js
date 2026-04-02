import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

/**
 * Hook: useSplitTextAnimation
 *
 * Animate text elements with a slide-up effect using GSAP SplitText + ScrollTrigger.
 * Cleans up automatically when the component unmounts.
 *
 * @param {object} options
 * @param {number}  options.y           - Initial vertical displacement (default: 150)
 * @param {string}  options.start       - ScrollTrigger start (default: "top 90%")
 * @param {string}  options.end         - ScrollTrigger end   (default: "top 30%")
 * @param {number}  options.scrub       - Scrub value      (default: 1)
 * @param {string}  options.ease        - GSAP ease        (default: "power2.out")
 * @param {number}  options.stagger     - Stagger between words (default: 0.2)
 * @param {number}  options.cardIndex   - Card index (used to get the card reference from cardsRef)
 * @param {React.RefObject<Array>} options.cardsRef - Array ref containing all card elements
 *
 * @returns {{ ref: React.RefObject }} - ref that is assigned to the element to animate
 */
export function useSplitTextAnimation({
  y = 150,
  start = "top 90%",
  end = "top 30%",
  scrub = 1,
  ease = "power2.out",
  stagger = 0.2,
  cardIndex = null,
  cardsRef = null,
} = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let splitInstance;
    let animation;

    document.fonts.ready.then(() => {
      gsap.set(el, { opacity: 1 });

      splitInstance = SplitText.create(el, {
        type: "words, lines, chars",
        wordsClass: "word",
        linesClass: "line",
        charsClass: "char",
        autoSplit: true,
        mask: "words",
        onSplit(self) {
          animation = gsap.from(self.words, {
            y,
            ease,
            stagger,
            scrollTrigger: {
              trigger: (cardsRef && cardIndex !== null) ? cardsRef.current[cardIndex] : el,
              start,
              end,
              scrub,
            },
          });

          ScrollTrigger.refresh();
          return animation;
        },
      });
    });

    return () => {
      animation?.scrollTrigger?.kill();
      animation?.kill();
      splitInstance?.revert(); // Restore the original DOM structure
      ScrollTrigger.refresh();
    };
  }, [y, start, end, scrub, ease, stagger, cardIndex, cardsRef]);

  return { ref };
}