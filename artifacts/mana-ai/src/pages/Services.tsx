import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Globe, Search, MessageSquare, BarChart2, Bot, Mail,
  CheckCircle2, Zap, ArrowLeft, ArrowRight, Monitor, Palette, X
} from "lucide-react";
import abstractImg from "@assets/generated_images/digital-marketing-abstract.png";
import logoMarkImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_(1)_1775804410966.jpeg";

// Client portfolio images
import hentiesImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.56_PM_(1)_1775804410947.jpeg";
import bizxcelImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.56_PM_1775804410950.jpeg";
import wosPackagingLogoImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.55_PM_(2)_1775804410952.jpeg";
import wosApexImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.55_PM_(1)_1775804410954.jpeg";
import warehouseImg1 from "@assets/WhatsApp_Image_2026-04-09_at_2.16.49_PM_(2)_1775804410955.jpeg";
import warehouseImg2 from "@assets/WhatsApp_Image_2026-04-09_at_2.16.55_PM_1775804410958.jpeg";

// MANA AI brand images
import manaBusinessCardImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.49_PM_(1)_1775804410961.jpeg";
import manaLogoWhiteImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.49_PM_1775804410962.jpeg";
import manaLogoLight2Img from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_(2)_1775804410964.jpeg";
import manaLogoDark1Img from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_(1)_1775804410966.jpeg";
import manaLogoDark2Img from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_1775804410968.jpeg";

const WHATSAPP_URL = "https://wa.me/27760355295";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const SERVICES = [
  { icon: <Monitor className="w-8 h-8 text-blue-400" />, title: "Website Design", desc: "Modern, fast, mobile-first websites that convert visitors into customers. 1 to 5 pages built for your business.", tag: "Web" },
  { icon: <Search className="w-8 h-8 text-blue-300" />, title: "Google Business Profile", desc: "Get found on Google Maps when locals search for your service. Full optimization for maximum visibility.", tag: "Local SEO" },
  { icon: <BarChart2 className="w-8 h-8 text-blue-400" />, title: "SEO Setup & Optimisation", desc: "On-page and technical SEO that helps you rank higher in Google searches — without ongoing ad spend.", tag: "SEO" },
  { icon: <Palette className="w-8 h-8 text-orange-400" />, title: "Social Media Setup & Content", desc: "Professional profiles and consistent, branded content that builds trust and attracts local customers.", tag: "Social" },
  { icon: <Zap className="w-8 h-8 text-orange-300" />, title: "Google & Meta Ads", desc: "Targeted paid advertising that puts your business in front of the right people at the right time.", tag: "Ads" },
  { icon: <Bot className="w-8 h-8 text-blue-300" />, title: "AI Chatbots & Automation", desc: "Automated WhatsApp and website chatbots that capture leads 24/7 — so you never miss a customer.", tag: "AI" },
  { icon: <Mail className="w-8 h-8 text-green-400" />, title: "Email Marketing Setup", desc: "Build and nurture your customer list with professional email sequences that drive repeat business.", tag: "Email" }
];

const PACKAGES = [
  {
    name: "Launch Package", price: "R6,500", billing: "once-off", badge: "Best for startups", popular: false,
    items: ["1-page professional website", "Google Business Profile setup", "Logo design included", "Social media profile setup", "Basic SEO optimization", "48-hour setup"]
  },
  {
    name: "Growth Package", price: "R9,800", billing: "setup + R3,500/month", badge: "Best for growing businesses", popular: true,
    items: ["3-page website", "Full SEO campaign", "Google & Meta Ads setup", "Social media content (8 posts/month)", "Review generation system", "Monthly performance reports"]
  },
  {
    name: "Premium Package", price: "R18,500", billing: "setup + R6,500/month", badge: "Best for scaling brands", popular: false,
    items: ["5+ page website", "AI chatbot integration", "Full ad management", "Email marketing setup", "Weekly reporting & calls", "Priority support"]
  },
  {
    name: "Enterprise", price: "From R12,000", billing: "per month", badge: "Custom solutions", popular: false,
    items: ["Custom strategy", "Dedicated account manager", "Full-stack marketing", "Custom integrations", "Unlimited revisions", "SLA guarantee"]
  }
];

