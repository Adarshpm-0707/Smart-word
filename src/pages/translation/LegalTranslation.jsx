import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, Scale, Clock, Award, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LegalTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Are your legal translations approved by UAE authorities?",
      a: "Yes. All our legal translations are performed by translators licensed by the UAE Ministry of Justice and are recognized by all government entities, embassies, and courts."
    },
    {
      q: "What types of documents can you translate legally?",
      a: "We translate contracts, court rulings, affidavits, powers of attorney, marriage certificates, birth certificates, and commercial agreements."
    },
    {
      q: "How long does a legal translation take?",
      a: "Standard delivery is 24-48 hours. However, we offer an express service for urgent legal matters that can be completed within the same day."
    },
    {
      q: "Do you provide Arabic to English and English to Arabic legal translation?",
      a: "Yes, we specialize in both. We also handle 50+ other language pairs including French, Russian, Chinese, and German for legal use."
    },
    {
      q: "Is my information kept confidential?",
      a: "Strict confidentiality is guaranteed. We handle sensitive legal and court documents with the highest level of data security and privacy."
    }
  ];

  const features = [
    {
      title: "MOJ Licensed",
      desc: "Native-speaking legal translators licensed by the UAE Ministry of Justice.",
      icon: <Scale size={26} />
    },
    {
      title: "Fast Turnaround",
      desc: "Quick delivery without compromising on the precise legal terminology required.",
      icon: <Clock size={26} />
    },
    {
      title: "Full Recognition",
      desc: "Accepted by UAE ministries, courts, immigration, and foreign embassies.",
      icon: <Award size={26} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO & HEADER ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6 border border-slate-200">
              <ShieldCheck size={14} className="text-[#2b9cb3]" />
              Official Legal Service
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Best <span className="text-[#2b9cb3]">Legal Translation</span> Services in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Legal translation in Dubai is a critical service that ensures
                seamless communication across the UAE’s diverse legal and cultural
                environment. Precise translation involves converting complex texts
                while preserving their absolute <strong>legal value</strong>.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700">
                  "At Smart Word, our translations are carried out exclusively
                  by translators licensed by the <strong>UAE Ministry of Justice</strong>, 
                  ensuring your documents are valid for court and government use."
                </p>
              </div>

              <p>
                Whether it’s for business formation, immigration, litigation, or 
                personal legal matters, accurate legal translation is essential 
                to maintain compliance with UAE federal laws.
              </p>
            </div>

            {/* FEATURES GRID */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="bg-cyan-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-[#2b9cb3] group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR (Sticky on Laptop) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[380px] lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Started</h3>
              <p className="text-slate-400 mb-8 relative z-10">
                Need help with Official Legal Translation? Contact our licensed experts today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Ministry of Justice Licensed
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Certified Court Translators
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  100% Confidential Handling
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

        {/* ================= FAQ SECTION ================= */}
        <div className="mt-24 max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-cyan-100 p-2 rounded-lg">
              <HelpCircle className="text-[#2b9cb3]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Legal Translation FAQ</h2>
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