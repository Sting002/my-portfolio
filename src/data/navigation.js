/** Primary navigation. `id` must match the id of the section on the page. */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/** Stable array of ids (module-level so hooks don't re-run every render) */
export const sectionIds = navLinks.map((link) => link.id);
