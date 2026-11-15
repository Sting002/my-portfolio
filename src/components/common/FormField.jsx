import { forwardRef } from 'react';
import { cx } from '../../utils/helpers';
import styles from './FormField.module.css';

/**
 * Accessible label + input/textarea + error message.
 * Forwards its ref so it works directly with react-hook-form's register().
 */
const FormField = forwardRef(function FormField(
  { id, label, error, multiline = false, className, ...controlProps },
  ref
) {
  const Control = multiline ? 'textarea' : 'input';
  const errorId = `${id}-error`;

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <Control
        id={id}
        ref={ref}
        className={cx(styles.control, multiline && styles.textarea, error && styles.invalid)}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        {...controlProps}
      />
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default FormField;
