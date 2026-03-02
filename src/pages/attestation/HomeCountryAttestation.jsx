import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Globe2, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  DollarSign,
  Landmark,
  FileSearch
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeCountryAttestation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is Home Country Attestation?",
      a: "Home Country Attestation is the process of verifying documents by authorities in your country of origin (such as the Ministry of Education or Ministry of Foreign Affairs) before they are submitted to the UAE Embassy for final legalization.",
    },
    {
      q: "Why is Home Country Attestation required?",
      a: "It is required to prove to the UAE government that your documents are genuine and were issued by a recognized authority in your home country. This is mandatory for visas, job applications, and legal residency.",
    },
    {
      q: "What types of documents require Home Country Attestation?",
      a: "Most official documents require this, including Degree certificates, Diplomas, Marriage certificates, Birth certificates, and Commercial Power of Attorney papers.",
    },
    {
      q: "How long does the process take?",
      a: "The timeline varies by country, typically ranging from 5 to 15 working days. Factors include the specific department requirements in your home country and UAE Embassy processing times.",
    },
    {
      q: "Can I do Home Country Attestation without returning to my home country?",
      a: "Yes. Smart Word provides end-to-end services where we handle the international logistics and coordination with authorities in your home country on your behalf.",
    },
  ];

  const features = [
    {
      title: "Global Support",
      text: "End-to-end attestation support from your home country directly to the UAE MOFA.",
      icon: <Globe2 className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Expert Knowledge",
      text: "Extensive experience with specific documentation requirements for over 100+ countries.",
      icon: <FileSearch className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Fast Turnaround",
      text: "Optimized processing times and secure document handling via tracked international couriers.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Real-Time Updates",
      text: "Transparent process with timely updates and tracking so you know exactly where your documents are.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Transparent Pricing",
      text: "Affordable, competitive pricing with no hidden charges, covering all international fees.",
      icon: <DollarSign className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Embassy Coordination",
      text: "Direct coordination with UAE Embassies worldwide to ensure correct stamp placement.",
      icon: <Landmark className="text-[#2b9cb3]" size={24} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= HERO & HEADER ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start mb-24">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} />
              Global Legalization Experts
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Quick Home Country <br className="hidden md:block" /> <span className="text-[#2b9cb3]">Embassy Attestation</span> for UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Home Country Attestation is the essential first step in validating 
                documents issued abroad for official use in the UAE. Whether for 
                employment, education, or family sponsorship, your documents must 
                be authenticated in their country of origin.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border-y border-r border-slate-100">
                <p className="italic text-slate-700 font-medium">
                  "We manage the complex multi-stage process—from local notary 
                  verification to Ministry of External Affairs and UAE Embassy 
                  stamps—ensuring your papers are 100% compliant."
                </p>
              </div>

              <p>
                Our team simplifies international attestation by managing every 
                precision detail, avoiding local bureaucratic delays, and 
                providing you with a secure, hands-free experience.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[400px] lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-[30px] p-8 lg:p-10 shadow-2xl relative overflow-hidden text-white border border-white/10">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#2b9cb3]/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Your Attestation</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need documents verified from your home country? Our international team is ready to assist you today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="bg-[#2b9cb3]/20 p-1.5 rounded-full text-[#2b9cb3]"><Check size={14} /></div>
                  UAE Embassy Coordination
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="bg-[#2b9cb3]/20 p-1.5 rounded-full text-[#2b9cb3]"><Check size={14} /></div>
                  MEA / MOFA Origin Support
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="bg-[#2b9cb3]/20 p-1.5 rounded-full text-[#2b9cb3]"><Check size={14} /></div>
                  Tracked International Courier
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95 relative z-10"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-black text-slate-900 mb-12"
          >
            Why Choose Our Global Service?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 hover:border-[#2b9cb3]/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all group"
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300 text-[#2b9cb3]">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="mt-24 max-w-4xl mx-auto lg:mx-0 mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-cyan-100 p-2.5 rounded-xl text-[#2b9cb3]">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Home Country Attestation FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index ? 'bg-white shadow-lg border-cyan-100' : 'bg-transparent border-slate-200 hover:border-slate-300'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-sm md:text-base transition-colors ${openIndex === index ? 'text-[#2b9cb3]' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-[#2b9cb3]' : ''}`} 
                    size={20} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
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
          className="mt-20 mb-14 bg-[#2b9cb3] rounded-[40px] text-center p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-cyan-500/20"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Need International Attestation Support?
            </h2>
            <p className="mb-10 text-white/90 text-lg leading-relaxed">
              Don't let distance delay your plans. Our global network handles the 
              verification in your home country while you stay in the UAE.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2b9cb3] px-10 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-50 transition-all hover:scale-105 shadow-xl"
            >
              Start Your Process <ArrowRight size={20} />
            </Link>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40 blur-3xl pointer-events-none"></div>
        </motion.div>

      </div>
    </div>
  );
}