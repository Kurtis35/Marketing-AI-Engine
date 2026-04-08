import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Menu, X, CheckCircle2, TrendingUp, Search, MessageSquare, 
  Star, PhoneCall, Zap, MapPin, Globe, ShieldCheck, Clock 
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
});

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      businessType: "",
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Success! We'll be in touch soon.",
      description: "Thanks for requesting a demo. We'll contact you on WhatsApp.",
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
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-30 z-0"></div>
      
      {/* Decorative Gradients */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/40 blur-[120px] pointer-events-none z-0"></div>

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('hero')}>
              <span className="text-2xl font-bold tracking-tighter text-white glow-text font-display">MANA <span className="text-primary">AI</span></span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollTo('problem')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">The Problem</button>
                <button onClick={() => scrollTo('solution')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</button>
                <button onClick={() => scrollTo('pricing')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</button>
                <Button onClick={() => scrollTo('contact')} className="bg-primary hover:bg-primary/90 text-white font-semibold glow-border transition-all shadow-lg hover:shadow-primary/50">
                  Get Free Demo
                </Button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollTo('problem')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">The Problem</button>
              <button onClick={() => scrollTo('solution')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">How It Works</button>
              <button onClick={() => scrollTo('pricing')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Pricing</button>
              <Button onClick={() => scrollTo('contact')} className="w-full mt-4 bg-primary hover:bg-primary/90">Get Free Demo</Button>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div initial="hidden" animate="show" variants={staggerContainer}>
                <motion.div variants={fadeIn} className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Zap className="mr-2 h-4 w-4" /> 
                  Cape Town's #1 AI Marketing Agency
                </motion.div>
                
                <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 font-display leading-tight">
                  If Customers Can't Find You on Google in Cape Town, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">You're Losing Money Every Day.</span>
                </motion.h1>
                
                <motion.p variants={fadeIn} className="mt-4 text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                  You're busy running your business. We make sure customers actually find you, trust you, and call you.
                </motion.p>
                
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                  <Button size="lg" onClick={() => scrollTo('contact')} className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-xl glow-border shadow-lg shadow-primary/30 transition-all hover:scale-105">
                    Get My Free Demo
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollTo('solution')} className="text-white border-white/20 hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-xl transition-all glass-card">
                    See How It Works
                  </Button>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex flex-col items-center justify-center space-y-4">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                    Helping local businesses get more calls & customers
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    <span>FAST SETUP</span>
                    <span className="hidden sm:inline">•</span>
                    <span>REAL RESULTS</span>
                    <span className="hidden sm:inline">•</span>
                    <span>NO LONG-TERM CONTRACTS</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Floating Elements (Hero) */}
            <div className="absolute top-1/4 left-10 md:left-20 hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5, duration: 0.8 }}
                className="glass-card p-4 rounded-xl flex items-center space-x-3 shadow-2xl"
              >
                <div className="bg-green-500/20 p-2 rounded-full">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">WhatsApp Lead</p>
                  <p className="text-xs text-gray-400">Just received now</p>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-1/4 right-10 md:right-20 hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.7, duration: 0.8 }}
                className="glass-card p-4 rounded-xl flex items-center space-x-3 shadow-2xl"
              >
                <div className="bg-primary/20 p-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Ranking #1</p>
                  <p className="text-xs text-gray-400">Plumber Cape Town</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section id="problem" className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Sound Familiar?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Running a local business is hard enough without struggling to find customers online.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
              {[
                { icon: <Search className="w-8 h-8 text-red-400" />, title: "People can't find you on Google", desc: "When someone searches for your service, you're nowhere to be seen." },
                { icon: <TrendingUp className="w-8 h-8 text-red-400" />, title: "Competitors show up before you", desc: "Other businesses with worse service are getting the calls." },
                { icon: <MessageSquare className="w-8 h-8 text-red-400" />, title: "Relying only on word of mouth", desc: "It's great, but it's not predictable or scalable enough to grow." },
                { icon: <ShieldCheck className="w-8 h-8 text-red-400" />, title: "Your business doesn't look trustworthy online", desc: "No reviews, outdated info, or no website makes people hesitate." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 rounded-2xl border-red-500/10 hover:border-red-500/30 transition-all group"
                >
                  <div className="bg-red-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                This is where most local businesses lose customers every day.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section id="solution" className="py-24 bg-black/40 border-y border-white/5 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">30-Day Online Presence Boost</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">We handle the technical stuff so you can focus on the work.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  { num: "01", title: "Optimize Google profile", desc: "We ensure you show up high on Google Maps when locals search." },
                  { num: "02", title: "Improve or build website", desc: "Fast, mobile-friendly pages designed to convert visitors to leads." },
                  { num: "03", title: "Add trust elements", desc: "Review management and trust badges so customers choose you." },
                  { num: "04", title: "Set up active content", desc: "Consistent updates showing you're open, active, and professional." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold font-display text-lg">
                        {item.num}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px]"></div>
                <h3 className="text-2xl font-bold text-white mb-8 font-display">Your Timeline to More Calls</h3>
                
                <div className="relative border-l-2 border-primary/30 ml-4 space-y-8 pb-4">
                  <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary glow-border"></div>
                    <h4 className="text-lg font-bold text-white">Day 1-2: Setup</h4>
                    <p className="text-gray-400 text-sm mt-1">We audit, fix, and optimize your entire digital footprint.</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary glow-border"></div>
                    <h4 className="text-lg font-bold text-white">Day 3: Live</h4>
                    <p className="text-gray-400 text-sm mt-1">New assets deployed. Google starts indexing changes.</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500 glow-border" style={{boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)'}}></div>
                    <h4 className="text-lg font-bold text-green-400">Day 30: Results</h4>
                    <p className="text-gray-400 text-sm mt-1">More visibility, more trust, and more direct calls/messages.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Real Outcomes. Not Just Traffic.</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">We measure success by the amount of the phone rings, not meaningless metrics.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Increase in calls within 30 days", value: "+40–150%", icon: <PhoneCall className="w-6 h-6 text-primary" /> },
                { label: "Improved Google Maps visibility", value: "Top 3", icon: <MapPin className="w-6 h-6 text-primary" /> },
                { label: "More customer trust and inquiries", value: "24/7", icon: <ShieldCheck className="w-6 h-6 text-primary" /> }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-center border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-2"
                >
                  <div className="bg-primary/10 p-4 rounded-full mb-6">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">{stat.value}</div>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MANA AI */}
        <section className="py-24 bg-secondary/20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { title: "AI That Works for You 24/7", desc: "Your business gets optimized continuously using smart technology, while you sleep.", icon: <Zap className="w-10 h-10 text-blue-400" /> },
                { title: "More Calls, Not Just Clicks", desc: "We focus on real leads: actual phone calls, WhatsApp messages, and direct bookings.", icon: <PhoneCall className="w-10 h-10 text-green-400" /> },
                { title: "Built for Local Businesses", desc: "Everything designed specifically for your service area and your type of customers.", icon: <Globe className="w-10 h-10 text-purple-400" /> }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-white/5 p-8 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {card.icon}
                  </div>
                  <div className="mb-6">{card.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Even 1–2 extra customers can cover this cost.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {/* Basic */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold text-gray-300 mb-2">Setup Only</h3>
                <div className="text-4xl font-black text-white mb-6 font-display">R2,500 <span className="text-sm font-normal text-gray-500">one-time</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Full Google Profile Optimization</li>
                  <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Basic Trust Elements Setup</li>
                  <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> 1-Hour Strategy Call</li>
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white" variant="outline" onClick={() => scrollTo('contact')}>Get Started</Button>
              </motion.div>

              {/* Popular */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border-2 border-primary relative transform md:-translate-y-4 shadow-2xl shadow-primary/20"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-primary mb-2 mt-4">30-Day Support</h3>
                <div className="text-4xl font-black text-white mb-6 font-display">R3,500 <span className="text-sm font-normal text-gray-500">full support</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-200"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Everything in Setup</li>
                  <li className="flex items-center text-gray-200"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> 30 Days Active Management</li>
                  <li className="flex items-center text-gray-200"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Review Generation System</li>
                  <li className="flex items-center text-gray-200"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> WhatsApp Lead Integration</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white glow-border text-lg py-6" onClick={() => scrollTo('contact')}>Get Started</Button>
              </motion.div>

              {/* Growth */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold text-gray-300 mb-2">Growth</h3>
                <div className="text-4xl font-black text-white mb-6 font-display">R1,500 <span className="text-sm font-normal text-gray-500">/ month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Continuous Optimization</li>
                  <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Monthly Performance Reports</li>
                  <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> Ongoing Content Updates</li>
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white" variant="outline" onClick={() => scrollTo('contact')}>Get Started</Button>
              </motion.div>
            </div>

            {/* Premium Packages Mention */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Ready to Dominate Your Market?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-black/50 border border-white/10 rounded-full px-6 py-3">Launch: R6,500</div>
                <div className="bg-black/50 border border-white/10 rounded-full px-6 py-3">Growth+: R9,800</div>
                <div className="bg-primary/20 border border-primary/30 rounded-full px-6 py-3 text-white font-semibold">Premium: R18,500</div>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE SECTION */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto glass-card border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Let's Get You More Customers in the Next 30 Days</h2>
                <p className="text-red-400 font-bold uppercase tracking-wider text-sm flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" /> Limited spots available this month
                </p>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && <p className="text-red-400 text-sm">{form.formState.errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">Phone / WhatsApp Number</Label>
                    <Input 
                      id="phone" 
                      placeholder="082 000 0000" 
                      className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary"
                      {...form.register("phone")}
                    />
                    {form.formState.errors.phone && <p className="text-red-400 text-sm">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Business Type</Label>
                  <Controller
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="bg-black/50 border-white/10 text-white focus:ring-primary">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d0d1a] border-white/10 text-white">
                          <SelectItem value="plumber">Plumber</SelectItem>
                          <SelectItem value="electrician">Electrician</SelectItem>
                          <SelectItem value="transport">Transport / Logistics</SelectItem>
                          <SelectItem value="contractor">Building / Contractor</SelectItem>
                          <SelectItem value="other">Other Local Business</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {form.formState.errors.businessType && <p className="text-red-400 text-sm">{form.formState.errors.businessType.message}</p>}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-xl glow-border shadow-lg shadow-primary/30 transition-all hover:scale-105"
                  >
                    Get My Free Demo
                  </Button>
                  <span className="text-gray-500">or</span>
                  <a 
                    href="https://wa.me/27000000000" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 text-green-400 border border-green-500/30 hover:bg-green-500/10 px-8 py-3.5 rounded-xl font-bold transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold tracking-tighter text-white font-display mb-4 block">MANA <span className="text-primary">AI</span></span>
              <p className="text-gray-500 max-w-sm">Premium AI-driven marketing for South African local businesses. We make sure customers find you, trust you, and call you.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollTo('problem')} className="text-gray-500 hover:text-white transition-colors">The Problem</button></li>
                <li><button onClick={() => scrollTo('solution')} className="text-gray-500 hover:text-white transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollTo('pricing')} className="text-gray-500 hover:text-white transition-colors">Pricing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <a href="https://wa.me/27000000000" target="_blank" rel="noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition-colors mb-2">
                <MessageSquare className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </a>
              <p className="text-gray-500 text-sm mt-4">Cape Town, South Africa</p>
            </div>
          </div>
            
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Evermore Digital Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/27000000000" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-8 h-8" />
      </a>
    </div>
  );
}
