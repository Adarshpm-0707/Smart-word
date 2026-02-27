import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Gavel, 
  ShieldCheck, 
  Languages, 

  UserCheck,
  HelpCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PowerOfAttorneyTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do I need a certified translation for Power of Attorney in Dubai?",
      a: "Yes. If your POA is in a language other than Arabic, it must be translated by a certified translator approved by the UAE Ministry of Justice to be legally valid in the UAE."
    },
    {
      q: "What languages do you offer POA translation in?",
      a: "We offer POA translation in Arabic, English, Russian, French, German, Urdu, Turkish, Farsi, and over 50 global languages."
    },
    {
      q: "How long does it take to translate a Power of Attorney?",
      a: "Standard turnaround is 24 hours. For urgent needs, we provide express services where your POA can be translated within a few hours."
    },
    {
      q: "Is the translated POA valid for use in UAE courts and embassies?",
      a: "Yes, our translations carry the official stamp of Ministry of Justice-approved translators, making them valid for all UAE courts, notaries, and embassies."
    },
    {
      q: "Can you assist with notarization and attestation of the POA?",
      a: "Absolutely. We provide a complete solution including translation, notarization, and attestation at the Ministry of Foreign Affairs (MOFA)."
    }
  ];

  const features = [
    {
      title: "MOJ Licensed",
      desc: "Linguists licensed by the UAE Ministry of Justice for legal validity.",
      icon: <Gavel size={26} />
    },
    {
      title: "Data Protection",
      desc: "Strict confidentiality protocols to protect your personal and legal data.",
      icon: <ShieldCheck size={26} />
    },
    {
      title: "50+ Languages",
      desc: "Expertise in Arabic, English, Russian, French, and 50+ other languages.",
      icon: <Languages size={26} />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <UserCheck size={14} />
              Approved Legal Provider
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Best <span className="text-[#2b9cb3]">Power of Attorney</span> Translation in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                In Dubai, a Power of Attorney (POA) is a critical legal document
                that authorizes someone to act on your behalf. Whether you're managing
                property, signing contracts, or representing in court, the 
                <strong> legal validity</strong> of the translation is mandatory.
              </p>
              
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm border-l-4 border-l-[#2b9cb3] my-8">
                <p className="text-slate-700 italic">
                  "At Smart Word, we offer official POA translation services 
                  approved by the UAE Ministry of Justice, ensuring your documents 
                  are accepted by courts, embassies, and government authorities."
                </p>
              </div>

              <p>
                We translate all types of POA documents including general, special,
                real estate, and business POAs into Arabic, English, and over 50 
                global languages with 100% legal accuracy.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Translation</h3>
              <p className="text-slate-400 mb-8 relative z-10">
                Need help with Power of Attorney translation in Dubai? Contact our experts for a free consultation.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Ministry of Justice Approved
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Acceptable by UAE Notaries
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Confidential & Secure
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">POA Translation FAQ</h2>
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