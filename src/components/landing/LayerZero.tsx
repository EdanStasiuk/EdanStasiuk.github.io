import { RefObject, useEffect, useState } from 'react';
import Bird from './Bird';
import Branch from './Branch';

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
      setWidth(scene.clientWidth / 1.9);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [sceneRef]);

  const birdRightOffset = width * 0.428;
  const birdBottomOffset = `calc(25vh + ${width * 0.28}px)`;

  return (
    <div 
      style={{ transform: `translateX(${translateX}px)` }}
      className="absolute pixelated-layer inset-0 z-30 pointer-events-none"
    >
      <div className="relative w-full h-full">
        <Branch width={width} />
        
        <Bird 
          width={width} 
          bottomOffset={birdBottomOffset} 
          rightOffset={`${birdRightOffset}px`} 
        />
      </div>
    </div>
  );
}