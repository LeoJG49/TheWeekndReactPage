import { useSplitTextAnimation } from '../../hooks/useSplitTextAnimation'
import styles from './DiscographyTitle.module.css'

/**
 * AnimatedText
 *
 * Wrapper reusable that apply the mask animation (slide-up by words)
 * to any text element using GSAP SplitText + ScrollTrigger.
 *
 * Props:
 * @param {React.ElementType} as        - Tag HTML or component to render (default: "h2")
 * @param {React.ReactNode}   children  - Text content
 * @param {number}            y         - Initial vertical displacement (default: 150)
 * @param {string}            start     - ScrollTrigger start    (default: "top 90%")
 * @param {string}            end       - ScrollTrigger end      (default: "top 30%")
 * @param {number}            scrub     - Scrub value         (default: 1)
 * @param {string}            ease      - GSAP ease              (default: "power2.out")
 * @param {number}            stagger   - Stagger between words (default: 0.2)
 *
 * Basic usage:
 * <AnimatedText as="h2" className="timeline-title">
 *   The Weeknd's Discography
 * </AnimatedText>
 *
 * Personalized:
 * <AnimatedText as="p" start="top 80%" stagger={0.1} y={100}>
 *   Other text with different animation settings
 * </AnimatedText>
 */

export default function AnimatedText({
  as: Tag = "h2",
  className = "",
  children,
  y,
  start,
  end,
  scrub,
  ease,
  stagger,
}) {
  const { ref } = useSplitTextAnimation({ y, start, end, scrub, ease, stagger });

  return (
    <div className={styles.container}>
      <Tag
        ref={ref}
        className={className || styles.title}
        style={{ opacity: 0 }}
      >
        <span>{children}</span>
      </Tag>
    </div>
  );
}
