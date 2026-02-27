import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  RefreshCw, 
  
  ShieldCheck, 
  HelpCircle,

  FileEdit,
  ClipboardCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UpdateEmployeeData() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why is updating employee data with GPSSA important?",
      a: "Accurate records are the foundation of pension calculations. Updating data promptly ensures that contributions are correct, preventing legal penalties and avoiding delays when employees eventually claim their retirement benefits."
    },
    {
      q: "What employee details can be updated?",
      a: "You can update salary changes (annual increments or promotions), job titles, employment status (active to resigned/transferred), and personal details like contact info or marital status."
    },
    {
      q: "When should employers update employee information?",
      a: "Under GPSSA regulations, any change in salary or employment status should be reported immediately. Salary revisions specifically should be updated at the start of each calendar year or upon the effective date of a promotion."
    },
    {
      q: "Can incorrect data affect pension benefits?",
      a: "Yes. Outdated salary records can lead to underpayment of contributions, resulting in financial liabilities for the company and reduced monthly pension payouts for the employee."
    },
    {
      q: "Can Smart Word manage updates on behalf of companies?",
      a: "Absolutely. We act as your specialized PRO and compliance partner, handling the portal entries, document uploads, and follow-ups with the authority to ensure records are successfully mirrored."
    }
  ];

  const features = [
    {
      title: "Accurate Record Syncing",
      text: "We ensure salary revisions and employment changes are correctly reflected in GPSSA systems.",
      icon: <RefreshCw size={26} />
    },
    {
      title: "Compliance Assurance",
      text: "Avoid administrative fines and reporting issues by maintaining 100% accurate pension data.",
      icon: <ShieldCheck size={26} />
    },
    {
      title: "Full Lifecycle Support",
      text: "From drafting salary certificates to digital submission and final approval monitoring.",
      icon: <ClipboardCheck size={26} />
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
              <FileEdit size={14} className="animate-pulse" />
              GPSSA Records Management
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Update Employee Data & <span className="text-[#2b9cb3]">Employment Status</span>
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Maintaining accurate records is essential for GPSSA compliance. Any change 
                in <strong>salary structure, job title, or status</strong> must be updated 
                promptly to ensure correct pension contribution calculations.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Our service helps UAE businesses avoid contribution errors and 
                  administrative delays while maintaining transparent, audit-ready records 
                  for your Emirati workforce."
                </p>
              </div>

              <p>
                At Smart Word, we manage the entire update process—from document preparation 
                to digital submission—ensuring that your organization remains fully aligned 
                with the latest UAE pension regulations.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Data Audit</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Has your employee's salary changed or have they been promoted? Update their GPSSA profile today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Salary Revision Updates
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Employment Status Changes
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Compliance Gap Analysis
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Modify Records Now
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Record Update FAQ</h2>
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