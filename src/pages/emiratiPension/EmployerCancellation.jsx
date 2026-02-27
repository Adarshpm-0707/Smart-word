import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  
  FileCheck, 
  ShieldCheck, 
  HelpCircle,
  XCircle,
  AlertCircle,

  
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GPSSACancellation() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "When should an employer cancel its GPSSA registration?",
      a: "An employer must cancel GPSSA registration when business operations cease, the commercial license is formally cancelled, or the company no longer employs any UAE National staff."
    },
    {
      q: "What documents are needed to cancel employer registration with GPSSA?",
      a: "Typically, you need the license cancellation certificate from DED/Freezone, final settlement statements for UAE National employees, and a formal cancellation request letter addressed to the Authority."
    },
    {
      q: "Can a company cancel registration if it still has UAE National employees?",
      a: "No. All UAE National employees must be de-registered from the company’s GPSSA account and their end-of-service contributions must be fully paid before the employer account can be closed."
    },
    {
      q: "What happens if GPSSA cancellation is not completed after closure?",
      a: "Failure to cancel can lead to the accumulation of monthly contribution liabilities and significant administrative fines. It also prevents the formal closure of the company file with other government entities."
    },
    {
      q: "Can Smart Word manage the full cancellation process on our behalf?",
      a: "Yes. Our compliance specialists handle everything from checking for outstanding payments to document submission and obtaining the final GPSSA closure certificate."
    }
  ];

  const features = [
    {
      title: "Full Compliance Audit",
      text: "We audit your status, verify cleared contributions, and prepare your business for a clean exit.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Document Management",
      text: "We compile and submit all required clearance letters and license cancellation documents to GPSSA.",
      icon: <FileCheck className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Penalty Mitigation",
      text: "Proper deregistration prevents ongoing liabilities and avoids expensive administrative fines.",
      icon: <XCircle className="text-[#2b9cb3]" size={26} />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <AlertCircle size={14} className="animate-pulse" />
              GPSSA Compliance & De-registration
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Employer <span className="text-[#2b9cb3]">Registration Cancellation</span> UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                If a company ceases operations or no longer employs UAE Nationals, it must formally 
                cancel its employer registration with the <strong>General Pension and Social Security 
                Authority (GPSSA)</strong>.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "This process ensures that business obligations and pension contributions are properly 
                  concluded, helping you avoid future liabilities and ongoing monthly charges."
                </p>
              </div>

              <p>
                Our specialists manage the complete cancellation process—reviewing compliance status, 
                preparing required documentation, submitting official requests, and obtaining final 
                approval for a clean and compliant business exit.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Cancellation</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Closing your business or de-registering UAE staff? Contact our GPSSA experts for a free consultation.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Complete File Closure
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Contribution Settlement Check
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Official GPSSA Clearance
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

        {/* ================= KEY FEATURES SECTION ================= */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
             <ShieldCheck className="text-[#2b9cb3]" size={32} />
             <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Key Cancellation Benefits</h2>
          </motion.div>

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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Cancellation FAQ</h2>
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