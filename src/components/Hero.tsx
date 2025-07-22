"use client";

import React, { useEffect, useState } from "react";
import { FiBriefcase, FiDollarSign, FiMonitor, FiBarChart2, FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

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

// Particules dorées animées
function GoldParticles() {
  const [positions, setPositions] = useState<{top: string, left: string, size: number}[]>([]);
  useEffect(() => {
    setPositions(
      Array.from({ length: 18 }, () => ({
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        size: 8 + Math.floor(Math.random() * 4) * 6,
      }))
    );
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br from-[#ffd700] via-[#fffbe9] to-[#c7a770] opacity-30 animate-particle${i % 6}`}
          style={{
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            top: pos.top,
            left: pos.left,
            filter: 'blur(1.5px)',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes particle0 { 0% { transform: translateY(0); } 100% { transform: translateY(-12px); } }
        @keyframes particle1 { 0% { transform: translateX(0); } 100% { transform: translateX(10px); } }
        @keyframes particle2 { 0% { opacity: 0.3; } 50% { opacity: 0.7; } 100% { opacity: 0.3; } }
        @keyframes particle3 { 0% { transform: scale(1); } 100% { transform: scale(1.2); } }
        @keyframes particle4 { 0% { transform: translateY(0) scale(1); } 100% { transform: translateY(8px) scale(1.1); } }
        @keyframes particle5 { 0% { opacity: 0.5; } 100% { opacity: 0.2; } }
        .animate-particle0 { animation: particle0 5s infinite alternate ease-in-out; }
        .animate-particle1 { animation: particle1 7s infinite alternate ease-in-out; }
        .animate-particle2 { animation: particle2 6s infinite alternate ease-in-out; }
        .animate-particle3 { animation: particle3 8s infinite alternate ease-in-out; }
        .animate-particle4 { animation: particle4 9s infinite alternate ease-in-out; }
        .animate-particle5 { animation: particle5 7s infinite alternate ease-in-out; }
      `}</style>
    </div>
  );
}

// Ajout d'un motif SVG animé pour le fond
function HeroBackgroundMotifs() {
  return (
    <>
      {/* Dégradé radial */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[80vh] rounded-full bg-gradient-radial from-[#ffe5ec] via-[#ffd70033] to-transparent opacity-70" />
      </div>
      {/* Cercles animés */}
      <svg className="absolute left-1/4 top-1/4 w-48 h-48 opacity-30 animate-float-motif z-0" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#ffd700" strokeWidth="2" fill="none" />
      </svg>
      {/* Points */}
      <svg className="absolute right-10 bottom-10 w-32 h-16 opacity-20 z-0" viewBox="0 0 160 80" fill="none">
        {Array.from({ length: 5 }).map((_, i) => (
          <circle key={i} cx={20 + i * 30} cy={40 + (i % 2) * 10} r="6" fill="#ffd700" />
        ))}
      </svg>
      {/* Vague animée */}
      <svg className="absolute left-0 bottom-0 w-full h-24 opacity-20 z-0 animate-wave-motif" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
        <path d="M0,48 Q360,0 720,48 T1440,48 V96 H0 Z" fill="#ffe5ec" />
      </svg>
      <style jsx>{`
        @keyframes float-motif {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float-motif { animation: float-motif 7s ease-in-out infinite; }
        @keyframes wave-motif {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }
        .animate-wave-motif { animation: wave-motif 8s linear infinite alternate; }
      `}</style>
    </>
  );
}

export default function Hero() {
  // Redirection fluide et ouverture de la bonne rubrique Expertise
  function handleExpertiseClick(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', hash);
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Simule un clic sur le bouton enfant pour ouvrir la rubrique
        const btn = el.querySelector('button');
        if (btn) (btn as HTMLButtonElement).click();
      }
    }
  }
  return (
    <section className="relative flex flex-col md:flex-row items-stretch justify-center min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-nexa-ivory via-[#e0f2ff] to-[#ffe5ec] pt-24 pb-10 px-4 sm:pt-32 sm:pb-16">
      <HeroBackgroundMotifs />
      {/* Colonne gauche : Citation Nexa */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-end md:pr-8 z-10">
        <div className="relative max-w-xl w-full flex flex-col items-center md:items-end animate-fade-slide-up">
          {/* Guillemets stylisés */}
          <span className="text-nexa-gold text-4xl md:text-5xl font-serif font-bold mb-2 md:mb-4 select-none">“</span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-nexa-night text-center md:text-right tracking-tight mb-2 sm:mb-4 leading-tight relative group transition-all duration-300 hover:animate-shine">
            <span className="shine-bg absolute inset-0 z-0 pointer-events-none" />
            <span className="relative z-10">Connecting talent,<br className="hidden sm:block" /> driving success.</span>
          </h1>
          <span className="text-nexa-gold text-3xl md:text-4xl font-serif font-bold mt-2 select-none self-end">”</span>
        </div>
      </div>
      {/* Colonne droite : Bloc expertises enrichi */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start z-20 mt-10 md:mt-0 animate-fade-slide-up delay-200">
        <div className="relative bg-white/20 backdrop-blur-2xl rounded-[2.2rem] shadow-xl px-3 py-6 sm:px-8 sm:py-10 max-w-full sm:max-w-md w-full flex flex-col items-center border-0 overflow-hidden group mx-auto" style={{boxShadow: '0 8px 32px 0 #ffd70022, 0 2px 16px 0 #c7a77022'}}>
          {/* Bordure dorée épaisse continue */}
          <span className="absolute inset-0 rounded-[2.2rem] pointer-events-none border-4 border-[#ffd700] z-10" style={{boxShadow: '0 0 0 2px #ffd700, 0 0 16px 2px #ffe5ec55'}} />
          {/* Ombre dorée discrète */}
          <span className="absolute inset-0 rounded-[2.2rem] pointer-events-none z-0" style={{boxShadow: '0 8px 32px 0 #ffd70022'}} />
          {/* Motif vague dorée en bas à droite */}
          <svg className="absolute right-4 bottom-2 w-20 h-5 sm:w-24 sm:h-7 opacity-30 z-10 pointer-events-none" viewBox="0 0 96 28" fill="none"><path d="M0,20 Q24,0 48,20 T96,20" stroke="#ffd700" strokeWidth="2.5" fill="none" /></svg>
          {/* Titre sur fond dégradé pastel */}
          <h3 className="font-serif text-lg sm:text-2xl font-extrabold mb-4 sm:mb-8 text-center tracking-wide relative z-20 bg-none p-0">
            <span className="bg-gradient-to-r from-[#ffd700] via-[#c7a770] to-[#ffe5ec] bg-clip-text text-transparent animate-shine-gold drop-shadow-[0_2px_12px_rgba(199,167,112,0.25)] hover:animate-shine-gold-hover transition-all duration-300 cursor-pointer">
              Our Expertise
            </span>
          </h3>
          <ul className="flex flex-col gap-4 sm:gap-6 w-full">
            <li>
              <a href="#expertise-strategy" onClick={e => handleExpertiseClick(e, '#expertise-strategy')} className="group flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 hover:bg-nexa-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#ffe5ec] via-[#ffd700] to-[#fffbe9] text-nexa-night text-[1.7rem] shadow-md group-hover:scale-110 transition-transform duration-200">
                  <FiBriefcase />
                </span>
                <span className="font-sans text-base sm:text-lg text-nexa-night font-medium flex-1">Strategy & Management Consulting</span>
                <span className="text-nexa-steel text-2xl group-hover:text-nexa-gold transition-colors duration-200"><FiArrowRight /></span>
              </a>
            </li>
            <li>
              <a href="#expertise-finance" onClick={e => handleExpertiseClick(e, '#expertise-finance')} className="group flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 hover:bg-nexa-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#e0f2ff] via-[#ffd700] to-[#fffbe9] text-nexa-night text-[1.7rem] shadow-md group-hover:scale-110 transition-transform duration-200">
                  <FiDollarSign />
                </span>
                <span className="font-sans text-base sm:text-lg text-nexa-night font-medium flex-1">Financial Services & Private Equity</span>
                <span className="text-nexa-steel text-2xl group-hover:text-nexa-gold transition-colors duration-200"><FiArrowRight /></span>
              </a>
            </li>
            <li>
              <a href="#expertise-tech" onClick={e => handleExpertiseClick(e, '#expertise-tech')} className="group flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 hover:bg-nexa-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#ffe5ec] via-[#e0f2ff] to-[#ffd700] text-nexa-night text-[1.7rem] shadow-md group-hover:scale-110 transition-transform duration-200">
                  <FiMonitor />
                </span>
                <span className="font-sans text-base sm:text-lg text-nexa-night font-medium flex-1">Tech & Digital</span>
                <span className="text-nexa-steel text-2xl group-hover:text-nexa-gold transition-colors duration-200"><FiArrowRight /></span>
              </a>
            </li>
            <li>
              <a href="#expertise-industrials" onClick={e => handleExpertiseClick(e, '#expertise-industrials')} className="group flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 hover:bg-nexa-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#fffbe9] via-[#ffd700] to-[#e0f2ff] text-nexa-night text-[1.7rem] shadow-md group-hover:scale-110 transition-transform duration-200">
                  <FiBarChart2 />
                </span>
                <span className="font-sans text-base sm:text-lg text-nexa-night font-medium flex-1">Industrials</span>
                <span className="text-nexa-steel text-2xl group-hover:text-nexa-gold transition-colors duration-200"><FiArrowRight /></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Décorations premium en fond (optionnel) */}
      <AuroraWave />
      <GlassOrbs />
      <DottedGrid />
      <GoldParticles />
      <style jsx>{`
        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-up { animation: fade-slide-up 1.1s cubic-bezier(.4,0,.2,1) both; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shine-bg {
          background: linear-gradient(90deg, #ffd700 0%, #fffbe9 50%, #ffd700 100%);
          background-size: 200% 100%;
          opacity: 0.15;
          border-radius: 0.5rem;
        }
        .group:hover .shine-bg { animation: shine 1.5s linear infinite; }
        @keyframes border-glow {
          0%,100% { box-shadow: 0 0 0px #ffd700, 0 0 0px #c7a770; border-color: #ffd70033; }
          50% { box-shadow: 0 0 24px #ffd700, 0 0 32px #c7a770; border-color: #ffd700; }
        }
        .animate-border-glow { animation: border-glow 2.5s infinite alternate; }
        @keyframes border-gradient {
          0% { border-image: linear-gradient(90deg, #ffd700, #ffe5ec, #e0f2ff, #ffd700) 1; }
          100% { border-image: linear-gradient(270deg, #ffd700, #ffe5ec, #e0f2ff, #ffd700) 1; }
        }
        .animate-border-gradient { animation: border-gradient 4s linear infinite alternate; border-image: linear-gradient(90deg, #ffd700, #ffe5ec, #e0f2ff, #ffd700) 1; border-style: double; }
        @keyframes reflet {
          0%,100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-reflet { animation: reflet 3.5s infinite alternate; }
        @keyframes shine-gold {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine-gold {
          background-size: 200% 100%;
          animation: shine-gold 2.5s linear infinite;
        }
        .hover\:animate-shine-gold-hover:hover {
          animation: shine-gold 1.2s linear infinite;
        }
      `}</style>
    </section>
  );
} 