/**
 * Timeline entries, shown in this order (put the most recent first).
 *
 * Fields:
 *  id            unique string
 *  type          'experience' | 'project' | 'leadership'
 *  title         role or project name
 *  organisation  employer, institution or team
 *  period        free text, e.g. 'Mar 2024 to Present'
 *  highlights    array of short bullet points (responsibilities or achievements)
 *  isPlaceholder true shows a "Placeholder" badge. Remove it once the entry is real.
 *
 * PLACEHOLDER: the three entries below are templates, one per type.
 * Nothing here is a claim about your history. Replace or delete each one.
 */
export const experienceIsPlaceholder = true;

export const experience = [
  {
    id: 'placeholder-experience',
    type: 'experience',
    title: '[Your job title]',
    organisation: '[Organisation name]',
    period: '[Start date] to [End date]',
    highlights: [
      'Describe a responsibility you held in this role.',
      'Describe something you built, improved or delivered, using real details.',
    ],
    isPlaceholder: true,
  },
  {
    id: 'placeholder-project',
    type: 'project',
    title: '[Practical project name]',
    organisation: '[Where it was done, e.g. university, internship, personal]',
    period: '[Start date] to [End date]',
    highlights: ['Describe what the project set out to do.', 'Describe your part in it and the technologies involved.'],
    isPlaceholder: true,
  },
  {
    id: 'placeholder-leadership',
    type: 'leadership',
    title: '[Leadership role or responsibility]',
    organisation: '[Team, club or organisation]',
    period: '[Start date] to [End date]',
    highlights: ['Describe who you led or coordinated and what the team worked on.'],
    isPlaceholder: true,
  },
];
