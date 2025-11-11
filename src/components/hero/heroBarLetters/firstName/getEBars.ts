import { Bar } from '../../BarLetterCanvas';

export function getEBars(canvasWidth: number, canvasHeight: number): Bar[] {
  const BASE_BAR_WIDTH = 1.2;
  const BASE_BAR_SPACING = 2;
  const OFFSET_Y = 0.6 * canvasHeight;
  const OFFSET_X = 0.15 * canvasWidth;
  const heightMultiplier = canvasWidth / 1440;

  const BAR_WIDTH = BASE_BAR_WIDTH * heightMultiplier;
  const BAR_SPACING = BASE_BAR_SPACING * heightMultiplier;

  const barData: { x: number; y: number; height: number }[] = [];

  let x = OFFSET_X;
  for (const h of [
    3, 12, 23, 34, 45, 57, 68, 78, 89, 101, 108, 112, 113.5, 113.5, 113.5,
  ]) {
    const y = canvasHeight - h - 10 - OFFSET_Y;
    barData.push({ x, y, height: h });
    x += BAR_SPACING;
  }
  for (const h of [83, 72, 63, 63]) {
    const y = canvasHeight - OFFSET_Y - 124;
    barData.push({ x, y, height: h });
    x += BAR_SPACING;
  }
  for (const h of [35, 27]) {
    const y = canvasHeight - OFFSET_Y - 124;
    barData.push({ x, y, height: h });
    x += BAR_SPACING;
  }
  x = OFFSET_X + 42;
  const yTop = canvasHeight - 124 - OFFSET_Y;
  for (let i = 0; i < 24; i++) {
    barData.push({ x, y: yTop, height: 22 });
    x += BAR_SPACING;
  }
  for (const h of [19, 11, 3]) {
    barData.push({ x, y: yTop, height: h });
    x += BAR_SPACING;
  }

  x = OFFSET_X + 38;
  const yMid = canvasHeight - 80 - OFFSET_Y;
  for (let i = 0; i < 18; i++) {
    barData.push({ x, y: yMid, height: 19 });
    x += BAR_SPACING;
  }
  for (const h of [13, 3]) {
    barData.push({ x, y: yMid, height: h });
    x += BAR_SPACING;
  }

  x = OFFSET_X + 30;
  for (let i = 0; i < 21; i++) {
    const h = 21.2;
    const y = canvasHeight - h - 10 - OFFSET_Y;
    barData.push({ x, y, height: h });
    x += BAR_SPACING;
  }
  for (const h of [13, 3]) {
    const y = canvasHeight - OFFSET_Y - 31;
    barData.push({ x, y, height: h });
    x += BAR_SPACING;
  }

  return barData.map((bar) => ({
    x: bar.x,
    y: bar.y,
    baseY: bar.y,
    height: bar.height,
    width: BAR_WIDTH,
    moveDistance: (35 + Math.random() * 40) * heightMultiplier,
    direction: Math.random() < 0.5 ? 1 : -1,
    currentOffsetY: 0,
  }));
}
