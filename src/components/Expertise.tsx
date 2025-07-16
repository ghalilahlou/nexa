'use client';

import React, { useState } from "react";

const expertise = [
  {
    title: "Strategy & Management Consulting",
    icon: "💼",
    image: "/assets/images/expertise/consulting.jpg",
    description:
      "We support leading consultancies in recruiting high-potential profiles and experienced consultants across various practices. Whether for generalist firms or specialized players, we understand the dynamics of the industry and the qualities required to succeed in fast-paced, high-expectation environments.",
    timeline: [
      "Needs Analysis",
      "Targeted Search",
      "Assessment & Interviews",
      "Shortlist & Presentation",
      "Onboarding & Follow-up",
    ],
  },
  {
    title: "Financial Services & Private Equity",
    icon: "💰",
    image: "/assets/images/expertise/finance.jpg",
    description:
      "From investment banks to private equity funds, and from insurance to fintech, we help financial institutions identify leaders and key contributors who can navigate complexity, drive performance, and adapt to evolving regulatory and technological landscapes.",
    timeline: [
      "Briefing",
      "Market Mapping",
      "Direct Approach",
      "Evaluation",
      "Placement",
    ],
  },
  {
    title: "Tech & Digital",
    icon: "🖥️",
    image: "/assets/images/expertise/tech.jpg",
    description:
      "We work with startups, scale-ups, and digital-first companies to recruit talent capable of building, scaling, and transforming digital products and organizations. Our clients include SaaS providers, data-driven companies, and tech-enabled service platforms.",
    timeline: [
      "Discovery",
      "Sourcing",
      "Screening",
      "Technical Assessment",
      "Offer & Integration",
    ],
  },
  {
    title: "Industrials",
    icon: "🏭",
    image: "/assets/images/expertise/industry.jpg",
    description:
      "We assist major industrial groups and growing players in sectors such as energy, infrastructure, logistics, and manufacturing. Our focus is on identifying operational leaders, transformation experts, and innovation-driven profiles who can thrive in complex, technical ecosystems.",
    timeline: [
      "Client Brief",
      "Talent Mapping",
      "Engagement",
      "Selection",
      "Support",
    ],
  },
];

export default function Expertise() {
  const [selected, setSelected] = useState(0);
  return (
    <section id="expertise" className="w-full py-20 bg-nexa-ivory relative flex flex-col items-center overflow-hidden">
      {/* Peps color accents */}
      <div className="absolute left-0 top-1/4 w-40 h-40 bg-gradient-to-br from-pink-300 via-yellow-200 to-nexa-gold/40 rounded-full blur-2xl opacity-60 z-0" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-blue-200 via-nexa-night/20 to-nexa-gold/30 rounded-full blur-2xl opacity-50 z-0" />
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-nexa-night mb-10 text-center z-10">
        Our <span className="text-nexa-gold">Expertise</span>
      </h2>
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 px-4 z-10">
        {/* Menu vertical */}
        <ul className="flex md:flex-col gap-4 md:w-1/3">
          {expertise.map((item, idx) => (
            <li key={item.title}>
              <button
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-lg transition-all duration-200 border-2 ${
                  selected === idx
                    ? "border-nexa-gold bg-gradient-to-r from-pink-100 via-yellow-50 to-nexa-gold/10 text-nexa-gold shadow-lg"
                    : "border-transparent bg-white hover:bg-nexa-gold/5 text-nexa-night"
                }`}
                onClick={() => setSelected(idx)}
              >
                <span className="text-2xl">{item.icon}</span>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        {/* Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 items-center border-2 border-transparent hover:border-pink-200 transition-all duration-300">
          <img
            src={expertise[selected].image}
            alt={expertise[selected].title}
            className="w-full max-w-md h-48 object-cover rounded-xl mb-2 shadow-lg border-4 border-yellow-100"
          />
          <div className="text-nexa-night text-lg text-center font-sans mb-4">
            {expertise[selected].description}
          </div>
          {/* Timeline animée */}
          <ol className="flex flex-col md:flex-row gap-4 justify-center items-center w-full mt-4">
            {expertise[selected].timeline.map((step, i) => (
              <li
                key={step}
                className="flex flex-col items-center relative"
              >
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${i === 0 ? "border-pink-400 bg-pink-400 text-white" : "border-nexa-gold bg-white text-nexa-gold"} font-bold mb-2 shadow-md`}>{i + 1}</div>
                <span className="text-xs text-nexa-steel text-center w-20">{step}</span>
                {i < expertise[selected].timeline.length - 1 && (
                  <span className="hidden md:block absolute top-4 left-full w-12 h-1 bg-gradient-to-r from-pink-300 via-yellow-200 to-nexa-gold/40"></span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
} 