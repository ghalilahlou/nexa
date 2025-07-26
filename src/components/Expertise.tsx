"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiBriefcase, FiDollarSign, FiMonitor, FiBarChart2, FiChevronDown } from 'react-icons/fi';

const expertise = [
  {
    title: "Strategy & Management Consulting",
    icon: <FiBriefcase className="text-nexa-night text-[1.5rem]" />,
    color: "from-pink-200 via-yellow-100 to-nexa-gold/30",
    description:
      "We support leading consultancies in recruiting high-potential profiles and experienced consultants across various practices. Whether for generalist firms or specialized players, we understand the dynamics of the industry and the qualities required to succeed in fast-paced, high-expectation environments.",
  },
  {
    title: "Financial Services & Private Equity",
    icon: <FiDollarSign className="text-nexa-night text-[1.5rem]" />,
    color: "from-yellow-100 via-nexa-gold/30 to-blue-100/30",
    description:
      "From investment banks to private equity funds, and from insurance to fintech, we help financial institutions identify leaders and key contributors who can navigate complexity, drive performance, and adapt to evolving regulatory and technological landscapes.",
  },
  {
    title: "Tech & Digital",
    icon: <FiMonitor className="text-nexa-night text-[1.5rem]" />,
    color: "from-blue-100 via-nexa-gold/20 to-pink-100/30",
    description:
      "We work with startups, scale-ups, and digital-first companies to recruit talent capable of building, scaling, and transforming digital products and organizations. Our clients include SaaS providers, data-driven companies, and tech-enabled service platforms.",
  },
  {
    title: "Industrials",
    icon: <FiBarChart2 className="text-nexa-night text-[1.5rem]" />,
    color: "from-nexa-gold/20 via-blue-100/20 to-yellow-100/30",
    description:
      "We assist major industrial groups and growing players in sectors such as energy, infrastructure, logistics, and manufacturing. Our focus is on identifying operational leaders, transformation experts, and innovation-driven profiles who can thrive in complex, technical ecosystems.",
  },
];

export default function Expertise() {
  const [selected, setSelected] = useState(0);
  const [glowIdx, setGlowIdx] = useState<number|null>(null);
  const refs = [
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
  ];
  const btnRefs = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  // Scroll/focus sur la rubrique si hash dans l'URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#expertise-')) {
        const idx = [
          '#expertise-strategy',
          '#expertise-finance',
          '#expertise-tech',
          '#expertise-industrials',
        ].indexOf(hash);
        if (idx !== -1) {
          setSelected(idx);
          setGlowIdx(idx);
          setTimeout(() => {
            refs[idx].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            btnRefs[idx].current?.focus();
          }, 100);
          setTimeout(() => setGlowIdx(null), 1500);
        }
      }
    }
  }, [btnRefs, refs]);

  // Met à jour le hash dynamiquement lors du clic sur une rubrique
  function handleSelect(idx: number) {
    setSelected(idx);
    setGlowIdx(idx);
    const hashes = ['#expertise-strategy','#expertise-finance','#expertise-tech','#expertise-industrials'];
    window.history.replaceState(null, '', hashes[idx]);
    setTimeout(() => setGlowIdx(null), 1500);
    
    // Permet le défilement normal immédiatement
    setTimeout(() => {
      // Supprime le hash de l'URL pour permettre le défilement normal
      window.history.replaceState(null, '', window.location.pathname);
    }, 1000);
  }
  return (
    <section id="expertise" className="w-full py-14 sm:py-24 relative flex flex-col items-center bg-gradient-to-br from-nexa-ivory via-blue-50 to-pink-50">
      {/* Decorative gradients and lines */}
      <div className="absolute left-0 top-1/4 w-28 h-28 sm:w-48 sm:h-48 bg-gradient-to-br from-pink-200 via-yellow-100 to-nexa-gold/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-tr from-blue-100 via-nexa-gold/20 to-yellow-100/30 rounded-full blur-2xl opacity-50 pointer-events-none" />
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-8 sm:h-12 opacity-20 pointer-events-none" viewBox="0 0 600 48" fill="none"><path d="M0,24 Q150,0 300,24 T600,24" stroke="#c7a770" strokeWidth="2" fill="none" /></svg>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-nexa-night mb-6 sm:mb-8 md:mb-12 text-center relative z-10">
        Our <span className="text-nexa-gold drop-shadow-[0_3px_6px_rgba(199,167,112,0.4)]">Expertise</span>
      </h2>
      <div className="max-w-3xl w-full flex flex-col gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4 relative z-10">
        <ul className="flex flex-col gap-3 w-full">
          {expertise.map((item, idx) => (
            <li key={item.title} id={
              idx === 0 ? 'expertise-strategy' :
              idx === 1 ? 'expertise-finance' :
              idx === 2 ? 'expertise-tech' :
              'expertise-industrials'
            } ref={refs[idx]} className="transition-all duration-300">
              <button
                ref={btnRefs[idx]}
                className={`w-full flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-sans text-sm sm:text-base md:text-lg border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold
                  ${selected === idx
                    ? `border-nexa-gold bg-gradient-to-r from-[#fffbe9] via-[#ffe5ec] to-[#e0f2ff] text-nexa-gold shadow-lg scale-105 ring-2 ring-nexa-gold` + (glowIdx === idx ? ' animate-glow-gold' : '')
                    : "border-transparent bg-white hover:bg-nexa-gold/10 text-nexa-night"}
                `}
                aria-expanded={selected === idx}
                aria-controls={`panel-${idx}`}
                onClick={() => handleSelect(idx)}
              >
                <span className="flex items-center gap-2 sm:gap-3">
                  <span className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg shadow-md transition-transform duration-300 ${selected === idx ? 'scale-110 bg-gradient-to-br from-[#ffd700] via-[#ffe5ec] to-[#e0f2ff]' : 'bg-gradient-to-br from-[#ffe5ec] via-[#ffd700] to-[#e0f2ff]'}`}>{item.icon}</span>
                  <span className="font-medium text-left text-sm sm:text-base">{item.title}</span>
                </span>
                <span className={`transition-transform duration-300 text-2xl ${selected === idx ? 'rotate-180 text-nexa-gold' : 'text-nexa-steel'}`}><FiChevronDown /></span>
              </button>
              <div
                id={`panel-${idx}`}
                className={`overflow-hidden transition-all duration-500 ${selected === idx ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}`}
                aria-hidden={selected !== idx}
                style={{
                  transitionProperty: 'max-height, opacity, padding',
                }}
              >
                <div className="pl-12 sm:pl-16 pr-3 sm:pr-4 text-nexa-night text-sm sm:text-base leading-relaxed">
                  {item.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Custom animation for icon bounce */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2.8s infinite cubic-bezier(.4,0,.6,1); }
        @keyframes glow-gold {
          0% { box-shadow: 0 0 0px #ffd700, 0 0 0px #c7a770; }
          30% { box-shadow: 0 0 16px #ffd700, 0 0 32px #c7a770; }
          70% { box-shadow: 0 0 32px #ffd700, 0 0 48px #c7a770; }
          100% { box-shadow: 0 0 0px #ffd700, 0 0 0px #c7a770; }
        }
        .animate-glow-gold { animation: glow-gold 1.5s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </section>
  );
} 