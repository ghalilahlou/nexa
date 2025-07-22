'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiHome, HiUser, HiBriefcase, HiUsers, HiSparkles, HiMail } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/", icon: <HiHome className="inline-block mr-2 text-nexa-gold" /> },
  { name: "About", href: "#about", icon: <HiUser className="inline-block mr-2 text-nexa-gold" /> },
  { name: "Expertise", href: "#expertise", icon: <HiBriefcase className="inline-block mr-2 text-nexa-gold" /> },
  { name: "Clients", href: "#clients", icon: <HiUsers className="inline-block mr-2 text-nexa-gold" /> },
  { name: "Talent", href: "#talent", icon: <HiSparkles className="inline-block mr-2 text-nexa-gold" /> },
  { name: "Contact", href: "#contact", icon: <HiMail className="inline-block mr-2 text-nexa-gold" /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
        bg-gradient-to-r from-[#fffbe9] via-[#ffe5ec] to-[#f7ecd7]
        border-b-4 border-[color:#c7a770]
        shadow-[0_4px_32px_0_rgba(199,167,112,0.12)]
        transition-all duration-500
        ${scrolled ? "border-[color:#ffd700]" : "border-[color:#c7a770]"}
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ffd70022] before:to-transparent before:rounded-none before:pointer-events-none
      `}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-2 md:px-8 md:py-4">
        {/* Logo Nexa avec motif SVG premium */}
        <Link href="/" className="flex items-center gap-2 group mx-auto md:mx-0 relative">
          <span className="relative flex items-center justify-center">
            {/* Motif SVG cadre doré */}
            <svg
              className="absolute -inset-1 md:-inset-3 w-16 h-12 md:w-28 md:h-18 z-0 pointer-events-none select-none"
              viewBox="0 0 112 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3" y="3" width="106" height="42" rx="16"
                stroke="#c7a770"
                strokeWidth="2.5"
                fill="none"
                opacity="0.7"
                filter="url(#glow)"
              />
              <rect
                x="0.5" y="0.5" width="111" height="47" rx="18"
                stroke="#ffd700"
                strokeWidth="1.2"
                fill="none"
                opacity="0.35"
              />
              <defs>
                <filter id="glow" x="-10" y="-10" width="130" height="90" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
            <span className="text-2xl md:text-4xl font-serif font-bold tracking-tight text-nexa-gold group-hover:scale-105 transition-transform duration-200 drop-shadow-[0_1px_8px_rgba(199,167,112,0.45)] glow-gold relative z-10">
              Nexa
            </span>
          </span>
          <span className="text-sm md:text-base font-sans font-light text-nexa-night tracking-widest uppercase">
            Partners
          </span>
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-nexa-night font-sans text-base px-2 py-1 rounded transition-colors duration-200 hover:text-nexa-gold hover:bg-nexa-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger menu button (mobile) */}
        <button
          className={`md:hidden ml-2 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="transition-transform duration-300">{menuOpen ? <HiX className="w-7 h-7 text-nexa-gold" /> : <HiMenu className="w-7 h-7 text-nexa-gold" />}</span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center md:hidden animate-slide-fade bg-gradient-to-br from-[#fffbe9] via-[#ffe5ec] to-[#f7ecd7] px-2">
          {/* SVG décoratif en fond */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 800 600" fill="none">
            <defs>
              <radialGradient id="menu-grad" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#ffd700" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#fffbe9" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="400" cy="300" r="300" fill="url(#menu-grad)" />
          </svg>
          {/* Logo centré animé avec motif SVG cadre */}
          <div className="mt-10 flex flex-col items-center animate-fade-in relative w-full">
            <span className="relative flex flex-col items-center justify-center w-full">
              {/* Motif SVG cadre doré mobile, dimensions adaptées */}
              <svg
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[82px] h-[54px] z-0 pointer-events-none select-none"
                viewBox="0 0 82 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="2" y="2" width="78" height="50" rx="15"
                  stroke="#c7a770"
                  strokeWidth="2.2"
                  fill="none"
                  opacity="0.7"
                  filter="url(#glow2)"
                />
                <rect
                  x="0.5" y="0.5" width="81" height="53" rx="17"
                  stroke="#ffd700"
                  strokeWidth="1.1"
                  fill="none"
                  opacity="0.35"
                />
                <defs>
                  <filter id="glow2" x="-8" y="-8" width="98" height="73" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
              <span className="text-3xl font-serif font-bold tracking-tight text-nexa-gold drop-shadow-[0_1px_8px_rgba(199,167,112,0.45)] glow-gold animate-glow relative z-10 pt-2 pb-1 px-4">
                Nexa
              </span>
              <span className="text-base font-sans font-light text-nexa-night tracking-widest uppercase relative z-10 pb-1">
                Partners
              </span>
            </span>
          </div>
          {/* Liens de navigation avec icônes et animation cascade */}
          <ul className="flex flex-col gap-8 text-center mt-8 animate-stagger-fade w-full">
            {navLinks.map((link, i) => (
              <li key={link.name} style={{ animationDelay: `${i * 80}ms` }} className="animate-fade-in w-full">
                <a
                  href={link.href}
                  className="flex items-center justify-start gap-3 text-nexa-night font-sans text-xl px-6 py-4 rounded transition-all duration-200 hover:text-nexa-gold hover:bg-nexa-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold relative group w-full text-left pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mr-2">{link.icon}</span>
                  <span className="relative after:block after:absolute after:-bottom-1 after:left-0 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-nexa-gold after:transition-all after:duration-300">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
          {/* Bouton d'action premium */}
          <a
            href="#contact"
            className="mb-10 mt-8 px-8 py-3 rounded-full border-2 border-nexa-gold bg-nexa-gold/10 text-nexa-gold font-sans font-semibold text-lg backdrop-blur-md shadow-lg hover:bg-nexa-gold hover:text-nexa-night transition-all duration-300 animate-fade-in"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </a>
          {/* Fermeture menu (croix) */}
          <button
            className="absolute top-6 right-6 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX className="w-8 h-8 text-nexa-gold" />
          </button>
          <style jsx>{`
            @keyframes slide-fade {
              0% { opacity: 0; transform: translateY(-40px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-slide-fade { animation: slide-fade 0.5s cubic-bezier(.4,0,.2,1); }
            @keyframes fade-in {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both; }
            @keyframes glow {
              0%,100% { text-shadow: 0 0 8px #ffd700, 0 0 16px #c7a770, 0 0 2px #fffbe9; }
              50% { text-shadow: 0 0 24px #ffd700, 0 0 32px #c7a770, 0 0 8px #fffbe9; }
            }
            .animate-glow { animation: glow 2.5s infinite alternate; }
            @keyframes stagger-fade {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-stagger-fade > * {
              opacity: 0;
              animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
            }
            .animate-stagger-fade > *:nth-child(1) { animation-delay: 0.1s; }
            .animate-stagger-fade > *:nth-child(2) { animation-delay: 0.18s; }
            .animate-stagger-fade > *:nth-child(3) { animation-delay: 0.26s; }
            .animate-stagger-fade > *:nth-child(4) { animation-delay: 0.34s; }
            .animate-stagger-fade > *:nth-child(5) { animation-delay: 0.42s; }
            .animate-stagger-fade > *:nth-child(6) { animation-delay: 0.5s; }
          `}</style>
        </div>
      )}
    </nav>
  );
}

/* Ajout d'un effet glow gold */
<style jsx global>{`
  .glow-gold {
    text-shadow: 0 0 8px #ffd700, 0 0 16px #c7a770, 0 0 2px #fffbe9;
  }
`}</style> 