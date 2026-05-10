"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Palette, Zap, Globe } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom-coded websites built for your brand — scalable, fast, accessible, with engaging animations for memorable user experiences.",
    highlights: ["Modern Websites", "Motion & Animations", "Scalability"],
    icon: <Code className="w-5 h-5" />,
    accent: "#FF6B35",
  },
  {
    number: "02",
    title: "Advanced Solutions",
    description:
      "Developing advanced web applications that redefine online platforms — progressive web apps and complex system integrations.",
    highlights: [
      "Progressive Web Apps",
      "Complex Integrations",
      "Innovative Tech",
    ],
    icon: <Zap className="w-5 h-5" />,
    accent: "#5B2EFF",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Creating intuitive, responsive interfaces with meticulous attention to detail and user-centric design principles.",
    highlights: ["Interface Design", "User Research", "Prototyping"],
    icon: <Palette className="w-5 h-5" />,
    accent: "#00D4AA",
  },
  {
    number: "04",
    title: "Code Optimization",
    description:
      "Your website deserves to be seen. Optimizing load times, improving user experiences, ensuring your site runs smoothly.",
    highlights: [
      "Modern Frameworks",
      "Responsive Design",
      "Speed Optimization",
    ],
    icon: <Globe className="w-5 h-5" />,
    accent: "#FF3366",
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".service-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-28 md:py-40 px-6 md:px-12 bg-background relative overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#FF6B35]/5 blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase font-mono">
              What I do /
            </span>
            <span className="text-xs font-mono text-[#FF6B35]">
              ( SERVICES )
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Services
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            User-friendly interfaces don&apos;t happen by chance, they are built
            with intention. I code intuitive responsive solutions that make your
            users&apos; journey effortless.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="service-card group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at 100% 0%, ${service.accent}10, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Top row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-3xl font-black font-mono opacity-20 group-hover:opacity-60 transition-opacity"
                    style={{ color: service.accent }}
                  >
                    {service.number}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors"
                    style={{ color: service.accent }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-col gap-2">
                  {service.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    >
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: service.accent }}
                      />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
