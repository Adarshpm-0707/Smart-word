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
  
  UserCheck,
  Building2,
  Languages
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NOCServices() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a No Objection Certificate (NOC)?",
      a: "A NOC is a formal declaration confirming that a company, sponsor, or individual has no objection to another party carrying out a specific action such as employment transfer, visa processing, or legal procedures.",
    },
    {
      q: "Is notarization of a NOC mandatory in Dubai?",
      a: "Yes, for many official transactions. If the NOC is to be submitted to government departments (like RTA or DED), banks, or courts, it generally requires notarization by a UAE Public Notary to verify the issuer's identity and signature.",
    },
    {
      q: "Can you help draft and translate the NOC?",
      a: "Absolutely. We provide expert drafting to ensure the legal terminology is correct and offer mandatory certified Arabic translation services as required by UAE Notary Public offices.",
    },
    {
      q: "Who can issue a NOC in the UAE?",
      a: "A NOC can be issued by a company (employer), a visa sponsor (e.g., husband or father), or a local service agent, depending on the specific legal requirement of the requesting authority.",
    },
    {
      q: "How long does it take to notarize a NOC?",
      a: "The drafting and translation take approximately one working day. The notarization itself is often completed within 24 hours once the issuer is available to sign before the Notary Public.",
    },
  ];

  const features = [
    {
      title: "Legally-Compliant Drafting",
      text: "Accurate NOCs clearly outlining consent and purpose to ensure 100% authority acceptance.",
      icon: <FileText className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Arabic Translation",
      text: "Mandatory legal translation services to meet the language requirements of UAE notary offices.",
      icon: <Languages className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Fast Turnaround Times",
      text: "Streamlined processing allowing for preparation and notarization within 1–2 working days.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Full Notary Assistance",
      text: "Complete management from document review to scheduling appointments at the Dubai Notary Public.",
      icon: <Building2 className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Authority Approved",
      text: "NOCs accepted by immigration, licensing authorities, embassies, courts, and corporate entities.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Personalized Support",
      text: "Dedicated legal consultants to guide you on specific wording for different UAE departments.",
      icon: <UserCheck className="text-[#2b9cb3]" size={24} />
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
              Verified Documentation Support
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Professional <span className="text-[#2b9cb3]">NOC Services</span> in UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                A No Objection Certificate (NOC) is an essential legal document required for 
                various transactions in the UAE, from employment transfers to business 
                licensing. It provides official consent for specific legal or administrative actions.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we handle the end-to-end NOC cycle—from legally valid 
                  drafting and certified translation to final notarization—ensuring 
                  your documents are ready for government approval."
                </p>
              </div>

              <p>
                Whether you need a NOC for a family visa, a new trade license, or 
                sponsorship transfer, our team ensures your documentation follows 
                the strict compliance standards of the UAE authorities.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Authorize Your Request</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need a notarized NOC for an employer or government entity? Get expert drafting and notarization today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  UAE Public Notary Approved
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Certified Bilingual Format
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Express 24-Hour Processing
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
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
              Need Accurate NOC Documentation?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Our legal specialists ensure your NOC is authenticated correctly 
              so your personal or business requests can proceed without delays.
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