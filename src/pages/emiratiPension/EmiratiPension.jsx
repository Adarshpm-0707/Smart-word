import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  UserPlus,
  UserX,
  FileCheck,
  History,
  ClipboardList,
  ShieldCheck,
  FileText,
  RefreshCw,
  ArrowRight,
  ExternalLink,
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

export default function EmiratiPension() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const heroImgScrollY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  // ✅ LINKS UPDATED TO MATCH YOUR APP.JS ROUTES EXACTLY
  const services = [
    { 
      title: "GPSSA Employer Registration", 
      desc: "Mandatory pension authority registration for UAE companies.", 
      icon: <ShieldCheck />, 
      tag: "Mandatory",
      link: "/emirati-pension/registration" 
    },
    { 
      title: "GPSSA Employer Cancellation", 
      desc: "Process for companies ceasing UAE National employment.", 
      icon: <UserX />, 
      tag: "Closure",
      link: "/emirati-pension/employer-cancellation" 
    },
    { 
      title: "Contribution Proforma", 
      desc: "Regularization of historical contribution gaps and legacy filings.", 
      icon: <History />, 
      tag: "Compliance",
      link: "/emirati-pension/contribution-proforma" 
    },
    { 
      title: "Monthly Contribution", 
      desc: "Accurate employer monthly pension filing and management.", 
      icon: <ClipboardList />, 
      tag: "Recurring",
      link: "/emirati-pension/monthly-contribution" 
    },
    { 
      title: "Register New Employee", 
      desc: "Official registration of UAE Nationals in the social security scheme.", 
      icon: <UserPlus />, 
      tag: "Onboarding",
      link: "/emirati-pension/register-employee" 
    },
    { 
      title: "Pension Certificates", 
      desc: "Issuance of GPSSA documents confirming contribution status.", 
      icon: <FileCheck />, 
      tag: "Documentation",
      link: "/emirati-pension/pension-certificate" 
    },
    { 
      title: "End of Service Settlement", 
      desc: "EOS application processing and settlement for UAE Nationals.", 
      icon: <FileText />, 
      tag: "Settlement",
      link: "/emirati-pension/end-of-service" 
    },
    { 
      title: "Update Employee Data", 
      desc: "Ongoing maintenance of employment records with GPSSA.", 
      icon: <RefreshCw />, 
      tag: "Maintenance",
      link: "/emirati-pension/update-employee" 
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#fcfdfe] min-h-screen pt-24 md:pt-32 lg:pt-40 pb-16 font-sans">
      
      {/* AMBIENT BACKGROUND */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-[-10%] w-[300px] md:w-[600px] aspect-square bg-[#2b9cb3]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION */}
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
              <Zap size={14} className="animate-pulse fill-[#2b9cb3]" /> GPSSA Specialists
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 md:mb-8"
            >
              Emirati <br />
              <motion.span 
                animate={{ color: ["#2b9cb3", "#0f172a", "#2b9cb3"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-[#2b9cb3]"
              >
                Pension
              </motion.span> Solutions
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-500 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Streamlining complex Social Security Authority (GPSSA) procedures to secure the future of your UAE National workforce with 100% compliance.
            </motion.p>
          </motion.div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
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
                alt="Emirati Pension Consulting" 
                className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover"
              />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-2 md:-bottom-12 md:-left-12 bg-white p-6 md:p-10 rounded-[30px] md:rounded-[45px] shadow-2xl z-20 border border-slate-50 text-center"
            >
              <p className="text-3xl md:text-6xl font-black text-slate-900 leading-none">08</p>
              <p className="text-[10px] md:text-xs font-bold text-[#2b9cb3] uppercase tracking-widest mt-2">Specialized Units</p>
            </motion.div>
          </div>
        </div>

        {/* PARALLAX TEXT */}
        <div className="relative mb-20 md:mb-32 overflow-hidden py-6 md:py-10 pointer-events-none">
          <motion.h2 
            style={{ x: bgTextX }}
            className="text-[15vw] font-black text-slate-100 uppercase leading-none whitespace-nowrap select-none"
          >
            GPSSA Social Security 
          </motion.h2>
        </div>

        {/* SERVICES GRID */}
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
              {/* ✅ ENTIRE CARD CLICKABLE LINK */}
              <Link to={service.link} className="absolute inset-0 z-20" aria-label={service.title} />

              <motion.span 
                animate={{ opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 text-7xl font-black text-slate-900 pointer-events-none"
              >
                0{index + 1}
              </motion.span>

              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#2b9cb3] transition-all duration-500 transform group-hover:rotate-12 relative z-10 shadow-lg group-hover:shadow-[#2b9cb3]/30">
                {React.cloneElement(service.icon, { size: 28 })}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#2b9cb3] transition-colors relative z-10">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 flex-grow relative z-10">
                {service.desc}
              </p>

              <div className="pt-8 border-t border-slate-50 relative z-10">
                <div className="inline-flex items-center gap-3 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest group/btn transition-all">
                  Inquire Now
                  <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-[#2b9cb3] group-hover/btn:text-white transition-all">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-48 bg-slate-900 rounded-[40px] md:rounded-[80px] p-10 md:p-24 relative overflow-hidden text-center lg:text-left"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-10 leading-tight">
                Secure Their Future, <br className="hidden md:block" /> <span className="text-[#2b9cb3]">Protect Your Business.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-xl leading-relaxed">
                Non-compliance with GPSSA regulations can lead to significant penalties. Let our experts handle the registration and proformas while you focus on growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto">
              <Link 
                to="/contact" 
                className="px-10 py-5 md:px-14 md:py-7 bg-[#2b9cb3] text-white rounded-full font-black text-sm md:text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3"
              >
                Inquire Now <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}