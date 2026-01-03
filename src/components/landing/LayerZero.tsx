import { RefObject, useEffect, useState } from 'react';
import branch from '../../assets/landing-pixel-assets/layer-0/branch.png';

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerZero({ sceneRef, scrollY }: Props) {
  const [width, setWidth] = useState(0);
  const translateX = scrollY * 1.5;

  useEffect(() => {
    const updateLayout = () => {
      const scene = sceneRef.current;
      if (!scene) return;

      // scale branch width
      setWidth(scene.clientWidth / 1.9);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [sceneRef]);

  return (
    <div 
      style={{ transform: `translateX(${translateX}px)` }}
      className="absolute inset-0 z-30 pointer-events-none"
    >
      <img
        src={branch}
        alt=""
        style={{
          width: `${width}px`,
          height: 'auto',
        }}
        className="absolute right-0 bottom-[15vh]"
      />
    </div>
  );
}
