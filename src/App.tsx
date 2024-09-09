import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import PersonalProjects from './components/PersonalProjects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BROWSER_WIDTH_THRESHOLD } from './config/constants';
import { BrowserWidthProvider } from './config/contexts/BrowserWidthContext';

function App() {
  const [isLowPixelRatio] = useState(true);
  const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const pixelRatio = window.devicePixelRatio;

  //   const lowPixelRatioThreshold = 2;

  //   if (pixelRatio < lowPixelRatioThreshold) {
  //     setIsLowPixelRatio(true);
  //   }
  // }, []);

  return (
    <BrowserWidthProvider browserWidth={browserWidth}>
      <div>
        <Navbar />
        <div
          id="top"
          className={`px-[10%] ${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'pt-[150px]' : 'pt-[50px]'}`}
        >
          <Hero isLowPixelRatio={isLowPixelRatio} />
          <div
            className={`${
              browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'mt-48' : 'mt-12'
            } mb-12`}
          >
            <AboutMe />
            <div className="mb-8" />
            <TechStack />
            <div className="mb-8" />
            <PersonalProjects />
            <div className="mb-8" />
            <Contact />
          </div>
        </div>
      </div>
    </BrowserWidthProvider>
  );
}

export default App;
