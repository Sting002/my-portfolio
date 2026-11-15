import RevealOnScroll from '../effects/RevealOnScroll';
import { cx } from '../../utils/helpers';
import styles from './SectionTitle.module.css';

/** Consistent section heading: eyebrow, title and optional description. */
function SectionTitle({ eyebrow, title, description, id, align = 'left', className }) {
  return (
    <RevealOnScroll className={cx(styles.wrap, align === 'center' && styles.center, className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </RevealOnScroll>
  );
}

export default SectionTitle;
