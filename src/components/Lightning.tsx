import React, { useRef, useEffect } from 'react';

interface LightningProps {
  hue?: number;
}

const Lightning: React.FC<LightningProps> = ({ hue = 287 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let strikes: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Funkcja generująca punkty pioruna (zygzak)
    const createLightningPath = (startX: number, startY: number, endX: number, endY: number, displacement: number) => {
      let points = [{ x: startX, y: startY }];
      let midX = (startX + endX) / 2;
      let midY = (startY + endY) / 2;

      // Rekurencyjne dzielenie linii na segmenty dla efektu zygzaka
      const subdivide = (x1: number, y1: number, x2: number, y2: number, disp: number) => {
        if (disp < 2) return;
        
        let midX = (x1 + x2) / 2 + (Math.random() - 0.5) * disp;
        let midY = (y1 + y2) / 2 + (Math.random() - 0.5) * disp;
        
        subdivide(x1, y1, midX, midY, disp / 2);
        points.push({ x: midX, y: midY });
        subdivide(midX, midY, x2, y2, disp / 2);
      };

      subdivide(startX, startY, endX, endY, displacement);
      points.push({ x: endX, y: endY });
      return points;
    };

    const draw = () => {
      // Powolne wygaszanie (Afterglow) - klucz do spowolnionego tempa
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Szansa na nowe uderzenie (rzadziej dla efektu spowolnienia)
      if (Math.random() < 0.02) {
        const startX = Math.random() * (canvas.width * 0.3); // Start w lewym górnym obszarze
        const startY = 0;
        const endX = canvas.width * 0.7 + Math.random() * (canvas.width * 0.3); // Cel w prawym dolnym obszarze
        const endY = canvas.height;
        
        const path = createLightningPath(startX, startY, endX, endY, 400);
        strikes.push({
          path,
          alpha: 1.0,
          width: 3 + Math.random() * 3,
          branches: Math.random() > 0.5 ? [
            createLightningPath(path[10].x, path[10].y, path[10].x + 200, path[10].y + 200, 100)
          ] : []
        });
      }

      // Rysowanie aktywnych uderzeń
      strikes.forEach((strike, index) => {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(287, 100%, 80%, ${strike.alpha})`;
        ctx.lineWidth = strike.width;
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 35 * strike.alpha;
        ctx.shadowColor = `hsla(287, 100%, 50%, 0.9)`;

        // Rysowanie głównej ścieżki
        ctx.moveTo(strike.path[0].x, strike.path[0].y);
        strike.path.forEach((p: any) => ctx.lineTo(p.x, p.y));
        ctx.stroke();

        // Rysowanie odnóg (gałęzi)
        strike.branches.forEach((b: any) => {
          ctx.beginPath();
          ctx.strokeStyle = `hsla(287, 100%, 70%, ${strike.alpha * 0.6})`;
          ctx.lineWidth = strike.width / 2;
          ctx.moveTo(b[0].x, b[0].y);
          b.forEach((p: any) => ctx.lineTo(p.x, p.y));
          ctx.stroke();
        });

        // Drugi przebieg (ekstremalnie jasny rdzeń)
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${strike.alpha * 1.0})`;
        ctx.lineWidth = strike.width / 3;
        ctx.moveTo(strike.path[0].x, strike.path[0].y);
        strike.path.forEach((p: any) => ctx.lineTo(p.x, p.y));
        ctx.stroke();

        // Powolne wygaszanie alfy dla efektu slow-motion
        strike.alpha *= 0.96;
        if (strike.alpha < 0.01) strikes.splice(index, 1);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hue]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ filter: 'contrast(1.5) brightness(1.2)' }}
    />
  );
};

export default Lightning;
