"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ExternalLink, Github, Globe } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  {
    title: "Solaris Dashboard",
    type: "AI Driven SaaS",
    tech: ["Next.js 14", "Tailwind", "Recharts", "Supabase"],
    accent: "from-emerald-400/20 to-cyan-400/20",
    borderColor: "group-hover:border-emerald-500/50",
    delay: 0
  },
  {
    title: "Kryo Ecosystem",
    type: "E-commerce 3.0",
    tech: ["Three.js", "GSAP", "Sanity.io", "Stripe"],
    accent: "from-purple-400/20 to-rose-400/20",
    borderColor: "group-hover:border-purple-500/50",
    delay: 0.15
  },
  {
    title: "Synapse Core",
    type: "Dev Tooling",
    tech: ["TypeScript", "Rust", "Next.js", "tRPC"],
    accent: "from-blue-400/20 to-indigo-400/20",
    borderColor: "group-hover:border-blue-500/50",
    delay: 0.05
  },
  {
    title: "Velvet CRM",
    type: "Enterprise Suite",
    tech: ["React Native", "Node.js", "Postgres"],
    accent: "from-amber-400/20 to-orange-400/20",
    borderColor: "group-hover:border-orange-500/50",
    delay: 0.2
  }
];

export default function ProjectsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.project-card');
    
    // 1. Reveal sequence: cards emerge from physical z-space stagger
    gsap.fromTo(cards, 
      { 
        y: 150, 
        z: -200, 
        opacity: 0, 
        rotateX: 30 
      },
      {
        y: 0,
        z: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // 2. Setup internal floating cycle & 3D tilt listeners
    cards.forEach((card) => {
      const inner = card.querySelector('.card-inner') as HTMLElement;
      if (!inner) return;

      // Distinct idle floating sequence
      gsap.to(inner, {
        y: gsap.utils.random(-12, 12),
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true
      });

      // Interactive Perspective Tilt Engine
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate vector intensities (-1 to 1)
        const rotateX = ((y - centerY) / centerY) * -12; // Max 12deg
        const rotateY = ((x - centerX) / centerX) * 12;
        
        gsap.to(inner, {
          rotateX: rotateX,
          rotateY: rotateY,
          scale: 1.03,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(inner, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto"
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-screen bg-zinc-950 py-32 px-6 md:px-12 overflow-hidden relative">
      
      {/* Structural Grid Lines (Faint Aesthetic) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-20">
          <h3 className="text-zinc-500 text-sm font-mono tracking-[0.4em] uppercase mb-4 flex items-center gap-4">
            <span className="h-px w-12 bg-zinc-800 inline-block"></span> Selected Works
          </h3>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Digital <br/> Experiences
          </h2>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16" 
          style={{ perspective: '1200px' }}
        >
          {PROJECTS.map((project, i) => (
            <div 
              key={i} 
              className="project-card group relative cursor-pointer will-change-transform"
              style={{ 
                marginTop: i % 2 === 1 ? '4rem' : '0', // Adds asymmetrical layout dynamic
                transformStyle: 'preserve-3d'
              }}
            >
              {/* The physically rendered node with tilt capabilities */}
              <div className="card-inner will-change-transform transform-style-3d transition-shadow duration-500 h-[400px] md:h-[500px] rounded-3xl bg-zinc-900/40 backdrop-blur-sm border border-white/10 overflow-hidden flex flex-col relative group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] group-hover:border-white/20">
                
                {/* Visual Atmosphere Mask */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-40 group-hover:opacity-80 transition-opacity duration-700`} />
                
                {/* Interactive Spotlight Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />

                {/* High-End Content Layout */}
                <div className="mt-auto p-8 md:p-12 relative z-20 flex flex-col [transform:translateZ(30px)]">
                  <span className="text-xs font-bold text-zinc-400 font-mono tracking-widest uppercase mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    {project.type}
                  </span>
                  
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                    {project.title}
                  </h4>

                  {/* Hidden revealed tech stack pills */}
                  <div className="flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Static action hint icon placed deep in Z space */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center [transform:translateZ(50px)] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out shadow-xl">
                  <ExternalLink className="w-5 h-5" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
