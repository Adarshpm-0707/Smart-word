import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Landmark, 
  ShieldCheck, 
  CreditCard, 
  
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CompanyBankAccount() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "Regulatory Compliance",
      desc: "Comprehensive support for KYC (Know Your Customer) and AML (Anti-Money Laundering) documentation.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Trusted Partnerships",
      desc: "Direct access to top-tier UAE local banks and international banking institutions.",
      icon: <Landmark className="text-[#2b9cb3]" size={24} />
    },
    {
      title: "Merchant Solutions",
      desc: "Guidance on setting up payment gateways and multi-currency merchant accounts for global trade.",
      icon: <CreditCard className="text-[#2b9cb3]" size={24} />
    }
  ];

  const faqs = [
    {
      q: "What documents are required to open a company bank account in the UAE?",
      a: "Documents usually include a valid Trade License, Memorandum of Association (MOA), Shareholder passport copies with residence visas, Emirates ID, 6 months of personal/corporate bank statements, and a utility bill as proof of address."
    },
    {
      q: "Can a non-resident open a company bank account in the UAE?",
      a: "Yes, non-residents can open corporate accounts, but the compliance checks are more rigorous. Some banks may require a minimum balance or proof of local business presence (like an office or local transactions)."
    },
    {
      q: "How long does it take to open a corporate bank account in the UAE?",
      a: "The timeline typically ranges from 2 to 4 weeks. This depends on the company's activity, the nationality of the shareholders, and the specific bank's internal compliance review speed."
    },
    {
      q: "Can I open a company bank account for a free zone or offshore company?",
      a: "Absolutely. Most UAE banks cater to Freezone companies. Offshore companies can also open accounts, though they are subject to higher 'High-Risk' category checks by central bank regulations."
    },
    {
      q: "What if my application gets rejected by the bank?",
      a: "If rejected, we analyze the bank's feedback (if provided) and help you apply to alternative banks that better suit your specific business profile and risk category."
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER SECTION ================= */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">

          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <nav className="flex items-center gap-2 text-[#2b9cb3] font-black tracking-widest uppercase text-xs mb-4">
              <span className="w-8 h-[2px] bg-[#2b9cb3]"></span>
              Corporate Banking
            </nav>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              Open <span className="text-[#2b9cb3]">Company Bank</span> Account in the UAE
            </h1>

            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>
                Opening a corporate bank account in the UAE is a critical step in
                establishing and running a successful business. Whether you are
                setting up a mainland company, free zone entity, or offshore
                company, having a functional and compliant business bank account
                is essential for managing financial operations.
              </p>
              <p>
                The process involves strict regulatory checks and compliance with UAE 
                banking KYC and AML policies. Our experts simplify this complex journey—from 
                selecting the right bank to preparing documents and coordinating approvals—ensuring 
                a reliable and hassle-free onboarding experience.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 rounded-[30px] p-8 shadow-2xl text-white relative overflow-hidden lg:sticky lg:top-32"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2b9cb3]/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Streamline Banking</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed relative z-10">
              Stop waiting weeks for bank responses. Let our consultants manage your corporate bank account application for faster approval.
            </p>

            <ul className="space-y-4 mb-8 relative z-10">
              {["Multi-currency Accounts", "KYC Pre-assessment", "Banking Interviews"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                  <div className="bg-[#2b9cb3] p-1 rounded-full"><Check size={12} /></div>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#23879b] transition-all active:scale-95 relative z-10"
            >
              Consult an Expert
            </Link>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12 text-center md:text-left">
            Why Partner With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[30px] shadow-lg shadow-slate-200/50 border border-slate-50 transition-all group"
              >
                <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-bold transition-colors ${openIndex === index ? 'text-[#2b9cb3]' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full transition-all ${openIndex === index ? 'bg-[#2b9cb3] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
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