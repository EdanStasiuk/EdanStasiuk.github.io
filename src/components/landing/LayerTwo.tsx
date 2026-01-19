import { RefObject, useEffect, useState } from 'react';
import backgroundBuildings0 from '../../assets/landing-pixel-assets/layer-2/2-background-buildings-0.png';
import backgroundBuildings1 from '../../assets/landing-pixel-assets/layer-2/2-background-buildings-1.png';

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerTwo({ scrollY }: Props) {
  const [frame, setFrame] = useState(0);
  const scrollMove = Math.round(scrollY * 0.6);

  // Flicker effect
  useEffect(() => {
    let timeout: number;
    const flicker = () => {
      setFrame(f => (f === 0 ? 1 : 0));
      timeout = window.setTimeout(flicker, 120 + Math.random() * 220);
    };
    flicker();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none pixelated"
      style={{
        transform: `translate3d(0, ${scrollMove}px, 0)`,
        willChange: 'transform',
      }}
    >
      <img
        src={backgroundBuildings0}
        alt=""
        className={`absolute left-0 bottom-0 w-full h-auto transition-opacity duration-0 ${
          frame === 0 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'opacity' }}
        draggable={false}
      />
      <img
        src={backgroundBuildings1}
        alt=""
        className={`absolute left-0 bottom-0 w-full h-auto transition-opacity duration-0 ${
          frame === 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'opacity' }}
        draggable={false}
      />
    </div>
  );
}
