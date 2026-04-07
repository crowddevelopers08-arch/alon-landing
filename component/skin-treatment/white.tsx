'use client'

import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let tick = 0;

    canvas.width = width;
    canvas.height = height;

    // ── Particles ──
    const PARTICLE_COUNT = 55;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.4 + 0.1,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // ── 1. Subtle gradient wave background ──
      const waveY1 = height * 0.3 + Math.sin(tick * 0.008) * 60;
      const waveY2 = height * 0.7 + Math.cos(tick * 0.006) * 50;

      const grad1 = ctx.createRadialGradient(
        width * 0.2, waveY1, 0,
        width * 0.2, waveY1, width * 0.6
      );
      grad1.addColorStop(0, 'rgba(217, 149, 61, 0.07)');
      grad1.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8, waveY2, 0,
        width * 0.8, waveY2, width * 0.55
      );
      grad2.addColorStop(0, 'rgba(155, 112, 87, 0.06)');
      grad2.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // ── 2. Animated mesh / grid pattern ──
      const gridSize = 80;
      const gridOffsetX = (tick * 0.15) % gridSize;
      const gridOffsetY = (tick * 0.1) % gridSize;

      // ── Bubble dots at grid intersections (left & right sides only) ──
      const centerStart = width * 0.3; // skip from 30% to 70% (center zone)
      const centerEnd = width * 0.7;

      for (let x = -gridSize + gridOffsetX; x < width + gridSize; x += gridSize) {
        // Skip center zone
        if (x > centerStart && x < centerEnd) continue;

        for (let y = -gridSize + gridOffsetY; y < height + gridSize; y += gridSize) {
          const pulse = (Math.sin(tick * 0.04 + x * 0.05 + y * 0.03) + 1) / 2;
          const r = 1.5 + pulse * 0.8;
          const alpha = 0.15 + pulse * 0.15;

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(217, 149, 61, ${alpha})`;
          ctx.fill();
        }
      }

      // ── 3. Soft pulsing glow orbs ──
      const glowPulse = (Math.sin(tick * 0.02) + 1) / 2; // 0 → 1
      const glowOpacity = 0.04 + glowPulse * 0.06;

      const glowPositions = [
        { x: width * 0.15, y: height * 0.2 },
        { x: width * 0.85, y: height * 0.6 },
        { x: width * 0.5,  y: height * 0.85 },
      ];

      glowPositions.forEach(({ x, y }) => {
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 280);
        glow.addColorStop(0, `rgba(217, 149, 61, ${glowOpacity})`);
        glow.addColorStop(0.5, `rgba(155, 112, 87, ${glowOpacity * 0.5})`);
        glow.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 280, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── 4. Floating particles ──
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const pulse = (Math.sin(tick * 0.03 + p.pulseOffset) + 1) / 2;
        const alpha = p.alpha * (0.5 + pulse * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 149, 61, ${alpha})`;
        ctx.fill();
      });

      // ── 5. Connect nearby particles with lines ──
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(217, 149, 61, ${0.18 * (1 - dist / 120)})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Animated canvas layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 1 }}
      />

      {/* Page content on top */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;