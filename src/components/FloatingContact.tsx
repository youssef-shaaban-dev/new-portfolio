"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Mail, X, Phone } from "lucide-react";

const CONTACT_LINKS = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "youssefshahban2001@gmail.com",
    href: "mailto:youssefshahban2001@gmail.com",
    color: "hover:text-[#FF6B35] hover:bg-[#FF6B35]/10",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "WhatsApp",
    value: "+20 109 920 4104",
    href: "https://wa.me/201099204104",
    color: "hover:text-[#00D4AA] hover:bg-[#00D4AA]/10",
  },
  {
    icon: (
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
    ),
    label: "LinkedIn",
    value: "youssef-shaaban-dev",
    href: "https://www.linkedin.com/in/youssef-shaaban-dev/",
    color: "hover:text-[#5B2EFF] hover:bg-[#5B2EFF]/10",
  },
  {
    icon: (
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
    ),
    label: "GitHub",
    value: "youssef-shaaban-dev",
    href: "https://github.com/youssef-shaaban-dev",
    color: "hover:text-white hover:bg-white/10",
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Expanded Menu */}
      <div
        className={`mb-4 flex flex-col gap-2 transition-all duration-500 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-50 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-[280px] shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(255,107,53,0.1)]">
          <div className="p-4 border-b border-white/5 mb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Get in touch
            </span>
            <p className="text-white font-medium text-sm mt-1">
              Available for freelance work
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {CONTACT_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 text-zinc-400 ${link.color}`}
                style={{
                  transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {link.icon}
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{link.label}</span>
                  <span className="text-[10px] opacity-70 truncate max-w-[180px]">
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] overflow-hidden"
      >
        {/* Glow behind button */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35] to-[#5B2EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex items-center justify-center w-full h-full text-black group-hover:text-white transition-colors duration-300">
          <MessageCircle
            className={`absolute w-6 h-6 transition-all duration-500 ${
              isOpen ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            }`}
          />
          <X
            className={`absolute w-6 h-6 transition-all duration-500 ${
              isOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
            }`}
          />
        </div>
      </button>
    </div>
  );
}
