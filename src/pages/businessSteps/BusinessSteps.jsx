import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Building2,
  Map,
  Anchor,
  Landmark,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Zap,
} from "lucide-react";

import cityImg from "../../assets/city.jpg";

/* ---------- ANIMATION VARIANTS ---------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function BusinessSteps() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const heroImgScrollY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  // ✅ Links updated to match your App.js routes
  const services = [
    {
      title: "Freezone Business Setup",
      desc: "100% foreign ownership and tax-efficient UAE incorporation.",
      icon: <Building2 />,
      features: ["100% Ownership", "No Corporate Tax*", "Easy Repatriation"],
      color: "bg-[#2b9cb3]",
      link: "/business-steps/freezone",
    },
    {
      title: "Mainland Business Setup",
      desc: "Direct access to UAE markets with operational flexibility.",
      icon: <Map />,
      features: ["Local Market Access", "No Area Limits", "Gov Tenders"],
      color: "bg-slate-900",
      link: "/business-steps/mainland",
    },
    {
      title: "Offshore Business Setup",
      desc: "Ideal for global trade, holding structures and protection.",
      icon: <Anchor />,
      features: ["Asset Shielding", "Confidentiality", "Zero Local Tax"],
      color: "bg-[#2b9cb3]",
      link: "/business-steps/offshore",
    },
    {
      title: "Corporate Bank Account",
      desc: "Smooth onboarding with UAE & international banking partners.",
      icon: <Landmark />,
      features: ["Multi-currency", "Online Banking", "Merchant Services"],
      color: "bg-slate-900",
      link: "/business-steps/corporate-bank",
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#fcfdfe] min-h-screen pt-24 md:pt-32 lg:pt-40 pb-16 font-sans">

      <motion.div
        animate={shouldReduceMotion ? {} : { 
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-[-15%] w-[300px] md:w-[600px] aspect-square bg-[#2b9cb3]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-40">
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#2b9cb3]/10 text-[#2b9cb3] text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-8"
            >
              <Zap size={14} className="fill-[#2b9cb3] animate-pulse" /> Strategic Growth
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 md:mb-8"
            >
              Launch in <br />
              <motion.span 
                animate={{ color: ["#2b9cb3", "#0f172a", "#2b9cb3"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-[#2b9cb3]"
              >
                Dubai.
              </motion.span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-slate-500 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12">
              Incorporation strategies designed for high-growth entrepreneurs and global companies entering the competitive UAE market.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex justify-center lg:justify-start gap-8 md:gap-12"
            >
              <div>
                <p className="text-3xl md:text-4xl font-black text-slate-900">100%</p>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Ownership</p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="text-3xl md:text-4xl font-black text-[#2b9cb3]">0%</p>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Corp Tax*</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end px-4 md:px-0">
            <motion.div 
              style={{ y: heroImgScrollY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-[10px] md:border-[20px] border-white relative z-10 w-full max-w-[500px]"
            >
              <motion.img
                variants={floating}
                animate="animate"
                src={cityImg}
                alt="Dubai Business District"
                className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#2b9cb3]/5 rounded-[40px] md:rounded-[60px] translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>

        {/* ===== PARALLAX BACKGROUND TEXT ===== */}
        <div className="relative mb-16 md:mb-32 overflow-hidden py-4 md:py-10 pointer-events-none">
          <motion.h2
            style={{ x: bgTextX }}
            className="text-[15vw] font-black text-slate-100 uppercase leading-none whitespace-nowrap select-none"
          >
            Establishment & Incorporation 
          </motion.h2>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.01 }}
              className="group bg-white rounded-[40px] p-8 md:p-14 shadow-xl shadow-slate-200/40 border border-transparent hover:border-[#2b9cb3]/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* ✅ Link overlay to make the whole card clickable */}
              <Link to={service.link} className="absolute inset-0 z-20" aria-label={service.title} />

              <div className={`w-16 h-16 md:w-20 md:h-20 ${service.color} text-white rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-slate-200 relative z-10`}>
                {React.cloneElement(service.icon, { size: 32 })}
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 group-hover:text-[#2b9cb3] transition-colors relative z-10">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md relative z-10">
                {service.desc}
              </p>

              <div className="space-y-3 mb-10 relative z-10">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#2b9cb3]" />
                    <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wide">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-50 relative z-10">
                <div className="inline-flex items-center gap-4 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] group/btn">
                  Start Setup
                  <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-[#2b9cb3] group-hover/btn:text-white transition-all">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== FINAL CALL TO ACTION ===== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-48 mb-14 bg-slate-900 rounded-[40px] md:rounded-[80px] p-10 md:p-24 relative overflow-hidden text-center group"
        >
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(#2b9cb3 2px, transparent 2px)`, 
              backgroundSize: '40px 40px' 
            }} 
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 md:mb-12 leading-tight">
              Unsure which <br className="hidden md:block" /> <span className="text-[#2b9cb3]">jurisdiction</span> fits?
            </h2>

            <p className="text-slate-400 text-base md:text-xl mb-10 md:mb-14 leading-relaxed">
              Our specialists provide a full business activity analysis and recommend the most cost-efficient UAE setup route tailored to your industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link to="/contact"
                className="w-full sm:w-auto px-10 py-5 md:px-14 md:py-7 bg-[#2b9cb3] text-white rounded-full font-black text-sm md:text-lg hover:scale-105 transition-transform shadow-2xl shadow-[#2b9cb3]/40 flex items-center gap-3 justify-center">
                Free Consultation <ExternalLink size={20} />
              </Link>

              <Link to="/services"
                className="w-full sm:w-auto px-10 py-5 md:px-14 md:py-7 bg-white/5 border border-white/10 text-white rounded-full font-black text-sm md:text-lg hover:bg-white hover:text-slate-900 transition-all text-center">
                Explore More
              </Link>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#2b9cb3] blur-[100px] md:blur-[150px] opacity-10 -mr-32 -mt-32" />
        </motion.div>

      </div>
    </div>
  );
}