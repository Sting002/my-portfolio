import { m as motion } from 'framer-motion';
import { hoverLift, tapPress, spring } from '../../utils/motion';
import styles from './Button.module.css';

/**
 * Reusable button. Renders an <a> when `href` is given, otherwise a <button>.
 *
 * Props:
 *  variant: 'primary' | 'secondary' | 'ghost'
 *  size: 'sm' | 'md' | 'lg'
 *  icon: a Lucide icon component (optional)
 *  iconPosition: 'left' | 'right'
 *  external: open link in a new tab safely
 *  download: pass a filename (or true) for file downloads
 *  fullWidth: stretch to container
 *
 * Icon-only buttons (no children) must receive an aria-label.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  download,
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  type = 'button',
  ...rest
}) {
  const Component = href ? motion.a : motion.button;

  const iconOnly = Boolean(Icon) && !children;

  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth && styles.full,
    iconOnly && styles.iconOnly,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const elementProps = href
    ? {
        href,
        download,
        target: external ? '_blank' : undefined,
        rel: external ? 'noopener noreferrer' : undefined,
      }
    : { type };

  const iconNode = Icon ? <Icon size={size === 'lg' ? 20 : 18} aria-hidden="true" /> : null;

  return (
    <Component
      className={classes}
      whileHover={hoverLift}
      whileTap={tapPress}
      transition={spring}
      {...elementProps}
      {...rest}
    >
      {iconPosition === 'left' && iconNode}
      {children}
      {external && children && <span className="visually-hidden"> (opens in a new tab)</span>}
      {iconPosition === 'right' && iconNode}
    </Component>
  );
}

export default Button;
