import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Building2, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,

  Scale,
  Languages,
  Gavel
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CompanyLiquidationResolution() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a company liquidation resolution?",
      a: "A liquidation resolution is a formal document signed by shareholders or directors confirming the decision to dissolve a company. It includes the appointment of a liquidator and outlines the official closure process for the licensing authority.",
    },
    {
      q: "Is notarization of the resolution mandatory for liquidation in Dubai?",
      a: "Yes. For Mainland companies (DED) and most Free Zones, the resolution to liquidate and appoint a liquidator must be notarized by a UAE Public Notary to be legally recognized.",
    },
    {
      q: "Can Smart Word help with drafting and translation of the resolution?",
      a: "Absolutely. We draft the resolution to meet the specific legal phrasing required by UAE Commercial Law and provide the mandatory certified Arabic translation needed for the Notary Public.",
    },
    {
      q: "How long does it take to notarize a liquidation resolution?",
      a: "With our streamlined process, we can complete the drafting, translation, and notarization typically within 1–2 working days.",
    },
    {
      q: "Do all shareholders need to be present for the notarization?",
      a: "Generally, yes. All shareholders must sign before the Notary Public. However, if a shareholder is outside the UAE, they can provide a notarized and attested Power of Attorney to a representative to sign on their behalf.",
    },
  ];

  const features = [
    {
      title: "Precise Legal Drafting",
      text: "Professionally structured resolutions clearly stating intent to liquidate and liquidator appointment.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Certified Arabic Translation",
      text: "Mandatory legal translations accepted by UAE notary public offices and licensing authorities.",
      icon: <Languages className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Quick Turnaround",
      text: "Streamlined processing ensuring notarization is completed promptly, often within 1–2 working days.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "End-to-End Notary Support",
      text: "Complete assistance from shareholder signature coordination to final notarization guidance.",
      icon: <Building2 className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Government Approved",
      text: "Resolutions fully accepted by DED, Free Zones, UAE Courts, and the Ministry of Economy.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Compliance Verification",
      text: "Ensuring all documentation aligns with the latest UAE regulatory standards for business dissolution.",
      icon: <Gavel className="text-[#2b9cb3]" size={24} />
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
              Company Dissolution Expert
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Company <span className="text-[#2b9cb3]">Liquidation Resolution</span> & Notarization
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                A Company Liquidation Resolution is a formal decision made by shareholders 
                to legally close a business entity in the UAE. Proper notarized 
                documentation is essential to dissolve the company legally and 
                cancel the trade license.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we handle the entire legal closure documentation cycle—from 
                  precise drafting to coordination with the Notary Public—ensuring your 
                  liquidation is compliant with UAE Commercial Law."
                </p>
              </div>

              <p>
                We support clients across all Emirates and Free Zones, preparing 
                resolutions that are immediately accepted by the DED, Free Zone 
                authorities, and the Ministry of Economy.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Dissolve Your Entity</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need to finalize a business closure? Let our legal team manage your notarization requirements.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Liquidator Appointment Support
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Certified Bilingual Drafting
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  DED & Free Zone Approved
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Liquidation FAQ</h2>
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
              Need Reliable Liquidation Support?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Our legal team ensures your liquidation resolutions are authenticated 
              correctly so your business closure can proceed smoothly.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Book Consultation <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}