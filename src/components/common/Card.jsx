import { m as motion } from 'framer-motion';
import { fadeUp, hoverLift, spring, viewportOnce } from '../../utils/motion';
import styles from './Card.module.css';

/**
 * Bento-style card. Use inside a parent with className="bento".
 *
 * Layout: optional icon chip at the top, content anchored at the bottom,
 * so cards of different sizes still line up visually.
 *
 * Props:
 *  as: 'div' | 'article' | 'li' | 'section' (rendered element)
 *  variant: 'default' | 'glass' | 'accent'
 *  icon: a Lucide icon component shown in a chip at the top (optional)
 *  colSpan: 1-4  (columns on the bento grid; clamped on smaller screens)
 *  rowSpan: 1-2  (rows, desktop only)
 *  featured: larger title when the card is wide (use for hero-style cards only)
 *  interactive: adds hover lift plus a cursor-following spotlight
 *  reveal: fade up when scrolled into view
 */
function Card({
  as = 'div',
  variant = 'default',
  icon: Icon,
  colSpan = 1,
  rowSpan = 1,
  featured = false,
  interactive = false,
  reveal = false,
  className = '',
  children,
  onPointerMove,
  ...rest
}) {
  const Component = motion[as] ?? motion.div;

  const classes = [
    styles.card,
    styles[variant],
    featured && styles.featured,
    interactive && styles.interactive,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handlePointerMove = (event) => {
    if (interactive) {
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
    }
    onPointerMove?.(event);
  };

  const revealProps = reveal
    ? { variants: fadeUp, initial: 'hidden', whileInView: 'visible', viewport: viewportOnce }
    : {};

  return (
    <Component
      className={classes}
      data-col={colSpan}
      data-row={rowSpan}
      onPointerMove={handlePointerMove}
      whileHover={interactive ? hoverLift : undefined}
      transition={spring}
      {...revealProps}
      {...rest}
    >
      <div className={styles.content}>
        {Icon && (
          <span className={styles.icon}>
            <Icon size={20} aria-hidden="true" />
          </span>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </Component>
  );
}

export default Card;
