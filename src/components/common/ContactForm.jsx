import { useState } from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Check, Info, Send } from 'lucide-react';
import Button from './Button';
import FormField from './FormField';
import PlaceholderNotice from './PlaceholderNotice';
import personal from '../../data/personal';
import { isEmailConfigured, sendContactEmail } from '../../utils/emailjs';
import { cx } from '../../utils/helpers';
import styles from './ContactForm.module.css';

const MESSAGE_MAX = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const feedbackMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25 },
};

function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
    defaultValues: { name: '', email: '', subject: '', message: '', botcheck: '' },
  });

  const messageLength = watch('message')?.length ?? 0;

  const onSubmit = async (values) => {
    setStatus('idle');

    // Honeypot: real visitors never see or fill this field, bots usually do
    if (values.botcheck) {
      reset();
      setStatus('success');
      return;
    }

    try {
      await sendContactEmail(values);
      reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {!isEmailConfigured && (
        <PlaceholderNotice>
          EmailJS is not configured yet, so sending will show an error. Copy <code>.env.example</code> to{' '}
          <code>.env</code> and add your IDs. (Visible in dev only.)
        </PlaceholderNotice>
      )}

      <div className={styles.row}>
        <FormField
          id="contact-name"
          label="Name"
          autoComplete="name"
          placeholder="Your name"
          error={errors.name?.message}
          {...register('name', {
            required: 'Please enter your name.',
            minLength: { value: 2, message: 'Name must be at least 2 characters.' },
            maxLength: { value: 80, message: 'Name must be 80 characters or fewer.' },
          })}
        />
        <FormField
          id="contact-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register('email', {
            required: 'Please enter your email address.',
            pattern: { value: EMAIL_PATTERN, message: 'Please enter a valid email address.' },
          })}
        />
      </div>

      <FormField
        id="contact-subject"
        label="Subject"
        autoComplete="off"
        placeholder="What is this about?"
        error={errors.subject?.message}
        {...register('subject', {
          required: 'Please add a subject.',
          minLength: { value: 3, message: 'Subject must be at least 3 characters.' },
          maxLength: { value: 120, message: 'Subject must be 120 characters or fewer.' },
        })}
      />

      <div>
        <FormField
          id="contact-message"
          label="Message"
          multiline
          rows={6}
          placeholder="Tell me a little about your project or question..."
          error={errors.message?.message}
          {...register('message', {
            required: 'Please write a message.',
            minLength: { value: 10, message: 'Message must be at least 10 characters.' },
            maxLength: { value: MESSAGE_MAX, message: `Message must be ${MESSAGE_MAX} characters or fewer.` },
          })}
        />
        <p className={cx(styles.counter, messageLength > MESSAGE_MAX && styles.over)} aria-hidden="true">
          {messageLength}/{MESSAGE_MAX}
        </p>
      </div>

      {/* Honeypot (hidden from people and assistive tech) */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-botcheck">Leave this field empty</label>
        <input id="contact-botcheck" type="text" tabIndex={-1} autoComplete="off" {...register('botcheck')} />
      </div>

      <div className={styles.actions}>
        <Button type="submit" size="lg" icon={Send} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>

        <div className={styles.feedback} aria-live="polite">
          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.p key="success" className={cx(styles.message, styles.success)} role="status" {...feedbackMotion}>
                <Check size={18} aria-hidden="true" />
                Thanks, your message was sent.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p key="error" className={cx(styles.message, styles.failure)} role="alert" {...feedbackMotion}>
                <Info size={18} aria-hidden="true" />
                <span>
                  Sorry, that did not go through. Please try again, or email me at{' '}
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>.
                </span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
