import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  ShieldCheck, 
 
  Lock, 
  Anchor, 
 
  HelpCircle,

  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Offshore() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is an Offshore company in the UAE?",
      a: "An Offshore company is a legal entity established in a tax-free jurisdiction (like JAFZA or RAK ICC) to conduct business internationally. It is primarily used for asset protection, tax planning, and holding international investments."
    },
    {
      q: "Can an Offshore company conduct business within the UAE?",
      a: "No, Offshore companies are strictly prohibited from trading within the UAE local market. They are designed for international operations, though they can hold shares in other UAE companies or own specific real estate."
    },
    {
      q: "Do I get a UAE residency visa with an Offshore company?",
      a: "Unlike Mainland and Freezone setups, an Offshore company formation does not entitle the owners or employees to a UAE residency visa."
    },
    {
      q: "Do I need a physical office for an Offshore setup?",
      a: "No physical office is required. The company uses the address of its registered agent (like Smart Word) as its official legal address in the UAE."
    },
    {
      q: "Which jurisdictions are popular for Offshore setup in UAE?",
      a: "The most prominent jurisdictions are Jebel Ali Free Zone (JAFZA) and Ras Al Khaimah International Corporate Centre (RAK ICC)."
    }
  ];

  const features = [
    {
      title: "100% Tax Free",
      text: "Enjoy zero corporate and personal income tax on all international earnings.",
      icon: <DollarSign size={26} />
    },
    {
      title: "Full Confidentiality",
      text: "Offshore structures offer high levels of privacy for shareholders and directors.",
      icon: <Lock size={26} />
    },
    {
      title: "Asset Protection",
      text: "Ideal for holding global assets, intellectual property, and real estate.",
      icon: <ShieldCheck size={26} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO & CONTENT SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <Anchor size={14} />
              International Business Setup
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Secure & Global <span className="text-[#2b9cb3]">Offshore Business</span> Setup
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Offshore company formation in the UAE is a powerful strategy for international 
                business owners seeking tax optimization and robust asset protection. 
                These entities are designed to operate globally while benefiting from 
                the UAE's prestigious reputation.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "With an Offshore setup, you gain a tax-exempt legal structure that allows 
                  you to manage international investments and conduct trade with complete 
                  privacy and minimal administrative burden."
                </p>
              </div>

              <p>
                Whether you are looking to hold global real estate, protect intellectual 
                property, or facilitate international trade, our experts handle the 
                entire registration process with the highest level of confidentiality.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Start Your Setup</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm">
                Ready to protect your assets and go global? Contact our experts for a free consultation.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  JAFZA & RAK ICC Agent
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Multi-Currency Accounts
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  100% Tax Efficient
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Request Free Quote
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Offshore Setup FAQ</h2>
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