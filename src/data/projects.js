/**
 * Projects shown on the site. Add a new object to this array and it appears automatically.
 *
 * Fields:
 *  id            unique string
 *  title         project name
 *  description   1 to 2 sentences
 *  category      used for the filter (Phase 5): e.g. 'IoT', 'Data', 'Web'
 *  technologies  array of strings
 *  image         path inside /public (800x500 works well)
 *  imageAlt      meaningful alt text
 *  github        repository URL, or null if none
 *  demo          live demo URL, or null if none
 *  isPlaceholder true shows a "Placeholder" badge. Remove it once the entry is real.
 *
 * PLACEHOLDER: all three entries below are samples. No results, metrics or links are claimed.
 */
export const projectsIsPlaceholder = true;

export const projects = [
  {
    id: 'smart-home-automation',
    title: 'Smart Home Automation System',
    description:
      'Placeholder: describe the problem, the devices or sensors involved, and what you built to automate it.',
    category: 'IoT',
    technologies: ['Microcontroller', 'Sensors', 'C++'],
    image: '/images/projects/placeholder-smart-home.svg',
    imageAlt: 'Placeholder thumbnail for the Smart Home Automation System project',
    github: null,
    demo: null,
    isPlaceholder: true,
  },
  {
    id: 'data-analysis-visualisation',
    title: 'Data Analysis and Visualisation',
    description:
      'Placeholder: describe the dataset, the questions you asked and how you presented the findings.',
    category: 'Data',
    technologies: ['Python', 'SQL', 'Dashboards'],
    image: '/images/projects/placeholder-data.svg',
    imageAlt: 'Placeholder thumbnail for the Data Analysis and Visualisation project',
    github: null,
    demo: null,
    isPlaceholder: true,
  },
  {
    id: 'web-application',
    title: 'Web Application Development',
    description:
      'Placeholder: describe what the application does, who it is for and the stack you used to build it.',
    category: 'Web',
    technologies: ['React', 'Node.js', 'REST API'],
    image: '/images/projects/placeholder-web.svg',
    imageAlt: 'Placeholder thumbnail for the Web Application Development project',
    github: null,
    demo: null,
    isPlaceholder: true,
  },
];
