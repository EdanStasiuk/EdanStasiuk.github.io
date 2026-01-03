import { useEffect, useState } from 'react';
import birdBase from '../../assets/landing-pixel-assets/layer-0/bird-base-model.png';
import birdEyeClosed from '../../assets/landing-pixel-assets/layer-0/bird-eye-closed.png';
import birdHeadBob from '../../assets/landing-pixel-assets/layer-0/bird-head-bob.png';
import birdHeadTurn1 from '../../assets/landing-pixel-assets/layer-0/bird-head-turn-1.png';
import birdHeadTurn2 from '../../assets/landing-pixel-assets/layer-0/bird-head-turn-2.png';

type Props = {
  width: number;          // reference width to scale bird relative to branch
  bottomOffset?: string;  // optional vertical offset
  rightOffset?: string;   // optional horizontal offset
};

export default function Bird({ width, bottomOffset = '20vh', rightOffset = '15%' }: Props) {
  const [frame, setFrame] = useState(birdBase);

  const birdSize = width / 6;

  useEffect(() => {
    const sequence = [
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

    let current = 0;
    let timeoutId: number;

    const nextFrame = () => {
      setFrame(sequence[current].frame);
      timeoutId = setTimeout(() => {
        current = (current + 1) % sequence.length;
        nextFrame();
      }, sequence[current].duration);
    };

    nextFrame();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <img
      src={frame}
      alt="bird"
      style={{
        width: `${birdSize}px`,
        height: `${birdSize}px`,
        objectFit: 'contain',
        objectPosition: 'bottom right',
        bottom: bottomOffset,
        right: rightOffset,
      }}
      className={`absolute transition-transform`}
    />
  );
}
