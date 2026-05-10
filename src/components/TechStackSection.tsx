"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Cpu } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TechItem {
  name: string;
  category: string;
  level: number; // 1-100 proficiency
  color: string;
}

const TECH_STACK: TechItem[] = [
  // Frontend
  { name: "React", category: "frontend", level: 95, color: "#61DAFB" },
  { name: "Next.js", category: "frontend", level: 92, color: "#ffffff" },
  { name: "TypeScript", category: "frontend", level: 90, color: "#3178C6" },
  { name: "JavaScript", category: "frontend", level: 95, color: "#F7DF1E" },
  { name: "HTML/CSS", category: "frontend", level: 98, color: "#E34F26" },
  { name: "Tailwind CSS", category: "frontend", level: 93, color: "#06B6D4" },
  { name: "GSAP", category: "frontend", level: 88, color: "#88CE02" },
  { name: "Framer Motion", category: "frontend", level: 85, color: "#FF0055" },
  { name: "Three.js", category: "frontend", level: 75, color: "#000000" },

  // Backend
  { name: "Node.js", category: "backend", level: 80, color: "#339933" },
  { name: "Express", category: "backend", level: 78, color: "#ffffff" },
  { name: "REST APIs", category: "backend", level: 85, color: "#FF6B35" },

  // Database
  { name: "PostgreSQL", category: "database", level: 75, color: "#4169E1" },
  { name: "MongoDB", category: "database", level: 72, color: "#47A248" },
  { name: "Prisma", category: "database", level: 70, color: "#2D3748" },
  { name: "Supabase", category: "database", level: 78, color: "#3ECF8E" },

  // Tools
  { name: "Git", category: "tools", level: 90, color: "#F05032" },
  { name: "Figma", category: "tools", level: 85, color: "#F24E1E" },
  { name: "VS Code", category: "tools", level: 95, color: "#007ACC" },
  { name: "Vercel", category: "tools", level: 88, color: "#ffffff" },
];

const CATEGORIES = [
  { key: "frontend", label: "Frontend", color: "#5B2EFF" },
  { key: "backend", label: "Backend", color: "#FF6B35" },
  { key: "database", label: "Database", color: "#00D4AA" },
  { key: "tools", label: "Tools", color: "#FF3366" },
];

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header reveal
      gsap.fromTo(
        ".stack-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Category labels
      gsap.fromTo(
        ".stack-category",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );

      // Tech items cascade
      gsap.fromTo(
        ".tech-item",
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.04,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 55%",
          },
        }
      );

      // Progress bars fill
      gsap.fromTo(
        ".tech-progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.03,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-28 md:py-40 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5B2EFF]/5 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#FF6B35]/5 blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="stack-header mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-4 h-4 text-[#5B2EFF]" />
            <span className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase font-mono">
              Tech Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Technologies <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B2EFF] to-[#00D4AA]">
              I master
            </span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {CATEGORIES.map((cat) => {
            const items = TECH_STACK.filter((t) => t.category === cat.key);
            return (
              <div key={cat.key} className="stack-category">
                {/* Category Label */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/[0.06]">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  <span className="text-sm font-bold tracking-wider text-zinc-300 uppercase">
                    {cat.label}
                  </span>
                  <span className="text-xs text-zinc-600 font-mono ml-auto">
                    {items.length} skills
                  </span>
                </div>

                {/* Tech Items */}
                <div className="flex flex-col gap-4">
                  {items.map((tech, idx) => (
                    <div
                      key={idx}
                      className="tech-item group flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors duration-300 cursor-default"
                    >
                      {/* Tech dot */}
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0 group-hover:scale-150 transition-transform duration-300"
                        style={{ backgroundColor: tech.color }}
                      />

                      {/* Name */}
                      <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors min-w-[100px]">
                        {tech.name}
                      </span>

                      {/* Progress Bar */}
                      <div className="flex-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                        <div
                          className="tech-progress h-full rounded-full origin-left"
                          style={{
                            width: `${tech.level}%`,
                            backgroundColor: tech.color,
                            opacity: 0.6,
                          }}
                        />
                      </div>

                      {/* Percentage */}
                      <span className="text-[10px] font-mono font-bold text-zinc-600 w-8 text-right group-hover:text-zinc-400 transition-colors">
                        {tech.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
