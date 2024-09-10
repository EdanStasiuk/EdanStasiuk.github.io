import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the gradient position based on the scroll position
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const gradientPos = scrollPos / maxScroll;

  const colorStart = gradientPos * 100 - 15;
  const colorEnd = gradientPos * 100;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 140,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="sticky top-0 py-3 text-white z-10 bg-background px-[10%] text-nowrap"
      style={{
        borderBottom: '2px solid transparent',
        borderImage: `linear-gradient(to right, #343431 ${Math.max(0, colorStart)}%, #DF9CFF ${Math.max(0, colorEnd)}%, #343431 ${Math.min(100, colorEnd + 15)}%) 1`,
      }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <nav className="flex font-robotoFlex font-thin text-[clamp(14px,2vw,24px)] w-full justify-between">
          <div className="flex justify-center px-2">
            <a
              href="#top"
              className="hover:text-[#DF9CFF]"
              onClick={(e) => scrollToSection(e, 'top')}
            >
              Socials
            </a>
          </div>
          <div className="flex justify-center px-2">
            <a
              href="#about"
              className="hover:text-[#DF9CFF]"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About Me
            </a>
          </div>
          <div className="flex justify-center px-2">
            <a
              href="#stack"
              className="hover:text-[#DF9CFF]"
              onClick={(e) => scrollToSection(e, 'stack')}
            >
              Stack
            </a>
          </div>
          <div className="flex justify-center px-2">
            <a
              href="#projects"
              className="hover:text-[#DF9CFF]"
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
