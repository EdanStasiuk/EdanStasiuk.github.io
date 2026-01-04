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

export default function LayerFour({ sceneRef, scrollY }: Props) {
  const [sunFrame, setSunFrame] = useState(sun1);
  const [sceneWidth, setSceneWidth] = useState(0);
  
  const [swayA, setSwayA] = useState(false);
  const [swayB, setSwayB] = useState(false);
  const [swayC, setSwayC] = useState(false);
  const [swayD, setSwayD] = useState(false);

  const SWAY_DURATION = 2000;

  useEffect(() => {
    const updateLayout = () => {
      if (!sceneRef.current) return;
      setSceneWidth(sceneRef.current.clientWidth);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    const intA = setInterval(() => {
      setSunFrame(prev => (prev === sun1 ? sun2 : sun1));
      setSwayA(prev => !prev);
    }, SWAY_DURATION);

    let intB: number, intC: number, intD: number;
    const timeoutB = setTimeout(() => { intB = setInterval(() => setSwayB(prev => !prev), SWAY_DURATION); }, 300);
    const timeoutC = setTimeout(() => { intC = setInterval(() => setSwayC(prev => !prev), SWAY_DURATION); }, 1300);
    const timeoutD = setTimeout(() => { intD = setInterval(() => setSwayD(prev => !prev), SWAY_DURATION); }, 800);

    return () => {
      window.removeEventListener('resize', updateLayout);
      clearInterval(intA);
      clearTimeout(timeoutB); clearInterval(intB);
      clearTimeout(timeoutC); clearInterval(intC);
      clearTimeout(timeoutD); clearInterval(intD);
    };
  }, [sceneRef]);

  // Sun
  const sunWidth = sceneWidth / 15;
  const progress = Math.min(scrollY / 400, 1);
  const sunX = progress * 1200;
  const sunY = 900 * Math.pow(progress, 2);

  // Parallax Values
  const pLeftFast = -scrollY * 3.5;
  const pRightFast = scrollY * 3.5;
  const pLeftSlow = -scrollY * 2.4;
  const pRightSlow = scrollY * 2.4;

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Sun */}
      <div className="absolute" style={{ left: `${sceneWidth * 0.22}px`, top: "25vh", transform: `translate3d(${sunX}px, ${sunY}px, 0)` }}>
        <img src={sunFrame} alt="sun" style={{ width: `${sunWidth}px`, height: 'auto' }} />
      </div>

      {/* --- Distant Clouds --- */}
      {[
        { src: cloud5, t: '75%', l: 0.55, w: 0.03, dir: pLeftSlow },
        { src: cloud6, t: '65%', l: 0.60, w: 0.07, dir: pRightSlow },
        { src: cloud7, t: '55%', l: 0.95, w: 0.04, dir: pLeftSlow },
        { src: cloud8, t: '17%', l: 0.85, w: 0.08, dir: pLeftSlow },
        { src: cloud9, t: '14%', l: 0.01, w: 0.10, dir: pRightSlow },
        { src: cloud10, t: '57%', l: 0.26, w: 0.09, dir: pLeftSlow },
        { src: cloud11, t: '70%', l: 0.42, w: 0.05, dir: pRightSlow },
      ].map((c, i) => (
        <img
          key={i}
          src={c.src}
          style={{
            width: `${sceneWidth * c.w}px`,
            top: c.t,
            left: `${sceneWidth * c.l}px`,
            transform: `translate3d(${c.dir + (swayD ? 5 : 0)}px, 0, 0)`,
          }}
          className="absolute z-0" 
        />
      ))}

      {/* --- Foreground Clouds --- */}
      {/* Cloud 1 & 4 move left, Cloud 2 & 3 move right */}
      <img src={cloud1} style={{ width: `${sceneWidth * 0.2}px`, top: '32.9%', left: `${sceneWidth * 0.043}px`, transform: `translate3d(${pLeftFast - (swayA ? 10 : 0)}px, 0, 0)` }} className="absolute z-10" />
      <img src={cloud2} style={{ width: `${sceneWidth * 0.14}px`, top: '31%', left: `${sceneWidth * 0.262}px`, transform: `translate3d(${pRightFast + (swayA ? 10 : 0)}px, 0, 0)` }} className="absolute z-10" />
      <img src={cloud3} style={{ width: `${sceneWidth * 0.2}px`, top: '22%', left: `${sceneWidth * 0.502}px`, transform: `translate3d(${pRightFast + (swayB ? 10 : 0)}px, 0, 0)` }} className="absolute z-10" />
      <img src={cloud4} style={{ width: `${sceneWidth * 0.08}px`, top: '43%', left: `${sceneWidth * 0.89}px`, transform: `translate3d(${pLeftFast + (swayC ? 10 : 0)}px, 0, 0)` }} className="absolute z-10" />
    </div>
  );
}