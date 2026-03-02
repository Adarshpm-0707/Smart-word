import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
 
  Globe, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  DollarSign,
  FileCheck,
  UserCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UAEEmbassyAttestation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is UAE Embassy/Consulate Attestation?",
      a: "It is the process of legalizing documents at the UAE Embassy or Consulate in the country where the document was issued, making it valid for use in the UAE.",
    },
    {
      q: "Which documents require UAE Embassy attestation?",
      a: "Almost all official documents issued outside the UAE require this, including Degree certificates, Marriage and Birth certificates, Power of Attorney, and Commercial Invoices or Agreements.",
    },
    {
      q: "Is embassy attestation required before MOFA attestation?",
      a: "Yes. For documents issued outside the UAE, the UAE Embassy stamp from the home country is a mandatory prerequisite before the UAE Ministry of Foreign Affairs (MOFA) can provide the final local attestation.",
    },
    {
      q: "How long does the UAE Embassy attestation process take?",
      a: "The duration depends on the specific embassy's jurisdiction and current processing times, typically ranging from 5 to 10 working days. We offer express services for several key global regions.",
    },
    {
      q: "Do I need to be physically present for embassy attestation?",
      a: "No. Our team manages the entire submission and collection process through our global network, so you do not need to travel back to your home country.",
    },
  ];

  const features = [
    {
      title: "Global Embassy Network",
      text: "Expertise in navigating specific embassy and consulate procedures across 100+ countries.",
      icon: <Globe className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Fast-Track Legalization",
      text: "Optimized processing for all document types with industry-leading turnaround times.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Transparent Pricing",
      text: "Affordable and clear pricing structure with no hidden fees for embassy or courier charges.",
      icon: <DollarSign className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Secure Document Handling",
      text: "Complete confidentiality and document safety through tracked, high-security logistics.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Dedicated Support",
      text: "Real-time status updates and personalized customer support throughout the process.",
      icon: <UserCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "MOFA Integration",
      text: "Seamless transition from Embassy stamps to final UAE MOFA authentication in Dubai.",
      icon: <FileCheck className="text-[#2b9cb3]" size={24} />
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
              Verified Global Attestation
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              UAE <span className="text-[#2b9cb3]">Embassy Attestation</span> & Consulate Services
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                UAE Embassy or Consulate Attestation is a crucial step in 
                legalizing documents issued abroad for official use in the UAE. 
                This authentication confirms the legitimacy of the document for 
                employment, education, and business setup.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we manage the entire international workflow—from 
                  local notarization in the issuing country to the UAE Embassy seal—ensuring 
                  your documents are ready for final MOFA approval."
                </p>
              </div>

              <p>
                Our team acts as your dedicated representative, managing all 
                paperwork and embassy submissions on your behalf, ensuring 
                compliance with specific international diplomatic standards.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Your Embassy Stamp</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need documents verified from an overseas UAE Embassy? Our specialists are ready to help you now.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Official Embassy Submission
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Consulate Authentication
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  End-to-End MOFA Sync
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Book Free Consultation
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
            Why Choose Our Embassy Services?
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Embassy Attestation FAQ</h2>
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
              Need International Embassy Support?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
              Don't let diplomatic paperwork slow you down. Our global experts handle 
              the embassy verification so you can stay focused on your goals in the UAE.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
            >
              Start Legalization Now <ArrowRight size={18} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}