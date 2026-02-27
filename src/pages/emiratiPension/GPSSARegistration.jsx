import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  ShieldCheck, 
  UserPlus, 
 
  HelpCircle,
  Briefcase,
  AlertCircle,

} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GPSSARegistration() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is GPSSA employer registration mandatory for all companies in the UAE?",
      a: "Yes. Any company (Mainland or Freezone) employing UAE Nationals must register as an employer with GPSSA and comply with federal pension contribution rules.",
    },
    {
      q: "What documents are needed for employer registration with GPSSA?",
      a: "Typical requirements include your Trade License, Memorandum of Association (MOA), Emirates IDs of shareholders, and the labour contracts/Emirates IDs of the Emirati employees.",
    },
    {
      q: "How much should employers contribute to an Emirati employee’s pension?",
      a: "Currently, employers contribute 15% of the contribution account salary, while the employee contributes 5%, and the UAE government provides additional support (for the 20% total).",
    },
    {
      q: "What happens if a company fails to register its Emirati employees with GPSSA?",
      a: "Failure or delay in registration can lead to significant administrative fines, back-dated contribution liabilities, and risks to the company's compliance standing with the Ministry of Human Resources and Emiratisation (MOHRE).",
    },
    {
      q: "Can Smart Word assist with multiple employee registrations?",
      a: "Yes. we provide end-to-end management, from the initial employer file opening to individual employee registration and monthly contribution support.",
    },
  ];

  const features = [
    {
      title: "End-to-End Compliance",
      text: "Full support including document preparation, portal setup, and file submission.",
      icon: <ShieldCheck size={26} />
    },
    {
      title: "Penalty Mitigation",
      text: "Avoid expensive fines and delays with accurate, timely registration handling.",
      icon: <AlertCircle size={26} />
    },
    {
      title: "Workforce Strategy",
      text: "Customized assistance tailored to your specific corporate and workforce structure.",
      icon: <Briefcase size={26} />
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
              Pension & Social Security Compliance
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              GPSSA Employer <span className="text-[#2b9cb3]">Registration</span> UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Employer registration with the General Pension and Social Security Authority (GPSSA)
                is a mandatory process for all companies in the UAE employing Emirati nationals.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "It ensures legal compliance with UAE federal labour laws and contributes to the
                  social security and long-term financial wellbeing of UAE National employees."
                </p>
              </div>

              <p>
                At Smart Word, we make this process seamless and fully compliant—helping employers 
                register efficiently to avoid legal or financial risks while building long-term 
                security for their Emirati workforce.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Register Now</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Starting your Emiratisation journey? Ensure your GPSSA file is opened correctly.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Employer Account Opening
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Employee Enrollment Support
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Ongoing Compliance Audit
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Contact Us Now
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