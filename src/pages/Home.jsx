import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Languages,
  ShieldCheck,
  PenTool,
  ArrowRight,
  Globe,
  Award,
  Star,
  Check
} from "lucide-react";

// Import Assets
import translatorImg from "../assets/translator.jpg";
import workImg from "../assets/work.jpg";
import cityImg from "../assets/city.jpg";

/* ================= COUNTER COMPONENT ================= */
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const duration = 2000;
          const totalFrames = 60;
          const increment = end / totalFrames;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, duration / totalFrames);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasStarted]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ================= MARQUEE COMPONENT ================= */
const Marquee = () => (
  <div className="relative flex overflow-x-hidden bg-[#2c9cb0] py-4 text-white">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center mx-8">
          <Star size={16} className="fill-white text-white mr-4" />
          <span className="text-sm md:text-lg font-bold uppercase tracking-widest">
            Certified Translation • Legal Attestation • Global Notarization •
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const services = [
    {
      id: "01",
      title: "Translation",
      desc: "Legal, medical, and technical translation with 100% human accuracy.",
      link: "/translation",
      icon: <Languages size={32} />,
    },
    {
      id: "02",
      title: "Attestation",
      desc: "Ministry of Foreign Affairs (MOFA) and Embassy legalization support.",
      link: "/attestation",
      icon: <ShieldCheck size={32} />,
    },
    {
      id: "03",
      title: "Notarization",
      desc: "Official drafting and notarization for contracts and agreements.",
      link: "/notarization",
      icon: <PenTool size={32} />,
    },
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Languages" },
    { value: 2500, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Success Rate" },
    { value: 12, suffix: "+", label: "Years Active" },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden font-sans text-slate-900">
      
      {/* ================= HERO SECTION ================= */}
      {/* Changed min-h-screen to min-h-[auto] for mobile to avoid vertical stretching */}
      <section className="relative min-h-[auto] lg:min-h-screen bg-[#0b0f19] text-white pt-32 pb-16 lg:pb-0 overflow-hidden flex flex-col justify-center">
        
        {/* Abstract Background Gradient */}
        <div className="absolute top-[-20%] right-[-10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#2c9cb0]/20 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-purple-900/20 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 lg:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#2c9cb0] animate-pulse"></span>
                <span className="text-[10px] lg:text-xs font-bold tracking-widest uppercase text-slate-300">Dubai's Premier Agency</span>
              </div>

              {/* Responsive Text Sizes */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 lg:mb-8">
                Your Words, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c9cb0] to-cyan-200">
                  Globally Recognized.
                </span>
              </h1>

              <p className="text-base lg:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 lg:mb-10">
                We simplify the complexity of global communication. From legal translation to government attestation, we ensure your documents are accepted worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="px-8 py-4 bg-[#2c9cb0] hover:bg-[#238ea1] text-white rounded-full font-bold transition-all shadow-lg shadow-cyan-900/20 text-center">
                  Get a Free Quote
                </Link>
             
              </div>
            </motion.div>

            {/* Right: Responsive Image Handling */}
            <div className="relative">
              {/* Mobile View: Single Hero Image */}
              <div className="lg:hidden rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                 <img src={cityImg} alt="Dubai" className="w-full h-64 object-cover" />
              </div>

              {/* Desktop View: Bento Grid */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:grid grid-cols-2 gap-4"
              >
                <motion.div style={{ y: yParallax }} className="space-y-4 pt-12">
                  <img src={cityImg} alt="Dubai" className="rounded-3xl w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                    <Globe className="text-[#2c9cb0] mb-4" size={32} />
                    <h3 className="text-xl font-bold">150+ Countries</h3>
                    <p className="text-sm text-slate-400 mt-2">Accepted Documents</p>
                  </div>
                </motion.div>
                
                <div className="space-y-4">
                  <div className="bg-[#2c9cb0] p-6 rounded-3xl text-white">
                    <Award className="text-white mb-4" size={32} />
                    <h3 className="text-xl font-bold">ISO Certified</h3>
                    <p className="text-sm text-cyan-100 mt-2">Quality Assurance</p>
                  </div>
                  <img src={translatorImg} alt="Translation" className="rounded-3xl w-full h-80 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SCROLLING MARQUEE ================= */}
      <Marquee />

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 text-center md:text-left">
            <div className="w-full md:w-auto">
              <span className="text-[#2c9cb0] font-bold tracking-widest uppercase text-sm">What We Do</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Comprehensive Solutions</h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-slate-900 font-bold hover:text-[#2c9cb0] transition-colors mt-4 md:mt-0">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white border border-slate-200 p-6 lg:p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-[#2c9cb0] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                    {item.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{item.desc}</p>
                
                <Link to={item.link} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#2c9cb0] transition-colors">
                  Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (FEATURE STRIP) ================= */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image adjusted for mobile height */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] lg:border-[10px] border-white/10">
                <img src={workImg} alt="Office" className="w-full h-64 lg:h-[500px] object-cover" />
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-lg lg:text-2xl font-bold">"Accuracy is not an option, it's our standard."</p>
                </div>
              </div>
            </motion.div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Why Smart Word?</h2>
              <div className="space-y-4 lg:space-y-6">
                {[
                  "100% Human Translation (No AI Shortcuts)",
                  "MOFA & Embassy Approved",
                  "Strict Data Confidentiality",
                  "Express 24-Hour Delivery Available"
                ].map((text, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="bg-[#2c9cb0] rounded-full p-1 flex-shrink-0">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-base lg:text-lg">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION (RESPONSIVE FIX) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Fix: 
             - grid-cols-1 for Mobile (ensures numbers like 50,000+ fit)
             - grid-cols-2 for Tablet
             - grid-cols-4 for Desktop
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="p-4">
                {/* Text Size Fix: Reduced to 4xl on mobile to prevent overflow */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2c9cb0]/10 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to expand your business?</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10">
            Join thousands of businesses that trust Smart Word for their linguistic and legal needs.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-[#0f1729] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Start Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}