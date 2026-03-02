import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  FileEdit, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  Settings,
  
  Languages,
  Gavel
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MOAAmendment() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is an MOA amendment, and when is it needed?",
      a: "An MOA amendment refers to legal changes made to the original Memorandum of Association. It is required when altering business activities, ownership percentages (share transfer), capital structure, company name, or management clauses.",
    },
    {
      q: "Do all changes to the company require a notarized amendment?",
      a: "Yes. In the UAE, any structural change that affects the foundational terms of the company must be documented via an Addendum to the MOA and notarized by a UAE Public Notary to be legally binding.",
    },
    {
      q: "How long does the MOA amendment process take?",
      a: "Typically, the drafting and translation take 1 working day. The notarization and update with the DED or Free Zone authority can be completed within 2–3 business days, provided all partners are available for signing.",
    },
    {
      q: "Is Arabic translation mandatory for MOA amendments?",
      a: "Absolutely. For the Dubai Notary Public to authenticate an amendment, the document must be in Arabic or a bilingual English-Arabic format prepared by a certified legal translator.",
    },
    {
      q: "Can Smart Word handle coordination with government authorities?",
      a: "Yes. We provide end-to-end support, including coordinating with the DED (Department of Economy), Ministry of Justice, and Free Zone authorities to ensure your license is updated after the notarization.",
    },
  ];

  const features = [
    {
      title: "Expert Legal Drafting",
      text: "Preparation of precise MOA amendments for ownership, activity, or structural changes.",
      icon: <FileEdit className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Legal Translation",
      text: "Mandatory Arabic or bilingual formatting accepted by DED, courts, and UAE authorities.",
      icon: <Languages className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Fast & Efficient Processing",
      text: "Quick turnaround to implement operational changes without licensing delays or rejections.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Full Notary Support",
      text: "Management of the entire process, from scheduling appointments to assisting during signings.",
      icon: <Gavel className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Regulatory Compliance",
      text: "Amendments prepared in strict accordance with the latest UAE Commercial Companies Law.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Structural Optimization",
      text: "Guidance on updating management clauses and capital contributions for future growth.",
      icon: <Settings className="text-[#2b9cb3]" size={24} />
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
              Corporate Amendment Expert
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              MOA <span className="text-[#2b9cb3]">Amendment & Company</span> Structure Change
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                As your business evolves, structural or ownership changes require 
                updates to your Memorandum of Association (MOA). An amendment is 
                legally required when modifying activities, partners, or capital.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we ensure all amendments comply with UAE Commercial 
                  Companies Law and are properly notarized through the Dubai Notary 
                  Public for seamless licensing updates."
                </p>
              </div>

              <p>
                We assist businesses throughout the entire process—from drafting 
                the addendum to coordinating approvals with the DED and Free Zone 
                authorities—ensuring a compliant restructuring.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Update Your License</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Adding a partner or changing business activities? Our legal team handles the notarization for you.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  DED & Free Zone Approved
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Certified Bilingual Drafting
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Express Notary Coordination
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">MOA Amendment FAQ</h2>
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
              Need Reliable Corporate Updates?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Our legal drafting and translation team ensures your MOA amendments are 
              authenticated correctly so your business growth proceeds smoothly.
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