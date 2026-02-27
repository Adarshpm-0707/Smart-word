import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  History, 
  Calculator, 
 
  HelpCircle,
 
  Zap,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LegacyContribution() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a Legacy Contribution Proforma?",
      a: "It is a backdated pension contribution statement submitted to GPSSA to cover missed or delayed contributions for Emirati employees during previous months or years of service. It ensures their pension records are accurate and up to date."
    },
    {
      q: "When is a legacy proforma required?",
      a: "It is required when an employer has missed previous monthly deadlines, during company mergers/acquisitions, or when historical salary discrepancies must be corrected to match actual payouts."
    },
    {
      q: "How are legacy contributions calculated?",
      a: "Calculations are based on the GPSSA-mandated percentages (Employer, Employee, and Government shares) applicable during the specific historical period of the missed contribution, applied to the employee's contribution account salary at that time."
    },
    {
      q: "What happens if a company doesn’t submit a legacy proforma?",
      a: "The company will remain non-compliant with federal law, incurring monthly late-payment interest (usually 0.1% per day) and potentially blocking the issuance of new work permits or license renewals."
    },
    {
      q: "Can Smart Word manage legacy proformas for multiple employees?",
      a: "Yes. We handle bulk reconciliation for large workforces, performing deep audits of payroll data versus GPSSA portal records to identify and resolve all contribution gaps."
    }
  ];

  const features = [
    {
      title: "Historical Data Review",
      text: "Comprehensive audit of payroll records to ensure 100% compliance with GPSSA rules.",
      icon: <History size={26} />
    },
    {
      title: "Precision Calculation",
      text: "Error-free contribution breakdowns based on official GPSSA historical percentages.",
      icon: <Calculator size={26} />
    },
    {
      title: "Fast Resolution",
      text: "Compliant submissions designed to resolve pending contribution issues and interest accumulation.",
      icon: <Zap size={26} />
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
              <BarChart3 size={14} className="animate-pulse" />
              Pension Data Reconciliation
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Legacy <span className="text-[#2b9cb3]">Contribution Proforma</span> Services UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Legacy Contribution Proforma Creation is a critical process for employers 
                to regularize pension contribution gaps or missed payments for Emirati employees, 
                as mandated by the <strong>GPSSA</strong>.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "When contributions are delayed, GPSSA requires a backdated proforma 
                  to reconcile unpaid amounts and ensure your company remains in good 
                  legal standing with the federal authority."
                </p>
              </div>

              <p>
                At Smart Word, we specialize in analyzing historical salary data and 
                employment records to validate each data point, ensuring correct employer, 
                employee, and government share calculations are submitted accurately.
              </p>
            </div>

            {/* FEATURES GRID (Responsive) */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="bg-cyan-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-[#2b9cb3] group-hover:bg-[#2b9cb3] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Resolve Gaps</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Have missed pension contributions or discrepancies? Our auditors are here to help.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Historical Payroll Auditing
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Interest & Penalty Calculation
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Official GPSSA Submission
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request Free Audit
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="mt-24 max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-cyan-100 p-2 rounded-lg">
              <HelpCircle className="text-[#2b9cb3]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Legacy Proforma FAQ</h2>
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