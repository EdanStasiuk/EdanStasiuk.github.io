import { RefObject } from 'react';
import backgroundBuildings from '../../assets/landing-pixel-assets/layer-3/3-background-buildings.png';

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerThree({ scrollY }: Props) {
  // Round to avoid sub-pixel shimmer
  const scrollMove = Math.round(scrollY * 0.8);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        transform: `translate3d(0, ${scrollMove}px, 0)`,
        willChange: 'transform',
      }}
    >
      <img
        src={backgroundBuildings}
        alt=""
        className="absolute left-0 bottom-0 w-full h-auto pixelated"
        draggable={false}
      />
    </div>
  );
}
