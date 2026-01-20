import { RefObject, useEffect, useRef, useState } from 'react';
import bridgeImg0 from '../../assets/landing-pixel-assets/layer-1/1-forefront-buildings-and-bridge-0.png';
import bridgeImg1 from '../../assets/landing-pixel-assets/layer-1/1-forefront-buildings-and-bridge-1.png';
import trainImg from '../../assets/landing-pixel-assets/layer-1/1-train.png';

const TRAIN_WIDTH_RATIO = 3.3;
const ANIMATION_SPEED = 0.0023;
const BRIDGE_FLICKER_INTERVAL = 200;

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerOne({ sceneRef, scrollY }: Props) {
  const trainRef = useRef<HTMLImageElement>(null);
  const bridgeRefs = [useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null)];
  const progressRef = useRef(1.2);
  const rafRef = useRef<number>();
  const [bridgeFrame, setBridgeFrame] = useState(0);

  const scrollMove = Math.round(scrollY * 0.46);

  // Train animation loop
  useEffect(() => {
    const train = trainRef.current;
    const bridge = bridgeRefs[0].current;
    const scene = sceneRef.current;

    if (!train || !bridge || !scene) return;

    const animateTrain = () => {
      const sceneW = scene.offsetWidth;
      const bridgeH = bridge.offsetHeight;
      const trainH = train.offsetHeight;

      progressRef.current -= ANIMATION_SPEED;
      if (progressRef.current < -0.6) {
        // Resets to a random distance between 1.5 and 3.5 
        progressRef.current = 1.5 + Math.random() * 2; 
      }

      const trainWidth = sceneW / TRAIN_WIDTH_RATIO;
      const trainY = Math.round(bridgeH - trainH * 9.23);
      const xPos = Math.round(progressRef.current * sceneW);

      train.style.width = `${trainWidth}px`;
      train.style.transform = `translate3d(${xPos}px, ${trainY}px, 0)`;

      rafRef.current = requestAnimationFrame(animateTrain);
    };

    rafRef.current = requestAnimationFrame(animateTrain);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sceneRef, bridgeRefs]);

  useEffect(() => {
    let frameId: number;

    const updateBridgeFrame = () => {
      const t = performance.now();
      setBridgeFrame(Math.floor(t / BRIDGE_FLICKER_INTERVAL) % 2);
      frameId = requestAnimationFrame(updateBridgeFrame);
    };

    frameId = requestAnimationFrame(updateBridgeFrame);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 will-change-transform">
      <div
        className="bridge-container relative pixelated w-full h-full"
        style={{ transform: `translate3d(0, ${scrollMove}px, 0)` }}
      >
        {/* Train */}
        <img
          ref={trainRef}
          src={trainImg}
          alt=""
          className="scene-layer train-layer absolute pixelated will-change-transform left-0 bottom-0"
          style={{ zIndex: 10 }}
        />

        {/* Bridges */}
        {[bridgeImg0, bridgeImg1].map((src, idx) => (
          <img
            key={idx}
            ref={bridgeRefs[idx]}
            src={src}
            alt=""
            className={`scene-layer bridge-layer absolute left-0 bottom-0 w-full transition-opacity duration-0 ${
              bridgeFrame === idx ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', zIndex: 20 }}
          />
        ))}
      </div>
    </div>
  );
}
