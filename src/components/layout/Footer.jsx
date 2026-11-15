import { ArrowUp } from 'lucide-react';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import { navLinks } from '../../data/navigation';
import personal from '../../data/personal';
import { scrollToTop } from '../../utils/helpers';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <a href="#home" className={styles.name}>
            {personal.name}
          </a>
          <p className={styles.role}>{personal.role}</p>
          <SocialLinks />
        </div>

        <nav aria-label="Footer">
          <h2 className={styles.heading}>Quick links</h2>
          <ul className={styles.links}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={styles.link}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>
          &copy; {year} {personal.name}. All rights reserved.
        </p>
        <Button variant="ghost" size="sm" icon={ArrowUp} iconPosition="left" onClick={scrollToTop}>
          Back to top
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
