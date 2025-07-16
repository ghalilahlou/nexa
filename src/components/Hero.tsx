"use client";

import React from "react";

// Aurora wave SVG background
function AuroraWave() {
  return (
    <svg className="absolute top-0 left-0 w-full h-64 md:h-80 z-0 animate-aurora" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
      <defs>
        <linearGradient id="aurora-gradient" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffe5ec" />
          <stop offset="0.4" stopColor="#ffd700" stopOpacity="0.7" />
          <stop offset="0.7" stopColor="#e0f2ff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fffbe9" />
        </linearGradient>
      </defs>
      <path fill="url(#aurora-gradient)" fillOpacity="0.7" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
    </svg>
  );
}

// Floating glass orbs
function GlassOrbs() {
  return (
    <>
      <div className="absolute top-24 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-nexa-gold/30 via-white/40 to-blue-100/30 backdrop-blur-xl opacity-60 animate-orb1 z-0" />
      <div className="absolute bottom-24 right-1/5 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-100/40 via-nexa-gold/20 to-nexa-ivory/30 backdrop-blur-lg opacity-50 animate-orb2 z-0" />
    </>
  );
}

// Animated dotted grid
function DottedGrid() {
  return (
    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20 z-0 animate-grid-float" viewBox="0 0 600 300" fill="none">
      {Array.from({ length: 10 }).map((_, row) => (
        Array.from({ length: 20 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 30 + 10} cy={row * 30 + 10} r="2.5" fill="#c7a770" />
        ))
      ))}
    </svg>
  );
}

// Animated CTA button
function AnimatedCTA() {
  return (
    <a
      href="#about"
      className="relative z-20 mt-12 px-10 py-4 rounded-full border-2 border-nexa-gold bg-nexa-gold/10 text-nexa-gold font-sans font-semibold text-xl backdrop-blur-md shadow-[0_0_24px_0_rgba(199,167,112,0.25)] flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold animate-btn-float overflow-hidden"
      style={{ boxShadow: "0 0 32px 0 #ffd70055, 0 2px 16px 0 #c7a77033" }}
    >
      <span className="relative z-10">Discover our expertise</span>
      <span className="inline-block group-hover:translate-y-1 transition-transform duration-300 relative z-10">↓</span>
      {/* Wavy border SVG overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 56" fill="none" preserveAspectRatio="none">
        <path className="animate-wavy-border" d="M2,28 Q20,2 40,28 T80,28 T120,28 T160,28 T198,28" stroke="#ffd700" strokeWidth="3" fill="none" />
      </svg>
      {/* Shimmer effect */}
      <span className="absolute left-0 top-0 w-full h-full shimmer" />
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] w-full overflow-hidden bg-nexa-night pt-32 pb-16">
      {/* Aurora wave background */}
      <AuroraWave />
      {/* Glass orbs */}
      <GlassOrbs />
      {/* Dotted grid */}
      <DottedGrid />
      {/* Unified headline */}
      <h1 className="relative z-20 text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-center tracking-tight drop-shadow-[0_4px_32px_rgba(199,167,112,0.18)] mb-6 leading-tight">
        Connecting talent,{' '}
        <span className="text-nexa-gold drop-shadow-[0_2px_16px_rgba(199,167,112,0.25)]">driving success.</span>
      </h1>
      {/* Description from brief */}
      <p className="relative z-20 mt-4 text-lg md:text-2xl font-sans text-nexa-ivory/90 text-center max-w-2.5xl leading-relaxed shadow-none">
        At Nexa Partners, we specialize in executive recruitment with a sharp focus on quality over volume.<br />
        We work closely with both companies and candidates to build long-lasting, meaningful partnerships.<br />
        Through a rigorous and highly personalized headhunting process, we help organizations identify and attract high-impact leaders and rising talent.<br />
        We’re based in Casablanca, but our reach is international.
      </p>
      {/* Animated CTA button */}
      <AnimatedCTA />
      {/* Trust bar removed as requested */}
      {/* Custom animations for motifs and button */}
      <style jsx>{`
        @keyframes aurora {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-60px); }
        }
        .animate-aurora { animation: aurora 18s ease-in-out infinite alternate; }
        @keyframes orb1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.08); }
        }
        .animate-orb1 { animation: orb1 10s ease-in-out infinite; }
        @keyframes orb2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(18px) scale(1.12); }
        }
        .animate-orb2 { animation: orb2 13s ease-in-out infinite; }
        @keyframes grid-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-grid-float { animation: grid-float 14s ease-in-out infinite; }
        @keyframes btn-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-btn-float { animation: btn-float 4.5s ease-in-out infinite; }
        @keyframes wavy-border {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 40; }
        }
        .animate-wavy-border { stroke-dasharray: 12 8; animation: wavy-border 2.5s linear infinite; }
        .shimmer {
          background: linear-gradient(120deg, transparent 30%, #fffbe9 50%, transparent 70%);
          opacity: 0.5;
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          transform: translateX(-100%);
          animation: shimmer-move 2.2s infinite linear;
          z-index: 1;
        }
        @keyframes shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
} 