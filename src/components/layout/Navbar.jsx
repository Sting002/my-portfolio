import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Button from '../common/Button';
import useTheme from '../../hooks/useTheme';
import useScrolled from '../../hooks/useScrolled';
import useActiveSection from '../../hooks/useActiveSection';
import { navLinks, sectionIds } from '../../data/navigation';
import personal from '../../data/personal';
import { ease, spring } from '../../utils/motion';
import { cx } from '../../utils/helpers';
import styles from './Navbar.module.css';

const MENU_TOGGLE_ID = 'menu-toggle';

const panelVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease, staggerChildren: 0.04, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // While the mobile menu is open: Escape closes it and page scrolling is locked
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById(MENU_TOGGLE_ID)?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    document.querySelector('#mobile-menu a')?.focus(); // keyboard users land inside the menu

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close the mobile menu if the window grows to desktop width
  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)');
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className={cx(styles.header, (scrolled || menuOpen) && styles.scrolled)}>
      <div className={cx('container', styles.inner)}>
        <a href="#home" className={styles.logo} onClick={closeMenu} aria-label={`${personal.name}, back to top`}>
          <span className={styles.mark}>{personal.initials}</span>
          <span className={styles.logoText}>{personal.shortName}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.list}>
            {navLinks.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a href={`#${id}`} className={styles.link} aria-current={isActive ? 'location' : undefined}>
                    {isActive && <motion.span layoutId="nav-active-pill" className={styles.pill} transition={spring} />}
                    <span className={styles.linkLabel}>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button
            variant="ghost"
            icon={theme === 'dark' ? Sun : Moon}
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
          />
          <span className={styles.mobileOnly}>
            <Button
              id={MENU_TOGGLE_ID}
              variant="secondary"
              icon={menuOpen ? X : Menu}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            />
          </span>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
        {menuOpen && (
          <motion.nav
            key="panel"
            id="mobile-menu"
            className={styles.mobilePanel}
            aria-label="Mobile"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className={styles.mobileList}>
              {navLinks.map(({ id, label }) => (
                <motion.li key={id} variants={itemVariants}>
                  <a
                    href={`#${id}`}
                    className={styles.mobileLink}
                    aria-current={active === id ? 'location' : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
