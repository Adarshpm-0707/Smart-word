import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Home, 
  Key, 
  ShieldCheck, 
  FileText, 
  Clock, 
  HelpCircle,
  Globe,
 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RentalAgreement() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why do I need a rental agreement in the UAE?",
      a: "A rental agreement is legally required for official procedures including Ejari registration, visa applications, and tenancy verification. It protects both tenant and landlord under UAE law.",
    },
    {
      q: "What should a rental agreement include?",
      a: "It should include tenancy duration, rent amount, payment schedule, maintenance responsibilities, penalties, renewal clauses, and termination terms.",
    },
    {
      q: "Can Smart Word help with Ejari registration?",
      a: "Yes. We assist with preparing compliant agreements and completing Ejari registration procedures to ensure your contract is officially logged.",
    },
    {
      q: "How long does it take to prepare a rental agreement?",
      a: "Most agreements are drafted within 24–48 hours depending on specific requirements and the documentation provided.",
    },
    {
      q: "Is it mandatory to have the rental agreement in Arabic?",
      a: "Yes. UAE authorities typically require Arabic or bilingual contracts (Arabic & English) for official legal acceptance and Ejari.",
    },
  ];

  const features = [
    {
      title: "Expert Legal Drafting",
      text: "Clear, legally compliant, and customized agreements for your specific property type.",
      icon: <FileText size={26} />
    },
    {
      title: "Fast Processing",
      text: "Documents prepared and delivered quickly to avoid delays in your move-in date.",
      icon: <Clock size={26} />
    },
    {
      title: "Bilingual Support",
      text: "Official Arabic and English contracts as required by RERA and UAE authorities.",
      icon: <Globe size={26} />
    },
    {
      title: "Ejari Assistance",
      text: "Full support for Ejari registration across Dubai and other major emirates.",
      icon: <Key size={26} />
    },
    {
        title: "Dispute Prevention",
        text: "Well-defined maintenance and liability clauses to protect both parties.",
        icon: <ShieldCheck size={26} />
    },
    {
        title: "Commercial & Residential",
        text: "Tailored contracts for retail spaces, offices, apartments, and villas.",
        icon: <Home size={26} />
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
              <Home size={14} className="animate-pulse" />
              Property & Tenancy Services
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Rental Agreement & <span className="text-[#2b9cb3]">Tenancy Contract</span> Services UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                A rental agreement is a legally binding contract between a landlord 
                and a tenant. In the UAE, having a properly registered agreement is 
                essential for <strong>Ejari registration, utility connections, and legal protection</strong>.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Our legal experts ensure that every contract defines duration, 
                  payment schedules, and maintenance responsibilities clearly to 
                  prevent disputes and safeguard your rights."
                </p>
              </div>

              <p>
                Whether you are leasing a residential villa in Dubai or a commercial 
                office space in Abu Dhabi, we provide the bilingual documentation 
                required to meet RERA standards and local municipality regulations.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Your Contract</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Avoid rental disputes and ensure official recognition. Contact our property experts today.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Official Arabic Drafting
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Ejari Compliant Formats
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Residential & Commercial
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tenancy Contract FAQ</h2>
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
                  <span className="flex-shrink-0 ml-4">
                    <ChevronDown 
                        className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#2b9cb3]' : ''}`} 
                        size={20} 
                    />
                  </span>
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