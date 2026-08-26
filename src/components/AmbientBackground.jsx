import React, { useEffect, useRef } from "react";

const LINK_DIST = 90;
const NODE_COUNT = 36;

const hexToRgb = (hex) => {
  const clean = hex.trim().replace("#", "");
  const full =
    clean.length === 3
      ? clean.split("").map((c) => c + c).join("")
      : clean;
  const int = parseInt(full, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
};

export const AmbientBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (theme === "light") return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let packets = [];
    let pulses = [];
    let rafId;

    const currentAccentRgb = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--schema-accent")
        .trim();
      return hexToRgb(raw || "#59d9b3");
    };

    const step = () => {
      nodes.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
    };

    const draw = () => {
      const [r, g, b] = currentAccentRgb();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            edges.push({ a: nodes[i], b: nodes[j] });
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${
              0.06 * (1 - dist / LINK_DIST)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.25)`;
        ctx.fill();
      });

      if (reduced) return;

      packets = packets.filter((pk) => pk.t <= 1);
      packets.forEach((pk) => {
        const x = pk.a.x + (pk.b.x - pk.a.x) * pk.t;
        const y = pk.a.y + (pk.b.y - pk.a.y) * pk.t;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.7)`;
        ctx.fill();
        pk.t += pk.speed;
      });

      pulses = pulses.filter((pu) => pu.r < pu.max);
      pulses.forEach((pu) => {
        ctx.beginPath();
        ctx.arc(pu.x, pu.y, pu.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${
          0.4 * (1 - pu.r / pu.max)
        })`;
        ctx.stroke();
        pu.r += 0.8;
      });

      if (edges.length && Math.random() < 0.02) {
        const e = edges[(Math.random() * edges.length) | 0];
        packets.push({
          a: e.a,
          b: e.b,
          t: 0,
          speed: 0.006 + Math.random() * 0.01,
        });
      }
      if (Math.random() < 0.006) {
        const n = nodes[(Math.random() * nodes.length) | 0];
        pulses.push({ x: n.x, y: n.y, r: 1, max: 26 });
      }
    };

    const loop = () => {
      step();
      draw();
      rafId = requestAnimationFrame(loop);
    };

    if (reduced) {
      draw();
    } else {
      loop();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [theme]);

  if (theme === "light") return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};
