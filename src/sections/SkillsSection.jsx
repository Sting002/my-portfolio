import Card from '../components/common/Card';
import PlaceholderNotice from '../components/common/PlaceholderNotice';
import SectionTitle from '../components/common/SectionTitle';
import Tag from '../components/common/Tag';
import { skillCategories, skillsIsPlaceholder } from '../data/skills';
import styles from './SkillsSection.module.css';

function SkillsSection() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle
          id="skills-title"
          eyebrow="Skills"
          title="Technologies and practical competencies"
          description="Grouped by what I use them for, from writing code to analysing data and shaping requirements."
        />
        {skillsIsPlaceholder && <PlaceholderNotice file="src/data/skills.js" />}

        <div className="bento">
          {skillCategories.map(({ id, title, description, icon, colSpan, items }) => (
            <Card key={id} colSpan={colSpan} icon={icon} reveal>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className={styles.list} aria-label={`${title} skills`}>
                {items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
