import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Target, 
  Globe2, 
  ShieldCheck, 
  Languages,
  Users2,
  Award,
  History 
} from "lucide-react";

// Assets
import cityImg from "../assets/city.jpg";
import workImg from "../assets/work.jpg";

/* ================= COUNTER COMPONENT ================= */
function StatCounter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const totalFrames = 60;
      const numericEnd = parseInt(end.replace(/[,+]/g, ""));
      const increment = numericEnd / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericEnd) {
          setCount(numericEnd);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, duration / totalFrames);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count.toLocaleString()}{end.includes('+') ? '+' : suffix}</span>;
}

export default function About() {
  const { scrollYProgress } = useScroll();
  
  // Parallax Values - Modified to be less aggressive at the start
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
  const heroImgY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const bgShapeY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const stats = [
    { label: "Years Experience", value: "12+", icon: <History size={18} /> },
    { label: "Global Clients", value: "2500+", icon: <Users2 size={18} /> },
    { label: "Languages", value: "10+", icon: <Languages size={18} /> },
    { label: "Accuracy Rate", value: "100%", icon: <Award size={18} /> },
  ];

  const values = [
    {
      title: "Our Mission",
      desc: "Bridging global communication gaps through high-fidelity translation and legal precision.",
      icon: <Target className="text-white" />,
      color: "bg-[#2c9cb0]"
    },
    {
      title: "Global Vision",
      desc: "Standardizing trust across borders for businesses navigating international legalities.",
      icon: <Globe2 className="text-white" />,
      color: "bg-slate-800"
    },
    {
      title: "Unwavering Integrity",
      desc: "Strict confidentiality protocols and ethical standards in every document we handle.",
      icon: <ShieldCheck className="text-white" />,
      color: "bg-[#2c9cb0]"
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#fafbfc] text-slate-900 selection:bg-[#2c9cb0]/30 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      {/* pt-14 for mobile to account for fixed navbar, pt-28 for desktop */}
      <section className="relative min-h-screen lg:min-h-[auto] flex items-center pt-14 md:pt-28 pb-12 overflow-hidden">
        {/* Animated Background Shape */}
        <motion.div 
          style={{ y: bgShapeY }}
          className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#2c9cb0]/5 lg:-skew-x-12 lg:translate-x-20 z-0" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <motion.div 
            style={{ y: heroTextY }}
            initial="hidden"
            animate="visible"
            variants={containerVars}
            className="text-center lg:text-left mt-4 md:mt-0" 
          >
            <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c9cb0]/10 text-[#2c9cb0] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2c9cb0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2c9cb0]"></span>
              </span>
              About Us
            </motion.div>

            <motion.h1 variants={itemVars} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-4 text-slate-900 uppercase">
              We Are <br />
              <motion.span 
                initial={{ backgroundPosition: "200% center" }}
                animate={{ backgroundPosition: "0% center" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c9cb0] via-slate-700 to-[#2c9cb0] bg-[length:200%_auto]"
              >
                Smart Word
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVars} className="text-base md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6 md:mb-10">
              A boutique legal documentation firm where linguistic precision meets global business strategy.
            </motion.p>
          </motion.div>

          <motion.div 
             style={{ y: heroImgY }}
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="relative px-2 sm:px-4 lg:px-0"
          >
            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={cityImg} 
                alt="Cityscape" 
                className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" 
              />
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-4 -left-2 md:-bottom-10 md:-left-10 bg-white p-4 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl z-20 border border-slate-100"
            >
              <p className="text-[#2c9cb0] font-black text-2xl md:text-5xl mb-1">100%</p>
              <p className="text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">Legal Accuracy</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="py-12 md:py-20 bg-white border-y border-slate-100 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 md:gap-4 group"
              >
                <div className="p-3 md:p-4 bg-slate-50 rounded-xl md:rounded-2xl text-[#2c9cb0] group-hover:bg-[#2c9cb0] group-hover:text-white transition-colors duration-500">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900">
                    <StatCounter end={stat.value} />
                  </h3>
                  <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-16 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                Crafting Clarity in a <br />
                <span className="text-[#2c9cb0] relative">
                  Complex World.
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-0 left-0 h-1 bg-[#2c9cb0]/30"
                  />
                </span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                Language is more than just vocabulary; it's the gateway to international markets. At Smart Word, we dismantle barriers that hinder your global growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0">
                {["Legal-Grade Certified", "Fast-Track Attestation", "24/7 Priority Support", "Native Expert Linguists"].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={16} className="text-[#2c9cb0] flex-shrink-0" />
                    <span className="font-bold text-slate-700 text-[10px] md:text-xs uppercase tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative order-1 lg:order-2 px-4 sm:px-8 lg:px-0"
            >
              <div className="aspect-square bg-slate-200 rounded-3xl md:rounded-[60px] overflow-hidden shadow-2xl">
                <img src={workImg} alt="Workplace" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-white/20 rounded-3xl md:rounded-[60px] pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%232c9cb0'/%3E%3C/svg%3E")` }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-20 text-center"
          >
            <h2 className="text-white text-3xl md:text-6xl font-bold uppercase tracking-tighter">Our Philosophy</h2>
            <div className="h-1 w-16 md:w-24 bg-[#2c9cb0] mt-4 md:mt-6 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl md:rounded-[40px] hover:bg-white/10 transition-all duration-500"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${val.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl transition-transform duration-500`}>
                  {val.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{val.title}</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">{val.desc}</p>
                <div className="h-1 w-0 group-hover:w-full bg-[#2c9cb0] transition-all duration-700 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 md:py-24 mb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#2c9cb0] to-slate-900 rounded-3xl md:rounded-[60px] p-8 md:p-24 text-center text-white relative overflow-hidden"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -right-24 w-64 h-64 border border-white/10 rounded-full hidden md:block"
            />
            
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 relative z-10 uppercase">Ready to Go Global?</h2>
            <p className="text-white/70 text-sm md:text-lg mb-8 md:mb-12 max-w-xl mx-auto relative z-10">
              Join thousands of businesses scaling across borders with Smart Word's precision services.
            </p>
            <Link to="/contact" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-white text-[#2c9cb0] rounded-full font-black text-sm md:text-lg hover:scale-105 transition-transform shadow-2xl relative z-10">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 