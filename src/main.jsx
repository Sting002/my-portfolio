import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LazyMotion, MotionConfig } from 'framer-motion';
import App from './App.jsx';

// Order matters: tokens first, then base, then helpers
import './styles/variables.css';
import './styles/global.css';
import './styles/typography.css';
import './styles/animations.css';
import './styles/responsive.css';

const loadFeatures = () => import('./utils/motionFeatures.js').then((module) => module.default);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* "user" honours the OS prefers-reduced-motion setting for transform animations */}
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures}>
        <App />
      </LazyMotion>
    </MotionConfig>
  </StrictMode>
);
