import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import Tag from './Tag';
import styles from './ProjectCard.module.css';

/**
 * One project in the showcase. Driven entirely by an object from src/data/projects.js.
 * Repository and demo buttons only appear when the matching link exists.
 */
function ProjectCard({ project }) {
  const { title, description, category, technologies, image, imageAlt, github, demo, isPlaceholder } = project;

  return (
    <Card as="article" interactive className={styles.project}>
      <div className={styles.media}>
        <img src={image} alt={imageAlt} width="800" height="500" loading="lazy" decoding="async" />
        {isPlaceholder && (
          <Tag variant="accent" className={styles.badge}>
            Placeholder
          </Tag>
        )}
      </div>

      <div className={styles.text}>
        <Tag variant="accent">
          {category}
        </Tag>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className={styles.tags} aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.links}>
        {github && (
          <Button variant="secondary" size="sm" icon={Github} iconPosition="left" href={github} external>
            Code
          </Button>
        )}
        {demo && (
          <Button size="sm" icon={ExternalLink} href={demo} external>
            Live demo
          </Button>
        )}
        {!github && !demo && <span className={styles.noLinks}>Links coming soon</span>}
      </div>
    </Card>
  );
}

export default ProjectCard;
