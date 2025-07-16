"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with a backend or headless CMS
  };

  return (
    <section id="contact" className="w-full py-20 relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-nexa-ivory via-yellow-50 to-pink-50">
      {/* Creative color accent */}
      <div className="absolute left-0 top-1/3 w-40 h-40 bg-gradient-to-br from-pink-200 via-yellow-100 to-nexa-gold/30 rounded-full blur-2xl opacity-60 z-0" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-blue-100 via-nexa-gold/20 to-yellow-100 rounded-full blur-2xl opacity-50 z-0" />
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-nexa-night mb-6 text-center z-10">
        <span className="text-nexa-gold">Contact</span> Nexa Partners
      </h2>
      <p className="text-lg font-sans text-nexa-night/90 mb-8 max-w-2xl text-center z-10">
        Let’s connect. Whether you’re seeking talent, exploring new opportunities, or want to learn more about our approach, we’d love to hear from you.
      </p>
      <motion.form
        className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border-2 border-nexa-gold/20 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-nexa-gold/20 focus:border-nexa-gold focus:ring-2 focus:ring-nexa-gold outline-none font-sans text-base text-nexa-night bg-nexa-ivory/80"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-nexa-gold/20 focus:border-nexa-gold focus:ring-2 focus:ring-nexa-gold outline-none font-sans text-base text-nexa-night bg-nexa-ivory/80"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="px-4 py-3 rounded-lg border border-nexa-gold/20 focus:border-nexa-gold focus:ring-2 focus:ring-nexa-gold outline-none font-sans text-base text-nexa-night bg-nexa-ivory/80 resize-none"
        />
        <motion.button
          type="submit"
          className="mt-2 px-8 py-3 rounded-full border-2 border-nexa-gold bg-nexa-gold/10 text-nexa-gold font-sans font-semibold text-lg backdrop-blur-md hover:bg-nexa-gold hover:text-nexa-night transition-colors duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {submitted ? "Thank you!" : "Send Message"}
        </motion.button>
      </motion.form>
      {/* Company contact info */}
      <div className="mt-10 text-center z-10">
        <div className="font-serif text-xl text-nexa-night font-bold">Nexa Partners</div>
        <div className="text-nexa-steel text-base">Casablanca, Morocco</div>
        <a href="mailto:contact@nexapartners.com" className="text-nexa-gold font-sans underline hover:text-nexa-night transition-colors duration-200">contact@nexapartners.com</a>
      </div>
    </section>
  );
} 