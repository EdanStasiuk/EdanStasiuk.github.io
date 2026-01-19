import { useEffect, useRef } from 'react';
import birdBase from '../../assets/landing-pixel-assets/layer-0/birds/bird-base-model.png';
import birdEyeClosed from '../../assets/landing-pixel-assets/layer-0/birds/bird-eye-closed.png';
import birdHeadBob from '../../assets/landing-pixel-assets/layer-0/birds/bird-head-bob.png';
import birdHeadTurn1 from '../../assets/landing-pixel-assets/layer-0/birds/bird-head-turn-1.png';
import birdHeadTurn2 from '../../assets/landing-pixel-assets/layer-0/birds/bird-head-turn-2.png';

type Props = {
  width: number;
  bottomOffset?: string;
  rightOffset?: string;
};

// Precompute the sequence
const SEQUENCE = [
  { frame: birdHeadTurn1, duration: 200 },
  { frame: birdHeadTurn2, duration: 500 },
  { frame: birdHeadTurn1, duration: 200 },
  { frame: birdBase, duration: 2500 },
  { frame: birdEyeClosed, duration: 200 },
  { frame: birdBase, duration: 200 },
  { frame: birdEyeClosed, duration: 200 },
  { frame: birdBase, duration: 1500 },
  { frame: birdHeadBob, duration: 100 },
  { frame: birdBase, duration: 100 },
  { frame: birdHeadBob, duration: 100 },
  { frame: birdBase, duration: 3000 },
];

export default function Bird({ width, bottomOffset = '20vh', rightOffset = '15%' }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const frameIndex = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const elapsedRef = useRef<number>(0);

  const birdSize = width / 6;

  useEffect(() => {
    let animationFrameId: number;

    const update = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      elapsedRef.current += delta;

      const currentFrame = SEQUENCE[frameIndex.current];
      if (elapsedRef.current >= currentFrame.duration) {
        frameIndex.current = (frameIndex.current + 1) % SEQUENCE.length;
        if (imgRef.current) {
          imgRef.current.src = SEQUENCE[frameIndex.current].frame;
        }
        elapsedRef.current = 0;
      }

      lastTimeRef.current = time;
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <img
      ref={imgRef}
      src={SEQUENCE[0].frame}
      alt="bird"
      style={{
        width: `${birdSize}px`,
        height: `${birdSize}px`,
        objectFit: 'contain',
        objectPosition: 'bottom right',
        bottom: bottomOffset,
        right: rightOffset,
      }}
      className="absolute pixelated"
      draggable={false}
    />
  );
}
