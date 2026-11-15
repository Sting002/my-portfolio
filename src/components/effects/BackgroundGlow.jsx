import styles from './BackgroundGlow.module.css';

/** Fixed ambient lighting behind the whole site. Purely decorative. */
function BackgroundGlow() {
  return (
    <div className={styles.root} aria-hidden="true">
      <span className={`${styles.blob} ${styles.one}`} />
      <span className={`${styles.blob} ${styles.two}`} />
      <span className={styles.grid} />
    </div>
  );
}

export default BackgroundGlow;
