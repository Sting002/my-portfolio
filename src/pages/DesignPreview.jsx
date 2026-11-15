import { useState } from 'react';
import { ArrowRight, Download, Gauge, Github, Layers, Mail, Moon, Palette, Sparkles, Sun } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import styles from './DesignPreview.module.css';

/**
 * TEMPORARY page to review the Phase 2 design system.
 * Delete this file and DesignPreview.module.css in Phase 3.
 * (The theme toggle here is also temporary; the real one arrives with useTheme.)
 */
const swatches = [
  ['--bg', 'Background'],
  ['--surface-solid', 'Surface'],
  ['--accent', 'Accent'],
  ['--accent-strong', 'Accent strong'],
  ['--text', 'Text'],
  ['--text-muted', 'Muted'],
  ['--success', 'Success'],
  ['--danger', 'Danger'],
];

function DesignPreview() {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'dark');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable: ignore */
    }
    setTheme(next);
  };

  return (
    <main className="container section" id="main">
      <header className={styles.header}>
        <div>
          <p className="eyebrow">Phase 2 · Design system</p>
          <h1 className="text-gradient">Hastings Patrick Msokera</h1>
          <p className={styles.lead}>Software Developer | Business &amp; Data Analyst</p>
        </div>
        <Button
          variant="secondary"
          icon={theme === 'dark' ? Sun : Moon}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        />
      </header>

      <section className={styles.block} aria-labelledby="ds-buttons">
        <h2 id="ds-buttons">Buttons</h2>
        <div className={styles.row}>
          <Button icon={Download} href="/resume.pdf" download>
            Download CV
          </Button>
          <Button variant="secondary" icon={ArrowRight}>
            View Projects
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="secondary" icon={Github} iconPosition="left" href="https://github.com" external>
            GitHub
          </Button>
          <Button variant="secondary" icon={Mail} aria-label="Email" />
        </div>
        <div className={styles.row}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg" icon={ArrowRight}>
            Large
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section className={styles.block} aria-labelledby="ds-cards">
        <h2 id="ds-cards">Bento cards</h2>
        <div className="bento">
          <Card variant="accent" colSpan={2} rowSpan={2} icon={Sparkles} interactive reveal>
            <p className="eyebrow">Accent · 2×2</p>
            <h3>Featured card</h3>
            <p>Spans two columns and two rows on desktop. Larger cards get a larger title. Move your cursor over it to see the spotlight.</p>
          </Card>
          <Card variant="glass" icon={Layers} interactive reveal>
            <p className="eyebrow">Glass</p>
            <h3>1×1</h3>
            <p>Backdrop blur surface.</p>
          </Card>
          <Card icon={Palette} interactive reveal>
            <p className="eyebrow">Default</p>
            <h3>1×1</h3>
            <p>Subtle surface and border.</p>
          </Card>
          <Card colSpan={2} icon={Gauge} reveal>
            <p className="eyebrow">Static · 2×1</p>
            <h3>Wide card</h3>
            <p>Non-interactive cards skip the hover lift. The title scales up via a container query.</p>
          </Card>
        </div>
      </section>

      <section className={styles.block} aria-labelledby="ds-colour">
        <h2 id="ds-colour">Colour tokens</h2>
        <ul className={styles.swatches}>
          {swatches.map(([token, label]) => (
            <li key={token} className={styles.swatch}>
              <span className={styles.chip} style={{ background: `var(${token})` }} aria-hidden="true" />
              <span>{label}</span>
              <code>{token}</code>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default DesignPreview;
