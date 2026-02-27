import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Scale, 
  Wallet, 
 
  ShieldCheck, 
  HelpCircle,
  
  Briefcase,
  Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoanAgreement() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a loan agreement?",
      a: "A loan agreement is a legally binding contract between a lender and borrower that outlines loan terms such as repayment schedule, interest, penalties, and obligations of both parties.",
    },
    {
      q: "Is a written loan agreement required in the UAE?",
      a: "Yes. A properly drafted agreement protects both parties and helps avoid disputes by clearly defining repayment terms and legal responsibilities.",
    },
    {
      q: "Can you draft agreements for personal and business loans?",
      a: "Absolutely. We prepare customized agreements for personal loans, corporate lending, shareholder loans, and private financing arrangements.",
    },
    {
      q: "Do you provide bilingual agreements?",
      a: "Yes. Agreements can be drafted in English and Arabic to comply with UAE legal and court requirements, ensuring they are accepted by local authorities.",
    },
    {
      q: "Can the agreement be notarized or legalized?",
      a: "Yes. We provide full assistance with the notarization and legalization processes to ensure the agreement is fully enforceable before UAE courts.",
    },
  ];

  const features = [
    {
      title: "Legal Compliance",
      text: "Agreements fully aligned with UAE Civil and Commercial laws.",
      icon: <Scale size={26} />
    },
    {
      title: "Financial Protection",
      text: "Clear repayment terms, penalties, and protection clauses for both parties.",
      icon: <Wallet size={26} />
    },
    {
      title: "Bilingual Drafting",
      text: "Professional Arabic & English versions suitable for all UAE authorities.",
      icon: <Globe size={26} />
    },
    {
      title: "Enforcement Support",
      text: "Full support with notarization and legalization for total enforceability.",
      icon: <ShieldCheck size={26} />
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
              <Briefcase size={14} className="animate-pulse" />
              Corporate & Private Financing
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Loan Agreement <span className="text-[#2b9cb3]">Drafting & Legalization</span> UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                A loan agreement is a formal contract between a lender and a borrower. 
                In the UAE, a properly structured document is vital to protect 
                investments and define <strong>repayment schedules, interest terms, 
                and legal consequences</strong>.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "At Smart Word, we specialize in drafting legally sound agreements 
                  tailored to UAE regulations, minimizing financial risk and 
                  guaranteeing clarity for all parties involved."
                </p>
              </div>

              <p>
                Whether you are managing personal lending or complex corporate 
                financing, our experts handle the drafting, notarization, and 
                legalization to make your agreement fully enforceable.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Secure Your Loan</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Ensure your financing is legally protected. Contact our legal drafting team today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Bilingual Legal Validity
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  UAE Notary Support
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Confidential Handling
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Loan Agreement FAQ</h2>
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