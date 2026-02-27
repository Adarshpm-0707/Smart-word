import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Scale,
  Stethoscope,
  Briefcase,
  Globe,
  Zap,
  Award,
  Cpu,
  Languages,
  ArrowRight,
} from "lucide-react";

import translatorImg from "../../assets/translator.jpg";

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

const floatingImage = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Translation() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Optimized transformations for performance
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);
  const heroImgScrollY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // ✅ Links updated to match your App.js routes
  const services = [
    { title: "Affordable Normal Translation Services", desc: "Everyday multilingual communication across languages.", category: "General", link: "/translation/normal-translation" },
    { title: "Smart Word Business Translation", desc: "Accurate financial and business translations for Dubai’s global environment.", category: "Business", link: "/translation/smart-word-translation" },
    { title: "Best Dubai Medical Translation", desc: "Professional medical translations ensuring healthcare clarity.", category: "Medical", link: "/translation/medical-translation" },
    { title: "Best Legal Translation Services", desc: "Certified legal translations accepted by UAE courts.", category: "Legal", link: "/translation/legal-translation" },
    { title: "Power of Attorney Translation", desc: "Accurate POA translations for official submissions.", category: "Legal", link: "/translation/power-of-attorney" },
    { title: "Trademark & Brand Protection", desc: "Protect intellectual property and brand identity.", category: "Legal", link: "/translation/trademark-translation" },
    { title: "Certified Sworn Legal Translation", desc: "Government-approved sworn translation services.", category: "Legal", link: "/translation/certified-translation" },
    { title: "Educational Certificate Attestation", desc: "Academic document verification and attestation.", category: "Academic", link: "/translation/certificate-translation" },
    { title: "Marketing Translation Services", desc: "Localized marketing content adapted culturally.", category: "Business", link: "/translation/marketing-translation" },
    { title: "Multilingual Subtitling Services", desc: "Professional subtitles for global audiences.", category: "Digital", link: "/translation/subtitling-translation" },
    { title: "Technical Translation Services", desc: "Engineering and industrial technical translations.", category: "Tech", link: "/translation/technical-translation" },
    { title: "Business Multilingual Translation", desc: "Efficient multilingual business communication.", category: "Business", link: "/translation/business-translation" },
    { title: "Professional Academic Translation", desc: "Research papers and academic documentation support.", category: "Academic", link: "/translation/academic-translation" },
    { title: "Legal Video & Voice Translation", desc: "Audio and video legal translation solutions.", category: "Digital", link: "/translation/video-voice-translation" },
    { title: "Scientific Translation Services", desc: "Precise scientific and research translations.", category: "Tech", link: "/translation/scientific-translation" },
    { title: "Top Certified Translation Company", desc: "Globally recognized certified translations.", category: "General", link: "/translation/top-certified-translation" },
    { title: "Digital Content Translation", desc: "Website and digital platform localization.", category: "Digital", link: "/translation/digital-content" },
    { title: "Software Localization Services", desc: "Adapting software for regional markets.", category: "Tech", link: "/translation/software-localization" },
    { title: "Website Localization Services", desc: "Localized websites for multicultural audiences.", category: "Digital", link: "/translation/website-localization" },
  ];

  const getIcon = (category) => {
    switch (category) {
      case "Legal": return <Scale size={24} />;
      case "Medical": return <Stethoscope size={24} />;
      case "Business": return <Briefcase size={24} />;
      case "Tech": return <Cpu size={24} />;
      case "Digital": return <Globe size={24} />;
      case "Academic": return <Award size={24} />;
      default: return <Languages size={24} />;
    }
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen pt-20 md:pt-32 lg:pt-40 pb-10 overflow-x-hidden relative">
      
      {/* ===== BACKGROUND DECOR ===== */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-10 left-[-10%] w-[100vw] max-w-[600px] aspect-square bg-[#2b9cb3]/10 rounded-full blur-[80px] md:blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-40">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2b9cb3]/10 text-[#2b9cb3] text-[10px] md:text-xs font-black uppercase tracking-widest mb-6"
            >
              <Zap size={14} className="fill-[#2b9cb3]" /> Global Reach
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6"
            >
              Words that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b9cb3] to-slate-500">
                Cross Borders
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-500 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Precise translation for Dubai’s most demanding industries. We bridge cultures with native-level accuracy.
            </motion.p>
          </motion.div>

          {/* Animated Hero Image Group */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <motion.div 
              style={{ y: shouldReduceMotion ? 0 : heroImgScrollY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl border-[8px] md:border-[15px] border-white relative z-10 w-full max-w-[450px] lg:max-w-full"
            >
              <motion.img 
                variants={floatingImage}
                animate="animate"
                src={translatorImg} 
                alt="Professional Translation" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
              />
            </motion.div>

            {/* Achievement Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-2 md:-bottom-10 md:-left-10 bg-white p-5 md:p-8 rounded-[25px] md:rounded-[40px] shadow-2xl z-20 border border-slate-50"
            >
              <p className="text-3xl md:text-5xl font-black text-slate-900 leading-none">19</p>
              <p className="text-[8px] md:text-[10px] font-bold text-[#2b9cb3] uppercase tracking-widest mt-1">Services</p>
            </motion.div>
          </div>
        </div>

        {/* ===== PARALLAX BG TEXT ===== */}
        <div className="relative mb-16 md:mb-32 overflow-hidden py-4 pointer-events-none">
          <motion.h2 
            style={{ x: bgTextX }}
            className="text-[18vw] lg:text-[14vw] font-black text-slate-100 uppercase leading-none whitespace-nowrap select-none"
          >
            Professional Translation Excellence
          </motion.h2>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-10 shadow-lg shadow-slate-200/40 border border-slate-50 hover:border-[#2b9cb3]/20 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Optional: Card is clickable entirely via this overlay Link */}
              <Link to={service.link} className="absolute inset-0 z-0" aria-label={service.title} />

              <span className="absolute top-6 right-6 text-5xl md:text-7xl font-black text-slate-50 group-hover:text-[#2b9cb3]/5 transition-colors">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              <div className="w-14 h-14 bg-slate-50 text-[#2b9cb3] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                {getIcon(service.category)}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-[#2b9cb3] transition-colors relative z-10">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 flex-grow relative z-10">
                {service.desc}
              </p>

              <div className="pt-6 border-t border-slate-50 relative z-10">
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-3 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] group/btn transition-all"
                >
                  View Service
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-[#2b9cb3] group-hover/btn:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== CTA SECTION ===== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-40 bg-slate-900 rounded-[40px] md:rounded-[60px] p-8 md:p-20 relative overflow-hidden text-center"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-tight">
              Ready for a <br className="hidden md:block" /> <span className="text-[#2b9cb3]">Custom Solution?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-xl mb-10 md:mb-12">
              We provide 24-hour turnaround for urgent projects. Tell us about your linguistic requirements and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link 
                to="/contact" 
                className="px-8 md:px-12 py-4 md:py-6 bg-[#2b9cb3] text-white rounded-full font-black text-base md:text-lg hover:scale-105 transition-all text-center"
              >
                Inquire Now
              </Link>
              <Link 
                to="/services" 
                className="px-8 md:px-12 py-4 md:py-6 bg-white/5 border border-white/10 text-white rounded-full font-black text-base md:text-lg hover:bg-white hover:text-slate-900 transition-all text-center"
              >
                All Services
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}