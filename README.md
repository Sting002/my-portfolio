# Hastings Patrick Msokera: Portfolio

React + Vite portfolio with a dark, bento-grid design built in custom CSS.

## Getting started

```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Project status

- [x] Phase 1: Project initialisation, structure, design tokens
- [x] Phase 2: Design system (buttons, cards, animation config)
- [x] Phase 3: Core components (navbar, footer, theme)
- [x] Phase 4: Website sections (Hero, About, Skills, Projects, Experience, Education, Contact)
- [x] Phase 5: Interactivity (project filtering, contact form + EmailJS)
- [x] Phase 6: Responsiveness and optimisation
- [ ] Phase 7: Final testing

## Things you need to provide later

- `public/resume.pdf`: your CV
- `public/images/profile/`: your profile photo
- `public/images/og-image.png`: social sharing image (1200x630)
- `.env`: copy `.env.example` and add your EmailJS IDs (Phase 5)
- Real GitHub, LinkedIn and email links (`src/data/socialLinks.js`)

## Content checklist

See `CONTENT-CHECKLIST.md` for everything that still needs your real details, assets and credentials.

## Setting up the contact form (EmailJS)

1. Create a free account at https://www.emailjs.com and add an **Email Service** (for example Gmail).
2. Create an **Email Template**. Set the "To email" to your address and use these variables:
   `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`. Set Reply-To to `{{reply_to}}`.
3. Copy `.env.example` to `.env` and fill in the Service ID, Template ID and Public Key.
4. Restart `npm run dev`, then send yourself a test message.
5. Once deployed, restrict the allowed domains in the EmailJS dashboard.

The Public Key is meant to be public. Never put a private key in the frontend.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check:content` | Lists placeholder content still to replace (exits with an error until done) |

## Browser support

Targets the current and previous major versions of Chrome, Edge, Firefox and Safari (Safari 15+).
Newer CSS (nesting, container queries, `:has()`, scroll-driven animation, View Transitions) is either
down-levelled by the build or used as progressive enhancement, so older browsers get a simpler but
fully working page.

## Images and performance

- Profile photo: portrait, about 720x900, WebP or JPEG, ideally under 150 KB.
- Project thumbnails: 800x500, WebP or compressed PNG/JPEG, ideally under 100 KB each.
- `og-image.png`: 1200x630.
- Below-the-fold images already use `loading="lazy"` and fixed `width`/`height` to avoid layout shift.
- Animation code loads on demand, and the EmailJS library only loads when someone sends a message.
