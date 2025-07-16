'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Clients", href: "#clients" },
  { name: "Talent", href: "#talent" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md
        border-b-4 border-[color:#c7a770] shadow-lg
        ${scrolled
          ? "bg-gradient-to-r from-[#fef7ec]/95 via-[#f7ecd7]/95 to-[#fffbe9]/95 border-[color:#ffd700]"
          : "bg-gradient-to-r from-[#fffbe9]/80 via-[#fef7ec]/80 to-[#f7ecd7]/80 border-[color:#c7a770]"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo Nexa */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif font-bold tracking-tight text-nexa-gold group-hover:scale-105 transition-transform duration-200 drop-shadow-[0_1px_8px_rgba(199,167,112,0.45)] glow-gold">
            Nexa
          </span>
          <span className="text-base font-sans font-light text-nexa-night tracking-widest uppercase">
            Partners
          </span>
        </Link>
        {/* Navigation */}
        <ul className="flex gap-6">
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
      </div>
    </nav>
  );
}

/* Ajout d'un effet glow gold */
<style jsx global>{`
  .glow-gold {
    text-shadow: 0 0 8px #ffd700, 0 0 16px #c7a770, 0 0 2px #fffbe9;
  }
`}</style> 