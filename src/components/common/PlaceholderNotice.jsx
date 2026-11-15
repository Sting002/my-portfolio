import { Info } from 'lucide-react';
import styles from './PlaceholderNotice.module.css';

/**
 * Reminder that a section still shows sample content.
 * Only renders in development (npm run dev); it never appears in the production build.
 */
function PlaceholderNotice({ file, children }) {
  if (!import.meta.env.DEV) return null;

  return (
    <aside className={styles.notice} role="note">
      <Info size={16} aria-hidden="true" />
      <p>
        {children ?? (
          <>
            Sample content. Replace it by editing <code>{file}</code>. (Visible in dev only.)
          </>
        )}
      </p>
    </aside>
  );
}

export default PlaceholderNotice;
