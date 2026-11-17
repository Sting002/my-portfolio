# Launch checklist

Work top to bottom. Phases 1 to 7 are built; this list covers what can only be checked on your machine,
with your real content and credentials.

## 1. Replace the placeholder content
```bash
npm run check:content
```
Keep going until it prints "All content looks real" (see `CONTENT-CHECKLIST.md` for what each item means).

## 2. Build and preview locally
```bash
npm install
npm run build
npm run preview
```
- [ ] `npm run build` finishes with no errors (warnings about chunk size are fine)
- [ ] The preview URL opens and looks the same as `npm run dev`
- [ ] Browser console (F12) shows no errors

## 3. Manual tests

### Contact form (needs your EmailJS credentials in `.env`)
- [ ] Click "Send message" with everything empty: all four fields show an error
- [ ] Type `abc` in Email: "Please enter a valid email address." appears
- [ ] Message of fewer than 10 characters: error appears
- [ ] Fill in valid details and send: button shows "Sending...", then "Thanks, your message was sent."
- [ ] The email arrives in your inbox, with the sender's address as Reply-To
- [ ] Temporarily break a value in `.env` and restart: sending shows the error with your email as a fallback

### CV download
- [ ] `public/resume.pdf` exists
- [ ] "Download CV" downloads a PDF that opens correctly

### Look and feel
- [ ] Hero text animates in; sections fade in as you scroll
- [ ] Nav highlight slides between sections; mobile menu opens, closes with Escape
- [ ] Project filter buttons animate the cards
- [ ] Theme toggle fades smoothly and the choice survives a refresh
- [ ] Turn on "Reduce motion" in your operating system: animations calm down, nothing breaks

### Devices and browsers
- [ ] Real phone (portrait and landscape)
- [ ] Chrome and Edge
- [ ] Firefox
- [ ] Safari (Mac or iPhone) if you can

### Lighthouse
In Chrome: open the preview URL in an Incognito window, press F12, choose the Lighthouse tab, run it once for
**Mobile** and once for **Desktop**. Aim for 90 or above in each category. Note that `npm run preview` does not
compress files, so the live site (on a real host) usually scores a little higher on performance.

## 4. Deploy
Any static host works: Vercel, Netlify or Cloudflare Pages. Use:
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables (set in the host's dashboard, because `.env` is not in git):
  `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`

(GitHub Pages also works but needs a `base` setting in `vite.config.js` when the site lives at `/repo-name/`.)

## 5. After it is live
- [ ] Add your site URL: `<link rel="canonical">` and `og:url` in `index.html`, and a `Sitemap:` line in `public/robots.txt`
- [ ] Add `public/images/og-image.png` (1200x630) and redeploy
- [ ] In the EmailJS dashboard, restrict allowed domains to your site
- [ ] Re-test the contact form and CV download on the live URL
- [ ] Paste the URL into LinkedIn or a messaging app and check the preview card looks right
- [ ] Run Lighthouse on the live URL
