import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import {
  Globe, Search, MessageSquare, BarChart2, Bot, Mail,
  CheckCircle2, Zap, ArrowLeft, ArrowRight, Monitor, Palette, X
} from "lucide-react";

import logoImg from "@assets/WhatsApp_Image_2026-04-16_at_10.50.01_PM_1776429915147.jpeg";
import hentiesImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.56_PM_(1)_1775804410947.jpeg";
import bizxcelImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.56_PM_1775804410950.jpeg";
import wosPackagingLogoImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.55_PM_(2)_1775804410952.jpeg";
import wosApexImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.55_PM_(1)_1775804410954.jpeg";
import warehouseImg1 from "@assets/WhatsApp_Image_2026-04-09_at_2.16.49_PM_(2)_1775804410955.jpeg";
import warehouseImg2 from "@assets/WhatsApp_Image_2026-04-09_at_2.16.55_PM_1775804410958.jpeg";

import manaBusinessCardImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.49_PM_(1)_1775804410961.jpeg";
import manaLogoWhiteImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.49_PM_1775804410962.jpeg";
import manaLogoLight2Img from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_(2)_1775804410964.jpeg";
import manaLogoDark1Img from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_(1)_1775804410966.jpeg";
import manaLogoDark2Img from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_1775804410968.jpeg";

const WHATSAPP_URL = "https://wa.me/27760355295";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const SERVICES = [
  { icon: <Monitor className="w-6 h-6" />, title: "Website Design", desc: "Modern, fast, mobile-first websites that convert visitors into customers.", tag: "Web" },
  { icon: <Search className="w-6 h-6" />, title: "Google Business Profile", desc: "Get found on Google Maps when locals search for your service.", tag: "Local SEO" },
  { icon: <BarChart2 className="w-6 h-6" />, title: "SEO Optimisation", desc: "On-page and technical SEO that helps you rank higher without ad spend.", tag: "SEO" },
  { icon: <Palette className="w-6 h-6" />, title: "Social Media Content", desc: "Professional profiles and branded content that builds trust.", tag: "Social" },
  { icon: <Zap className="w-6 h-6" />, title: "Google & Meta Ads", desc: "Targeted paid advertising that puts your business in front of the right people.", tag: "Ads" },
  { icon: <Bot className="w-6 h-6" />, title: "AI Chatbots & Automation", desc: "Automated WhatsApp and website chatbots that capture leads 24/7.", tag: "AI" },
  { icon: <Mail className="w-6 h-6" />, title: "Email Marketing", desc: "Professional email sequences that drive repeat business.", tag: "Email" },
  { icon: <Globe className="w-6 h-6" />, title: "Brand Identity", desc: "Logo, visual identity, and brand positioning that makes you unforgettable.", tag: "Brand" },
];

const PACKAGES = [
  {
    name: "Launch", price: "R6,500", billing: "once-off", tag: "Best for startups",
    items: ["1-page professional website", "Google Business Profile setup", "Logo design included", "Social media profile setup", "Basic SEO optimization", "48-hour setup"]
  },
  {
    name: "Growth", price: "R9,800", billing: "+ R3,500/month", tag: "Most popular", popular: true,
    items: ["3-page website", "Full SEO campaign", "Google & Meta Ads setup", "Social media content (8 posts/month)", "Review generation system", "Monthly performance reports"]
  },
  {
    name: "Premium", price: "R18,500", billing: "+ R6,500/month", tag: "Best for scaling brands",
    items: ["5+ page website", "AI chatbot integration", "Full ad management", "Email marketing setup", "Weekly reporting & calls", "Priority support"]
  },
];

const CLIENT_GALLERY = [
  { img: hentiesImg, name: "Henties Smoothies", industry: "Food & Beverage", desc: "Product branding & social media launch", fit: "cover" },
  { img: bizxcelImg, name: "Bizxcel Hybrid", industry: "Business Solutions", desc: "Brand identity & digital presence", fit: "contain" },
  { img: wosPackagingLogoImg, name: "WOS Pakmateriaal", industry: "Packaging", desc: "Logo design & online presence setup", fit: "contain" },
  { img: wosApexImg, name: "WOS Apex", industry: "Branding & Clothing", desc: "Brand identity & digital marketing", fit: "contain" },
  { img: warehouseImg1, name: "WOS Logistics", industry: "Warehousing", desc: "B2B marketing & lead generation", fit: "cover" },
  { img: warehouseImg2, name: "WOS Operations", industry: "Logistics", desc: "SEO & Google Maps optimization", fit: "cover" },
];

