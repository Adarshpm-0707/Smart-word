import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  GraduationCap, 
  BookOpen, 
  Languages, 
  ShieldCheck, 
  HelpCircle,
  FileText,
  Clock,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AcademicTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What academic documents can you translate?",
      a: "We translate a wide range of documents including research papers, dissertations, theses, academic transcripts, journals, certificates, and university applications."
    },
    {
      q: "Are translations accepted by universities and institutions?",
      a: "Yes. Our translations are certified and formatted to meet the strict standards required by universities in the UAE and internationally."
    },
    {
      q: "Do you maintain academic formatting and citations?",
      a: "Absolutely. We ensure that all citations (APA, MLA, Chicago, etc.) and specific academic formatting are preserved during the translation process."
    },
    {
      q: "Can you translate technical or scientific research papers?",
      a: "Yes, we assign translators with subject-matter expertise in fields like Medicine, Engineering, Law, and Science to ensure terminology is used correctly."
    },
    {
      q: "Is my academic work kept confidential?",
      a: "Security is paramount. We sign non-disclosure agreements (NDAs) and follow strict protocols to protect your intellectual property and research data."
    }
  ];

  const features = [
    {
      title: "Subject Matter Experts",
      text: "Translators with deep knowledge of educational terminology and research standards.",
      icon: <BookOpen className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Full Document Range",
      text: "Expertise in theses, dissertations, research papers, and academic publications.",
      icon: <FileText className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Institutional Alignment",
      text: "Formatting aligned with university and global institutional submission requirements.",
      icon: <GraduationCap className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Multilingual Support",
      text: "Accurate translation across Arabic, English, French, German, and 50+ languages.",
      icon: <Languages className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Confidentiality Guaranteed",
      text: "Strict data protection for sensitive academic research and personal documents.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Academic Precision",
      text: "Fast turnaround while maintaining quality assurance and linguistic accuracy.",
      icon: <Clock className="text-[#2b9cb3]" size={26} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO & HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} className="animate-pulse" />
              Trusted Academic Partner
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Professional <span className="text-[#2b9cb3]">Academic Translation</span> Services in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                As Dubai thrives as a hub for international education, accurate academic 
                translation is vital. These documents require <strong>subject-matter 
                expertise</strong> and strict adherence to institutional standards to 
                maintain credibility.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Our services support researchers and universities by delivering 
                  accurate translations of theses and research papers, handled by 
                  linguists familiar with global academic formatting."
                </p>
              </div>

              <p>
                Every translation is managed by experienced professionals to ensure 
                clarity and authenticity, helping you meet the submission 
                requirements of elite institutions worldwide.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR (Sticky on Laptop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[380px] lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Started</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Submit your research or academic papers for professional translation today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Terminology Consistency
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Academic Formatting (APA/MLA)
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Confidential Data Handling
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Contact Us Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES SECTION ================= */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-12"
          >
             Why Choose Our Academic Expertise?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#2b9cb3]/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all group"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="mt-24 max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-cyan-100 p-2 rounded-lg">
              <HelpCircle className="text-[#2b9cb3]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Academic Translation FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-white shadow-md border-cyan-100' : 'bg-transparent border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <span className={`font-bold transition-colors ${openIndex === index ? 'text-[#2b9cb3]' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#2b9cb3]' : ''}`} 
                    size={20} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-slate-500 text-sm md:text-base leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}