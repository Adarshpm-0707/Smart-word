import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Gavel, 
  Scale, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Award,
  ArrowRight,
  DollarSign,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MOJAttestation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is MOJ attestation and when is it required?",
      a: "MOJ attestation is the process of legalizing official and legal documents through the UAE Ministry of Justice. It is required for documents like power of attorney, legal affidavits, contracts, and other notarized papers to be accepted for legal use within the UAE.",
    },
    {
      q: "Which documents require MOJ attestation?",
      a: "Common documents include Power of Attorney (POA), legal affidavits, partnership agreements, court orders, and any document that has been notarized by a Public Notary for judicial use.",
    },
    {
      q: "Do I need MOFA attestation after MOJ attestation?",
      a: "Yes, in most cases. MOJ verifies the legal standing of the document, while MOFA (Ministry of Foreign Affairs) provides the final legalization required for government and international use.",
    },
    {
      q: "How long does MOJ attestation take with Smart Word?",
      a: "The timeline typically ranges from 1–3 working days. We provide express processing options for urgent legal requirements to ensure your deadlines are met.",
    },
    {
      q: "Can I get MOJ attestation without visiting the office?",
      a: "Absolutely. We offer end-to-end service including document collection and delivery, managing the entire Ministry process on your behalf.",
    },
  ];

  const features = [
    {
      title: "Legal Specialist Team",
      text: "End-to-end attestation for complex legal documents including POA, affidavits, and court orders.",
      icon: <Gavel className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Express Processing",
      text: "Fast-tracked Ministry handling with regular real-time status updates throughout the workflow.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Transparent Pricing",
      text: "Competitive and affordable pricing with no hidden costs and a clear fee structure.",
      icon: <DollarSign className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Secure Handling",
      text: "Guaranteed confidentiality and high-security document logistics for your sensitive legal papers.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Expert Guidance",
      text: "Our experienced support team guides you through the judicial requirements for every document type.",
      icon: <Scale className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Compliance Check",
      text: "Thorough review of your legal documents to ensure they meet the specific standards of the Ministry of Justice.",
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
              Judicial Attestation Expert
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Quick Expert <span className="text-[#2b9cb3]">MOJ Attestation</span> Services in UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                MOJ (Ministry of Justice) attestation is a vital process that 
                verifies the authenticity of legal documents for use within the UAE. 
                It ensures that documents like powers of attorney and affidavits are 
                recognized by all government and administrative authorities.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700 font-medium">
                  "At Smart Word, we simplify the judicial legalization process, 
                  handling all the coordination with the Ministry of Justice to ensure 
                  your documents are legally ready for official use."
                </p>
              </div>

              <p>
                Whether you’re dealing with legal agreements, court documents, or 
                official declarations, we ensure your documents are properly 
                attested, minimizing delays and ensuring acceptance.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Your MOJ Seal</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Ensure your legal documents meet UAE judicial standards. Contact our MOJ consultants today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Ministry of Justice Approved
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Legal Document Verification
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Secure Document Logistics
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
            Why Choose Our MOJ Service?
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Ministry of Justice FAQ</h2>
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
              Need Fast Legal Attestation?
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Ensure your documents are legally recognized within the UAE without 
              any judicial delays or complications.
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