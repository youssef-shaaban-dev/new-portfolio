"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, Download } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection({ ready }: { ready: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ready) return;

      const tl = gsap.timeline({ delay: 0.2 });

      // Image container fade in and scale
      tl.fromTo(
        ".hero-image-container",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );

      // Name text reveal
      tl.fromTo(
        ".hero-name",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
        "-=1"
      );

      // Other elements fade in
      tl.fromTo(
        ".hero-element",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      // Scroll Parallax Effect
      gsap.to(".hero-image-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      
      gsap.to(".hero-name", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef, dependencies: [ready] }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 md:px-12"
    >
      {/* Background Stars/Particles effect (simplified) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[40%] w-1 h-1 bg-white/80 rounded-full animate-pulse" />
        <div className="absolute top-[50%] right-[40%] w-2 h-2 bg-[#5B2EFF]/50 rounded-full blur-[2px]" />
      </div>

      <div className="relative w-full max-w-6xl h-[70vh] md:h-[80vh] flex items-center justify-center z-10 mt-10 md:mt-0">
        
        {/* The main rounded image container */}
        <div className="hero-image-container relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
          {/* Inner Image */}
          <div className="hero-image-bg absolute inset-0 w-full h-[120%] -top-[10%]">
             <Image 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                alt="Workspace" 
                fill
                className="object-cover opacity-80"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-[#050505]/50" />
          </div>

          {/* Social Icons Pill (Left Overlay) */}
          <div className="hero-element absolute left-6 md:left-12 bottom-12 md:bottom-24 flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 z-30">
            <a href="https://github.com/youssef-shaaban-dev" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className="w-5 h-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/youssef-shaaban-dev/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className="w-5 h-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:youssefshahban2001@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Role and CTA (Right Overlay) */}
          <div className="hero-element absolute right-6 md:right-16 bottom-12 md:bottom-24 flex flex-col items-end gap-6 z-30 text-right">
            <h2 className="text-lg md:text-xl font-medium text-white max-w-[200px] leading-snug">
              Front-End Developer<br/>
            </h2>
            <a 
              href="#" 
              className="group flex items-center gap-3 bg-transparent border-2 border-[#5B2EFF] text-white px-6 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-[#5B2EFF] transition-all duration-300"
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* Scroll text (Bottom Center) */}
          <div className="hero-element absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500">
              SCROLL
            </span>
          </div>
        </div>

        {/* Floating Typography Overlaid outside the container */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
          <div className="hero-element flex items-center gap-6 md:gap-12 translate-y-4 md:translate-y-10">
            <h1 className="hero-name text-[10vw] md:text-[8vw] font-black leading-[0.85] text-white tracking-tighter text-center" style={{ textShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              YOUSSEF<br/>
              SHAABAN
            </h1>
            
            {/* Elegant Floating Portrait Container */}
            <div className="hero-element hidden md:block relative w-32 h-32 lg:w-48 lg:h-48 rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-zinc-900 -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/my-photo.jpg" 
                alt="Youssef Shaaban"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Hand-drawn signature graphic */}
        <div className="hero-element absolute left-0 md:left-10 top-1/2 -translate-y-1/2 z-30 pointer-events-none opacity-80 mix-blend-screen w-[200px] md:w-[300px]">
          {/* A cool SVG signature resembling the screenshot */}
          <svg viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto stroke-white">
            <path d="M40 120 C 60 40, 80 40, 100 120 C 110 80, 130 80, 140 120 C 160 50, 180 50, 200 120 C 220 90, 240 90, 260 120 C 280 60, 300 60, 320 120" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 130 Q 200 150 380 100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </section>
  );
}
