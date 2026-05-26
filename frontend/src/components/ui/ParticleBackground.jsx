import { useEffect, useRef } from 'react';

const COLOR = [255, 58, 58]; // rgb for #ff3a3a

/**
 * ParticleBackground — native canvas, zero library dependencies.
 * We own the <canvas> element entirely. z-index: -1 is set as React inline
 * style on a fixed canvas — no third-party library can override it.
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    const mouse = { x: -9999, y: -9999 };

    // ── Resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Mouse repulse ────────────────────────────────────────────────────────
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMove);

    // ── Click: spawn burst ───────────────────────────────────────────────────
    const onClick = (e) => {
      for (let i = 0; i < 4; i++) {
        particles.push(makeParticle(e.clientX, e.clientY));
      }
    };
    window.addEventListener('click', onClick);

    // ── Particle factory ─────────────────────────────────────────────────────
    const makeParticle = (x, y) => ({
      x: x ?? Math.random() * window.innerWidth,
      y: y ?? Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() - 0.5) * 1.4,
      r: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.5,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
    });

    const particles = Array.from({ length: 100 }, () => makeParticle());

    // ── Draw loop ────────────────────────────────────────────────────────────
    const LINK_DIST = 140;
    const REPULSE_DIST = 120;
    const MAX_SPEED = 3;

    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Background fill
      ctx.fillStyle = '#0a0a0b';
      ctx.fillRect(0, 0, W, H);

      // Update & draw particles
      for (const p of particles) {
        // Opacity pulse
        p.opacity += 0.004 * p.opacityDir;
        if (p.opacity > 0.7 || p.opacity < 0.15) p.opacityDir *= -1;

        // Mouse repulse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < REPULSE_DIST && d > 0) {
          const force = ((REPULSE_DIST - d) / REPULSE_DIST) * 0.6;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }

        // Speed cap
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPEED) { p.vx = (p.vx / spd) * MAX_SPEED; p.vy = (p.vy / spd) * MAX_SPEED; }

        // Move & bounce
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR},${p.opacity})`;
        ctx.fill();
      }

      // Draw links (O(n²) but fine for n=100)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${COLOR},${0.18 * (1 - d / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,           // React inline style — nothing can override this
        pointerEvents: 'none', // pass through clicks to page content
        display: 'block',
      }}
    />
  );
}
