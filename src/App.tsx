import FirstName from './components/FirstName';
import LastName from './components/LastName';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
function App() {
  return (
    <div className="px-[10%] pt-[150px]">
      {/* Layout for smaller screens */}
      <div className="block lg:hidden">
        <div className="flex flex-col items-center scale-[65%]">
          <div className="flex flex-col items-center whitespace-nowrap">
            <FirstName />
            <div className="mb-4" />
            <LastName />
            <div className="mb-16" />
          </div>
          <div className="flex flex-col items-center mt-8 text-baseline">
            <div className="flex relative mb-6">
              <FaGithub className="scale-[400%] text-[#DF9CFF]" />
              <FaLinkedin className="scale-[425%] text-[#7AAFCE] ml-16" />
              <FiMail className="scale-[375%] text-[#D9D9D9] ml-16" />
            </div>
            <div className="roboto-flex-italic text-[35px] text-[#C1C1C1]">
              Software Engineer
            </div>
          </div>
        </div>
      </div>

      {/* Layout for larger screens */}
      <div className="hidden lg:block">
        <div className="flex justify-center scale-[85%] whitespace-nowrap">
          <div>
            <div className="">
              <FirstName />
            </div>
            <div className="flex mt-8 items-end">
              <div>
                <LastName />
              </div>
              <div className="ml-8 text-baseline relative top-4">
                <div className="flex relative left-6 mb-6">
                  <FaGithub className="scale-[400%] text-[#DF9CFF]" />
                  <FaLinkedin className="scale-[425%] text-[#7AAFCE] ml-16" />
                  <FiMail className="scale-[375%] text-[#D9D9D9] ml-16" />
                </div>
                <div className="roboto-flex-italic text-[35px] text-[#C1C1C1]">
                  Software Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
