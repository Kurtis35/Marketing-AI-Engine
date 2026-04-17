import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
  Star, PhoneCall, Zap, Globe, ShieldCheck, ArrowRight,
  BarChart3, Layers, Bot, Target, Rocket, Gauge
} from "lucide-react";
import heroOwnerImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.48_PM_(3)_1776327443687.jpeg";
import logoMarkImg from "@assets/WhatsApp_Image_2026-04-16_at_10.50.01_PM_1776410025142.jpeg";

const WHATSAPP_URL = "https://wa.me/27760355295";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
});

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

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
    <div className="min-h-screen bg-[#080c14] text-white overflow-x-hidden font-sans">

      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-700/10 blur-[160px] blob-animate" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] rounded-full bg-blue-900/8 blur-[150px] blob-animate-2" />
        <div className="absolute top-[10%] right-[-5%] w-[35%] h-[40%] rounded-full bg-orange-600/6 blur-[120px] blob-animate-3" />
      </div>

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#080c14]/95 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo("hero")}>
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden" style={{ mixBlendMode: "screen", filter: "invert(1)" }}>
                <img src={logoMarkImg} alt="MANA AI" className="h-full w-full object-contain" draggable={false} />
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {[["What We Do", "services"], ["Process", "process"], ["Results", "results"], ["Pricing", "pricing"]].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-white/50 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200 tracking-wide">{label}</button>
              ))}
              <button onClick={() => setLocation("/services")} className="text-white/50 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200 tracking-wide">Portfolio</button>
              <Button
                data-testid="nav-cta"
                onClick={() => scrollTo("contact")}
                className="ml-4 bg-white text-black hover:bg-white/90 font-bold text-sm px-5 py-2 h-auto rounded-lg transition-all"
              >
                Get Free Growth Plan
              </Button>
            </div>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#080c14]/98 backdrop-blur-xl border-b border-white/5">
            <div className="px-6 pt-4 pb-6 space-y-1">
              {[["What We Do", "services"], ["Process", "process"], ["Results", "results"], ["Pricing", "pricing"]].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left text-white/70 hover:text-white px-4 py-3.5 text-base font-medium transition-colors rounded-lg hover:bg-white/5">{label}</button>
              ))}
              <button onClick={() => { setLocation("/services"); setIsMobileMenuOpen(false); }} className="block w-full text-left text-white/70 hover:text-white px-4 py-3.5 text-base font-medium transition-colors rounded-lg hover:bg-white/5">Portfolio</button>
              <div className="pt-3">
                <Button onClick={() => scrollTo("contact")} className="w-full bg-white text-black hover:bg-white/90 font-bold text-base py-6">Get Free Growth Plan</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">

        {/* ── HERO ───────────────────────────────────────── */}
        <section id="hero" className="min-h-screen flex items-center relative pt-20 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left copy */}
              <motion.div initial="hidden" animate="show" variants={stagger} className="relative">
                <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
                  <span className="live-dot" />
                  <span className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">AI-Powered Digital Growth Agency</span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-black tracking-tight leading-[1.04] mb-8 font-display">
                  We turn businesses into{" "}
                  <span className="animated-gradient-text">high-converting online machines.</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-lg sm:text-xl text-white/50 mb-10 leading-relaxed max-w-lg">
                  We don't just build websites or run ads. We engineer complete digital growth systems that generate leads, build trust, and scale your revenue — on autopilot.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button
                    data-testid="hero-primary-cta"
                    onClick={() => scrollTo("contact")}
                    className="bg-white text-black hover:bg-white/90 font-bold text-base px-8 py-6 h-auto rounded-xl transition-all hover:scale-105 shadow-2xl shadow-white/10"
                  >
                    Get Your Free Growth Plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    data-testid="hero-secondary-cta"
                    onClick={() => scrollTo("process")}
                    variant="outline"
                    className="text-white/80 border-white/15 hover:bg-white/5 font-semibold text-base px-8 py-6 h-auto rounded-xl transition-all"
                  >
                    See How It Works
                  </Button>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    <span className="text-white/40 text-sm ml-2">5.0 rating</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <span className="text-white/40 text-sm">Trusted by growing businesses</span>
                  <div className="h-4 w-px bg-white/10" />
                  <a
                    data-testid="hero-whatsapp-link"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </motion.div>
              </motion.div>

              {/* Right image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-10 rounded-3xl" />
                  <img
                    src={heroOwnerImg}
                    alt="MANA AI — Digital growth systems"
                    className="w-full object-cover rounded-3xl"
                    style={{ maxHeight: "580px", objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-50 rounded-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080c14]/30 rounded-3xl" />
                </div>

                {/* Floating card — leads */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="absolute -bottom-6 -left-8 glass-card px-5 py-4 rounded-2xl flex items-center gap-4 shadow-2xl border border-green-500/15"
                >
                  <div className="bg-green-500/15 p-2.5 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">+143% more leads</p>
                    <p className="text-xs text-white/40">in the first 30 days</p>
                  </div>
                </motion.div>

                {/* Floating card — ranking */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-6 -right-6 glass-card px-5 py-4 rounded-2xl flex items-center gap-4 shadow-2xl border border-blue-500/15"
                >
                  <div className="bg-blue-500/15 p-2.5 rounded-xl">
                    <Gauge className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Ranking #1</p>
                    <p className="text-xs text-white/40">Google Search & Maps</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ────────────────────────────────── */}
        <section className="py-6 border-y border-white/[0.06] bg-white/[0.015]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
            >
              {[
                { label: "No long-term contracts" },
                { label: "48-hour launch" },
                { label: "Results-guaranteed approach" },
                { label: "Conversion-focused systems" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white/30 text-xs font-semibold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-orange-500/60 flex-shrink-0" />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── WHAT WE DO ─────────────────────────────────── */}
        <section id="services" className="py-28 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-orange-500/60" />
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">What We Do</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-[56px] font-black tracking-tight leading-[1.06] mb-6 font-display max-w-3xl">
                Everything your business needs<br className="hidden md:block" /> to dominate online.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg max-w-xl leading-relaxed">
                Three powerful systems. One unified strategy. Built to make your competitors irrelevant.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Layers className="w-8 h-8" />,
                  color: "from-blue-500/10 to-transparent border-blue-500/15",
                  iconColor: "text-blue-400",
                  tag: "01",
                  title: "Brand & Website Systems",
                  desc: "We build premium digital identities — high-converting websites, strong brand positioning, and professional assets that make you impossible to ignore.",
                  items: ["High-converting website design", "Brand identity & positioning", "Logo & visual identity", "SEO-optimised architecture"]
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  color: "from-orange-500/10 to-transparent border-orange-500/15",
                  iconColor: "text-orange-400",
                  tag: "02",
                  title: "Marketing & Lead Generation",
                  desc: "We deploy precision marketing campaigns that target the right people at the right time — turning cold audiences into warm, ready-to-buy leads.",
                  items: ["Google Ads & SEO campaigns", "Meta & social media advertising", "Google Maps dominance", "WhatsApp lead integration"]
                },
                {
                  icon: <Bot className="w-8 h-8" />,
                  color: "from-green-500/10 to-transparent border-green-500/15",
                  iconColor: "text-green-400",
                  tag: "03",
                  title: "AI Automation & Optimisation",
                  desc: "We install intelligent automation systems that nurture leads, follow up on enquiries, and optimise your campaigns — 24/7, without you lifting a finger.",
                  items: ["AI-powered lead follow-up", "Automated review generation", "Performance analytics", "Continuous campaign optimisation"]
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative p-8 rounded-3xl border bg-gradient-to-b ${service.color} glass-card group hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-3 rounded-2xl bg-white/5 ${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <span className="text-white/10 font-black text-5xl font-display select-none">{service.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-8">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-white/60">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${service.iconColor}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ────────────────────────────────────── */}
        <section id="process" className="py-28 border-y border-white/5 bg-white/[0.015] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-orange-500/60" />
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">How It Works</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-[56px] font-black tracking-tight leading-[1.06] mb-6 font-display max-w-2xl">
                From zero to results in four clear steps.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg max-w-xl leading-relaxed">
                We make the process simple, transparent, and fast. Here's exactly what happens when you work with us.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* connector line */}
              <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent hidden lg:block" />

              {[
                { step: "01", icon: <Target className="w-6 h-6" />, title: "Strategy", desc: "We deep-dive into your business, market, and competitors to build a tailored growth blueprint.", color: "text-blue-400 bg-blue-500/10" },
                { step: "02", icon: <Layers className="w-6 h-6" />, title: "Build", desc: "We engineer your website, brand, and digital infrastructure to convert visitors into customers.", color: "text-orange-400 bg-orange-500/10" },
                { step: "03", icon: <Rocket className="w-6 h-6" />, title: "Launch", desc: "We deploy your campaigns, activate your systems, and go live — within 48 hours of approval.", color: "text-green-400 bg-green-500/10" },
                { step: "04", icon: <TrendingUp className="w-6 h-6" />, title: "Scale", desc: "We track every result, optimise every channel, and scale what's working — month after month.", color: "text-purple-400 bg-purple-500/10" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  className="flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="text-5xl font-black text-white/5 mb-4 font-display leading-none">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 font-display">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS ────────────────────────────────────── */}
        <section id="results" className="py-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-orange-500/60" />
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">Results</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-[56px] font-black tracking-tight leading-[1.06] mb-6 font-display max-w-2xl">
                Numbers that speak for themselves.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg max-w-xl leading-relaxed">
                We measure success by revenue generated, not vanity metrics.
              </motion.p>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
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
                  className="glass-card p-8 rounded-3xl border border-white/5"
                >
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 font-display">{stat.value}</div>
                  <p className="text-white/70 font-semibold text-sm mb-1.5">{stat.label}</p>
                  <p className="text-white/25 text-xs">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Before / After */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 border-b md:border-b-0 md:border-r border-white/5">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-red-400 font-bold text-xs uppercase tracking-widest">Before MANA AI</span>
                  </div>
                  <ul className="space-y-5">
                    {[
                      "Invisible on Google — buried on page 3+",
                      "Losing leads to competitors every day",
                      "No reviews, no trust, no calls",
                      "Website that doesn't convert visitors",
                      "Zero automated follow-up system"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white/35 text-sm">
                        <X className="w-4 h-4 text-red-500/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 bg-white/[0.015]">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-green-400 font-bold text-xs uppercase tracking-widest">After MANA AI</span>
                  </div>
                  <ul className="space-y-5">
                    {[
                      "Ranking Top 3 on Google Maps & Search",
                      "Steady stream of qualified inbound leads",
                      "20+ five-star reviews, visible and trusted",
                      "Website that converts visitors into customers",
                      "Automated systems working 24/7 for you"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PRICING ────────────────────────────────────── */}
        <section id="pricing" className="py-28 border-y border-white/5 bg-white/[0.015] relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mb-20 text-center"
            >
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-8 bg-orange-500/60" />
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">Pricing</span>
                <span className="h-px w-8 bg-orange-500/60" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-[56px] font-black tracking-tight leading-[1.06] mb-6 font-display">
                Simple. Transparent. No BS.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg max-w-xl mx-auto leading-relaxed">
                One new client covers the cost. Most businesses see ROI within the first week.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
              {/* Starter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border border-white/5 flex flex-col"
              >
                <div className="mb-8">
                  <p className="text-white/40 text-sm font-semibold mb-3">Starter</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black font-display">R3,500</span>
                  </div>
                  <p className="text-white/30 text-sm">once-off payment</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Full Google Profile Optimisation", "Trust & Reviews Setup", "1-Hour Strategy Call", "Basic SEO Configuration"].map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-white/25 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Button
                  data-testid="pricing-setup-cta"
                  onClick={() => scrollTo("contact")}
                  variant="outline"
                  className="w-full border-white/10 text-white/70 hover:bg-white/5 hover:text-white font-semibold py-5 h-auto rounded-xl"
                >
                  Get Started
                </Button>
              </motion.div>

              {/* Popular */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="gradient-border-animated glass-card rounded-3xl p-8 relative shadow-2xl shadow-orange-500/10 flex flex-col"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase glow-border">Most Popular</div>
                <div className="mb-8 mt-4">
                  <p className="text-orange-400 text-sm font-semibold mb-3">Growth</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black font-display">R4,500</span>
                  </div>
                  <p className="text-white/30 text-sm">30-day complete management</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Everything in Starter", "30 Days Active Management", "Review Generation System", "WhatsApp Lead Integration", "Weekly Performance Reports"].map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/80 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Button
                  data-testid="pricing-popular-cta"
                  onClick={() => scrollTo("contact")}
                  className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-5 h-auto rounded-xl glow-border btn-shimmer"
                >
                  Get Started Today
                </Button>
              </motion.div>

              {/* Scale */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border border-white/5 flex flex-col"
              >
                <div className="mb-8">
                  <p className="text-white/40 text-sm font-semibold mb-3">Scale</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black font-display">R2,500</span>
                    <span className="text-white/30 text-sm">/mo</span>
                  </div>
                  <p className="text-white/30 text-sm">ongoing retainer</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Continuous Optimisation", "Monthly Performance Reports", "Ongoing Content Updates", "Priority Support Channel"].map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-white/25 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Button
                  data-testid="pricing-growth-cta"
                  onClick={() => scrollTo("contact")}
                  variant="outline"
                  className="w-full border-white/10 text-white/70 hover:bg-white/5 hover:text-white font-semibold py-5 h-auto rounded-xl"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Full packages */}
            <div className="mt-20">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-2">Ready to go all-in?</h3>
                <p className="text-white/40">Complete growth packages for businesses serious about scaling.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
                    className="glass-card rounded-2xl p-7 border border-white/5 hover:border-orange-500/20 transition-all group"
                  >
                    <div className="inline-block text-orange-400/80 text-xs font-bold px-3 py-1 rounded-full bg-orange-500/8 border border-orange-500/15 mb-5">{pkg.tag}</div>
                    <h4 className="text-lg font-bold mb-1">{pkg.name}</h4>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-2xl font-black font-display">{pkg.price}</span>
                      <span className="text-white/30 text-xs">{pkg.note}</span>
                    </div>
                    <ul className="space-y-3 mb-7">
                      {pkg.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm text-white/50">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white/20 flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => scrollTo("contact")}
                      variant="outline"
                      className="w-full border-white/8 text-white/60 hover:bg-white/5 hover:text-white text-sm font-semibold py-4 h-auto rounded-xl"
                    >
                      Choose Package
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────── */}
        <section className="py-36 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/10" />
          </div>
          <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10 text-center">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
                <span className="h-px w-8 bg-orange-500/60" />
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">Ready to grow?</span>
                <span className="h-px w-8 bg-orange-500/60" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-5xl md:text-[72px] font-black tracking-tight leading-[1.04] mb-8 font-display">
                Stop losing clients online.<br />
                <span className="animated-gradient-text">Let's build your growth system.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Book a free 30-minute strategy call. We'll show you exactly how to outperform your competitors online — no commitment, no fluff.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollTo("contact")}
                  className="bg-white text-black hover:bg-white/90 font-black text-lg px-10 py-7 h-auto rounded-xl transition-all hover:scale-105 shadow-2xl shadow-white/10"
                >
                  Get Started — It's Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 text-green-400 hover:text-green-300 font-semibold text-base px-8 py-7 rounded-xl border border-green-500/20 hover:bg-green-500/5 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Or WhatsApp Us Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT FORM ───────────────────────────────── */}
        <section id="contact" className="py-24 relative">
          <div className="max-w-2xl mx-auto px-6 lg:px-10">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="text-center mb-12"
            >
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
                <span className="h-px w-8 bg-orange-500/60" />
                <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">Get in Touch</span>
                <span className="h-px w-8 bg-orange-500/60" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-[48px] font-black tracking-tight leading-tight mb-4 font-display">Get Your Free Growth Plan</motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 text-lg">Fill in your details and we'll reach out within 24 hours to build your personalised strategy.</motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 md:p-10 border border-white/5"
            >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/60 text-sm font-medium">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g. John Pietersen"
                      {...form.register("name")}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30 h-12 rounded-xl"
                    />
                    {form.formState.errors.name && <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/60 text-sm font-medium">WhatsApp Number</Label>
                    <Input
                      id="phone"
                      placeholder="+27 82 000 0000"
                      {...form.register("phone")}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30 h-12 rounded-xl"
                    />
                    {form.formState.errors.phone && <p className="text-red-400 text-xs">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-white/60 text-sm font-medium">Type of Business</Label>
                  <Controller
                    name="businessType"
                    control={form.control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl">
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0e1525] border-white/10">
                          {["Plumber", "Electrician", "Transport / Logistics", "Construction", "Cleaning Services", "Mechanic / Auto", "Restaurant / Food", "Retail Shop", "Health & Wellness", "Other Local Business"].map((biz) => (
                            <SelectItem key={biz} value={biz} className="text-white/80 focus:bg-white/10">{biz}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {form.formState.errors.businessType && <p className="text-red-400 text-xs">{form.formState.errors.businessType.message}</p>}
                </div>
                <Button
                  data-testid="contact-form-submit"
                  type="submit"
                  className="w-full bg-white text-black hover:bg-white/90 font-black text-base py-6 h-auto rounded-xl transition-all hover:scale-[1.02] shadow-2xl shadow-white/10"
                >
                  Book My Free Strategy Call
                </Button>
                <p className="text-center text-white/25 text-xs">
                  We'll reach out on WhatsApp within 24 hours. No spam, no commitment.
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/30">
                <a href="tel:+27760355295" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                  <PhoneCall className="w-4 h-4" /> +27 76 035 5295
                </a>
                <a href="mailto:jaun@manaai.co.za" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                  <Globe className="w-4 h-4" /> jaun@manaai.co.za
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-400/70 hover:text-green-400 transition-colors">
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-16 relative z-10 bg-[#060912]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
            <div className="md:col-span-2">
              <div className="mb-5 cursor-pointer inline-block" onClick={() => scrollTo("hero")}>
                <div className="h-14 w-14 overflow-hidden" style={{ mixBlendMode: "screen", filter: "invert(1)" }}>
                  <img src={logoMarkImg} alt="MANA AI" className="h-full w-full object-contain" draggable={false} />
                </div>
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-5">
                An AI-powered digital growth agency that builds high-converting online systems for businesses.
              </p>
              <p className="text-white/20 text-sm italic">"Still Marketing, But Different"</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Navigate</h4>
              <div className="space-y-3">
                {[["What We Do", "services"], ["Process", "process"], ["Results", "results"], ["Pricing", "pricing"], ["Contact", "contact"]].map(([label, id]) => (
                  <button key={id} onClick={() => scrollTo(id)} className="block text-white/30 hover:text-white/80 transition-colors text-sm">{label}</button>
                ))}
                <button onClick={() => setLocation("/services")} className="block text-white/30 hover:text-white/80 transition-colors text-sm">Portfolio</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-3 text-sm text-white/30">
                <p>📞 +27 76 035 5295</p>
                <p>✉️ jaun@manaai.co.za</p>
                <p>🌐 www.manaai.co.za</p>
                <p>📍 South Africa</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-400/70 hover:text-green-400 transition-colors font-semibold pt-2">
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/15 text-sm">© {new Date().getFullYear()} MANA AI. All rights reserved.</p>
            <p className="text-white/10 text-xs">South Africa · @mana_ai_agency</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}
