"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, MonitorPlay, Layers } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ALL_PROJECTS = [
  {
    title: "AI Marketing & WhatsApp Automation",
    description: "A full-stack platform combining AI content generation with automated WhatsApp marketing campaigns.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Twilio", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/youssef-shaaban-dev",
    demo: "https://youssefshaaban-portfolio.vercel.app/",
    accent: "#FF6B35",
  },
  {
    title: "E-Learning Education Platform",
    description: "Comprehensive LMS platform with student dashboards, video courses, and an administrative control panel.",
    tech: ["React", "Node.js", "PostgreSQL", "Redux"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/youssef-shaaban-dev",
    demo: "https://youssefshaaban-portfolio.vercel.app/",
    accent: "#5B2EFF",
  },
  {
    title: "Luxury Perfume E-Commerce",
    description: "High-end Shopify storefront with custom liquid theme development and seamless payment integrations.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop",
    demo: "https://youssefshaaban-portfolio.vercel.app/",
    accent: "#00D4AA",
  },
  {
    title: "Interactive 3D Soda Landing Page",
    description: "Award-winning promotional page featuring interactive 3D product models and scroll-based physics.",
    tech: ["Next.js", "Three.js", "React Three Fiber", "GSAP"],
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/youssef-shaaban-dev",
    demo: "https://youssefshaaban-portfolio.vercel.app/",
    accent: "#FF3366",
  },
  {
    title: "Medical Clinic Dashboard",
    description: "Internal management tool for a medical clinic handling patient records, appointments, and billing.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551076805-e18690c5e577?q=80&w=2069&auto=format&fit=crop",
    github: "https://github.com/youssef-shaaban-dev",
    accent: "#FF6B35",
  },
  {
    title: "Fashion Boutique Store",
    description: "Modern, extremely fast e-commerce experience for a premium fashion brand with complex filtering.",
    tech: ["Next.js 14", "TypeScript", "Stripe", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop",
    demo: "https://youssefshaaban-portfolio.vercel.app/",
    accent: "#5B2EFF",
  }
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        ".projects-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Card reveals with staggering
      const cards = gsap.utils.toArray<HTMLElement>(".all-project-card");
      
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { 
            y: 100, 
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-28 md:py-40 px-4 md:px-12 bg-background relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#FF6B35]/5 blur-[250px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#5B2EFF]/5 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="projects-header mb-24 md:mb-32 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Layers className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-300 uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#5B2EFF]">Projects</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl text-balance">
            A comprehensive collection of my latest work, including open-source contributions, freelance projects, and personal experiments.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {ALL_PROJECTS.map((project, i) => (
            <div 
              key={i} 
              className="all-project-card group relative flex flex-col rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-white/15 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
              style={{ marginTop: i % 2 === 1 ? 'max(0px, 4rem)' : '0px' }}
            >
              {/* Image Container */}
              <div className="relative w-full h-[280px] md:h-[350px] overflow-hidden bg-card">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Accent glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }}
                />
              </div>

              {/* Content Container */}
              <div className="relative flex flex-col flex-1 p-8 md:p-10 -mt-20 z-10">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wider shadow-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Links / Action Bar */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-3.5 rounded-xl font-bold text-sm hover:bg-[#FF6B35] hover:text-white transition-all duration-300"
                    >
                      <MonitorPlay className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 text-white px-4 py-3.5 rounded-xl font-bold text-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        className="w-4 h-4"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      <span>Source Code</span>
                    </a>
                  )}
                  {!project.demo && !project.github && (
                    <span className="text-sm text-zinc-500 font-mono">Private Project</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
