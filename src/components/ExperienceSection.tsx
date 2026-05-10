"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Briefcase } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPERIENCES = [
  {
    role: "Freelancer Frontend Developer",
    company: "Freelance",
    period: "May 2025 — Present",
    description:
      "Delivered 20+ end-to-end web projects including AI platforms and e-commerce stores using React, Next.js, and modern tooling. Focused on high-performance design and scalable solutions.",
    tech: ["Next.js", "React", "TypeScript", "GSAP", "Tailwind CSS"],
    accent: "#FF6B35",
  },
  {
    role: "Frontend Developer",
    company: "Codule",
    period: "Jan 2025 — Sep 2025",
    description:
      "Developed responsive web applications, booking systems, and internal dashboards. Created reusable component libraries and optimized performance through advanced state management.",
    tech: ["React", "Node.js", "Redux", "Styled Components"],
    accent: "#5B2EFF",
  },
  {
    role: "Internship Frontend Developer",
    company: "Web Master",
    period: "Aug 2024 — Oct 2024",
    description:
      "Transformed Figma designs into pixel-perfect web applications, achieving a 100% Lighthouse performance score across all projects.",
    tech: ["HTML/CSS", "JavaScript", "React", "Figma"],
    accent: "#00D4AA",
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Timeline line draws
      gsap.fromTo(
        ".exp-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Cards reveal
      gsap.fromTo(
        ".exp-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
        }
      );

      // Dot scale
      gsap.fromTo(
        ".exp-dot",
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          ease: "back.out(2)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-28 md:py-40 px-6 md:px-12 bg-[#070707] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase font-mono">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Where I&apos;ve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF3366]">
              worked
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="exp-line absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent origin-top" />

          <div className="flex flex-col gap-16">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="exp-card relative pl-16 md:pl-20">
                {/* Timeline Dot */}
                <div
                  className="exp-dot absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full border-2 border-white/20 z-10"
                  style={{ backgroundColor: exp.accent }}
                >
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ backgroundColor: exp.accent }}
                  />
                </div>

                {/* Card */}
                <div className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-500 hover:bg-white/[0.04]">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at 50% 0%, ${exp.accent}08, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Period */}
                    <span className="text-xs font-mono font-bold tracking-wider text-zinc-500 mb-3 block">
                      {exp.period}
                    </span>

                    {/* Role & Company */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm font-semibold mb-4"
                      style={{ color: exp.accent }}
                    >
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-bold tracking-wider text-zinc-400 bg-white/5 border border-white/[0.06] px-3 py-1.5 rounded-full uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
