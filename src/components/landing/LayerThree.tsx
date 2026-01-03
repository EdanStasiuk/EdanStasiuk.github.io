import { RefObject, useEffect, useState } from 'react';
import backgroundBuildings0 from '../../assets/landing-pixel-assets/layer-3/3-background-buildings.png';
import backgroundBuildings1 from '../../assets/landing-pixel-assets/layer-3/3-background-buildings.png';

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
};

export default function LayerThree({ sceneRef }: Props) {
  const [frame, setFrame] = useState(0);
  const [width, setWidth] = useState(0);

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
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <img
        src={frame === 0 ? backgroundBuildings0 : backgroundBuildings1}
        alt=""
        style={{ width: `${width}px`, height: 'auto' }}
        className="absolute -0 bottom-0"
      />
    </div>
  );
}
