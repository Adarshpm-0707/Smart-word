import React, { useState } from "react";
import { Check, ChevronDown, MessageSquare, Globe, Zap, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

export default function NormalTranslation() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate(); // 2. Initialize navigate function

  const faqs = [
    {
      q: "What is considered a normal translation?",
      a: "Normal translation refers to non-certified translations for general purposes such as personal documents, business content, marketing materials, websites, and emails."
    },
    {
      q: "Is a stamp or certification included in normal translations?",
      a: "Normal translation does not include legal certification or stamping. It is intended for general communication and informational use."
    },
    {
      q: "How fast can I get my normal translation done?",
      a: "Delivery time depends on document length, but most translations are completed quickly while maintaining accuracy."
    },
    {
      q: "What languages do you offer translation in?",
      a: "We support Arabic, English, French, Spanish, Hindi, Chinese, Russian, Urdu and many other global languages."
    },
    {
      q: "Can I use normal translation for visa or legal applications?",
      a: "For official submissions, certified translation is recommended. Normal translation is mainly for non-official usage."
    }
  ];

  const features = [
    {
      title: "Native Experts",
      desc: "Skilled native translators with linguistic accuracy and cultural understanding.",
      icon: <Globe className="text-teal-600" size={24} />
    },
    {
      title: "Versatile Solutions",
      desc: "Perfect for digital content, product descriptions, CVs, and presentations.",
      icon: <Zap className="text-teal-600" size={24} />
    },
    {
      title: "Global Reach",
      desc: "Multilingual capabilities including Arabic, English, French, and 50+ more.",
      icon: <Shield className="text-teal-600" size={24} />
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans text-gray-900 mt-14">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        
        {/* HEADER & HERO SECTION */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <nav className="flex items-center gap-2 text-teal-600 font-bold tracking-wide uppercase text-xs mb-4">
              <span className="w-8 h-[2px] bg-teal-600"></span>
              Service Details
            </nav>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Affordable <span className="text-teal-600">Normal Translation</span> Services in Dubai
            </h1>

            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Normal translation plays a vital role in facilitating everyday
                communication across different languages in Dubai’s multicultural
                environment. From general documents to business communication and
                personal content.
              </p>
              
              <p>
                Our translators are native speakers with deep linguistic expertise
                and a strong grasp of subject-specific terminology. Whether you’re
                an individual or a business, our goal is to help you communicate
                seamlessly across borders.
              </p>
            </div>

            {/* KEY FEATURES GRID */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTACT CARD (Sticky on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[380px] lg:sticky lg:top-24"
          >
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"></div>
              
              <MessageSquare className="text-teal-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Get Started Today</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Need help with Affordable Normal Translation Services in Dubai? 
                Our experts are ready to assist you.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-teal-500/20 p-1 rounded-full"><Check size={14} className="text-teal-400" /></div>
                  Fast Turnaround Time
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="bg-teal-500/20 p-1 rounded-full"><Check size={14} className="text-teal-400" /></div>
                  Native Language Experts
                </li>
              </ul>

              {/* 3. Added onClick with navigate function */}
              <button 
                onClick={() => navigate("/contact")}
                className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-95"
              >
                Contact Us Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-20 lg:mt-32 max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Common Questions</h2>
            <p className="text-gray-500 mb-8">Everything you need to know about our normal translation services.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-teal-200"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-teal-600" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {item.a}
                      </div>
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