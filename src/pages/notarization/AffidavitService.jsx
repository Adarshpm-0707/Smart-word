import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Languages, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  Scale,
  FileText,
  Gavel
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AffidavitArabicTranslation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is an affidavit?",
      a: "An affidavit is a formal written statement sworn under oath and used as legal evidence for various governmental, legal, or official purposes in the UAE.",
    },
    {
      q: "When is Arabic translation required in the UAE?",
      a: "Since Arabic is the official language of the UAE, any document issued in another language must be legally translated into Arabic to be accepted by UAE courts, the Ministry of Justice, and other government departments.",
    },
    {
      q: "Are certified translations mandatory for court submissions?",
      a: "Yes. UAE courts and judicial authorities only accept translations performed by licensed legal translators certified by the UAE Ministry of Justice.",
    },
    {
      q: "How long does affidavit drafting and translation take?",
      a: "Standard drafting and certified translation typically take 1–2 business days. We also offer express services for urgent legal requirements.",
    },
    {
      q: "Can you assist with notarization after translation?",
      a: "Absolutely. We provide end-to-end support, including coordinating with the Notary Public to ensure your translated affidavit is signed, stamped, and legally finalized.",
    },
  ];

  const features = [
    {
      title: "Legal Standard Drafting",
      text: "Professionally drafted affidavits prepared according to specific UAE judicial and notary standards.",
      icon: <FileText className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Arabic Translation",
      text: "Legal translations accepted by all UAE courts, ministries, and government authorities.",
      icon: <Languages className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Precise Legal Terminology",
      text: "Accuracy handled by experienced legal translators familiar with UAE civil and sharia law terms.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Express Processing",
      text: "Fast turnaround times with secure and confidential handling of your sensitive legal documents.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "End-to-End Assistance",
      text: "Complete support including drafting, translation, notarization, and final legal submission.",
      icon: <Gavel className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Privacy Guaranteed",
      text: "Strict confidentiality protocols to ensure your personal and legal data remains protected.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO & HEADER ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} />
              Certified Legal Translation
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Affidavit & <span className="text-[#2b9cb3]">Certified Arabic</span> Translation in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                An affidavit is a formal written statement used to confirm facts 
                under oath. In the UAE, these are critical for court submissions, 
                immigration, and business documentation.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "As Arabic is the official language of the UAE, we ensure your 
                  legal declarations are accurately translated and certified to 
                  meet the strict standards of UAE judicial authorities."
                </p>
              </div>

              <p>
                Our team provides expert drafting and translation, ensuring correct 
                legal formatting and full compliance with Notary Public and 
                Ministry of Justice requirements.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[380px] lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Your Translation</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need a legal affidavit drafted or translated for court? Our MOJ-certified translators are ready to help.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  MOJ Certified Translators
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Notary-Ready Formatting
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Urgent 24-Hour Delivery
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center lg:text-left"
          >
            Why Choose Our Legal Translation?
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Translation & Affidavit FAQ</h2>
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

        {/* ================= FINAL CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-14 bg-[#2b9cb3] rounded-[2rem] text-center p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Need Accurate Legal Translation?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Our certified legal translators ensure your affidavits are 100% 
              compliant with UAE government and judicial requirements.
            </p>
            <Link
              to="/contact"
              className="bg-white  text-[#2b9cb3] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Get Started Now <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}