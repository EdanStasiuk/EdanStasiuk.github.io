import { useEffect, useRef } from 'react';

const FRAME_COUNT = 38;
const FRAME_RATE = 60;

const BRANCH_FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) =>
  new URL(`../../assets/landing-pixel-assets/layer-0/branches/branch-${i + 1}.png`, import.meta.url).href
);

type Props = {
  width: number;
};

export default function Branch({ width }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const update = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;

      if (time - lastTimeRef.current >= FRAME_RATE) {
        frameRef.current = (frameRef.current + 1) % FRAME_COUNT;
        if (imgRef.current) {
          imgRef.current.src = BRANCH_FRAMES[frameRef.current];
        }
        lastTimeRef.current = time;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div 
      className="absolute right-0 bottom-[25vh]" 
      style={{ width: `${width}px` }}
    >
      <img
        ref={imgRef}
        src={BRANCH_FRAMES[0]}
        alt=""
        className="w-full h-auto block pixelated-layer"
        draggable={false}
        style={{ willChange: 'transform, opacity' }}
      />
    </div>
  );
}