const CLIENT_GALLERY = [
  { img: hentiesImg, name: "Henties Smoothies", industry: "Food & Beverage", desc: "Product branding & social media launch", objectFit: "cover" },
  { img: bizxcelImg, name: "Bizxcel Hybrid", industry: "Business Solutions", desc: "Brand identity & digital presence", objectFit: "contain" },
  { img: wosPackagingLogoImg, name: "WOS Pakmateriaal", industry: "Packaging", desc: "Logo design & online presence setup", objectFit: "contain" },
  { img: wosApexImg, name: "WOS Apex", industry: "Branding & Clothing", desc: "Brand identity & digital marketing", objectFit: "contain" },
  { img: warehouseImg1, name: "WOS Logistics", industry: "Warehousing", desc: "B2B marketing & lead generation", objectFit: "cover" },
  { img: warehouseImg2, name: "WOS Operations", industry: "Logistics", desc: "SEO & Google Maps optimization", objectFit: "cover" },
];

const MANA_GALLERY = [
  { img: manaBusinessCardImg, label: "Business Card", desc: "Official MANA AI brand card", bg: "bg-white/5" },
  { img: manaLogoWhiteImg, label: "Primary Logo", desc: "Full logomark on white", bg: "bg-white/90" },
  { img: manaLogoLight2Img, label: "Logo Variant", desc: "Compact logomark on white", bg: "bg-white/90" },
  { img: manaLogoDark1Img, label: "Dark Logo", desc: "Full logomark on black", bg: "bg-black/80" },
  { img: manaLogoDark2Img, label: "Dark Minimal", desc: "Minimal logomark on black", bg: "bg-black/80" },
];

