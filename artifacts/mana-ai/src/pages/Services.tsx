import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Globe, Search, MessageSquare, BarChart2, Bot, Mail,
  CheckCircle2, Zap, ArrowLeft, ArrowRight, Monitor, Palette, X
} from "lucide-react";
import abstractImg from "@assets/generated_images/digital-marketing-abstract.png";
import logoMarkImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.49_PM-removebg-preview_1776323782832.png";

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

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all" onClick={() => setLightboxImg(null)}>
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

      <nav className="fixed top-0 w-full z-50 bg-[hsl(220,50%,6%)]/90 backdrop-blur-md border-b border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button data-testid="services-logo" onClick={() => setLocation("/")} className="flex items-center gap-2">
              <div className="logo-blend h-10 w-10 md:h-11 md:w-11 flex-shrink-0 rounded-sm overflow-hidden">
                <img src={logoMarkImg} alt="" className="h-full w-full object-contain" draggable={false} />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white glow-text font-display">MANA <span className="text-blue-400">AI</span></span>
            </button>
            <div className="flex items-center gap-2 md:gap-4">
              <button data-testid="services-back-home" onClick={() => setLocation("/")} className="flex items-center gap-1.5 text-blue-300/60 hover:text-white transition-colors text-sm font-medium px-2 py-2">
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Back to Home</span>
              </button>
              <Button data-testid="services-nav-cta" onClick={() => setLocation("/")} className="bg-primary hover:bg-orange-500 text-white font-semibold glow-border text-sm px-4 py-2 h-auto">
                <span className="hidden sm:inline">Get Free Demo</span>
                <span className="sm:hidden">Free Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-16 md:pt-20">

        {/* HEADER */}
        <section className="py-16 md:py-24 relative overflow-hidden">
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
                <Button data-testid="services-header-cta" size="lg" onClick={() => setLocation("/")} className="bg-primary hover:bg-orange-500 text-white font-bold px-8 py-5 rounded-xl glow-border shadow-xl transition-all hover:scale-105 btn-shimmer">
                  Get My Free Demo Today
                </Button>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-green-400 border border-green-600/30 hover:bg-green-500/10 px-8 py-3 rounded-xl font-bold transition-all">
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
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {SERVICES.map((service, i) => (
                <motion.div key={i} data-testid={`service-card-${i}`} variants={fadeIn} className="glass-card p-6 rounded-2xl border border-blue-800/20 hover:border-orange-500/20 transition-all group hover:-translate-y-1">
                  <div className="mb-4 p-3 bg-blue-900/40 rounded-xl inline-block group-hover:scale-110 transition-transform">{service.icon}</div>
                  <div className="inline-block bg-blue-500/10 text-blue-300 text-xs font-bold px-2 py-0.5 rounded-full mb-3">{service.tag}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Choose Your Package</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">Transparent pricing built for South African businesses at every stage of growth.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              {PACKAGES.filter((pkg) => pkg.name !== "Enterprise").map((pkg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`${pkg.popular ? "gradient-border-animated" : ""} glass-card rounded-3xl p-8 relative ${pkg.popular ? "mt-8 md:mt-0 md:-translate-y-4 shadow-2xl shadow-orange-500/20" : "border border-blue-800/30"}`}>
                  {pkg.popular && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider glow-border btn-shimmer">MOST POPULAR</div>}
                  <h3 className="text-xl font-bold text-white mb-2 mt-4">{pkg.name}</h3>
                  <div className="text-4xl font-black text-white mb-1 font-display">{pkg.price}</div>
                  <p className="text-blue-300/50 text-sm mb-6">{pkg.billing}</p>
                  <ul className="space-y-4 mb-8">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-center text-blue-100"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" /> {item}</li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-orange-500 text-white glow-border text-lg py-6 btn-shimmer" onClick={() => setLocation("/")}>Get Started</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO GALLERY */}
        <section className="py-14 md:py-24 bg-blue-950/30 border-y border-blue-900/25">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Businesses We've Worked With</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">Real brands, real work — from product launches to full digital marketing campaigns.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {CLIENT_GALLERY.map((client, i) => (
                <motion.button key={i} type="button" onClick={() => setLightboxImg({ src: client.img, label: client.name })} className="glass-card rounded-2xl overflow-hidden text-left group border border-blue-800/20 hover:border-blue-500/30 transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-black/20">
                    <img src={client.img} alt={client.name} className={`w-full h-full object-${client.objectFit} group-hover:scale-105 transition-transform duration-500`} />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-blue-300/50 uppercase tracking-wider mb-1">{client.industry}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{client.name}</h3>
                    <p className="text-sm text-blue-200/60">{client.desc}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* MANA AI BRAND GALLERY */}
        <section className="py-14 md:py-24 relative overflow-hidden">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {MANA_GALLERY.map((item, i) => (
                <motion.button key={i} type="button" onClick={() => setLightboxImg({ src: item.img, label: item.label })} className={`${item.bg} glass-card rounded-2xl overflow-hidden text-left group border border-blue-800/20 hover:border-orange-500/30 transition-all`}>
                  <div className="aspect-square flex items-center justify-center p-6">
                    <img src={item.img} alt={item.label} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                    <p className="text-sm text-blue-200/60">{item.desc}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-background to-orange-950/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
                Ready to Get More Customers?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-blue-200/60 mb-10">
                Let’s build your next growth system with MANA AI.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button data-testid="services-cta" size="lg" onClick={() => setLocation("/")} className="bg-primary hover:bg-orange-500 text-white font-bold px-8 py-5 rounded-xl glow-border shadow-xl transition-all hover:scale-105 btn-shimmer">
                  Get My Free Demo Today
                </Button>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-green-400 border border-green-600/30 hover:bg-green-500/10 px-8 py-3 rounded-xl font-bold transition-all">
                  <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
