import FirstName from './FirstName';
import LastName from './LastName';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import FirstNameBars from './FirstNameBars';
import LastNameBars from './LastNameBars';
import { BROWSER_WIDTH_THRESHOLD } from '../../Utils/constants';
import { useBrowserWidth } from '../../Utils/contexts/useBrowserWidth';

interface Props {
  isLowPixelRatio: boolean;
}

export default function Hero({
  isLowPixelRatio,
}: React.PropsWithChildren<Props>) {
  const { browserWidth } = useBrowserWidth();
  const handleMailClick = () => {
    const email = import.meta.env.VITE_EMAIL;
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:whitespace-nowrap">
      <div
        className={`${
          browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'flex' : 'hidden'
        } ${isLowPixelRatio ? '' : 'scale-[90%]'} justify-center whitespace-nowrap lg:block`}
      >
        <div>
          {isLowPixelRatio ? <FirstName /> : <FirstNameBars />}
          <div className="flex mt-8 items-end">
            {/* {isLowPixelRatio ? <LastName /> : <LastNameBars />} */}
            <div
              className={`ml-8 relative ${isLowPixelRatio ? 'bottom-8' : 'top-4'}`}
            >
              <div className="flex">
                <button
                  onClick={() =>
                    window.open('https://github.com/EdanStasiuk', '_blank')
                  }
                >
                  <FaGithub className="hover:scale-[108%] transition-transform text-[67px] text-[#DF9CFF]" />
                </button>
                <button
                  className="ml-5"
                  onClick={() =>
                    window.open(
                      'https://linkedin.com/in/edan-stasiuk',
                      '_blank'
                    )
                  }
                >
                  <FaLinkedin className="hover:scale-[108%] transition-transform text-[70px] text-[#7AAFCE]" />
                </button>
                <button className="ml-5" onClick={handleMailClick}>
                  <FiMail className="hover:scale-[108%] transition-transform text-[65px] text-[#D9D9D9]" />
                </button>
              </div>
              <div className="text-[35px] mb-[1px] roboto-flex-italic-800 text-[#C1C1C1]">
                Software Engineer
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          browserWidth < BROWSER_WIDTH_THRESHOLD ? 'block' : 'hidden'
        } flex flex-col items-center scale-[65%] lg:hidden`}
      >
        <div className="flex flex-col items-center whitespace-nowrap">
          {isLowPixelRatio ? (
            <>
              <FirstName />
              <div className="mb-4" />
              <LastName />
            </>
          ) : (
            <>
              <FirstNameBars />
              <div className="mb-4" />
              <LastNameBars />
            </>
          )}
          <div className="mb-14" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <button
              onClick={() =>
                window.open('https://github.com/EdanStasiuk', '_blank')
              }
            >
              <FaGithub className="text-[80px] text-[#DF9CFF] hover:scale-[108%] transition-transform" />
            </button>
            <button
              className="ml-7"
              onClick={() =>
                window.open('https://linkedin.com/in/edan-stasiuk', '_blank')
              }
            >
              <FaLinkedin className="text-[83px] text-[#7AAFCE] hover:scale-[108%] transition-transform" />
            </button>
            <button className="ml-7" onClick={handleMailClick}>
              <FiMail className="text-[78px] text-[#D9D9D9] hover:scale-[108%] transition-transform" />
            </button>
          </div>
          <div className="text-[45px] whitespace-nowrap roboto-flex-italic-800 text-[#C1C1C1]">
            Software Engineer
          </div>
        </div>
      </div>
    </div>
  );
}
