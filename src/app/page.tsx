"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import FloatingContact from "@/components/FloatingContact";


export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar visible={true} />

      <main className="w-full overflow-x-hidden flex flex-col bg-transparent text-white relative z-10">
        {/* 1. Hero */}
        <HeroSection ready={true} />

        {/* 2. About */}
        <div id="about">
          <AboutSection />
        </div>

        {/* 3. Services */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* 4. Experience */}
        <div id="experience">
          <ExperienceSection />
        </div>

        {/* 5. Tech Stack */}
        <div id="stack">
          <TechStackSection />
        </div>

        {/* 6. Projects */}
        <div id="projects">
          <ProjectsSection />
        </div>



        {/* Footer / Contact */}
        <footer
          id="contact"
          className="relative w-full pt-32 pb-10 overflow-hidden bg-background border-t border-white/5 flex flex-col items-center justify-center text-center z-10"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF6B35]/10 blur-[150px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#5B2EFF]/10 blur-[200px] pointer-events-none rounded-full" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
            
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#5B2EFF]">Extraordinary</span>
            </h2>
            
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl text-balance">
              Whether you have a wild idea or need a highly optimized web application, I'm ready to turn your vision into reality.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-24 w-full">
              <a
                href="mailto:youssefshahban2001@gmail.com"
                className="group relative flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-sm md:text-base hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,107,53,0.3)] hover:-translate-y-1 w-full sm:w-auto"
              >
                <span>youssefshahban2001@gmail.com</span>
                <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white animate-pulse" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-16 border-t border-white/10 pt-12 w-full max-w-2xl">
              {[
                { name: "WhatsApp", url: "https://wa.me/201099204104", hover: "hover:text-[#00D4AA]" },
                { name: "GitHub", url: "https://github.com/youssef-shaaban-dev", hover: "hover:text-white" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/youssef-shaaban-dev/", hover: "hover:text-[#5B2EFF]" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-zinc-500 font-bold text-sm md:text-base uppercase tracking-[0.2em] transition-colors duration-300 ${link.hover}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Ticker */}
          <div className="w-full overflow-hidden py-4 border-y border-white/5 bg-white/[0.01]">
            <div className="flex whitespace-nowrap animate-marquee">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="mx-4 text-zinc-600 text-xs md:text-sm font-mono font-bold tracking-[0.3em] uppercase"
                >
                  Youssef Shaaban © {new Date().getFullYear()}
                </span>
              ))}
            </div>
          </div>
        </footer>

        {/* Global Floating Contact */}
        <FloatingContact />
      </main>
    </>
  );
}
