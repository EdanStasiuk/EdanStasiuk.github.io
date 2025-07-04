import { useEffect, useRef } from 'react';

interface Bar {
  x: number;
  y: number;
  width: number;
  height: number;
  baseY: number;
  moveDistance: number;
  direction: number; // 1 or -1
  currentOffsetY: number;
}

const BASE_BAR_WIDTH = 1.2;
const BASE_BAR_SPACING = 2;
const BASE_CANVAS_WIDTH = window.innerWidth;
const BASE_CANVAS_HEIGHT = window.innerHeight * 0.7;
const BASE_OFFSET_Y = 0.3 * BASE_CANVAS_HEIGHT;
const BASE_OFFSET_X = 0.15 * BASE_CANVAS_WIDTH;
const MAX_EFFECT_DISTANCE = 130;
const THRESHOLD = 40;
const SENSITIVITY = 0.8;

export default function ECanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bars = useRef<Bar[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const mouseInsideCanvas = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate multipliers based on screen width
    const screenWidth = window.innerWidth;
    const widthMultiplier = screenWidth / BASE_CANVAS_WIDTH;
    const heightMultiplier = widthMultiplier; // Maintain aspect ratio

    // Scaled constants
    const CANVAS_WIDTH = screenWidth;
    const CANVAS_HEIGHT = BASE_CANVAS_HEIGHT * heightMultiplier;
    const BAR_WIDTH = BASE_BAR_WIDTH * widthMultiplier;
    const BAR_SPACING = BASE_BAR_SPACING * widthMultiplier;
    const OFFSET_Y = BASE_OFFSET_Y * heightMultiplier;
    const OFFSET_X = BASE_OFFSET_X * widthMultiplier;

    // Canvas dimensions
    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    canvas.style.width = `${CANVAS_WIDTH}px`;
    canvas.style.height = `${CANVAS_HEIGHT}px`;
    ctx.scale(dpr, dpr);

    const barData: { x: number; y: number; height: number }[] = [];

    // Left vertical line
    let x = OFFSET_X;
    for (const h of [
      3, 12, 23, 34, 45, 57, 68, 78, 89, 101, 108, 112, 113.5, 113.5, 113.5,
    ]) {
      const y = CANVAS_HEIGHT - h - 10 - OFFSET_Y;
      barData.push({ x, y, height: h });
      x += BAR_SPACING;
    }
    for (const h of [83, 72, 63, 63]) {
      const y = CANVAS_HEIGHT - OFFSET_Y - 124;
      barData.push({ x, y, height: h });
      x += BAR_SPACING;
    }

    // Top line
    for (const h of [35, 27]) {
      const y = CANVAS_HEIGHT - OFFSET_Y - 124;
      barData.push({ x, y, height: h });
      x += BAR_SPACING;
    }
    x = OFFSET_X + 42;
    const y = CANVAS_HEIGHT - 124 - OFFSET_Y;
    for (let i = 0; i < 24; i++) {
      barData.push({ x, y, height: 22 });
      x += BAR_SPACING;
    }
    for (const h of [19, 11, 3]) {
      barData.push({ x, y, height: h });
      x += BAR_SPACING;
    }

    // Middle line
    x = OFFSET_X + 38;
    for (let i = 0; i < 18; i++) {
      const y = CANVAS_HEIGHT - 80 - OFFSET_Y;
      barData.push({ x, y, height: 19 });
      x += BAR_SPACING;
    }
    for (const h of [13, 3]) {
      const y = CANVAS_HEIGHT - OFFSET_Y - 80;
      barData.push({ x, y, height: h });
      x += BAR_SPACING;
    }

    // Bottom line
    x = OFFSET_X + 30;
    for (let i = 0; i < 21; i++) {
      const h = 21.2;
      const y = CANVAS_HEIGHT - h - 10 - OFFSET_Y;
      barData.push({ x, y, height: h });
      x += BAR_SPACING;
    }
    for (const h of [13, 3]) {
      const y = CANVAS_HEIGHT - OFFSET_Y - 31;
      barData.push({ x, y, height: h });
      x += BAR_SPACING;
    }

    // Convert bar data into full Bar objects
    bars.current = barData.map((bar) => ({
      x: bar.x,
      y: bar.y,
      baseY: bar.y,
      height: bar.height,
      width: BAR_WIDTH,
      moveDistance: (35 + Math.random() * 40) * heightMultiplier,
      direction: Math.random() < 0.5 ? 1 : -1,
      currentOffsetY: 0,
    }));

    let animationFrame: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const bar of bars.current) {
        const barLeft = bar.x;
        const barRight = bar.x + bar.width;
        const barTop = bar.baseY;
        const barBottom = bar.baseY + bar.height;

        const dx = Math.min(
          Math.abs(mouse.current.x - barLeft),
          Math.abs(mouse.current.x - barRight)
        );
        const dy = Math.min(
          Math.abs(mouse.current.y - barTop),
          Math.abs(mouse.current.y - barBottom)
        );
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetOffsetY = 0;
        if (mouseInsideCanvas.current && distance < MAX_EFFECT_DISTANCE) {
          const intensity = Math.max(
            0,
            (MAX_EFFECT_DISTANCE - distance) / (MAX_EFFECT_DISTANCE - THRESHOLD)
          );
          targetOffsetY = intensity * bar.moveDistance * SENSITIVITY;
        }

        // Smooth animation toward target
        const easing = 0.8;
        bar.currentOffsetY += (targetOffsetY - bar.currentOffsetY) * easing;

        const y = bar.baseY + bar.currentOffsetY * bar.direction;
        ctx.beginPath();
        ctx.fillStyle = 'white';
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
    window.addEventListener('mouseenter', () => {
      mouseInsideCanvas.current = true;
    });
    window.addEventListener('mouseleave', () => {
      mouseInsideCanvas.current = false;
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
