/** Join class names, skipping falsy values */
export const cx = (...classes) => classes.filter(Boolean).join(' ');

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
};
