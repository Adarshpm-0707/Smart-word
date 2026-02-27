import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, Stethoscope, Lock, FileText, HeartPulse, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MedicalTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What types of medical documents do you translate?",
      a: "We translate medical records, prescriptions, lab results, doctor’s notes, insurance forms, clinical trials, and pharmaceutical documents, among others."
    },
    {
      q: "Do you use medically trained translators?",
      a: "Yes. Our medical translations are handled by linguists who have specific backgrounds or certifications in healthcare and medicine."
    },
    {
      q: "Are your medical translations accepted by hospitals and authorities?",
      a: "Absolutely. Our translations are recognized by the DHA (Dubai Health Authority), MOHAP, and all major private hospital groups in the UAE."
    },
    {
      q: "How do you ensure confidentiality of medical documents?",
      a: "We follow strict HIPAA-compliant protocols. All documents are encrypted, and our translators sign legally binding non-disclosure agreements (NDAs)."
    },
    {
      q: "Can I get a medical document translated urgently?",
      a: "Yes, we offer express medical translation services for urgent cases like emergency surgeries or immediate insurance claims."
    }
  ];

  const features = [
    {
      title: "Specialized Experts",
      desc: "Translators with expertise in medical terminology, healthcare systems, and regulatory guidelines.",
      icon: <Stethoscope size={24} />
    },
    {
      title: "Secure & Private",
      desc: "Strict confidentiality protocols complying with international patient data privacy standards.",
      icon: <Lock size={24} />
    },
    {
      title: "Full-Spectrum Service",
      desc: "From clinical trials to discharge summaries and insurance papers, we cover all medical content.",
      icon: <FileText size={24} />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#2b9cb3] text-sm font-bold mb-6">
              <HeartPulse size={16} className="animate-pulse" />
              Healthcare Language Solutions
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Best Dubai <span className="text-[#2b9cb3]">Medical Translation</span> Online
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Medical translation in Dubai plays a critical role in ensuring
                effective communication between healthcare providers and patients. 
                In a city with a multilingual population, precise translation is 
                not just a service—it's a necessity for safety.
              </p>
              
              <p>
                At Smart Word, we offer professional medical translation services
                handled by experts with deep knowledge of both medical terminology
                and linguistic precision. Our translators follow UAE healthcare 
                regulations, ensuring technical accuracy and cultural sensitivity.
              </p>
            </div>

            {/* FEATURE GRID (Mobile/Tablet Friendly) */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="bg-cyan-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#2b9cb3] group-hover:bg-[#2b9cb3] group-hover:text-white transition-all">
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[380px] lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Started</h3>
              <p className="text-slate-400 mb-8 relative z-10">
                Need help with Dubai Medical Translation? Our clinical experts are ready to assist.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  DHA Recognized Translations
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  100% HIPAA Confidentiality
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Medical Subject Matter Experts
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request Free Quote
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Medical Translation FAQ</h2>
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