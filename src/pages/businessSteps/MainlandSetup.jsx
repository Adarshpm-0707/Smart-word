import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  Building2, 

  ShieldCheck, 
  HelpCircle,

  Zap,
  MapPin,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Mainland() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is a mainland company in the UAE?",
      a: "A mainland company allows businesses to operate anywhere in the UAE and internationally. Licensed by the Department of Economic Development (DED), it provides the flexibility to work with government contracts, local markets, and the private sector without geographical restrictions."
    },
    {
      q: "Can I get 100% ownership of my mainland company?",
      a: "Yes. Following recent UAE business law updates, foreign investors can now enjoy 100% ownership in many commercial and industrial sectors without the requirement of a local Emirati sponsor for most activities."
    },
    {
      q: "How long does it take to set up a mainland company?",
      a: "The timeline typically ranges from 3 to 10 working days, depending on the chosen business activity and the speed of government approvals (DED, MOA signing, etc.)."
    },
    {
      q: "Do I need a physical office for a mainland company?",
      a: "Yes, a physical office space (or a verified 'Sustainability Desk' for startups) is a mandatory requirement for obtaining a DED mainland license in the UAE."
    },
    {
      q: "What types of business can I start on the mainland?",
      a: "You can start almost any type of business including retail, construction, consulting, hospitality, trading, and specialized engineering services."
    }
  ];

  const features = [
    {
      title: "Market Access",
      text: "Operate freely across all emirates and tap directly into the local UAE market.",
      icon: <MapPin className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "100% Ownership",
      text: "Enjoy full control of your business in many sectors without needing a local sponsor.",
      icon: <Award className="text-[#2b9cb3]" size={26} />
    },
    {
      title: "Government Contracts",
      text: "Eligible to bid for and secure lucrative UAE government tenders and projects.",
      icon: <Building2 className="text-[#2b9cb3]" size={26} />
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
              <Zap size={14} className="animate-pulse" />
              DED Licensed Business Setup
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Mainland <span className="text-[#2b9cb3]">Business Setup</span> in UAE
            </h1>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Setting up a mainland company in the UAE offers immense opportunities for 
                entrepreneurs and investors. A mainland business license allows you to 
                operate anywhere within the UAE and internationally without restrictions.
              </p>
              
              <div className="bg-white border-l-4 border-[#2b9cb3] p-6 rounded-r-2xl shadow-sm my-8 border border-slate-100">
                <p className="italic text-slate-700 font-medium leading-relaxed">
                  "Mainland businesses are licensed by the Department of Economic Development (DED). 
                  With recent updates, foreign investors can now enjoy 100% ownership in many 
                  sectors without needing a local sponsor."
                </p>
              </div>

              <p>
                From initial licensing and documentation to final government approvals, we 
                manage every step of the registration process to ensure a smooth, 
                hassle-free experience for your brand.
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
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Get Started</h3>
              <p className="text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
                Need help with Mainland Business Setup? Contact us today for a free consultation.
              </p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  DED License Handling
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  100% Foreign Ownership
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-[#2b9cb3]/20 p-1 rounded-full"><Check size={14} className="text-[#2b9cb3]" /></div>
                  Full PRO Services
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
             <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Key Setup Benefits</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Mainland Setup FAQ</h2>
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