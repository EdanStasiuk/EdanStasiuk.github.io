import { RefObject, useEffect, useState } from 'react';
import sun1 from '../../assets/landing-pixel-assets/layer-4/sun-1.png';
import sun2 from '../../assets/landing-pixel-assets/layer-4/sun-2.png';

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerFour({ sceneRef, scrollY }: Props) {
  const [frame, setFrame] = useState(sun1);
  const [sunWidth, setSunWidth] = useState(0);

  const maxScroll = 300;
  const progress = Math.min(scrollY / maxScroll, 1);
  const moveX = progress * 1200;
  const moveY = 800 * Math.pow(progress, 2);

  useEffect(() => {
    const updateLayout = () => {
      if (!sceneRef.current) return;
      setSunWidth(sceneRef.current.clientWidth / 15);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    
    const interval = setInterval(() => {
      setFrame(prev => (prev === sun1 ? sun2 : sun1));
    }, 200);

    return () => {
      window.removeEventListener('resize', updateLayout);
      clearInterval(interval);
    };
  }, [sceneRef]);

  return (
    <div 
      className="absolute inset-0 -z-20 pointer-events-none"
      style={{ 
        transform: `translate(${moveX}px, ${moveY}px)`,
        willChange: 'transform'
      }}
    >
      <img
        src={frame}
        alt="sun"
        style={{ 
          width: `${sunWidth}px`, 
          height: 'auto',
          top: '25%',
          left: '22%' 
        }}
        className="absolute"
      />
    </div>
  );
}