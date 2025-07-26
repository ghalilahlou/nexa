'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  // Ajoute un padding-top au body pour compenser la navbar fixe
  useEffect(() => {
    document.body.style.paddingTop = '60px'; // Ajusté pour la nouvelle hauteur de navbar
    return () => {
      document.body.style.paddingTop = '0px';
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[9999]
        bg-gradient-to-r from-[#fffbe9] via-[#ffe5ec] to-[#f7ecd7]
        border-b-4 border-[color:#c7a770]
        shadow-[0_4px_32px_0_rgba(199,167,112,0.12)]
        transition-all duration-500 backdrop-blur-sm
        ${scrolled ? "border-[color:#ffd700]" : "border-[color:#c7a770]"}
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ffd70022] before:to-transparent before:rounded-none before:pointer-events-none
      `}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0,
        width: '100%', 
        zIndex: 9999,
        transform: 'translateZ(0)'
      }}
    >
                      <div className="max-w-full mx-auto flex items-center justify-between px-4 py-4 md:px-16 md:py-6">
          {/* Logo Nexa - Centré sur mobile, fixé à gauche sur desktop */}
          <Link href="/" className="group flex-shrink-0 md:flex-shrink-0 mx-auto md:mx-0">
            <div className="relative">
              <Image
                src="/assets/logos/newlogo.png"
                alt="Nexa Partners Logo"
                width={800}
                height={150}
                className="w-64 h-18 sm:w-72 sm:h-20 md:w-64 md:h-18 lg:w-80 lg:h-22 xl:w-[800px] xl:h-[100px] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation - Centrée */}
          <ul className="hidden md:flex gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-nexa-night font-sans text-base px-3 py-2 rounded transition-colors duration-200 hover:text-nexa-gold hover:bg-nexa-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Espace vide pour équilibrer - Plus nécessaire car logo détaché */}
          <div className="hidden md:block w-0 h-0"></div>
        {/* Hamburger menu button (mobile) */}
        <button
          className={`md:hidden absolute right-4 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="transition-transform duration-300">{menuOpen ? <HiX className="w-7 h-7 text-nexa-gold" /> : <HiMenu className="w-7 h-7 text-nexa-gold" />}</span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center md:hidden animate-slide-fade bg-gradient-to-br from-[#fffbe9] via-[#ffe5ec] to-[#f7ecd7] backdrop-blur-md px-4 py-6 w-full h-full min-h-screen" style={{backgroundColor: 'rgba(255, 251, 233, 0.98)'}}>
          {/* SVG décoratif en fond */}
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 800 600" fill="none">
            <defs>
              <radialGradient id="menu-grad" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#ffd700" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#fffbe9" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="400" cy="300" r="300" fill="url(#menu-grad)" />
          </svg>
          {/* Logo centré inspiré du design fourni - mobile */}
          <div className="mt-16 flex flex-col items-center animate-fade-in relative w-full">
            <div className="flex flex-col items-center gap-4">
              {/* Logo simplifié mobile */}
              <div className="relative">
                                  {/* Logo NEXA avec image mobile */}
                  <div className="relative z-10 flex items-center justify-center">
                    <Image
                      src="/assets/logos/newlogo.png"
                      alt="Nexa Partners Logo"
                      width={800}
                      height={150}
                      className="w-80 h-12 object-contain"
                    />
                  </div>
              </div>
              

            </div>
          </div>
          {/* Liens de navigation avec icônes et animation cascade */}
          <ul className="flex flex-col gap-6 text-center mt-12 animate-stagger-fade w-full flex-1 justify-center">
            {navLinks.map((link, i) => (
              <li key={link.name} style={{ animationDelay: `${i * 80}ms` }} className="animate-fade-in w-full">
                <a
                  href={link.href}
                  className="flex items-center justify-start gap-3 text-nexa-night font-sans text-xl px-6 py-4 rounded-lg transition-all duration-200 hover:text-nexa-gold hover:bg-nexa-gold/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexa-gold relative group w-full text-left pl-4 bg-white/50 backdrop-blur-sm border border-nexa-gold/10"
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
            className="mb-8 mt-auto px-8 py-4 rounded-full border-2 border-nexa-gold bg-nexa-gold/20 text-nexa-gold font-sans font-semibold text-lg backdrop-blur-md shadow-xl hover:bg-nexa-gold hover:text-nexa-night transition-all duration-300 animate-fade-in bg-white/30"
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