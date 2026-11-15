# Content checklist: what I still need from you

Run `npm run check:content` any time to see what is still outstanding (it exits with an error until everything is replaced).
Tick items off as you hand them over. Nothing here blocks the build; the site runs with sample content.
Items marked **(dev notice)** show a dashed "Sample content" box in `npm run dev` until replaced.

## 1. Personal details: `src/data/personal.js`
- [ ] Real contact email (currently `your.email@example.com`)
- [ ] Hero introduction (1 to 2 sentences in your own words)
- [ ] Profile photo, saved in `public/images/profile/` (portrait, about 720x900), then set `profileImage`
- [ ] Confirm availability status and wording

## 2. Links: `src/data/socialLinks.js`
- [ ] GitHub profile URL
- [ ] LinkedIn profile URL

## 3. Files and assets (`public/`)
- [ ] CV as `public/resume.pdf`
- [ ] Social sharing image `public/images/og-image.png` (1200x630)
- [ ] Live site URL once deployed (for Open Graph tags in `index.html`)

## 4. About: `src/data/about.js` (dev notice)
- [ ] "Who I am" summary
- [ ] Academic background: qualification, institution, start and completion years
- [ ] Technical interests
- [ ] Professional interests
- [ ] Personal attributes
- [ ] Career objective

## 5. Skills: `src/data/skills.js` (dev notice)
- [ ] Real skills for each of the 7 categories (delete anything you cannot back up)
- [ ] Optional: tell me if you want brand logos on the skill cards

## 6. Projects: `src/data/projects.js` (dev notice)
- [ ] Smart Home Automation System: description, technologies, thumbnail, GitHub link, demo link
- [ ] Data Analysis and Visualisation: description, technologies, thumbnail, GitHub link, demo link
- [ ] Web Application Development: description, technologies, thumbnail, GitHub link, demo link
- [ ] Any extra projects you want shown
- [ ] Remove `isPlaceholder: true` from each project once its details are real

## 7. Experience: `src/data/experience.js` (dev notice)
- [ ] Professional experience: role, organisation, dates, responsibilities, achievements
- [ ] Practical projects to list on the timeline
- [ ] Leadership experience
- [ ] Remove `isPlaceholder: true` from each entry once real (or delete the template entries)

## 8. Education and certifications: `src/data/education.js` (dev notice)
- [ ] Institution, qualification, field of study, completion date
- [ ] Certifications: name, issuer, date, optional certificate image for `public/images/certifications/` and credential link
- [ ] Remove `isPlaceholder: true` from each entry once real

## 9. Contact form credentials: `.env` (not committed to git)
- [ ] EmailJS account, email service and template (steps in README)
- [ ] Fill `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
- [ ] Send a test message and confirm it arrives

## Rules I am following
- I will not invent achievements, work history, qualifications, metrics or links.
- Anything unconfirmed stays visibly marked as a placeholder.
