import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import PersonalProjects from './components/PersonalProjects';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import { BROWSER_WIDTH_THRESHOLD } from './Utils/constants';
import { BrowserWidthProvider } from './Utils/contexts/BrowserWidthContext';
import Footer from './components/Footer';
import AcademicProjects from './components/AcademicProjects';
import LandingScene from './components/landing/LandingScene';

function App() {
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

  return (
    <BrowserWidthProvider browserWidth={browserWidth}>
      <div>
        <Navbar />
        <LandingScene />
        <div
          id="top"
          className={`relative px-[10%] ${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'pt-[150px]' : 'pt-[50px]'}`}
        >
          <div
            className={`${
              browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'mt-48' : 'mt-12'
            } mb-12`}
          >
            {/* <AboutMe />
            <div className="mb-8" />
            <TechStack />
            <div className="mb-8" />
            <PersonalProjects />
            <div className="mb-8" />
            <AcademicProjects />
            <div className="mb-32" /> */}
            {/* <Contact /> */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserWidthProvider>
  );
}

export default App;
