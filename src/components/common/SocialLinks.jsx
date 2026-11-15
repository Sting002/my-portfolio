import Button from './Button';
import { socialLinks } from '../../data/socialLinks';
import { cx } from '../../utils/helpers';
import styles from './SocialLinks.module.css';

/** Icon links driven by src/data/socialLinks.js */
function SocialLinks({ size = 'md', className }) {
  return (
    <ul className={cx(styles.list, className)} aria-label="Social links">
      {socialLinks.map(({ id, label, href, icon, external }) => (
        <li key={id}>
          <Button
            variant="secondary"
            size={size}
            icon={icon}
            href={href}
            external={external}
            aria-label={external ? `${label} (opens in a new tab)` : label}
            title={label}
          />
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
