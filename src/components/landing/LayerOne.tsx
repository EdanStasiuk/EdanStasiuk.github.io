import { RefObject, useEffect, useRef, useState } from 'react';
import bridgeImg0 from '../../assets/landing-pixel-assets/layer-1/1-forefront-buildings-and-bridge-0.png';
import bridgeImg1 from '../../assets/landing-pixel-assets/layer-1/1-forefront-buildings-and-bridge-1.png';
import trainImg from '../../assets/landing-pixel-assets/layer-1/1-train.png';

const TRAIN_WIDTH_RATIO = 3.3;
const ANIMATION_SPEED = 0.003; 

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerOne({ sceneRef, scrollY }: Props) {
  const trainRef = useRef<HTMLImageElement>(null);
  const bridgeRef = useRef<HTMLImageElement>(null);
  const [bridgeFrame, setBridgeFrame] = useState(0);
  
  const progressRef = useRef(1.2); 
  const rafRef = useRef<number>();
  const scrollMove = scrollY * 0.4;

  useEffect(() => {
    const animate = () => {
      const train = trainRef.current;
      const bridge = bridgeRef.current;
      const scene = sceneRef.current;

      if (!train || !bridge || !scene) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const sceneRect = scene.getBoundingClientRect();
      const bridgeRect = bridge.getBoundingClientRect();
      const trainRect = train.getBoundingClientRect();

      const sceneW = sceneRect.width;
      const bridgeH = bridgeRect.height;
      const trainH = trainRect.height;

      progressRef.current -= ANIMATION_SPEED;
      if (progressRef.current < -0.6) progressRef.current = 1.5;

      const trainWidth = sceneW / TRAIN_WIDTH_RATIO;
      const trainY = bridgeH - (trainH * 9.25);
      const xPos = progressRef.current * sceneW;

      train.style.width = `${trainWidth}px`;
      train.style.transform = `translate3d(${xPos}px, ${trainY}px, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  });

  useEffect(() => {
    let timeout: number;
    const flicker = () => {
      setBridgeFrame(prev => (prev === 0 ? 1 : 0));
      timeout = setTimeout(flicker, 120 + Math.random() * 220);
    };
    flicker();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-30" 
      style={{ 
        transform: `translateY(${scrollMove}px)`,
        willChange: 'transform' 
      }}
    >
      <div className="bridge-container relative w-full h-full">
        <img
          ref={bridgeRef}
          src={bridgeFrame === 0 ? bridgeImg0 : bridgeImg1}
          alt=""
          className="scene-layer bridge-layer absolute left-0 bottom-0 z-20 w-full"
        />
        <img
          ref={trainRef}
          src={trainImg}
          alt=""
          className="scene-layer train-layer absolute left-0 z-10 bottom-0"
          style={{
            willChange: 'transform, width',
          }}
        />
      </div>
    </div>
  );
}