/**
 * Central animation configuration for Framer Motion.
 * Import variants from here so every section animates consistently.
 * Reduced-motion is handled globally by <MotionConfig reducedMotion="user"> in main.jsx.
 */

export const ease = [0.22, 1, 0.36, 1];

export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.6,
};

export const spring = { type: 'spring', stiffness: 320, damping: 26 };

/** Reveal once when ~80px inside the viewport */
export const viewportOnce = { once: true, margin: '-80px' };

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.slow, ease } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: duration.slow, ease } },
};

/** Parent variant that staggers its children's "hidden" -> "visible" */
export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Shared interaction props */
export const hoverLift = { y: -4 };
export const tapPress = { scale: 0.97 };
