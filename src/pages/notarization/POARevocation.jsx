import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 

  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  FileText,
  Scale,
  Languages,
  UserX
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function POARevocationCancellation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a Declaration of Cancelling POA?",
      a: "It is a legal document used to formally revoke a previously granted Power of Attorney, ensuring the appointed representative no longer has authority to act on your behalf.",
    },
    {
      q: "Is notarization mandatory for cancelling a POA in the UAE?",
      a: "Yes. To legally terminate the powers granted in a notarized POA, you must sign a 'Revocation of POA' in front of a UAE Public Notary. This ensures the cancellation is officially recorded and legally binding.",
    },
    {
      q: "What information is needed in the declaration?",
      a: "You will need the original POA reference number, the date it was notarized, the name of the Notary Public office where it was issued, and the full identification details of both the Principal (you) and the Agent.",
    },
    {
      q: "Does the original POA holder need to be present?",
      a: "No. The Principal (the person who granted the POA) can revoke it unilaterally. You do not need the consent or presence of the agent to cancel their authority, but you must officially notify them once the revocation is notarized.",
    },
    {
      q: "How long does the cancellation process take?",
      a: "The drafting and certified translation take approximately one working day. The notarization appointment itself is typically completed within 24 hours of document preparation.",
    },
  ];

  const features = [
    {
      title: "Legally Compliant Drafting",
      text: "Revocation documents prepared with all required legal details per Dubai Notary Public standards.",
      icon: <FileText className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Arabic Translation",
      text: "Certified Arabic or bilingual translations mandatory for acceptance by UAE notary public offices.",
      icon: <Languages className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Fast Notarization Support",
      text: "Same-day preparation and scheduling assistance to complete the revocation without delays.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Secure & Confidential",
      text: "Your sensitive legal information is protected through strict confidentiality protocols.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Authority Recognition",
      text: "Revocation documents accepted by all UAE courts, banks, and government departments.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Agent Notification Support",
      text: "Guidance on the legal requirements for formally notifying the agent of the cancellation.",
      icon: <UserX className="text-[#2b9cb3]" size={24} />
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
              Legal Authority Protection
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              POA <span className="text-[#2b9cb3]">Revocation & Cancellation</span> in Dubai
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                A Declaration of Cancelling Power of Attorney (POA) is an official legal document 
                used to revoke authority previously granted. It ensures that your appointed 
                representative can no longer act on your behalf.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we ensure your revocation is clear, legally enforceable, 
                  and properly notarized by the Dubai Notary Public, protecting your legal 
                  and financial interests immediately."
                </p>
              </div>

              <p>
                Whether revoking a general or special POA, our experienced team manages 
                the entire cycle—from drafting and translation to final notarization—ensuring 
                full compliance with UAE legal requirements.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Revoke Authority</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need to cancel a Power of Attorney today? Our legal experts will handle the notarization and notification requirements.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Dubai Notary Public Sync
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Certified Bilingual Revocation
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Urgent 24-Hour Service
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES GRID ================= */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center lg:text-left"
          >
            Service Highlights
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Cancellation FAQ</h2>
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
          className="mt-20 bg-[#2b9cb3] rounded-[2rem] text-center p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Need Secure POA Cancellation?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Our legal specialists ensure your power of attorney is revoked correctly 
              so your interests are protected without delay.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Contact Our Experts <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}