import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  FileText, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  Languages,
  Scale,
  Building2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MinutesOfMeeting() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What are Minutes of Meeting (MoM)?",
      a: "Minutes of Meeting are official written summaries of discussions, decisions, and resolutions made during business or organizational meetings such as board meetings or shareholder gatherings.",
    },
    {
      q: "When is notarization of MoM required in the UAE?",
      a: "Notarization is required for corporate actions that must be filed with government bodies, such as changing company directors, increasing capital, amending the Memorandum of Association (MOA), or during company liquidation.",
    },
    {
      q: "Can Smart Word help draft the meeting minutes?",
      a: "Yes. Our legal drafting team can assist in structuring your MoM to ensure all necessary legal phrasing and shareholder details are included as per UAE Commercial Companies Law.",
    },
    {
      q: "Is Arabic translation necessary for notarization?",
      a: "Absolutely. For any MoM to be notarized by the Dubai Notary Public or accepted by the DED, it must be translated into legal Arabic by a certified translator.",
    },
    {
      q: "How long does the notarization process take?",
      a: "With our assistance, the drafting and notarization process typically takes 1–2 business days, provided all shareholders are available for signing or have authorized representatives.",
    },
  ];

  const features = [
    {
      title: "Legally Compliant Drafting",
      text: "Records accepted by UAE authorities with accurate legal phrasing for resolutions.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Legal Translation",
      text: "Professional translation and notarization meeting all UAE government language standards.",
      icon: <Languages className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Quick Turnaround",
      text: "Delivery of fully drafted and notarized MoM documents within 1–2 business days.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "End-to-End Notary Support",
      text: "Full coordination of appointments and signing sessions with the Notary Public.",
      icon: <Building2 className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Authority Approved",
      text: "Documents valid for UAE ministries, banks, courts, free zones, and embassies.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Corporate Formatting",
      text: "Precisely formatted records for board meetings, AGMs, and extraordinary meetings (EGM).",
      icon: <FileText className="text-[#2b9cb3]" size={24} />
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
              Corporate Legal Support
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Professional <span className="text-[#2b9cb3]">Minutes of Meeting</span> Services UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Minutes of Meeting (MoM) are formal written records documenting 
                discussions, decisions, and resolutions made during official 
                company meetings. Notarizing these minutes is essential for 
                corporate approvals and regulatory submissions in Dubai.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we ensure your MoM documents are legally valid, 
                  precisely translated, and officially notarized for use with 
                  the DED, banks, and free zone authorities."
                </p>
              </div>

              <p>
                Our team works closely with corporate clients to draft clear, 
                compliant meeting records that adhere to the UAE Commercial 
                Companies Law, avoiding delays in your business administrative 
                processes.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Your MoM Notarized</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need official records for shareholder resolutions or bank approvals? Let our experts handle the legalities.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  DED & Free Zone Approved
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Legal Arabic Translation
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Fast Notary Public Sync
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Meeting Minutes FAQ</h2>
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
          className="mt-20 mb-14 bg-[#2b9cb3] rounded-3xl text-center p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Need Reliable Corporate Documentation?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Our legal drafting and translation team ensures your company minutes are 
              authenticated correctly without administrative delays.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}