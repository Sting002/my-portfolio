import { m as motion } from 'framer-motion';
import { Activity, ArrowRight, Code, Download } from 'lucide-react';
import AnimatedText from '../components/common/AnimatedText';
import Button from '../components/common/Button';
import SocialLinks from '../components/common/SocialLinks';
import personal from '../data/personal';
import { fadeUp, scaleIn, stagger } from '../utils/motion';
import { cx } from '../utils/helpers';
import styles from './Hero.module.css';

const container = stagger(0.1, 0.1);

function Hero() {
  const { isAvailable, label } = personal.availability;

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={cx('container', styles.grid)}>
        <motion.div className={styles.copy} variants={container} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className={cx(styles.status, !isAvailable && styles.busy)}>
            <span className={styles.dot} aria-hidden="true" />
            {isAvailable ? label : 'Not currently available'}
          </motion.p>

          <motion.p variants={fadeUp} className="eyebrow">
            Hello, I&apos;m
          </motion.p>

          <motion.h1 id="hero-title" variants={fadeUp} className="text-gradient">
            {personal.name}
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.role}>
            <AnimatedText text={personal.role} delay={0.5} />
          </motion.p>

          <motion.p variants={fadeUp} className={styles.intro}>
            {personal.intro}
          </motion.p>

          <motion.div variants={fadeUp} className={styles.actions}>
            <Button size="lg" icon={Download} href={personal.resumeUrl} download>
              Download CV
            </Button>
            <Button size="lg" variant="secondary" icon={ArrowRight} href="#projects">
              View Projects
            </Button>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div className={styles.visual} variants={scaleIn} initial="hidden" animate="visible">
          <div className={styles.portrait}>
            <div className={styles.portraitInner}>
              {personal.profileImage ? (
                <img src={personal.profileImage} alt={personal.profileAlt} width="720" height="900" />
              ) : (
                <span className={cx(styles.monogram, 'text-gradient')} aria-hidden="true">
                  {personal.initials}
                </span>
              )}
            </div>
          </div>
          <span className={cx(styles.chip, styles.chipOne)}>
            <Code size={16} aria-hidden="true" />
            Software Development
          </span>
          <span className={cx(styles.chip, styles.chipTwo)}>
            <Activity size={16} aria-hidden="true" />
            Business &amp; Data Analysis
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
