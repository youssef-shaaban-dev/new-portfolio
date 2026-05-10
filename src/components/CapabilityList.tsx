"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CAPABILITIES = [
  {
    number: "01",
    title: "UI Engineering",
    details: "Next.js, React Server Components, Dynamic Routing",
    theme: "group-hover:text-indigo-400"
  },
  {
    number: "02",
    title: "Creative Dev",
    details: "GSAP, Framer Motion, Canvas API, Optimization",
    theme: "group-hover:text-purple-400"
  },
  {
    number: "03",
    title: "System Architecture",
    details: "Scalable UI systems, Design Tokens, State logic",
    theme: "group-hover:text-rose-400"
  },
  {
    number: "04",
    title: "Spatial Interfaces",
    details: "WebGPU, 3D Perspective depth layers, Shaders",
    theme: "group-hover:text-cyan-400"
  }
];

export default function CapabilityList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Trigger each row reveal in sequence
    gsap.fromTo('.cap-row', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

    // Reveal the scale line divider from the center outwards
    gsap.fromTo('.cap-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power3.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-36 px-6 md:px-12 bg-zinc-950/50 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col">
        
        {/* Reference Style: Label enclosed in parenthesis */}
        <div className="mb-16 opacity-60 flex items-center gap-4">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-indigo-300">( CAPABILITIES )</span>
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </div>

        <div className="flex flex-col w-full">
          {CAPABILITIES.map((cap, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col md:flex-row items-start md:items-center py-12 md:py-16 cursor-pointer border-b border-white/5 cap-row overflow-hidden"
            >
              {/* Reference Style: Massive Numbering with High Contrast */}
              <div className="text-sm md:text-base font-mono text-zinc-600 font-bold mr-12 md:mr-24 opacity-80 group-hover:text-white transition-colors mb-4 md:mb-0">
                /{cap.number}
              </div>

              <div className="flex-1">
                <h3 className={`text-4xl md:text-6xl font-black tracking-tight text-zinc-300 transition-all duration-500 group-hover:translate-x-3 ${cap.theme}`}>
                  {cap.title}
                </h3>
              </div>

              <div className="max-w-xs md:text-right mt-4 md:mt-0">
                <p className="text-zinc-500 font-medium text-sm md:text-base tracking-wide group-hover:text-zinc-300 transition-colors">
                  {cap.details}
                </p>
              </div>

              {/* Background Reveal Hover Effect Inspired by Reference */}
              <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
