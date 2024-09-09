interface Props {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-secondary-background rounded-lg p-4 flex w-[65%] h-[65%] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-1 right-2 text-[48px] font-extralight"
          style={{
            fontFamily: 'sans, sans-serif',
            fontWeight: 50,
            lineHeight: '1',
          }}
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
