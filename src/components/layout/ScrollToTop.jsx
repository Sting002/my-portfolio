import { AnimatePresence, m as motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Button from '../common/Button';
import useScrolled from '../../hooks/useScrolled';
import { scrollToTop } from '../../utils/helpers';
import styles from './ScrollToTop.module.css';

/** Floating back-to-top button, shown after scrolling down a screen or so. */
function ScrollToTop() {
  const visible = useScrolled(600);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-to-top"
          className={styles.wrap}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Button variant="secondary" icon={ArrowUp} onClick={scrollToTop} aria-label="Back to top" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
