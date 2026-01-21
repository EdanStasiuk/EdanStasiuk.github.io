import { RefObject } from 'react';
import backgroundBuildings from '../../assets/landing-pixel-assets/layer-2/2-background-buildings-0.png';

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerTwo({ scrollY }: Props) {
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const scrollMove = Math.round(scrollY * 0.6 * dpr) / dpr;

  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none"
      style={{
        transform: `translate3d(0px, ${scrollMove}px, 0px)`,
        willChange: 'transform',
      }}
    >
      <img
        src={backgroundBuildings}
        className="absolute pixelated-layer left-0 bottom-0 w-full h-auto"
        draggable={false}
      />
    </div>
  );
}
