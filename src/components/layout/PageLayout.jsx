import BackgroundGlow from '../effects/BackgroundGlow';
import ScrollProgress from '../effects/ScrollProgress';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

/** Shell shared by every page: effects, navigation, content, footer. */
function PageLayout({ children }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <BackgroundGlow />
      <Navbar />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default PageLayout;
