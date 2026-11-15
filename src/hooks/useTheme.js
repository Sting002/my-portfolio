import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const META_COLOURS = { dark: '#0a0a0f', light: '#f7f6fb' };

// index.html sets data-theme before first paint; we read it as the source of truth
const readTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOURS[theme]);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable (private mode etc.): theme still works for this visit */
  }
}

/**
 * Theme state with persistence. Uses the View Transitions API for a smooth
 * cross-fade where supported, and falls back to CSS transitions elsewhere.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  // Keep meta colour in sync on first load
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOURS[theme]);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const commit = () => {
      applyTheme(next);
      setTheme(next);
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (document.startViewTransition && !reduceMotion) {
      const root = document.documentElement;
      root.classList.add('theme-switching'); // pauses element transitions during the snapshot
      document.startViewTransition(commit).finished.finally(() => {
        root.classList.remove('theme-switching');
      });
    } else {
      commit();
    }
  }, [theme]);

  return { theme, toggleTheme };
}
