import { Suspense, lazy, useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import IntroPage from './components/IntroPage';

const Home = lazy(() => import('./pages/Home'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

function HomeRoute() {
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('introPlayed'));
  const [isExiting, setIsExiting] = useState(false);
  const [showHome, setShowHome] = useState(() => !!sessionStorage.getItem('introPlayed'));
  const [pendingHash, setPendingHash] = useState(null);
  const navigate = useNavigate();

  const handleEnter = useCallback((href) => {
    sessionStorage.setItem('introPlayed', 'true');
    
    if (href?.startsWith('/')) {
      setIsExiting(true);
      setTimeout(() => {
        setShowIntro(false);
        navigate(href);
      }, 500);
      return;
    }
    
    if (href?.startsWith('#')) {
      setPendingHash(href);
    }
    
    setIsExiting(true);
    setTimeout(() => {
      setShowIntro(false);
      setShowHome(true);
      setIsExiting(false);
    }, 500);
  }, [navigate]);

  useEffect(() => {
    if (showHome && pendingHash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(pendingHash);
        el?.scrollIntoView({ behavior: 'smooth' });
        setPendingHash(null);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [showHome, pendingHash]);

  return (
    <>
      {showIntro && <IntroPage onEnter={handleEnter} isExiting={isExiting} />}
      {showHome && (
        <Suspense fallback={null}>
          <div className="home-enter home-enter-active">
            <Home />
          </div>
        </Suspense>
      )}
    </>
  );
}

export default function App() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('introPlayed', 'true');
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/pricing" element={
        <Suspense fallback={null}>
          <div className="home-enter home-enter-active">
            <PricingPage />
          </div>
        </Suspense>
      } />
    </Routes>
  );
}
