import { RefObject, useEffect, useRef } from 'react';
import bridgeImg from '../../assets/landing-pixel-assets/layer-1/1-forefront-buildings-and-bridge-0.png';
import trainImg from '../../assets/landing-pixel-assets/layer-1/1-train.png';

const TRAIN_WIDTH_RATIO = 3.3;
const ANIMATION_SPEED = 0.0023;

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerOne({ sceneRef, scrollY }: Props) {
  const trainRef = useRef<HTMLImageElement>(null);
  const bridgeRef = useRef<HTMLImageElement>(null);
  const progressRef = useRef(1.2);
  const rafRef = useRef<number>();

  const scrollMove = Math.round(scrollY * 0.46);

  useEffect(() => {
    const animateTrain = () => {
      const train = trainRef.current;
      const bridge = bridgeRef.current;
      const scene = sceneRef.current;

      // Check existence every frame to handle potential unmounts
      if (!train || !bridge || !scene) {
        rafRef.current = requestAnimationFrame(animateTrain);
        return;
      }

      // Yes, I'm layout thrashing but honestly fuck it, not sure how else to prevent the
      // train from getting all jittery when trying to keep its alignment with the bridge
      // on browser resize.
      const sceneW = scene.offsetWidth;
      const bridgeH = bridge.getBoundingClientRect().height;
      const trainH = train.getBoundingClientRect().height;

      progressRef.current -= ANIMATION_SPEED;
      if (progressRef.current < -0.6) {
        progressRef.current = 1.5 + Math.random() * 2;
      }

      const trainWidth = sceneW / TRAIN_WIDTH_RATIO;
      const trainY = bridgeH - (trainH * 9.23);
      const xPos = progressRef.current * sceneW;

      train.style.width = `${trainWidth}px`;
      train.style.transform = `translate3d(${xPos}px, ${trainY}px, 0)`;

      rafRef.current = requestAnimationFrame(animateTrain);
    };

    rafRef.current = requestAnimationFrame(animateTrain);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sceneRef]);

  return (
    <div className="absolute inset-0 pixelated-layer pointer-events-none z-30 will-change-transform">
      <div
        className="bridge-container relative w-full h-full"
        style={{ transform: `translate3d(0, ${scrollMove}px, 0)` }}
      >
        <img
          ref={trainRef}
          src={trainImg}
          alt=""
          className="scene-layer train-layer absolute will-change-transform left-0 bottom-0"
          style={{ zIndex: 10 }}
        />

        <img
          ref={bridgeRef}
          src={bridgeImg}
          alt="Bridge"
          className="scene-layer bridge-layer absolute left-0 bottom-0 w-full"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', zIndex: 20 }}
        />
      </div>
    </div>
  );
}