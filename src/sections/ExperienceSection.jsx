import { Briefcase, Code, Users } from 'lucide-react';
import Card from '../components/common/Card';
import PlaceholderNotice from '../components/common/PlaceholderNotice';
import SectionTitle from '../components/common/SectionTitle';
import Tag from '../components/common/Tag';
import RevealOnScroll from '../components/effects/RevealOnScroll';
import { experience, experienceIsPlaceholder } from '../data/experience';
import styles from './ExperienceSection.module.css';

const typeMeta = {
  experience: { label: 'Professional experience', icon: Briefcase },
  project: { label: 'Practical project', icon: Code },
  leadership: { label: 'Leadership', icon: Users },
};

function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionTitle
          id="experience-title"
          eyebrow="Experience"
          title="Experience, projects and leadership"
          description="Where I have worked, what I have built and the responsibilities I have taken on."
        />
        {experienceIsPlaceholder && <PlaceholderNotice file="src/data/experience.js" />}

        {experience.length === 0 ? (
          <p className={styles.empty}>Experience details are coming soon.</p>
        ) : (
          <ol className={styles.timeline}>
            {experience.map((item) => {
              const { label, icon } = typeMeta[item.type] ?? typeMeta.experience;
              return (
                <RevealOnScroll as="li" key={item.id} className={styles.item}>
                  <span className={styles.dot} aria-hidden="true" />
                  <Card icon={icon}>
                    <div className={styles.tags}>
                      <Tag variant="accent">{label}</Tag>
                      {item.isPlaceholder && <Tag>Placeholder</Tag>}
                    </div>
                    <h3>{item.title}</h3>
                    <p className={styles.meta}>
                      {item.organisation} &middot; {item.period}
                    </p>
                    {item.highlights?.length > 0 && (
                      <ul className={styles.highlights}>
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </RevealOnScroll>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}

export default ExperienceSection;
