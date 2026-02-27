import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  FileText, 
  Clock, 
 
  HelpCircle,

  Award,
  DownloadCloud
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PensionCertificate() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a Pension Certificate?",
      a: "A Pension Certificate is an official document issued by the General Pension and Social Security Authority (GPSSA) confirming a UAE National’s pension eligibility, contribution history, and retirement status. It is a vital document for financial and legal verification."
    },
    {
      q: "Who can request a Pension Certificate?",
      a: "Registered UAE National employees, retirees, or authorized legal representatives can request the certificate. It can also be requested by the beneficiaries of a deceased pensioner."
    },
    {
      q: "How long does it take to receive the Pension Certificate?",
      a: "When applied for correctly, electronic certificates are often issued within 1-2 working days. Hard copies or specialized verification letters may take slightly longer depending on GPSSA approval timelines."
    },
    {
      q: "What documents are needed to request a Pension Certificate?",
      a: "Generally, you need a valid Emirates ID, the Pension Account Number, and if applying on behalf of someone else, an official Power of Attorney (POA) or authorization letter."
    },
    {
      q: "Can Smart Word help if I need the certificate urgently?",
      a: "Yes. We specialize in expedited requests, status tracking, and resolving any technical documentation issues that might be delaying your issuance with the authority."
    }
  ];

  const features = [
    {
      title: "Hassle-Free Submissions",
      text: "Complete management of the GPSSA application process from start to finish.",
      icon: <DownloadCloud size={26} />
    },
    {
      title: "Quick Turnaround",
      text: "Direct coordination with authorities to process requests within a few working days.",
      icon: <Clock size={26} />
    },
    {
      title: "Multi-Purpose Validity",
      text: "Certificates prepared for bank loans, embassy requirements, or legal procedures.",
      icon: <Award size={26} />
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
              <FileText size={14} className="animate-pulse" />
              Official GPSSA Document Services
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Request <span className="text-[#2b9cb3]">Pension Certificate</span> Online
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                The Pension Certificate is an official document issued by the <strong>GPSSA</strong> 
                confirming a UAE National’s pension status and contribution details.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Whether for personal records, bank applications, or government transactions, 
                  we help you obtain your certificate accurately and on time without the 
                  administrative stress."
                </p>
              </div>

              <p>
                At Smart Word, we simplify the entire application cycle. We ensure your 
                submissions comply with the latest regulations and follow up with the 
                authorities until your certificate is successfully delivered.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Request Now</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need your official Pension Certificate for a bank loan or visa? Get started today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Official GPSSA Channel
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Status Tracking Support
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Secure Digital Delivery
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request Certificate
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">General Questions</h2>
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