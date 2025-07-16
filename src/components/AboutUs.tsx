import React from "react";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-20 relative flex flex-col items-center overflow-hidden" style={{background: "linear-gradient(135deg, #fffbe9 0%, #ffe5ec 60%, #fffbe9 100%)"}}>
      {/* Creative color accent */}
      <div className="absolute left-0 top-1/3 w-40 h-40 bg-gradient-to-br from-pink-200 via-yellow-100 to-nexa-gold/30 rounded-full blur-2xl opacity-60 z-0" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-yellow-100 via-pink-100 to-nexa-gold/20 rounded-full blur-2xl opacity-50 z-0" />
      <div className="max-w-5xl w-full px-4 grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Magazine-style text */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-nexa-night mb-6">
            About <span className="text-nexa-gold">Nexa Partners</span>
          </h2>
          <p className="text-lg font-sans text-nexa-night/90 mb-6 leading-relaxed">
            Nexa Partners is a boutique executive search firm based in Casablanca, dedicated to helping organisations attract and retain top-tier leadership and high-impact talent. We focus on delivering thoughtful, precise, and committed recruitment solutions for companies operating in competitive, fast-evolving sectors — including consulting, finance, and technology.
          </p>
          <p className="text-lg font-sans text-nexa-night/90 mb-6 leading-relaxed">
            Our approach is deliberately selective. We engage only in a limited number of searches at a time, allowing us to invest fully in each mandate and build long-term partnerships with our clients and candidates. Every assignment is approached with discretion, agility, and a deep understanding of the strategic value of human capital.
          </p>
          <blockquote className="italic text-nexa-steel border-l-4 border-nexa-gold pl-4 mb-4 relative group transition-all duration-300 hover:text-nexa-gold">
            “We believe that great recruitment goes far beyond matching a resume to a job description. It’s about identifying individuals whose trajectory, values, and potential align with the long-term vision of the organisation. We take the time to understand not just the role — but the culture, the team dynamics, and the challenges ahead.”
            <span className="block w-0 group-hover:w-24 h-0.5 bg-nexa-gold transition-all duration-300 mt-2"></span>
          </blockquote>
          <ul className="mt-6 space-y-2 text-base text-nexa-night/80">
            <li><span className="font-bold text-nexa-gold">•</span> Rigour – Thorough analysis, direct approach, and tailored methodology</li>
            <li><span className="font-bold text-nexa-gold">•</span> Engagement – Strong commitment to follow-through and delivery</li>
            <li><span className="font-bold text-nexa-gold">•</span> Relevance – Insightful market knowledge and sharp judgment</li>
          </ul>
        </div>
        {/* Founder portrait */}
        <div className="flex flex-col items-center md:items-end">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs border-2 border-pink-100 hover:border-nexa-gold transition-all duration-300">
            <img
              src="/assets/images/profile.png"
              alt="Hicham Boumnade"
              className="w-32 h-32 object-cover rounded-full mb-4 shadow-md border-4 border-nexa-gold/30"
            />
            <div className="text-center">
              <div className="font-serif text-xl font-bold text-nexa-night">Hicham Boumnade</div>
              <div className="text-nexa-steel text-sm mb-2">Founder & Executive Search</div>
              <blockquote className="italic text-nexa-night/80 text-base mt-2 border-l-2 border-nexa-gold pl-3">
                Hicham Boumnade founded Nexa Partners with a clear ambition: to offer high-level recruitment services that combine sector expertise with a human-centric approach. He began his career in consulting, advising clients in the financial services industry, before moving into executive search — drawn by his strong interpersonal skills and ability to build trust across senior stakeholders. With several years of experience leading recruitment assignments for consulting firms, banks, fintechs, and high-growth startups, he brings a sharp understanding of competitive, fast-moving talent markets — along with a firm belief that every career move should be intentional, meaningful, and strategically aligned.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 