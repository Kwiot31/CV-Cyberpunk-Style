import React, { useRef, useEffect } from "react";

interface FloatingLinesProps {
  color?: string;
  count?: number;
  minSpeed?: number;
  maxSpeed?: number;
}

interface Line {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
}

function withAlpha(color: string, alpha: number): string {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (match) {
    return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})`;
  }
  return color;
}

const FloatingLines: React.FC<FloatingLinesProps> = ({
  color = "rgba(34, 197, 94, 0.3)",
  count = 30,
  minSpeed = 0.5,
  maxSpeed = 1.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    let animationFrameId = 0;
    let lines: Line[] = [];
    let isVisible = document.visibilityState === "visible";
    const lineCount = window.innerWidth < 768 ? Math.min(count, 12) : count;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      lines = Array.from({ length: lineCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 200 + 100,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        angle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    };

    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = withAlpha(color, line.opacity);
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        if (line.opacity > 0.4) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = color;
        }

        const endX = line.x + Math.cos(line.angle) * line.length;
        const endY = line.y + Math.sin(line.angle) * line.length;

        ctx.moveTo(line.x, line.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.shadowBlur = 0;

        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        if (line.x < -line.length) line.x = canvas.width;
        if (line.x > canvas.width + line.length) line.x = -line.length;
        if (line.y < -line.length) line.y = canvas.height;
        if (line.y > canvas.height + line.length) line.y = -line.length;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const onVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, count, minSpeed, maxSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default FloatingLines;
