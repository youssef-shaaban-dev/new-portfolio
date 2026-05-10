"use client";

import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Highly optimized synchronization between Lenis ticks and GSAP core
    // Ensures perfectly smooth intersection observation
    const update = (time: number) => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.075, 
        duration: 1.4, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
