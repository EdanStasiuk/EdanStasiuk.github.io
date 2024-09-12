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
            {isLowPixelRatio ? <LastName /> : <LastNameBars />}
            <div
              className={`ml-8 relative ${isLowPixelRatio ? 'bottom-8' : 'top-4'}`}
            >
              <div className="flex relative left-6 mb-6">
                <button
                  onClick={() =>
                    window.open('https://github.com/EdanStasiuk', '_blank')
                  }
                >
                  <FaGithub className="scale-[400%] text-[#DF9CFF]" />
                </button>
                <button
                  className="ml-16"
                  onClick={() =>
                    window.open(
                      'https://linkedin.com/in/edan-stasiuk',
                      '_blank'
                    )
                  }
                >
                  <FaLinkedin className="scale-[425%] text-[#7AAFCE]" />
                </button>
                <button className="ml-16" onClick={handleMailClick}>
                  <FiMail className="scale-[375%] text-[#D9D9D9]" />
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
          <div className="mb-16" />
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="flex relative items-center mb-8">
            <button onClick={() => window.open('https://github.com/EdanStasiuk', '_blank')}>
              <FaGithub className="scale-[500%] text-[#DF9CFF]" />
            </button>
            <button
              className="ml-[84px]"
              onClick={() => window.open('https://linkedin.com/in/edan-stasiuk', '_blank')}
            >
              <FaLinkedin className="scale-[525%] text-[#7AAFCE]" />
            </button>
            <button className="ml-[84px]" onClick={handleMailClick}>
              <FiMail className="scale-[475%] text-[#D9D9D9]" />
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
