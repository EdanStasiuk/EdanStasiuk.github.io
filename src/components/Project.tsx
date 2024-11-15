import { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { PiGlobeThin } from 'react-icons/pi';
import { BROWSER_WIDTH_THRESHOLD } from '../Utils/constants';
import { useBrowserWidth } from '../Utils/contexts/useBrowserWidth';
import Modal from './Modal';

interface Props {
  projectName: string;
  projectDescription: string;
  projectImageUrl: string;
  githubUrl: string;
  websiteUrl?: string;
}

export default function Project({
  projectName,
  projectDescription,
  projectImageUrl,
  githubUrl,
  websiteUrl = undefined,
}: React.PropsWithChildren<Props>) {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [isDivHovered, setIsDivHovered] = useState(false);
  const { browserWidth } = useBrowserWidth();

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIconMouseEnter = () => {
    setIsIconHovered(true);
  };

  const handleIconMouseLeave = () => {
    setIsIconHovered(false);
  };

  const handleDivMouseEnter = () => {
    setIsDivHovered(true);
  };

  const handleDivMouseLeave = () => {
    setIsDivHovered(false);
  };

  return (
    <div className="text-white rounded-lg">
      <div
        className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'w-[65%]' : 'w-full'} flex items-end mb-4 roboto-flex-italic-700 font-semibold cursor-pointer pb-1`}
        onClick={handleToggle}
        style={{
          borderBottom: '1px solid transparent',
          borderImage:
            'linear-gradient(to right, #1E1E1E 0%, #DF9CFF 20%, #DF9CFF 80%, #343431 90%, #1E1E1E 100%) 1',
        }}
        onMouseEnter={handleDivMouseEnter}
        onMouseLeave={handleDivMouseLeave}
      >
        {isVisible ? (
          <FaAngleDown
            className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 500 ? 'mb-[2px] mr-3' : 'mr-2'} ${
              !isIconHovered && isDivHovered && 'text-[#DC9CFF]'
            } hover:text-[#DC9CFF] text-[30px] ml-1 flex-shrink-0`}
            style={{
              fontSize: 'clamp(18px, 5vw, 28px)',
            }}
          />
        ) : (
          <FaAngleUp
            className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 500 ? 'mb-[2px] mr-3' : 'mr-2'} ${
              !isIconHovered && isDivHovered && 'text-[#DC9CFF]'
            } hover:text-[#DC9CFF] text-[30px] ml-1 flex-shrink-0`}
            style={{
              fontSize: 'clamp(18px, 5vw, 28px)',
            }}
          />
        )}
        <span
          className="relative top-[6px] text-nowrap"
          style={{
            fontSize: 'clamp(18px, 5vw, 28px)',
          }}
        >
          {projectName}
        </span>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleIconMouseEnter}
          onMouseLeave={handleIconMouseLeave}
        >
          <FaGithub
            className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 500 ? 'bottom-[5px]' : 'bottom-[3px]'} relative ml-[14px] scale-[111%] hover:scale-[121%] transition-transform text-[#DF9CFF] cursor-pointer flex-shrink-0`}
            style={{
              fontSize: 'clamp(18px, 5vw, 28px)',
            }}
          />
        </a>
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleIconMouseEnter}
          onMouseLeave={handleIconMouseLeave}
        >
          {websiteUrl && (
            <PiGlobeThin
              className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD - 500 ? 'bottom-[5px]' : 'bottom-[3px]'} relative ml-[12px] scale-[132%] hover:scale-[142%] transition-transform text-[#D9D9D9] cursor-pointer flex-shrink-0`}
              style={{
                fontSize: 'clamp(18px, 5vw, 28px)',
              }}
            />
          )}
        </a>
      </div>

      {isVisible && (
        <div
          className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'flex' : ''} font-robotoFlex font-light`}
        >
          <div
            className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'w-[65%]' : 'w-full'} text-[16px] sm:text-[19px] md:text-[22px] whitespace-pre-line mb-6`}
          >
            {projectDescription}
          </div>
          <div
            className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'w-[35%] ml-8' : 'w-full'} mb-4 font-thin`}
          >
            <img
              src={projectImageUrl}
              alt={projectName}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={openModal}
            />
          </div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={projectImageUrl}
        imageAlt={projectName}
      />
    </div>
  );
}
