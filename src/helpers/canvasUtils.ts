// * types
type Coords = {
  x: number;
  y: number;
};

const drawCurve = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  pillRef: React.RefObject<HTMLDivElement>
) => {
  const container = pillRef.current!.parentElement!;
  const { top: containerTop, left: containerLeft } =
    container.getBoundingClientRect();
  const { width, height, top, left } = pillRef.current!.getBoundingClientRect();

  const endX = left - containerLeft + width / 2;
  const endY = top - containerTop + height;
  const end: Coords = { x: endX, y: endY };

  const canvas = canvasRef.current!;
  const ctx = canvas.getContext('2d')!;
  const cp = { x: 250, y: 200 };
  const start = { x: 250, y: 500 };

  const gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
  gradient.addColorStop(0.5, '#3d176800');
  gradient.addColorStop(1, '#3D1768');

  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.bezierCurveTo(cp.x, cp.y, cp.x, cp.y, end.x, end.y);
  ctx.strokeStyle = gradient;
  ctx.stroke();
};

export { drawCurve };
