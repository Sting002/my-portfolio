import { m as motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

/**
 * Wrap anything to fade it in when it scrolls into view.
 * Props: as (tag), variants (default fadeUp), delay (seconds).
 */
function RevealOnScroll({ as = 'div', variants = fadeUp, delay = 0, className, children, ...rest }) {
  const Component = motion[as] ?? motion.div;

  const resolved = delay
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }
    : variants;

  return (
    <Component
      className={className}
      variants={resolved}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default RevealOnScroll;
