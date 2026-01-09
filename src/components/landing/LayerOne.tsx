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
  const bridgeRef1 = useRef<HTMLImageElement>(null); // Ref for second frame
  const [bridgeFrame, setBridgeFrame] = useState(0);
  
  const progressRef = useRef(1.2); 
  const rafRef = useRef<number>();
  
  // Use Math.round to ensure the layer doesn't sit on a half-pixel
  const scrollMove = Math.round(scrollY * 0.46);

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
      
      // Round these values to the nearest whole pixel, prevents sub-pixel jittering
      const trainY = Math.round(bridgeH - (trainH * 9.25));
      const xPos = Math.round(progressRef.current * sceneW);

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
    let timeout: any;
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
        transform: `translate3d(0, ${scrollMove}px, 0)`,
        willChange: 'transform' 
      }}
    >
      <div className="bridge-container relative pixelated w-full h-full">
        {/* We render BOTH images and toggle opacity. 
            Changing the 'src' attribute often causes a 1px layout re-paint. 
            Adding translateZ(0) forces the bridge onto the GPU to match the train. */}
        <img
          ref={bridgeRef}
          src={bridgeImg0}
          alt=""
          className={`scene-layer bridge-layer absolute left-0 bottom-0 z-20 w-full transition-opacity duration-0 ${
            bridgeFrame === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        />
        <img
          ref={bridgeRef1}
          src={bridgeImg1}
          alt=""
          className={`scene-layer bridge-layer absolute left-0 bottom-0 z-20 w-full transition-opacity duration-0 ${
            bridgeFrame === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        />
        
        <img
          ref={trainRef}
          src={trainImg}
          alt=""
          className="scene-layer train-layer absolute pixelated will-change-transform left-0 z-10 bottom-0"
        />
      </div>
    </div>
  );
}