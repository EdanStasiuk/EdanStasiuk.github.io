import { useEffect, useRef } from 'react';

export interface Bar {
  x: number;
  y: number;
  width: number;
  height: number;
  baseY: number;
  moveDistance: number;
  direction: number;
  currentOffsetY: number;
}

interface Props {
  getBars: (canvasWidth: number, canvasHeight: number) => Bar[];
}

const MAX_EFFECT_DISTANCE = 130;
const THRESHOLD = 40;
const SENSITIVITY = 0.8;

export default function BarLetterCanvas({ getBars }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bars = useRef<Bar[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const mouseInsideCanvas = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CANVAS_WIDTH = window.innerWidth;
    const CANVAS_HEIGHT = window.innerHeight * 0.7;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    canvas.style.width = `${CANVAS_WIDTH}px`;
    canvas.style.height = `${CANVAS_HEIGHT}px`;
    ctx.scale(dpr, dpr);

    bars.current = getBars(CANVAS_WIDTH, CANVAS_HEIGHT);

    let animationFrame: number;

    const draw = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      const globalGradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      globalGradient.addColorStop(0, '#ff6ec4');
      globalGradient.addColorStop(0.5, '#7873f5');

      for (const bar of bars.current) {
        const dx = Math.abs(mouse.current.x - bar.x);
        const dy = Math.abs(mouse.current.y - bar.baseY);
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetOffsetY = 0;
        if (mouseInsideCanvas.current && distance < MAX_EFFECT_DISTANCE) {
          const intensity = Math.max(
            0,
            (MAX_EFFECT_DISTANCE - distance) / (MAX_EFFECT_DISTANCE - THRESHOLD)
          );
          targetOffsetY = intensity * bar.moveDistance * SENSITIVITY;
        }

        const easing = 0.8;
        bar.currentOffsetY += (targetOffsetY - bar.currentOffsetY) * easing;

        const y = bar.baseY + bar.currentOffsetY * bar.direction;
        ctx.beginPath();
        ctx.fillStyle = globalGradient;
        ctx.fillRect(bar.x, y, bar.width, bar.height);
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouse.current.x = x;
      mouse.current.y = y;
      mouseInsideCanvas.current =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [getBars]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
