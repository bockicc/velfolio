import type { ColorStop } from '../config/theme';

function hexToRgb(hex: string): [number, number, number] {
  const v = parseInt(hex.replace('#', ''), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => Math.round(n).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function getSkyColor(progress: number, stops: ColorStop[]): string {
  if (progress <= stops[0].t) return stops[0].color;
  if (progress >= stops[stops.length - 1].t) return stops[stops.length - 1].color;

  const i = stops.findIndex((_, idx) => idx < stops.length - 1 && progress < stops[idx + 1].t);

  const a = stops[i];
  const b = stops[i + 1];
  const localT = (progress - a.t) / (b.t - a.t);

  const [r1, g1, b1] = hexToRgb(a.color);
  const [r2, g2, b2] = hexToRgb(b.color);

  const r = r1 + (r2 - r1) * localT;
  const g = g1 + (g2 - g1) * localT;
  const bv = b1 + (b2 - b1) * localT;

  return rgbToHex(r, g, bv);
}
