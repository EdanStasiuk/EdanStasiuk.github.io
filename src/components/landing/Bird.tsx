import { useEffect, useRef } from 'react';
import birdBase from '../../assets/landing-pixel-assets/layer-0/birds/bird-base-model.png';
import birdEyeClosed from '../../assets/landing-pixel-assets/layer-0/birds/bird-eye-closed.png';
import birdHeadBob from '../../assets/landing-pixel-assets/layer-0/birds/bird-head-bob.png';
import birdHeadTurn1 from '../../assets/landing-pixel-assets/layer-0/birds/bird-head-turn-1.png';
import birdHeadTurn2 from '../../assets/landing-pixel-assets/layer-0/birds/bird-head-turn-2.png';
import speechBubble from '../../assets/landing-pixel-assets/layer-0/speech-bubble.png';
import downArrow from '../../assets/landing-pixel-assets/layer-0/down-arrow.png';

type Props = {
  width: number;
  bottomOffset?: string;
  rightOffset?: string;
};

// Precompute the sequence for the bird animation
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

export default function Bird({
  width,
  bottomOffset = '20vh',
  rightOffset = '15%',
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const frameIndex = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const elapsedRef = useRef<number>(0);

  const birdSize = width / 6;

  // Bubble sizing
  const bubbleWidth = Math.round(birdSize * 2.8);
  const bubbleHeight = Math.round(birdSize * 1.4);
  const bubbleFontSize = Math.round(birdSize * 0.22 * 10) / 10;
  const bubblePaddingX = 0;
  const bubblePaddingY = 0;

  // Bird animation loop
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
    <div
      className="absolute pixelated-layer"
      style={{
        bottom: bottomOffset,
        right: rightOffset,
        width: birdSize,
        height: birdSize,
      }}
    >
      {/* Speech bubble */}
      <div
        className="absolute pixelated-layer"
        style={{
          left: `-${bubbleWidth * 0.90}px`,
          top: `-${bubbleHeight * 0.57}px`,
          width: bubbleWidth,
          height: bubbleHeight,
        }}
      >
        {/* Bubble image */}
        <img
          src={speechBubble}
          alt="speech bubble"
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />

        {/* Bubble text + down arrow inline */}
        <div
          className="font-pixel text-scene-text"
          style={{
            position: 'absolute',
            inset: `${bubblePaddingY}px ${bubblePaddingX}px`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: bubbleFontSize,
            lineHeight: '1.2',
            pointerEvents: 'none',
            color: 'inherit',
            paddingRight: bubbleFontSize * 0.8,
            gap: Math.round(bubbleFontSize * 0.3),
            letterSpacing: bubbleFontSize * 0.03,
          }}
        >
          <span className='text-scene-text'>No flying... just scrolling!</span>
          <img
            src={downArrow}
            alt="down arrow"
            style={{
              width: bubbleFontSize * 0.5,
              height: 'auto',
              flexShrink: 0,
              paddingBottom: bubbleFontSize * 0.1,
            }}
          />
        </div>
      </div>

      {/* Bird */}
      <img
        ref={imgRef}
        src={SEQUENCE[0].frame}
        alt="bird"
        draggable={false}
        style={{
          width: birdSize,
          height: birdSize,
          objectFit: 'contain',
        }}
      />
    </div>
  );
}
