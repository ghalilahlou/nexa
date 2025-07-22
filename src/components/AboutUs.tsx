"use client";

import React, { useEffect, useState } from "react";

// Particules dorées animées pour About
function GoldParticlesAbout() {
  const [positions, setPositions] = useState<{top: string, left: string, size: number}[]>([]);
  useEffect(() => {
    setPositions(
      Array.from({ length: 10 }, () => ({
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        size: 10 + Math.floor(Math.random() * 3) * 8,
      }))
    );
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br from-[#ffd700] via-[#fffbe9] to-[#c7a770] opacity-20 animate-about-particle${i % 4}`}
          style={{
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            top: pos.top,
            left: pos.left,
            filter: 'blur(2px)',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes about-particle0 { 0% { transform: translateY(0); } 100% { transform: translateY(-10px); } }
        @keyframes about-particle1 { 0% { opacity: 0.2; } 50% { opacity: 0.5; } 100% { opacity: 0.2; } }
        @keyframes about-particle2 { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        @keyframes about-particle3 { 0% { transform: translateX(0); } 100% { transform: translateX(8px); } }
        .animate-about-particle0 { animation: about-particle0 7s infinite alternate ease-in-out; }
        .animate-about-particle1 { animation: about-particle1 6s infinite alternate ease-in-out; }
        .animate-about-particle2 { animation: about-particle2 8s infinite alternate ease-in-out; }
        .animate-about-particle3 { animation: about-particle3 9s infinite alternate ease-in-out; }
      `}</style>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-14 sm:py-20 relative flex flex-col items-center overflow-hidden" style={{background: "linear-gradient(135deg, #fffbe9 0%, #ffe5ec 60%, #fffbe9 100%)"}}>
      {/* Creative color accent */}
      <GoldParticlesAbout />
      <div className="absolute left-0 top-1/3 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-200 via-yellow-100 to-nexa-gold/30 rounded-full blur-2xl opacity-60 z-0" />
      <div className="absolute right-0 bottom-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-yellow-100 via-pink-100 to-nexa-gold/20 rounded-full blur-2xl opacity-50 z-0" />
      <div className="max-w-5xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center z-10">
        {/* Magazine-style text */}
        <div className="animate-fade-slide-up">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nexa-night mb-4 sm:mb-6">
            About <span className="text-nexa-gold">Nexa Partners</span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-nexa-night/90 mb-4 sm:mb-6 leading-relaxed">
            Nexa Partners is a boutique executive search firm based in Casablanca, dedicated to helping organisations attract and retain top-tier leadership and high-impact talent. We focus on delivering thoughtful, precise, and committed recruitment solutions for companies operating in competitive, fast-evolving sectors — including consulting, finance, and technology.
          </p>
          <p className="text-base sm:text-lg font-sans text-nexa-night/90 mb-4 sm:mb-6 leading-relaxed">
            Our approach is deliberately selective. We engage only in a limited number of searches at a time, allowing us to invest fully in each mandate and build long-term partnerships with our clients and candidates. Every assignment is approached with discretion, agility, and a deep understanding of the strategic value of human capital.
          </p>
          {/* Divider SVG décoratif */}
          <svg className="w-32 h-6 mx-auto my-4" viewBox="0 0 128 24" fill="none"><path d="M4 12 Q32 0 64 12 T124 12" stroke="#c7a770" strokeWidth="2" fill="none" /></svg>
          <blockquote className="italic text-nexa-steel border-l-4 border-nexa-gold pl-4 mb-4 relative group transition-all duration-300 hover:text-nexa-gold text-sm sm:text-base">
            “We believe that great recruitment goes far beyond matching a resume to a job description. It’s about identifying individuals whose trajectory, values, and potential align with the long-term vision of the organisation. We take the time to understand not just the role — but the culture, the team dynamics, and the challenges ahead.”
            <span className="block w-0 group-hover:w-24 h-0.5 bg-nexa-gold transition-all duration-300 mt-2"></span>
          </blockquote>
          <ul className="mt-4 sm:mt-6 space-y-2 text-sm sm:text-base text-nexa-night/80 animate-fade-cascade">
            <li className="transition-all duration-300 hover:bg-nexa-gold/10 hover:text-nexa-gold rounded px-2 py-1"><span className="font-bold text-nexa-gold glow-gold">• Rigour</span> – Thorough analysis, direct approach, and tailored methodology</li>
            <li className="transition-all duration-300 hover:bg-nexa-gold/10 hover:text-nexa-gold rounded px-2 py-1"><span className="font-bold text-nexa-gold glow-gold">• Engagement</span> – Strong commitment to follow-through and delivery</li>
            <li className="transition-all duration-300 hover:bg-nexa-gold/10 hover:text-nexa-gold rounded px-2 py-1"><span className="font-bold text-nexa-gold glow-gold">• Relevance</span> – Insightful market knowledge and sharp judgment</li>
          </ul>
        </div>
        {/* Founder portrait enrichi */}
        <div className="flex flex-col items-center md:items-end mt-8 md:mt-0 animate-fade-slide-up">
          <div className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full max-w-xs border-2 border-pink-100 hover:border-nexa-gold transition-all duration-300 group">
            {/* Halo doré animé */}
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-[#ffd70099] via-[#fffbe9cc] to-[#c7a77066] blur-2xl opacity-60 animate-halo-glow z-0" />
            <img
              src="/assets/images/profile.png"
              alt="Hicham Boumnade"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mb-4 shadow-md border-4 border-nexa-gold/30 relative z-10 group-hover:scale-105 group-hover:shadow-[0_0_32px_0_rgba(199,167,112,0.25)] transition-transform duration-300"
            />
            <div className="text-center relative z-10">
              <div className="font-serif text-lg sm:text-xl font-bold text-nexa-night">Hicham Boumnade</div>
              <div className="text-nexa-steel text-xs sm:text-sm mb-2">Founder & Executive Search</div>
              <blockquote className="italic text-nexa-night/80 text-xs sm:text-base mt-2 border-l-2 border-nexa-gold pl-3">
                Hicham Boumnade founded Nexa Partners with a clear ambition: to offer high-level recruitment services that combine sector expertise with a human-centric approach. He began his career in consulting, advising clients in the financial services industry, before moving into executive search — drawn by his strong interpersonal skills and ability to build trust across senior stakeholders. With several years of experience leading recruitment assignments for consulting firms, banks, fintechs, and high-growth startups, he brings a sharp understanding of competitive, fast-moving talent markets — along with a firm belief that every career move should be intentional, meaningful, and strategically aligned.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-up { animation: fade-slide-up 1.1s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fade-cascade {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-cascade > * {
          opacity: 0;
          animation: fade-cascade 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-cascade > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-fade-cascade > *:nth-child(2) { animation-delay: 0.22s; }
        .animate-fade-cascade > *:nth-child(3) { animation-delay: 0.34s; }
        @keyframes halo-glow {
          0%,100% { opacity: 0.6; filter: blur(16px); }
          50% { opacity: 0.85; filter: blur(24px); }
        }
        .animate-halo-glow { animation: halo-glow 2.8s infinite alternate; }
      `}</style>
    </section>
  );
} 