import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Handshake,
  Scale,
  Banknote,
  Users,
  Home,
  ArrowRight,
  FileSignature,
  CheckCircle,
  Zap,
} from "lucide-react";

import workImg from "../../assets/work.jpg";

/* ---------- ANIMATION VARIANTS ---------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

// Continuous Floating Animation
const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Drafting() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Scroll Transformations
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const heroImgScrollY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  // ✅ Updated with 'link' paths matching your App.js Routes
  const services = [
    {
      title: "Joint Venture Agreement",
      desc: "Strategic agreements for shared business ventures and risk management.",
      icon: <Handshake size={28} />,
      tag: "Corporate",
      link: "/drafting/joint-venture-agreement",
    },
    {
      title: "Legal Notice Drafting",
      desc: "Formal legal communication protecting your rights and interests.",
      icon: <Scale size={28} />,
      tag: "Litigation",
      link: "/drafting/legal-notice",
    },
    {
      title: "Loan Agreement Drafting",
      desc: "Secure repayment structures and robust financial protection.",
      icon: <Banknote size={28} />,
      tag: "Financial",
      link: "/drafting/loan-agreement",
    },
    {
      title: "Partnership Agreement",
      desc: "Defines roles, profit distribution and business responsibilities.",
      icon: <Users size={28} />,
      tag: "Startup",
      link: "/drafting/partnership-agreement",
    },
    {
      title: "Rental & Tenancy Contracts",
      desc: "RERA-compliant landlord and tenant agreements for property safety.",
      icon: <Home size={28} />,
      tag: "Property",
      link: "/drafting/rental-tenancy",
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#fcfdfe] min-h-screen pt-24 md:pt-32 lg:pt-40 pb-16 font-sans">
      
      {/* ===== CONTINUOUS AMBIENT BACKGROUND GLOW ===== */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-[-10%] w-[300px] md:w-[600px] aspect-square bg-[#2b9cb3]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
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
              <Zap size={14} className="animate-pulse fill-[#2b9cb3]" /> Contractual Architecture
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 md:mb-8"
            >
              Legal <br />
              <motion.span 
                animate={{ color: ["#2b9cb3", "#0f172a", "#2b9cb3"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-[#2b9cb3]"
              >
                Drafting
              </motion.span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-500 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Iron-clad agreements and professional documentation tailored to UAE regulations and modern global business standards.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                to="/contact"
                className="inline-block px-10 py-5 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#2b9cb3] transition-all shadow-xl shadow-slate-900/10"
              >
                Request a Draft
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end px-4 md:px-0">
            <motion.div 
              style={{ y: shouldReduceMotion ? 0 : heroImgScrollY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-[10px] md:border-[20px] border-white relative z-10 w-full max-w-[500px]"
            >
              <motion.img 
                variants={floating}
                animate="animate"
                src={workImg} 
                alt="Contract Legal Drafting" 
                className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover"
              />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-2 md:-bottom-12 md:-left-12 bg-white p-6 md:p-10 rounded-[30px] md:rounded-[45px] shadow-2xl z-20 border border-slate-50 max-w-[180px] md:max-w-[240px] hidden sm:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileSignature size={24} className="text-[#2b9cb3]" />
                <h4 className="font-black text-slate-900 text-sm md:text-base leading-tight">5 <br/> Agreements</h4>
              </div>
          
            </motion.div>
          </div>
        </div>

        {/* ===== PARALLAX BACKGROUND TEXT ===== */}
        <div className="relative mb-20 md:mb-32 overflow-hidden py-6 md:py-10 pointer-events-none">
          <motion.h2 
            style={{ x: bgTextX }}
            className="text-[15vw] font-black text-slate-100 uppercase leading-none whitespace-nowrap select-none"
          >
            Agreements & Contracts
          </motion.h2>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-transparent hover:border-[#2b9cb3]/20 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* ✅ Link overlay to make entire card clickable */}
              <Link to={service.link} className="absolute inset-0 z-20" aria-label={service.title} />

              <div className="flex items-start justify-between mb-8 md:mb-12">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 text-[#2b9cb3] rounded-2xl flex items-center justify-center group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 relative z-10 shadow-sm">
                  {React.cloneElement(service.icon, { size: 28 })}
                </div>
                <span className="px-4 py-1.5 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full group-hover:text-[#2b9cb3] group-hover:bg-[#2b9cb3]/5 transition-all relative z-10">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#2b9cb3] transition-colors relative z-10">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 flex-grow relative z-10">
                {service.desc}
              </p>

              <div className="pt-8 border-t border-slate-100 relative z-10">
                <div className="inline-flex items-center gap-3 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest group/btn transition-all">
                  View Details
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover/btn:bg-[#2b9cb3] transition-all">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special Feature Card */}
          <motion.div 
            variants={fadeInUp}
            className="hidden lg:flex flex-col justify-center p-12 bg-slate-900 rounded-[40px] relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#2b9cb3]/20 blur-3xl group-hover:bg-[#2b9cb3]/40 transition-all" />
            <h4 className="text-2xl font-black text-white mb-8">Why Smart Word?</h4>
            <div className="space-y-6">
              {[
                "DIFC & ADGM Compliant",
                "Bilingual Legal Drafting",
                "Fast Turnaround Times",
                "Court-Ready Formats",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#2b9cb3]" />
                  <span className="text-sm font-bold text-slate-300 tracking-wide">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= FINAL CALL TO ACTION ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-48 mb-14 bg-slate-900 rounded-[40px] md:rounded-[80px] p-10 md:p-24 relative overflow-hidden text-center group"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-10 leading-tight">
              Secure Your Future <br className="hidden md:block" /> <span className="text-slate-900">Transactions.</span>
            </h2>
            <p className="text-white/80 text-base md:text-xl mb-10 md:mb-14 leading-relaxed">
              Whether it’s a joint venture or a simple tenancy contract, we ensure every agreement protects your rights under UAE law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link to="/contact"
                className="w-full sm:w-auto px-10 py-5 md:px-14 md:py-7 bg-white text-[#2b9cb3] rounded-full font-black text-sm md:text-lg hover:scale-105 transition-transform shadow-2xl">
                Book Consultation
              </Link>
             
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}