import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Handshake, 
  Scale, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  FileCheck,
  HelpCircle,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PartnershipAgreement() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is the purpose of a partnership agreement?",
      a: "A partnership agreement defines the business relationship between partners, including roles, responsibilities, ownership structure, and profit-sharing arrangements to prevent disputes.",
    },
    {
      q: "Is a partnership agreement mandatory in the UAE?",
      a: "While not always legally mandatory for all license types, a written agreement is strongly recommended to ensure compliance, bank account opening, and legal protection for all partners.",
    },
    {
      q: "What should a partnership agreement include?",
      a: "It typically includes capital contributions, profit distribution, management authority, dispute resolution clauses, exit terms, and liability provisions.",
    },
    {
      q: "Can Smart Word help with attestation of partnership agreements?",
      a: "Yes. We provide end-to-end assistance with notarization and attestation so your agreement is legally recognized by UAE courts and authorities.",
    },
    {
      q: "Can I amend an existing partnership agreement?",
      a: "Yes. We provide legal revision services to reflect new partners, ownership changes, or updated business structures within your existing framework.",
    },
  ];

  const features = [
    {
      title: "UAE Law Compliant",
      text: "Legally compliant drafting aligned with UAE Commercial Law and business structures.",
      icon: <Scale size={26} />
    },
    {
      title: "Tailored Structures",
      text: "Custom agreements defining partner roles, duties, and exit expectations clearly.",
      icon: <Users size={26} />
    },
    {
      title: "End-to-End Support",
      text: "Full assistance from initial consultation to final government attestation.",
      icon: <FileCheck size={26} />
    },
    {
      title: "Rapid Turnaround",
      text: "Efficient drafting ensuring your business setup or modification is never delayed.",
      icon: <Clock size={26} />
    },
    {
      title: "Strict Confidentiality",
      text: "Secure handling of your sensitive business and ownership information.",
      icon: <ShieldCheck size={26} />
    },
    {
      title: "Strategic Consulting",
      text: "Advisory on profit-sharing and management structures for long-term stability.",
      icon: <Briefcase size={26} />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-100">
              <Handshake size={14} className="animate-pulse" />
              Corporate Governance Solutions
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Expert <span className="text-[#2b9cb3]">Partnership Agreement</span> Services UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                A Partnership Agreement is the blueprint of your business. It is a 
                legally binding contract that defines the terms, responsibilities, 
                and profit-sharing structure between two or more entities.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "In the UAE, a well-drafted agreement is essential for establishing 
                  clear understanding among partners and ensuring legal compliance 
                  with local Free Zone or Onshore authorities."
                </p>
              </div>

              <p>
                Our experts prepare customized agreements covering capital 
                contributions, decision-making authority, and exit strategies, 
                ensuring your business is built on a solid legal foundation.
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
                Ready to structure your partnership correctly? Contact our legal drafting team today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  MOJ-Approved Drafting
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  UAE Notary Support
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Conflict Resolution Clauses
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

        {/* ================= KEY FEATURES SECTION ================= */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-12"
          >
             Core Service Features
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
                  <div className="text-[#2b9cb3] group-hover:text-white">
                    {feature.icon}
                  </div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Partnership FAQ</h2>
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