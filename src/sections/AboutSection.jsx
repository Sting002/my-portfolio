import { ClipboardList, Code, GraduationCap, Sparkles, Target, User } from 'lucide-react';
import Card from '../components/common/Card';
import PlaceholderNotice from '../components/common/PlaceholderNotice';
import SectionTitle from '../components/common/SectionTitle';
import Tag from '../components/common/Tag';
import { about, aboutIsPlaceholder } from '../data/about';
import styles from './AboutSection.module.css';

function TagList({ items, label }) {
  return (
    <ul className={styles.tags} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}

function AboutSection() {
  const { summary, academic, technicalInterests, professionalInterests, attributes, objective } = about;

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionTitle
          id="about-title"
          eyebrow="About me"
          title="A developer who also thinks like an analyst"
        />
        {aboutIsPlaceholder && <PlaceholderNotice file="src/data/about.js" />}

        <div className="bento">
          <Card variant="accent" colSpan={2} rowSpan={2} icon={User} featured reveal>
            <h3>Who I am</h3>
            {summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Card>

          <Card icon={GraduationCap} reveal>
            <h3>Academic background</h3>
            <p className={styles.strong}>{academic.qualification}</p>
            <p>
              {academic.institution}
              <br />
              {academic.period}
            </p>
          </Card>

          <Card icon={Code} reveal>
            <h3>Technical interests</h3>
            <TagList items={technicalInterests} label="Technical interests" />
          </Card>

          <Card icon={ClipboardList} reveal>
            <h3>Professional interests</h3>
            <TagList items={professionalInterests} label="Professional interests" />
          </Card>

          <Card icon={Sparkles} reveal>
            <h3>Personal attributes</h3>
            <TagList items={attributes} label="Personal attributes" />
          </Card>

          <Card variant="glass" colSpan={4} icon={Target} reveal>
            <h3>{objective.title}</h3>
            <p className={styles.objective}>{objective.text}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
