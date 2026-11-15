import { Github, Linkedin, Mail } from 'lucide-react';
import personal from './personal';

/**
 * Social links used in the hero, contact section and footer.
 * TODO(replace): swap the placeholder GitHub and LinkedIn URLs for your real profiles.
 */
export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/your-username',
    icon: Github,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-profile',
    icon: Linkedin,
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${personal.email}`,
    icon: Mail,
    external: false,
  },
];
