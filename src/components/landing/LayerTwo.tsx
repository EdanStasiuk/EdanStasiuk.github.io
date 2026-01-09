import { RefObject, useEffect, useState } from 'react';
import backgroundBuildings0 from '../../assets/landing-pixel-assets/layer-2/2-background-buildings-0.png';
import backgroundBuildings1 from '../../assets/landing-pixel-assets/layer-2/2-background-buildings-1.png';

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerTwo({ sceneRef, scrollY }: Props) {
  const [frame, setFrame] = useState(0);
  const [width, setWidth] = useState(0);
  const scrollMove = scrollY * 0.6;

  // flicker effect
  useEffect(() => {
    let timeout: number;
    const flicker = () => {
      setFrame(f => (f === 0 ? 1 : 0));
      timeout = setTimeout(flicker, 120 + Math.random() * 220);
    };
    flicker();
    return () => clearTimeout(timeout);
  }, []);

  // scale with scene width
  useEffect(() => {
    const updateLayout = () => {
      const scene = sceneRef.current;
      if (!scene) return;
      setWidth(scene.clientWidth);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [sceneRef]);

  return (
    <div 
      className="absolute pixelated inset-0 z-20 pointer-events-none"
      style={{ transform: `translateY(${scrollMove}px)` }}
    >
      <img
        src={frame === 0 ? backgroundBuildings0 : backgroundBuildings1}
        alt=""
        style={{ width: `${width}px`, height: 'auto' }}
        className="absolute left-0 bottom-0"
      />
    </div>
  );
}
