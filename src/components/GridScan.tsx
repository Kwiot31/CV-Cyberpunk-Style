import React, { useRef, useEffect } from 'react';

interface GridScanProps {
  mainColor?: string;
  secondaryColor?: string;
  speed?: number;
  gridGap?: number;
}

const GridScan: React.FC<GridScanProps> = ({ 
  mainColor = 'rgba(34, 197, 94, 0.2)', // Zielony Tailwind
  secondaryColor = 'rgba(34, 197, 94, 0.5)', 
  speed = 1.5, 
  gridGap = 50 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let scanLineY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Rysowanie statycznej siatki
      ctx.strokeStyle = mainColor;
      ctx.lineWidth = 0.5;

      // Pionowe linie
      for (let x = 0; x <= canvas.width; x += gridGap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Poziome linie
      for (let y = 0; y <= canvas.height; y += gridGap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Animacja linii skanującej
      scanLineY += speed;
      if (scanLineY > canvas.height) scanLineY = 0;

      // Blask linii skanującej
      const gradient = ctx.createLinearGradient(0, scanLineY - 100, 0, scanLineY);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(1, secondaryColor);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLineY - 100, canvas.width, 100);

      // Główna linia skanera
      ctx.strokeStyle = secondaryColor;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = secondaryColor;
      ctx.beginPath();
      ctx.moveTo(0, scanLineY);
      ctx.lineTo(canvas.width, scanLineY);
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset blasku dla innych elementów

      // 3. Dodanie "aktywnych" punktów na przecięciach
      for (let x = 0; x <= canvas.width; x += gridGap) {
        for (let y = 0; y <= canvas.height; y += gridGap) {
          // Jeśli linia skanująca jest blisko punktu, zaświeć go
          const distance = Math.abs(y - scanLineY);
          if (distance < 50) {
            ctx.fillStyle = `rgba(34, 197, 94, ${1 - distance / 50})`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mainColor, secondaryColor, speed, gridGap]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default GridScan;
