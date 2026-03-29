import React, { useRef, useEffect } from 'react';

interface FloatingLinesProps {
  color?: string;
  count?: number;
  minSpeed?: number;
  maxSpeed?: number;
}

const FloatingLines: React.FC<FloatingLinesProps> = ({ 
  color = 'rgba(34, 197, 94, 0.3)', 
  count = 30, 
  minSpeed = 0.5, 
  maxSpeed = 1.5 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lines: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initLines();
    };

    const initLines = () => {
      lines = [];
      for (let i = 0; i < count; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 200 + 100,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          angle: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = color.replace('0.3', line.opacity.toString());
        ctx.lineWidth = 3; // Grubsze linie
        ctx.lineCap = 'round';
        
        // Dodanie poświaty dla grubszych linii
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        
        // Obliczanie końca linii na podstawie kąta
        const endX = line.x + Math.cos(line.angle) * line.length;
        const endY = line.y + Math.sin(line.angle) * line.length;

        ctx.moveTo(line.x, line.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        ctx.shadowBlur = 0; // Reset blasku dla optymalizacji

        // Ruch
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        // Resetowanie pozycji po wyjściu poza ekran
        if (line.x < -line.length) line.x = canvas.width;
        if (line.x > canvas.width + line.length) line.x = -line.length;
        if (line.y < -line.length) line.y = canvas.height;
        if (line.y > canvas.height + line.length) line.y = -line.length;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, count, minSpeed, maxSpeed]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default FloatingLines;
