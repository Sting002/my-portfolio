import { Activity, ClipboardList, Code, Database, Monitor, Server, Wrench } from 'lucide-react';

/**
 * Skills grouped by category. Add or remove items freely; the section renders from this file.
 * `colSpan` is the card width on the 4-column desktop grid (rows of 4 look tidiest).
 *
 * PLACEHOLDER: these are typical sample entries for this kind of profile.
 * Replace them with technologies you can genuinely work with.
 */
export const skillsIsPlaceholder = true;

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming languages',
    description: 'Languages I use to build and automate.',
    icon: Code,
    colSpan: 2,
    items: ['JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    id: 'frontend',
    title: 'Frontend development',
    description: 'Responsive, accessible interfaces.',
    icon: Monitor,
    colSpan: 2,
    items: ['React', 'HTML5', 'CSS3', 'Responsive design'],
  },
  {
    id: 'backend',
    title: 'Backend development',
    description: 'Server-side logic and APIs.',
    icon: Server,
    colSpan: 1,
    items: ['Node.js', 'REST APIs'],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Storing and querying data.',
    icon: Database,
    colSpan: 1,
    items: ['SQL', 'MySQL'],
  },
  {
    id: 'analytics',
    title: 'Data analytics and visualisation',
    description: 'From raw data to clear insight.',
    icon: Activity,
    colSpan: 2,
    items: ['Data cleaning', 'Exploratory analysis', 'Dashboards', 'Excel'],
  },
  {
    id: 'business',
    title: 'Business analysis',
    description: 'Turning needs into requirements.',
    icon: ClipboardList,
    colSpan: 2,
    items: ['Requirements gathering', 'Process mapping', 'User stories', 'Stakeholder communication'],
  },
  {
    id: 'tools',
    title: 'Development tools and technologies',
    description: 'The tooling I build and ship with.',
    icon: Wrench,
    colSpan: 2,
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm', 'Figma'],
  },
];
