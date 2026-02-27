import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  UserPlus, 

  ShieldCheck, 
  HelpCircle,
  
  Zap,

  ClipboardList
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterEmployee() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "When should a new Emirati employee be registered with GPSSA?",
      a: "Employers are legally required to register new UAE National employees within 30 days of their joining date. Failure to do so results in administrative fines and backdated contribution liabilities."
    },
    {
      q: "What documents are required for new employee registration?",
      a: "Standard documents include a valid Emirates ID, passport copy, signed employment contract (MOHRE or Freezone), salary certificate, and the company's trade license."
    },
    {
      q: "Who is responsible for submitting the registration application?",
      a: "The responsibility lies solely with the employer. Even if the employee has been registered before with a previous company, a new registration must be initiated by the current employer."
    },
    {
      q: "What happens if the registration is delayed or missed?",
      a: "Late registration triggers a financial penalty for every month of delay. Additionally, the company will be marked as non-compliant, which may affect their ability to hire more staff."
    },
    {
      q: "Can Smart Word register multiple Emirati employees at once?",
      a: "Yes. We specialize in bulk onboarding and registration management for companies undergoing rapid Emiratisation growth, ensuring every file is 100% compliant from day one."
    }
  ];

  const features = [
    {
      title: "Seamless Documentation",
      text: "Verification and submission of Emirates IDs, contracts, and required salary paperwork.",
      icon: <ClipboardList size={26} />
    },
    {
      title: "HR & Payroll Support",
      text: "Integration of new Emirati hires into your payroll and GPSSA pension portals.",
      icon: <Zap size={26} />
    },
    {
      title: "Corporate Compliance",
      text: "Reliable partner for UAE-based SMEs and global corporations hiring UAE Nationals.",
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
              <UserPlus size={14} className="animate-pulse" />
              Emirati Onboarding & Enrollment
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Register New <span className="text-[#2b9cb3]">Emirati Employees</span> with GPSSA
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Registering new Emirati employees under the General Pension and Social Security Authority 
                (GPSSA) is a legal obligation for all UAE employers. This ensures that UAE National 
                staff are covered for <strong>retirement, disability, and social security</strong>.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "At Smart Word, we streamline the entire registration process, 
                  ensuring accuracy and timely submission within the mandatory 30-day 
                  window of the employee's joining date."
                </p>
              </div>

              <p>
                Once registered, employees become eligible for monthly pension contributions. 
                Our team handles the verification of employment details and documentation 
                submission, providing you with full compliance and peace of mind.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Enrollment</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Recently hired a UAE National? Ensure they are registered correctly to avoid late penalties.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  30-Day Deadline Compliance
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Labour Contract Verification
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Official GPSSA Enrollment
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Enroll Employee Now
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Registration FAQ</h2>
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