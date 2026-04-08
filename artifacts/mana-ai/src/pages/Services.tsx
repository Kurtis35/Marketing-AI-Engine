import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Globe, Search, Star, MessageSquare, BarChart2, Bot, Mail,
  CheckCircle2, Zap, ArrowLeft, ArrowRight, Monitor, Palette
} from "lucide-react";
import abstractImg from "@assets/generated_images/digital-marketing-abstract.png";

const WHATSAPP_URL = "https://wa.me/27000000000";

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

const PORTFOLIO = [
  { name: "Cape Plumbing Co.", industry: "Plumbing", result: "+120% calls in 30 days" },
  { name: "Voltline Electrical", industry: "Electrical", result: "Ranked #1 in 3 areas" },
  { name: "Swift Transport Solutions", industry: "Transport", result: "+80% more WhatsApp leads" },
  { name: "BuildRight Contractors", industry: "Construction", result: "30 new reviews in 2 weeks" },
  { name: "SparkFix Auto", industry: "Automotive", result: "Top 3 Google Maps ranking" },
  { name: "CleanPro Services", industry: "Cleaning", result: "Tripled website traffic" }
];

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-100 z-0"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-800/10 blur-[130px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[140px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[hsl(220,50%,6%)]/90 backdrop-blur-md border-b border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button data-testid="services-logo" onClick={() => setLocation("/")} className="text-2xl font-bold tracking-tighter text-white glow-text font-display">
              MANA <span className="text-blue-400">AI</span>
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

        {/* HEADER with abstract image background */}
        <section className="py-24 relative overflow-hidden">
          {/* Abstract background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={abstractImg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,50%,6%)]/60 via-[hsl(220,50%,6%)]/70 to-[hsl(220,50%,6%)]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial="hidden" animate="show" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-6">
                <Globe className="mr-2 h-4 w-4" /> Full-Service Digital Marketing
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-display leading-tight max-w-4xl mx-auto">
                Everything You Need to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Grow Your Business Online</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-blue-200/60 max-w-2xl mx-auto mb-10">
                From websites to AI-powered marketing systems — we build everything you need to get more customers.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  data-testid="services-header-cta"
                  size="lg"
                  onClick={() => setLocation("/")}
                  className="bg-primary hover:bg-orange-500 text-white font-bold px-8 py-5 rounded-xl glow-border shadow-xl transition-all hover:scale-105"
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

        {/* PORTFOLIO */}
        <section className="py-24 bg-blue-950/30 border-y border-blue-900/25">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Businesses We've Helped</h2>
              <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">Real local businesses getting real results across Cape Town and surrounds.</p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {PORTFOLIO.map((item, i) => (
                <motion.div
                  key={i}
                  data-testid={`portfolio-card-${i}`}
                  variants={fadeIn}
                  className="glass-card rounded-2xl p-8 border border-blue-800/20 hover:border-orange-500/20 transition-all group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-[40px]"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-blue-900/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-700/20">
                      <Globe className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-blue-300/50 text-sm mb-4">{item.industry}</p>
                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2 inline-flex">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                      <p className="text-green-400 font-semibold text-sm">{item.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <button onClick={() => setLocation("/")} className="text-2xl font-bold tracking-tighter text-white font-display">
              MANA <span className="text-blue-400">AI</span>
            </button>
            <p className="text-blue-300/30 text-sm">© {new Date().getFullYear()} Evermore Digital Solutions. All rights reserved.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
              <MessageSquare className="w-4 h-4 mr-2" /> Chat on WhatsApp
            </a>
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
