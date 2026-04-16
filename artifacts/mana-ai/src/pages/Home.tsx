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
  Menu, X, CheckCircle2, TrendingUp, Search, MessageSquare,
  Star, PhoneCall, Zap, MapPin, Globe, ShieldCheck, Clock, ArrowRight, Users
} from "lucide-react";
import heroOwnerImg from "@assets/generated_images/hero-owner.png";
import googleMapsImg from "@assets/generated_images/google-maps-ranking.png";
import logoMarkImg from "@assets/WhatsApp_Image_2026-04-09_at_2.16.49_PM-removebg-preview_1776323782832.png";

const WHATSAPP_URL = "https://wa.me/27760355295";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
});

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
      title: "Success! We'll be in touch shortly.",
      description: "Thanks for requesting a demo. We'll contact you on WhatsApp within 24 hours.",
    });
    form.reset();
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-100 z-0"></div>
      <div className="fixed top-[-15%] left-[-8%] w-[45%] h-[45%] rounded-full bg-blue-700/15 blur-[130px] pointer-events-none z-0 blob-animate"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-800/10 blur-[140px] pointer-events-none z-0 blob-animate-2"></div>
      <div className="fixed top-0 right-0 w-[30%] h-[30%] rounded-full bg-orange-500/8 blur-[100px] pointer-events-none z-0 blob-animate-3"></div>

      {/* STICKY NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[hsl(220,50%,6%)]/90 backdrop-blur-md border-b border-blue-900/40" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-2.5" onClick={() => scrollTo("hero")}>
              <div className="logo-blend h-11 w-11 flex-shrink-0 overflow-hidden">
                <img src={logoMarkImg} alt="MANA AI" className="h-full w-full object-contain" draggable={false} />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white glow-text font-display">MANA <span className="text-blue-400">AI</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <button onClick={() => scrollTo("problem")} className="text-blue-200/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">The Problem</button>
              <button onClick={() => scrollTo("solution")} className="text-blue-200/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</button>
              <button onClick={() => scrollTo("pricing")} className="text-blue-200/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</button>
              <button onClick={() => setLocation("/services")} className="text-blue-200/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</button>
              <Button data-testid="nav-cta" onClick={() => scrollTo("contact")} className="ml-4 bg-primary hover:bg-primary/90 text-white font-semibold glow-border transition-all shadow-lg">
                Get Free Demo
              </Button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                data-testid="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-3 rounded-md text-blue-300 hover:text-white hover:bg-blue-900/30 focus:outline-none"
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[hsl(220,50%,6%)]/98 backdrop-blur-lg border-b border-blue-900/40 absolute w-full shadow-2xl">
            <div className="px-4 pt-3 pb-5 space-y-1">
              <button onClick={() => { scrollTo("problem"); setIsMobileMenuOpen(false); }} className="text-blue-200 hover:text-white flex items-center px-4 py-4 rounded-xl text-base font-medium w-full text-left hover:bg-blue-900/30 transition-colors">The Problem</button>
              <button onClick={() => { scrollTo("solution"); setIsMobileMenuOpen(false); }} className="text-blue-200 hover:text-white flex items-center px-4 py-4 rounded-xl text-base font-medium w-full text-left hover:bg-blue-900/30 transition-colors">How It Works</button>
              <button onClick={() => { scrollTo("pricing"); setIsMobileMenuOpen(false); }} className="text-blue-200 hover:text-white flex items-center px-4 py-4 rounded-xl text-base font-medium w-full text-left hover:bg-blue-900/30 transition-colors">Pricing</button>
              <button onClick={() => { setLocation("/services"); setIsMobileMenuOpen(false); }} className="text-blue-200 hover:text-white flex items-center px-4 py-4 rounded-xl text-base font-medium w-full text-left hover:bg-blue-900/30 transition-colors">Services</button>
              <div className="pt-2 pb-1">
                <Button onClick={() => { scrollTo("contact"); setIsMobileMenuOpen(false); }} className="w-full bg-primary hover:bg-orange-500 glow-border text-lg py-6 btn-shimmer">Get My Free Demo</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20">

        {/* HERO */}
        <section id="hero" className="relative min-h-[92vh] flex items-center pt-10 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-2xl">
                <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 badge-active">
                  <span className="live-dot"></span>
                  Cape Town's #1 AI Marketing Agency
                </motion.div>
                <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 font-display leading-[1.08]">
                  If Customers Can't Find You on Google in Cape Town,{" "}
                  <span className="animated-gradient-text">You're Losing Money Every Day.</span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-xl text-blue-200/70 mb-8 leading-relaxed">
                  You're busy running your business. We make sure customers actually find you, trust you, and call you.
                </motion.p>
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex flex-col items-start gap-1">
                    <Button
                      data-testid="hero-primary-cta"
                      size="lg"
                      onClick={() => scrollTo("contact")}
                      className="bg-primary hover:bg-orange-500 text-white font-bold text-lg px-8 py-6 rounded-xl glow-border shadow-xl transition-all hover:scale-105 btn-shimmer"
                    >
                      Get My Free Demo Today
                    </Button>
                    <span className="text-xs text-orange-400/80 font-medium pl-1">48-hour setup • Limited spots this week</span>
                  </div>
                  <Button
                    data-testid="hero-secondary-cta"
                    size="lg"
                    variant="outline"
                    onClick={() => scrollTo("solution")}
                    className="text-white border-blue-700/40 hover:bg-blue-900/40 font-bold text-lg px-8 py-6 rounded-xl transition-all"
                  >
                    See How It Works
                  </Button>
                </motion.div>
                <motion.div variants={fadeIn} className="mb-8">
                  <p className="text-sm text-blue-300/60">
                    Prefer WhatsApp?{" "}
                    <a data-testid="hero-whatsapp-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors font-medium">
                      Get a quick response instantly.
                    </a>
                  </p>
                </motion.div>
                <motion.div variants={fadeIn} className="flex flex-col items-start space-y-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-sm text-blue-200/60 ml-2">Trusted by local Cape Town businesses</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-blue-300/50 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-400" /> FAST SETUP</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-400" /> REAL RESULTS</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-400" /> NO LONG-TERM CONTRACTS</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-700/20">
                  <img
                    src={heroOwnerImg}
                    alt="Local business owner growing their business online"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ maxHeight: "520px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,50%,6%)] via-transparent to-transparent opacity-60 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[hsl(220,50%,6%)]/40 rounded-2xl"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute -bottom-4 -left-6 glass-card p-4 rounded-xl flex items-center space-x-3 shadow-2xl border border-green-500/20"
                >
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">New WhatsApp Lead</p>
                    <p className="text-xs text-blue-200/60">"Looking for a plumber in Bellville"</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute -top-4 -right-4 glass-card p-4 rounded-xl flex items-center space-x-3 shadow-2xl border border-blue-500/20"
                >
                  <div className="bg-blue-500/20 p-2 rounded-full">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Ranking #1</p>
                    <p className="text-xs text-blue-200/60">Electrician Cape Town</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST BAND */}
        <section className="py-10 bg-blue-950/40 border-y border-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 text-center"
            >
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-blue-100 font-medium">Trusted by local businesses in Cape Town</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-blue-700/40"></div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                <span className="text-blue-200/60 text-sm ml-1">5.0 from satisfied clients</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-blue-700/40"></div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 font-medium">No long-term contracts. Real results.</span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mt-5 text-blue-300/50 text-sm italic max-w-2xl mx-auto"
            >
              "We work with real local businesses — not big corporations — so everything is built to get you actual customers."
            </motion.p>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Sound Familiar?</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">Running a local business is hard enough without struggling to find customers online.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
              {[
                { icon: <Search className="w-8 h-8 text-red-400" />, title: "People can't find you on Google", desc: "When someone searches for your service, your competitors show up — you don't." },
                { icon: <TrendingUp className="w-8 h-8 text-red-400" />, title: "Competitors show up before you", desc: "Other businesses with worse service are getting the calls that should be yours." },
                { icon: <MessageSquare className="w-8 h-8 text-red-400" />, title: "Relying only on word of mouth", desc: "It's great, but it's not predictable or scalable enough to grow your business." },
                { icon: <ShieldCheck className="w-8 h-8 text-red-400" />, title: "Your business doesn't look trustworthy online", desc: "No reviews, outdated info, or no website makes customers hesitate and call someone else." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  data-testid={`problem-card-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 rounded-2xl border-red-500/10 hover:border-red-500/25 transition-all group"
                >
                  <div className="bg-red-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-200/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="solution" className="py-14 md:py-24 bg-blue-950/30 border-y border-blue-900/25 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">How It Works</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">We set everything up for you. You just answer the phone.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {[
                { step: "01", icon: <Search className="w-8 h-8 text-blue-400" />, title: "We Audit Your Online Presence", desc: "We find exactly why customers can't find you — broken profiles, missing keywords, no reviews, wrong info.", color: "border-blue-500/30 bg-blue-500/5" },
                { step: "02", icon: <Zap className="w-8 h-8 text-orange-400" />, title: "We Build & Optimize Everything", desc: "Google Maps, website, reviews, social — all set up and optimized within 48 hours. You approve, we execute.", color: "border-orange-500/30 bg-orange-500/5" },
                { step: "03", icon: <PhoneCall className="w-8 h-8 text-green-400" />, title: "Your Phone Starts Ringing", desc: "More calls, more WhatsApp messages, more customers. We track results and keep improving month after month.", color: "border-green-500/30 bg-green-500/5" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`glass-card p-8 rounded-2xl border relative ${step.color}`}
                >
                  <div className="text-6xl font-black text-white/5 absolute top-4 right-6 font-display select-none">{step.step}</div>
                  <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-blue-200/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Google Maps proof image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card rounded-2xl overflow-hidden border border-blue-700/20">
                <div className="p-4 border-b border-blue-900/30 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                  </div>
                  <div className="flex-1 bg-blue-950/60 rounded-md px-3 py-1 text-xs text-blue-300/60">google.com/maps</div>
                </div>
                <img src={googleMapsImg} alt="Google Maps ranking results" className="w-full h-auto object-cover" />
              </div>
              <p className="text-center text-blue-300/50 text-sm mt-4 italic">Real results: clients ranking in the Top 3 on Google Maps</p>
            </motion.div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-14 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Results That Actually Matter</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">We measure success by how many times your phone rings — not meaningless metrics.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { label: "More calls within 30 days (depending on industry)", value: "+40–150%", sub: "Real phone calls from real customers", icon: <PhoneCall className="w-6 h-6 text-blue-400" /> },
                { label: "Google Maps visibility improvement within weeks", value: "Top 3", sub: "Showing up where customers are looking", icon: <MapPin className="w-6 h-6 text-blue-400" /> },
                { label: "More calls, messages & customer trust", value: "24/7", sub: "Your business working while you sleep", icon: <ShieldCheck className="w-6 h-6 text-blue-400" /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  data-testid={`result-stat-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-center border-blue-700/15 stat-card card-hover-glow"
                >
                  <div className="bg-blue-500/10 p-4 rounded-full mb-6">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">{stat.value}</div>
                  <p className="text-blue-200/70 font-medium mb-1">{stat.label}</p>
                  <p className="text-xs text-blue-300/40">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Before / After */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden border border-blue-800/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-r border-blue-900/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Before MANA AI</span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Hidden on page 3 of Google",
                      "Losing calls to competitors daily",
                      "No online reviews or trust signals",
                      "Inconsistent or missing business info",
                      "Zero WhatsApp leads from Google"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-blue-200/50">
                        <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-green-400 font-bold text-sm uppercase tracking-wider">After MANA AI</span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Top 3 on Google Maps in your area",
                      "20+ 5-star reviews visible",
                      "Customers calling you first",
                      "Steady WhatsApp inquiries daily",
                      "Your competitors losing to YOU"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-blue-100">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY MANA AI */}
        <section className="py-14 md:py-24 bg-blue-950/30 border-y border-blue-900/25 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Why Local Businesses Choose Us</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">You focus on running your business. We make sure customers find you and call you.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { title: "AI That Works for You 24/7", desc: "Your business gets optimized continuously using smart technology, so customers can find you anytime — while you sleep.", icon: <Zap className="w-10 h-10 text-blue-400" />, accent: "bg-blue-500/10 border-blue-700/20" },
                { title: "More Calls, Not Just Clicks", desc: "We focus on real leads: actual phone calls, WhatsApp messages, and direct bookings from local customers ready to buy.", icon: <PhoneCall className="w-10 h-10 text-green-400" />, accent: "bg-green-500/10 border-green-700/20" },
                { title: "Built for Local Businesses", desc: "Everything designed specifically for your service area and your customers. No cookie-cutter solutions — only what actually works.", icon: <Globe className="w-10 h-10 text-orange-400" />, accent: "bg-orange-500/10 border-orange-700/20" }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card border p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all ${card.accent}`}
                >
                  <div className="mb-6 p-3 inline-block rounded-xl bg-white/5">{card.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-blue-200/60 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">Even 1–2 extra customers can cover this cost. Most clients see results in the first week.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border border-blue-800/30"
              >
                <h3 className="text-xl font-bold text-blue-200 mb-2">Setup Only</h3>
                <div className="text-4xl font-black text-white mb-1 font-display">R3,500</div>
                <p className="text-blue-300/50 text-sm mb-6">one-time payment</p>
                <ul className="space-y-4 mb-8">
                  {["Full Google Profile Optimization", "Trust Elements Setup", "1-Hour Strategy Call", "Basic SEO Optimization"].map((item, j) => (
                    <li key={j} className="flex items-center text-blue-100/80"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" /> {item}</li>
                  ))}
                </ul>
                <Button data-testid="pricing-setup-cta" className="w-full bg-blue-900/50 hover:bg-blue-800/60 text-white border border-blue-700/30" variant="outline" onClick={() => scrollTo("contact")}>Get Started</Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="gradient-border-animated glass-card rounded-3xl p-8 relative mt-8 md:mt-0 transform md:-translate-y-4 shadow-2xl shadow-orange-500/20"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider glow-border btn-shimmer">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-orange-400 mb-2 mt-4">Full 30-Day Support</h3>
                <div className="text-4xl font-black text-white mb-1 font-display">R4,500</div>
                <p className="text-blue-300/50 text-sm mb-6">complete 30-day management</p>
                <ul className="space-y-4 mb-8">
                  {["Everything in Setup", "30 Days Active Management", "Review Generation System", "WhatsApp Lead Integration", "Weekly Progress Reports"].map((item, j) => (
                    <li key={j} className="flex items-center text-blue-100"><CheckCircle2 className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" /> {item}</li>
                  ))}
                </ul>
                <Button data-testid="pricing-popular-cta" className="w-full bg-primary hover:bg-orange-500 text-white glow-border text-lg py-6" onClick={() => scrollTo("contact")}>Get Started Today</Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border border-blue-800/30"
              >
                <h3 className="text-xl font-bold text-blue-200 mb-2">Ongoing Growth</h3>
                <div className="text-4xl font-black text-white mb-1 font-display">R2,500</div>
                <p className="text-blue-300/50 text-sm mb-6">per month</p>
                <ul className="space-y-4 mb-8">
                  {["Continuous Optimization", "Monthly Performance Reports", "Ongoing Content Updates", "Priority Support"].map((item, j) => (
                    <li key={j} className="flex items-center text-blue-100/80"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /> {item}</li>
                  ))}
                </ul>
                <Button data-testid="pricing-growth-cta" className="w-full bg-blue-900/50 hover:bg-blue-800/60 text-white border border-blue-700/30" variant="outline" onClick={() => scrollTo("contact")}>Get Started</Button>
              </motion.div>
            </div>

            {/* Scale Packages */}
            <div className="mt-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Dominate Your Market?</h3>
                <p className="text-blue-200/60">For businesses ready to grow faster and scale their presence.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "Launch Package", price: "R6,500", note: "once-off", badge: "Best for startups", items: ["1-page website", "SEO setup", "Logo design", "Social media setup", "Google Business Profile"] },
                  { name: "Growth Package", price: "R9,800", note: "+ R3,500/month", badge: "Best for growing businesses", items: ["3-page website", "Full SEO campaign", "Google & Meta Ads", "Social media content", "Monthly reporting"] },
                  { name: "Premium Package", price: "R18,500", note: "+ R6,500/month", badge: "Best for scaling brands", items: ["5+ page website", "AI chatbot", "Full ad management", "Email marketing", "Priority support"] }
                ].map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-2xl p-6 border border-blue-800/25 hover:border-orange-500/30 transition-all group"
                  >
                    <div className="inline-block bg-blue-500/10 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-4">{pkg.badge}</div>
                    <h4 className="text-lg font-bold text-white mb-1">{pkg.name}</h4>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-black text-white font-display">{pkg.price}</span>
                      <span className="text-blue-300/50 text-xs">{pkg.note}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-blue-100/80"><CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />{item}</li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-900/50 hover:bg-blue-800/60 text-white border border-blue-700/30" variant="outline" onClick={() => scrollTo("contact")}>Choose Package</Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="py-14 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-background to-orange-950/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto glass-card border border-orange-500/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-orange-500/5">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Ready to Start Getting More Calls?</h2>
                <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">Book your free demo and see exactly how we help Cape Town businesses win more customers online.</p>
              </div>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-200 font-medium">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g. John Pietersen"
                      {...form.register("name")}
                      className="bg-blue-950/40 border-blue-800/40 text-white placeholder:text-blue-400/30 focus:border-blue-500/60 h-12"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-200 font-medium">WhatsApp Number</Label>
                    <Input
                      id="phone"
                      placeholder="+27 82 000 0000"
                      {...form.register("phone")}
                      className="bg-blue-950/40 border-blue-800/40 text-white placeholder:text-blue-400/30 focus:border-blue-500/60 h-12"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-400 text-xs">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-blue-200 font-medium">Type of Business</Label>
                  <Controller
                    name="businessType"
                    control={form.control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="bg-blue-950/40 border-blue-800/40 text-white h-12">
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[hsl(220,50%,8%)] border-blue-800/40">
                          {["Plumber", "Electrician", "Transport / Logistics", "Construction", "Cleaning Services", "Mechanic / Auto", "Restaurant / Food", "Retail Shop", "Health & Wellness", "Other Local Business"].map((biz) => (
                            <SelectItem key={biz} value={biz} className="text-blue-100 focus:bg-blue-900/40">{biz}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {form.formState.errors.businessType && (
                    <p className="text-red-400 text-xs">{form.formState.errors.businessType.message}</p>
                  )}
                </div>
                <Button
                  data-testid="contact-form-submit"
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-orange-500 text-white font-bold text-lg py-7 rounded-xl glow-border shadow-xl transition-all hover:scale-[1.02] btn-shimmer"
                >
                  Book My Free Demo — No Commitment
                </Button>
                <p className="text-center text-blue-300/40 text-sm">
                  We'll reach out on WhatsApp within 24 hours. No spam, ever.
                </p>
              </form>
              <div className="mt-8 pt-8 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-300/50">
                <a href={`tel:+27760355295`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <PhoneCall className="w-4 h-4 text-blue-400" /> +27 76 035 5295
                </a>
                <a href={`mailto:jaun@manaai.co.za`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Globe className="w-4 h-4 text-blue-400" /> jaun@manaai.co.za
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium">
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[hsl(220,50%,4%)] border-t border-blue-900/30 py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4 cursor-pointer" onClick={() => scrollTo("hero")}>
                <div className="logo-blend h-10 w-10 overflow-hidden">
                  <img src={logoMarkImg} alt="MANA AI" className="h-full w-full object-contain" draggable={false} />
                </div>
                <span className="text-xl font-bold text-white font-display">MANA <span className="text-blue-400">AI</span></span>
              </div>
              <p className="text-blue-300/50 text-sm leading-relaxed max-w-xs mb-4">
                AI-driven digital marketing for local South African businesses. We help you get found, get trusted, and get customers.
              </p>
              <p className="text-blue-300/40 text-sm italic">"Still Marketing, But Different"</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                {[["The Problem", "problem"], ["How It Works", "solution"], ["Pricing", "pricing"], ["Contact", "contact"]].map(([label, id]) => (
                  <button key={id} onClick={() => scrollTo(id)} className="block text-blue-300/50 hover:text-white transition-colors">{label}</button>
                ))}
                <button onClick={() => setLocation("/services")} className="block text-blue-300/50 hover:text-white transition-colors">Services & Portfolio</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm text-blue-300/50">
                <p>📞 +27 76 035 5295</p>
                <p>✉️ jaun@manaai.co.za</p>
                <p>🌐 www.manaai.co.za</p>
                <p>📍 Cape Town, South Africa</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium pt-2">
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300/30 text-sm">© {new Date().getFullYear()} MANA AI. All rights reserved.</p>
            <p className="text-blue-300/20 text-xs">Cape Town, South Africa · @mana_ai_agency</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}
