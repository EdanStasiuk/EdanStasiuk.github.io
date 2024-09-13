import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useBrowserWidth } from '../Utils/contexts/useBrowserWidth';
import { BROWSER_WIDTH_THRESHOLD } from '../Utils/constants';

export default function Footer() {
  const { browserWidth } = useBrowserWidth();

  const handleMailClick = () => {
    const email = import.meta.env.VITE_EMAIL;
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer
      className={`bg-tails-background text-white ${browserWidth >= BROWSER_WIDTH_THRESHOLD - 200 ? 'py-8 ' : 'py-5'} px-5 border-t-2 border-tails-border`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-center space-x-10">
        <button
          onClick={() =>
            window.open('https://github.com/EdanStasiuk', '_blank')
          }
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub
            className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 200 ? 'text-3xl' : 'text-2xl'} text-[#DF9CFF]`}
          />
        </button>
        <button
          onClick={() =>
            window.open('https://linkedin.com/in/edan-stasiuk', '_blank')
          }
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin
            className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 200 ? 'text-3xl' : 'text-2xl'} text-[#7AAFCE]`}
          />
        </button>
        <button
          onClick={handleMailClick}
          aria-label="Email"
          className="hover:scale-110 transition-transform"
        >
          <FiMail
            className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 200 ? 'text-3xl' : 'text-2xl'} text-[#D9D9D9]`}
          />
        </button>
      </div>
      <p
        className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 200 ? 'text-sm' : 'text-xs'} text-center text-sm mt-5 text-[#B3B3B3]`}
      >
        © 2024 Edan Stasiuk. All rights reserved.
      </p>
    </footer>
  );
}
