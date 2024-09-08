import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [isLowPixelRatio] = useState(true);
  const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth);

  const browserWidthThreshold = 1024;

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
    <div>
      <Navbar />
      <div id="top" className={`px-[10%] ${browserWidth >= browserWidthThreshold ? "pt-[150px]" : "pt-[50px]"}`}>
        <Hero browserWidth={browserWidth} browserWidthThreshold={browserWidthThreshold} isLowPixelRatio={isLowPixelRatio} />
        <div
          className={`${
            browserWidth >= browserWidthThreshold ? 'mt-48' : 'mt-12'
          } mb-12`}
        >
          <AboutMe />
          <div className="mb-8" />
          <TechStack />
          <div className="mb-8" />
          <Projects />
          <div className="mb-8" />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
