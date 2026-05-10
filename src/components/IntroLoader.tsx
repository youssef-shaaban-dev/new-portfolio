"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface IntroLoaderProps {
  onComplete: () => void;
}

// Premium color palette for the wipe panels
const PANEL_COLORS = [
  "#FF6B35", // Warm orange
  "#5B2EFF", // Electric violet
  "#00D4AA", // Mint teal
  "#FF3366", // Hot pink
  "#030711", // Final dark (site bg)
];

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Phase 1: First color panel wipes from left
      tl.fromTo(
        ".panel-0",
        { xPercent: -100 },
        { xPercent: 0, duration: 0.5, ease: "power3.inOut" }
      );

      // Phase 2: Second panel wipes over, pushing first visually
      tl.fromTo(
        ".panel-1",
        { xPercent: -100 },
        { xPercent: 0, duration: 0.5, ease: "power3.inOut" },
        "+=0.05"
      );

      // Phase 3: Third panel
      tl.fromTo(
        ".panel-2",
        { xPercent: -100 },
        { xPercent: 0, duration: 0.5, ease: "power3.inOut" },
        "+=0.05"
      );

      // Phase 4: Fourth panel
      tl.fromTo(
        ".panel-3",
        { xPercent: -100 },
        { xPercent: 0, duration: 0.5, ease: "power3.inOut" },
        "+=0.05"
      );

      // Phase 5: Name appears on the last color panel
      tl.fromTo(
        ".intro-name-char",
        { y: 80, opacity: 0, rotateX: -60 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          ease: "power4.out",
          stagger: 0.04,
        },
        "-=0.2"
      );

      // Subtitle
      tl.fromTo(
        ".intro-role",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      );

      // Hold
      tl.to({}, { duration: 0.6 });

      // Phase 6: Content fades
      tl.to(".intro-content", {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.in",
      });

      // Phase 7: Final dark panel wipes revealing the site
      tl.fromTo(
        ".panel-4",
        { xPercent: -100 },
        { xPercent: 0, duration: 0.6, ease: "power4.inOut" },
        "-=0.1"
      );

      // Phase 8: All panels slide out to the right
      tl.to(".intro-panel", {
        xPercent: 100,
        duration: 0.7,
        ease: "power4.inOut",
        stagger: 0.04,
        onComplete: () => {
          onComplete();
          setTimeout(() => setHidden(true), 50);
        },
      });
    },
    { scope: containerRef }
  );

  if (hidden) return null;

  const name = "YOUSSEF";

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999]">
      {/* Color Wipe Panels */}
      {PANEL_COLORS.map((color, i) => (
        <div
          key={i}
          className={`intro-panel panel-${i} absolute inset-0 will-change-transform`}
          style={{
            backgroundColor: color,
            zIndex: 10000 + i,
            transform: "translateX(-100%)",
          }}
        />
      ))}

      {/* Center Content - appears on 4th panel (Hot Pink) */}
      <div
        className="intro-content absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        style={{ zIndex: 10010 }}
      >
        <div
          className="flex items-center justify-center overflow-hidden"
          style={{ perspective: "600px" }}
        >
          <h1 className="flex text-[18vw] md:text-[12vw] font-black tracking-tighter leading-none">
            {name.split("").map((char, idx) => (
              <span
                key={idx}
                className="intro-name-char inline-block text-white will-change-transform opacity-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
        <p className="intro-role text-white/60 text-sm md:text-base font-mono tracking-[0.3em] uppercase mt-4 opacity-0">
          Front-End Developer
        </p>
      </div>
    </div>
  );
}
