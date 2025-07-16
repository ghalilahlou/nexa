"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const clients = [
  { name: "Roland Berger", src: "/assets/images/clients/Roland Bergernew.png" },
  { name: "BCG", src: "/assets/images/clients/BCGnew.png" },
  { name: "Nuitée", src: "/assets/images/clients/newnuite.png" },
  { name: "Safarclick", src: "/assets/images/clients/safarie.png" },
  { name: "Info.ma", src: "/assets/images/clients/newlesinfos.png" },
  { name: "Glovo", src: "/assets/images/clients/logoglovonew.png" },
  { name: "Julhiet Sterwen", src: "/assets/images/clients/newjul.png" },
  { name: "COFACE", src: "/assets/images/clients/confnew.png" },
  { name: "Arthur D. Little", src: "/assets/images/clients/newarture.png" },
  { name: "GSB", src: "/assets/images/clients/newgsb.png" },
];

// Pour un effet d'écoulement infini, on duplique la liste plusieurs fois
const flowingClients = [...clients, ...clients, ...clients];

export default function Clients() {
  return (
    <section id="clients" className="w-full py-20 relative flex flex-col items-center overflow-hidden" style={{background: "linear-gradient(120deg, #e0f2ff 0%, #fffbe9 60%, #f7ecd7 100%)"}}>
      {/* Creative color accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-200 via-nexa-gold/30 to-nexa-ivory/60 rounded-full blur-2xl z-0 opacity-60" />
      <div className="absolute right-0 top-1/3 w-32 h-32 bg-gradient-to-tr from-nexa-gold/20 via-blue-100 to-nexa-ivory/40 rounded-full blur-2xl z-0 opacity-50" />
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-nexa-night mb-8 text-center z-10">
        <span className="text-nexa-gold">They trust us</span>
      </h2>
      <div className="w-full max-w-5xl px-4 z-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={32}
          slidesPerView={2}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop
          autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={9000}
          allowTouchMove={false}
          className="select-none"
        >
          {flowingClients.map((client, idx) => (
            <SwiperSlide key={client.name + idx} className="flex items-center justify-center">
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group">
                <div className="p-4 flex items-center justify-center group-hover:shadow-[0_0_24px_0_rgba(199,167,112,0.4)] transition-all duration-300 bg-transparent">
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-h-16 max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 bg-transparent"
                    loading="lazy"
                    style={{ background: "transparent" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 