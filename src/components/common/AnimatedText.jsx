import { m as motion } from 'framer-motion';
import { ease, stagger } from '../../utils/motion';
import styles from './AnimatedText.module.css';

const wordVariants = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 0.7, ease } },
};

/**
 * Word-by-word reveal. Screen readers get the full sentence once;
 * the animated words are hidden from assistive tech.
 */
function AnimatedText({ text, as = 'span', delay = 0, staggerDelay = 0.06, className }) {
  const Component = motion[as] ?? motion.span;
  const words = text.split(' ');

  return (
    <Component
      className={className}
      variants={stagger(staggerDelay, delay)}
      initial="hidden"
      animate="visible"
    >
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className={styles.mask}>
            <motion.span className={styles.word} variants={wordVariants}>
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Component>
  );
}

export default AnimatedText;
