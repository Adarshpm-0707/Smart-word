import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  FileCheck, 
  Calculator, 
  HeartHandshake, 
 
  HelpCircle,

  LogOut
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EndOfService() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a Pension End of Service Application?",
      a: "It is the official request submitted to the GPSSA to process and release pension benefits owed to a UAE National after employment ends due to retirement, resignation, disability, or death. It ensures the settlement of all accumulated rights."
    },
    {
      q: "Who is eligible to apply for the End of Service pension?",
      a: "UAE National employees registered under GPSSA who have completed the minimum required service period or meet specific eligibility criteria for retirement, medical discharge, or other qualifying exit scenarios."
    },
    {
      q: "What documents are required for the application?",
      a: "Standard documentation includes the Emirates ID, the formal termination or resignation letter, final salary certificates, service period verification, and updated GPSSA contribution records from the employer."
    },
    {
      q: "How long does it take to process the application?",
      a: "While processing time varies based on GPSSA verification cycles, most applications are processed within 7 to 15 working days once all correct documentation has been submitted and reconciled."
    },
    {
      q: "Can Smart Word assist with pension claims for deceased employees?",
      a: "Yes. We provide specialized support for families and beneficiaries, managing the sensitive documentation, legal heir requirements, and follow-up procedures to ensure benefits are released correctly."
    }
  ];

  const features = [
    {
      title: "Document Verification",
      text: "Full verification of termination letters, service periods, and GPSSA contribution data.",
      icon: <FileCheck size={26} />
    },
    {
      title: "Payout Reconciliation",
      text: "Accurate review of monthly contributions to ensure final pension amounts are 100% correct.",
      icon: <Calculator size={26} />
    },
    {
      title: "Comprehensive Support",
      text: "Tailored processing for all scenarios including retirement, medical discharge, or resignation.",
      icon: <HeartHandshake size={26} />
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
              <LogOut size={14} className="animate-pulse" />
              Employment Exit Compliance
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Pension <span className="text-[#2b9cb3]">End of Service</span> Application
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                The Pension End of Service Application is a critical step for UAE Nationals 
                concluding their employment in either the public or private sector.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Whether due to retirement or resignation, we ensure that every detail—from 
                  service period validation to contribution reconciliation—is handled 
                  professionally and fully compliant with GPSSA regulations."
                </p>
              </div>

              <p>
                At Smart Word, we act as your trusted partner to secure rightful pension 
                payouts. Our experts manage the complexities of documentation and 
                GPSSA coordination, ensuring a stress-free transition for both 
                employers and employees.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Settlement</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Ready to process a pension exit? Ensure your application is filed correctly with the authority.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  GPSSA Payout Optimization
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Employment History Audit
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Official Authority Follow-up
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Contact Our Experts
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Application FAQ</h2>
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