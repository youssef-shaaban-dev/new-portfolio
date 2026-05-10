"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Layout, Terminal } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-text-reveal",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { y: -50 },
        {
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.to(".ambient-glow", {
        opacity: 0.6,
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background/95 py-32 md:py-48 overflow-hidden px-6 md:px-12 flex items-center"
    >
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl pointer-events-none overflow-visible z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#5B2EFF]/10 blur-[120px] ambient-glow" />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#FF6B35]/8 blur-[120px] ambient-glow"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative group w-full max-w-md">
            <div className="absolute inset-4 border border-[#5B2EFF]/30 rounded-3xl -rotate-6 translate-x-4 translate-y-4 z-0 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out" />

            <div
              ref={imageRef}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl z-10 group-hover:border-white/30 transition-colors duration-500 bg-card"
            >
              <Image
                src="/my-photo.jpg"
                alt="Youssef Portfolio Portrait"
                fill
                className="object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <div className="space-y-4 overflow-hidden">
            <div className="about-text-reveal flex items-center gap-3 text-[#FF6B35] font-mono text-sm font-semibold tracking-[0.3em]">
              <span className="w-8 h-px bg-[#FF6B35]/50" />
              ( ABOUT ME )
            </div>
            <h2 className="about-text-reveal text-4xl md:text-6xl font-black text-white tracking-tight leading-[0.9]">
              Programmer, Developer,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF3366] to-[#5B2EFF]">
                Web-animator
              </span>
            </h2>
          </div>

          <div className="space-y-6 max-w-xl about-text-reveal">
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-medium text-balance">
              With a passion for design and development, I take projects from
              ideation to launch, ensuring a seamless journey that leaves a
              lasting positive impact on the digital landscape and your business.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Creating great web experiences is my primary focus. I ensure each
              project leaves users with a feel-good sensation through meticulous
              attention to detail and user-centric design principles.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-card/80 border border-white/10 group-hover:border-[#5B2EFF]/50 transition-colors">
                  <Layout className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    Interface Craft
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium">
                    Pixel-level execution
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 group-hover:border-[#FF6B35]/50 transition-colors">
                  <Terminal className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    Architecture
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium">
                    Scalable infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
