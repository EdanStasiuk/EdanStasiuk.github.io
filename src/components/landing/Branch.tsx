import { useState, useEffect } from 'react';

const n = 19;
const FRAMES: number[] = Array.from({ length: n }, (_, i) => i + 1);
const FRAME_RATE = 120;

export default function Branch({ width }: { width: number }) {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % FRAMES.length);
    }, FRAME_RATE);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="absolute right-0 bottom-[25vh]" 
      style={{ width: `${width}px` }}
    >
      <div className="relative w-full h-full">
        {FRAMES.map((frameValue, index) => {
          const src = new URL(
            `../../assets/landing-pixel-assets/layer-0/branches/branch-${frameValue}.png`,
            import.meta.url
          ).href;

          return (
            <img
              key={frameValue}
              src={src}
              alt=""
              className={`w-full h-auto block pixelated ${
                currentFrame === index 
                  ? 'relative opacity-100' 
                  : 'absolute bottom-0 right-0 opacity-0'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}