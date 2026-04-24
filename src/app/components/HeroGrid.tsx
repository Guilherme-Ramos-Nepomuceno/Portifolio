"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "./ScrollArrow";

const COLS = 22, ROWS = 7;

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; decay: number; size: number;
}

export default function HeroGrid() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nameWrapRef = useRef<HTMLDivElement>(null);
  const gridBgRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const state = useRef({
    mouse: { x: 0, y: 0, inside: false },
    smooth: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
    particles: [] as Particle[],
    W: 0, H: 0, cellW: 0, cellH: 0,
    lastTs: 0,
  });

  const [cells] = useState(() => Array.from({ length: COLS * ROWS }));

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const s = state.current;

    const resize = () => {
      s.W = scene.offsetWidth; s.H = scene.offsetHeight;
      canvas.width = s.W; canvas.height = s.H;
      s.cellW = s.W / COLS; s.cellH = s.H / ROWS;
    };
    resize();
    window.addEventListener("resize", resize);

    const onEnter = () => {
      s.mouse.inside = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      s.mouse.inside = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onMove = (e: MouseEvent) => {
      const r = scene.getBoundingClientRect();
      s.mouse.x = e.clientX - r.left;
      s.mouse.y = e.clientY - r.top;
      s.target.x = s.mouse.x;
      s.target.y = s.mouse.y;
      if (s.particles.length < 60 && Math.random() < 0.25) {
        s.particles.push({
          x: s.mouse.x, y: s.mouse.y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          life: 1,
          decay: 0.012 + Math.random() * 0.01,
          size: 1 + Math.random() * 1.5,
        });
      }
    };
    scene.addEventListener("mouseenter", onEnter);
    scene.addEventListener("mouseleave", onLeave);
    scene.addEventListener("mousemove", onMove);

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = (ts: number) => {
      raf = requestAnimationFrame(tick);
      s.lastTs = ts;

      s.smooth.x = lerp(s.smooth.x, s.target.x, 0.1);
      s.smooth.y = lerp(s.smooth.y, s.target.y, 0.1);

      if (dotRef.current) {
        dotRef.current.style.left = s.smooth.x + "px";
        dotRef.current.style.top = s.smooth.y + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = s.smooth.x + "px";
        ringRef.current.style.top = s.smooth.y + "px";
      }

      const cx = s.W / 2, cy = s.H / 2;
      const px = (s.smooth.x - cx) / cx;
      const py = (s.smooth.y - cy) / cy;

      if (s.mouse.inside) {
        if (nameWrapRef.current) nameWrapRef.current.style.transform = `translate(${px * -35}px,${py * -25}px)`;
        if (gridBgRef.current) gridBgRef.current.style.transform = `translate(${px * 15}px,${py * 10}px) scale(1.05)`;
      } else {
        if (nameWrapRef.current) nameWrapRef.current.style.transform = "translate(0,0)";
        if (gridBgRef.current) gridBgRef.current.style.transform = "translate(0,0) scale(1)";
      }

      ctx.clearRect(0, 0, s.W, s.H);

      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        if (p.life <= 0) { s.particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224,90,0,${p.life * 0.55})`;
        ctx.fill();
      }

      if (s.mouse.inside) {
        const gx = Math.floor(s.mouse.x / s.cellW);
        const gy = Math.floor(s.mouse.y / s.cellH);
        for (let dr = -3; dr <= 3; dr++) {
          for (let dc = -3; dc <= 3; dc++) {
            const r = gy + dr, c = gx + dc;
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS) continue;
            const dist = Math.sqrt(dr * dr + dc * dc);
            if (dist > 3.2) continue;
            const a = 0.22 * (1 - dist / 3.2);
            ctx.fillStyle = `rgba(224,90,0,${a})`;
            ctx.fillRect(c * s.cellW, r * s.cellH, s.cellW, s.cellH);
          }
        }
        const glow = ctx.createRadialGradient(s.mouse.x, s.mouse.y, 0, s.mouse.x, s.mouse.y, 200);
        glow.addColorStop(0, "rgba(224,90,0,0.06)");
        glow.addColorStop(1, "rgba(224,90,0,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, s.W, s.H);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      scene.removeEventListener("mouseenter", onEnter);
      scene.removeEventListener("mouseleave", onLeave);
      scene.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="relative w-full h-screen bg-[#191917] overflow-hidden"
      style={{ cursor: "none" }}
    >
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-[32px] py-[22px] pointer-events-auto">
        <span className="font-mono text-[11px] tracking-[.18em] text-[#e8e4d9] opacity-75">
          GR . DEV
        </span>
        <ul className="flex gap-[32px] list-none">
          {[
            { name: "PROJETOS", href: "#projects" },
            { name: "CURSOS", href: "#courses" },
            { name: "GITHUB", href: "https://github.com/Guilherme-Ramos-Nepomuceno", target: "_blank" }
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target={item.target || "_self"}
                className="font-mono text-[10px] tracking-[.22em] text-[#e8e4d9] opacity-55 no-underline hover:opacity-90 transition-opacity duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Grid Bg Layer */}
      <div
        ref={gridBgRef}
        className="absolute inset-0 grid z-[1] will-change-transform"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          transition: "transform 1s cubic-bezier(.19,1,.22,1)",
        }}
      >
        {cells.map((_, i) => (
          <div key={i} className="border-r border-b border-white/[.038]" />
        ))}
      </div>

      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[2]" />

      {/* Name Wrap */}
      <div
        ref={nameWrapRef}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none will-change-transform"
        style={{ transition: "transform .8s cubic-bezier(.19,1,.22,1)" }}
      >
        <motion.h1
          className="font-black uppercase whitespace-nowrap select-none text-[#e8e4d9] leading-none"
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            fontSize: "clamp(52px, 8.8vw, 94px)",
            fontWeight: 900,
            letterSpacing: "-.02em",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
        >
          GUILHERME
        </motion.h1>
      </div>

      {/* Subtitles Wrap */}
      <div className="absolute bottom-[52px] left-0 right-0 flex justify-between items-end px-[32px] z-10 pointer-events-none">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="block font-mono text-[10px] tracking-[.2em] text-[#e8e4d9] opacity-[.35] mb-[4px]">FUNÇÃO</span>
          <span className="block font-mono text-[11px] tracking-[.12em] text-[#e8e4d9] opacity-[.6]">DESENVOLVEDOR</span>
        </motion.div>

        <motion.div
          className="text-right"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="block font-mono text-[10px] tracking-[.2em] text-[#e8e4d9] opacity-[.35] mb-[4px]">LOCALIZAÇÃO</span>
          <span className="block font-mono text-[11px] tracking-[.12em] text-[#e8e4d9] opacity-[.6]">BRASIL</span>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30 pointer-events-auto">
        <ScrollArrow targetId="projects" />
      </div>

      {/* Custom Cursor Artifacts */}
      <div ref={dotRef} className="absolute w-[6px] h-[6px] bg-[#e05a00] rounded-full pointer-events-none z-50 opacity-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200" />
      <div ref={ringRef} className="absolute w-[32px] h-[32px] border border-[#e05a00]/[0.35] rounded-full pointer-events-none z-[49] opacity-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-[400ms]" />
    </div>
  );
}
