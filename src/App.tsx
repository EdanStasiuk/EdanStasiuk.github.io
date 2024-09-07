import { useState, useEffect } from 'react';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import FirstNameBars from './components/FirstNameBars';
import LastNameBars from './components/LastNameBars';

function App() {
  const [isLowPixelRatio, setIsLowPixelRatio] = useState(false);
  const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth);

  const browserWidthTheshold = 1024;

  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio;

    const lowPixelRatioThreshold = 1.5;

    if (pixelRatio <= lowPixelRatioThreshold) {
      setIsLowPixelRatio(true);
    }
  }, []);

  return (
    <div className="px-[10%] pt-[150px]">
      <div
        className={`${browserWidth >= browserWidthTheshold ? 'hidden lg:block' : 'block lg:hidden'}`}
      >
        <div
          className={`${browserWidth >= browserWidthTheshold ? 'flex justify-center whitespace-nowrap scale-[80%]' : 'flex flex-col items-center scale-[65%]'}`}
        >
          {browserWidth >= browserWidthTheshold ? (
            <>
              <div>
                {isLowPixelRatio ? (
                  <FirstName
                    browserWidth={browserWidth}
                    browserWidthTheshold={browserWidthTheshold}
                  />
                ) : (
                  <FirstNameBars />
                )}
                <div className="flex mt-8 items-end">
                  {isLowPixelRatio ? (
                    <LastName
                      browserWidth={browserWidth}
                      browserWidthTheshold={browserWidthTheshold}
                    />
                  ) : (
                    <LastNameBars />
                  )}
                  <div className="ml-8 text-baseline relative top-4">
                    <div className="flex relative left-6 mb-6">
                      <FaGithub className="scale-[400%] text-[#DF9CFF]" />
                      <FaLinkedin className="scale-[425%] text-[#7AAFCE] ml-16" />
                      <FiMail className="scale-[375%] text-[#D9D9D9] ml-16" />
                    </div>
                    <div className="text-[35px] mb-[1px] roboto-flex-italic text-[#C1C1C1]">
                      Software Engineer
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center whitespace-nowrap">
                {isLowPixelRatio ? (
                  <>
                    <FirstName
                      browserWidth={browserWidth}
                      browserWidthTheshold={browserWidthTheshold}
                    />
                    <div className="mb-4" />
                    <LastName
                      browserWidth={browserWidth}
                      browserWidthTheshold={browserWidthTheshold}
                    />
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
              <div className="flex flex-col items-center mt-8 text-baseline">
                <div className="flex relative items-center mb-8">
                  <FaGithub className={`scale-[500%] text-[#DF9CFF]`} />
                  <FaLinkedin
                    className={`scale-[525%] ml-[84px] text-[#7AAFCE]`}
                  />
                  <FiMail className={`scale-[475%] ml-[84px] text-[#D9D9D9]`} />
                </div>
                <div
                  className={`text-[45px] whitespace-nowrap roboto-flex-italic text-[#C1C1C1]`}
                >
                  Software Engineer
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
