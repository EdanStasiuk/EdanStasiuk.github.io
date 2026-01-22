import { RefObject, useEffect, useState } from 'react';
import sun1 from '../../assets/landing-pixel-assets/layer-4/sun-1.png';
import sun2 from '../../assets/landing-pixel-assets/layer-4/sun-2.png';
import cloud1 from '../../assets/landing-pixel-assets/layer-4/2-background-cloud-1.png';
import cloud2 from '../../assets/landing-pixel-assets/layer-4/2-background-cloud-2.png';
import cloud3 from '../../assets/landing-pixel-assets/layer-4/2-background-cloud-3.png';
import cloud4 from '../../assets/landing-pixel-assets/layer-4/2-background-cloud-4.png';
import cloud5 from '../../assets/landing-pixel-assets/layer-4/3-background-cloud-1.png';
import cloud6 from '../../assets/landing-pixel-assets/layer-4/3-background-cloud-2.png';
import cloud7 from '../../assets/landing-pixel-assets/layer-4/3-background-cloud-3.png';
import cloud8 from '../../assets/landing-pixel-assets/layer-4/3-background-cloud-4.png';
import cloud9 from '../../assets/landing-pixel-assets/layer-4/3-background-cloud-5.png';
import cloud10 from '../../assets/landing-pixel-assets/layer-4/3-background-cloud-6.png';
import cloud11 from '../../assets/landing-pixel-assets/layer-4/3-background-cloud-7.png';

type Props = {
  sceneRef: RefObject<HTMLDivElement>;
  scrollY: number;
};

const SWAY_DURATION = 3000;
const SUN_FLICKER_RATE = 400;
const SWAY_DISTANCE = 7;
const SUN_X_TRAVEL = 1200;
const SUN_Y_DROP = 900;

export default function LayerFour({ scrollY }: Props) {
  const [time, setTime] = useState(performance.now());

  useEffect(() => {
    let frameId: number;

    const update = () => {
      setTime(performance.now());
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Time-based sun flicker
  const sunFrame = Math.floor(time / SUN_FLICKER_RATE) % 2;

  // Time-based cloud sway, with offsets
  const swayA = Math.floor((time + 0) / SWAY_DURATION) % 2 === 0;
  const swayB = Math.floor((time + 300) / SWAY_DURATION) % 2 === 0;
  const swayC = Math.floor((time + 1300) / SWAY_DURATION) % 2 === 0;
  const swayD = Math.floor((time + 800) / SWAY_DURATION) % 2 === 0;

  // Sun motion
  const progress = Math.min(scrollY / 400, 1);
  const sunX = SUN_X_TRAVEL * progress;
  const sunY = SUN_Y_DROP * progress * progress;

  // Parallax for clouds
  const pLeftFast = -scrollY * 3.5;
  const pRightFast = scrollY * 3.5;
  const pLeftSlow = -scrollY * 1.4;
  const pRightSlow = scrollY * 1.4;
  
  // Parallax for hero
  const heroParallaxY = scrollY * 1.25;

  return (
    <div className="absolute pixelated-layer inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Sun */}
      <div
        className="absolute"
        style={{
          left: '22%',
          top: '30vh',
          width: '100vw',
          transform: `translate3d(${sunX}px, ${sunY}px, 0)`,
          willChange: 'transform',
        }}
      >
        <img
          src={sun1}
          alt=""
          className={`absolute transition-opacity duration-0 ${sunFrame === 0 ? 'opacity-100' : 'opacity-0'}`}
          style={{ width: '6.666%', willChange: 'opacity' }}
        />
        <img
          src={sun2}
          alt=""
          className={`absolute transition-opacity duration-0 ${sunFrame === 1 ? 'opacity-100' : 'opacity-0'}`}
          style={{ width: '6.666%', willChange: 'opacity' }}
        />
      </div>

      {/* Distant clouds */}
      {[
        { src: cloud5, t: '75%', l: '55%', w: '3%', dir: pRightSlow, sway: swayD },
        { src: cloud6, t: '65%', l: '60%', w: '7%', dir: pRightSlow, sway: swayD },
        { src: cloud7, t: '55%', l: '95%', w: '4%', dir: pRightSlow, sway: swayD },
        { src: cloud8, t: '17%', l: '85%', w: '8%', dir: pRightSlow, sway: swayD },
        { src: cloud9, t: '19%', l: '15%', w: '12%', dir: pLeftSlow, sway: swayD },
        { src: cloud10, t: '57%', l: '26%', w: '9%', dir: pLeftSlow, sway: swayD },
        { src: cloud11, t: '70%', l: '42%', w: '5%', dir: pLeftSlow, sway: swayD },
      ].map((c, i) => (
        <img
          key={i}
          src={c.src}
          className="absolute z-0"
          style={{
            width: c.w,
            top: c.t,
            left: c.l,
            transform: `translate3d(${c.dir + (c.sway ? 5 : 0)}px, 0, 0)`,
          }}
        />
      ))}

      {/* Hero Name */}
      <div
        className="absolute z-20 pointer-events-none flex items-center"
        style={{
          left: '50%',
          top: '23.5%',
          gap: '16px',
          transform: `translateX(-50%) translateY(${heroParallaxY}px)`,
          opacity: 1,
          willChange: 'transform',
        }}
      >
        <span className='text-hero text-[64px] tracking-widest font-hero font-medium'>
          Edan Stasiuk
        </span>
      </div>

      {/* Foreground clouds */}
      <img
        src={cloud1}
        className="absolute z-10"
        style={{
          width: '20%',
          top: '31.9%',
          left: '4.24%',
          transform: `translate3d(${pLeftFast - (swayA ? SWAY_DISTANCE : 0)}px, 0, 0)`,
        }}
      />
      <img
        src={cloud2}
        className="absolute z-10"
        style={{
          width: '14%',
          top: '36.99%',
          left: '26.27%',
          transform: `translate3d(${pLeftFast + (swayA ? SWAY_DISTANCE : 0)}px, 0, 0)`,
        }}
      />
      <img
        src={cloud3}
        className="absolute z-10"
        style={{
          width: '25%',
          top: '12%',
          left: '45%',
          transform: `translate3d(${pRightFast + (swayB ? SWAY_DISTANCE : 0)}px, 0, 0)`,
        }}
      />
      <img
        src={cloud4}
        className="absolute z-10"
        style={{
          width: '8%',
          top: '43.5%',
          left: '84%',
          transform: `translate3d(${pRightFast + (swayC ? SWAY_DISTANCE : 0)}px, 0, 0)`,
        }}
      />
    </div>
  );
}
