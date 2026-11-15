import { Mail } from 'lucide-react';
import Card from '../components/common/Card';
import ContactForm from '../components/common/ContactForm';
import SectionTitle from '../components/common/SectionTitle';
import SocialLinks from '../components/common/SocialLinks';
import personal from '../data/personal';
import styles from './ContactSection.module.css';

function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionTitle
          id="contact-title"
          eyebrow="Contact"
          title="Let's talk"
          description="Have a project, a role or a question in mind? Send me a message and I will respond as soon as I can."
        />

        <div className={styles.layout}>
          <Card variant="accent" icon={Mail} reveal>
            <h3>Get in touch</h3>
            <p>Prefer to write directly? You can also reach me here.</p>
            <a href={`mailto:${personal.email}`} className={styles.email}>
              {personal.email}
            </a>
            <SocialLinks className={styles.social} />
          </Card>

          <Card reveal>
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
