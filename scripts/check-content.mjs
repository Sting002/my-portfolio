/**
 * Pre-launch check: lists placeholder content that still needs replacing.
 * Run with:  npm run check:content
 * Exits with code 1 while anything is outstanding, so it can also gate a deploy.
 * No dependencies; reads the data files as text.
 */
import { existsSync, readFileSync } from 'node:fs';

const read = (path) => (existsSync(path) ? readFileSync(path, 'utf8') : '');
const issues = [];
const add = (file, message) => issues.push({ file, message });

// 1. Data files that still carry placeholder markers
const dataFiles = [
  'src/data/personal.js',
  'src/data/socialLinks.js',
  'src/data/about.js',
  'src/data/skills.js',
  'src/data/projects.js',
  'src/data/experience.js',
  'src/data/education.js',
];

for (const file of dataFiles) {
  const text = read(file);
  const flagged = (text.match(/isPlaceholder:\s*true/g) || []).length;
  if (flagged) add(file, `${flagged} entr${flagged === 1 ? 'y is' : 'ies are'} still marked isPlaceholder: true`);

  if (/\w+IsPlaceholder\s*=\s*true/.test(text)) {
    add(file, 'section flag is still true (set it to false once the content is real)');
  }
  const brackets = text.match(/'\[[^\]\n]+\]'|\[[A-Z][^\]\n]{3,}\]/g) || [];
  if (brackets.length) add(file, `${brackets.length} bracketed template value(s), e.g. ${brackets[0]}`);
}

// 2. Placeholder contact details
const personal = read('src/data/personal.js');
const social = read('src/data/socialLinks.js');
if (personal.includes('your.email@example.com')) add('src/data/personal.js', 'email is still the placeholder address');
if (/profileImage:\s*null/.test(personal)) add('src/data/personal.js', 'no profile photo set (profileImage is null)');
if (social.includes('your-username')) add('src/data/socialLinks.js', 'GitHub URL is still a placeholder');
if (social.includes('your-profile')) add('src/data/socialLinks.js', 'LinkedIn URL is still a placeholder');

// 3. Files that must exist
if (!existsSync('public/resume.pdf')) add('public/resume.pdf', 'CV file is missing, so "Download CV" will not work');
if (!existsSync('public/images/og-image.png')) add('public/images/og-image.png', 'social sharing image is missing (1200x630)');

// 4. Contact form credentials (.env)
const env = read('.env');
for (const key of ['VITE_EMAILJS_SERVICE_ID', 'VITE_EMAILJS_TEMPLATE_ID', 'VITE_EMAILJS_PUBLIC_KEY']) {
  const match = env.match(new RegExp(`^${key}=(.*)$`, 'm'));
  const value = match ? match[1].trim() : '';
  if (!value || value.startsWith('your_')) add('.env', `${key} is not set`);
}

// Report
if (issues.length === 0) {
  console.log('All content looks real. Nothing left to replace.');
  process.exit(0);
}

const byFile = new Map();
for (const { file, message } of issues) byFile.set(file, [...(byFile.get(file) || []), message]);

console.log(`\n${issues.length} item(s) still need your attention:\n`);
for (const [file, messages] of byFile) {
  console.log(file);
  for (const message of messages) console.log(`  - ${message}`);
}
console.log('\nSee CONTENT-CHECKLIST.md for details.\n');
process.exit(1);
