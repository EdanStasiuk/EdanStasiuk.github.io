import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  const handleMailClick = () => {
    const email = import.meta.env.VITE_EMAIL;
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="bg-tails-background text-white py-8 px-5 border-t-2 border-tails-border">
      <div className="max-w-screen-xl mx-auto flex justify-center space-x-10">
        <button
          onClick={() => window.open('https://github.com/EdanStasiuk', '_blank')}
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub className="text-3xl text-[#DF9CFF]" />
        </button>
        <button
          onClick={() => window.open('https://linkedin.com/in/edan-stasiuk', '_blank')}
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-3xl text-[#7AAFCE]" />
        </button>
        <button
          onClick={handleMailClick}
          aria-label="Email"
          className="hover:scale-110 transition-transform"
        >
          <FiMail className="text-3xl text-[#D9D9D9]" />
        </button>
      </div>
      <p className="text-center text-sm mt-5 text-[#B3B3B3]">
        © 2024 Edan Stasiuk. All rights reserved.
      </p>
    </footer>
  );
}
