import { RefObject, useEffect, useRef, useState } from 'react';
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
  const [sunFrame, setSunFrame] = useState(0);

  // sway refs (no re-renders)
  const swayA = useRef(false);
  const swayB = useRef(false);
  const swayC = useRef(false);
  const swayD = useRef(false);

  useEffect(() => {
    const sunInt = setInterval(() => {
      setSunFrame(f => (f === 0 ? 1 : 0));
    }, SUN_FLICKER_RATE);

    const intA = setInterval(() => (swayA.current = !swayA.current), SWAY_DURATION);

    let intB: number | undefined;
    let intC: number | undefined;
    let intD: number | undefined;

    const tB = setTimeout(() => {
      intB = setInterval(() => (swayB.current = !swayB.current), SWAY_DURATION);
    }, 300);

    const tC = setTimeout(() => {
      intC = setInterval(() => (swayC.current = !swayC.current), SWAY_DURATION);
    }, 1300);

    const tD = setTimeout(() => {
      intD = setInterval(() => (swayD.current = !swayD.current), SWAY_DURATION);
    }, 800);

    return () => {
      clearInterval(sunInt);
      clearInterval(intA);
      clearTimeout(tB); if (intB) clearInterval(intB);
      clearTimeout(tC); if (intC) clearInterval(intC);
      clearTimeout(tD); if (intD) clearInterval(intD);
    };
  }, []);

  // Sun motion
  const progress = Math.min(scrollY / 400, 1);
  const sunX = SUN_X_TRAVEL * progress;
  const sunY = SUN_Y_DROP * progress * progress;

  // Parallax
  const pLeftFast = -scrollY * 3.5;
  const pRightFast = scrollY * 3.5;
  const pLeftSlow = -scrollY * 1.4;
  const pRightSlow = scrollY * 1.4;

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Sun */}
      <div
        className="absolute pixelated"
        style={{
          left: '22%',
          top: '25vh',
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
        { src: cloud5, t: '75%', l: '55%', w: '3%', dir: pRightSlow },
        { src: cloud6, t: '65%', l: '60%', w: '7%', dir: pRightSlow },
        { src: cloud7, t: '55%', l: '95%', w: '4%', dir: pRightSlow },
        { src: cloud8, t: '17%', l: '85%', w: '8%', dir: pRightSlow },
        { src: cloud9, t: '14%', l: '1%',  w: '10%', dir: pLeftSlow },
        { src: cloud10, t: '57%', l: '26%', w: '9%', dir: pLeftSlow },
        { src: cloud11, t: '70%', l: '42%', w: '5%', dir: pLeftSlow },
      ].map((c, i) => (
        <img
          key={i}
          src={c.src}
          className="absolute z-0 pixelated"
          style={{
            width: c.w,
            top: c.t,
            left: c.l,
            transform: `translate3d(${c.dir + (swayD.current ? 5 : 0)}px, 0, 0)`,
          }}
        />
      ))}

      {/* Foreground clouds */}
      <img
        src={cloud1}
        className="absolute pixelated z-10"
        style={{
          width: '20%',
          top: '32.9%',
          left: '4.24%',
          transform: `translate3d(${pLeftFast - (swayA.current ? SWAY_DISTANCE : 0)}px, 0, 0)`,
        }}
      />
      <img
        src={cloud2}
        className="absolute pixelated z-10"
        style={{
          width: '14%',
          top: '30.99%',
          left: '26.27%',
          transform: `translate3d(${pLeftFast + (swayA.current ? SWAY_DISTANCE : 0)}px, 0, 0)`,
        }}
      />
      <img
        src={cloud3}
        className="absolute pixelated z-10"
        style={{
          width: '20%',
          top: '22%',
          left: '50.2%',
          transform: `translate3d(${pRightFast + (swayB.current ? SWAY_DISTANCE : 0)}px, 0, 0)`,
        }}
      />
      <img
        src={cloud4}
        className="absolute pixelated z-10"
        style={{
          width: '8%',
          top: '43%',
          left: '89%',
          transform: `translate3d(${pRightFast + (swayC.current ? SWAY_DISTANCE : 0)}px, 0, 0)`,
        }}
      />
    </div>
  );
}
