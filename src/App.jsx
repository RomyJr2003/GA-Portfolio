import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbarcontent/navbar.jsx';
import Homepage from './components/homepage.jsx';
import About from './navbarcontent/About.jsx';
import Contacts from './navbarcontent/contact.jsx';
import TermsAndConditions from './footercontent/terms.jsx';
import PreLoading from './components/preloading.jsx';
import Designs from './components/designs.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  // Move preloading state here so it persists across page navigation
  const [showLoader, setShowLoader] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Remove loader completely after 2.5 seconds
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    // Cleanup timers if component unmounts
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []); // Empty dependency array means this runs ONCE when app first loads

  return (
    <>
      {/* Show preloader overlay only on first load */}
      {showLoader && (
        <div className={`loader-overlay ${isFading ? 'fade-out' : ''}`}>
          <PreLoading />
        </div>
      )}
      
      <ScrollToTop />
      
      <Routes>
          <Route element={<Navbar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;