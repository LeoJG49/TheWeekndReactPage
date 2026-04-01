import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

/**
 * @param {React.RefObject} ref
 */

export function useInfoTextAnimation(ref) {
  useEffect(() => {
    if (!ref.current) return;

    let splitInstance = null;
    let scrollTriggerInstance = null;

    document.fonts.ready.then(() => {
      if (!ref.current) return;

      gsap.set(ref.current, { opacity: 1 });

      splitInstance = SplitText.create(ref.current, {
        type: "words, lines, chars",
        wordsClass: "word",
        linesClass: "line",
        charsClass: "char",
        autoSplit: true,
        onSplit(self) {
          scrollTriggerInstance = gsap.from(self.chars, {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 60%",
              end: "top top",
              scrub: 1,
            },
            ease: "none",
            opacity: 0.2,
            stagger: 0.2,
          });

          ScrollTrigger.refresh();
          return scrollTriggerInstance;
        },
      });
    });

    return () => {
      if (scrollTriggerInstance?.scrollTrigger) {
        scrollTriggerInstance.scrollTrigger.kill();
      }
      scrollTriggerInstance?.kill();
      splitInstance?.revert();
      ScrollTrigger.refresh();
    };
  }, [ref]);
}
