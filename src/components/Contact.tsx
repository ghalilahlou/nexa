"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('message', form.message);
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Failed to send');
      setSuccess(true);
    } catch (err) {
      console.error('Contact form error:', err);
      alert('An error occurred while sending your message.');
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="w-full py-14 sm:py-20 relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-nexa-ivory via-yellow-50 to-pink-50">
      {/* Creative color accent */}
      <div className="absolute left-0 top-1/3 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-200 via-yellow-100 to-nexa-gold/30 rounded-full blur-2xl opacity-60 z-0" />
      <div className="absolute right-0 bottom-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-100 via-nexa-gold/20 to-yellow-100 rounded-full blur-2xl opacity-50 z-0" />
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nexa-night mb-4 sm:mb-6 text-center z-10">
        <span className="text-nexa-gold">Contact</span> Nexa Partners
      </h2>
      <p className="text-base sm:text-lg font-sans text-nexa-night/90 mb-6 sm:mb-8 max-w-md sm:max-w-2xl text-center z-10">
        Let’s connect. Whether you’re seeking talent, exploring new opportunities, or want to learn more about our approach, we’d love to hear from you.
      </p>
      <motion.form
        className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white/90 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 md:gap-6 border-2 border-nexa-gold/20 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
      >
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 py-10"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#ffd700] via-[#ffe5ec] to-[#e0f2ff] shadow-lg mb-2">
              <svg className="w-10 h-10 text-nexa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div className="font-serif text-xl text-nexa-gold font-bold text-center">Thank you for your message!</div>
            <div className="text-nexa-night/80 text-center text-base">We have received your message and will get back to you soon.</div>
            <button
              type="button"
              className="mt-2 px-6 py-2 rounded-full border-2 border-nexa-gold bg-nexa-gold/10 text-nexa-gold font-sans font-semibold text-base hover:bg-nexa-gold hover:text-nexa-night transition-colors duration-300 shadow"
              onClick={() => { setSuccess(false); setSubmitted(false); setForm({ name: '', email: '', message: '', phone: '' }); }}
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-nexa-gold/20 focus:border-nexa-gold focus:ring-2 focus:ring-nexa-gold outline-none font-sans text-sm sm:text-base text-nexa-night bg-nexa-ivory/80"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-nexa-gold/20 focus:border-nexa-gold focus:ring-2 focus:ring-nexa-gold outline-none font-sans text-sm sm:text-base text-nexa-night bg-nexa-ivory/80"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[+0-9\s-]{7,}"
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-nexa-gold/20 focus:border-nexa-gold focus:ring-2 focus:ring-nexa-gold outline-none font-sans text-sm sm:text-base text-nexa-night bg-nexa-ivory/80"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-nexa-gold/20 focus:border-nexa-gold focus:ring-2 focus:ring-nexa-gold outline-none font-sans text-sm sm:text-base text-nexa-night bg-nexa-ivory/80 resize-none"
            />
            <motion.button
              type="submit"
              className="mt-1 sm:mt-2 px-6 sm:px-8 py-3 rounded-full border-2 border-nexa-gold bg-nexa-gold/10 text-nexa-gold font-sans font-semibold text-base sm:text-lg backdrop-blur-md hover:bg-nexa-gold hover:text-nexa-night transition-colors duration-300 shadow-lg w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? "Thank you!" : "Send Message"}
            </motion.button>
          </>
        )}
      </motion.form>
      {/* Company contact info enrichie */}
      <div className="mt-8 sm:mt-10 text-center z-10 flex flex-col items-center gap-4">
        <div className="font-serif text-lg sm:text-xl text-nexa-night font-bold">Nexa Partners</div>
        
        {/* Adresses des bureaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {/* Bureau Casablanca */}
          <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-nexa-gold/20">
            <h3 className="font-serif text-base font-bold text-nexa-night mb-2">Casablanca</h3>
            <p className="text-sm text-nexa-night/80 font-sans text-center">
              138 Boulevard Moulay Youssef<br />
              Casablanca, Maroc
            </p>
          </div>
          
          {/* Bureau Paris */}
          <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-nexa-gold/20">
            <h3 className="font-serif text-base font-bold text-nexa-night mb-2">Paris</h3>
            <p className="text-sm text-nexa-night/80 font-sans text-center">
              21 Rue Laccouriere<br />
              Paris, France
            </p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex flex-col items-center gap-2">
          <a href="mailto:Contact@nexa-p.com" className="text-nexa-gold font-sans underline hover:text-nexa-night transition-colors duration-200 text-sm sm:text-base">Contact@nexa-p.com</a>
        </div>
      </div>
    </section>
  );
} 