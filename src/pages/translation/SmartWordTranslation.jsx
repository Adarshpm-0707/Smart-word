import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, FileText, ShieldCheck, Globe, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SmartWordTranslation() {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open

  const faqs = [
    {
      q: "What types of financial documents do you translate?",
      a: "We translate complex financial documents, business reports, commercial agreements, investor presentations, and corporate communications with precision and professionalism."
    },
    {
      q: "Are your translations accepted by banks and financial institutions in the UAE?",
      a: "Yes, our translations are legally recognized and accepted by all major banks, auditors, and government entities across the UAE."
    },
    {
      q: "Can you handle confidential business data securely?",
      a: "Security is our priority. We sign NDAs and use encrypted channels to ensure your corporate data remains 100% confidential."
    },
    {
      q: "Do you offer translation for cross-border business deals?",
      a: "Absolutely. We specialize in international business terminology and regional regulatory standards to support global expansions."
    },
    {
      q: "How quickly can you deliver a financial translation?",
      a: "Turnaround depends on volume, but we offer express services for urgent board meetings or legal deadlines."
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#2b9cb3] text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2b9cb3]"></span>
              </span>
              Service Details
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Smart Word <span className="text-[#2b9cb3]">Translation</span>
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                In Dubai’s fast-paced and globally connected business environment,
                accurate financial and business translation services are critical
                for maintaining trust, compliance, and clarity.
              </p>
              <p className="border-l-4 border-[#2b9cb3] pl-6 italic bg-slate-50 py-4 rounded-r-xl">
                "Financial and business translations demand more than just linguistic
                accuracy — they require deep domain knowledge and technical vocabulary."
              </p>
              <p>
                Whether you're presenting to investors, preparing audit reports, or 
                expanding globally, our translations maintain the integrity, tone, 
                and compliance of your original documents.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR (Sticky on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[400px] lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Started</h3>
              <p className="text-slate-400 mb-8 relative z-10">
                Ready to translate your business documents with 100% accuracy?
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-white/10 p-1 rounded-full"><Check size={16} className="text-[#2b9cb3]" /></div>
                  Certified & Notarized Options
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-white/10 p-1 rounded-full"><Check size={16} className="text-[#2b9cb3]" /></div>
                  99.9% Accuracy Guarantee
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
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center lg:text-left"
          >
            Why Choose Our Expertise?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Globe size={28} />}
              text="Native-speaking professionals experienced in finance and business sectors."
              delay={0.1}
            />
            <FeatureCard 
              icon={<ShieldCheck size={28} />}
              text="Deep domain knowledge and understanding of regional and international regulatory standards."
              delay={0.2}
            />
            <FeatureCard 
              icon={<FileText size={28} />}
              text="Accepted by banks, auditors, and government entities in the UAE and abroad."
              delay={0.3}
            />
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="mt-24 max-w-4xl mx-auto lg:mx-0 mb-14">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle className="text-[#2b9cb3]" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function FeatureCard({ icon, text, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#2b9cb3]/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all group"
    >
      <div className="w-14 h-14 bg-cyan-50 text-[#2b9cb3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <p className="text-slate-600 font-medium leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}