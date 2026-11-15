import { cx } from '../../utils/helpers';
import styles from './Tag.module.css';

/** Small pill label for technologies, categories and interests. */
function Tag({ children, variant = 'default', className }) {
  return <span className={cx(styles.tag, variant === 'accent' && styles.accent, className)}>{children}</span>;
}

export default Tag;
