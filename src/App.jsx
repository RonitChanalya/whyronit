import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';

const ProjectPage = lazy(() => import('./pages/ProjectPage'));

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollManager />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="page-loader" aria-live="polite">Loading project…</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}
