import { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Modal from './Modal'; // Import the Modal component

interface Props {
  projectName: string;
  projectDescription: string;
  projectImageUrl: string;
  githubUrl: string;
}

export default function Project({
  projectName,
  projectDescription,
  projectImageUrl,
  githubUrl,
}: React.PropsWithChildren<Props>) {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-white rounded-lg">
      <div
        className="flex items-end mb-4 roboto-flex-italic-700 font-semibold w-[65%] cursor-pointer pb-1"
        onClick={handleToggle}
        style={{
          borderBottom: '1px solid transparent',
          borderImage:
            'linear-gradient(to right, #1E1E1E 0%, #DF9CFF 20%, #DF9CFF 80%, #343431 90%, #1E1E1E 100%) 1',
        }}
      >
        {isVisible ? (
          <FaAngleDown
            className="text-[30px] mb-[4px] ml-1 mr-3 flex-shrink-0"
            style={{
              fontSize: 'clamp(18px, 5vw, 28px)',
            }}
          />
        ) : (
          <FaAngleUp
            className="text-[30px] mb-[4px] ml-1 mr-3 flex-shrink-0"
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
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub
            className="relative bottom-[5px] ml-3 scale-[110%] text-[#DF9CFF] cursor-pointer flex-shrink-0"
            style={{
              fontSize: 'clamp(22px, 4vw, 28px)',
            }}
          />
        </a>
      </div>

      {isVisible && (
        <div className="flex font-robotoFlex font-light">
          <div className="text-[18px] w-[65%] whitespace-pre-line text-justify mb-6">
            {projectDescription}
          </div>
          <div className="mb-4 ml-8 font-thin w-[35%]">
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
