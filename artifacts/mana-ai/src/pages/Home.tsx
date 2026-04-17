import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Menu, X, CheckCircle2, TrendingUp, MessageSquare,
  Star, PhoneCall, ArrowRight, ArrowUpRight,
  BarChart3, Layers, Bot, Target, Rocket, Gauge, Globe
} from "lucide-react";
import heroOwnerImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_(3)_1776327443687.jpeg";
import logoImg from "@assets/WhatsApp_Image_2026-04-16_at_10.50.01_PM_1776429915147.jpeg";

const WHATSAPP_URL = "https://wa.me/27760355295";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const MARQUEE_ITEMS = [
  "Brand Systems", "Web Design", "SEO Dominance", "Google Ads",
  "AI Automation", "Lead Generation", "Social Media", "Google Maps",
  "Meta Ads", "WhatsApp Integration", "Review Systems", "Growth Strategy"
];

function Marquee() {
  return (
    <div className="marquee-outer border-y border-white/8 py-4 overflow-hidden">
      <div className="marquee-track flex gap-12 items-center">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-4 whitespace-nowrap text-xs font-bold uppercase tracking-[0.22em] text-white/25 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", businessType: "" },
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onSubmit = () => {
    toast({
      title: "We'll be in touch shortly.",
      description: "Thanks for reaching out. We'll contact you on WhatsApp within 24 hours.",
    });
    form.reset();
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#0a0a0a]/96 backdrop-blur-xl border-b border-white/8" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => scrollTo("hero")}>
              <img src={logoImg} alt="MANA AI" className="h-10 w-10 object-contain" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable={false} />
              <span className="font-display font-bold text-[15px] tracking-wider text-white uppercase">MANA AI</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {[["Services", "services"], ["Process", "process"], ["Results", "results"], ["Pricing", "pricing"]].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-white/40 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200 tracking-wide uppercase text-[12px]">{label}</button>
              ))}
              <button onClick={() => setLocation("/services")} className="text-white/40 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200 tracking-wide uppercase text-[12px]">Portfolio</button>
              <button
                onClick={() => scrollTo("contact")}
                className="ml-4 bg-white text-black hover:bg-white/90 font-bold text-[12px] px-5 py-2.5 uppercase tracking-wider transition-all rounded-none"
              >
                Free Growth Plan
              </button>
            </div>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a]/99 backdrop-blur-xl border-b border-white/8">
            <div className="px-6 pt-4 pb-6 space-y-1">
              {[["Services", "services"], ["Process", "process"], ["Results", "results"], ["Pricing", "pricing"]].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left text-white/60 hover:text-white px-4 py-4 text-sm font-semibold uppercase tracking-wider transition-colors border-b border-white/5">{label}</button>
              ))}
              <button onClick={() => { setLocation("/services"); setIsMobileMenuOpen(false); }} className="block w-full text-left text-white/60 hover:text-white px-4 py-4 text-sm font-semibold uppercase tracking-wider transition-colors border-b border-white/5">Portfolio</button>
              <div className="pt-4">
                <button onClick={() => scrollTo("contact")} className="w-full bg-white text-black hover:bg-white/90 font-bold text-sm py-4 uppercase tracking-wider transition-all">Get Free Growth Plan</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
          {/* subtle grid */}
          <div className="absolute inset-0 hero-grid-pattern opacity-100 pointer-events-none" />
          {/* glow blobs */}
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-white/[0.025] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[0%] right-[-5%] w-[35%] h-[45%] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left copy */}
              <motion.div initial="hidden" animate="show" variants={stagger} className="lg:col-span-7 relative">
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                  <span className="live-dot" />
                  <span className="text-white/30 text-[11px] font-bold uppercase tracking-[0.25em]">AI-Powered Digital Growth · South Africa</span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="font-display font-black leading-[0.95] tracking-tight mb-10">
                  <span className="block text-[clamp(52px,8vw,110px)] text-white uppercase">DIGITAL</span>
                  <span className="block text-[clamp(52px,8vw,110px)] text-white uppercase">MARKETING</span>
                  <span className="block text-[clamp(52px,8vw,110px)] hero-gradient-text uppercase">FOR GROWTH.</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-white/40 text-lg max-w-lg leading-relaxed mb-12 font-light">
                  We engineer complete digital growth systems that generate leads, build trust, and scale your revenue — on autopilot.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
                  <button
                    data-testid="hero-primary-cta"
                    onClick={() => scrollTo("contact")}
                    className="group bg-white text-black hover:bg-white/90 font-bold text-[13px] px-8 py-5 uppercase tracking-wider transition-all flex items-center gap-3 justify-center"
                  >
                    Get Your Free Growth Plan
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    data-testid="hero-secondary-cta"
                    onClick={() => scrollTo("process")}
                    className="text-white/60 hover:text-white font-semibold text-[13px] px-8 py-5 uppercase tracking-wider transition-all border border-white/12 hover:border-white/25 flex items-center gap-3 justify-center"
                  >
                    See How It Works
                  </button>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-1.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                    <span className="text-white/30 text-xs ml-1.5 font-medium">5.0 rating</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <span className="text-white/30 text-xs font-medium">Trusted by growing businesses</span>
                  <div className="h-4 w-px bg-white/10" />
                  <a
                    data-testid="hero-whatsapp-link"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:text-green-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp Us
                  </a>
                </motion.div>
              </motion.div>

              {/* Right image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/40 z-10" />
                  <img
                    src={heroOwnerImg}
                    alt="MANA AI — Digital growth systems"
                    className="w-full object-cover"
                    style={{ maxHeight: "600px", objectPosition: "center top" }}
                  />
                </div>

                {/* Floating stat cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute -bottom-4 -left-6 z-20 bg-[#141414] border border-white/10 px-5 py-4 flex items-center gap-4"
                >
                  <div className="bg-green-500/15 p-2.5">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white font-display">+143% LEADS</p>
                    <p className="text-[10px] text-white/35 uppercase tracking-wider">First 30 days avg.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="absolute -top-4 -right-4 z-20 bg-[#141414] border border-white/10 px-5 py-4 flex items-center gap-4"
                >
                  <div className="bg-white/8 p-2.5">
                    <Gauge className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white font-display">RANK #1</p>
                    <p className="text-[10px] text-white/35 uppercase tracking-wider">Google Search & Maps</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Tagline bar at bottom of hero */}
          <div className="border-t border-white/8 px-6 lg:px-10 py-5">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
              <p className="text-white/20 text-[11px] font-bold uppercase tracking-[0.25em]">Still Marketing, But Different</p>
              <div className="flex flex-wrap gap-8">
                {["No long-term contracts", "48-hour launch", "Results-guaranteed", "Conversion-focused"].map((t, i) => (
                  <span key={i} className="text-white/18 text-[10px] font-semibold uppercase tracking-[0.2em]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ───────────────────────────────────────── */}
        <Marquee />

        {/* ── WHAT WE DO ────────────────────────────────────── */}
        <section id="services" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mb-20"
            >
              <motion.p variants={fadeUp} className="text-white/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— What We Do</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(40px,5.5vw,80px)] leading-[0.95] tracking-tight uppercase mb-8 max-w-3xl text-white">
                Everything your<br />business needs<br />to dominate online.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg max-w-md leading-relaxed font-light">
                Three powerful systems. One unified strategy. Built to make your competitors irrelevant.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/6">
              {[
                {
                  icon: <Layers className="w-6 h-6" />,
                  num: "01",
                  title: "Brand & Website Systems",
                  desc: "We build premium digital identities — high-converting websites, strong brand positioning, and professional assets that make you impossible to ignore.",
                  items: ["High-converting website design", "Brand identity & positioning", "Logo & visual identity", "SEO-optimised architecture"]
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  num: "02",
                  title: "Marketing & Lead Generation",
                  desc: "We deploy precision marketing campaigns that target the right people at the right time — turning cold audiences into warm, ready-to-buy leads.",
                  items: ["Google Ads & SEO campaigns", "Meta & social media advertising", "Google Maps dominance", "WhatsApp lead integration"]
                },
                {
                  icon: <Bot className="w-6 h-6" />,
                  num: "03",
                  title: "AI Automation & Optimisation",
                  desc: "We install intelligent automation systems that nurture leads, follow up on enquiries, and optimise your campaigns — 24/7, without you lifting a finger.",
                  items: ["AI-powered lead follow-up", "Automated review generation", "Performance analytics", "Continuous campaign optimisation"]
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#0a0a0a] p-10 group hover:bg-[#111] transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-10">
                    <div className="p-3 border border-white/10 text-white/50 group-hover:border-white/20 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-white/6 font-black text-7xl font-display select-none leading-none">{service.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-5 text-white">{service.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed mb-8 font-light flex-1">{service.desc}</p>
                  <ul className="space-y-3 border-t border-white/6 pt-8">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-xs text-white/45 uppercase tracking-wide font-medium">
                        <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────── */}
        <section id="process" className="py-32 border-y border-white/6 bg-[#0d0d0d] relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mb-20"
            >
              <motion.p variants={fadeUp} className="text-white/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— How It Works</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(40px,5.5vw,80px)] leading-[0.95] tracking-tight uppercase mb-8 text-white">
                From zero to results<br />in four clear steps.
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
              {[
                { step: "01", icon: <Target className="w-5 h-5" />, title: "Strategy", desc: "We deep-dive into your business, market, and competitors to build a tailored growth blueprint." },
                { step: "02", icon: <Layers className="w-5 h-5" />, title: "Build", desc: "We engineer your website, brand, and digital infrastructure to convert visitors into customers." },
                { step: "03", icon: <Rocket className="w-5 h-5" />, title: "Launch", desc: "We deploy your campaigns, activate your systems, and go live — within 48 hours of approval." },
                { step: "04", icon: <TrendingUp className="w-5 h-5" />, title: "Scale", desc: "We track every result, optimise every channel, and scale what's working — month after month." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="bg-[#0d0d0d] p-10 group hover:bg-[#131313] transition-colors"
                >
                  <div className="text-[80px] font-black text-white/4 font-display leading-none mb-6 select-none">{item.step}</div>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 mb-6 group-hover:border-white/20 group-hover:text-white/70 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-4 text-white">{item.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS ───────────────────────────────────────── */}
        <section id="results" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mb-20"
            >
              <motion.p variants={fadeUp} className="text-white/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— Results</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(40px,5.5vw,80px)] leading-[0.95] tracking-tight uppercase mb-8 text-white max-w-2xl">
                Numbers that speak for themselves.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg max-w-md leading-relaxed font-light">
                We measure success by revenue generated, not vanity metrics.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/6 mb-px">
              {[
                { value: "+143%", label: "Average increase in leads within 30 days", sub: "Across all active clients" },
                { value: "Top 3", label: "Google Maps ranking achieved for clients", sub: "Within weeks of launch" },
                { value: "48hr", label: "Time from approval to going live", sub: "Fast execution, real results" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  data-testid={`result-stat-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors"
                >
                  <div className="font-display font-black text-[clamp(48px,6vw,80px)] text-white leading-none mb-4">{stat.value}</div>
                  <p className="text-white/60 font-medium text-sm mb-2 leading-snug">{stat.label}</p>
                  <p className="text-white/20 text-xs uppercase tracking-wider font-medium">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Before / After */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/6"
            >
              <div className="bg-[#0d0d0d] p-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                  <span className="text-red-400/70 font-bold text-[10px] uppercase tracking-[0.25em]">Before MANA AI</span>
                </div>
                <ul className="space-y-5">
                  {[
                    "Invisible on Google — buried on page 3+",
                    "Losing leads to competitors every day",
                    "No reviews, no trust, no calls",
                    "Website that doesn't convert visitors",
                    "Zero automated follow-up system"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/30 text-sm font-light">
                      <X className="w-3.5 h-3.5 text-red-500/40 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#101010] p-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                  <span className="text-green-400/80 font-bold text-[10px] uppercase tracking-[0.25em]">After MANA AI</span>
                </div>
                <ul className="space-y-5">
                  {[
                    "Ranking Top 3 on Google Maps & Search",
                    "Steady stream of qualified inbound leads",
                    "20+ five-star reviews, visible and trusted",
                    "Website that converts visitors into customers",
                    "Automated systems working 24/7 for you"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/70 text-sm font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400/70 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────── */}
        <section id="pricing" className="py-32 border-y border-white/6 bg-[#0d0d0d] relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mb-20"
            >
              <motion.p variants={fadeUp} className="text-white/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— Pricing</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(40px,5.5vw,80px)] leading-[0.95] tracking-tight uppercase mb-8 text-white">
                Simple. Transparent.<br />No BS.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg max-w-md leading-relaxed font-light">
                One new client covers the cost. Most businesses see ROI within the first week.
              </motion.p>
            </motion.div>

            {/* Quick entry pricing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6 mb-px max-w-5xl">
              {/* Starter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-[#0d0d0d] p-10 flex flex-col hover:bg-[#111] transition-colors"
              >
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-6">Starter</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display font-black text-[52px] text-white leading-none">R3,500</span>
                </div>
                <p className="text-white/25 text-xs uppercase tracking-wider mb-10">once-off payment</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Full Google Profile Optimisation", "Trust & Reviews Setup", "1-Hour Strategy Call", "Basic SEO Configuration"].map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/40 text-xs uppercase tracking-wide font-medium">
                      <span className="w-1 h-1 rounded-full bg-white/20" />{item}
                    </li>
                  ))}
                </ul>
                <button
                  data-testid="pricing-setup-cta"
                  onClick={() => scrollTo("contact")}
                  className="w-full border border-white/12 text-white/50 hover:border-white/25 hover:text-white font-bold text-[11px] py-4 uppercase tracking-wider transition-all"
                >
                  Get Started
                </button>
              </motion.div>

              {/* Popular */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white p-10 relative flex flex-col"
              >
                <div className="absolute -top-3 left-8">
                  <span className="bg-black text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-widest">Most Popular</span>
                </div>
                <p className="text-black/50 text-[10px] font-bold uppercase tracking-[0.25em] mb-6 mt-2">Growth</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display font-black text-[52px] text-black leading-none">R4,500</span>
                </div>
                <p className="text-black/40 text-xs uppercase tracking-wider mb-10">30-day complete management</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Everything in Starter", "30 Days Active Management", "Review Generation System", "WhatsApp Lead Integration", "Weekly Performance Reports"].map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-black/70 text-xs uppercase tracking-wide font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black/50 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <button
                  data-testid="pricing-popular-cta"
                  onClick={() => scrollTo("contact")}
                  className="w-full bg-black text-white hover:bg-black/85 font-black text-[11px] py-4 uppercase tracking-wider transition-all"
                >
                  Get Started Today
                </button>
              </motion.div>

              {/* Scale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-[#0d0d0d] p-10 flex flex-col hover:bg-[#111] transition-colors"
              >
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-6">Scale</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display font-black text-[52px] text-white leading-none">R2,500</span>
                  <span className="text-white/30 text-sm">/mo</span>
                </div>
                <p className="text-white/25 text-xs uppercase tracking-wider mb-10">ongoing retainer</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Continuous Optimisation", "Monthly Performance Reports", "Ongoing Content Updates", "Priority Support Channel"].map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/40 text-xs uppercase tracking-wide font-medium">
                      <span className="w-1 h-1 rounded-full bg-white/20" />{item}
                    </li>
                  ))}
                </ul>
                <button
                  data-testid="pricing-growth-cta"
                  onClick={() => scrollTo("contact")}
                  className="w-full border border-white/12 text-white/50 hover:border-white/25 hover:text-white font-bold text-[11px] py-4 uppercase tracking-wider transition-all"
                >
                  Get Started
                </button>
              </motion.div>
            </div>

            {/* Full packages */}
            <div className="mt-20">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-2">Ready to go all-in?</h3>
                <p className="text-white/30 text-sm font-light">Complete growth packages for businesses serious about scaling.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6 max-w-5xl">
                {[
                  { name: "Launch", price: "R6,500", note: "once-off", tag: "Best for startups", items: ["1-page website", "SEO setup", "Logo design", "Social media setup", "Google Business Profile"] },
                  { name: "Growth", price: "R9,800", note: "+ R3,500/mo", tag: "Best for growing businesses", items: ["3-page website", "Full SEO campaign", "Google & Meta Ads", "Social media content", "Monthly reporting"] },
                  { name: "Premium", price: "R18,500", note: "+ R6,500/mo", tag: "Best for scaling brands", items: ["5+ page website", "AI chatbot", "Full ad management", "Email marketing", "Priority support"] }
                ].map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors group"
                  >
                    <div className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em] mb-5">{pkg.tag}</div>
                    <h4 className="font-display font-black text-xl uppercase tracking-tight text-white mb-2">{pkg.name}</h4>
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="font-display font-black text-3xl text-white">{pkg.price}</span>
                      <span className="text-white/25 text-xs uppercase tracking-wide">{pkg.note}</span>
                    </div>
                    <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                      {pkg.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-[11px] text-white/35 uppercase tracking-wide font-medium">
                          <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => scrollTo("contact")}
                      className="w-full border border-white/10 text-white/40 hover:border-white/25 hover:text-white text-[10px] font-bold py-3.5 uppercase tracking-widest transition-all"
                    >
                      Choose Package
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────── */}
        <section className="py-40 relative overflow-hidden border-b border-white/6">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-white/20 text-[11px] font-bold uppercase tracking-[0.25em] mb-8">— Ready to grow?</motion.p>
              <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(48px,7vw,120px)] leading-[0.9] tracking-tight uppercase text-white mb-16 max-w-5xl">
                Stop losing clients online. Let's build your growth system.
              </motion.h2>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  onClick={() => scrollTo("contact")}
                  className="group bg-white text-black hover:bg-white/90 font-black text-[13px] px-10 py-5 uppercase tracking-wider transition-all flex items-center gap-3"
                >
                  Get Started — It's Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-green-400/70 hover:text-green-400 font-bold text-[13px] px-10 py-5 uppercase tracking-wider border border-green-500/15 hover:border-green-500/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Or WhatsApp Us Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT FORM ────────────────────────────────────── */}
        <section id="contact" className="py-32 bg-[#0d0d0d] relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              >
                <motion.p variants={fadeUp} className="text-white/25 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">— Get in Touch</motion.p>
                <motion.h2 variants={fadeUp} className="font-display font-black text-[clamp(36px,4.5vw,64px)] leading-[0.95] tracking-tight uppercase text-white mb-8">
                  Get Your Free Growth Plan
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/35 text-lg font-light leading-relaxed mb-12">
                  Fill in your details and we'll reach out within 24 hours to build your personalised strategy.
                </motion.p>
                <motion.div variants={fadeUp} className="space-y-6">
                  <a href="tel:+27760355295" className="flex items-center gap-4 text-white/30 hover:text-white/70 transition-colors group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/20 font-bold mb-0.5">Phone</p>
                      <p className="text-sm">+27 76 035 5295</p>
                    </div>
                  </a>
                  <a href="mailto:jaun@manaai.co.za" className="flex items-center gap-4 text-white/30 hover:text-white/70 transition-colors group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/20 font-bold mb-0.5">Email</p>
                      <p className="text-sm">jaun@manaai.co.za</p>
                    </div>
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-green-400/50 hover:text-green-400 transition-colors group">
                    <div className="w-10 h-10 border border-green-500/15 flex items-center justify-center group-hover:border-green-500/30 transition-all">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-green-500/40 font-bold mb-0.5">WhatsApp</p>
                      <p className="text-sm font-bold">Chat with us now</p>
                    </div>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#111] border border-white/8 p-10"
              >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/30 text-[10px] font-bold uppercase tracking-wider">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g. John Pietersen"
                        {...form.register("name")}
                        className="bg-transparent border-0 border-b border-white/12 text-white placeholder:text-white/15 focus:border-white/40 h-12 rounded-none px-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                      {form.formState.errors.name && <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/30 text-[10px] font-bold uppercase tracking-wider">WhatsApp Number</Label>
                      <Input
                        id="phone"
                        placeholder="+27 82 000 0000"
                        {...form.register("phone")}
                        className="bg-transparent border-0 border-b border-white/12 text-white placeholder:text-white/15 focus:border-white/40 h-12 rounded-none px-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                      {form.formState.errors.phone && <p className="text-red-400 text-xs">{form.formState.errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-white/30 text-[10px] font-bold uppercase tracking-wider">Type of Business</Label>
                    <Controller
                      name="businessType"
                      control={form.control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="bg-transparent border-0 border-b border-white/12 text-white h-12 rounded-none px-0 text-sm focus:ring-0 focus:ring-offset-0 [&>svg]:text-white/30">
                            <SelectValue placeholder="Select your business type" className="text-white/15" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#111] border-white/12 rounded-none">
                            {["Plumber", "Electrician", "Transport / Logistics", "Construction", "Cleaning Services", "Mechanic / Auto", "Restaurant / Food", "Retail Shop", "Health & Wellness", "Other Local Business"].map((biz) => (
                              <SelectItem key={biz} value={biz} className="text-white/70 focus:bg-white/8 focus:text-white text-sm rounded-none">{biz}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {form.formState.errors.businessType && <p className="text-red-400 text-xs">{form.formState.errors.businessType.message}</p>}
                  </div>
                  <div className="pt-4">
                    <button
                      data-testid="contact-form-submit"
                      type="submit"
                      className="w-full bg-white text-black hover:bg-white/90 font-black text-[12px] py-5 uppercase tracking-widest transition-all"
                    >
                      Book My Free Strategy Call
                    </button>
                    <p className="text-center text-white/18 text-[10px] uppercase tracking-wider mt-4">
                      We'll reach out on WhatsApp within 24 hours. No spam, no commitment.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-white/6 py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => scrollTo("hero")}>
                <img src={logoImg} alt="MANA AI" className="h-10 w-10 object-contain opacity-70" style={{ filter: "invert(1)", mixBlendMode: "screen" }} draggable={false} />
                <span className="font-display font-bold text-[15px] tracking-wider text-white/70 uppercase">MANA AI</span>
              </div>
              <p className="text-white/22 text-sm leading-relaxed max-w-xs mb-5 font-light">
                An AI-powered digital growth agency that builds high-converting online systems for businesses across South Africa.
              </p>
              <p className="text-white/15 text-xs italic uppercase tracking-wider">"Still Marketing, But Different"</p>
            </div>
            <div>
              <h4 className="text-white/40 font-bold mb-6 text-[10px] uppercase tracking-[0.25em]">Navigate</h4>
              <div className="space-y-3.5">
                {[["Services", "services"], ["Process", "process"], ["Results", "results"], ["Pricing", "pricing"], ["Contact", "contact"]].map(([label, id]) => (
                  <button key={id} onClick={() => scrollTo(id)} className="block text-white/22 hover:text-white/70 transition-colors text-xs uppercase tracking-wider font-medium">{label}</button>
                ))}
                <button onClick={() => setLocation("/services")} className="block text-white/22 hover:text-white/70 transition-colors text-xs uppercase tracking-wider font-medium">Portfolio</button>
              </div>
            </div>
            <div>
              <h4 className="text-white/40 font-bold mb-6 text-[10px] uppercase tracking-[0.25em]">Contact</h4>
              <div className="space-y-3.5 text-xs text-white/22 uppercase tracking-wider font-medium">
                <p>+27 76 035 5295</p>
                <p>jaun@manaai.co.za</p>
                <p>www.manaai.co.za</p>
                <p>South Africa</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-400/50 hover:text-green-400 transition-colors font-bold pt-2">
                  <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/12 text-[10px] uppercase tracking-[0.2em]">© {new Date().getFullYear()} MANA AI. All rights reserved.</p>
            <p className="text-white/10 text-[10px] uppercase tracking-[0.2em]">South Africa · @mana_ai_agency</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
