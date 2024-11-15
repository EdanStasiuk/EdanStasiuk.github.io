import { useEffect, useState } from 'react';
import { useBrowserWidth } from '../Utils/contexts/useBrowserWidth';
import { BROWSER_WIDTH_THRESHOLD } from '../Utils/constants';

export default function Navbar() {
  const [padding, setPadding] = useState('py-4');
  const [fontSize, setFontSize] = useState('text-[clamp(15px,2vw,24px)]');
  const { browserWidth } = useBrowserWidth();

  useEffect(() => {
    const handleScroll = () => {

      // Update padding based on scroll position
      const newPadding = window.scrollY > 75 ? '' : 'py-4';
      setPadding(newPadding);

      const newFontSize =
        window.scrollY > 75
          ? 'text-[clamp(15px,2vw,20px)]'
          : 'text-[clamp(15px,2vw,24px)]';
      setFontSize(newFontSize);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('div.sticky.top-0');
      const navbarHeight = navbar ? navbar.clientHeight : 0;

      window.scrollTo({
        top: element.offsetTop - navbarHeight - 10,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 500 ? 'px-[10%]' : ''} sticky top-0 ${padding} text-white z-10 bg-tails-background border-[#343431] border-b-2 text-nowrap`}
      style={{
        transition: 'padding 0.4s ease',
      }}
    >
      <div className={`flex justify-between items-center`}>
        <nav
          className={`flex font-robotoFlex font-thin ${fontSize} w-full justify-between text-wrap`}
          style={{ transition: 'fontSize 0.4s ease' }}
        >
          <div className="flex justify-center px-2">
            <a
              href="#top"
              className={`text-center hover:text-[#DF9CFF] ${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'p-4' : 'p-3'} rounded`}
              onClick={(e) => scrollToSection(e, 'top')}
            >
              Socials
            </a>
          </div>
          <div className="flex justify-center px-2">
            <a
              href="#about"
              className={`text-center hover:text-[#DF9CFF] ${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'p-4' : 'p-3'} rounded`}
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About Me
            </a>
          </div>
          <div className="flex justify-center px-2">
            <a
              href="#stack"
              className={`text-center hover:text-[#DF9CFF] ${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'p-4' : 'p-3'} rounded`}
              onClick={(e) => scrollToSection(e, 'stack')}
            >
              Stack
            </a>
          </div>
          <div className="flex justify-center px-2">
            <a
              href="#projects"
              className={`text-center hover:text-[#DF9CFF] ${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'p-4' : 'p-3'} rounded`}
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              Projects
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
