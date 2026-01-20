import { RefObject, useEffect, useRef } from 'react';
import backgroundBuildings from '../../assets/landing-pixel-assets/layer-3/3-background-buildings.png';

const vehicleModules = import.meta.glob('../../assets/landing-pixel-assets/layer-3/vehicle-*.png', { 
  eager: true, 
  import: 'default' 
});

const rawCars = Object.values(vehicleModules) as string[];
const shuffledCars = [...rawCars].sort(() => Math.random() - 0.5);

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

const BASE_SPEED = 0.0008;
const SPEED_VARIANCE = 0.0006; // max speed = BASE + VARIANCE
const CAR_WIDTH_RATIO = 64;
const Z_CARS = 5;
const Z_BUILDINGS = 10;

export default function LayerThree({ sceneRef, scrollY }: Props) {
  const carRefs = useRef<HTMLImageElement[]>([]);
  const buildingsRef = useRef<HTMLImageElement>(null);

  const carStats = useRef(shuffledCars.map((_, i) => ({
    progress: (i / shuffledCars.length) * 1.8 - 0.4,
    speed: BASE_SPEED + Math.random() * SPEED_VARIANCE // unique speed
  })));

  const rafRef = useRef<number>();
  const scrollMove = Math.round(scrollY * 0.8);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const animateCars = () => {
      const sceneW = scene.offsetWidth;
      const buildingsH = buildingsRef.current?.offsetHeight || 0;

      carRefs.current.forEach((car, i) => {
        if (!car) return;

        const stats = carStats.current[i];
        const movingRight = car.src.includes('-right-');

        stats.progress += movingRight ? stats.speed : -stats.speed;

        // Reset animation logic
        if (stats.progress > 1.4) stats.progress = -0.4;
        if (stats.progress < -0.4) stats.progress = 1.4;

        const carWidth = sceneW / CAR_WIDTH_RATIO;
        const x = Math.round(stats.progress * sceneW);
        const bridgeOffset = Math.round(buildingsH * 0.421);

        car.style.width = `${carWidth}px`;
        car.style.bottom = `${bridgeOffset}px`;
        car.style.transform = `translate3d(${x}px, 0, 0)`;
      });

      rafRef.current = requestAnimationFrame(animateCars);
    };

    rafRef.current = requestAnimationFrame(animateCars);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sceneRef]);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        transform: `translate3d(0, ${scrollMove}px, 0)`,
        willChange: 'transform',
        zIndex: 0,
        isolation: 'isolate',
      }}
    >
      {shuffledCars.map((src, i) => (
        <img
          key={src} 
          ref={(el) => { if (el) carRefs.current[i] = el; }}
          src={src}
          alt=""
          className="absolute pixelated will-change-transform bottom-0"
          style={{
            zIndex: Z_CARS,
            transformOrigin: 'bottom left',
          }}
          draggable={false}
        />
      ))}

      <img
        ref={buildingsRef}
        src={backgroundBuildings}
        alt=""
        className="absolute left-0 bottom-0 w-full pixelated"
        style={{ zIndex: Z_BUILDINGS }}
        draggable={false}
      />
    </div>
  );
}