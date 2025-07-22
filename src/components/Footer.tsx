import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-2 bg-gradient-to-r from-[#fffbe9] via-[#ffe5ec] to-[#f7ecd7] border-t border-nexa-gold flex flex-col items-center justify-center text-center mt-12">
      <div className="flex items-center gap-2 text-sm sm:text-base text-nexa-night font-sans">
        <span>&copy; {new Date().getFullYear()} Nexa Partners.</span>
        <span className="hidden sm:inline">All rights reserved.</span>
        {/* Mini-motif décoratif doré */}
        <svg className="w-5 h-5 ml-2 text-nexa-gold" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="10" r="8" fill="#ffd700" opacity="0.18" /><circle cx="10" cy="10" r="4" fill="#ffd700" opacity="0.35" /></svg>
      </div>
    </footer>
  );
} 