import { useEffect, useRef } from 'react';

// * types
type TechPillProps = {
  name: string;
  image: string;
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

type Coords = {
  x: number;
  y: number;
};

const TechPill = ({ name, image, canvasRef }: TechPillProps) => {
  const pillRef = useRef<HTMLDivElement>(null);

  const drawCurve = (end: Coords) => {
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

  useEffect(() => {
    const container = pillRef.current!.parentElement!;
    const { top: containerTop, left: containerLeft } =
      container.getBoundingClientRect();
    const { width, height, top, left } =
      pillRef.current!.getBoundingClientRect();

    const endX = left - containerLeft + width / 2;
    const endY = top - containerTop + height;
    const end: Coords = { x: endX, y: endY };
    drawCurve(end);
  }, [pillRef.current, canvasRef.current]);

  return (
    <div
      ref={pillRef}
      title={name}
      className='tech-pill bg-glassy place-items-center grid w-16 h-16 rounded-full'
    >
      <img src={image} alt={name} />
    </div>
  );
};

export default TechPill;
