/**
 * EmailJS integration for the contact form.
 *
 * The service ID, template ID and PUBLIC key are designed to be visible in a browser app.
 * They go in .env as VITE_ variables (see .env.example). Never put a private key here.
 * Restrict allowed domains in the EmailJS dashboard once the site is live.
 */
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Treat empty values and the .env.example placeholders as "not configured"
const isReal = (value) => Boolean(value) && !value.startsWith('your_');

export const isEmailConfigured = [serviceId, templateId, publicKey].every(isReal);

export const EMAIL_NOT_CONFIGURED = 'EMAIL_NOT_CONFIGURED';

/**
 * Sends the form values through EmailJS. The library is loaded on demand,
 * so visitors who never use the form never download it.
 *
 * Template variables expected in your EmailJS template:
 *   {{from_name}}  {{from_email}}  {{subject}}  {{message}}   (Reply-To: {{reply_to}})
 */
export async function sendContactEmail({ name, email, subject, message }) {
  if (!isEmailConfigured) {
    throw new Error(EMAIL_NOT_CONFIGURED);
  }

  const { default: emailjs } = await import('@emailjs/browser');

  return emailjs.send(
    serviceId,
    templateId,
    { from_name: name, from_email: email, reply_to: email, subject, message },
    { publicKey }
  );
}
