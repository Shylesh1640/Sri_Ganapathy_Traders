"use client";

import { useCallback, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type Tilt3DProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  hoverScale?: number;
};

export function Tilt3D({
  children,
  className = "",
  maxTilt = 12,
  glare = true,
  hoverScale = 1.02,
}: Tilt3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 22 });
  const springY = useSpring(y, { stiffness: 200, damping: 22 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const glowX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(244,119,33,0.22) 0%, transparent 60%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileHover={{ scale: hoverScale, z: 24 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
}

type Reveal3DProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
};

type RevealOffset = {
  x?: number;
  y?: number;
  rotateX?: number;
  rotateY?: number;
};

const revealOffsets: Record<"up" | "down" | "left" | "right", RevealOffset> = {
  up: { y: 1, rotateX: -1 },
  down: { y: -1, rotateX: 1 },
  left: { x: -1, rotateY: 1 },
  right: { x: 1, rotateY: -1 },
};

export function Reveal3D({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 60,
}: Reveal3DProps) {
  const offset = revealOffsets[direction];
  const initial = {
    opacity: 0,
    x: (offset.x ?? 0) * distance,
    y: (offset.y ?? 0) * distance,
    rotateX: (offset.rotateX ?? 0) * 14,
    rotateY: (offset.rotateY ?? 0) * 14,
    scale: 0.96,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingGeometry({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`}
    >
      <motion.div
        className="scene-3d absolute left-[7%] top-[18%] hidden opacity-50 sm:block"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="cube-3d" style={{ "--cube": "68px" } as React.CSSProperties}>
          {["front", "back", "left", "right", "top", "bottom"].map((face) => (
            <span key={face} className={`cube-face ${face}`} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="scene-3d absolute bottom-[16%] right-[8%] hidden opacity-40 md:block"
        animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="cube-3d"
          style={{ "--cube": "48px", animationDuration: "14s" } as React.CSSProperties}
        >
          {["front", "back", "left", "right", "top", "bottom"].map((face) => (
            <span key={face} className={`cube-face ${face}`} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-24 top-[12%] h-64 w-64 rounded-full border border-orange/20"
        style={{ transform: "rotateX(68deg)" }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -left-16 bottom-[8%] h-48 w-48 rounded-full border border-dashed border-white/15"
        style={{ transform: "rotateX(72deg)" }}
        animate={{ rotateZ: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/10"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function CubeShowcase({
  images,
  size = 230,
  className = "",
}: {
  images: string[];
  size?: number;
  className?: string;
}) {
  const faces = ["front", "right", "back", "left", "top", "bottom"];

  return (
    <div className={`scene-3d relative flex items-center justify-center ${className}`}>
      <div
        className="absolute h-24 w-56 rounded-full bg-orange/20 blur-3xl"
        style={{ transform: "rotateX(75deg) translateY(90px)" }}
      />
      <div
        className="cube-gallery"
        style={{ "--size": `${size}px` } as React.CSSProperties}
      >
        {faces.map((face, i) => (
          <div
            key={face}
            className={`showcase-face face-${i}`}
            style={{
              backgroundImage: `url('${images[i % images.length]}')`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Parallax3DImage({
  src,
  alt,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, rotateX, scale: 1.18 }}
        className={`h-full w-full object-cover ${imageClassName}`}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
    </div>
  );
}

export function OrbitLogos({
  items,
  className = "",
}: {
  items: { name: string; logo: string }[];
  className?: string;
}) {
  const step = 360 / items.length;

  return (
    <div className={`scene-3d relative flex items-center justify-center ${className}`}>
      <div
        className="absolute h-40 w-64 rounded-full border border-orange/20"
        style={{ transform: "rotateX(74deg)" }}
      />
      <div
        className="absolute h-56 w-80 rounded-full border border-dashed border-white/10"
        style={{ transform: "rotateX(74deg)" }}
      />
      <div className="orbit-3d">
        {items.map((item, i) => (
          <div
            key={item.name}
            className="orbit-item"
            style={{ transform: `rotateY(${i * step}deg) translateZ(190px)` }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/10 bg-white p-3 shadow-[0_0_30px_rgba(244,119,33,0.18)]">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
