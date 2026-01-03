import { RefObject, useEffect, useRef, useState } from 'react';
import bridgeImg0 from '../../assets/landing-pixel-assets/layer-1/1-forefront-buildings-and-bridge-0.png';
import bridgeImg1 from '../../assets/landing-pixel-assets/layer-1/1-forefront-buildings-and-bridge-1.png';
import trainImg from '../../assets/landing-pixel-assets/layer-1/1-train.png';

const TRAIN_WIDTH_RATIO = 3.3;
const SPEED_RATIO = 175;

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

export default function LayerOne({ sceneRef, scrollY }: Props) {
  const trainRef = useRef<HTMLImageElement>(null);
  const bridgeRef = useRef<HTMLImageElement>(null);
  const [bridgeFrame, setBridgeFrame] = useState(0);
  const scrollMove = scrollY * 0.4;

  // mutable animation values
  const trainWidthRef = useRef(0);
  const trainYRef = useRef(0);
  const xRef = useRef(0);
  const speedRef = useRef(0);
  const rafRef = useRef<number>();

  const updateLayout = () => {
    const train = trainRef.current;
    const bridge = bridgeRef.current;
    const scene = sceneRef.current;
    if (!train || !bridge || !scene) return;
  
    const sceneWidth = scene.clientWidth;
  
    const width = sceneWidth / TRAIN_WIDTH_RATIO;
    train.style.width = `${width}px`;
    trainWidthRef.current = width;
  
    const bridgeHeight = bridge.offsetHeight;
    const trainHeight = train.offsetHeight * 9.25;
    trainYRef.current = bridgeHeight - trainHeight;
  
    speedRef.current = sceneWidth / SPEED_RATIO;
  };

  // flicker effect
  useEffect(() => {
    let timeout: number;

    const flicker = () => {
      setBridgeFrame(prev => (prev === 0 ? 1 : 0));

      timeout = setTimeout(flicker, 120 + Math.random() * 220);
    };

    flicker();

    return () => clearTimeout(timeout);
  }, []);

  // train layout on resize
  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // train animation
  useEffect(() => {
    const train = trainRef.current;
    const scene = sceneRef.current;
    if (!train || !scene) return;
  
    xRef.current = scene.clientWidth;
  
    const animate = () => {
      xRef.current -= speedRef.current;
  
      if (xRef.current < -trainWidthRef.current) {
        xRef.current = scene.clientWidth * 2;
      }
  
      train.style.transform = `translate3d(
        ${Math.round(xRef.current)}px,
        ${Math.round(trainYRef.current)}px,
        0
      )`;
  
      rafRef.current = requestAnimationFrame(animate);
    };
  
    animate();
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [sceneRef]);


  return (
    <div 
      className="absolute inset-0 pointer-events-none z-30" 
      style={{ transform: `translateY(${scrollMove}px)` }}
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
          onLoad={updateLayout}
        />
      </div>
    </div>
  );
}