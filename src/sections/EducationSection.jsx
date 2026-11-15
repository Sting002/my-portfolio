import { Award, ExternalLink, GraduationCap } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import PlaceholderNotice from '../components/common/PlaceholderNotice';
import SectionTitle from '../components/common/SectionTitle';
import Tag from '../components/common/Tag';
import RevealOnScroll from '../components/effects/RevealOnScroll';
import { certifications, education, educationIsPlaceholder } from '../data/education';
import styles from './EducationSection.module.css';

function EducationSection() {
  const hasContent = education.length > 0 || certifications.length > 0;

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionTitle
          id="education-title"
          eyebrow="Education"
          title="Qualifications and certifications"
          description="The academic foundation behind my work, and the certifications that add to it."
        />
        {educationIsPlaceholder && <PlaceholderNotice file="src/data/education.js" />}

        {!hasContent && <p className={styles.empty}>Education details are coming soon.</p>}

        {education.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Qualifications</h3>
            <ul className={styles.grid}>
              {education.map((item) => (
                <RevealOnScroll as="li" key={item.id}>
                  <Card icon={GraduationCap}>
                    {item.isPlaceholder && (
                      <div>
                        <Tag>Placeholder</Tag>
                      </div>
                    )}
                    <h4>{item.qualification}</h4>
                    <p className={styles.strong}>{item.field}</p>
                    <p>
                      {item.institution} &middot; {item.completed}
                    </p>
                    {item.note && <p>{item.note}</p>}
                  </Card>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        )}

        {certifications.length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Certifications</h3>
            <ul className={styles.grid}>
              {certifications.map((cert) => (
                <RevealOnScroll as="li" key={cert.id}>
                  <Card icon={Award}>
                    {cert.image && (
                      <img
                        className={styles.certImage}
                        src={cert.image}
                        alt={`${cert.name} certificate`}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {cert.isPlaceholder && (
                      <div>
                        <Tag>Placeholder</Tag>
                      </div>
                    )}
                    <h4>{cert.name}</h4>
                    <p>
                      {cert.issuer} &middot; {cert.date}
                    </p>
                    {cert.credentialUrl && (
                      <div>
                        <Button size="sm" variant="secondary" icon={ExternalLink} href={cert.credentialUrl} external>
                          View credential
                        </Button>
                      </div>
                    )}
                  </Card>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default EducationSection;
