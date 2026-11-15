import { useEffect, useState } from 'react';

/** True once the page has scrolled past `threshold` px. Only re-renders when the value flips. */
export default function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > threshold);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [threshold]);

  return scrolled;
}