const MANA_GALLERY = [
  { img: manaBusinessCardImg, label: "Business Card", desc: "Official MANA AI brand card", bg: "#141414" },
  { img: manaLogoWhiteImg, label: "Primary Logo", desc: "Full logomark on white", bg: "#f5f5f5" },
  { img: manaLogoLight2Img, label: "Logo Variant", desc: "Compact logomark on white", bg: "#f5f5f5" },
  { img: manaLogoDark1Img, label: "Dark Logo", desc: "Full logomark on black", bg: "#0a0a0a" },
  { img: manaLogoDark2Img, label: "Dark Minimal", desc: "Minimal logomark on black", bg: "#0a0a0a" },
];

export default function Services() {
  const [, setLocation] = useLocation();
  const [lightboxImg, setLightboxImg] = useState<{ src: string; label: string } | null>(null);

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <div className="fixed inset-0 hero-grid-pattern-light opacity-100 pointer-events-none z-0" />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md p-6"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-6 border border-black/12 hover:border-black/30 p-2.5 text-black/50 hover:text-black transition-all"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg.src}
              alt={lightboxImg.label}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black/35 text-[11px] font-bold uppercase tracking-[0.25em]">{lightboxImg.label}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/96 backdrop-blur-xl border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">
            <button data-testid="services-logo" onClick={() => setLocation("/")} className="flex items-center gap-3">
              <img src={logoImg} alt="MANA AI" className="h-10 w-10 object-contain" draggable={false} />
              <span className="font-display font-bold text-[15px] tracking-wider text-black uppercase">MANA AI</span>
            </button>
            <div className="flex items-center gap-4">
              <button
                data-testid="services-back-home"
                onClick={() => setLocation("/")}
                className="flex items-center gap-2 text-black/35 hover:text-black transition-colors text-[11px] font-bold uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Home</span>
              </button>
              <button
                data-testid="services-nav-cta"
                onClick={() => setLocation("/")}
                className="bg-black text-white hover:bg-black/85 font-black text-[11px] px-5 py-2.5 uppercase tracking-wider transition-all"
              >
                Free Growth Plan
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-[68px]">

        {/* ── HEADER ────────────────────────────────────────── */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.p variants={fadeUp} className="text-black/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— Full-Service Digital Marketing</motion.p>
              <motion.h1 variants={fadeUp} className="font-display font-black text-[clamp(48px,7vw,110px)] leading-[0.9] tracking-tight uppercase text-black mb-10 max-w-5xl">
                Everything you need<br />to grow online.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-black/40 text-xl max-w-lg leading-relaxed font-light mb-12">
                From websites to AI-powered marketing systems — we build everything you need to get more customers.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  data-testid="services-header-cta"
                  onClick={() => setLocation("/")}
                  className="group bg-black text-white hover:bg-black/85 font-black text-[13px] px-8 py-5 uppercase tracking-wider transition-all flex items-center gap-3"
                >
                  Get My Free Demo Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-green-700/70 hover:text-green-700 font-bold text-[13px] px-8 py-5 uppercase tracking-wider border border-green-600/15 hover:border-green-600/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CORE SERVICES ─────────────────────────────────── */}
        <section className="border-y border-black/6 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-20">
              <motion.p variants={fadeUp} className="text-black/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— Our Services</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-tight uppercase text-black max-w-2xl">
                Core services.
              </motion.h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/6">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={i}
                  data-testid={`service-card-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.7 }}
                  className="bg-[#f5f5f5] p-8 group hover:bg-[#eeeeee] transition-colors"
                >
                  <div className="w-10 h-10 border border-black/10 flex items-center justify-center text-black/40 mb-6 group-hover:border-black/20 group-hover:text-black/70 transition-all">
                    {service.icon}
                  </div>
                  <div className="text-black/22 text-[9px] font-bold uppercase tracking-[0.2em] mb-3">{service.tag}</div>
                  <h3 className="font-display font-bold text-base uppercase tracking-tight text-black mb-3">{service.title}</h3>
                  <p className="text-black/35 text-sm leading-relaxed font-light">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGES ──────────────────────────────────────── */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-20">
              <motion.p variants={fadeUp} className="text-black/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— Pricing</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-tight uppercase text-black max-w-2xl">
                Choose your package.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-black/35 text-lg max-w-md leading-relaxed font-light mt-6">
                Transparent pricing built for South African businesses at every stage of growth.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/6 max-w-5xl">
              {PACKAGES.map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${pkg.popular ? "bg-black" : "bg-white hover:bg-[#f7f7f7]"} p-10 flex flex-col transition-colors relative`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-8">
                      <span className="bg-white text-black text-[9px] font-black px-3 py-1.5 uppercase tracking-widest">Most Popular</span>
                    </div>
                  )}
                  <p className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-6 mt-2 ${pkg.popular ? "text-white/45" : "text-black/25"}`}>{pkg.tag}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`font-display font-black text-[52px] leading-none ${pkg.popular ? "text-white" : "text-black"}`}>{pkg.price}</span>
                  </div>
                  <p className={`text-xs uppercase tracking-wider mb-10 ${pkg.popular ? "text-white/35" : "text-black/25"}`}>{pkg.billing}</p>
                  <ul className="space-y-4 flex-1 mb-10">
                    {pkg.items.map((item, j) => (
                      <li key={j} className={`flex items-start gap-3 text-xs uppercase tracking-wide font-medium ${pkg.popular ? "text-white/65" : "text-black/45"}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-white/40" : "text-black/25"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setLocation("/")}
                    className={`w-full font-black text-[11px] py-4 uppercase tracking-widest transition-all ${
                      pkg.popular
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-black/12 text-black/50 hover:border-black/25 hover:text-black"
                    }`}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT PORTFOLIO ──────────────────────────────── */}
        <section className="border-y border-black/6 bg-[#f5f5f5] py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-20">
              <motion.p variants={fadeUp} className="text-black/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— Our Work</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-tight uppercase text-black max-w-2xl">
                Businesses we've<br />worked with.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-black/35 text-lg max-w-md leading-relaxed font-light mt-6">
                Real brands, real work — from product launches to full digital marketing campaigns.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/6">
              {CLIENT_GALLERY.map((client, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => setLightboxImg({ src: client.img, label: client.name })}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.7 }}
                  className="bg-[#f5f5f5] overflow-hidden text-left group hover:bg-[#eeeeee] transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#e8e8e8]">
                    <img
                      src={client.img}
                      alt={client.name}
                      className={`w-full h-full object-${client.fit} group-hover:scale-105 transition-transform duration-700`}
                    />
                  </div>
                  <div className="p-6 border-t border-black/5">
                    <div className="text-black/22 text-[9px] font-bold uppercase tracking-[0.2em] mb-2">{client.industry}</div>
                    <h3 className="font-display font-bold text-base uppercase tracking-tight text-black mb-1">{client.name}</h3>
                    <p className="text-black/35 text-xs font-light leading-relaxed">{client.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-black/22 text-[10px] font-bold uppercase tracking-wider group-hover:text-black/50 transition-colors">
                      View Project <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRAND GALLERY ─────────────────────────────────── */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-20">
              <motion.p variants={fadeUp} className="text-black/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— Brand Identity</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-tight uppercase text-black max-w-2xl">
                Our brand.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-black/35 text-lg max-w-md leading-relaxed font-light mt-6 italic">
                "Still Marketing, But Different"
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-black/6">
              {MANA_GALLERY.map((item, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => setLightboxImg({ src: item.img, label: item.label })}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.7 }}
                  className="overflow-hidden text-left group"
                  style={{ background: item.bg }}
                >
                  <div className="aspect-square flex items-center justify-center p-8">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 border-t border-black/8 bg-[#f5f5f5]">
                    <h3 className="font-display font-bold text-xs uppercase tracking-tight text-black mb-0.5">{item.label}</h3>
                    <p className="text-black/30 text-[10px] font-light">{item.desc}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-32 border-t border-black/6 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-black/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-8">— Ready to grow?</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(40px,6vw,90px)] leading-[0.9] tracking-tight uppercase text-black mb-12 max-w-4xl">
                Ready to get more customers?
              </motion.h2>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  data-testid="services-cta"
                  onClick={() => setLocation("/")}
                  className="group bg-black text-white hover:bg-black/85 font-black text-[13px] px-10 py-5 uppercase tracking-wider transition-all flex items-center gap-3"
                >
                  Get My Free Demo Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-green-700/70 hover:text-green-700 font-bold text-[13px] px-10 py-5 uppercase tracking-wider border border-green-600/15 hover:border-green-600/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