export default function Services() {
  const [, setLocation] = useLocation();
  const [lightboxImg, setLightboxImg] = useState<{ src: string; label: string } | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-100 z-0"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-800/10 blur-[130px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[140px] pointer-events-none z-0"></div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={lightboxImg.src}
              alt={lightboxImg.label}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">{lightboxImg.label}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[hsl(220,50%,6%)]/90 backdrop-blur-md border-b border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button data-testid="services-logo" onClick={() => setLocation("/")} className="flex items-center gap-2.5">
              <div className="logo-blend h-9 w-9 flex-shrink-0 rounded-sm overflow-hidden">
                <img src={logoMarkImg} alt="" className="h-full w-full object-contain" draggable={false} />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white glow-text font-display">MANA <span className="text-blue-400">AI</span></span>
            </button>
            <div className="flex items-center gap-4">
              <button
                data-testid="services-back-home"
                onClick={() => setLocation("/")}
                className="flex items-center gap-2 text-blue-300/60 hover:text-white transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
              <Button
                data-testid="services-nav-cta"
                onClick={() => setLocation("/")}
                className="bg-primary hover:bg-orange-500 text-white font-semibold glow-border"
              >
                Get Free Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">

        {/* HEADER */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={abstractImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,50%,6%)]/60 via-[hsl(220,50%,6%)]/70 to-[hsl(220,50%,6%)]"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial="hidden" animate="show" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-6">
                <Globe className="mr-2 h-4 w-4" /> Full-Service Digital Marketing
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-display leading-tight max-w-4xl mx-auto">
                Everything You Need to{" "}
                <span className="animated-gradient-text">Grow Your Business Online</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-blue-200/60 max-w-2xl mx-auto mb-10">
                From websites to AI-powered marketing systems — we build everything you need to get more customers.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  data-testid="services-header-cta"
                  size="lg"
                  onClick={() => setLocation("/")}
                  className="bg-primary hover:bg-orange-500 text-white font-bold px-8 py-5 rounded-xl glow-border shadow-xl transition-all hover:scale-105 btn-shimmer"
                >
                  Get My Free Demo Today
                </Button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-green-400 border border-green-600/30 hover:bg-green-500/10 px-8 py-3 rounded-xl font-bold transition-all"
                >
                  <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CORE SERVICES GRID */}
        <section className="py-16 bg-blue-950/30 border-y border-blue-900/25">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Our Core Services</h2>
              <p className="text-blue-200/60 max-w-xl mx-auto">Each service is designed specifically for South African local businesses that want more customers.</p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {SERVICES.map((service, i) => (
                <motion.div
                  key={i}
                  data-testid={`service-card-${i}`}
                  variants={fadeIn}
                  className="glass-card p-6 rounded-2xl border border-blue-800/20 hover:border-orange-500/20 transition-all group hover:-translate-y-1"
                >
                  <div className="mb-4 p-3 bg-blue-900/40 rounded-xl inline-block group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="inline-block bg-blue-500/10 text-blue-300 text-xs font-bold px-2 py-0.5 rounded-full mb-3">{service.tag}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-blue-200/55 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Choose Your Package</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">Transparent pricing built for South African businesses at every stage of growth.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {PACKAGES.map((pkg, i) => (
                <motion.div
                  key={i}
                  data-testid={`package-card-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card rounded-3xl p-8 border-2 relative transition-all hover:border-orange-500/30 ${pkg.popular ? "border-orange-500/60 shadow-2xl shadow-orange-500/10 md:-translate-y-2" : "border-blue-800/25"}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider whitespace-nowrap glow-border">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="inline-block bg-blue-900/50 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">{pkg.badge}</div>
                  <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-orange-400" : "text-white"}`}>{pkg.name}</h3>
                  <div className="mb-1"><span className="text-3xl font-black text-white font-display">{pkg.price}</span></div>
                  <p className="text-blue-300/50 text-sm mb-6">{pkg.billing}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-blue-100/75">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-orange-400" : "text-blue-400"}`} /> {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    data-testid={`package-cta-${i}`}
                    onClick={() => setLocation("/")}
                    className={`w-full ${pkg.popular ? "bg-primary hover:bg-orange-500 text-white glow-border" : "bg-blue-900/50 hover:bg-blue-800/60 text-white border border-blue-700/30"}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO GALLERY */}
        <section className="py-24 bg-blue-950/30 border-y border-blue-900/25">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Businesses We've Worked With</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">Real brands, real work — from product launches to full digital marketing campaigns.</p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
            >
              {CLIENT_GALLERY.map((item, i) => (
                <motion.div
                  key={i}
                  data-testid={`portfolio-card-${i}`}
                  variants={fadeIn}
                  className="group relative rounded-2xl overflow-hidden border border-blue-800/20 hover:border-orange-500/30 transition-all cursor-pointer shadow-xl hover:-translate-y-1"
                  onClick={() => setLightboxImg({ src: item.img, label: item.name })}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] bg-[hsl(220,45%,10%)] flex items-center justify-center overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${item.objectFit === "contain" ? "object-contain p-6" : "object-cover"}`}
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,50%,5%)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Info bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1">{item.industry}</p>
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <p className="text-blue-200/60 text-sm mt-1">{item.desc}</p>
                  </div>
                  {/* Static bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[hsl(220,50%,6%)]/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between group-hover:opacity-0 transition-opacity">
                    <div>
                      <p className="text-white font-semibold text-sm">{item.name}</p>
                      <p className="text-blue-300/50 text-xs">{item.industry}</p>
                    </div>
                    <div className="bg-blue-500/10 px-2 py-0.5 rounded text-blue-300 text-xs">View</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* MANA AI BRAND GALLERY */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-300 mb-4">
                About MANA AI
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Our Brand Identity</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">
                MANA AI — <span className="text-white italic">"Still Marketing but Different"</span>
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              {/* Business card — featured large */}
              <motion.div
                variants={fadeIn}
                className="mb-5 rounded-2xl overflow-hidden border border-blue-800/20 hover:border-orange-500/30 transition-all cursor-pointer group shadow-2xl"
                onClick={() => setLightboxImg({ src: manaBusinessCardImg, label: "MANA AI — Business Card" })}
              >
                <div className="aspect-[16/6] bg-[hsl(220,45%,10%)] flex items-center justify-center overflow-hidden">
                  <img
                    src={manaBusinessCardImg}
                    alt="MANA AI Business Card — Jaun Witbooi, Founder"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    style={{ maxHeight: "240px" }}
                  />
                </div>
                <div className="bg-[hsl(220,50%,8%)] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="text-white font-bold text-lg">Jaun Witbooi — Founder, MANA AI</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-blue-300/60">
                      <span>📞 +27 76 035 5295</span>
                      <span>✉ jaun@manaai.co.za</span>
                      <span>🌐 www.manaai.co.za</span>
                      <span>📸 @mana_ai_agency</span>
                    </div>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 text-orange-300 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                    Business Card
                  </div>
                </div>
              </motion.div>

              {/* Logo variations — 4 in a grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { img: manaLogoWhiteImg, label: "Primary Logo", bg: "bg-white", textColor: "text-gray-700" },
                  { img: manaLogoLight2Img, label: "Compact Logo", bg: "bg-gray-50", textColor: "text-gray-600" },
                  { img: manaLogoDark1Img, label: "Dark Logomark", bg: "bg-black", textColor: "text-gray-400" },
                  { img: manaLogoDark2Img, label: "Dark Minimal", bg: "bg-black", textColor: "text-gray-400" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    data-testid={`mana-brand-${i}`}
                    className="rounded-2xl overflow-hidden border border-blue-800/20 hover:border-orange-500/30 transition-all cursor-pointer group shadow-lg"
                    onClick={() => setLightboxImg({ src: item.img, label: `MANA AI — ${item.label}` })}
                  >
                    <div className={`aspect-square ${item.bg} flex items-center justify-center p-4 overflow-hidden`}>
                      <img
                        src={item.img}
                        alt={`MANA AI ${item.label}`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="bg-[hsl(220,50%,8%)] px-3 py-2 text-center">
                      <p className={`text-xs font-semibold text-blue-200/60`}>{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-background to-orange-950/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
                Want something like this for your business?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-blue-200/60 text-xl mb-10">
                Let's talk about what's right for you. No commitment, no jargon — just a straightforward conversation about how we can help.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  data-testid="services-cta-demo"
                  size="lg"
                  onClick={() => setLocation("/")}
                  className="bg-primary hover:bg-orange-500 text-white font-bold text-lg px-10 py-6 rounded-xl glow-border shadow-xl transition-all hover:scale-105"
                >
                  Get My Free Demo Today
                </Button>
                <a
                  data-testid="services-cta-whatsapp"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500/10 text-green-400 border border-green-600/30 hover:bg-green-500/20 px-10 py-4 rounded-xl font-bold transition-all text-lg"
                >
                  <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[hsl(220,55%,4%)] py-12 border-t border-blue-900/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <button onClick={() => setLocation("/")} className="text-2xl font-bold tracking-tighter text-white font-display block mb-3">
                MANA <span className="text-blue-400">AI</span>
              </button>
              <p className="text-blue-300/40 text-sm italic">"Still Marketing but Different"</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm text-blue-300/50">
                <p>📞 +27 76 035 5295</p>
                <p>✉ jaun@manaai.co.za</p>
                <p>🌐 www.manaai.co.za</p>
                <p>📸 @mana_ai_agency</p>
                <p>📍 Cape Town, South Africa</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-between">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition-colors font-medium">
                <MessageSquare className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </a>
              <p className="text-blue-300/30 text-sm mt-4">© {new Date().getFullYear()} MANA AI</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        data-testid="services-floating-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-8 h-8" />
      </a>
    </div>
  );
}
