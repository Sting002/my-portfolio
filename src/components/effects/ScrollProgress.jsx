import { m as motion, useScroll, useSpring } from 'framer-motion';
import styles from './ScrollProgress.module.css';

/* Fallback for browsers without CSS scroll-driven animations */
function MotionBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });
  return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden="true" />;
}

/* Preferred: runs on the compositor with no JavaScript (see animations.css) */
function NativeBar() {
  return <div className={`${styles.bar} scroll-progress-css`} aria-hidden="true" />;
}

const supportsScrollTimeline =
  typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()');

function ScrollProgress() {
  return supportsScrollTimeline ? <NativeBar /> : <MotionBar />;
}

export default ScrollProgress;
