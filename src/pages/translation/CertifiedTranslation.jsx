import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Gavel, 
  Languages, 

  ShieldCheck, 
  HelpCircle,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertifiedSwornLegalTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a sworn translation?",
      a: "A sworn translation is a legally certified translation performed by an officially licensed translator. It is stamped and signed to be accepted by courts, embassies, immigration authorities, and government departments."
    },
    {
      q: "When do I need a sworn translation in the UAE?",
      a: "You need it for any official document being submitted to government bodies, such as marriage certificates for visa processing, court evidence, or company articles of association."
    },
    {
      q: "Are your sworn translators approved by the UAE Ministry of Justice?",
      a: "Yes, all our sworn translators are licensed and registered with the UAE Ministry of Justice (MOJ), ensuring full legal acceptance across all seven Emirates."
    },
    {
      q: "Can I get a sworn translation in a language other than Arabic?",
      a: "Absolutely. While Arabic is the official language, we provide sworn translations for English, French, Russian, German, Italian, and 50+ other global languages."
    },
    {
      q: "How long does a sworn translation take?",
      a: "Standard documents (certificates/degrees) typically take 24 hours. We also offer express same-day services for urgent legal requirements."
    }
  ];

  const features = [
    {
      title: "Ministry Approved",
      text: "Government-approved translators licensed by the UAE Ministry of Justice.",
      icon: <Gavel size={26} />
    },
    {
      title: "Official Accuracy",
      text: "Precision-focused translation for sensitive legal documents with official stamps.",
      icon: <FileCheck size={26} />
    },
    {
      title: "50+ Languages",
      text: "Sworn expertise in English, Arabic, Russian, French, Spanish, and more.",
      icon: <Languages size={26} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} />
              Ministry of Justice Licensed
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Certified Official <span className="text-[#2b9cb3]">Sworn Legal</span> Translation
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Sworn translation—also known as certified or official translation—is essential 
                when dealing with legal, government, and immigration documentation in Dubai 
                and across the UAE.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we provide Ministry-approved sworn translations that carry 
                  full legal validity for courts, embassies, and official institutions worldwide."
                </p>
              </div>

              <p>
                Each document is delivered with the translator’s certified stamp and signature, 
                ensuring every detail—from birth certificates to commercial licenses—is 
                accurately conveyed and legally recognized.
              </p>
            </div>

            {/* FEATURES GRID (Responsive) */}
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
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Official Sworn Translation</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm">
                Secure your legal documents with MOJ-licensed stamps today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  UAE Courts Recognized
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Ministry Stamp & Signature
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Express Delivery Available
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Contact an Expert
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sworn Translation FAQ</h2>
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