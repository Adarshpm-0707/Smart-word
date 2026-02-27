import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  FileText,
  Gavel,
  Users,
  Ban,
  Handshake,
  ShieldAlert,
  RotateCcw,
  PenTool,
  ScrollText,
  Scale,
  ArrowRight,
  Briefcase,
  Zap
} from "lucide-react";

import cityImg from "../../assets/city.jpg";

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

// Continuous Floating Animation (Time-based)
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

export default function Notarization() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Scroll Transformations (Parallax)
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const heroImgScrollY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  const services = [
    { title: "Minutes of Meeting UAE", desc: "Formal records documenting corporate discussions and decisions.", icon: <FileText /> },
    { title: "Affidavit & Translation", desc: "Legal sworn statements for governmental procedures.", icon: <Scale /> },
    { title: "Board Resolution Notary", desc: "Official company decisions authorized and notarized.", icon: <Gavel /> },
    { title: "Board Resolution Drafting", desc: "Professional drafting of director resolutions.", icon: <PenTool /> },
    { title: "Company Liquidation", desc: "Legal documentation required for company closure.", icon: <Ban /> },
    { title: "Husband Sponsorship NOC", desc: "No Objection Certificates for family sponsorship.", icon: <Users /> },
    { title: "Local Service Agent Agreement", desc: "Mandatory agreements for UAE mainland setup.", icon: <Handshake /> },
    { title: "Local Service Agent Dubai", desc: "Professional LSA appointment services.", icon: <Briefcase /> },
    { title: "MOA Drafting & Notarization", desc: "Preparation of company constitutional documents.", icon: <ScrollText /> },
    { title: "Memorandum of Association", desc: "Core legal document defining company ownership.", icon: <ScrollText /> },
    { title: "MOA Amendment Services", desc: "Modify company ownership or structure legally.", icon: <RotateCcw /> },
    { title: "Modify MOA Framework", desc: "Professional MOA updates aligned with UAE law.", icon: <RotateCcw /> },
    { title: "NOC Issuance Services", desc: "Official authorization certificates issued legally.", icon: <ShieldAlert /> },
    { title: "Notary & Translation Dubai", desc: "Integrated notarization and translation solutions.", icon: <Gavel /> },
    { title: "POA Revocation Services", desc: "Legal cancellation of issued Power of Attorney.", icon: <Ban /> },
    { title: "POA Notary Services", desc: "Official notarization authorizing representation.", icon: <ScrollText /> },
    { title: "POA Legal Translation", desc: "Certified translation of POA documents.", icon: <Scale /> },
    { title: "Will & Testament Dubai", desc: "Preparation and notarization protecting assets.", icon: <ShieldAlert /> },
    { title: "Will & Testament UAE", desc: "Complete drafting ensuring legal protection.", icon: <PenTool /> },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#fcfdfe] min-h-screen pt-24 md:pt-32 lg:pt-40 pb-16">
      
      {/* ===== CONTINUOUS AMBIENT BACKGROUND GLOW ===== */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-[-10%] w-[300px] md:w-[600px] aspect-square bg-[#2b9cb3]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-8"
            >
              <Zap size={14} className="fill-[#2b9cb3] text-[#2b9cb3]" /> Official Drafting
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
                Precision.
              </motion.span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-500 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Expert drafting of Memorandum of Association, Wills, and Power of Attorney documents fully compliant with UAE Ministry of Justice standards.
            </motion.p>
          </motion.div>

          {/* Animated Hero Image Group */}
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
                src={cityImg} 
                alt="Notary Office" 
                className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover"
              />
            </motion.div>

            {/* Achievement Badge (Responsive) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-2 md:-bottom-12 md:-left-12 bg-[#2b9cb3] p-6 md:p-10 rounded-[30px] md:rounded-[45px] shadow-2xl z-20 text-white text-center"
            >
              <p className="text-3xl md:text-6xl font-black leading-none">19</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2">Legal Units</p>
            </motion.div>
          </div>
        </div>

        {/* ===== PARALLAX BACKGROUND TEXT (SCROLL-ONLY) ===== */}
        <div className="relative mb-20 md:mb-32 overflow-hidden py-6 md:py-10 pointer-events-none">
          <motion.h2 
            style={{ x: bgTextX }}
            className="text-[15vw] font-black text-slate-100 uppercase leading-none whitespace-nowrap select-none"
          >
            Official Drafting & Notarization
          </motion.h2>
        </div>

        {/* ===== SERVICES GRID (RESPONSIVE COLUMNS) ===== */}
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
              whileHover={{ y: -15, scale: 1.02 }}
              className="group bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-transparent hover:border-[#2b9cb3]/20 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Background Number Decal */}
              <span className="absolute top-10 right-10 text-6xl md:text-7xl font-black text-slate-900/5 group-hover:text-[#2b9cb3]/10 transition-colors pointer-events-none">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 relative z-10 shadow-sm">
                {React.cloneElement(service.icon, { size: 28 })}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#2b9cb3] transition-colors relative z-10 min-h-[56px]">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 flex-grow relative z-10">
                {service.desc}
              </p>

              <div className="pt-8 border-t border-slate-100 relative z-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest group/btn transition-all"
                >
                  Start Case
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover/btn:bg-[#2b9cb3] transition-all">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== FINAL CALL TO ACTION (RESPONSIVE PADDING) ===== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-48 bg-slate-900 rounded-[40px] md:rounded-[80px] p-10 md:p-24 relative overflow-hidden text-center lg:text-left"
        >
          {/* Animated Background Pulse */}
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05], rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(#2b9cb3 2px, transparent 2px)`, 
              backgroundSize: '40px 40px' 
            }} 
          />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-10 leading-tight text-center lg:text-left">
                Protect Your <br className="hidden md:block" /> <span className="text-[#2b9cb3]">Legacy & Business.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-xl leading-relaxed text-center lg:text-left">
                Our legal drafting experts ensure your documents are compliant with the latest UAE laws. Avoid risks and secure your rights today.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto">
              <Link 
                to="/contact" 
                className="px-10 py-5 md:px-14 md:py-7 bg-[#2b9cb3] text-white rounded-full font-black text-sm md:text-lg hover:scale-105 transition-transform shadow-2xl shadow-[#2b9cb3]/40 text-center"
              >
                Consult an Expert
              </Link>
              <Link 
                to="/translation" 
                className="px-10 py-5 md:px-14 md:py-7 bg-white/5 border border-white/10 text-white rounded-full font-black text-sm md:text-lg hover:bg-white hover:text-slate-900 transition-all text-center"
              >
                View Translation
              </Link>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#2b9cb3] blur-[100px] md:blur-[150px] opacity-10 -mr-32 -mt-32" />
        </motion.div>

      </div>
    </div>
  );
}