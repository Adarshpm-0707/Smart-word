import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  ShieldCheck, 
  Search, 
  Zap, 
  FileText, 
  RefreshCcw,
  HelpCircle,
  Copyright
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrademarkRegistration() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What can be registered as a trademark in the UAE?",
      a: "A trademark can include logos, brand names, slogans, symbols, product packaging, and other unique brand identifiers that distinguish your business from competitors."
    },
    {
      q: "How long does it take to register a trademark in the UAE?",
      a: "The typical timeline is 3 to 6 months, depending on the Ministry of Economy's examination period and the mandatory 30-day publication period for third-party oppositions."
    },
    {
      q: "Is UAE trademark registration valid internationally?",
      a: "Trademark registration is territorial. While a UAE registration protects you within the country, you can use it as a basis for international filing via the Madrid Protocol."
    },
    {
      q: "How long is a UAE trademark valid?",
      a: "A registered trademark in the UAE is valid for 10 years from the filing date and can be renewed indefinitely for additional 10-year periods."
    },
    {
      q: "What happens if someone copies my registered trademark?",
      a: "With a valid certificate, you can take legal action through the Ministry of Economy or UAE courts to stop the infringement and claim damages."
    }
  ];

  const features = [
    {
      text: "Expert legal knowledge of UAE trademark laws ensuring accurate filings.",
      icon: <ShieldCheck className="text-[#2b9cb3]" size={24} />
    },
    {
      text: "Comprehensive trademark search to avoid conflicts and rejections.",
      icon: <Search className="text-[#2b9cb3]" size={24} />
    },
    {
      text: "Fast and reliable process designed to save your business time and effort.",
      icon: <Zap className="text-[#2b9cb3]" size={24} />
    },
    {
      text: "Full document guidance from initial search to final certificate issuance.",
      icon: <FileText className="text-[#2b9cb3]" size={24} />
    },
    {
      text: "Ongoing support including renewals and brand protection monitoring.",
      icon: <RefreshCcw className="text-[#2b9cb3]" size={24} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO & HEADER ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#2b9cb3] text-xs font-bold uppercase tracking-widest mb-6">
              <Copyright size={14} />
              Intellectual Property Services
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Best <span className="text-[#2b9cb3]">Trademark Registration</span> & Brand Protection
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Trademark registration is a vital step in protecting your brand
                identity and intellectual property in the UAE. It legally 
                distinguishes your business name, logo, and slogan from others 
                in the market.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8">
                <p className="italic text-slate-700">
                  "At Smart Word, we provide expert guidance through the Ministry 
                  of Economy’s registration process, ensuring your brand is 
                  safeguarded against infringement or misuse."
                </p>
              </div>

              <p>
                Our team handles the entire lifecycle: from the initial 
                availability search and application submission to final 
                publication and issuance of the trademark certificate.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Protect Your Brand</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm">
                Ready to secure your trademark in the UAE? Contact our experts for a free consultation.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Ministry of Economy Compliant
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  End-to-End Filing Support
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Renewals & Objection Support
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-[#2b9cb3] text-white py-4 rounded-xl font-bold hover:bg-[#23879b] hover:shadow-lg hover:shadow-cyan-500/30 transition-all active:scale-95"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center lg:text-left"
          >
            Key Service Features
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
                  {feature.icon}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Trademark FAQ</h2>
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