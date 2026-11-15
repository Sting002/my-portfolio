import { useMemo, useState } from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import PlaceholderNotice from '../components/common/PlaceholderNotice';
import ProjectCard from '../components/common/ProjectCard';
import SectionTitle from '../components/common/SectionTitle';
import { projects, projectsIsPlaceholder } from '../data/projects';
import { duration, ease, spring, viewportOnce } from '../utils/motion';
import { cx } from '../utils/helpers';
import styles from './ProjectsSection.module.css';

const ALL = 'All';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: duration.base } },
};

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  // Categories come straight from the data, so adding a project with a new category just works
  const categories = useMemo(() => [ALL, ...new Set(projects.map((project) => project.category))], []);

  const visibleProjects =
    activeCategory === ALL ? projects : projects.filter((project) => project.category === activeCategory);

  const count = visibleProjects.length;

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionTitle
          id="projects-title"
          eyebrow="Selected work"
          title="Projects"
          description="A selection of work across web development, data analysis and automation."
        />
        {projectsIsPlaceholder && <PlaceholderNotice file="src/data/projects.js" />}

        {projects.length === 0 ? (
          <p className={styles.empty}>Projects are on the way. Check back soon.</p>
        ) : (
          <>
            {/* No point showing a filter when there is only one category */}
            {categories.length > 2 && (
              <div className={styles.filters} role="group" aria-label="Filter projects by category">
                {categories.map((category) => {
                  const isActive = category === activeCategory;
                  return (
                    <button
                      key={category}
                      type="button"
                      className={cx(styles.filter, isActive && styles.active)}
                      aria-pressed={isActive}
                      onClick={() => setActiveCategory(category)}
                    >
                      {isActive && <motion.span layoutId="project-filter-pill" className={styles.pill} transition={spring} />}
                      <span className={styles.label}>{category}</span>
                    </button>
                  );
                })}
              </div>
            )}

            <p className="visually-hidden" aria-live="polite">
              Showing {count} {count === 1 ? 'project' : 'projects'}
              {activeCategory !== ALL && ` in ${activeCategory}`}
            </p>

            <motion.ul layout className={styles.grid}>
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <motion.li
                    key={project.id}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={viewportOnce}
                  >
                    <ProjectCard project={project} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
